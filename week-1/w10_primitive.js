// Primitive Data Type

/*
    Hiçbir yöntemi veya özelliği olmayan verilerdir.
    All primitives are immutable. (Tüm Primitiveler, değiştirelemezdir.)
    Bir değişken Primitive değer atandığında bellekte yer tutar ve bu alan içerisindeki değer değiştirilemez.
*/

/*
    1. Null        --> Boş
    2. Undefined   --> Tanımsız
    3. Number      --> Sayılar
    4. String      --> Unicode karakterler
    5. Boolean     --> True-False 
    6. Symbol      --> +ES2015 
    7. Bigint      --> +ES2020
*/

// Null
const a = null;
console.log(typeof a); // object (Bu bilinen bir hatadır. Bunu düzeltmek için bir teklif önerildi ancak reddedildi. Bunun nedeni, düzeltmenin birçok mevcut siteyi bozacağıdır.)

console.log(null === undefined); // false
console.log(null == undefined) // true



// Undefined
/* const b */ // SyntaxError Hatası alınır. Const a tekrardan tanımlanabilir olmadığından dolayı.
let c; // undefined
console.log(typeof c);



// Number
let num = 190; // Number
const price = 190; // Number
console.log(typeof price);

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308
console.log(-Number.MIN_VALUE); // -5e-324

console.log(0 === -0); // true

console.log(21 / 0); // Infinity
console.log(21 / -0); // -Infinity



// String
const names = "hazal"; 
console.log(typeof names); // string
console.log(typeof ("5"+5)); // string (55)

const o = "hazal";
console.log(typeof (typeof o));


// Boolean
console.log(typeof true); // Boolean
console.log(Boolean('hi'));  // true
console.log(Boolean(' ')); // true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false



// Symbol
console.log(Symbol('hi kod')); // Symbol(hi kod)
console.log(Symbol('foo') === Symbol('foo')); // false



// Bigint
let pageView = 9007199254740991n;
console.log(typeof(pageView));



// Exercise
console.log(typeof(15));
// Prediction: Number
// Actual: 

console.log(typeof(5.5));
// Prediction: Number
// Actual:

console.log(typeof(NaN));
// Prediction: Number
// Actual:

console.log(typeof("hello"))
// Prediction: String
// Actual:

console.log(typeof(true))
// Prediction: Boolean
// Actual:

console.log(typeof(1 != 2))
// Prediction: Boolean
// Actual:


console.log(typeof("hamburger" + "s"))
// Prediction: string
// Actual:

console.log("hamburgers" - "s")
// Prediction: NaN
// Actual:

console.log("1" + "3")
// Prediction: 
// Actual:

console.log("1" - "3")
// Prediction:
// Actual:

console.log("johnny" + 5)
// Prediction:
// Actual:

console.log("johnny" - 5)
// Prediction:
// Actual:

console.log(99 * "luftbaloons")
// Prediction:
// Actual: