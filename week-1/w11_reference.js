const a = Array(5);
a[0] = "hazal";
console.log(a[1]);

const b = Array(5);
b[0] = "hazal";

const c = {
    length: 5,
    0: "hazal",
}

console.log(b.length);
console.log(c.length);
console.log(b[0]);
console.log(c[0]);

const d = ArrayPatika(5);
d[0] = "hazal"; 

function ArrayPatika(arrayLength) {
    return {
        length: arrayLength,
    }
}

console.log(d);

const n = Number(false);
console.log(n);

const t = Number(true);
console.log(t);

const x = Number("94584_432");
console.log(x);

console.log(Number("5" + "3") === "53");

const arr = [1, 2, 2, 32, 43, 43, 'hakan'];
arr[2] = 51;
console.log(arr[2]);

const arrA = ['hazal'];
const arrB = ['hazal'];
console.log(arrA === arrB); // false

console.log(['hazal'] === ['hazal']); // false
// NOT: Her ikisi içinde bellek adresi üretildiği için sonuç false çıkar. İkisinin de bellek adresleri farklıdır.

const gc = {
    name : 'Ixrone',
    establishmentYear: 2022,
}

const person1 = {
    name: 'hazal',
    job: 'developer',
    company: gc
}

const person2 = {
    name: 'niran',
    job: 'developer',
    company: gc
}

const a1 = {
    isim : 'hazal',
    yas: 24,
}
const b1 = a1;
b1.yas = 30;
console.log(a1);
console.log(b1);

const staff = {
    isim: 'hazal',
    yas: 24,
    company: {
        name: 'Ixrone',
        establishmentYear: 2021,
    }
}

const staffNew = {isim:staff.isim, yas:staff.yas, company:staff.company};
staffNew.yas = 25;
staffNew.isim = 'niran';
staffNew.company.establishmentYear = 1982;

console.log(staff);
console.log(staffNew);

// Json a çevirme
console.log(JSON.stringify(staff));
// JSON stringify işlemciyi yorar.

// Json a dönüşen dosyayı geri çevirme
console.log(JSON.parse(JSON.stringify(staff)));
// JSON parse sonucu yeni bir object üretilir.
