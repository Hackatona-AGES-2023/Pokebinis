from app.ext.database import db
from app.models import Carrer


class PromptRepository:

	@staticmethod
	def create_carrer(carrer: Carrer) -> Carrer:
		db.session.add(carrer)
		db.session.commit()
		return carrer
