/*Sırasıyla değerleri "A",  "K",  "Z",  "C",  "J" olan chars adında bir array tanımla. 
Bu array'in sıralamasını ters çevirip reversed isimli bir değişkende sakla. Konsola bu değişkeni yazdır.
Kullanmaman gereken metodlar: .unshift(), .sort(), .reverse(), .toReversed(); */

const chars = ["A","K","Z","C","J"];
let reversed = [];
for (i = 0; i < chars.length; i++) {
    let reverseTmp = chars[(chars.length - 1) - i];
    console.log(reverseTmp);
    reversed = reversed.concat(reverseTmp);
}
console.log(reversed);



//String'lerden oluşan bir array'de en uzun kelimeyi while kullanarak bul ve konsola bas

const kelimeler = ("String'lerden oluşan bir array'de en uzun kelimeyi while kullanarak bul ve konsola bas.").split(" ");
let i = 1;  // İlk kelimeyi zaten varsaydık, bu yüzden i = 1'den başlıyoruz
let enUzunKelime = kelimeler[0];  // İlk kelimeyi başlangıç olarak al

while (i < kelimeler.length) {  // Tüm kelimeleri kontrol et
    if (kelimeler[i].length > enUzunKelime.length) {
        enUzunKelime = kelimeler[i];
    }
    i++;
}
console.log(enUzunKelime);
