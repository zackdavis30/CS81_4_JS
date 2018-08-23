/* 
Problem #1 

Write a simple JavaScript program that join all elements of the following array 
into a string. 
Sample array : myFaceBookFriends = ["John", "Paul", "Mary", "Tony", "Joan"]; */

var myFaceBookFriends = ["John", "Paul", "Mary", "Tony", "Joan"];
var who = myFaceBookFriends.join(' and ');
console.log(who);

/* 
Problem #2 

Write a range function that takes two arguments, start and end, and returns an 
array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the 
sum of these numbers. Run the previous program and see whether it does indeed 
return 55.

console.log(range(1, 10));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// 55
*/ 

function range(start, end){
	let array = [];
	for( i = start; i <= end; i += start) array.push(i);
	return array;
}
console.log(range(1, 10));

function sum(array){
	let total = 0;
	for(let value of array){
		total += value;
	}
	return total;
}

console.log(sum(range(1, 10)));

/* 
Problem #3

Write a script that creates objects for people 
named Ani, Sipho, Tuulia, Aolani, Hiro, and Xue, such that:

Tuulia is the mother of Sipho.
Ani and Sipho are married.
The children of Ani and Sipho are, in order, Aolani, Hiro, and Xue.
Define each of the person objects with as many of the following 
properties as you can fill in: name, mother, father, spouse, and children. 
The childrenproperty should have an array value. 
Also create a method for the person object that allows the 
spouse property to be changed.


console.log(sipho.mother); 
// tuulia
ani.changeSpouse("mars");
console.log(ani.spouse);
// mars
*/

var sipho = {
	name: 'sipho',
	mother: 'Tuulia'
};
console.log(sipho.mother);

var spouse = {
	married: {
		husband: 'Sipho',
		wife: 'Ani',
	},
	childrenOrder: ['Aolani', 'Hiro', 'Xue']
};
spouse.married.husband = 'Mars';
console.log(spouse.married.husband);
console.log(spouse.childrenOrder);
console.log(spouse.childrenOrder[1]);
console.log(spouse.married.husband + " is married to " + spouse.married.wife);

var ani = {
	name: 'Ani'
};
var tuulia = {
	name: 'Tuulia'
	child: 'sipho'
};
var aolani = {
	name: 'Aolani'
	mother: 'Ani'
	father: 'Sipho'
};
var hiro = {
	name: "Hiro"
	mother: 'Ani'
	father: 'Sipho'
};
var xue = {
	name: 'Xue'
	mother: 'Ani'
	father: 'Sipho'
};


















