const people = [
    {name: "hakan", age: 29, job: "instructor"},
    {name: "berfin", age: 21, job: "candidate"},
    {name: "berna", age: 22, job: "candidate"},
    {name: "betül", age: 21, job: "candidate"},
    {name: "beyza", age: 17, job: "candidate"},
    {name: "anıl", age: 19, job: "asistant"},
    {name: "buse", age: 30, job: "candidate"},
]

const selamla = (item) => console.log(`Merhaba ${item.name}`);

console.log(people.__proto__ === Array.prototype);

Array.prototype.selamla = function () {
    this.forEach((item) => console.log(`Merhaba ${item.name}`));
}
people.selamla();

const digerDizi = [
    {name: 'ali'},
    {name: 'ahmet'},
    {name: 'mehmet'},
    {name: 'mert'},
    {name: 'omer'},
]
digerDizi.selamla();


const prim = people.map(item => item.name);
console.log(prim.includes('hakan'));

dizi = ["hakan", "Hazal"];

Array.prototype.includesCi = function() {
    const words = this.find((index) => index.toLowerCase() === toLowerCase())
    return Boolean(words);
}
console.log(dizi.includesCi("Hakan") );