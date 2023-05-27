import os
from os.path import join, dirname
from typing import List
from dotenv import load_dotenv
from flask import Flask

load_dotenv(join(dirname(__file__), '.env'))

def getenv(name):
    try:
        return os.environ[name]
    except KeyError:
        message = "Expected environment variable '{}' not set.".format(name)
        raise Exception(message)

class Config:
	#TOKEN_SECRET = getenv('TOKEN_SECRET')

	OPEN_AI_API_KEY = getenv('OPEN_AI_API_KEY')
	DB_ENGINE = getenv('DB_ENGINE')
	DB_HOST = getenv('DB_HOST')
	DB_USERNAME = getenv('DB_USERNAME')
	DB_PASSWORD = getenv('DB_PASSWORD')
	DB_PORT = getenv('DB_PORT')
	DB_NAME = getenv('DB_NAME')

	SQLALCHEMY_DATABASE_URI = f'{DB_ENGINE}://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
	#SQLALCHEMY_DATABASE_URI= f'{DB_ENGINE}:///{DB_NAME}'

class DevelopmentConfig(Config):
	FLASK_DEBUG = 1


def init_config(app: Flask):
	config = DevelopmentConfig()
	app.config.from_object(config)