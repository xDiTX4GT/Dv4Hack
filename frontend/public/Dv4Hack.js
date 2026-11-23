function a0_0x3eb3(_0x576243, _0x405fc2) {
  _0x576243 = _0x576243 - 0x1a2;
  const _0x320720 = a0_0x3207();
  let _0x3eb3f8 = _0x320720[_0x576243];
  return _0x3eb3f8;
}
((function (_0x18b3fb, _0x14192e) {
  const _0x4c14e8 = a0_0x3eb3,
    _0xe36be2 = _0x18b3fb();
  while (!![]) {
    try {
      const _0x2d8ce6 =
        (parseInt(_0x4c14e8(0x23d)) / 0x1) *
          (parseInt(_0x4c14e8(0x24d)) / 0x2) +
        -parseInt(_0x4c14e8(0x2fc)) / 0x3 +
        -parseInt(_0x4c14e8(0x29f)) / 0x4 +
        (parseInt(_0x4c14e8(0x1ca)) / 0x5) *
          (parseInt(_0x4c14e8(0x1b0)) / 0x6) +
        -parseInt(_0x4c14e8(0x23a)) / 0x7 +
        parseInt(_0x4c14e8(0x1bd)) / 0x8 +
        parseInt(_0x4c14e8(0x25d)) / 0x9;
      if (_0x2d8ce6 === _0x14192e) break;
      else _0xe36be2["push"](_0xe36be2["shift"]());
    } catch (_0x3d3241) {
      _0xe36be2["push"](_0xe36be2["shift"]());
    }
  }
})(a0_0x3207, 0x56261),
  (function () {
    "use strict";
    const _0x3f79e5 = a0_0x3eb3;
    const _0x62af4b = _0x3f79e5(0x256),
      _0x35914f = "dv4hack_device_id";
    function _0x1986f6() {
      const _0x392eb3 = _0x3f79e5;
      let _0x5a6fe5 = localStorage[_0x392eb3(0x1a9)](_0x35914f);
      if (_0x5a6fe5) return _0x5a6fe5;
      return (
        window[_0x392eb3(0x2bc)] && crypto["randomUUID"]
          ? (_0x5a6fe5 = crypto[_0x392eb3(0x214)]())
          : (_0x5a6fe5 =
              "dh-" +
              Date[_0x392eb3(0x22e)]()[_0x392eb3(0x1c3)](0x24) +
              "-" +
              Math[_0x392eb3(0x1af)]()
                [_0x392eb3(0x1c3)](0x24)
                [_0x392eb3(0x20c)](0x2, 0xc)),
        localStorage[_0x392eb3(0x25f)](_0x35914f, _0x5a6fe5),
        _0x5a6fe5
      );
    }
    function _0x103e6d() {
      const _0x3a5520 = _0x3f79e5;
      return {
        Authorization:
          _0x3a5520(0x28a) + localStorage[_0x3a5520(0x1a9)]("auth"),
        "x-device-id": _0x1986f6(),
      };
    }
    function _0x3145e2() {
      const _0x5c7364 = _0x3f79e5;
      if (document[_0x5c7364(0x26f)](_0x5c7364(0x1ee))) return;
      const _0x4c498e = document[_0x5c7364(0x2e6)]("link");
      ((_0x4c498e["id"] = _0x5c7364(0x1ee)),
        (_0x4c498e[_0x5c7364(0x22c)] = _0x5c7364(0x1a8)),
        (_0x4c498e[_0x5c7364(0x1a2)] = _0x5c7364(0x1ea)),
        document[_0x5c7364(0x2a7)][_0x5c7364(0x22a)](_0x4c498e));
    }
    async function _0x303ab0(_0x1ba95d) {
      const _0x4ec0e0 = _0x3f79e5;
      try {
        const _0x2455ba = await _0x1ba95d["json"]();
        return (
          _0x2455ba[_0x4ec0e0(0x255)] ||
          _0x2455ba["message"] ||
          _0x4ec0e0(0x285)
        );
      } catch (_0xeca23d) {
        return _0x4ec0e0(0x285);
      }
    }
    async function _0x477bee(_0x1188f9) {
      const _0x43bac4 = _0x3f79e5;
      try {
        const _0x52d1f6 = await fetch(
          _0x62af4b + _0x43bac4(0x29b) + encodeURIComponent(_0x1188f9),
          { headers: { "x-device-id": _0x1986f6() } },
        );
        if (_0x52d1f6[_0x43bac4(0x1e2)] === 0x194)
          return { valid: ![], message: _0x43bac4(0x24b) };
        if (_0x52d1f6[_0x43bac4(0x1e2)] === 0x199)
          return { valid: ![], message: _0x43bac4(0x207) };
        if (!_0x52d1f6["ok"])
          return { valid: ![], message: await _0x303ab0(_0x52d1f6) };
        const _0x500afe = await _0x52d1f6["json"](),
          _0x5e4ae0 = new Date(_0x500afe[_0x43bac4(0x2ce)]),
          _0x199c20 = new Date();
        if (!_0x500afe[_0x43bac4(0x2b7)])
          return { valid: ![], message: _0x43bac4(0x2fa) };
        if (_0x5e4ae0 < _0x199c20)
          return {
            valid: ![],
            message: _0x43bac4(0x2be) + _0x500afe[_0x43bac4(0x2ce)],
          };
        return {
          valid: !![],
          message: "Selamat\x20datang\x20" + _0x500afe[_0x43bac4(0x1ab)] + "!",
          owner: _0x500afe[_0x43bac4(0x1ab)],
        };
      } catch (_0x9e9d2d) {
        return (
          console[_0x43bac4(0x279)](_0x43bac4(0x28f), _0x9e9d2d),
          { valid: ![], message: _0x43bac4(0x2ca) }
        );
      }
    }
    function _0x1e8fb9() {
      const _0x47bf7e = _0x3f79e5,
        _0xe3d369 = document[_0x47bf7e(0x26f)](_0x47bf7e(0x1f7));
      if (_0xe3d369) _0xe3d369["remove"]();
      _0x3145e2();
      const _0x1bf130 = window[_0x47bf7e(0x1eb)] <= 0x1e0,
        _0x42c491 = _0x1bf130 ? _0x47bf7e(0x1dc) : _0x47bf7e(0x267),
        _0x4bee4f = _0x1bf130 ? "18px" : _0x47bf7e(0x267),
        _0x11ac39 = _0x1bf130 ? _0x47bf7e(0x1a5) : _0x47bf7e(0x2c1),
        _0x2a7530 = _0x1bf130 ? _0x47bf7e(0x22d) : "10px\x2012px",
        _0x11c3a0 = _0x1bf130 ? _0x47bf7e(0x258) : _0x47bf7e(0x2d9),
        _0x2d6c3f = _0x1bf130 ? "8px" : "10px",
        _0x5a5339 = _0x1bf130 ? _0x47bf7e(0x231) : _0x47bf7e(0x2a3),
        _0x33adb4 = _0x1bf130 ? "6px" : _0x47bf7e(0x258),
        _0x118aa5 = _0x1bf130 ? _0x47bf7e(0x1a5) : _0x47bf7e(0x1b1),
        _0x5ac690 = document[_0x47bf7e(0x2e6)](_0x47bf7e(0x283));
      ((_0x5ac690["id"] = _0x47bf7e(0x1f7)),
        (_0x5ac690[_0x47bf7e(0x20b)]["cssText"] = _0x47bf7e(0x254)));
      const _0x4c5baf = document[_0x47bf7e(0x2e6)](_0x47bf7e(0x283));
      _0x4c5baf[_0x47bf7e(0x20b)][_0x47bf7e(0x27c)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x20" +
        _0x42c491 +
        "\x20!important;\x20border-radius:\x2010px\x20!important;\x20text-align:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20350px\x20!important;\x20width:\x2090%\x20!important;\x20box-shadow:\x200\x204px\x2020px\x20rgba(0,\x200,\x200,\x200.2)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd\x20!important;\x20height:\x20auto\x20!important;\x20min-height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20";
      const _0x5e48c4 = document[_0x47bf7e(0x2e6)]("h2");
      ((_0x5e48c4[_0x47bf7e(0x292)] = _0x47bf7e(0x2f4)),
        (_0x5e48c4[_0x47bf7e(0x20b)][_0x47bf7e(0x27c)] =
          _0x47bf7e(0x1e0) +
          _0x118aa5 +
          _0x47bf7e(0x1d2) +
          _0x4bee4f +
          _0x47bf7e(0x287)));
      const _0xa44d8e = document[_0x47bf7e(0x2e6)](_0x47bf7e(0x270));
      ((_0xa44d8e[_0x47bf7e(0x22f)] = "text"),
        (_0xa44d8e["id"] = "dv4hack-license-input"),
        (_0xa44d8e["placeholder"] = "Token\x20Anda"),
        (_0xa44d8e["style"][_0x47bf7e(0x27c)] =
          _0x47bf7e(0x2d4) +
          _0x2a7530 +
          _0x47bf7e(0x29c) +
          _0x11ac39 +
          _0x47bf7e(0x275) +
          _0x2d6c3f +
          _0x47bf7e(0x1fc)));
      const _0x7222f0 = document[_0x47bf7e(0x2e6)]("div");
      ((_0x7222f0["id"] = _0x47bf7e(0x1d0)),
        (_0x7222f0[_0x47bf7e(0x20b)][_0x47bf7e(0x27c)] =
          _0x47bf7e(0x1b7) +
          _0x11ac39 +
          "\x20!important;\x20margin-top:\x20" +
          _0x5a5339 +
          _0x47bf7e(0x211)));
      const _0x4e99e5 = document[_0x47bf7e(0x2e6)](_0x47bf7e(0x1b6));
      ((_0x4e99e5[_0x47bf7e(0x292)] = "Login"),
        (_0x4e99e5["id"] = _0x47bf7e(0x2d3)),
        (_0x4e99e5[_0x47bf7e(0x20b)][_0x47bf7e(0x27c)] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x20padding:\x20" +
          _0x11c3a0 +
          _0x47bf7e(0x300) +
          _0x11ac39 +
          _0x47bf7e(0x2ea)));
      const _0x477506 = document[_0x47bf7e(0x2e6)]("p");
      return (
        (_0x477506[_0x47bf7e(0x2b6)] = _0x47bf7e(0x234)),
        (_0x477506[_0x47bf7e(0x20b)][_0x47bf7e(0x27c)] =
          _0x47bf7e(0x2d2) +
          (_0x1bf130 ? _0x47bf7e(0x26c) : _0x47bf7e(0x1a5)) +
          _0x47bf7e(0x295) +
          _0x33adb4 +
          "\x20!important;"),
        _0x4c5baf["appendChild"](_0x5e48c4),
        _0x4c5baf[_0x47bf7e(0x22a)](_0xa44d8e),
        _0x4c5baf[_0x47bf7e(0x22a)](_0x4e99e5),
        _0x4c5baf[_0x47bf7e(0x22a)](_0x7222f0),
        _0x4c5baf[_0x47bf7e(0x22a)](_0x477506),
        _0x5ac690[_0x47bf7e(0x22a)](_0x4c5baf),
        document[_0x47bf7e(0x222)][_0x47bf7e(0x22a)](_0x5ac690),
        (_0x4e99e5[_0x47bf7e(0x2a1)] = async () => {
          const _0x401a88 = _0x47bf7e,
            _0x687404 = _0xa44d8e["value"]["trim"]();
          if (!_0x687404) {
            ((_0x7222f0[_0x401a88(0x292)] = _0x401a88(0x1fd)),
              (_0x7222f0["style"][_0x401a88(0x247)] = "#ff6b6b"));
            return;
          }
          ((_0x4e99e5["textContent"] = _0x401a88(0x250)),
            (_0x4e99e5["disabled"] = !![]),
            (_0x4e99e5["style"][_0x401a88(0x1ef)] = _0x401a88(0x237)));
          const _0x5b638a = await _0x477bee(_0x687404);
          _0x5b638a[_0x401a88(0x284)]
            ? ((_0x7222f0[_0x401a88(0x292)] = _0x5b638a[_0x401a88(0x268)]),
              (_0x7222f0[_0x401a88(0x20b)][_0x401a88(0x247)] =
                _0x401a88(0x2f3)),
              (_0x4e99e5[_0x401a88(0x292)] = _0x401a88(0x2a0)),
              (_0x4e99e5[_0x401a88(0x20b)][_0x401a88(0x2ae)] =
                _0x401a88(0x2b9)),
              localStorage[_0x401a88(0x25f)](_0x401a88(0x294), _0x687404),
              setTimeout(() => {
                const _0x1a571f = _0x401a88;
                (_0x5ac690[_0x1a571f(0x227)](), _0x67a328());
              }, 0x5dc))
            : ((_0x7222f0["textContent"] = _0x5b638a["message"]),
              (_0x7222f0[_0x401a88(0x20b)][_0x401a88(0x247)] = "#ff6b6b"),
              (_0x4e99e5[_0x401a88(0x292)] = _0x401a88(0x2dd)),
              (_0x4e99e5[_0x401a88(0x228)] = ![]),
              (_0x4e99e5["style"][_0x401a88(0x1ef)] = "1"));
        }),
        _0xa44d8e[_0x47bf7e(0x261)](_0x47bf7e(0x298), (_0x3207c6) => {
          const _0x5c5040 = _0x47bf7e;
          _0x3207c6[_0x5c5040(0x1d1)] === _0x5c5040(0x22b) &&
            _0x4e99e5[_0x5c5040(0x304)]();
        }),
        setTimeout(() => _0xa44d8e[_0x47bf7e(0x2cf)](), 0x64),
        _0x5ac690
      );
    }
    function _0x2b3ff8() {
      _0x1e8fb9();
    }
    const _0x2801c9 = window[_0x3f79e5(0x261)],
      _0x2cb371 = document[_0x3f79e5(0x261)],
      _0xe2c7fd = EventTarget
        ? EventTarget[_0x3f79e5(0x1c0)]["addEventListener"]
        : null,
      _0x3a8ace = [
        "blur",
        _0x3f79e5(0x2cf),
        "visibilitychange",
        "focusin",
        _0x3f79e5(0x1c8),
        _0x3f79e5(0x2bb),
        "fullscreenchange",
        _0x3f79e5(0x1ba),
        _0x3f79e5(0x2a8),
      ];
    (Object[_0x3f79e5(0x2a6)](document, "hidden", {
      get: function () {
        return ![];
      },
      configurable: ![],
    }),
      Object[_0x3f79e5(0x2a6)](document, _0x3f79e5(0x21f), {
        get: function () {
          const _0x3e3d31 = _0x3f79e5;
          return _0x3e3d31(0x23f);
        },
        configurable: ![],
      }),
      Object["defineProperty"](document, _0x3f79e5(0x1db), {
        get: function () {
          return ![];
        },
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](document, "webkitVisibilityState", {
        get: function () {
          const _0x51a156 = _0x3f79e5;
          return _0x51a156(0x23f);
        },
        configurable: ![],
      }),
      Object["defineProperty"](document, _0x3f79e5(0x290), {
        get: function () {
          return null;
        },
        set: function () {},
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](document, _0x3f79e5(0x243), {
        value: function () {
          return !![];
        },
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x29d), {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x1f4), {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](window, "onresize", {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x1f0), {
        get: function () {
          return 0x0;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x2da), {
        get: function () {
          return 0x0;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x25e), {
        get: function () {
          return 0x0;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x2c7), {
        get: function () {
          return 0x0;
        },
        configurable: !![],
      }));
    let _0x2593e9 = window[_0x3f79e5(0x1eb)],
      _0x180e83 = window[_0x3f79e5(0x239)];
    (Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x1eb), {
      get: function () {
        return _0x2593e9;
      },
      configurable: !![],
    }),
      Object["defineProperty"](window, _0x3f79e5(0x239), {
        get: function () {
          return _0x180e83;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](window, "outerWidth", {
        get: function () {
          return _0x2593e9;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](window, _0x3f79e5(0x20e), {
        get: function () {
          return _0x180e83;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](screen, _0x3f79e5(0x280), {
        get: function () {
          return 0x780;
        },
        configurable: !![],
      }),
      Object["defineProperty"](screen, _0x3f79e5(0x1be), {
        get: function () {
          return 0x438;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](screen, _0x3f79e5(0x246), {
        get: function () {
          return 0x780;
        },
        configurable: !![],
      }),
      Object[_0x3f79e5(0x2a6)](screen, "availHeight", {
        get: function () {
          return 0x410;
        },
        configurable: !![],
      }),
      (window[_0x3f79e5(0x2f0)] = function (_0x407065, _0x2339fd) {
        ((_0x2593e9 = _0x407065),
          (_0x180e83 = _0x2339fd),
          console["log"](
            "[Bypass]\x20Mock\x20dimensions\x20set\x20to:\x20" +
              _0x407065 +
              "x" +
              _0x2339fd,
          ));
      }),
      Object[_0x3f79e5(0x2a6)](document, _0x3f79e5(0x225), {
        get: function () {
          return null;
        },
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](document, _0x3f79e5(0x2c4), {
        get: function () {
          return ![];
        },
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](document, "onfullscreenchange", {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      Object[_0x3f79e5(0x2a6)](document, "onfullscreenerror", {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      (Element[_0x3f79e5(0x1c0)][_0x3f79e5(0x288)] = function () {
        const _0x52b196 = _0x3f79e5;
        return (
          console["log"](_0x52b196(0x2c0)),
          Promise[_0x52b196(0x2b3)](new Error(_0x52b196(0x1c7)))
        );
      }),
      (document[_0x3f79e5(0x1cf)] = function () {
        const _0x136f41 = _0x3f79e5;
        return (
          console[_0x136f41(0x1f9)](
            "[Bypass]\x20Blocked\x20exitFullscreen\x20call",
          ),
          Promise[_0x136f41(0x263)]()
        );
      }));
    if (Element[_0x3f79e5(0x1c0)][_0x3f79e5(0x2d0)])
      Element["prototype"]["webkitRequestFullscreen"] = function () {
        const _0x19399f = _0x3f79e5;
        return (
          console["log"](_0x19399f(0x2f9)),
          Promise[_0x19399f(0x2b3)](new Error(_0x19399f(0x1c7)))
        );
      };
    if (document[_0x3f79e5(0x23e)])
      document[_0x3f79e5(0x23e)] = function () {
        const _0x44979c = _0x3f79e5;
        return (
          console[_0x44979c(0x1f9)](_0x44979c(0x235)),
          Promise[_0x44979c(0x263)]()
        );
      };
    if (Element[_0x3f79e5(0x1c0)][_0x3f79e5(0x2b0)])
      Element[_0x3f79e5(0x1c0)][_0x3f79e5(0x2b0)] = function () {
        const _0x56dbea = _0x3f79e5;
        return (
          console[_0x56dbea(0x1f9)](
            "[Bypass]\x20Blocked\x20mozRequestFullScreen\x20call",
          ),
          Promise[_0x56dbea(0x2b3)](new Error(_0x56dbea(0x1c7)))
        );
      };
    if (document[_0x3f79e5(0x1c4)])
      document[_0x3f79e5(0x1c4)] = function () {
        return (
          console["log"]("[Bypass]\x20Blocked\x20mozExitFullScreen\x20call"),
          Promise["resolve"]()
        );
      };
    if (Element[_0x3f79e5(0x1c0)][_0x3f79e5(0x2cc)])
      Element[_0x3f79e5(0x1c0)]["msRequestFullscreen"] = function () {
        const _0x27f7fe = _0x3f79e5;
        return (
          console["log"](_0x27f7fe(0x230)),
          Promise["reject"](new Error("Fullscreen\x20request\x20blocked"))
        );
      };
    if (document[_0x3f79e5(0x253)])
      document[_0x3f79e5(0x253)] = function () {
        const _0x221621 = _0x3f79e5;
        return (console["log"](_0x221621(0x2cd)), Promise[_0x221621(0x263)]());
      };
    (Object["defineProperty"](document, _0x3f79e5(0x24e), {
      get: function () {
        return function () {};
      },
      set: function () {},
      configurable: ![],
    }),
      Object["defineProperty"](window, _0x3f79e5(0x24e), {
        get: function () {
          return function () {};
        },
        set: function () {},
        configurable: ![],
      }),
      (window["addEventListener"] = function (_0x1a41a0, _0x3272a8, _0x4d6ee2) {
        const _0x5dd371 = _0x3f79e5;
        if (_0x3a8ace[_0x5dd371(0x2e5)](_0x1a41a0) !== -0x1) {
          console[_0x5dd371(0x1f9)](
            _0x5dd371(0x1bc) + _0x1a41a0 + "\x20event\x20listener",
          );
          return;
        }
        return _0x2801c9[_0x5dd371(0x2d5)](
          this,
          _0x1a41a0,
          _0x3272a8,
          _0x4d6ee2,
        );
      }),
      (document["addEventListener"] = function (
        _0x3fec22,
        _0x12a170,
        _0x121c58,
      ) {
        const _0x139f9e = _0x3f79e5;
        if (_0x3a8ace[_0x139f9e(0x2e5)](_0x3fec22) !== -0x1) {
          console[_0x139f9e(0x1f9)](
            _0x139f9e(0x29e) + _0x3fec22 + _0x139f9e(0x2ab),
          );
          return;
        }
        return _0x2cb371[_0x139f9e(0x2d5)](
          this,
          _0x3fec22,
          _0x12a170,
          _0x121c58,
        );
      }));
    EventTarget &&
      EventTarget[_0x3f79e5(0x1c0)] &&
      _0xe2c7fd &&
      (EventTarget[_0x3f79e5(0x1c0)][_0x3f79e5(0x261)] = function (
        _0x171267,
        _0x3cc745,
        _0x42d9de,
      ) {
        const _0x5d7a48 = _0x3f79e5;
        if (_0x3a8ace[_0x5d7a48(0x2e5)](_0x171267) !== -0x1) {
          console[_0x5d7a48(0x1f9)](
            _0x5d7a48(0x1de) + _0x171267 + _0x5d7a48(0x2ab),
          );
          return;
        }
        return _0xe2c7fd[_0x5d7a48(0x2d5)](
          this,
          _0x171267,
          _0x3cc745,
          _0x42d9de,
        );
      });
    console[_0x3f79e5(0x1f9)](_0x3f79e5(0x241));
    const _0x3d8d85 = document["getElementById"]("quizizz-hack-frame");
    if (_0x3d8d85) _0x3d8d85[_0x3f79e5(0x227)]();
    const _0xb231c5 = document[_0x3f79e5(0x26f)](_0x3f79e5(0x269));
    if (_0xb231c5) _0xb231c5[_0x3f79e5(0x227)]();
    let _0x567a9b = null,
      _0x4370b4 = ![],
      _0x5802a8 = "quizizz";
    function _0x448ebd() {
      const _0x4f65f0 = _0x3f79e5;
      _0x3145e2();
      const _0x3c0043 = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x283));
      _0x3c0043["id"] = _0x4f65f0(0x212);
      const _0x1eaa55 = window[_0x4f65f0(0x1eb)] <= 0x300;
      Object[_0x4f65f0(0x201)](_0x3c0043[_0x4f65f0(0x20b)], {
        position: _0x4f65f0(0x262),
        top: _0x1eaa55 ? _0x4f65f0(0x2d9) : _0x4f65f0(0x2f8),
        right: _0x1eaa55 ? _0x4f65f0(0x2d9) : _0x4f65f0(0x2f8),
        left: _0x1eaa55 ? _0x4f65f0(0x2d9) : _0x4f65f0(0x1b9),
        width: _0x1eaa55 ? _0x4f65f0(0x1f3) : _0x4f65f0(0x21a),
        maxHeight: _0x1eaa55 ? _0x4f65f0(0x2ac) : _0x4f65f0(0x1e1),
        height: _0x1eaa55 ? _0x4f65f0(0x1b9) : _0x4f65f0(0x1e1),
        backgroundColor: _0x4f65f0(0x1d6),
        borderRadius: _0x1eaa55 ? _0x4f65f0(0x258) : _0x4f65f0(0x1a5),
        border: _0x4f65f0(0x1ae),
        boxShadow: _0x4f65f0(0x1dd),
        zIndex: _0x4f65f0(0x26d),
        display: "flex",
        flexDirection: "column",
        overflow: _0x4f65f0(0x302),
        fontFamily: _0x4f65f0(0x1df),
      });
      const _0x407cd5 = document["createElement"](_0x4f65f0(0x283));
      Object[_0x4f65f0(0x201)](_0x407cd5[_0x4f65f0(0x20b)], {
        height: _0x1eaa55 ? _0x4f65f0(0x299) : "44px",
        minHeight: _0x1eaa55 ? "40px" : _0x4f65f0(0x233),
        backgroundColor: _0x4f65f0(0x20a),
        color: _0x4f65f0(0x26e),
        display: _0x4f65f0(0x2a4),
        alignItems: "center",
        justifyContent: _0x4f65f0(0x28d),
        padding: _0x1eaa55 ? _0x4f65f0(0x1da) : "0\x2010px",
        cursor: _0x4f65f0(0x2ec),
        userSelect: _0x4f65f0(0x27d),
        flexShrink: "0",
      });
      const _0x564696 = document["createElement"](_0x4f65f0(0x2db));
      ((_0x564696[_0x4f65f0(0x292)] = "Dv4Hack!"),
        (_0x564696[_0x4f65f0(0x20b)][_0x4f65f0(0x27c)] =
          "font-size:\x20" +
          (_0x1eaa55 ? _0x4f65f0(0x1b1) : _0x4f65f0(0x1dc)) +
          _0x4f65f0(0x221)),
        _0x407cd5[_0x4f65f0(0x22a)](_0x564696));
      const _0xb6ef65 = document["createElement"](_0x4f65f0(0x1b6));
      ((_0xb6ef65[_0x4f65f0(0x22f)] = _0x4f65f0(0x1b6)),
        (_0xb6ef65["title"] = _0x4f65f0(0x260)),
        (_0xb6ef65[_0x4f65f0(0x2b6)] = _0x4f65f0(0x1e4)),
        (_0xb6ef65[_0x4f65f0(0x20b)][_0x4f65f0(0x27c)] =
          _0x4f65f0(0x2bf) +
          (_0x1eaa55 ? _0x4f65f0(0x305) : _0x4f65f0(0x219)) +
          ";\x20height:\x20" +
          (_0x1eaa55 ? "30px" : _0x4f65f0(0x219)) +
          _0x4f65f0(0x210) +
          (_0x1eaa55 ? _0x4f65f0(0x2c1) : _0x4f65f0(0x1a5)) +
          _0x4f65f0(0x265)),
        _0x407cd5[_0x4f65f0(0x22a)](_0xb6ef65));
      const _0x19598c = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x283));
      ((_0x19598c[_0x4f65f0(0x20b)][_0x4f65f0(0x28b)] = "flex"),
        (_0x19598c[_0x4f65f0(0x20b)][_0x4f65f0(0x2b8)] = "8px"),
        (_0x19598c[_0x4f65f0(0x20b)][_0x4f65f0(0x200)] = _0x4f65f0(0x1b9)));
      const _0x27e6de = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x2db));
      ((_0x27e6de[_0x4f65f0(0x292)] = "—"),
        (_0x27e6de[_0x4f65f0(0x20b)][_0x4f65f0(0x27c)] =
          "cursor:\x20pointer;\x20font-weight:\x20bold;\x20font-size:\x20" +
          (_0x1eaa55 ? "18px" : "14px") +
          _0x4f65f0(0x215)));
      const _0x3e1a9b = document[_0x4f65f0(0x2e6)]("span");
      ((_0x3e1a9b[_0x4f65f0(0x292)] = "✕"),
        (_0x3e1a9b[_0x4f65f0(0x20b)][_0x4f65f0(0x27c)] =
          _0x4f65f0(0x2d7) +
          (_0x1eaa55 ? _0x4f65f0(0x1b1) : _0x4f65f0(0x1a5)) +
          ";"),
        _0x19598c[_0x4f65f0(0x22a)](_0x27e6de),
        _0x19598c[_0x4f65f0(0x22a)](_0x3e1a9b),
        _0x407cd5[_0x4f65f0(0x22a)](_0x19598c));
      const _0x182cad = document[_0x4f65f0(0x2e6)]("div");
      ((_0x182cad["id"] = "quizizz-content"),
        Object[_0x4f65f0(0x201)](_0x182cad[_0x4f65f0(0x20b)], {
          flex: "1",
          overflowY: _0x4f65f0(0x1b9),
          padding: _0x1eaa55 ? _0x4f65f0(0x258) : _0x4f65f0(0x1a5),
          backgroundColor: _0x4f65f0(0x26b),
          minHeight: _0x4f65f0(0x223),
        }));
      const _0x491e30 = document["createElement"](_0x4f65f0(0x283));
      Object[_0x4f65f0(0x201)](_0x491e30[_0x4f65f0(0x20b)], {
        position: "sticky",
        top: "0",
        display: _0x4f65f0(0x2a4),
        alignItems: _0x4f65f0(0x252),
        width: _0x4f65f0(0x2f1),
        backgroundColor: _0x4f65f0(0x26b),
        marginBottom: _0x1eaa55 ? _0x4f65f0(0x258) : _0x4f65f0(0x1a5),
        gap: _0x4f65f0(0x1fb),
        height: _0x4f65f0(0x299),
      });
      const _0x5e4c2e = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x270));
      ((_0x5e4c2e[_0x4f65f0(0x22f)] = _0x4f65f0(0x1f2)),
        (_0x5e4c2e[_0x4f65f0(0x2c2)] = _0x4f65f0(0x1f8)),
        (_0x5e4c2e[_0x4f65f0(0x20b)]["cssText"] = _0x4f65f0(0x1cd)));
      const _0x4faeed = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x1b6));
      ((_0x4faeed["textContent"] = "✕"),
        (_0x4faeed[_0x4f65f0(0x20b)]["cssText"] = _0x4f65f0(0x245)),
        _0x491e30[_0x4f65f0(0x22a)](_0x5e4c2e),
        _0x491e30["appendChild"](_0x4faeed));
      const _0x419ebd = document[_0x4f65f0(0x2e6)](_0x4f65f0(0x283));
      ((_0x419ebd["id"] = _0x4f65f0(0x2c9)),
        (_0x419ebd[_0x4f65f0(0x20b)][_0x4f65f0(0x27c)] =
          _0x4f65f0(0x208) + (_0x1eaa55 ? "6px" : _0x4f65f0(0x258)) + ";"),
        _0x182cad[_0x4f65f0(0x22a)](_0x491e30),
        _0x182cad[_0x4f65f0(0x22a)](_0x419ebd),
        _0x3c0043[_0x4f65f0(0x22a)](_0x407cd5),
        _0x3c0043[_0x4f65f0(0x22a)](_0x182cad));
      const _0x53dc2b = document[_0x4f65f0(0x2e6)]("div");
      return (
        Object[_0x4f65f0(0x201)](_0x53dc2b[_0x4f65f0(0x20b)], {
          position: _0x4f65f0(0x1c6),
          bottom: "0",
          right: "0",
          width: _0x1eaa55 ? _0x4f65f0(0x267) : "15px",
          height: _0x1eaa55 ? _0x4f65f0(0x267) : _0x4f65f0(0x23b),
          cursor: _0x4f65f0(0x2c5),
          background: _0x4f65f0(0x1ac),
          borderBottomRightRadius: _0x1eaa55
            ? _0x4f65f0(0x258)
            : _0x4f65f0(0x1a5),
        }),
        _0x3c0043[_0x4f65f0(0x22a)](_0x53dc2b),
        document[_0x4f65f0(0x222)]["appendChild"](_0x3c0043),
        {
          container: _0x3c0043,
          header: _0x407cd5,
          content: _0x182cad,
          searchBar: _0x5e4c2e,
          clearBtn: _0x4faeed,
          resultsWrap: _0x419ebd,
          logoutBtn: _0xb6ef65,
          minimizeBtn: _0x27e6de,
          hideBtn: _0x3e1a9b,
          resizeHandle: _0x53dc2b,
        }
      );
    }
    function _0x4993dc() {
      const _0x6bb19c = _0x3f79e5,
        _0x200c13 = document[_0x6bb19c(0x2e6)](_0x6bb19c(0x1b6));
      _0x200c13["id"] = _0x6bb19c(0x269);
      const _0x101ba3 = document[_0x6bb19c(0x2e6)]("img");
      return (
        (_0x101ba3["src"] = _0x6bb19c(0x28e)),
        (_0x101ba3[_0x6bb19c(0x21d)] = _0x6bb19c(0x1f1)),
        (_0x101ba3[_0x6bb19c(0x20b)][_0x6bb19c(0x27c)] = _0x6bb19c(0x1b2)),
        _0x200c13[_0x6bb19c(0x22a)](_0x101ba3),
        (_0x200c13["style"][_0x6bb19c(0x27c)] = _0x6bb19c(0x1a4)),
        _0x200c13["addEventListener"](_0x6bb19c(0x203), function () {
          const _0x1b926f = _0x6bb19c;
          _0x200c13[_0x1b926f(0x20b)][_0x1b926f(0x1c5)] = _0x1b926f(0x24c);
        }),
        _0x200c13[_0x6bb19c(0x261)](_0x6bb19c(0x272), function () {
          const _0x63a929 = _0x6bb19c;
          _0x200c13[_0x63a929(0x20b)][_0x63a929(0x1c5)] = _0x63a929(0x306);
        }),
        (_0x200c13["onclick"] = function () {
          const _0x1b9269 = _0x6bb19c,
            _0x308ed1 = document["getElementById"](_0x1b9269(0x212));
          _0x308ed1 &&
            ((_0x308ed1[_0x1b9269(0x20b)]["display"] = "flex"),
            (_0x200c13[_0x1b9269(0x20b)]["opacity"] = "0"));
        }),
        document[_0x6bb19c(0x222)][_0x6bb19c(0x22a)](_0x200c13),
        _0x200c13
      );
    }
    function _0x431d45(_0x44beab) {
      const _0x3dd72d = _0x3f79e5,
        _0x27704e = document[_0x3dd72d(0x26f)](_0x3dd72d(0x204));
      if (_0x27704e) _0x27704e[_0x3dd72d(0x227)]();
      const _0x40bb4a = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x283));
      ((_0x40bb4a["id"] = _0x3dd72d(0x204)),
        (_0x40bb4a[_0x3dd72d(0x20b)][_0x3dd72d(0x27c)] = _0x3dd72d(0x1cc)));
      const _0x4c7a95 = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x283));
      _0x4c7a95[_0x3dd72d(0x20b)]["cssText"] = _0x3dd72d(0x226);
      const _0x22a6ff = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x283));
      ((_0x22a6ff["textContent"] = _0x3dd72d(0x2d8)),
        (_0x22a6ff[_0x3dd72d(0x20b)][_0x3dd72d(0x27c)] = _0x3dd72d(0x1fa)));
      const _0x4932cb = document["createElement"](_0x3dd72d(0x283));
      ((_0x4932cb["textContent"] = _0x3dd72d(0x1d7)),
        (_0x4932cb["style"][_0x3dd72d(0x27c)] =
          "font-size:13px\x20!important;\x20line-height:1.45\x20!important;\x20color:#4b5563\x20!important;\x20margin-bottom:16px\x20!important;"));
      const _0x33b19e = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x283));
      _0x33b19e[_0x3dd72d(0x20b)][_0x3dd72d(0x27c)] = _0x3dd72d(0x25b);
      const _0x126d90 = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x1b6));
      ((_0x126d90[_0x3dd72d(0x292)] = _0x3dd72d(0x2cb)),
        (_0x126d90["style"]["cssText"] = _0x3dd72d(0x2f7)));
      const _0x5849b0 = document[_0x3dd72d(0x2e6)](_0x3dd72d(0x1b6));
      ((_0x5849b0["textContent"] = _0x3dd72d(0x260)),
        (_0x5849b0["style"][_0x3dd72d(0x27c)] = _0x3dd72d(0x1d8)),
        (_0x126d90[_0x3dd72d(0x2a1)] = () => _0x40bb4a[_0x3dd72d(0x227)]()),
        (_0x40bb4a[_0x3dd72d(0x2a1)] = (_0x492071) => {
          const _0x43ce2a = _0x3dd72d;
          if (_0x492071[_0x43ce2a(0x2af)] === _0x40bb4a) _0x40bb4a["remove"]();
        }),
        (_0x5849b0[_0x3dd72d(0x2a1)] = async () => {
          const _0x542197 = _0x3dd72d;
          ((_0x5849b0[_0x542197(0x228)] = !![]),
            (_0x5849b0[_0x542197(0x292)] = "Logout..."),
            await _0x44beab(),
            _0x40bb4a["remove"]());
        }),
        _0x33b19e["appendChild"](_0x126d90),
        _0x33b19e[_0x3dd72d(0x22a)](_0x5849b0),
        _0x4c7a95[_0x3dd72d(0x22a)](_0x22a6ff),
        _0x4c7a95[_0x3dd72d(0x22a)](_0x4932cb),
        _0x4c7a95[_0x3dd72d(0x22a)](_0x33b19e),
        _0x40bb4a[_0x3dd72d(0x22a)](_0x4c7a95),
        document[_0x3dd72d(0x222)][_0x3dd72d(0x22a)](_0x40bb4a));
    }
    async function _0x1f0e41() {
      const _0x40271a = _0x3f79e5,
        _0x4b7350 = localStorage[_0x40271a(0x1a9)](_0x40271a(0x294));
      if (_0x4b7350)
        try {
          await fetch(_0x62af4b + _0x40271a(0x259), {
            method: _0x40271a(0x25a),
            headers: _0x103e6d(),
          });
        } catch (_0x8d5489) {
          console[_0x40271a(0x279)](_0x40271a(0x2ed), _0x8d5489);
        }
      (localStorage[_0x40271a(0x2a9)](_0x40271a(0x294)),
        document[_0x40271a(0x26f)](_0x40271a(0x212))?.[_0x40271a(0x227)](),
        document[_0x40271a(0x26f)](_0x40271a(0x269))?.[_0x40271a(0x227)](),
        _0x1e8fb9());
    }
    async function _0x17a667(_0x1a06ca) {
      const _0x35bf26 = _0x3f79e5;
      try {
        const _0x2d784b = await fetch(
          _0x62af4b + _0x35bf26(0x27f) + encodeURIComponent(_0x1a06ca),
          { headers: _0x103e6d() },
        );
        if (_0x2d784b[_0x35bf26(0x1e2)] === 0x199)
          return {
            error: "Token\x20sudah\x20digunakan\x20di\x20perangkat\x20lain",
          };
        if (!_0x2d784b["ok"]) return null;
        const _0x150334 = await _0x2d784b[_0x35bf26(0x1ed)]();
        if (!_0x150334) return null;
        return _0x150334;
      } catch (_0x261a68) {
        return (console[_0x35bf26(0x279)](_0x35bf26(0x2b4), _0x261a68), null);
      }
    }
    async function _0x888beb(_0xfd29eb) {
      const _0x37a4b1 = _0x3f79e5;
      try {
        const _0x18aca9 = await fetch(
          _0x62af4b + _0x37a4b1(0x297) + encodeURIComponent(_0xfd29eb),
          { headers: _0x103e6d() },
        );
        if (_0x18aca9[_0x37a4b1(0x1e2)] === 0x199)
          return { error: _0x37a4b1(0x207) };
        if (!_0x18aca9["ok"]) return null;
        const _0x366228 = await _0x18aca9[_0x37a4b1(0x1ed)]();
        if (
          !_0x366228 ||
          (_0x366228[_0x37a4b1(0x2bd)] &&
            _0x366228[_0x37a4b1(0x2bd)]["length"] === 0x0)
        )
          return null;
        return _0x366228;
      } catch (_0x4eb9eb) {
        return (console[_0x37a4b1(0x279)](_0x37a4b1(0x1f5), _0x4eb9eb), null);
      }
    }
    function _0x2612d5(_0x2578b0) {
      const _0x57994b = _0x3f79e5;
      if (!_0x2578b0) return null;
      if (
        _0x2578b0[_0x57994b(0x2dc)] !== undefined &&
        Array["isArray"](_0x2578b0[_0x57994b(0x2bd)])
      )
        return _0x2578b0[_0x57994b(0x2bd)][_0x57994b(0x1c2)]((_0x2145e6) => {
          const _0x437b00 = _0x57994b,
            _0x35431d = _0x2145e6["question"] || "";
          let _0x39eb2a = null;
          if (
            Array[_0x437b00(0x1b4)](_0x2145e6[_0x437b00(0x1cb)]) &&
            _0x2145e6[_0x437b00(0x1cb)][_0x437b00(0x217)] > 0x0
          ) {
            const _0x10c2a1 = _0x2145e6["media"][_0x437b00(0x20d)](
              (_0x5dfbbc) => _0x5dfbbc && _0x5dfbbc[_0x437b00(0x1c1)],
            );
            if (_0x10c2a1) _0x39eb2a = _0x10c2a1[_0x437b00(0x1c1)];
          } else
            _0x2145e6[_0x437b00(0x1cb)] &&
              _0x2145e6[_0x437b00(0x1cb)][_0x437b00(0x1c1)] &&
              (_0x39eb2a = _0x2145e6[_0x437b00(0x1cb)]["url"]);
          const _0x2de3d8 = Array[_0x437b00(0x1b4)](_0x2145e6[_0x437b00(0x2e1)])
              ? _0x2145e6["answer"]
              : [_0x2145e6["answer"]],
            _0x3cc045 =
              _0x2145e6[_0x437b00(0x22f)] === _0x437b00(0x236) ||
              _0x2145e6["ignoreAnswers"];
          let _0x3925b5 = [];
          return (
            _0x3cc045
              ? (_0x3925b5 = (_0x2145e6[_0x437b00(0x2f6)] || [])[
                  _0x437b00(0x1c2)
                ]((_0x2c63c0) => ({
                  text: _0x2c63c0["text"] || "",
                  mediaUrl: _0x4979d0(_0x2c63c0),
                })))
              : (_0x3925b5 = _0x2de3d8[_0x437b00(0x1c2)]((_0x29b515) => {
                  const _0x1e6ba9 = _0x437b00,
                    _0x44d17a =
                      _0x2145e6[_0x1e6ba9(0x2f6)] &&
                      _0x2145e6["options"][_0x29b515];
                  if (!_0x44d17a) return null;
                  return {
                    text: _0x44d17a["text"] || "",
                    mediaUrl: _0x4979d0(_0x44d17a),
                  };
                })["filter"](Boolean)),
            {
              question: _0x35431d,
              questionMedia: _0x39eb2a,
              answers: _0x3925b5,
              type: _0x2145e6["type"] || _0x437b00(0x303),
              layout: _0x2145e6[_0x437b00(0x1ec)] || null,
              multiAnswer: _0x2de3d8[_0x437b00(0x217)] > 0x1,
              isBlank: _0x3cc045,
            }
          );
        });
      let _0x59e853 = null;
      if (_0x2578b0["data"] && _0x2578b0[_0x57994b(0x1e3)]["answers"])
        _0x59e853 = _0x2578b0[_0x57994b(0x1e3)][_0x57994b(0x2bd)];
      else {
        if (Array[_0x57994b(0x1b4)](_0x2578b0[_0x57994b(0x1e3)]))
          _0x59e853 = _0x2578b0[_0x57994b(0x1e3)];
        else {
          if (Array[_0x57994b(0x1b4)](_0x2578b0[_0x57994b(0x2bd)]))
            _0x59e853 = _0x2578b0[_0x57994b(0x2bd)];
          else {
            if (Array[_0x57994b(0x1b4)](_0x2578b0)) _0x59e853 = _0x2578b0;
          }
        }
      }
      if (_0x59e853)
        return _0x59e853["map"]((_0x5a3f02) => {
          const _0x2ee817 = _0x57994b,
            _0x2991ce =
              (_0x5a3f02[_0x2ee817(0x2d6)] &&
                (_0x5a3f02["question"][_0x2ee817(0x1f2)] ||
                  (_0x5a3f02["question"]["structure"] &&
                    _0x5a3f02["question"][_0x2ee817(0x2c6)][
                      _0x2ee817(0x1f2)
                    ]))) ||
              "";
          let _0x4925eb = null;
          if (
            _0x5a3f02["question"] &&
            _0x5a3f02[_0x2ee817(0x2d6)][_0x2ee817(0x289)]
          )
            _0x4925eb = _0x5a3f02[_0x2ee817(0x2d6)][_0x2ee817(0x289)];
          else {
            if (
              _0x5a3f02[_0x2ee817(0x2d6)] &&
              _0x5a3f02[_0x2ee817(0x2d6)][_0x2ee817(0x1cb)]
            ) {
              const _0x4204df = Array[_0x2ee817(0x1b4)](
                _0x5a3f02[_0x2ee817(0x2d6)][_0x2ee817(0x1cb)],
              )
                ? _0x5a3f02[_0x2ee817(0x2d6)]["media"][_0x2ee817(0x20d)](
                    (_0x451221) => _0x451221 && _0x451221["url"],
                  )
                : _0x5a3f02[_0x2ee817(0x2d6)][_0x2ee817(0x1cb)];
              if (_0x4204df && _0x4204df[_0x2ee817(0x1c1)])
                _0x4925eb = _0x4204df["url"];
            } else {
              if (
                _0x5a3f02[_0x2ee817(0x2d6)] &&
                _0x5a3f02[_0x2ee817(0x2d6)]["structure"] &&
                _0x5a3f02["question"][_0x2ee817(0x2c6)][_0x2ee817(0x1cb)]
              ) {
                const _0x14931a =
                  _0x5a3f02[_0x2ee817(0x2d6)]["structure"][_0x2ee817(0x1cb)];
                if (_0x14931a && _0x14931a[_0x2ee817(0x1c1)])
                  _0x4925eb = _0x14931a[_0x2ee817(0x1c1)];
              }
            }
          }
          const _0x4d1165 = (_0x5a3f02[_0x2ee817(0x2bd)] || [])[
            _0x2ee817(0x1c2)
          ]((_0x3f020b) => ({
            text: _0x3f020b[_0x2ee817(0x1f2)] || "",
            mediaUrl: _0x4979d0(_0x3f020b),
          }));
          return {
            question: _0x2991ce,
            questionMedia: _0x4925eb,
            answers: _0x4d1165,
            type: "MCQ",
            isBlank: ![],
          };
        });
      return null;
    }
    function _0x4979d0(_0x5b323f) {
      const _0x20db91 = _0x3f79e5;
      if (!_0x5b323f) return null;
      if (_0x5b323f["image"] && typeof _0x5b323f["image"] === "string")
        return _0x5b323f["image"];
      if (_0x5b323f["media"]) {
        if (typeof _0x5b323f[_0x20db91(0x1cb)] === _0x20db91(0x1ad))
          return _0x5b323f[_0x20db91(0x1cb)];
        if (_0x5b323f[_0x20db91(0x1cb)]["url"])
          return _0x5b323f[_0x20db91(0x1cb)][_0x20db91(0x1c1)];
        if (Array[_0x20db91(0x1b4)](_0x5b323f["media"])) {
          const _0x240831 = _0x5b323f["media"][_0x20db91(0x20d)](
            (_0xa0485a) => _0xa0485a && _0xa0485a[_0x20db91(0x1c1)],
          );
          if (_0x240831) return _0x240831["url"];
        }
      }
      return null;
    }
    function _0x4944c7(_0xf07d3f) {
      const _0xf94083 = _0x3f79e5;
      if (!_0xf07d3f) return "";
      const _0x205afb = document[_0xf94083(0x2e6)](_0xf94083(0x283));
      return (
        (_0x205afb["innerHTML"] = _0xf07d3f),
        _0x205afb[_0xf94083(0x1a3)](
          "script[type=\x22math/tex\x22],\x20script[type=\x22math/asciimath\x22]",
        )[_0xf94083(0x277)]((_0x4bf678) => _0x4bf678[_0xf94083(0x227)]()),
        _0x205afb[_0xf94083(0x1a3)](_0xf94083(0x27b))[_0xf94083(0x277)](
          (_0x4125fd) => {
            const _0x731836 = _0xf94083;
            let _0x159f01 = _0x4125fd[_0x731836(0x293)];
            while (_0x159f01) {
              const _0x3f2283 = _0x159f01;
              _0x159f01 = _0x159f01[_0x731836(0x293)];
              if (
                _0x3f2283["nodeName"] === "BR" ||
                (_0x3f2283[_0x731836(0x29a)] === Node[_0x731836(0x2a5)] &&
                  _0x3f2283["textContent"][_0x731836(0x301)]() === "")
              )
                _0x3f2283["remove"]();
              else break;
            }
            _0x4125fd[_0x731836(0x227)]();
          },
        ),
        _0x205afb["querySelectorAll"](_0xf94083(0x2ff))[_0xf94083(0x277)](
          (_0x194a50) => _0x194a50[_0xf94083(0x227)](),
        ),
        _0x205afb[_0xf94083(0x1a3)](_0xf94083(0x1d4))["forEach"](
          (_0x5c9f9b) => {
            const _0x434c92 = _0xf94083;
            ((_0x5c9f9b["style"][_0x434c92(0x238)] = "hidden"),
              (_0x5c9f9b[_0x434c92(0x20b)]["display"] = "inline-block"));
          },
        ),
        _0x205afb[_0xf94083(0x1a3)](_0xf94083(0x2fe))[_0xf94083(0x277)](
          (_0x27ee7a) => {
            const _0x3e4434 = _0xf94083;
            ((_0x27ee7a[_0x3e4434(0x20b)][_0x3e4434(0x28b)] = _0x3e4434(0x240)),
              (_0x27ee7a[_0x3e4434(0x20b)][_0x3e4434(0x274)] =
                _0x3e4434(0x251)),
              (_0x27ee7a["style"][_0x3e4434(0x224)] = _0x3e4434(0x20f)));
          },
        ),
        _0x205afb[_0xf94083(0x2b6)]
      );
    }
    function _0x5dae9f(
      _0x2f48da,
      _0x5f2288 = "",
      _0x187e53 = _0x3f79e5(0x20a),
    ) {
      const _0x4fdb31 = _0x3f79e5,
        _0x13ae1b = document[_0x4fdb31(0x26f)](_0x4fdb31(0x2c9));
      if (!_0x13ae1b) return;
      _0x13ae1b[_0x4fdb31(0x2b6)] = "";
      if (!_0x2f48da || _0x2f48da[_0x4fdb31(0x217)] === 0x0) {
        _0x13ae1b[_0x4fdb31(0x2b6)] =
          "<div\x20style=\x22text-align:center;\x20color:#666;\x20padding:20px;\x22>Belum\x20ada\x20data\x20jawaban</div>";
        return;
      }
      let _0x422967 = _0x2f48da;
      if (_0x5f2288) {
        const _0x4bac3a = _0x5f2288["toLowerCase"]();
        _0x422967 = _0x2f48da["filter"]((_0x331160) => {
          const _0x48db15 = _0x4fdb31,
            _0x5a7682 = _0x331160[_0x48db15(0x2d6)]
              [_0x48db15(0x1f6)](/<[^>]*>/g, "")
              ["toLowerCase"](),
            _0x2c3998 = _0x331160[_0x48db15(0x2bd)]
              [_0x48db15(0x1c2)]((_0x94799d) => _0x94799d[_0x48db15(0x1f2)])
              [_0x48db15(0x218)]("\x20")
              [_0x48db15(0x21c)]();
          return (
            _0x5a7682["includes"](_0x4bac3a) ||
            _0x2c3998[_0x48db15(0x2de)](_0x4bac3a)
          );
        });
      }
      if (_0x422967[_0x4fdb31(0x217)] === 0x0) {
        _0x13ae1b[_0x4fdb31(0x2b6)] = _0x4fdb31(0x1e6);
        return;
      }
      _0x422967["forEach"]((_0xf3557, _0x1f0761) => {
        const _0x281a75 = _0x4fdb31,
          _0x5d2ea8 = document[_0x281a75(0x2e6)]("div");
        _0x5d2ea8[_0x281a75(0x20b)][_0x281a75(0x27c)] =
          _0x281a75(0x1ff) +
          _0x187e53 +
          ";\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20";
        let _0x32fa8d = "";
        if (_0xf3557[_0x281a75(0x22f)] === _0x281a75(0x229))
          _0x32fa8d = _0x281a75(0x278);
        else {
          if (_0xf3557[_0x281a75(0x22f)] === _0x281a75(0x236))
            _0x32fa8d = _0x281a75(0x257);
          else {
            if (
              _0xf3557[_0x281a75(0x1ec)] === _0x281a75(0x1c9) ||
              _0xf3557[_0x281a75(0x22f)] === _0x281a75(0x1b8)
            )
              _0x32fa8d = _0x281a75(0x1e7);
            else
              _0xf3557[_0x281a75(0x22f)] === "quiz" &&
                _0xf3557[_0x281a75(0x2b5)] &&
                (_0x32fa8d = _0x281a75(0x278));
          }
        }
        const _0x2beca6 = _0xf3557[_0x281a75(0x264)]
          ? _0x281a75(0x1d5) + _0xf3557["questionMedia"] + _0x281a75(0x2df)
          : "";
        let _0x3b3a9f = "";
        _0xf3557[_0x281a75(0x2bd)]["forEach"]((_0x4afb85) => {
          const _0x2e9a3e = _0x281a75;
          let _0x2f64c7 = "";
          (_0x4afb85[_0x2e9a3e(0x2e9)] &&
            (_0x2f64c7 +=
              _0x2e9a3e(0x1d5) +
              _0x4afb85["mediaUrl"] +
              "\x22\x20style=\x22width:100%;\x20height:auto;\x20max-height:160px;\x20object-fit:contain;\x20border-radius:6px;\x20margin-bottom:4px;\x20display:block;\x20box-sizing:border-box;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22>"),
            _0x4afb85[_0x2e9a3e(0x1f2)] &&
              (_0x2f64c7 +=
                "<div>" +
                _0x4944c7(_0x4afb85[_0x2e9a3e(0x1f2)]) +
                _0x2e9a3e(0x2ad)),
            _0x2f64c7 &&
              (_0x3b3a9f +=
                "<div\x20style=\x22border:2px\x20solid\x20#22c55e;\x20border-radius:8px;\x20padding:8px\x2010px;\x20background:#f0fdf4;\x20margin-bottom:6px;\x20font-size:13px;\x20color:#10b981;\x20font-weight:bold;\x20word-wrap:break-word;\x20overflow-wrap:break-word;\x20box-sizing:border-box;\x20overflow:hidden;\x22>" +
                _0x2f64c7 +
                _0x2e9a3e(0x2ad)));
        });
        !_0x3b3a9f && (_0x3b3a9f = _0x281a75(0x244));
        ((_0x5d2ea8[_0x281a75(0x2b6)] =
          _0x281a75(0x24f) +
          (_0x1f0761 + 0x1) +
          _0x281a75(0x1ce) +
          _0x32fa8d +
          _0x281a75(0x2e3) +
          _0x4944c7(_0xf3557[_0x281a75(0x2d6)]) +
          _0x281a75(0x1ce) +
          _0x2beca6 +
          _0x281a75(0x2aa) +
          _0x3b3a9f +
          _0x281a75(0x2ef)),
          _0x5d2ea8["querySelectorAll"](_0x281a75(0x216))[_0x281a75(0x277)](
            (_0x4ad94b) => {
              const _0x23e793 = _0x281a75;
              _0x4ad94b[_0x23e793(0x28c)](_0x23e793(0x2e4), "1");
            },
          ),
          _0x13ae1b["appendChild"](_0x5d2ea8));
        if (!document["getElementById"](_0x281a75(0x282))) {
          const _0x2651d6 = document[_0x281a75(0x2e6)](_0x281a75(0x296));
          ((_0x2651d6["id"] = "dv4hack-katex-css"),
            (_0x2651d6[_0x281a75(0x22c)] = "stylesheet"),
            (_0x2651d6[_0x281a75(0x1a2)] = _0x281a75(0x2ba)),
            document[_0x281a75(0x2a7)]["appendChild"](_0x2651d6));
        }
        if (!document[_0x281a75(0x26f)](_0x281a75(0x1d9))) {
          const _0x2e1e3f = document[_0x281a75(0x2e6)](_0x281a75(0x20b));
          ((_0x2e1e3f["id"] = _0x281a75(0x1d9)),
            (_0x2e1e3f[_0x281a75(0x292)] = _0x281a75(0x2e7)),
            document["head"][_0x281a75(0x22a)](_0x2e1e3f));
        }
      });
    }
    function _0x535764(_0x91d58c = "") {
      const _0x508e58 = _0x3f79e5,
        _0x63b1e1 = _0x2612d5(_0x567a9b);
      _0x5dae9f(_0x63b1e1, _0x91d58c, _0x508e58(0x20a));
    }
    function _0x510a46(_0x1243e0 = "") {
      const _0x4d36d9 = _0x3f79e5,
        _0x32da67 = _0x2612d5(_0x567a9b);
      _0x5dae9f(_0x32da67, _0x1243e0, _0x4d36d9(0x2eb));
    }
    function _0x112da0(_0x15369d) {
      const _0x2ccd28 = _0x3f79e5,
        _0x4dae73 = document[_0x2ccd28(0x2e6)]("div");
      _0x4dae73[_0x2ccd28(0x20b)][_0x2ccd28(0x27c)] =
        "display:flex;\x20gap:8px;\x20margin-bottom:12px;\x20justify-content:center;";
      const _0x76a4de = document["createElement"]("button");
      ((_0x76a4de[_0x2ccd28(0x292)] = _0x2ccd28(0x248)),
        (_0x76a4de["dataset"][_0x2ccd28(0x22f)] = _0x2ccd28(0x2ee)),
        (_0x76a4de[_0x2ccd28(0x20b)]["cssText"] =
          "flex:1;\x20padding:10px;\x20background:#4b4bfF;\x20color:white;\x20border:none;\x20border-radius:8px;\x20cursor:pointer;\x20font-size:14px;\x20font-weight:bold;"));
      const _0x2a2eec = document[_0x2ccd28(0x2e6)]("button");
      ((_0x2a2eec[_0x2ccd28(0x292)] = _0x2ccd28(0x2e0)),
        (_0x2a2eec[_0x2ccd28(0x286)][_0x2ccd28(0x22f)] = _0x2ccd28(0x2fb)),
        (_0x2a2eec[_0x2ccd28(0x20b)][_0x2ccd28(0x27c)] = _0x2ccd28(0x2f5)),
        _0x4dae73["appendChild"](_0x76a4de),
        _0x4dae73[_0x2ccd28(0x22a)](_0x2a2eec));
      function _0x557666(_0x2e53f4) {
        const _0x235883 = _0x2ccd28;
        ((_0x5802a8 = _0x2e53f4),
          _0x2e53f4 === "quizizz"
            ? ((_0x76a4de[_0x235883(0x20b)][_0x235883(0x2ae)] = "#4b4bfF"),
              (_0x76a4de[_0x235883(0x20b)][_0x235883(0x247)] =
                _0x235883(0x26e)),
              (_0x2a2eec["style"][_0x235883(0x2ae)] = _0x235883(0x271)),
              (_0x2a2eec[_0x235883(0x20b)]["color"] = "#333"),
              (_0x120b57[_0x235883(0x2c2)] = "Kode\x20Game\x20Wayground"))
            : ((_0x2a2eec[_0x235883(0x20b)][_0x235883(0x2ae)] =
                _0x235883(0x2eb)),
              (_0x2a2eec["style"][_0x235883(0x247)] = _0x235883(0x26e)),
              (_0x76a4de["style"][_0x235883(0x2ae)] = _0x235883(0x271)),
              (_0x76a4de[_0x235883(0x20b)][_0x235883(0x247)] =
                _0x235883(0x202)),
              (_0x120b57["placeholder"] = _0x235883(0x1b5))));
      }
      ((_0x76a4de["onclick"] = () => _0x557666(_0x2ccd28(0x2ee))),
        (_0x2a2eec[_0x2ccd28(0x2a1)] = () => _0x557666("kahoot")));
      const _0x120b57 = document["createElement"]("input");
      ((_0x120b57[_0x2ccd28(0x22f)] = _0x2ccd28(0x1f2)),
        (_0x120b57["id"] = "quizizz-pin-input"),
        (_0x120b57[_0x2ccd28(0x2c2)] = _0x2ccd28(0x2e8)),
        (_0x120b57[_0x2ccd28(0x20b)][_0x2ccd28(0x27c)] = _0x2ccd28(0x25c)));
      const _0x5230b4 = document[_0x2ccd28(0x2e6)](_0x2ccd28(0x1b6));
      return (
        (_0x5230b4["id"] = _0x2ccd28(0x1e9)),
        (_0x5230b4[_0x2ccd28(0x292)] = _0x2ccd28(0x21b)),
        (_0x5230b4[_0x2ccd28(0x20b)][_0x2ccd28(0x27c)] = _0x2ccd28(0x1a6)),
        (_0x5230b4[_0x2ccd28(0x2a1)] = async () => {
          const _0x371739 = _0x2ccd28,
            _0x245068 = _0x120b57[_0x371739(0x2c3)]["trim"]();
          if (!_0x245068) return;
          const _0x3dd008 = document[_0x371739(0x26f)](_0x371739(0x2c9));
          _0x3dd008[_0x371739(0x2b6)] = _0x371739(0x307);
          if (_0x5802a8 === "quizizz") {
            _0x567a9b = await _0x17a667(_0x245068);
            if (_0x567a9b?.[_0x371739(0x279)]) {
              _0x3dd008["innerHTML"] =
                _0x371739(0x291) +
                _0x567a9b[_0x371739(0x279)] +
                _0x371739(0x2ad);
              return;
            }
            const _0x29d85d = _0x2612d5(_0x567a9b);
            _0x29d85d && _0x29d85d["length"] > 0x0
              ? _0x5dae9f(_0x29d85d, "", _0x371739(0x20a))
              : (_0x3dd008["innerHTML"] = _0x371739(0x23c));
          } else {
            _0x567a9b = await _0x888beb(_0x245068);
            if (_0x567a9b?.[_0x371739(0x279)]) {
              _0x3dd008[_0x371739(0x2b6)] =
                "<div\x20style=\x22text-align:center;\x20color:#ef4444;\x20padding:20px;\x22>" +
                _0x567a9b["error"] +
                _0x371739(0x2ad);
              return;
            }
            const _0x48cd5d = _0x2612d5(_0x567a9b);
            _0x48cd5d && _0x48cd5d[_0x371739(0x217)] > 0x0
              ? _0x5dae9f(_0x48cd5d, "", _0x371739(0x2eb))
              : (_0x3dd008["innerHTML"] = _0x371739(0x23c));
          }
        }),
        {
          gameTypeSelector: _0x4dae73,
          pinInput: _0x120b57,
          fetchBtn: _0x5230b4,
        }
      );
    }
    async function _0x67a328() {
      const _0x4ba211 = _0x3f79e5,
        {
          container: _0x35b2f4,
          header: _0x43f540,
          content: _0x3ef342,
          searchBar: _0x4bca45,
          clearBtn: _0x31e9e8,
          resultsWrap: _0x1eba9b,
          logoutBtn: _0x268862,
          minimizeBtn: _0x1ba0f4,
          hideBtn: _0x465838,
          resizeHandle: _0x14cfa0,
        } = _0x448ebd();
      _0x4993dc();
      let _0x5e2f12 = "";
      const _0x330193 = window[_0x4ba211(0x1fe)][_0x4ba211(0x206)],
        _0x5680d9 = _0x330193[_0x4ba211(0x2de)]("quizizz"),
        _0x19c8d0 = new URLSearchParams(
          window[_0x4ba211(0x1fe)][_0x4ba211(0x1aa)],
        ),
        _0x3aa5ed =
          _0x19c8d0["get"](_0x4ba211(0x249)) ||
          _0x19c8d0[_0x4ba211(0x220)](_0x4ba211(0x1b3));
      if (_0x3aa5ed && _0x5680d9) _0x5e2f12 = _0x3aa5ed;
      else {
        if (_0x5680d9) {
          const _0x5660dc = document["querySelector"](_0x4ba211(0x26a));
          _0x5660dc &&
            (_0x5e2f12 =
              _0x5660dc["textContent"] ||
              _0x5660dc[_0x4ba211(0x2f2)](_0x4ba211(0x1a7)) ||
              "");
        }
      }
      if (!_0x5e2f12 || _0x5e2f12["length"] < 0x4) {
        const _0x4459c1 = document[_0x4ba211(0x2e6)]("div");
        _0x4459c1[_0x4ba211(0x20b)][_0x4ba211(0x27c)] = _0x4ba211(0x24a);
        const {
          gameTypeSelector: _0x56441e,
          pinInput: _0x338f42,
          fetchBtn: _0x18d696,
        } = _0x112da0(_0x4459c1);
        (_0x4459c1[_0x4ba211(0x22a)](_0x56441e),
          _0x4459c1["appendChild"](_0x338f42),
          _0x4459c1[_0x4ba211(0x22a)](_0x18d696),
          _0x1eba9b[_0x4ba211(0x22a)](_0x4459c1));
      } else {
        const _0x3a9be4 = document[_0x4ba211(0x26f)](_0x4ba211(0x2c9));
        ((_0x3a9be4["innerHTML"] = _0x4ba211(0x307)),
          (_0x567a9b = await _0x17a667(_0x5e2f12)));
        if (_0x567a9b?.[_0x4ba211(0x279)]) {
          _0x3a9be4["innerHTML"] =
            _0x4ba211(0x291) + _0x567a9b[_0x4ba211(0x279)] + _0x4ba211(0x2ad);
          return;
        }
        const _0x1c5904 = _0x2612d5(_0x567a9b);
        if (_0x1c5904 && _0x1c5904[_0x4ba211(0x217)] > 0x0)
          _0x5dae9f(_0x1c5904, "", _0x4ba211(0x20a));
        else {
          _0x1eba9b["innerHTML"] = _0x4ba211(0x2e2);
          const _0x5e5c9e = document[_0x4ba211(0x2e6)]("div");
          _0x5e5c9e[_0x4ba211(0x20b)]["cssText"] = _0x4ba211(0x1d3);
          const {
            gameTypeSelector: _0x5d2809,
            pinInput: _0xe620f2,
            fetchBtn: _0x3b089b,
          } = _0x112da0(_0x5e5c9e);
          (_0x5e5c9e["appendChild"](_0x5d2809),
            _0x5e5c9e["appendChild"](_0xe620f2),
            _0x5e5c9e[_0x4ba211(0x22a)](_0x3b089b),
            _0x1eba9b[_0x4ba211(0x22a)](_0x5e5c9e));
        }
      }
      (_0x4bca45[_0x4ba211(0x261)]("input", function () {
        const _0x5bdad9 = _0x4ba211;
        if (!_0x567a9b) return;
        const _0x1c33c0 = this["value"];
        _0x5802a8 === _0x5bdad9(0x2fb)
          ? _0x510a46(_0x1c33c0)
          : _0x535764(_0x1c33c0);
      }),
        _0x31e9e8["addEventListener"]("click", function () {
          const _0x28f666 = _0x4ba211;
          _0x4bca45[_0x28f666(0x2c3)] = "";
          if (!_0x567a9b) return;
          _0x5802a8 === "kahoot" ? _0x510a46() : _0x535764();
        }),
        (_0x268862[_0x4ba211(0x2a1)] = function () {
          _0x431d45(_0x1f0e41);
        }),
        (_0x1ba0f4[_0x4ba211(0x2a1)] = function () {
          const _0x57d0bb = _0x4ba211;
          _0x4370b4 = !_0x4370b4;
          const _0x4b2927 = window[_0x57d0bb(0x1eb)] <= 0x300;
          _0x4370b4
            ? ((_0x3ef342[_0x57d0bb(0x20b)][_0x57d0bb(0x28b)] =
                _0x57d0bb(0x27d)),
              (_0x35b2f4["style"][_0x57d0bb(0x1be)] = _0x4b2927
                ? _0x57d0bb(0x299)
                : _0x57d0bb(0x233)),
              (_0x1ba0f4[_0x57d0bb(0x292)] = "▢"))
            : ((_0x3ef342[_0x57d0bb(0x20b)][_0x57d0bb(0x28b)] =
                _0x57d0bb(0x273)),
              (_0x35b2f4[_0x57d0bb(0x20b)]["height"] = _0x4b2927
                ? _0x57d0bb(0x1b9)
                : _0x57d0bb(0x1e1)),
              (_0x35b2f4[_0x57d0bb(0x20b)][_0x57d0bb(0x242)] = _0x4b2927
                ? _0x57d0bb(0x2ac)
                : _0x57d0bb(0x1e1)),
              (_0x1ba0f4[_0x57d0bb(0x292)] = "—"));
        }),
        (_0x465838["onclick"] = function () {
          const _0xc46199 = _0x4ba211;
          _0x35b2f4[_0xc46199(0x20b)][_0xc46199(0x28b)] = "none";
          const _0x1f743e = document["getElementById"](_0xc46199(0x269));
          if (_0x1f743e)
            _0x1f743e[_0xc46199(0x20b)][_0xc46199(0x1ef)] = _0xc46199(0x1bf);
        }));
      let _0x4a1564 = ![],
        _0x3403ff,
        _0x93c90f;
      (_0x43f540[_0x4ba211(0x261)]("mousedown", function (_0x51acc2) {
        const _0x54dafe = _0x4ba211;
        if (
          _0x51acc2["target"] === _0x1ba0f4 ||
          _0x51acc2[_0x54dafe(0x2af)] === _0x465838 ||
          _0x51acc2[_0x54dafe(0x2af)] === _0x268862 ||
          _0x268862[_0x54dafe(0x27a)](_0x51acc2["target"])
        )
          return;
        ((_0x4a1564 = !![]),
          (_0x3403ff = _0x51acc2[_0x54dafe(0x276)] - _0x35b2f4["offsetLeft"]),
          (_0x93c90f =
            _0x51acc2[_0x54dafe(0x27e)] - _0x35b2f4[_0x54dafe(0x209)]),
          (document[_0x54dafe(0x222)]["style"][_0x54dafe(0x2fd)] = "none"));
      }),
        document[_0x4ba211(0x261)](_0x4ba211(0x1e5), function (_0x4df88c) {
          const _0x56011c = _0x4ba211;
          if (!_0x4a1564) return;
          ((_0x35b2f4[_0x56011c(0x20b)][_0x56011c(0x232)] =
            _0x4df88c[_0x56011c(0x276)] - _0x3403ff + "px"),
            (_0x35b2f4[_0x56011c(0x20b)][_0x56011c(0x2a2)] =
              _0x4df88c[_0x56011c(0x27e)] - _0x93c90f + "px"),
            (_0x35b2f4[_0x56011c(0x20b)][_0x56011c(0x2b2)] = _0x56011c(0x1b9)));
        }),
        document[_0x4ba211(0x261)](_0x4ba211(0x2c8), function () {
          const _0x2c76a7 = _0x4ba211;
          ((_0x4a1564 = ![]),
            (document[_0x2c76a7(0x222)][_0x2c76a7(0x20b)][_0x2c76a7(0x2fd)] =
              _0x2c76a7(0x1b9)));
        }),
        _0x43f540[_0x4ba211(0x261)](
          _0x4ba211(0x203),
          function (_0x3bc56a) {
            const _0x2a18d7 = _0x4ba211;
            if (
              _0x3bc56a["target"] === _0x1ba0f4 ||
              _0x3bc56a["target"] === _0x465838 ||
              _0x3bc56a[_0x2a18d7(0x2af)] === _0x268862 ||
              _0x268862["contains"](_0x3bc56a[_0x2a18d7(0x2af)])
            )
              return;
            const _0x106f6c = _0x3bc56a["touches"][0x0];
            ((_0x4a1564 = !![]),
              (_0x3403ff =
                _0x106f6c[_0x2a18d7(0x276)] - _0x35b2f4[_0x2a18d7(0x205)]),
              (_0x93c90f =
                _0x106f6c[_0x2a18d7(0x27e)] - _0x35b2f4[_0x2a18d7(0x209)]));
          },
          { passive: ![] },
        ),
        document[_0x4ba211(0x261)](
          _0x4ba211(0x1bb),
          function (_0x706679) {
            const _0x4185da = _0x4ba211;
            if (!_0x4a1564) return;
            _0x706679["preventDefault"]();
            const _0x56f8c3 = _0x706679[_0x4185da(0x266)][0x0];
            ((_0x35b2f4[_0x4185da(0x20b)]["left"] =
              _0x56f8c3[_0x4185da(0x276)] - _0x3403ff + "px"),
              (_0x35b2f4[_0x4185da(0x20b)]["top"] =
                _0x56f8c3[_0x4185da(0x27e)] - _0x93c90f + "px"),
              (_0x35b2f4[_0x4185da(0x20b)]["right"] = _0x4185da(0x1b9)));
          },
          { passive: ![] },
        ),
        document[_0x4ba211(0x261)](_0x4ba211(0x272), function () {
          _0x4a1564 = ![];
        }));
      let _0x483c23 = ![],
        _0x12a430,
        _0x2f4a72,
        _0x40c0fb,
        _0x1a5d1d;
      const _0x2403c1 = 0xc8,
        _0xc2de72 = 0xc8;
      (_0x14cfa0[_0x4ba211(0x261)]("mousedown", function (_0x407440) {
        const _0x6d48d3 = _0x4ba211;
        (_0x407440[_0x6d48d3(0x281)](),
          _0x407440[_0x6d48d3(0x213)](),
          (_0x483c23 = !![]),
          (_0x12a430 = _0x407440[_0x6d48d3(0x276)]),
          (_0x2f4a72 = _0x407440[_0x6d48d3(0x27e)]),
          (_0x40c0fb = _0x35b2f4[_0x6d48d3(0x2b1)]),
          (_0x1a5d1d = _0x35b2f4[_0x6d48d3(0x21e)]),
          (document[_0x6d48d3(0x222)][_0x6d48d3(0x20b)]["userSelect"] =
            _0x6d48d3(0x27d)));
      }),
        document[_0x4ba211(0x261)](_0x4ba211(0x1e5), function (_0xcdbf15) {
          const _0x835e71 = _0x4ba211;
          if (!_0x483c23) return;
          ((_0x35b2f4[_0x835e71(0x20b)]["width"] =
            Math[_0x835e71(0x2d1)](
              _0x2403c1,
              _0x40c0fb + (_0xcdbf15["clientX"] - _0x12a430),
            ) + "px"),
            (_0x35b2f4[_0x835e71(0x20b)]["height"] =
              Math[_0x835e71(0x2d1)](
                _0xc2de72,
                _0x1a5d1d + (_0xcdbf15[_0x835e71(0x27e)] - _0x2f4a72),
              ) + "px"),
            (_0x35b2f4[_0x835e71(0x20b)][_0x835e71(0x242)] = _0x835e71(0x27d)));
        }),
        document[_0x4ba211(0x261)](_0x4ba211(0x2c8), function () {
          const _0x1bf1b8 = _0x4ba211;
          ((_0x483c23 = ![]),
            (document["body"][_0x1bf1b8(0x20b)][_0x1bf1b8(0x2fd)] =
              _0x1bf1b8(0x1b9)));
        }),
        _0x14cfa0[_0x4ba211(0x261)](
          _0x4ba211(0x203),
          function (_0xc3f038) {
            const _0x57be8c = _0x4ba211;
            (_0xc3f038[_0x57be8c(0x281)](), _0xc3f038["stopPropagation"]());
            const _0x729612 = _0xc3f038[_0x57be8c(0x266)][0x0];
            ((_0x483c23 = !![]),
              (_0x12a430 = _0x729612[_0x57be8c(0x276)]),
              (_0x2f4a72 = _0x729612[_0x57be8c(0x27e)]),
              (_0x40c0fb = _0x35b2f4[_0x57be8c(0x2b1)]),
              (_0x1a5d1d = _0x35b2f4[_0x57be8c(0x21e)]));
          },
          { passive: ![] },
        ),
        document[_0x4ba211(0x261)](
          _0x4ba211(0x1bb),
          function (_0x2a51d9) {
            const _0x3e473a = _0x4ba211;
            if (!_0x483c23) return;
            _0x2a51d9[_0x3e473a(0x281)]();
            const _0xa76164 = _0x2a51d9[_0x3e473a(0x266)][0x0];
            ((_0x35b2f4[_0x3e473a(0x20b)][_0x3e473a(0x280)] =
              Math[_0x3e473a(0x2d1)](
                _0x2403c1,
                _0x40c0fb + (_0xa76164[_0x3e473a(0x276)] - _0x12a430),
              ) + "px"),
              (_0x35b2f4["style"][_0x3e473a(0x1be)] =
                Math[_0x3e473a(0x2d1)](
                  _0xc2de72,
                  _0x1a5d1d + (_0xa76164[_0x3e473a(0x27e)] - _0x2f4a72),
                ) + "px"),
              (_0x35b2f4[_0x3e473a(0x20b)][_0x3e473a(0x242)] =
                _0x3e473a(0x27d)));
          },
          { passive: ![] },
        ),
        document[_0x4ba211(0x261)]("touchend", function () {
          _0x483c23 = ![];
        }));
    }
    (_0x2b3ff8(), console[_0x3f79e5(0x1f9)](_0x3f79e5(0x1e8)));
  })());
