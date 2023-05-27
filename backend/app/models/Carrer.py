from datetime import datetime
from app.ext.database import db


class Carrer(db.Model):
	__tablename__ = 'carrers'

	id: int = db.Column(db.Integer, primary_key=True)

	name: str = db.Column(db.String(256), nullable=False)
	
	user = db.relationship('User', backref='users')

	user_id: int = db.Column(
        db.Integer, db.ForeignKey('users.id', ondelete='CASCADE')
    )
	