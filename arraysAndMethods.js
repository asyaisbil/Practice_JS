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


//String olarak gelen bir cümlenin tüm harflerini büyük harfe dönüştürüp geri dönen convertUpperCase isimli bir fonksiyon yaz. 

function convertUpperCase(cumle) {
    return cumle.toUpperCase();
}

console.log(convertUpperCase("Yabancı Damat dizisini çok severim."));

/*
Bir takımda "Emre", "Melisa", "Fatih", "Dilara" isimlerinde 4 kişi var. Verilecek bir görevi kimse üstlenmediği için aralarından biri rastgele seçilecek.

- Bu takımdan rastgele bir kişiyi seçip gorevli isimli değişkende sakla.
- Bu kişiyi konsola yazdır.
*/

const takim = ["Emre","Melisa","Fatih","Dilara"];
let gorevliIndex = Math.floor(Math.random() * 4);
let gorevli = takim[gorevliIndex];
console.log(gorevli);


/*hasUpperCase isimli bir fonksiyon yaz. Argüman olarak gelen bir kelimede büyük harf varsa true, yoksa false dönsün. 

- İpucu: hepsi küçük harf ise küçük harfe dönüşmüş haline eşittir.*/

function hasUpperCase(arg) {
    if (arg === arg.toLowerCase) {
        return false;
    } else {
        return true;
    }
}


//Aşağıdaki name isimli değişkenin 5. karakterini büyükharfe dönüştürüp konsola basın.
const name = "Melisa yılmaz";

console.log(name[4].toUpperCase());


/*
sayilar isimli array'deki son 3 elemanı çıkartan tek satırlık bir kod yaz.

- .pop() kullanma.
- Konsola yazdır, kontrol et.
*/ 

const sayilar = [1,2,3,4,5];
console.log(sayilar.splice(2,3));


/*
Aşağıdaki sample isimli değişkendeki rastgele bir harfi sadece metod kullarak 3 adımda console'a yazdır.

- Rastgele bir indeks oluştur. 
- sample metninden karakteri alıp karakter isimli değişkende sakla.
- Konsola yazdır.
*/

const sample = "Hello World";
const randomIndex = Math.floor(Math.random() * sample.length);
console.log(randomIndex);
karakter = sample[randomIndex];
console.log(karakter);


//50 ile 75 arasında(50 ve 75 dahil) rastgele bir sayı oluştur ve bunu konsola yazdır.

const rastgele = Math.floor(Math.random() * 26 + 50);
console.log(rastgele);


// Aşağıdaki arabaMarkalari isimli array'in son 2 ve ilk 2 elemanını listeden çıkart. - .splice() kullanma. 

const arabaMarkalari = ["Lexus", "Chery", "VW", "TOGG", "Mercedes", "Volvo", "Dacia", "Citroen"];
arabaMarkalari.shift();
arabaMarkalari.shift();
arabaMarkalari.pop();
arabaMarkalari.pop();
console.log(arabaMarkalari);



// Bir yarışma sonucunda siralamaya girenler siralama isimli bir array'de listelenmişler. İlk 3'e girenler için sosyal medyada tebrik mesajı yayınlanacak. Bu mesajı oluşturacak ve konsol'a basacak kodu yazın. - Sadece array metodu kullanarak ilk 3'e girenleri al. ilkUc isimli değişkende sakla. - Bu 3 öğrencinin adını virgül ile ayırarak ogrencilerStr isimli değişkende string'e dönüştür. (örn: Ayşe Bulut, Emre Fırat, Melisa Marcan) - "Değerli öğrencilerimiz Ayşe Bulut, Emre Fırat, Melisa Marcan'ı başarılarından dolayı kutluyoruz." metnini oluştur ve tebrikMesaji isimli değişkende sakla. - Konsola yazdır.
const siralama = ["Ayşe Bulut", "Emre Fırat", "Melisa Marcan", "Erdem Güntay", "Gamze Baltaş"];

