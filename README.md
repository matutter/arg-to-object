[![Build Status](https://travis-ci.org/matutter/arg-to-object.svg?branch=master)](https://travis-ci.org/matutter/arg-to-object) [![Coverage Status](https://coveralls.io/repos/github/matutter/arg-to-object/badge.svg?branch=master)](https://coveralls.io/github/matutter/arg-to-object?branch=master)
=============== 
 ARG-TO-OBJECT
=============== 


```node .\test.js -files a b c d e -r -ext .conf```

```javascript
const ato = require('arg-to-object')

function Params() {
	this.files = []
	this.recursive = false
	this.ext = ''
}

var params = ato.parse(process.argv, new Params())

console.log(params)
```
