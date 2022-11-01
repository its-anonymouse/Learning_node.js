// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./5_names');
// const {sayHi,sayBye} = require('./4.2_greet');
const a = require('./6_greet');

require('./7_mind-grenade');

// sayHi(names.Mohit)
// sayBye(names.Deepak)

a.sayHi("abs")
a.sayBye("djl")

