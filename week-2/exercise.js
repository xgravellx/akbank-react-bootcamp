const ornekObj = {};
const digerObj = new Object();

console.log(ornekObj.constructor.name); // Object
console.log(digerObj.constructor.name); // Object

const ornekArr = [];
const ornek2Arr = [];

console.log(ornekArr.constructor.name); // Array
console.log(ornek2Arr.constructor.name); // Array


digerObj['isim'] = "hazal";
console.log(digerObj); // { isim: 'hazal' }
digerObj.isim = "derya";
console.log(digerObj); // { isim: 'derya' }

