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

	def get_topics(self, prompt: str):
		response = openai.Completion.create(
			model="text-davinci-003",
			prompt="Me de 5 topicos que eu precio ter conhecimento avançado para desenvolver minha carreira na area: {}. De os topicos em formato JSON, com uma chave 'topics' contendo uma lista com os 5 topicos".format(prompt),
			temperature=0,
			max_tokens=100
		)
		return response.get("choices")[0].get('text').strip()
		