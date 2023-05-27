
""" Api Exception Abstract Class"""
class ApiException(Exception):
	code: int
	message: str
