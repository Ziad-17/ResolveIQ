from fastapi import FastAPI
from fastapi.responses import JSONResponse

from app.core.config import settings

docs_url = None if settings.app_env == "production" else "/docs"
app = FastAPI(title="ResolveIQ API", docs_url=docs_url)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.exception_handler(Exception)
async def unhandled(request, exc):
    return JSONResponse(
        status_code=500,
        content={"error": {"code": "INTERNAL", "message": "Unexpected error"}},
    )
