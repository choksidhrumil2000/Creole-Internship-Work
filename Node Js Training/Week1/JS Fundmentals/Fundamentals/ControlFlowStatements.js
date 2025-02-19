//=============================Control Flow Statements=========================================

/* If Statement */

if (condition) {
  // statements to execute
}

let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}

/* Nested If Statement */
let age2 = 16;
let state = 'CA';

if (state == 'CA') {
  if (age2 >= 16) {
    console.log('You can drive.');
  }
}

/* if...else... Statment */
if( condition ) {
  // ...
} else { 
  // ...
}

let age3 = 18;

if (age3 >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

let age4 = 16;
let country = 'USA';

if (age4 >= 16 && country === 'USA') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}

/* If..Else...If Statement */
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  //...
} else {
  //...
}

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);

let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);

/* ternary Operator */


//condition ? expressionIfTrue : expressionIfFalse;

let age6 = 18;
let message;

age6 >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);

let age7 = 18;
let message2;

message2 = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message2);

let authenticated = true;
let nextURL = authenticated
  ? (alert('You will redirect to admin area'), '/admin')
  : (alert('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'

let locked = 1;
let canChange = locked != 1 ? true : false;

let speed = 90;
let message3 = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message3);

/* Switch Statement */
/* switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}
*/

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday

let year = 2016;
let month2 = 2;
let dayCount;

switch (month2) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29

/* While Loop */

let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}

let total = 0,
  n = 100,
  i = 0;

while (i <= 100) {
  total += i;
  i++;
}

console.log(total);

let mountains = ['Mount Everest', 'K2', 'Lhotse', 'Kangchenjunga'];
let i1 = 0;
while (i1 < mountains.length) {
  console.log(`${i1 + 1}.${mountains[i1]}`);
  i++;
}

/* Do While... Loop */

let count2 = 0;
do {
  console.log(count2);
  count2++;
} while (count2 < 5)

// generate a secret number between 1 and 10
const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
  // get input from user
  let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

  // get the integer
  number = parseInt(input);

  // increase the number of guesses
  guesses++;

  // check input number with the secret number provide hint if needed
  if (number > secretNumber) {
    hint = ', and less than ' + number;
  } else if (number < secretNumber) {
    hint = ', and greater than ' + number;
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);

/* For Loop.... */

// for (initializer; condition; iterator) {
//     // statements
// }
// for ( ; ; ) {
//    // statements
// }

for (let i = 1; i < 5; i++) {
  console.log(i);
}

let j2 = 1;
for (; j2 < 10; j2 += 2) {
  console.log(j2);
}

for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) {
    break;
  }
}

let j = 1;
for (;;) {
  if (j > 10) {
    break;
  }
  console.log(j);
  j += 2;
}

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);

/* break Statement */
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 2) {
    break;
  }
}

let i3 = 0;

while (i3 < 5) {
  i3++;
  console.log(i3);
}

let i4 = 0;

while (i4 < 5) {
  i4++;
  console.log(i4);
  if (i4 == 3) {
    break;
  }
}

/* Continue Statement */

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

/*Comma Operator */

let x = 10;
let y = (x++, x + 1);

console.log(x, y);




