from app.ext.openai import openai
import json

class PromptService:
    
	@staticmethod
	def create(carrer: str):
		prompt = "Me de 5 topicos que eu precio ter conhecimento avançado para desenvolver minha carreira na area: {}. De os topicos em formato JSON, com uma chave 'topics' contendo uma lista com os 5 topicos".format(carrer)
		res = openai.prompt(prompt, max_tokens=100)
		res = res.get("choices")[0].get('text').strip()
		return json.loads(res)

	