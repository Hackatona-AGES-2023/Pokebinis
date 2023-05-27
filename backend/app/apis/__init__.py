from flask import Flask

def init_apis(app: Flask, base_url: str):
	from .core import inject_api as inject_core_api

	inject_core_api(app, f'{base_url}/core')
	