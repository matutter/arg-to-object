const search = require('prefix-search').search
const fmt = require('util').format

function JSONParse(str) {
  // we'll parse 3 types, valid json, number, and string
  str = str.trim()
  var c = str[0] // test 1st character
  if(c == '[' || c == '{') {
    try {
      return JSON.parse(str)
    } catch(e) {
      return eval(fmt("(%s)", str))
    }
  } else {
    var val = Number(str)
    return isNaN(val) ? str : val;
  }
}

function asValue(data, length) {
  var val = null
  if(length == 0)
    val = true
  else if(length == 1)
    val = JSONParse(data[0])
  else
    val = data.map(JSONParse)  
  return val
}

function resolveKey(key, keys) {
  key = key.substr( key.lastIndexOf('-') + 1 )  
  
  if(keys.length) {
    var i = search(key, keys)
    if(~i) key = keys[i]
  }

  return key
}

// parse argv into [[key, val]] array
function parse(argv, obj) {

  if(argv && !Array.isArray(argv)) {
    obj = argv
    argv = null
  }

  obj = obj ? Object.assign(obj, {}) : {} // todo check this
  argv = argv || process.argv
  
  var keys = Object.keys(obj)
  var len = argv.length
  var i = 0
  var k = 0

  while(i < len) {
    if(argv[i].startsWith('-')) {
      k = i++
      for(; i < len && !argv[i].startsWith('-'); ++i);
      var key = resolveKey(argv[k], keys)
      var data = argv.slice(k+1, i)
      var data_length = data.length
      obj[key] = asValue(data, data_length)
    } else i++    
  }
  
  return obj
}

module.exports.parse = parse
