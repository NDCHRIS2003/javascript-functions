console.log("Hello World");

function printAll() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

let output = printAll("Hello", "World", "JavaScript");
console.log(outpu);

let greetings = () => {
  return " Hello World"
}

let message = greetings();
console.log(message);

// the above code can be written below

let greeting = function () {
  return "How are you";
};

let msg = greeting();

console.log(msg);

let greet = function grt(name) {
  return "Hello" + name;
}

let person1 = { name: "Tony", age: 23 };
let person2 = { name: "Paul", age: 24 };

function sayHi() {
  return "Hello" + this.name;
}
let callMe = sayHi.call(person1);

console.log(callMe);

function introduction(name, profession) {
  console.log("My name is" + name + "and I am a " + profession + ".");
  console.log(this);
}

introduction.apply(undefined, ['Mary', "Lawyer"]);
introduction.call(undefined, "James", "artist");

let contact1 = {
  name: "John",
  getName: function () {
    return this.name;
  }
};

let contact2 = { name: Paul };

let getNameCopy = contact1.getName.bind(contact2);
console.log(getNameCopy);

// Default Parameters

function sayHello(message = "World") {
  console.log("Hello" + message);
}

// note that if an argument is provide during console log, it will overide the default parameter
console.log(sayHello('John')); // this will print Hello John

console.log(sayHello()); // this will print Hello World

function sayHello2(message, name = "Hi") {
  console.log(message + name);
}

console.log(sayHello2("peter")); // this will print peter Hi

console.log(sayHello2("Peter", "Hello")); // This will print Peter Hello

let greetMe = function greet1(...names) { // ...names is what make it to accept multiple arguments
  names.forEach(name => console.log("Hello" + name));
}

greet1("James", "John", "Paul"); // this will print Hello James, Hello John and Hello Paul
