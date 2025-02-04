const alinacaklar = ["Süt","Ekmek","Yoğurt","Gazete"];

alinacaklar.splice(alinacaklar.length,0,"Yumurta");

console.log(alinacaklar);


const array = [20];
array.unshift(5,10,15);
console.log(array);

//Aşağıdaki yönergelere uygun şekilde gerekli array işlemlerini yap. - Adı meyveler olan bir boş array tanımla. - İndeks kullanarak bu array'e "Elma", "Muz", "Erik" elemanlarını ekle. - İlk elemanının değerini "Kiraz" olarak tekrar ata. - Konsola yazdır.

const meyveler = [];
meyveler.splice(0,0,"Elma","Muz","Erik");
console.log(meyveler);
meyveler[0] = "Kiraz";
console.log(meyveler);


//str isimli değişkende saklı "JavaScript Programcılığı" metninden .slice() metodu ile "JavaScript" kelimesini çıkar. Kalan metni sonuc isimli değişkende sakla. Konsola yazdır.

const str = "JavaScript Programcılığı";
sonuc = str.slice(10)
console.log(sonuc);


//Aşağıda verilen 2 sayıyı bölüp sonucunu tam sayıya yuvarla ve sonuc isimli değişkende sakla.

const sayi = 53;
const bolen = 8.3;
const sonuc = Math.round(sayi / bolen);
console.log(sonuc);

//2'den 10'a kadar(10 dahil) olan çift sayıları sırasıyla içeren sayilar isimli bir array tanımla. Yeni satırda bu array'e 0'ı ekle. (sayılar küçükten büyüğe olmalı!) Konsola yazdır.

const sayilar = [2,4,6,8,10];
sayilar.unshift(0);
console.log(sayilar);

// Bir ATM makinasında, kullanıcı kredi kartını taktıktan sonra sırasıyla 4,8,7,5'i tuşluyor. - keyPressed isimli bir değişken tanımla ve tuşladığı rakamları ayrı ayrı sakla. - password isimli değişken tanımla ve kullanıcın şifresini string olarak bu değişkene ata (şifreyi 4875 olarak direk yazma, metod kullan). - Şifreyi konsola bastır

const keyPressed = [4,8,7,5];
const password = keyPressed[0].toString() + keyPressed[1].toString() + keyPressed[2].toString() + keyPressed[3].toString();
console.log(password);

//Verilen bir array'in, verilen bir eleman sayısından daha fazla elemanı olup olmadığını kontrol eden bir fonksiyon yaz. - Fonksiyonun adı inLimits olsun. - 2 parametre alsın: array, limit - array'in eleman sayısı verilen limitten büyük ise false dönsün, limite eşit veya az ise true dönsün

function inLimits(array, limit) {
    if (array.length > limit) {
        return false;
    } else {
        return true;
    }
}

//Aşağıda verilen array'den, tam ortasında olan elemanı bir metod kullanarak çıkar ve sonuc değişkenine ata.

const array = [1,2,3,4,5,6,7,8,9];
let sonuc = array.splice(Math.floor((array.length)/2),1);
console.log(sonuc);

const array = [1,2,3,4,5,6,7,8,9];
console.log(array.splice(4,1));


//En az 10 karakter girilmesi gereken bir şifre alanı var. Kullanıcı bir string ifade giriyor. Ama eksik karakter var. Yazılan sifre'yi argüman olarak alan ve eksik kalan harf sayısını konsola yazdıran logMissingCharCount isimli bir fonksiyon yaz. "ab1234" için bu fonksiyonu çalıştır.

function logMissingCharCount(sifre) {
    if (sifre.length < 10) {
        popup = 10-sifre.length;
        console.log(popup);
        return popup;
    } else {
        return "doğru";
    }
}
logMissingCharCount("ab1234");


//Aşağıda | kullanılarak oluşturulmuş str isimli değişkenin değerini aralarında - olacak şekilde(örn: 1-2-3-4-5) değiştir ve result isimli değişkende saklayın. Konsola yazdır. - .replaceAll metodunu kullanma. - stringleri parçalayıp array'e dönüştüren bir metod araştırabilirsin.
const str = "1|2|3|4|5";
let result;


const str = "1|2|3|4|5";
let result = str.split("|").join("-");
console.log(result);


//kelimelereDonustur isimli bir fonksiyon yaz. Gelen cümle'yi kelimelere dönüştürüp bunları array olarak geri dönsün. - Googlayarak veya dokümantasyonlardan(w3schools, mdn v.b.) cümleleri kelimelere dönüştürmek için bir metod araştırabilirsin.

function kelimelereDonustur(cumle) {
    kelimeler = cumle.split(" ");
    console.log(kelimeler);
    return kelimeler;
}

kelimelereDonustur("Sami'yi çok seviyorum.");



//1'den 10'a kadar olan tek sayıları sırasıyla içeren sayilar isimli bir array tanımla. Yeni satırda bu array'e 11'i ekle. Konsola yazdır.

const sayilar = [1,3,5,7,9];
sayilar.push(11);
console.log(sayilar);


//Bir fonskiyon yaz. Verilen string bir değerin istenilen indeksteki karakterini büyük harf olarak geri dönsün. "Workintech" ve 5 için oluşan çıktıyı konsola yazdır.
/*
- Fonksiyonun adı karakter olsun.
- 2 parametre alsın: str, position
- Verilen string'in ilgili indeksteki karakterini büyük harf olarak geri dönsün.
*/

function karakter(str, position) {
    return str[position].toUpperCase();
}
console.log(karakter("Workintech",5));


/*Bir dersin not ortalamasını hesaplayan bir fonksiyon yaz. 
Bu fonksiyonu vize = 50, final = 80 için çalıştır ve sonucu konsola yazdır.
- Fonksiyonun adı gecmeNotu olsun.
- 2 parametre alsın: vize ve final
- vize'nin etkisi %30 ve final'in etkisi %70 olacak şekilde ortalamayı bulsun.
- Bulduğu ortalamayı en yakın üst tam sayıya yuvarlayarak dönsün.*/

function gecmeNotu(vize, final) {
    let notOrt = Math.ceil(vize * 0.3 + final * 0.7);
    console.log(notOrt);
    return notOrt;
}
gecmeNotu(50,80);



//array1 isimli array'in 5. elemanından sonraki 5 elemanı metod kullanarak result isimli bir değişkene ata. Konsola yazdır.
const array1 = ["1-sa", "2-as", "3-foo", "4-bar", "5-baz", "6-qux", "7-quux", "8-corge", "9-grault", "10-garply", "11-waldo", "12-fred", "13-plugh", "14-xyzzy", "15-thud"];

const array1 = ["1-sa", "2-as", "3-foo", "4-bar", "5-baz", "6-qux", "7-quux", "8-corge", "9-grault", "10-garply", "11-waldo", "12-fred", "13-plugh", "14-xyzzy", "15-thud"];
const result = array1.splice(5,5);
console.log(result);









