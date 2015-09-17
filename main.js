var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

console.log('>>>Problem 1')

for (var i=0; i < animals.length-1 ; i++)
	console.log(animals[i])

console.log('>>>Problem 2')
for (var i=0; i < animals.length ; i++)
	if (!(i%2))
	console.log(animals[i])

console.log('>>>Problem 3')
for (var i= animals.length-1; i >= 0; i--)
	console.log(animals[i])

console.log('>>>Problem 4')
for (var i=0; i < animals.length; i++)
	if (i === 0 || i === animals.length-1) {
		console.log(animals[i])
	} else {
		console.log(animals[i])
		console.log(animals[i])
	}

console.log('Loop Practice 3')

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

console.log('>>>example')
for(var i=0; i<students.length; i++) {
	console.log(students[i].name);
}

console.log('>>>Problem 1')
for(var i=0; i<students.length; i++) {
	console.log(students[i].age);
}

console.log('>>>Problem 2')
for(var i=0; i<students.length; i++) {
	console.log(students[i].name + ',' ,students[i].city);
}

console.log('>>>Problem 3')
for(var i=0; i<students.length; i++) {
	if (students[i].city === 'Boulder')
	console.log(students[i].name, 'is from' ,students[i].city);
}

console.log('>>>Problem 3')
for(var i=0; i<students.length; i++) {
	if (students[i].age > 25)
	console.log(students[i].name, 'is older than 25');
}



console.log('%%%%%%% Starting the function Practice 2 %%%%%%')

console.log('getName')
var getName = function (object) {
	return object.name
}
console.log(getName({ name: 'Luisa', age: 25 }))

console.log('totalLetters')
var totalLetters = function (stringArray) {
	var count = 0
	var charCounter = function (stringArrayElement) {
		count += stringArrayElement.length
	}
	stringArray.forEach(charCounter)
	return count
}
console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

console.log('keyValue')

var keyValue = function (key, value) {
	var object = {}
	object[key] = value
	return object
}
console.log(keyValue('city', 'Denver'))

console.log('negativeIndex')
var negativeIndex = function (myArray, targetIndex) {
	if ( -targetIndex > myArray.length)
		targetIndex = targetIndex % myArray.length
	return myArray[ ( myArray.length + targetIndex) ]
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

console.log('removeM')
var removeM = function (string) {
	
	var stringArray = []
	stringArray = string.split('')

	var spliceM = function (stringCharacter, index){
		if (stringCharacter === 'm')
			stringArray.splice(index,1)
	}
	stringArray.forEach(spliceM)
	return stringArray.join('')

}
console.log(removeM('family'))
console.log(removeM('memory'))

console.log('printObject')
var printObject = function (object) {
	for (key in object)
		console.log(key, 'is', object[key])
}
printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' })

console.log('vowels')
var vowels = function (string) {
	var stringArray = string.split('')
	console.log(stringArray)
	var vowelArray = stringArray.filter(function (letter){
		if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U')
			return true
		else 
			return false
	})
	return vowelArray
}
console.log(vowels('alabama'))
console.log(vowels('WhAt evil odd ducks!'))

console.log('twins')
var twins = function (originalArray) {
	if (originalArray.length%2)
		return false
	for (var i=1 ; i < originalArray.length; i +=2 )
		if (originalArray[i] != originalArray[i-1])
			return false
	return true
} 
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))

console.log('or')
var or = function (booleanArray) {
	var answer = false
	if (!booleanArray.length)
		return false
	for (var i=0; i<booleanArray.length; i++) {
		console.log("lenght is", booleanArray.length, 'and index is' + i)
		if (booleanArray[i]) {
			answer = true
			break
		} 
	}

	// booleanArray.forEach(function(element, index){
	// 	console.log("lenght is", booleanArray.length, 'and index is' + index)
	// 	if (element) {
	// 		console.log(index)
	// 		answer = true
	// 		break
	// 	}
	// })
	return answer
}
console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))

console.log('unique')
var unique = function (stringArray) {
	var stringObj = {}
	stringArray.forEach(function(element){
		stringObj[element] = element
	})
	console.log(stringObj)
	var uniqueArray = []
	for (var key in stringObj)
		uniqueArray.push(key)
	return uniqueArray
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))


console.log('%%%%%%% Starting Problem Set 2 %%%%%%')

console.log('firstReverse')
var firstReverse = function (string) {
	var stringArray = string.split(' ')
	var reverseArray = []
	stringArray.forEach(function(element) {
		reverseArray.unshift(element)
	})
	return reverseArray.join(' ')

}
console.log(firstReverse('I am happy'))

