const users = [
  { id: 1, name: "Alex", age: 22, active: true },
  { id: 2, name: "Sam", age: 17, active: false },
  { id: 3, name: "Jordan", age: 28, active: true },
  { id: 4, name: "Taylor", age: 16, active: true },
  { id: 5, name: "Morgan", age: 35, active: false },
];

// Task 1

function isAdult(user) {
  return user.age >= 18;
}

// Task 2

const adultUsers = users.filter(isAdult);

// Task 3

function getUserName(user) {
  return user.name;
}

// Task 4

const userNames = users.map(getUserName);

// Task 5

function isActive(user) {
  return user.active;
}

// Task 6

const activeUsers = users.filter(isActive);

// Task 7

function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

// Task 8

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
