#!/bin/sh

echo "Esperando a que PostgreSQL esté disponible..."

until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER"; do
  sleep 1
done

echo "PostgreSQL está disponible, continuando..."

exec "$@"
