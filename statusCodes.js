module.exports = {
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.badRequest().end();
     * }
     * ```
     *
     */
    badRequest: {
        //The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
        message: 'Bad Request',
        code: 400
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.unauthorized().end();
     * }
     * ```
     *
     */
    unauthorized: {
        //Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
        message: 'Unauthorized',
        code: 401
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.forbidden().end();
     * }
     * ```
     *
     */
    forbidden: {
        //The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.
        message: 'Forbidden',
        code: 403
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.notFound().end();
     * }
     * ```
     *
     */
    notFound: {
        //The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.
        message: 'Not Found',
        code: 404
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.methodNotAllowed().end();
     * }
     * ```
     *
     */
    methodNotAllowed: {
        //A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.
        message: 'Method Not Allowed',
        code: 405
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.notAcceptable().end();
     * }
     * ```
     *
     */
    notAcceptable: {
        //The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
        message: 'Not Acceptable',
        code: 406
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.proxyAuthenticationRequired().end();
     * }
     * ```
     *
     */
    proxyAuthenticationRequired: {
        //The client must first authenticate itself with the proxy.
        message: 'Proxy Authentication Required',
        code: 407
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.requestTimeout().end();
     * }
     * ```
     *
     */
    requestTimeout: {
        //The server timed out waiting for the request. According to HTTP specifications: The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.
        message: 'Request Timeout',
        code: 408
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.conflict().end();
     * }
     * ```
     *
     */
    conflict: {
        //Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.
        message: 'Conflict',
        code: 409
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.gone().end();
     * }
     * ```
     *
     */
    gone: {
        //Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices.[15] Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
        message: 'Gone',
        code: 410
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.lengthRequired().end();
     * }
     * ```
     *
     */
    lengthRequired: {
        //The request did not specify the length of its content, which is required by the requested resource.
        message: 'Length Required',
        code: 411
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.preconditionFailed().end();
     * }
     * ```
     *
     */
    preconditionFailed: {
        //The server does not meet one of the preconditions that the requester put on the request.
        message: 'Precondition Failed',
        code: 412
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.requestEntityTooLarge().end();
     * }
     * ```
     *
     */
    requestEntityTooLarge: {
        //The request is larger than the server is willing or able to process.
        message: 'Request Entity Too Large',
        code: 413
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.requestUriTooLang().end();
     * }
     * ```
     *
     */
    requestUriTooLang: {
        //The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.
        message: 'Request-URI Too Long',
        code: 414
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.unsupportedMediaType().end();
     * }
     * ```
     *
     */
    unsupportedMediaType: {
        //The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
        message: 'Unsupported Media Type',
        code: 415
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.requestedRangeNotSatisfiable().end();
     * }
     * ```
     *
     */
    requestedRangeNotSatisfiable: {
        //The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.
        message: 'Requested Range Not Satisfiable',
        code: 416
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.expectationFailed().end();
     * }
     * ```
     *
     */
    expectationFailed: {
        //The server cannot meet the requirements of the Expect request-header field.
        message: 'Expectation Failed',
        code: 417
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.imATeapot().end();
     * }
     * ```
     *
     */
    imATeapot: {
        //This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee.
        message: 'I\'m a teapot',
        code: 418
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.authenticationTimeout().end();
     * }
     * ```
     *
     */
    authenticationTimeout: {
        //Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated clients being denied access to specific server resources.
        message: 'Authentication Timeout',
        code: 419
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.locked().end();
     * }
     * ```
     *
     */
    locked: {
        //The resource that is being accessed is locked
        message: 'Locked',
        code: 423
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.failedDependency().end();
     * }
     * ```
     *
     */
    failedDependency: {
        //The request failed due to failure of a previous request (e.g., a PROPPATCH).
        message: 'Failed Dependency',
        code: 424
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.upgradeRequired().end();
     * }
     * ```
     *
     */
    upgradeRequired: {
        //The client should switch to a different protocol such as TLS/1.0.
        message: 'Upgrade Required',
        code: 426
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.preconditionRequired().end();
     * }
     * ```
     *
     */
    preconditionRequired: {
        //The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
        message: 'Precondition Required',
        code: 428
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.tooManyRequests().end();
     * }
     * ```
     *
     */
    tooManyRequests: {
        //The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.
        message: 'Too Many Requests',
        code: 429
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.requestHeaderFieldTooLarge().end();
     * }
     * ```
     *
     */
    requestHeaderFieldTooLarge: {
        //The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
        message: 'Request Header Fields Too Large',
        code: 431
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.loginTimeout().end();
     * }
     * ```
     *
     */
    loginTimeout: {
        //A Microsoft extension. Indicates that your session has expired.
        message: 'Login Timeout ',
        code: 440
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.unavailableForLegalReasons().end();
     * }
     * ```
     *
     */
    unavailableForLegalReasons: {
        //Defined in the internet draft A New HTTP Status Code for Legally-restricted Resources.[21] Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.
        message: 'Unavailable For Legal Reasons',
        code: 451
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.internalServerError().end();
     * }
     * ```
     *
     */
    internalServerError: {
        //A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
        message: 'Internal Server Error',
        code: 500
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.notImplemented().end();
     * }
     * ```
     *
     */
    notImplemented: {
        //The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).
        message: 'Not Implemented',
        code: 501
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.badGateway().end();
     * }
     * ```
     *
     */
    badGateway: {
        //The server was acting as a gateway or proxy and received an invalid response from the upstream server.
        message: 'Bad Gateway',
        code: 502
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.serviceUnavailable().end();
     * }
     * ```
     *
     */
    serviceUnavailable: {
        //The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
        message: 'Service Unavailable',
        code: 503
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.gatewayTimeout().end();
     * }
     * ```
     *
     */
    gatewayTimeout: {
        //The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
        message: 'Gateway Timeout',
        code: 504
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.httpVersionNutSupported().end();
     * }
     * ```
     *
     */
    httpVersionNutSupported: {
        //The server does not support the HTTP protocol version used in the request.
        message: 'HTTP Version Not Supported',
        code: 505
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.variantAlsoNegotiates().end();
     * }
     * ```
     *
     */
    variantAlsoNegotiates: {
        //Transparent content negotiation for the request results in a circular reference.
        message: 'Variant Also Negotiates',
        code: 506
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.insufficientStorage().end();
     * }
     * ```
     *
     */
    insufficientStorage: {
        //The server is unable to store the representation needed to complete the request.
        message: 'Insufficient Storage',
        code: 507
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.loopDetected().end();
     * }
     * ```
     *
     */
    loopDetected: {
        //The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported).
        message: 'Loop Detected',
        code: 508
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.notExtended().end();
     * }
     * ```
     *
     */
    notExtended: {
        //Further extensions to the request are required for the server to fulfil it.
        message: 'Not Extended',
        code: 510
    },
    /**
     * @method
     * @memberof module:express-status
     * @example
     * ```javascript
     * function(req, res){
     *  res.notExtended().end();
     * }
     * ```
     *
     */
    networkAuthenticationRequired: {
        //The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot)
        message: 'Network Authentication Required',
        code: 511
    }
};
