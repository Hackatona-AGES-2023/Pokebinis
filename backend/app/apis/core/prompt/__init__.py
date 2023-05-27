from flask_restx import Api

from .controller import ns

def inject_api(api: Api, path: str):
	api.add_namespace(ns, path=path)