const ilkUc = siralama.splice(0,3);
const ogrencilerStr = ilkUc.join(", ");
const tebrikMesaji = `Değerli öğrencilerimiz ${ogrencilerStr}'ı başarılarından dolayı kutluyoruz.`
console.log(tebrikMesaji);


// formatSentence isimli bir fonksiyon yaz. Argüman olarak aldığı cümle'nin ilk harfini büyütüp geri dönsün.

function formatSentence(arg) {
    return arg[0].toUpperCase() + arg.slice(1);
} 



//Bir uygulamada fonksiyon isimlendirirken camelCase kullanılmamış. yanlis isimlendirme değişkeninde saklı bu ismi, dogruIsimlendirme değişkeninde sadece string metodları kullanarak düzelt. Konsola yazdır.
const yanlis = "sinavikazananlar";

const dogruIsimlendirme = yanlis.slice(0,6) + yanlis[6].toUpperCase() + yanlis.slice(7);
console.log(dogruIsimlendirme);



//Aşağıda bir koşu yarışmasını ilk 10'da bitirenlerin listesi var. Resmi olarak ilk 5'e girenler ödül törenine katılacak. Bunun için; - İlk 5'e giren koşucular kazananlar isimli değişkene atanıyor. - Yapılan testler sonucunda 4. ve 5. olan koşucuların doping yaptığı ortaya çıkıyor ve kazananlar listesinden çıkarılıyorlar. - Yerlerine arkalarından gelen 34 ve 42 numaralı koşucular sıralamaya ekleniyor. - Madalya töreni öncesi yapılan kontrollerde de 1. olan koşucunun kurallara uygun ayakkabı kullanmadığı ortaya çıkıyor ve listeden çıkarılıyor. - Kazananlar listesine sıradaki kişi ekleniyor. - Kazananlar ekranda gösteriliyor(console.log); Yaşanan her bir durumu aşağıda .shift(), .pop() gibi metodlar kullanarak ifade et. 
const siralama = [11, 15, 23, 54, 74, 34, 42, 89, 101, 3];

const kazananlar = siralama.splice(0,5);
kazananlar.pop();
kazananlar.pop();
kazananlar.push(34,42);
kazananlar.shift();
kazananlar.push(89);
console.log(kazananlar);


//Aşağıdaki array'den rastgele 2 eleman seç. - Adı secilenler olan boş bir array tanımla. - Seçilen elemanları bu array'e ekle. - Aynı elemanın tekrar seçilmediğinden emin ol! - Seçilenleri konsola yazdır.
const takim = ["Mahmut", "İlayda", "Ceren"];

const i1 = Math.floor(Math.random() * takim.length);
const secilen1 = takim[i1];
takim.splice(i1,1);
console.log(secilen1);
console.log(takim);
const i2 = Math.floor(Math.random() * takim.length);
const secilen2 = takim[i2];
console.log(secilen2);
const secilenler = [];
secilenler.push(secilen1,secilen2);
console.log(secilenler);


// Bir okulda beşinci sınıflar genelinde çekiliş yapılacak. - Aşağıda array olarak verilen sınıf listelerini concat ile besinciSiniflar isimli bir değişkende bir araya getir. - Aralarından rastgele seçilen bir kişiyi sansliKisi değişkeninde sakla. - Konsola yazdır.
const sinif5A = ["Hatice" , "Saliha", "Ece", "Haluk", "Metin"];
const sinif5B = ["Metin" , "Mustafa", "Berk"];
const sinif5C = ["Gülsüm" , "Murat", "Erdem", "Tufan", "Ali", "Recep"];

const besinciSiniflar = sinif5A.concat(sinif5B,sinif5C);
console.log(besinciSiniflar);

const sansliKisi = besinciSiniflar[Math.floor(Math.random() * besinciSiniflar.length)];
console.log(sansliKisi);
