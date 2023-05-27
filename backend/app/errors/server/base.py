from app.errors.base import ApiException


class ServerException(ApiException):
	code = 500


class InternalServerError(ServerException):
	code = 500


class NotImplementedException(ServerException):
	code = 501


class BadGatewayException(ServerException):
	code = 502


class ServiceUnavailable(ServerException):
	code = 503
	