from flask_restx import Resource

from .dto import PromptDto
from .service import PromptService

ns = PromptDto.api

@ns.route('')
class PromptController(Resource):

	@ns.expect(PromptDto.carrer_prompt_schema)
	@ns.marshal_with(PromptDto.carrer_prompt_response_schema)
	def post(self):
		return PromptService.create(**ns.payload)
	