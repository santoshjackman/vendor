from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
    title="Vendor API",
    description="FastAPI backend for Vendor App",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Welcome to Vendor API"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.get("/api/v1/status")
async def api_status():
    return {
        "status": "ok",
        "version": "1.0.0",
        "service": "vendor-api"
    }

