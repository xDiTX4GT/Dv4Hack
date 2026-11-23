from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.trustedhost import TrustedHostMiddleware
from app.database import engine
from app.models import Base
from app.routers.admin_router import router as admin_router
from app.routers.api_router import router as api_router
from app.schemas import ProxyHeadersMiddleware
from app.config import API_KEY, ADMIN_USER, ADMIN_PASS, BASE_DIR

if not API_KEY:
    raise ValueError("API_KEY belum diset!")

if not ADMIN_USER or not ADMIN_PASS:
    raise ValueError("ADMIN_USER / ADMIN_PASS belum diset!")

Base.metadata.create_all(bind=engine)

app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)

app.mount("/static", StaticFiles(directory=f"{BASE_DIR}/static"), name="static")

@app.get("/favicon.ico")
def favicon():
    return FileResponse(f"{BASE_DIR}/static/favicon.ico")

app.add_middleware(ProxyHeadersMiddleware)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=["*"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(admin_router)
app.include_router(api_router)