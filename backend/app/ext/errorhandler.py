from flask import jsonify
from app.errors.base import ApiException

def api_exception_handler(exception: ApiException):
	response = jsonify(
		{'code': exception.code, 'message': exception.message}
	)
	response.status_code = exception.code
	return response
