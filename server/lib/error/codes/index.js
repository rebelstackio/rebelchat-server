/* lib/error/codes/index.js */

module.exports = {

	"BAD_REQUEST":400,

	"BAD_HEADER":400,
	"HEADER_ERROR":400,
	"NOT_ACCEPT_JSON":400,
	"NOT_FORMENCODED_OR_APPJSON":400,
	"NOT_APP_JSON":400,

	"REQ_PARAM":400,
	"INVALID_JSON":400,

	"INVALID_TOKEN":400,

	"LOGIN_ERROR":401,
	"SIGNUP_ERROR":401,

	"JWT_CREDS_REQUIRED":401,
	"JWT_CREDS_BAD_SCHEME":401,
	"JWT_CREDS_BAD_FORMAT":401,
	"JWT_UNSUPPORTED_ALGORITHM":401,
	"JWT_TOKEN_NOT_ACTIVE":401,
	"JWT_TOKEN_EXPIRED":401,
	"JWT_SIG_VERIFY_FAILED":401,
	"JWT_PAYLOAD_CORRUPT":401,

	"FORBIDDEN":403,

	"RESOURCE_NOT_FOUND":404,
	"CONFLICT":409,
	"SERVER_ERROR":500,
	"DB_SERVER_ERROR": 500,

	"VARIANT_STOCK_UNAVAILABLE":200.501
};
