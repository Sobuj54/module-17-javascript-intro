// below concept will only work when a number is given as a string
var price1 = '11'
// if a number is given as a value to a varibe inside quotion then that number will be considered as string
var price2 = '30'
// adding these two variables
var totalPrice = price1 + price2
// this will give about of concatenation of two strings...for this case the output will be 1130
console.log(totalPrice)

// this will be the same even if one variable is string
var price3 = 11
var price4 = '32'
var totalPrice = price1 + price2
// this will also give the same output as before
console.log(totalPrice)

// string conversion (only works when numbers are given as strings)
// parse is used to convert number string in int float or any tipe
var price5 = parseInt(price4)
var totalPrice = price3 + price5
console.log(totalPrice)
