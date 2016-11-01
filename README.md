[![Build Status](https://travis-ci.org/matutter/arg-to-object.svg?branch=master)](https://travis-ci.org/matutter/arg-to-object) [![Coverage Status](https://coveralls.io/repos/github/matutter/arg-to-object/badge.svg?branch=master)](https://coveralls.io/github/matutter/arg-to-object?branch=master) [![dependencies Status](https://david-dm.org/matutter/arg-to-object/status.svg)](https://david-dm.org/matutter/arg-to-object)

# ARG-TO-OBJECT

ATO is a quick-and-dirty argument parser meant for situations when a complicated CLI isn't necessary.

Use `process.argv` by default.
```javascript
const ato = require('arg-to-object')
var params = ato.parse()
```

An object can be used for defaults.
```javascript
// node sample.js -files a b c -r false
var defaults = { files: [], recursive: true }
var params = ato.parse(defaults)

/*
 * {
 *   files: ["a", "b", "c"],
 *   recursive: false
 * }
 */
```

Argument shorthands are expanded by a simple prefix-search
```javascript
// node sample.js -f a b c -r 
params = ato.parse(defaults)

/* '-f' extends to 'files'
 * { files: ["a", "b", "c"], ... }
 */ 
```

Pass in arguments manually.
```javascript
ato.parse(process.argv, defaults)
```

Without a default object, the parsed object is constructed with *-tak*s as keys.
The arguments `-f a b c -r` will yield
```javascript
{
  f: ["a", "b", "c"],
  r: true
}
```

Type interpolation examples.  
args=`-r` result=`{r: true}`  
args=`-r 1 2 3` result=`{r: [1, 2, 3]}`  
args=`-r false` result=`{r: false}`  
args=`-r -f hello` result=`{r: true, f: 'hello'}`  
