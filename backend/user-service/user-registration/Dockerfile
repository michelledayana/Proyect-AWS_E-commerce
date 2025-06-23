FROM python:3.13-slim

# Instalar cliente PostgreSQL para pg_isready
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar contenido de la carpeta local app directamente a /app en el contenedor
COPY ./app .

COPY alembic.ini .
COPY wait-for-postgres.sh .
RUN chmod +x wait-for-postgres.sh       

EXPOSE 3007

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3007"]
