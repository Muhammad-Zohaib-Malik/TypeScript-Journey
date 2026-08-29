// Generics can be used with
// Type Aliases
// Interfaces
// Function
// Classes

function echo<T>(a: T): T {
  return a;
}

const echo2 = function <T>(a: T): T {
  return a;
};

const echo3 = <T>(a: T): T => {
  return a;
};

type EchoFuncType = <T>(a: T) => T;

interface EchoFuncType2 {
  <T>(a: T): T;
}

interface EchoFuncInterface {
  <T>(a: T): T;
}

const echo4: EchoFuncType = function (a) {
  return a;
};

const result1 = echo<number>(1);
const result2 = echo<string>("abcd");
