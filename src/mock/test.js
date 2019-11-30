const fs = require("fs");

let testData = fs.readFileSync( __dirname + '\\test.json')
  console.log(testData.toString())