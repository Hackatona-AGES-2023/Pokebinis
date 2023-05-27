from app.ext.openai import openai
import json

class PromptService:
    
	@staticmethod
	def get_topics_from_carrer(carrer: str):
		prompt = "Me de 5 topicos que eu precio ter conhecimento avançado para desenvolver minha carreira na area: {}. De os topicos em formato JSON, com uma chave 'topics' contendo uma lista com os 5 topicos".format(carrer)
		res = openai.prompt(prompt, max_tokens=100)
		res = res.get("choices")[0].get('text').strip()
		return json.loads(res)

	@staticmethod
	def get_contents_from_topics(topics: list()):
		response = list()
		print(topics)
		# for topic in topics:
			
		# 	prompt = "Me de 5 topicos que eu precio ter conhecimento avançado para desenvolver minha carreira na area: {}. De os topicos em formato JSON, com uma chave 'topics' contendo uma lista com os 5 topicos".format(topic)
		# 	res = openai.prompt(prompt, max_tokens=100)
		# 	content = res.get("choices")[0].get('text').strip()
		# 	print(content)
		# 	response.append({
		# 		'name': topic,
		# 		'content': {
		# 			"media_url": "",
		# 			"text": ""
		# 		}
		# 		})
		# return json.loads(res)
	