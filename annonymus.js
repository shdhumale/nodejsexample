/* const user = () => {
    console.log("hello A function")
}

user(); */

var user = function (a) {
    console.log("values are" + a)
}

function testExport(a, b) {
    var c = a + b
    console.log("ans" + c)
}

user(10)

module.exports.user = user
module.exports.testExport = testExport