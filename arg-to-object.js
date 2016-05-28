function parse(argv, obj) {
	var v = [{key:'', val:[]}]
	var argc = argv.length

	for(var i = 0; i < argc; ++i) {
		var arg = argv[i]
		if(arg.startsWith('-'))
			v.push({key: arg.replace(/^-+/,''), val: []})
		else 
			v[v.length-1].val.push(arg)
	}
	
	v=v.slice(1)

	Object.keys(obj).forEach(key => {
		o = v.find(v => key.startsWith(v.key) )
		if(o) {
			if(typeof obj[key] === 'boolean') {
				obj[key] = true
			} else if(Array.isArray(obj[key])) {
				o.val.forEach(v=>obj[key].push(v))
			} else if(typeof obj[key] === 'string') {
				obj[key] = o.val[0]
			}
		}
	})

	return obj
}


module.exports.parse = parse