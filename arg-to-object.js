const fmt = require('util').format

function normalizeKey(key) {
  var i = key.lastIndexOf('-')  
  return key.substr(i+1)
}

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

function arg_to_object(args, obj) {
  if(args.length == 0) return obj

  var argo = {}
  var argc = args.length
  var argi = 0
  var key = null
  var val = null
  var set = null

  for(; argi < argc; ++argi) {
    set = args[argi]
    key = normalizeKey(set[0])
    val = null

    if(set.length == 1) {
      val = true // it exists, therefor it is true
    } else if(set.length == 2) {
      // following string is json
      val = JSONParse(set[1])
    } else {
      val = []
      for(var i=1; i < set.length; ++i) {
        val.push(JSONParse(set[i]))
      }
    }
    argo[key] = val
  }
  
  return Object.assign(obj, argo)
}


// parse argv into [[key, val]] array
function parse(argv, obj) {

  var argc = 0   // i really like the work arg! like a pirate kinda
  var args = []
  var argi = -1

  // if arg1 is undefined use process.argv
  if(obj === undefined) {
   obj = {}
  }
  
  if(!Array.isArray(argv)) {
    argv = process.argv
  }

  argc = argv.length

  for(var i = 0; i < argc; ++i) {
    var arg = argv[i]
    if(arg.startsWith('-')) {
      argi++
      args.push([arg])
      continue
    }
    if(~argi) {
      args[argi].push(arg)
    }
  }
  
  return arg_to_object(args, obj)
}

module.exports.parse = parse
