const myObj = {
  name: 'test',
  age: 12,
};

const myObj2 = {
  ...myObj,
  prop: true,
};

console.log(myObj);
console.log(myObj2);
