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
sets res status code to 400

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.badRequest().end();}```
<a name="module_express-status.unauthorized"></a>
### express-status.unauthorized()
sets res status code to 401

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unauthorized().end();}```
<a name="module_express-status.forbidden"></a>
### express-status.forbidden()
sets res status code to 403

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.forbidden().end();}```
<a name="module_express-status.notFound"></a>
### express-status.notFound()
sets res status code to 404

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notFound().end();}```
<a name="module_express-status.methodNotAllowed"></a>
### express-status.methodNotAllowed()
sets res status code to 405

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.methodNotAllowed().end();}```
<a name="module_express-status.notAcceptable"></a>
### express-status.notAcceptable()
sets res status code to 406

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notAcceptable().end();}```
<a name="module_express-status.proxyAuthenticationRequired"></a>
### express-status.proxyAuthenticationRequired()
sets res status code to 407

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.proxyAuthenticationRequired().end();}```
<a name="module_express-status.requestTimeout"></a>
### express-status.requestTimeout()
sets res status code to 408

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestTimeout().end();}```
<a name="module_express-status.conflict"></a>
### express-status.conflict()
sets res status code to 409

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.conflict().end();}```
<a name="module_express-status.gone"></a>
### express-status.gone()
sets res status code to 410

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.gone().end();}```
<a name="module_express-status.lengthRequired"></a>
### express-status.lengthRequired()
sets res status code to 411

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.lengthRequired().end();}```
<a name="module_express-status.preconditionFailed"></a>
### express-status.preconditionFailed()
sets res status code to 412

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.preconditionFailed().end();}```
<a name="module_express-status.requestEntityTooLarge"></a>
### express-status.requestEntityTooLarge()
sets res status code to 413

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestEntityTooLarge().end();}```
<a name="module_express-status.requestUriTooLang"></a>
### express-status.requestUriTooLang()
sets res status code to 414

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestUriTooLang().end();}```
<a name="module_express-status.unsupportedMediaType"></a>
### express-status.unsupportedMediaType()
sets res status code to 415

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unsupportedMediaType().end();}```
<a name="module_express-status.requestedRangeNotSatisfiable"></a>
### express-status.requestedRangeNotSatisfiable()
sets res status code to 416

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestedRangeNotSatisfiable().end();}```
<a name="module_express-status.expectationFailed"></a>
### express-status.expectationFailed()
sets res status code to 417

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.expectationFailed().end();}```
<a name="module_express-status.imATeapot"></a>
### express-status.imATeapot()
sets res status code to 418

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.imATeapot().end();}```
<a name="module_express-status.authenticationTimeout"></a>
### express-status.authenticationTimeout()
sets res status code to 419

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.authenticationTimeout().end();}```
<a name="module_express-status.locked"></a>
### express-status.locked()
sets res status code to 423

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.locked().end();}```
<a name="module_express-status.failedDependency"></a>
### express-status.failedDependency()
sets res status code to 424

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.failedDependency().end();}```
<a name="module_express-status.upgradeRequired"></a>
### express-status.upgradeRequired()
sets res status code to 426

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.upgradeRequired().end();}```
<a name="module_express-status.preconditionRequired"></a>
### express-status.preconditionRequired()
sets res status code to 428

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.preconditionRequired().end();}```
<a name="module_express-status.tooManyRequests"></a>
### express-status.tooManyRequests()
sets res status code to 429

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.tooManyRequests().end();}```
<a name="module_express-status.requestHeaderFieldTooLarge"></a>
### express-status.requestHeaderFieldTooLarge()
sets res status code to 431

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.requestHeaderFieldTooLarge().end();}```
<a name="module_express-status.loginTimeout"></a>
### express-status.loginTimeout()
sets res status code to 440

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.loginTimeout().end();}```
<a name="module_express-status.unavailableForLegalReasons"></a>
### express-status.unavailableForLegalReasons()
sets res status code to 451

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.unavailableForLegalReasons().end();}```
<a name="module_express-status.internalServerError"></a>
### express-status.internalServerError()
sets res status code to 500

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.internalServerError().end();}```
<a name="module_express-status.notImplemented"></a>
### express-status.notImplemented()
sets res status code to 501

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notImplemented().end();}```
<a name="module_express-status.badGateway"></a>
### express-status.badGateway()
sets res status code to 502

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.badGateway().end();}```
<a name="module_express-status.serviceUnavailable"></a>
### express-status.serviceUnavailable()
sets res status code to 503

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.serviceUnavailable().end();}```
<a name="module_express-status.gatewayTimeout"></a>
### express-status.gatewayTimeout()
sets res status code to 504

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.gatewayTimeout().end();}```
<a name="module_express-status.httpVersionNutSupported"></a>
### express-status.httpVersionNutSupported()
sets res status code to 505

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.httpVersionNutSupported().end();}```
<a name="module_express-status.variantAlsoNegotiates"></a>
### express-status.variantAlsoNegotiates()
sets res status code to 506

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.variantAlsoNegotiates().end();}```
<a name="module_express-status.insufficientStorage"></a>
### express-status.insufficientStorage()
sets res status code to 507

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.insufficientStorage().end();}```
<a name="module_express-status.loopDetected"></a>
### express-status.loopDetected()
sets res status code to 508

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.loopDetected().end();}```
<a name="module_express-status.notExtended"></a>
### express-status.notExtended()
sets res status code to 510

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notExtended().end();}```
<a name="module_express-status.networkAuthenticationRequired"></a>
### express-status.networkAuthenticationRequired()
sets res status code to 511

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notExtended().end();}```