function a0_0x3207() {
  const _0x4aa94f = [
    "16px",
    "0\x206px\x2020px\x20rgba(0,0,0,0.3)",
    "[Bypass]\x20Blocked\x20EventTarget.",
    "Inter,\x20system-ui,\x20sans-serif",
    "color:\x20#333\x20!important;\x20margin:\x200\x200\x20",
    "500px",
    "status",
    "data",
    "<i\x20class=\x22fa-solid\x20fa-arrow-right-from-bracket\x22\x20aria-hidden=\x22true\x22></i>",
    "mousemove",
    "<div\x20style=\x22text-align:center;\x20color:#666;\x20padding:20px;\x22>Tidak\x20ada\x20hasil\x20pencarian</div>",
    "<span\x20style=\x22background:#dbeafe;\x20color:#1d4ed8;\x20font-size:10px;\x20padding:1px\x205px;\x20border-radius:4px;\x20margin-left:4px;\x20font-weight:bold;\x22>B/S</span>",
    "Dv4Hack\x20loaded!",
    "quizizz-fetch-btn",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
    "innerWidth",
    "layout",
    "json",
    "dv4hack-fontawesome",
    "opacity",
    "screenX",
    "Dv4Hack",
    "text",
    "calc(100%\x20-\x2020px)",
    "onblur",
    "Error\x20fetching\x20Kahoot\x20answers:",
    "replace",
    "dv4hack-license-modal",
    "Cari\x20soal...",
    "log",
    "font-size:16px\x20!important;\x20font-weight:700\x20!important;\x20margin-bottom:8px\x20!important;",
    "0px",
    "\x20!important;\x20text-align:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Masukkan\x20Token\x20terlebih\x20dahulu!",
    "location",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x204px\x20solid\x20",
    "marginLeft",
    "assign",
    "#333",
    "touchstart",
    "dv4hack-logout-modal",
    "offsetLeft",
    "hostname",
    "Token\x20sudah\x20digunakan\x20di\x20perangkat\x20lain",
    "display:\x20flex;\x20flex-direction:\x20column;\x20gap:\x20",
    "offsetTop",
    "#4b4bfF",
    "style",
    "slice",
    "find",
    "outerHeight",
    "middle",
    ";\x0a\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20border:\x20none;\x20border-radius:\x206px;\x20background:\x20rgba(255,255,255,0.2);\x0a\x20\x20\x20\x20\x20\x20color:\x20white;\x20cursor:\x20pointer;\x20font-size:\x20",
    "\x20!important;\x20min-height:\x2020px\x20!important;",
    "quizizz-hack-frame",
    "stopPropagation",
    "randomUUID",
    ";\x20padding:\x204px\x208px;",
    "mjx-container,\x20.MathJax",
    "length",
    "join",
    "28px",
    "360px",
    "Ambil\x20Jawaban",
    "toLowerCase",
    "alt",
    "offsetHeight",
    "visibilityState",
    "get",
    ";\x20font-weight:\x20bold;",
    "body",
    "200px",
    "verticalAlign",
    "fullscreenElement",
    "\x0a\x20\x20\x20\x20\x20\x20width:\x20min(320px,\x2092vw)\x20!important;\x20background:\x20#fff\x20!important;\x20color:\x20#111827\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x2010px\x20!important;\x20border:\x201px\x20solid\x20#e5e7eb\x20!important;\x0a\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2012px\x2030px\x20rgba(0,0,0,0.25)\x20!important;\x20padding:\x2018px\x20!important;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center\x20!important;\x0a\x20\x20\x20\x20",
    "remove",
    "disabled",
    "MSQ",
    "appendChild",
    "Enter",
    "rel",
    "8px\x2010px",
    "now",
    "type",
    "[Bypass]\x20Blocked\x20msRequestFullscreen\x20call",
    "4px",
    "left",
    "44px",
    "Belum\x20punya\x20token?\x20<a\x20href=\x22https://dv4hack.vercel.app\x22\x20target=\x22_blank\x22\x20style=\x22color:\x20#4b4bfF;\x20text-decoration:\x20none;\x22>Beli\x20di\x20sini</a>",
    "[Bypass]\x20Blocked\x20webkitExitFullscreen\x20call",
    "BLANK",
    "0.7",
    "overflow",
    "innerHeight",
    "767298XofFPf",
    "15px",
    "<div\x20style=\x22text-align:center;\x20color:#ef4444;\x20padding:20px;\x22>Gagal\x20mengambil\x20data</div>",
    "257YGcFvG",
    "webkitExitFullscreen",
    "visible",
    "inline-block",
    "[Bypass]\x20Detection\x20bypass\x20loaded\x20successfully!",
    "maxHeight",
    "hasFocus",
    "<div\x20style=\x22color:#999;\x20font-size:12px;\x20font-style:italic;\x22>Tidak\x20ada\x20jawaban\x20tersedia</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x2012px\x20!important;\x20background:\x20#e5e7eb\x20!important;\x20border:\x201px\x20solid\x20#ccc\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x20none\x20!important;\x20border-radius:\x200\x208px\x208px\x200\x20!important;\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2040px\x20!important;\x20height:\x2040px\x20!important;\x20font-size:\x2014px\x20!important;\x20line-height:\x2040px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box\x20!important;\x20margin:\x200\x20!important;\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "availWidth",
    "color",
    "Wayground",
    "pin",
    "padding:20px;\x20text-align:center;",
    "Token\x20tidak\x20valid!",
    "scale(0.95)",
    "2346zEKkDB",
    "oncontextmenu",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:14px;\x20font-weight:600;\x20color:#111;\x20margin-bottom:8px;\x20word-wrap:break-word;\x20overflow-wrap:break-word;\x20overflow:hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22background:#e5e7eb;\x20padding:2px\x206px;\x20border-radius:4px;\x20margin-right:5px;\x20font-size:12px;\x22>",
    "Memvalidasi...",
    "0\x200.1em",
    "stretch",
    "msExitFullscreen",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x20top:\x200\x20!important;\x20left:\x200\x20!important;\x20right:\x200\x20!important;\x20bottom:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.85)\x20!important;\x20display:\x20flex\x20!important;\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x20z-index:\x209999999\x20!important;\x20font-family:\x20\x27Segoe\x20UI\x27,\x20Inter,\x20system-ui,\x20sans-serif\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "detail",
    "https://dv4hack.vercel.app/api",
    "<span\x20style=\x22background:#ede9fe;\x20color:#7c3aed;\x20font-size:10px;\x20padding:1px\x205px;\x20border-radius:4px;\x20margin-left:4px;\x20font-weight:bold;\x22>ISIAN</span>",
    "8px",
    "/logout",
    "POST",
    "display:flex\x20!important;\x20gap:10px\x20!important;\x20justify-content:center\x20!important;",
    "width:80%;\x20padding:10px;\x20border:1px\x20solid\x20#ccc;\x20border-radius:8px;\x20margin-bottom:10px;\x20font-size:14px;",
    "3392712lvcrez",
    "scrollX",
    "setItem",
    "Logout",
    "addEventListener",
    "fixed",
    "resolve",
    "questionMedia",
    ";\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200;\x0a\x20\x20\x20\x20",
    "touches",
    "20px",
    "message",
    "quizizz-hack-toggle",
    "[data-pin],\x20.game-pin,\x20[class*=\x22pin\x22]",
    "#f9fafb",
    "11px",
    "999999",
    "white",
    "getElementById",
    "input",
    "#ccc",
    "touchend",
    "block",
    "margin",
    "\x20!important;\x20outline:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box\x20!important;\x20margin-bottom:\x20",
    "clientX",
    "forEach",
    "<span\x20style=\x22background:#fef3c7;\x20color:#d97706;\x20font-size:10px;\x20padding:1px\x205px;\x20border-radius:4px;\x20margin-left:4px;\x20font-weight:bold;\x22>MULTI</span>",
    "error",
    "contains",
    "blank",
    "cssText",
    "none",
    "clientY",
    "/quizizz?pin=",
    "width",
    "preventDefault",
    "dv4hack-katex-css",
    "div",
    "valid",
    "Server\x20error,\x20hubungi\x20admin!",
    "dataset",
    "\x20!important;\x20font-weight:\x20bold\x20!important;",
    "requestFullscreen",
    "image",
    "Bearer\x20",
    "display",
    "setAttribute",
    "space-between",
    "https://dv4hack.vercel.app/img/icodh.png",
    "[License]\x20Validation\x20error:",
    "onvisibilitychange",
    "<div\x20style=\x22text-align:center;\x20color:#ef4444;\x20padding:20px;\x22>",
    "textContent",
    "previousSibling",
    "auth",
    "\x20!important;\x20margin-top:\x20",
    "link",
    "/kahoot?link=",
    "keypress",
    "40px",
    "nodeType",
    "/check/",
    "\x20!important;\x20border-radius:\x206px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#000\x20!important;\x20background:\x20#fff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#333\x20!important;\x20font-size:\x20",
    "onfocus",
    "[Bypass]\x20Blocked\x20document\x20",
    "1320748QqOIbZ",
    "Aktif!",
    "onclick",
    "top",
    "6px",
    "flex",
    "TEXT_NODE",
    "defineProperty",
    "head",
    "contextmenu",
    "removeItem",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:8px;\x20overflow:hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22math-answer\x20dv4hack-nomath\x22>",
    "\x20event\x20listener",
    "70vh",
    "</div>",
    "background",
    "target",
    "mozRequestFullScreen",
    "offsetWidth",
    "right",
    "reject",
    "Error\x20fetching\x20answers:",
    "multiAnswer",
    "innerHTML",
    "active",
    "gap",
    "#008800",
    "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
    "resize",
    "crypto",
    "answers",
    "Token\x20sudah\x20expired\x20pada\x20",
    "\x0a\x20\x20\x20\x20\x20\x20margin-left:\x208px;\x20width:\x20",
    "[Bypass]\x20Blocked\x20requestFullscreen\x20call",
    "13px",
    "placeholder",
    "value",
    "fullscreenEnabled",
    "se-resize",
    "structure",
    "scrollY",
    "mouseup",
    "quizizz-results",
    "Error\x20validasi\x20Token.\x20Pastikan\x20terhubung\x20internet!",
    "Batal",
    "msRequestFullscreen",
    "[Bypass]\x20Blocked\x20msExitFullscreen\x20call",
    "expired",
    "focus",
    "webkitRequestFullscreen",
    "max",
    "color:\x20#666\x20!important;\x20font-size:\x20",
    "dv4hack-license-submit",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x20padding:\x20",
    "call",
    "question",
    "cursor:\x20pointer;\x20padding:\x206px\x2010px;\x20background:\x20rgba(255,255,255,0.2);\x20border-radius:\x206px;\x20font-size:\x20",
    "Logout\x20Dv4Hack?",
    "10px",
    "screenY",
    "span",
    "success",
    "Login",
    "includes",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22max-width:100%;\x20border-radius:8px;\x20margin-top:8px;\x20display:block;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>",
    "Kahoot",
    "answer",
    "<div\x20style=\x22text-align:center;\x20color:#ef4444;\x20padding:20px;\x22>Gagal\x20mengambil\x20data.\x20Coba\x20masukkan\x20PIN\x20manual.</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22dv4hack-nomath\x22>",
    "data-dv4hack-done",
    "indexOf",
    "createElement",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Sembunyikan\x20katex-mathml\x20(duplikat\x20teks)\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#quizizz-hack-frame\x20.katex-mathml\x20{\x20display:\x20none\x20!important;\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20katex-display:\x20inline\x20agar\x20menyatu\x20dengan\x20teks\x20soal\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#quizizz-hack-frame\x20.katex-display\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x200.15em\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vertical-align:\x20middle\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Kunci\x20fix\x20garis\x20akar:\x20.hide-tail\x20harus\x20overflow:hidden\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#quizizz-hack-frame\x20.hide-tail\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20SVG\x20akar:\x20width=\x22400em\x22\x20dihapus\x20di\x20JS,\x20pastikan\x20max-width\x20via\x20CSS\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#quizizz-hack-frame\x20.katex\x20svg\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Pastikan\x20card\x20tidak\x20overflow\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#quizizz-hack-frame\x20.katex\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Kode\x20Game\x20Wayground",
    "mediaUrl",
    "\x20!important;\x20font-weight:\x20bold\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "#ff6b35",
    "move",
    "[License]\x20Logout\x20error:",
    "quizizz",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "setMockDimensions",
    "100%",
    "getAttribute",
    "#00aa00",
    "Dv4Hack!",
    "flex:1;\x20padding:10px;\x20background:#ccc;\x20color:#333;\x20border:none;\x20border-radius:8px;\x20cursor:pointer;\x20font-size:14px;\x20font-weight:bold;",
    "options",
    "flex:1\x20!important;\x20padding:10px\x20!important;\x20border:1px\x20solid\x20#d1d5db\x20!important;\x20border-radius:7px\x20!important;\x20background:#fff\x20!important;\x20color:#111827\x20!important;\x20cursor:pointer\x20!important;\x20font-weight:600\x20!important;",
    "50px",
    "[Bypass]\x20Blocked\x20webkitRequestFullscreen\x20call",
    "Token\x20tidak\x20aktif!",
    "kahoot",
    "331830LAEOum",
    "userSelect",
    ".katex-display",
    ".katex-mathml",
    "\x20!important;\x20border-radius:\x206px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x20background:\x20#0066ff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white\x20!important;\x20font-size:\x20",
    "trim",
    "hidden",
    "MCQ",
    "click",
    "30px",
    "scale(1)",
    "<div\x20style=\x22text-align:center;\x20color:#666;\x20padding:20px;\x22>Memuat\x20data...</div>",
    "href",
    "querySelectorAll",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20999998\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.3s\x20ease,\x20transform\x200.2s\x20ease\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2050px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20",
    "12px",
    "width:80%;\x20padding:10px;\x20background:#4b4bfF;\x20color:white;\x20border:none;\x20border-radius:8px;\x20cursor:pointer;\x20font-size:14px;",
    "data-pin",
    "stylesheet",
    "getItem",
    "search",
    "owner",
    "linear-gradient(135deg,\x20transparent\x2050%,\x20#4b4bfF\x2050%)",
    "string",
    "2px\x20solid\x20#fbbf24",
    "random",
    "660KekeyD",
    "14px",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2042px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2042px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none\x20!important;\x0a\x20\x20\x20\x20",
    "gamePin",
    "isArray",
    "QuizID\x20Kahoot",
    "button",
    "color:\x20#d00\x20!important;\x20font-size:\x20",
    "true_false",
    "auto",
    "fullscreenerror",
    "touchmove",
    "[Bypass]\x20Blocked\x20",
    "896776NccMSL",
    "height",
    "0.1",
    "prototype",
    "url",
    "map",
    "toString",
    "mozExitFullScreen",
    "transform",
    "absolute",
    "Fullscreen\x20request\x20blocked",
    "focusout",
    "TRUE_FALSE",
    "5125MKHPOb",
    "media",
    "\x0a\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x20inset:\x200\x20!important;\x20z-index:\x2010000000\x20!important;\x0a\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.6)\x20!important;\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20font-family:\x20Inter,\x20system-ui,\x20sans-serif\x20!important;\x20padding:\x2014px\x20!important;\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x20padding:\x208px\x2012px\x20!important;\x20border-radius:\x208px\x200\x200\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc\x20!important;\x20border-right:\x20none\x20!important;\x20font-size:\x2014px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2040px\x20!important;\x20line-height:\x2024px\x20!important;\x20box-sizing:\x20border-box\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none\x20!important;\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "exitFullscreen",
    "dv4hack-license-message",
    "key",
    "\x200\x20!important;\x20font-size:\x20",
    "padding:20px;\x20text-align:center;\x20margin-top:10px;",
    ".hide-tail",
    "<img\x20src=\x22",
    "#fff",
    "Token\x20akan\x20dilepas\x20dari\x20perangkat\x20ini\x20dan\x20perlu\x20login\x20ulang\x20untuk\x20memakai\x20Dv4Hack.",
    "flex:1\x20!important;\x20padding:10px\x20!important;\x20border:none\x20!important;\x20border-radius:7px\x20!important;\x20background:#ef4444\x20!important;\x20color:#fff\x20!important;\x20cursor:pointer\x20!important;\x20font-weight:700\x20!important;",
    "dv4hack-math-fix-style",
    "0\x208px",
    "webkitHidden",
  ];
  a0_0x3207 = function () {
    return _0x4aa94f;
  };
  return a0_0x3207();
}
