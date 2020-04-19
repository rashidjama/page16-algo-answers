// 1- Setting and Swapping
let myNumber = 42;
let myName = 'Rashid';


// es5 way swipe.
// let tempNum = myNumber;
// myNumber = myName;
// myName = tempNum;
// console.log(myNumber, myName);

//es6 way swipe
//  [myNumber, myName] =[myName, myNumber]
// console.log(myNumber, myName)

// 2- Print and Count
let total =0;
for (let i =512; i <= 4096; i++) {
  if (i % 5 === 0) {
    // console.log(i);
    total++;
  }
}
// console.log(`There were ${total} multples`)

// 3- Print -52 to 1066 using for loop.
for (let i = -52; i <= 1066; i++) {
  // console.log(i)
}

// 4- Multiples of 6 While loop

let sixes = 0;
while (sixes < 60000) {
  // if(sixes % 6 === 0)
  // console.log(sixes)
  sixes++;
}


// 5- Dont Worry, Be Happy
beCheerful = () => {
  for (let i = 0; i < 98; i++) {
    console.log('Good morning')
  }
}
// beCheerful();

// 6- Counting the dojo way
function codingDojo(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 10 === 0) {
      console.log('Dojo');
    } else if (i % 5 === 0) {
      console.log('Coding')
    } else {
      console.log(i)
    }
  }
}
// codingDojo(100)

// 7- Multiples of Three- but not all
for (let i = -300; i <= 0; i += 3) {
  if (i === -3 || i === -6) {
    continue
  }
  // console.log(i)
}

// 8- What do yo know. function that take a parameter
function whatDoYouKnow(incoming) {
  console.log(`I know how to ${incoming}`)
}
// whatDoYouKnow('code')

// 9- Print Integers with While from 2000 to 5280
let i = 2000;
while (i <= 5280) {
  // console.log(i)
  i++;
}

// 10- Whoa, That Sucker's Huge
let result = 0;
for(let i = -300000; i < 300000; i++) {
  if(i % 2 !== 0) {
    result += i;
  }
}
// console.log(result);




let rashidBirthMonth = 1;
let rashidBirthDay = 1;

function birthCheck(day, month, valA, valB) {
  if((day === valA && month === valB) || (day === valB && month === valA)) {
    console.log('How did you know?');
  } else {
    console.log('Just another day buddy.')
  }
}

// birthCheck(rashidBirthDay, rashidBirthMonth, 1, 1);

// 12- Countdown by Fours
let count = 2016;
while (count > 0) {
  // console.log(count);
  count -= 4;
}

// 13- Leap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return 'Yey, this is a leap year!';
  } else if (year % 400 === 0) {
    return 'This is a leap year Too.';
  } else {
    return 'It is not a leap year.'
  }
}
// console.log(isLeapYear('2200'))

//14 flexible countdown
flexCount = (lowNum, highNum, mult) => {
  for (let i = highNum; i > lowNum; i--) {
    if (i % mult === 0) {
      console.log(i)
    }
  }
};

//The final CountDown
finalCountDown = (pram1, pram2, pram3, pram4) => {
  while (pram2 <= pram3) {
    if(pram2 % pram1 ===0) {
      if(pram2 !== pram4) {
        console.log(pram2)
      }
    }
    pram2++;
  }
}

// finalCountDown(3,5,17,9);