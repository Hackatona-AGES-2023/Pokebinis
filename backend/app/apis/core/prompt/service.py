from app.ext.openai import openai
import json

class PromptService:
    
	@staticmethod
	def create(carrer: str):
		res = openai.get_topics(carrer)
		return json.loads(res) 

	