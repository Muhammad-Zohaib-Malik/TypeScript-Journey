type User = {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
  address: {
    street: string;
    pinCode: number;
  };
};

const user: User = {
  name: "Zohaib",
  age: 21,
  email: "zohaib@gmail.com",
  isStudent: true,
  address: {
    street: "e9",
    pinCode: 41400,
  },
};


// const user: {
//   name: string;
//   age: number;
//   email: string;
//   isStudent: boolean;
//   address: {
//     street: string;
//     pinCode: number;
//   };
// } = {
//   name: "Zohaib",
//   age: 21,
//   email: "zohaib@gmail.com",
//   isStudent: true,
//   address: {
//     street: "e9",
//     pinCode: 41400,
//   },
// };
