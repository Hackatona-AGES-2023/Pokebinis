from app.ext.openai import openai


class PromptService:
    
	@staticmethod
	def create(carrer: str):
		print(openai.prompt(carrer))

	