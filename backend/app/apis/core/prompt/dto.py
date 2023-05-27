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

	topics_list_schema =  api.model(
		'topics_list_schema',
		{
			'topics': fields.List(fields.String())
		}
	)

	topics_contents_schema =  api.model(
		'topics_contents_schema',
		{
			'data': fields.List(
				fields.Nested(api.model(
				'topic_content', 
				{
					'name': fields.String(),
					'content': fields.Nested(api.model(
						'content_data',
						{
							'media_url': fields.String(),
							'text': fields.String()
						}
					))
				}
			)))
		}
	)
