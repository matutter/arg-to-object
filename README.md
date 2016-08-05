[![Build Status](https://travis-ci.org/matutter/arg-to-object.svg?branch=master)](https://travis-ci.org/matutter/arg-to-object) [![Coverage Status](https://coveralls.io/repos/github/matutter/arg-to-object/badge.svg?branch=master)](https://coveralls.io/github/matutter/arg-to-object?branch=master)

# ARG-TO-OBJECT


```javascript
// sample.js

const ato = require('arg-to-object')

function Params() {
	this.files = []
	this.recursive = false
	this.ext = ''
}

var params = ato.parse(process.argv, new Params())
```

Without a base object to help resolve names.

```javascript
// node sample.js -files a b c -r -ext .conf
var params = ato.parse()
// params.files = ['a', 'b', 'c']
// parmas.r = true
// params.ext = '.conf'
```

[Prefix-search][1] allows well named variables to be resolved by simple tak-shorthand.

```javascript
// the below behaves identical to the first example when the object is seeded
// node sample.js -f a b c -r -e .conf
var params = { files: [], recursive: false, extension: '' }
params = ato.parse(params)
// params = { files: ['a', 'b', 'c'], recursive: true, ...}
```

[1]: https://www.npmjs.com/package/prefix-search
