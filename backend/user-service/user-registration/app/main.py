from fastapi import FastAPI
from app.api.v1.routes import user_routes

app = FastAPI(title="User Registration Service")

app.include_router(user_routes.router, prefix="/api/v1/users", tags=["Users"])
