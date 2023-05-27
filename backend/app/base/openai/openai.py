from flask import Flask
import openai


class OpenAI:
    
	def __init__(self, app: Flask=None):
		self._api_key = None

		if app is not None:
			self.init_app(app)

	def init_app(self, app: Flask):
		self._api_key = app.config.get('OPEN_AI_API_KEY')
		openai.api_key = self._api_key

	def prompt(self, prompt: str):
		response = openai.Completion.create(
			model="text-davinci-003",
			prompt=prompt,
			temperature=0,
			max_tokens=100
		)
		return response
		