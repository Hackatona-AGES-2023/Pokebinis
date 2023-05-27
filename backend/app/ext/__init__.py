from flask import Flask

from app.errors.base import ApiException
from app.ext.database import db
from app.ext.cors import cors
from app.ext.migration import migrate
from app.ext.errorhandler import api_exception_handler
from app.ext.openai import openai

def init_extensions(app: Flask):
	db.init_app(app)
	migrate.init_app(app, db)
	app.register_error_handler(ApiException, api_exception_handler)
	cors.init_app(app)
	openai.init_app(app)
	