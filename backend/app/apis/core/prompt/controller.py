from flask_restx import Resource

from .dto import PromptDto
from .service import PromptService

ns = PromptDto.api

@ns.route('/carrers')
class PromptCarrerController(Resource):

	@ns.expect(PromptDto.carrer_prompt_schema)
	@ns.marshal_with(PromptDto.carrer_prompt_response_schema)
	def post(self):
		return PromptService.get_topics_from_carrer(**ns.payload)


@ns.route('/topics')
class PromptTopicsController(Resource):

	@ns.expect(PromptDto.topics_list_schema)
	# @ns.marshal_with(PromptDto.carrer_prompt_response_schema)
	def post(self):
		return PromptService.get_contents_from_topics(**ns.payload)

	