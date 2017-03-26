var numbers = [1, 2, 3, 4, 5]

var newNumbers = []
for (var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 1
}

numbers.forEach(function(number) {
    console.log(number)
})