console.log('swapCase')
var swapCase = function (string) {
	//console.log('This is the argument string', string)
	var stringArray = string.split(' ')
	//console.log('This is the array of strings', stringArray)

	var arrayCharArray = []
	stringArray.forEach(function(word) {
		arrayCharArray.push( word.split('') )
	})
	//console.log ('This is the array of Character arrays', arrayCharArray)

	var reverseCharArray = []
	
	arrayCharArray.forEach( function (charArray, index) {
		//console.log('this is char array with index', index)
		
		var charFlip = function (character) {
			//console.log('the Character being flipped is', character)
			var tempChar = ''
			
			character === character.toUpperCase() ? tempChar = character.toLowerCase() :  tempChar = character.toUpperCase()
			//console.log('the flipped character is', tempChar)
			return tempChar
		}
		reverseCharArray.push(charArray.map(charFlip))

	})
	//console.log ('arrayCharArray', arrayCharArray)
	//console.log ('reverseCharArray',reverseCharArray)


	var flippedWordsArray = []
	reverseCharArray.forEach( function(arr){
		flippedWordsArray.push(arr.join(''))
	})
	//console.log ('flippedWordsArray', flippedWordsArray)

	return flippedWordsArray.join(' ')
	
}
console.log(swapCase('Hello World 100 #@!'))


// var students = [{
//  name: 'Liz',
//  age: 25,
//  city: 'Boulder'
// },{
//  name: 'Meghan',
//  age: 27,
//  city: 'Denver'
// },{
//  name: 'Trent',
//  age: 32,
//  city: 'Boulder'
// },{
//  name: 'Chelsea',
//  age: 24,
//  city: 'Boulder'
// },{
//  name: 'Amir',
//  age: 18,
//  city: 'Denver'
// }];

// var studentNames = students.map(function(element){
//     return element.name
// })

// console.log(studentNames)

console.log('letterCount')
var letterCount = function (inputString) {

	var wordArray = inputString.split(' ')
	
	var duplicatesWordArray = []
	wordArray.forEach(function(word, wordArrayIndex) {

		var duplicatesWordObj = {
			Word : word,
			score : 0
		}
		
		var charArray = word.split('').sort()
		charArray.forEach( function (mychar) {
			if (!duplicatesWordObj[mychar])
				duplicatesWordObj[mychar] = 0
			duplicatesWordObj[mychar]++					
		})
		
		var duplicateScore = 0
		for (key in duplicatesWordObj) {
			if ( (!(isNaN(duplicatesWordObj[key]))) && (duplicatesWordObj[key] > 1) )
				duplicateScore += duplicatesWordObj[key]
		}
		duplicatesWordObj.score = duplicateScore 
		console.log(duplicatesWordObj)
		duplicatesWordArray.push(duplicatesWordObj)
	})

	console.log(duplicatesWordArray)

	var winningWord = {
		Word: '',
		score: 0,
	}

	duplicatesWordArray.forEach(function (obj){
		if (obj.score > winningWord.score){
			winningWord.Word = obj.Word
			winningWord.score = obj.score
		}
	})
	return ( winningWord )

}
// console.log('The word with the highest count of duplicates is:', letterCount("Today, is the greatest day ever!"))

console.log('The word with the highest count of duplicates is:', letterCount("Tooo ieeooooooo wwwwo"))



console.log('%%%%%%% Student Challenge %%%%%%')

// Start: "Read the F'in Documentation"
// Goal: "R.T.F.D."

// var studentChallenge = function (string) {
// 	var stringArray = string.split(' ')
// 	console.log(stringArray)

// 	var finalString = _.reduce(stringArray, function(string, word) {
// 		console.log('word:', word)
// 		console.log('string:', string)
// 		return string + word.charAt(0).toUpperCase() + '.'

// 	},'')
// 	console.log(finalString)

// }
// studentChallenge("Read the F'in Documentation")





var myString = "Read The F'in Documentation"

var reduceResults = _.reduce(
	myString.split(' '),
	function (acronymSoFar, word) {
		console.log(word,acronymSoFar)
		return acronymSoFar + word[0].toUpperCase() + '.'
	},
	''			//memo
	)

console.log(reduceResults)


//Start: 
var tubers = [
	{
		name: 'Sweet Potatoes',
		color: 'Orange'
	},
	{
		name: 'Peruvian Blue Potatoes',
		color: 'Purple'
	},
	{
		name: 'Purple Fingerling Potatoes',
		color: 'Purple'
	}
]

//GOAL - find the first tubers that are purple

var purpleTuber = _.find(tubers, function(potato) { //find() returns the first one that meets the condition. filter() would have return all of them.
	return potato.color === 'Purple' 
})
console.log(purpleTuber)

console.log(_.pluck(tubers, 'color') )
console.log(_.uniq(_.pluck(tubers, 'color') ))
console.log(_.chain(tubers)
				.pluck('color')
				.uniq()
				.value()
				)


//Start: 
var tubers2 = [
	{
		name 	: 'Sweet Potatoes',
		color	: ['Orange', 'Navajowhite', 'Purple', 'Burlywood']
	},
	{
		name 	: 'Peruvian Blue Potatoes',
		color 	: ['Purple', 'Burlywood', 'Red', 'Peruvian Blue']
	},
	{
		name 	: 'Purple Fingerling Potatoes',
		color 	: ['Purple', 'Black', 'Hammock', 'Goldenrod']
	}
]

//GOAL - crest an array of all the unique colors

console.log( _.chain(tubers2)
				.pluck('color')
				.flatten()
				.uniq()
				.value()
				)




