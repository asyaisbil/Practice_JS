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



/*2 argüman alan(cumle, karakter) bir fonksiyon yaz. 
Verilen cümlede aranan karakterin kaç kere tekrar ettiğini geri dönsün.
- Fonksiyonun adı tekrarSayisi olsun
- 2 argüman alsın: cumle, karakter
- tekrar sayısını geri dönsün.


Not: Büyük harf küçük harfe eşit olmamalı. "A" != "a"*/

function tekrarSayisi(cumle, karakter) {
    let tekrar = 0;
    for (i = 0; i < cumle.length; i++) {
        if (cumle.charAt(i) === karakter) {
            tekrar++;
        }
    }
    console.log(tekrar);
}



/*Aşağıdaki fonksiyon parametre olarak aldığı 2 indeks alıyor. 
Aşağıdaki sayilar dizisinde bu iki indeks arasında kalan elemanları yeni bir array olarak dönüyor. 
while döngüsü kullanarak aşağıdaki eksik fonksiyonu tamamla. */
const sayilar = [1,1,2,3,5,8,13,21,34]
function slice(start, end) {
    const result = [];
    return result;
}


const sayilar = [1,1,2,3,5,8,13,21,34]
function slice(start, end) {
    const result = []; 
    while (start <= end) {
        console.log(sayilar[start]);
        result.push(sayilar[start]);
        start++;
    }
    return result;
}
