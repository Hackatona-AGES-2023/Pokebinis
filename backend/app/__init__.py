from flask import Flask

from app.config import init_config
from app.ext import init_extensions


def create_app() -> Flask:
	app = Flask(__name__)
	
	init_config(app)

	init_extensions(app)

	from app.models import User, Carrer, Topic

	return app
	