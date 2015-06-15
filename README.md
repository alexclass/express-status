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
