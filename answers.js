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
for (let i = 512; i < 4096; i++) {
  if (i % 5 === 0) {
    // console.log(`I am counting, ${i}`);
  }
}
// console.log("The final count is 4095");

// 3- Print -52 to 1066 using for loop.
for (let i = -52; i <= 1066; i++) {
  // console.log(i)
}

// 4- Multiples of 6 While loop

let j = 1;
while (j < 60000) {
  // if(j % 6 === 0)
  // console.log(j)
  j++;
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
      console.log('Dojo \n\n');
    } else if (i % 5 === 0) {
      console.log('Coding ')
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
    // console.log(result);
  }
}
//the final result is zero


// 11- You say it is your birthday
let myBirthDay = 11;
if (myBirthDay === 11) {
  // console.log('How did you know?');
} else {
  // console.log('Just another day....')
}

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
  } 
}

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
  while (pram2 < pram3) {
    pram3--;
    if (pram3 % pram1 === 0) {
      if (pram3 === pram4) {
        continue
      }
      console.log(pram3);
    }
  }
}

finalCountDown(3,5,17,9);