from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Cambia estos datos por los correctos de tu entorno / docker-compose
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:dayana@localhost:5432/postgres"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
