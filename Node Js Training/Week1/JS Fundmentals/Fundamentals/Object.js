//=======================================Object Type========================================

let empty = {};

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

/* Accessing Propoerties */

//objectName.propertyName

let person3 = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person3.firstName);
console.log(person3.lastName);

//objectName['propertyName']

let person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(person2['firstName']);
console.log(person2['lastName']);

let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

console.log(address['building no']);
// address.'building no';
//SyntaxError: Unexpected string

/* Modifying the  value of property */

let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};

person4.firstName = 'Jane';

console.log(person4);

/* Adding a New Property to an Object */
person.age = 25;

/* Deleting a Peroperty of sn Object */

// delete objectName.propertyName;

/* Checking if a property exists */

// propertyName in objectName

let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);
