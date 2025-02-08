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


//Bir array'de search yapılıyor. Aranan değerin bulunduğu en büyük indeksi console'a yazdır.

const players = ["Hande", "Saliha", "Ece", "Derya", "Tuba", "Mediha", "Ece", "Tuba"];
const search = "Derya";
let i = players.length;


while (i>=0) {
   if (players[i] === search) {
       console.log(i)
       break;
   } else {
       i--
   }
  
}



/*Aşağıdaki array'deki sayıların tek veya çift olma durumunu konsola X sayısı çift sayıdır. 
veya X sayısı tek sayıdır.basan kodu yazınız.*/

const array = [101, 48, 67, 76];
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(`${array[i]} çift sayıdır.`);
    } else {
        console.log(`${array[i]} tek sayıdır.`);
    }
}


/*2 argüman(satir, sutun) alan bir fonksiyon yaz. satir ve sutun değerine göre konsola *'lardan tablo oluştursun.
- Adı tabloOlustur olsun
- 2 parametre alsın: satir, sutun
- aşağıdaki gibi bir çıktıyı konsola bassın

tabloOlustur(3,5);
* * * * * 
* * * * * 
* * * * * 


-not: *'lar arasındaki boşluğa dikkat*/


// bi satırı yazdıran kısım
function tabloOlustur(sutun) {
    let yildiz = [];
    for (a = 0; a < sutun; a++) {
        yildiz.push(" *");
    }
    console.log(yildiz.join(" "));
}
tabloOlustur(5);

/*
function tabloOlustur(satir,sutun) {
    let yildiz = [];
    for (i = 0; i < satir; i++) {
        for (a = 0; a < sutun; a++) {
            yildiz.push(" *");
            console.log(yildiz.join(" "));
        }
    }
}
tabloOlustur(3,5);
*
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
 *  *  *  *  *  *
 *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  * 
 */


function tabloOlustur(satir,sutun) {
    let yildiz = [];
    for (a = 0; a < sutun; a++) {
        yildiz.push(" *");
    }
    for (i = 0; i < satir; i++) {
        console.log(yildiz.join(" "));
    }
}
tabloOlustur(3,5);

/*
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 */
 
/*
Bir sayi tahmin oyunu yaz.
- Oyun başlamadan önce bilgisayar 100 ile 200(ikisi de dahil) arası rastgele bir sayi oluştursun.
- Kullanicinin 4 tahminHakki olsun.
- Kullanıcıya "Tahminin nedir?" diye sorsun ve tahmin değişkeninde saklasın.
- Eğer kullanıcının tahmini doğru ise kullanıcıya bir uyarı(alert) çıkarsın. "Tebrikler. Tahminin doğru..." desin.
- Eğer tahmini yanlış ise konsola "Kalan tahmin hakkı: 4" gibi bir metin bastırsın. 
    Aynı metin ile kullanıcıya uyarı çıkarsın. (Kalan tahmin hakkı: 4)
- Kullanıcının tahmin hakkı bitince veya kullanıcı doğru tahmin edince yazılım sonlansın. */

let sayi = Math.ceil(Math.random() * 100 + 100);
console.log(sayi);
let tahminHakki = 0;
while(tahminHakki < 4) {
    let tahmin = prompt("Tahminin nedir?");
    tahmin = Number(tahmin);
    if (sayi === tahmin) {
        alert("Tebrikler. Tahminin doğru...");
        break;
    } else {
        console.log(`Kalan tahmin hakkı: ` + (3-tahminHakki));
        alert(`Kalan tahmin hakkı: ` + (3-tahminHakki));
    }
    tahminHakki++;
}
