/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir


const array = ["Patika","219","Akbank","React","Bootcamp"];

Array.prototype.includesCi = function(search) {
  const sens = this.find((item) => item.toUpperCase() === search.toUpperCase())
  if (sens) return 'Harikaa, aradığın kelime burada!'
  else return 'Üzgünüm, tekrar denemelisin :('
};

console.log(array.includesCi("patika"));    // true
console.log(array.includesCi("kırmızı"));   // false
