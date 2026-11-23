import requests
from typing import Any, Mapping, Optional
from fastapi import HTTPException

try:
    from curl_cffi import requests as _cn
    from curl_cffi.requests.exceptions import RequestException as _CnExc
except ImportError:
    _cn = None
    _CnExc = None

IMPERSONATE = "chrome131"

_BROWSER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate",
}


def cn_get(
    url: str,
    headers: Optional[Mapping[str, str]] = None,
    timeout: float = 15,
) -> Any:
    try:
        if _cn is not None:
            return _cn.get(
                url,
                headers=dict(headers or {}),
                timeout=timeout,
                impersonate=IMPERSONATE,
            )
        merged = dict(_BROWSER_HEADERS)
        merged.update(headers or {})
        return requests.get(url, headers=merged, timeout=timeout)
    except _CnExc as e:
        raise requests.RequestException(str(e)) from e


def cn_raise_for_status(res: Any) -> Any:
    try:
        res.raise_for_status()
        return res
    except requests.RequestException:
        raise
    except Exception as e:
        if _CnExc is not None and isinstance(e, _CnExc):
            err = requests.HTTPError(_describe_error(res, str(e)))
            err.response = res
            raise err from e
        raise


def cn_json(res: Any, context: str = "Response CheatNetwork") -> Any:
    try:
        return res.json()
    except ValueError:
        raise HTTPException(status_code=502, detail=_not_json_detail(res, context))


def _snippet(res: Any) -> str:
    try:
        return " ".join((res.text or "").split())[:200]
    except Exception:
        return ""


def _content_type(res: Any) -> str:
    try:
        return res.headers.get("content-type") or ""
    except Exception:
        return ""


def _status(res: Any) -> Any:
    return getattr(res, "status_code", "?")


def _is_challenge(res: Any) -> bool:
    low = _snippet(res).lower()
    return any(
        marker in low
        for marker in ("just a moment", "cf-chl", "cf_chl", "challenge-platform", "enable javascript and cookies")
    )


def _describe_error(res: Any, fallback: str) -> str:
    status = _status(res)
    if _is_challenge(res):
        return (
            f"CheatNetwork menolak request dari server "
            f"(Cloudflare challenge, HTTP {status})"
        )
    snippet = _snippet(res)
    if snippet:
        return f"HTTP {status}: {snippet}"
    return fallback


def _not_json_detail(res: Any, context: str) -> str:
    status = _status(res)
    if _is_challenge(res):
        return (
            f"{context} bukan JSON: CheatNetwork menolak request dari server "
            f"(Cloudflare challenge, HTTP {status})"
        )
    snippet = _snippet(res)
    ctype = _content_type(res)
    if snippet:
        return f"{context} bukan JSON (HTTP {status}, {ctype}): {snippet}"
    return f"{context} bukan JSON (HTTP {status}, {ctype})"
