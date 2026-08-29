type DynamicType<T, U> = {
  first: T;
  second: U;
};

interface DynamicType2<T, U> {
  first: T;
  second: U;
}

let a: DynamicType<string, number> = {
  first: "hello",
  second: 12,
};

let b: DynamicType<number, string> = {
  first: 1,
  second: "12",
};

function getTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const result = getTuple<string, number>("1", 2);
const result2 = getTuple<number, string>(1, "2");
