/*
    concat      : iki veya daha fazla diziyi birleştirmek için kullanılır. Bu yöntem mevcut dizileri değiştirmez, bunun yerine yeni bir dizi döndürür.
    entries     : Yöntem , dizideki her dizin için anahtar/değer çiftlerini içeren yeni bir Array Iterator entries() nesnesi döndürür .
    every       : Yöntem every(), dizideki tüm öğelerin sağlanan işlev tarafından uygulanan testi geçip geçmediğini test eder. Boole değeri döndürür.
    filter      : Yöntem , belirli bir dizinin bir bölümünün yüzeysel bir kopyasınıfilter() oluşturur , yalnızca verilen dizideki, sağlanan işlev tarafından uygulanan testi geçen öğelere göre filtrelenir.
    find        : Yöntem find(), sağlanan dizideki sağlanan test işlevini karşılayan ilk öğeyi döndürür. Test işlevini karşılayan hiçbir değer yoksa undefined döndürülür.
    findIndex   : Yöntem findIndex(), sağlanan test işlevini karşılayan bir dizideki ilk öğenin dizinini döndürür. Hiçbir öğe test işlevini karşılamazsa, -1 döndürülür.
    forEach     : Yöntem forEach(), her dizi öğesi için sağlanan işlevi bir kez yürütür.
    includes    : Yöntem includes(), bir dizinin girdileri arasında belirli bir değer içerip içermediğini, dönen trueveya falseuygun şekilde belirler. PRIMITIVE ILE ÇALIŞIR.
    join        : Yöntem , bir dizideki (veya dizi benzeri bir nesnedekijoin() ) tüm öğeleri virgülle veya belirtilen bir ayırıcı dizeyle ayırarak birleştirerek yeni bir dize oluşturur ve döndürür. Dizide yalnızca bir öğe varsa, o öğe ayırıcı kullanılmadan döndürülür.
    map         : Yöntem , çağıran dizideki her öğe üzerinde sağlanan bir işlevi çağırmanın sonuçlarıyla doldurulmuş map()yeni bir dizi oluşturur .
    push        : Yöntem push(), bir dizinin sonuna bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür.
    reduce      : Yöntem reduce(), önceki öğedeki hesaplamadan dönüş değerini ileterek, sırayla dizinin her öğesinde kullanıcı tarafından sağlanan bir "redüktör" geri çağırma işlevini yürütür. İndirgeyiciyi dizinin tüm öğelerinde çalıştırmanın nihai sonucu tek bir değerdir.
    slice       : Yöntem , bir dizinin bir bölümünün sığ bir kopyasını , ( dahil değildir) arasından seçilen yeni bir dizi nesnesine slice()döndürür ve bu dizideki öğelerin dizinini temsil eder. Orijinal dizi değiştirilmeyecek. startendendstartend
    some        : Yöntem some(), dizideki en az bir öğenin sağlanan işlev tarafından uygulanan testi geçip geçmediğini test eder. Dizide, kendisi için sağlanan işlevin true değerini döndürdüğü bir öğe bulursa true değerini döndürür; aksi halde false döndürür. Diziyi değiştirmez.
    sort        : Yöntem sort(), bir dizinin öğelerini yerinde sıralar ve şimdi sıralanmış olarak aynı diziye başvuruyu döndürür. Varsayılan sıralama düzeni, öğelerin dizelere dönüştürülmesi ve ardından UTF-16 kod birimi değerlerinin dizilerinin karşılaştırılmasına dayalı olarak artandır.SORT METODU ARRAYI DEĞİŞTİRİR.!!!
    unshift     : Yöntem unshift(), bir dizinin başına bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür.
*/ 

const people = [
    {name: "hakan", age: 29, job: "instructor"},
    {name: "berfin", age: 21, job: "candidate"},
    {name: "berna", age: 22, job: "candidate"},
    {name: "betül", age: 21, job: "candidate"},
    {name: "beyza", age: 17, job: "candidate"},
    {name: "anıl", age: 19, job: "asistant"},
    {name: "buse", age: 30, job: "candidate"},
]

/* function herkesiSelamla(arr) {
    arr.forEach(people => console.log(`Merhaba ${people.name}`));
}
herkesiSelamla(people); */

const selamla = (item) => console.log(`Merhaba ${item.name}`);
const isOverage = (item) => item.age >= 18
const isUnderage = (item) => !isOverage(item);
console.log(people.filter(isUnderage));
console.log(people.find(isOverage));

console.log(people.find(isUnderage) === people[4]); // true dur. Çünkü find çalışma mantığı findIndex ile alakalıdır.

console.log(people.findIndex(isUnderage));

// find çalışma mantığı
function find(func) {
    const i = people.findIndex(func);
    return people[i];
}

console.log(people.findIndex((item) => item.name === 'beyza')); // 4

// Yaşlarına göre sıralama
const sorted = people.sort((item, itemNext) => {
    if (item.age > itemNext.age) return 1
    else return -1;
})
console.log(people);


const arr = ['hakan', 'beyza', 'betül'];
console.log(arr.includes('anıl')); // array içerisinde arama yapar.

const underages = people.filter(isUnderage);
const candidates = people.filter(item => item.job === 'candidate');

console.log(candidates.includes(underages[0]));


const jobs = people.map((item) => item.job);
console.log(jobs.includes('candidate')); // true


const reduced = people.reduce((prev, curr, idx) => {
    if (curr.age >= 18) { // 18 yaşından büyüklerin yaşlarının toplamı
        return prev + curr.age;
    }
    else {
        return prev;
    }
}, 0)
console.log(reduced);

const reduced1 = people.reduce((prev, curr, idx) => {
    if (curr.age >= 18) { 
        return {
            overageCount : prev.overageCount +1,
            average : (prev.average*prev.overageCount + curr.age) / (prev.overageCount + 1),
        }
    }
    else return prev;
}, {overageCount: 0, average: 0})
console.log(reduced1);