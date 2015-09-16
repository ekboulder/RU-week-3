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
	// var localObject = object
	// console.log(object.length)
	// for (var i=0; i<object.length; i++) {
	// 	console.log(object[i])
	// }
	
}
console.log(printObject({ a: 10, b: 20, c: 30 }))


