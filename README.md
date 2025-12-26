# Vendor App - Full Stack Project

A modern full-stack application built with Next.js, FastAPI, and PostgreSQL.

## Tech Stack

- **Frontend**: Next.js 14 (TypeScript) with Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL
- **Package Manager**: pnpm (frontend)

## Project Structure

```
vendorV1/
├── frontend/          # Next.js application
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   └── ...
├── backend/          # FastAPI application
│   ├── alembic/      # Database migrations
│   └── ...
├── docker-compose.yml # PostgreSQL setup
└── README.md
```

## Prerequisites

- Node.js 18+ and pnpm
- Python 3.11+
- PostgreSQL 16+ (or use Docker Compose)
- Docker and Docker Compose (optional, for PostgreSQL)

## Setup Instructions

### 1. Database Setup

#### Option A: Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

This will start a PostgreSQL container on port 5432.

#### Option B: Local PostgreSQL

Create a database named `vendordb` and update the connection string in `backend/.env`.

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Edit .env file with your database credentials

# Run database migrations
alembic upgrade head

# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies using pnpm
pnpm install

# Start the development server
pnpm dev
```

The frontend will be available at `http://localhost:3000`

## Environment Variables

### Backend (.env)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/vendordb
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
API_V1_PREFIX=/api/v1
ENVIRONMENT=development
```

## Development

### Running Both Services

1. Start PostgreSQL (Docker Compose):
   ```bash
   docker-compose up -d
   ```

2. Start Backend (Terminal 1):
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   uvicorn main:app --reload
   ```

3. Start Frontend (Terminal 2):
   ```bash
   cd frontend
   pnpm dev
   ```

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /api/v1/status` - API status
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

## Database Migrations

```bash
# Create a new migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

## License

MIT

# vendor
