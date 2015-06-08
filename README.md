# express-status

Extends express response prototype with status codes helper methods.

[![Build Status](https://travis-ci.org/RiptideCloud/express-status.svg)](https://travis-ci.org/RiptideCloud/express-status)
[![Coverage Status](https://coveralls.io/repos/RiptideCloud/express-status/badge.svg)](https://coveralls.io/r/RiptideCloud/express-status)

## Purpose
The purpose of this library is to remove magic numbers from your code and define the status codes in one place.

## Install
```bash
npm install express-status
```

## Test
test with code coverage
```bash
gulp
```

unit test only
```bash
gulp test
```

## Document
Documentation is managed by commenting code with [jsdoc](http://usejsdoc.org/) and editing the [template](https://github.com/RiptideCloud/express-status/blob/master/docjs2md/README.hbs).
You can regenerate the [README.md](https://github.com/RiptideCloud/express-status/blob/master/README.md) by executing
```bash
gulp doc
```

    <a name="module_express-status"></a>
## express-status
Exports an object with status codes and extends the express request object by adding a method that will set the status code and return the request object.

**Example**  
```javascriptvar statusCodes = require()```

* [express-status](#module_express-status)
  * [.switchingProtocols()](#module_express-status.switchingProtocols)
  * [.processing()](#module_express-status.processing)
  * [.ok()](#module_express-status.ok)
  * [.created()](#module_express-status.created)
  * [.accepted()](#module_express-status.accepted)
  * [.nonAuthoritative()](#module_express-status.nonAuthoritative)
  * [.noContent()](#module_express-status.noContent)
  * [.resetContent()](#module_express-status.resetContent)
  * [.partialContent()](#module_express-status.partialContent)
  * [.multiStatus()](#module_express-status.multiStatus)
  * [.alreadyReported()](#module_express-status.alreadyReported)
  * [.imUsed()](#module_express-status.imUsed)
  * [.multipleChoices()](#module_express-status.multipleChoices)
  * [.movedPermanently()](#module_express-status.movedPermanently)
  * [.found()](#module_express-status.found)
  * [.seeOther()](#module_express-status.seeOther)
  * [.notModified()](#module_express-status.notModified)
  * [.useProxy()](#module_express-status.useProxy)
  * [.switchProxy()](#module_express-status.switchProxy)
  * [.temporaryRedirect()](#module_express-status.temporaryRedirect)
  * [.permanentRedirect()](#module_express-status.permanentRedirect)
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

<a name="module_express-status.switchingProtocols"></a>
### express-status.switchingProtocols()
sets res status code to 101

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.switchingProtocols().end();}```
<a name="module_express-status.processing"></a>
### express-status.processing()
sets res status code to 102

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.processing().end();}```
<a name="module_express-status.ok"></a>
### express-status.ok()
sets res status code to 200

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.ok().end();}```
<a name="module_express-status.created"></a>
### express-status.created()
sets res status code to 201

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.created().end();}```
<a name="module_express-status.accepted"></a>
### express-status.accepted()
sets res status code to 202

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.accepted().end();}```
<a name="module_express-status.nonAuthoritative"></a>
### express-status.nonAuthoritative()
sets res status code to 203

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.nonAuthoritative().end();}```
<a name="module_express-status.noContent"></a>
### express-status.noContent()
sets res status code to 204

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.noContent().end();}```
<a name="module_express-status.resetContent"></a>
### express-status.resetContent()
sets res status code to 205

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.resetContent().end();}```
<a name="module_express-status.partialContent"></a>
### express-status.partialContent()
sets res status code to 206

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.partialContent().end();}```
<a name="module_express-status.multiStatus"></a>
### express-status.multiStatus()
sets res status code to 207

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.multiStatus().end();}```
<a name="module_express-status.alreadyReported"></a>
### express-status.alreadyReported()
sets res status code to 208

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.alreadyReported().end();}```
<a name="module_express-status.imUsed"></a>
### express-status.imUsed()
sets res status code to 226

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.imUsed().end();}```
<a name="module_express-status.multipleChoices"></a>
### express-status.multipleChoices()
sets res status code to 300

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.multipleChoices().end();}```
<a name="module_express-status.movedPermanently"></a>
### express-status.movedPermanently()
sets res status code to 301

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.movedPermanently().end();}```
<a name="module_express-status.found"></a>
### express-status.found()
sets res status code to 302

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.found().end();}```
<a name="module_express-status.seeOther"></a>
### express-status.seeOther()
sets res status code to 303

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.seeOther().end();}```
<a name="module_express-status.notModified"></a>
### express-status.notModified()
sets res status code to 304

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.notModified().end();}```
<a name="module_express-status.useProxy"></a>
### express-status.useProxy()
sets res status code to 305

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.useProxy().end();}```
<a name="module_express-status.switchProxy"></a>
### express-status.switchProxy()
sets res status code to 306

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.switchProxy().end();}```
<a name="module_express-status.temporaryRedirect"></a>
### express-status.temporaryRedirect()
sets res status code to 307

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.temporaryRedirect().end();}```
<a name="module_express-status.permanentRedirect"></a>
### express-status.permanentRedirect()
sets res status code to 308

**Kind**: static method of <code>[express-status](#module_express-status)</code>  
**Example**  
```javascriptfunction(req, res){ res.permanentRedirect().end();}```
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
