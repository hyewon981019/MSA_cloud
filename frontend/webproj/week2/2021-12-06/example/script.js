

const obj = {age : 23, name : "hogn", grade : 'f'};
const {age, ...rest} = obj;
console.log(age);
console.log(rest);