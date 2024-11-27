var num = 6;
console.log(num);
let age = 43;
let year = 2024;

console.log(age);
console.log(year);

const minutes = 60;
console.log(minutes);
//  minutes = 33;
console.log(minutes); 

var score = 75;
console.log(score);
score += 1;
console.log(score);

// JAvascript Data Types
// Strings:
console.log('Hello Strings');
let email = 'ssaida@gmail.com';
console.log(email);
let firstName = 'Samer';
let lastName = 'Saida';
let fullName = firstName + '-' +lastName;
console.log(fullName);
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(fullName[3]);
console.log(fullName[4]);
console.log(fullName[5]);
console.log(fullName.length);
// String methods:
console.log('String Methods:');
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
let result = fullName.toLowerCase();
console.log(`Result: ${result}`);
result = email.lastIndexOf('s');
console.log(`Result: ${result}`);
result = email.indexOf('a');
console.log(`Result: ${result}`);
result = email.slice(4, 10);
console.log(`Result: ${result}`);
result = email.substr(4, 10);
console.log(`Result: ${result}`);
result = email.lastIndexOf('o');
console.log(`Result: ${result}`);
result = email.replace('s','x');
console.log(`Result: ${result}`);
result = email.replaceAll('s','x');
console.log(`Result: ${result}`);
// Numbers:
console.log('Numbers in JS:');
let radius = 10;
let pi = Math.PI;
console.log(radius, pi);
result = radius % 3;
console.log(`Result: ${result}`);
result = radius / 3;
console.log(`Result: ${result}`);
result = pi.toFixed(5) * (radius ** 2);
console.log(`Result: ${result}`);
let likes = 10;
likes++;
likes--; 
likes += 10;
likes -= 10;
likes *= 2;
likes /= 2;
console.log(`Likes ${likes}`);
// NaN
console.log('NaN');
console.log('hello' / 5); 
console.log('hello' * 5);
// Template strings
console.log('Template Strings');
let title = 'Saida Familia';
let auther = 'Samer Saida';
likes = 8;
console.log(`Buseniss name ${title} by ${auther} has ${likes} likes d`);
let html = `
  <h2>${title}</h2>
  <p>by ${auther}</p>
  <span>has ${likes} likes</span>
`;
console.log(html);
// Arrays
console.log('Arrays:');
let names = ['Samer Saida','Ali Saida','Ibraheem Saida'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
names.forEach(name => {
  console.log(name);
});
let ages = [10, 20, 30, 25];
console.log(ages);
let random = ['name',NaN,100];
console.log(random);
// Arrays Methods
console.log('Arrays Methods');
console.log(ages.indexOf(20));
console.log(ages.concat('40, 50, 60').join('-'));
console.log(ages.join('-'));
console.log(ages.push(70, 80));
console.log(ages.pop());
console.log(ages.pop());
console.log(ages.pop());
console.log(ages.pop());
console.log(ages.pop());

// Undefined - Null
console.log('Undefined - Null');
let myAge = null;
console.log(myAge, myAge + 3, `My Age: ${myAge}`);
// Boolean
console.log('Boolean:')
console.log(true, false, "true", "false");
console.log(email.includes('x'));
console.log(email.includes('s'));
console.log(names);
console.log(names.includes('Samer Saida'));
console.log(names.includes('Abo Gazal'));
// Type conversion
console.log('Type conversion');
score = '100';
console.log(score, typeof score);
score = Number(score);
score++;
console.log(score, typeof score);
score = Boolean(0);
console.log(score, typeof score);
score = Boolean('');
console.log(score, typeof score);
score = Boolean(' ');
console.log(score, typeof score);