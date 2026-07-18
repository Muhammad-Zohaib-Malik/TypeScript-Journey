// interface User {
//   name: string;
//   age: number;
//   DOB: string;
// }

// interface Student extends User {
//   schoolName: string;
//   className: string;
// }

// interface Employee extends User {
//   companyName: string;
//   position: string;
// }



type User ={
  name: string;
  age: number;
  DOB: string;
}

type Student = {
  schoolName: string;
  className: string;
} & User

interface Employee extends User {
  companyName: string;
  position: string;
}

// Difference b/w types & interface

// 1. Icons of both interface and Type Aliases are different.
// 2. cannot make duplication identifiers of Type Aliases
// 3. if we duplicate identifiers of interface its becomes combines
// 4. interfaces are built primarly for structure object data SVGUnitTypes
// 5. using "extend" keyword we can combine to different interfaces
// 6. Using AND(&) operator we can combine two Type Aliases



// -> Never use intersection (&) to combine objects as it degrades the performance 2.5 time.
// -> Always use interfaces while working with objects.