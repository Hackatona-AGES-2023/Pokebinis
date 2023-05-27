from flask_restx import Namespace, fields


class PromptDto:
	api = Namespace(name='Prompt', description='Operations related to prompt.')

	carrer_prompt_schema =  api.model(
		'carrer_prompt_schema',
		{
			'carrer': fields.String()
		}
	)

	carrer_prompt_response_schema =  api.model(
		'carrer_prompt_response_schema',
		{
			'topics': fields.List(fields.String())
		}
	)
