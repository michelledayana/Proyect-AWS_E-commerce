import os
import sys

from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context

# --- Para que pueda importar la metadata ---
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..')))

from app.db.base import Base  # importa tu metadata aquí

# --- Agregas dotenv para cargar variables desde el .env ---
from dotenv import load_dotenv
load_dotenv(dotenv_path=os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../.env')))

# Lee la configuración del archivo alembic.ini
config = context.config

# Configura logging desde alembic.ini
fileConfig(config.config_file_name)

target_metadata = Base.metadata

# Si la variable de entorno DATABASE_URL está, la usamos para la URL
database_url = os.getenv('DATABASE_URL')
if database_url:
    config.set_main_option('sqlalchemy.url', database_url)

def run_migrations_offline():
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
