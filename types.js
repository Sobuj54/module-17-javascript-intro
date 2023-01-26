// we can find out what type of value is stored in a variable by using typeof inside console.log

var x = 11
var y = '22'
// by using typeof we can find out variable value type
console.log(typeof x)
console.log(typeof y)

// boolean
var isHappy = true
console.log(typeof isHappy)

// when no value is given to a variable
var noValue
// the output will be undefined
console.log(typeof noValue)

// floating numbers
// when adding two floating number of 0.1 and 0.2 we get hiccup or minor problem in js..we can solve this by fixing value after decimal point
var num1 = 0.1
var num2 = 0.2
// sum
var sum = num1 + num2

console.log(sum)

// fixing value after decimal point
sum = sum.toFixed(3)
// but in this case the output will  be shown as string rather than number..becase of toFixed
console.log(sum)
// solving problem of toFixed
// by using parseFloat we can make the string into float
sum = parseFloat(sum)
console.log(sum)
