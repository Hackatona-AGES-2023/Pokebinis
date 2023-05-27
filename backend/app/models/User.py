from datetime import datetime
from app.ext.database import db


class User(db.Model):
	__tablename__ = 'users'

	id: int = db.Column(db.Integer, primary_key=True)

	name: str = db.Column(db.String(256), nullable=False)
	
	email: str = db.Column(db.String(256), unique=True, nullable=False)
	
	password: str = db.Column(db.String(256), nullable=False)

	created_at: datetime = db.Column(db.DateTime(), default=datetime.utcnow)

	active: bool = db.Column(db.Boolean(), default=True)
	