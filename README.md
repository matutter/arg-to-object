=============== 
 ARG-TO-OBJECT
=============== 


```node .\test.js -files a b c d e -r --ext .conf```

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