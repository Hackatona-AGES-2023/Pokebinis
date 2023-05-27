from flask import Flask

from app.config import init_config
from app.ext import init_extensions


def create_app() -> Flask:
	app = Flask(__name__)
	
	init_config(app)

	init_extensions(app)

	with app.app_context():
		from app.apis import init_apis
		init_apis(app, '/api')

	return app
	