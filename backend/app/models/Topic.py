from app.ext.database import db


class Topic(db.Model):
	__tablename__ = 'topics'

	id: int = db.Column(db.Integer, primary_key=True)

	title: str = db.Column(db.String(256), nullable=False)

	text: str = db.Column(db.String(2048), nullable=True)

	media_url: str = db.Column(db.String(512), nullable=True)
	
	carrer = db.relationship('Carrer', backref='carrers')

	carrer_id: int = db.Column(
        db.Integer, db.ForeignKey('users.id', ondelete='CASCADE')
    )
	