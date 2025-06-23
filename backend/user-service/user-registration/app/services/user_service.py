from sqlalchemy.orm import Session
from app.schemas.user_schema import UserCreate
from app.repositories.user_repository import create_user
from app.utils.hash import hash_password

def register_user(user: UserCreate, db: Session):
    hashed_pw = hash_password(user.password)
    return create_user(db, user, hashed_pw)
