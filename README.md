# express-status

Extends express respons prototype with status codes

## Purpose
The purpose of this library is to remove magic numbers from your code and define the status codes in one place.

## Install
```bash

```

## Test
test with code coverage
```bash
gulp
```

test only
```bash
gulp test
```

    <a name="module_express-status"></a>
## express-status
Exports an object with status codes and extends the express request object by adding a method that will set the status code and return the request object.

**Example**  
```javascriptvar statusCodes = require()```

* [express-status](#module_express-status)
  * [.badRequest()](#module_express-status.badRequest)
  * [.unauthorized()](#module_express-status.unauthorized)
  * [.forbidden()](#module_express-status.forbidden)
  * [.notFound()](#module_express-status.notFound)
  * [.methodNotAllowed()](#module_express-status.methodNotAllowed)
  * [.notAcceptable()](#module_express-status.notAcceptable)
  * [.proxyAuthenticationRequired()](#module_express-status.proxyAuthenticationRequired)
  * [.requestTimeout()](#module_express-status.requestTimeout)
  * [.conflict()](#module_express-status.conflict)
  * [.gone()](#module_express-status.gone)
  * [.lengthRequired()](#module_express-status.lengthRequired)
  * [.preconditionFailed()](#module_express-status.preconditionFailed)
  * [.requestEntityTooLarge()](#module_express-status.requestEntityTooLarge)
  * [.requestUriTooLang()](#module_express-status.requestUriTooLang)
  * [.unsupportedMediaType()](#module_express-status.unsupportedMediaType)
  * [.requestedRangeNotSatisfiable()](#module_express-status.requestedRangeNotSatisfiable)
  * [.expectationFailed()](#module_express-status.expectationFailed)
  * [.imATeapot()](#module_express-status.imATeapot)
  * [.authenticationTimeout()](#module_express-status.authenticationTimeout)
  * [.locked()](#module_express-status.locked)
  * [.failedDependency()](#module_express-status.failedDependency)
  * [.upgradeRequired()](#module_express-status.upgradeRequired)
  * [.preconditionRequired()](#module_express-status.preconditionRequired)
  * [.tooManyRequests()](#module_express-status.tooManyRequests)
  * [.requestHeaderFieldTooLarge()](#module_express-status.requestHeaderFieldTooLarge)
  * [.loginTimeout()](#module_express-status.loginTimeout)
  * [.unavailableForLegalReasons()](#module_express-status.unavailableForLegalReasons)
  * [.internalServerError()](#module_express-status.internalServerError)
  * [.notImplemented()](#module_express-status.notImplemented)
  * [.badGateway()](#module_express-status.badGateway)
  * [.serviceUnavailable()](#module_express-status.serviceUnavailable)
  * [.gatewayTimeout()](#module_express-status.gatewayTimeout)
  * [.httpVersionNutSupported()](#module_express-status.httpVersionNutSupported)
  * [.variantAlsoNegotiates()](#module_express-status.variantAlsoNegotiates)
  * [.insufficientStorage()](#module_express-status.insufficientStorage)
  * [.loopDetected()](#module_express-status.loopDetected)
  * [.notExtended()](#module_express-status.notExtended)
  * [.networkAuthenticationRequired()](#module_express-status.networkAuthenticationRequired)

<a name="module_express-status.badRequest"></a>
### express-status.badRequest()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.badRequest().end();}```
<a name="module_express-status.unauthorized"></a>
### express-status.unauthorized()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unauthorized().end();}```
<a name="module_express-status.forbidden"></a>
### express-status.forbidden()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.forbidden().end();}```
<a name="module_express-status.notFound"></a>
### express-status.notFound()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notFound().end();}```
<a name="module_express-status.methodNotAllowed"></a>
### express-status.methodNotAllowed()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.methodNotAllowed().end();}```
<a name="module_express-status.notAcceptable"></a>
### express-status.notAcceptable()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notAcceptable().end();}```
<a name="module_express-status.proxyAuthenticationRequired"></a>
### express-status.proxyAuthenticationRequired()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.proxyAuthenticationRequired().end();}```
<a name="module_express-status.requestTimeout"></a>
### express-status.requestTimeout()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestTimeout().end();}```
<a name="module_express-status.conflict"></a>
### express-status.conflict()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.conflict().end();}```
<a name="module_express-status.gone"></a>
### express-status.gone()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.gone().end();}```
<a name="module_express-status.lengthRequired"></a>
### express-status.lengthRequired()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.lengthRequired().end();}```
<a name="module_express-status.preconditionFailed"></a>
### express-status.preconditionFailed()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.preconditionFailed().end();}```
<a name="module_express-status.requestEntityTooLarge"></a>
### express-status.requestEntityTooLarge()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestEntityTooLarge().end();}```
<a name="module_express-status.requestUriTooLang"></a>
### express-status.requestUriTooLang()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestUriTooLang().end();}```
<a name="module_express-status.unsupportedMediaType"></a>
### express-status.unsupportedMediaType()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unsupportedMediaType().end();}```
<a name="module_express-status.requestedRangeNotSatisfiable"></a>
### express-status.requestedRangeNotSatisfiable()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestedRangeNotSatisfiable().end();}```
<a name="module_express-status.expectationFailed"></a>
### express-status.expectationFailed()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.expectationFailed().end();}```
<a name="module_express-status.imATeapot"></a>
### express-status.imATeapot()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.imATeapot().end();}```
<a name="module_express-status.authenticationTimeout"></a>
### express-status.authenticationTimeout()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.authenticationTimeout().end();}```
<a name="module_express-status.locked"></a>
### express-status.locked()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.locked().end();}```
<a name="module_express-status.failedDependency"></a>
### express-status.failedDependency()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.failedDependency().end();}```
<a name="module_express-status.upgradeRequired"></a>
### express-status.upgradeRequired()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.upgradeRequired().end();}```
<a name="module_express-status.preconditionRequired"></a>
### express-status.preconditionRequired()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.preconditionRequired().end();}```
<a name="module_express-status.tooManyRequests"></a>
### express-status.tooManyRequests()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.tooManyRequests().end();}```
<a name="module_express-status.requestHeaderFieldTooLarge"></a>
### express-status.requestHeaderFieldTooLarge()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestHeaderFieldTooLarge().end();}```
<a name="module_express-status.loginTimeout"></a>
### express-status.loginTimeout()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.loginTimeout().end();}```
<a name="module_express-status.unavailableForLegalReasons"></a>
### express-status.unavailableForLegalReasons()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unavailableForLegalReasons().end();}```
<a name="module_express-status.internalServerError"></a>
### express-status.internalServerError()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.internalServerError().end();}```
<a name="module_express-status.notImplemented"></a>
### express-status.notImplemented()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notImplemented().end();}```
<a name="module_express-status.badGateway"></a>
### express-status.badGateway()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.badGateway().end();}```
<a name="module_express-status.serviceUnavailable"></a>
### express-status.serviceUnavailable()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.serviceUnavailable().end();}```
<a name="module_express-status.gatewayTimeout"></a>
### express-status.gatewayTimeout()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.gatewayTimeout().end();}```
<a name="module_express-status.httpVersionNutSupported"></a>
### express-status.httpVersionNutSupported()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.httpVersionNutSupported().end();}```
<a name="module_express-status.variantAlsoNegotiates"></a>
### express-status.variantAlsoNegotiates()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.variantAlsoNegotiates().end();}```
<a name="module_express-status.insufficientStorage"></a>
### express-status.insufficientStorage()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.insufficientStorage().end();}```
<a name="module_express-status.loopDetected"></a>
### express-status.loopDetected()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.loopDetected().end();}```
<a name="module_express-status.notExtended"></a>
### express-status.notExtended()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notExtended().end();}```
<a name="module_express-status.networkAuthenticationRequired"></a>
### express-status.networkAuthenticationRequired()
**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notExtended().end();}```
