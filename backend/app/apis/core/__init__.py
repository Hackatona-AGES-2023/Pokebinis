from flask import Flask, Blueprint
from flask_restx import Api

def inject_api(app: Flask, path: str):

	blueprint = Blueprint('bp_core_api', __name__)
	core_api = Api(blueprint, title='Core REST API')

	from .prompt import inject_api as inject_prompt_api
	inject_prompt_api(core_api, '/prompts')

	app.register_blueprint(blueprint, url_prefix=path)
