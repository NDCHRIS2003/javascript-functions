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

