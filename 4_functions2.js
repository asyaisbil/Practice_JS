
/*
Bir sayının Tek veya Çift olup olmadığını ternary if ile result isimli bir değişkende sakla ve konsola yazdır.

- Tek veya Çift olma durumunu result isimli bir değişkende sakla. (ternary if kullan)
- result'ı konsola yazdır.
*/

const sayi = 47;
const result = sayi % 2 === 0 ? "Çift" : "Tek";
console.log(result);


// Çalıştırıldığında konsola hemen "Started..." yazan. Aradan 2 sn geçtikten sonra da "Completed..." yazdıran kodu yaz.

console.log("Started...");
setTimeout(() => console.log("Completed..."), 2000);



/*araba objesindeki fiyata bakarak hangi ötv dilimine girdiğini konsola ternary if kullanarak yazdır. 
- Arabanın fiyatı 1950000'ye eşit veya büyük ise %40, değil ise %10'dur. 
- Konsola "ÖTV: %40" formatında bir metin yazdırsın.
*/

const araba = {
    marka: "VOLVO",
    model: "XC40 Recharge",
    fiyat: 2400000
}

console.log(`ÖTV: %${araba.fiyat >= 1950000 ? 40 : 10}`)


/*
Aldığı 4 argümanı kullanarak bir obje oluşturan fonksiyon yaz. 
Fonksiyon çağırılır iken smsOnayi ve epostaOnayi belirtilmemiş ise değeri false olsun. (if veya ternary if kullanma)

- Fonksiyonun adı userModel olsun.
- 4 argüman alsın: isim, eposta, smsOnayi, epostaOnayi.
- smsOnayi, emailOnayi argüman olarak gelmez ise değeri false olsun.
- Gelen bilgilerden user isimli bir obje oluştururken isim yerine name, eposta için email, smsOnayi için hasSMSpermission, 
    epostaOnayi için hasEmailPermission kullan.
*/

function userModel(isim, eposta, smsOnayi = false, epostaOnayi = false) {
    return {
        name: isim,
        email: eposta,
        hasSMSpermission: smsOnayi,
        hasEmailPermission: epostaOnayi
    }
}


// Adı yazdir olan anonim fonksiyon yaz. Çalıştırıldıktan 3sn sonra konsola "3sn sonra çalıştı..." yazdırsın.

const yazdir = function() {
    setTimeout(() => console.log("3sn sonra çalıştı..."), 3000);
}

yazdir();


/*
Argüman olarak aldığı kelime'nin uzunluğunu özel bir metin ile dönen fonksiyon yaz.

- Fonksiyonun adı getLengthStr olsun.
- Argüman olarak bir kelime'yi alsın.
- "XXX kelimesi YYY karakterdir." metnini geri dönsün. */

function getLengthStr(kelime) {
    return `${kelime} kelimesi ${kelime.length} karakterdir.`;
}

console.log(getLengthStr("su"));


/*
Adı format olan bir fonksiyon tanımla. Argüman olarak aldığı bir sayıyı konsola "Sayı: XXX" şeklinde yazdırsın.
Adı run olan başka bir fonksiyon tanımla. 2 argüman alsın: callback fonksiyon ve bir sayi. callback fonksiyonunu bu sayi için çalıştırsın.

run fonksiyonuna format fonksiyonunu ve 10 sayısını argüman olarak yollayarak çalıştır.

- Fonksiyonları tek satır arrow function olarak tanımlayın.

function format(sayi) {
    console.log(`Sayı: ${sayi}`);
}
function run(callback, sayi) {
    callback(sayi);
}

run(format,10)
*/

const format = sayi => console.log(`Sayı: ${sayi}`);
const run = (callback, sayi) => callback(sayi);

run(format,10)


/*
Aşağıda calculate isimli bir fonksiyon tanımlanmış. Yeni bir satırda bu fonksiyonu çağır: 
- callback olarak aldığı 2 sayının toplamını return eden bir fonksiyonu ve 
- 10, 22 sayılarını argüman olarak ver.*/

const calculate = (callback, a, b) => {
    console.log(`${a} ve ${b} sayısının işlem sonucu ${callback(a,b)}'dir.`)    
};
const sum = (a,b) => a + b;
calculate(sum, 10, 22);


/*
0-10 arası rastgele bir sayı oluşturup dönen bir arrow function yaz. 

- Fonksiyonun adı randomNumber olsun.
- 0-10 arası(10 hariç) bir sayı oluştursun ve dönsün.
- Bu fonksiyonu çağırıp, çıktısını konsola yazdır.
*/

const randomNumber = () => Math.floor(Math.random() * 10);
console.log(randomNumber());


/*
Adı sendSMS olan bir anonim fonskiyon tanımla 2 argüman alsın ve aşağıdaki metni backtick ile oluştursun ve dönsün.

- Fonksiyonun adı sendSMS olsun.
- 2 argüman alsın: value, location(default değeri: İstanbul).
- "Maltepe ilçesinde ATM'den 100 TL çektiniz." metnini oluştursun ve geri dönsün.
*/

const sendSMS = function(value, location = "İstanbul") {
    return `${location} ilçesinde ATM'den ${value} TL çektiniz.`
}


/*
2 argüman alan ve kendisine gelen metni istendiği gibi büyük veya küçük harfe çeviren bir anonim fonksiyon yaz. 
"300 tek sayıdır" metnini ve toUpper değerini true kullanarak çağır ve geri döndüğü değeri konsola yazdır.

- Fonksiyonun adı changeCase olsun.
- 2 argüman alsın: text, toUpper(boolean).
- toUpper true ise büyükharfe dönüştürsün, değil ise küçük harfe dönüştürsün ve dönsün.
- "300 tek sayıdır" metnini ve toUpper değerini true kullanarak çağır ve geri döndüğü değeri konsola yazdır.
*/ 

const changeCase = function(text, toUpper) {
    let sonuc = toUpper === true ? text.toUpperCase() : text.toLowerCase();
    return sonuc;
}
console.log(changeCase("300 tek sayıdır", true));


/*
Faktöriyel hesaplayan bir arrow fonksiyon yaz. 10 değeri için çalıştır ve sonucunu konsola'a yaz.

Faktöriyel: n, 1'den büyük bir doğal sayı olmak üzere; 1'den n'e kadar olan doğal sayıların çarpımına 
n'in faktöriyeli veya kısaca n faktöriyel denir.

- Fonksiyonun adı factoriyel olsun.
- Bir sayıyı argüman olarak alsın: n.
- Faktöriyel'ini hesaplayıp dönsün.
- 10 değeri için bu fonksiyonu çalıştır ve sonucunu konsola'a yaz.
*/

const factoriyel = (n) => {
    let mult = 1;
    for (let i = 1; i <= n; i++) {
        mult = mult * i;
    }
    return mult;
};
console.log(factoriyel(10));


/*
Argüman olarak array alan bir fonksiyon yaz. Array'in her elemanını "1. eleman: XXX" olarak konsola yazdırsın.

- Fonksiyonun adını printItems olsun.
- Bir array'i argüman olarak alsın.
- Her elemanı konsola tek tek "1. eleman: XXX" şeklinde yazdırsın. */

function printItems(array) {
    for (i = 0; i < array.length; i++) {
        console.log(`${i+1}. eleman: ${array[i]}`);
    }
}

printItems([4,5,6,7,2,1]);


/*
Aşağıdaki araba objesinde getKilometer metodu'nu anonim function kullanarak tanımla. 
- Metodun adı getKilometer olsun. 
- "Ruhsat Seri No XXX olan araba YYY km'dir." metnini dönsün. 
- Metodu anonim function olarak yaz.
} */ 

const araba = {
    seriNo: "AB 50590",
    plaka: "34 TB 3501",
    km: 3500,
    getKilometer: function() {
        return `Ruhsat Seri No ${this.seriNo} olan araba ${this.km} km'dir.`
    }
}
// console.log(araba.getKilometer());



// "Merhaba. Benim adım Emre. 46 yaşındayım ve İstanbul'un Maltepe ilçesinde oturuyorum. Yabancı dil biliyorum." 
// metnini konsola backtick kullanarak yazdır. 
// - Tüm bilgileri user isimli objeden alsın. 
// - Yabancı dil biliyorsa biliyorum, bilmiyorsa bilmiyorum yazdırsın.

const user = {
    name: "Emre",
    age: 46,
    location: "Maltepe",
    langs: ["English", "Türkçe"]
}

let yabanciDil;
if (user.langs.some(element => element !== "Türkçe")) {
    yabanciDil = "biliyorum";
} else {
    yabanciDil = "bilmiyorum";
}

console.log(`Merhaba. Benim adım ${user.name}. ${user.age} yaşındayım ve İstanbul'un ${user.location} ilçesinde oturuyorum. Yabancı dil ${yabanciDil}.`);



// Üyelik paketine göre fazladan çekiliş hakkı veriliyor. 
// Çekiliş hakkını ve çekiliş fonksiyonunu callback olarak alan bir fonksiyon yaz. 
// Çekiliş hakkı kadar callback fonksiyonunu çalıştırsın. 
// - Fonksiyonun adı carkiCevir olsun. 
// - 2 argüman alsın: cekilisHakki, callback. 
// - cekilisHakki kadar callback fonksiyonu çalıştırsın. 
// - Çekiliş hakkı 3 olan kullanıcı için kodu çalıştır.

const cekilis = () => {
    const random = Math.floor(Math.random()*500);
    if(random === 399) {
        console.log("Çep telefonu kazandınız.")
    } else if(random % 4 === 0) {
        console.log("Sinema bileti kazandınız.") 
    }
}   
const carkiCevir = (cekilisHakki, callback) => {
    for (let i = 0; i < cekilisHakki; i++) {
        callback();
    }
}

carkiCevir(3, cekilis);



// sayi isimli değişkenin değerinin; 
// Pozitif sayı, Negatif sayı veya Sıfır"olma durumunu, 
// tek satırda ternary if kullanarak 
// sonuc isimli bir değişkene ata. 
// sonuc'u konsola yazdır.

const sayi = 58;
const sonuc = sayi > 0 ? "Pozitif" : sayi < 0 ? "Negatif" : "Sıfır";
console.log(sonuc);



// Bir simülasyon uygulaması için skor isimli bir fonksiyon yaz. 10-25 arasında rastgele sayı dönsün.

// - Fonksiyonun adı skor olsun.
// - Bir argüman almadan  10-25 arası sayı oluştursun.
// - 10(dahil)-25(dahil) arasında rastgele bir tam sayı oluştursun ve dönsün.
// - Tek satır arrow fonksiyon olarak yaz.

const skor = () => Math.floor(Math.random() * 16 + 10);
console.log(skor());



// Verilen 3 sayıdan küçük olanı tek satırda ve ternary if kullanarak enKucuk isimli değişkenine ata. Konsola yazdır. 
// - İpucu: Bir sayı diğer sayılardan küçük ise en küçüktür, yoksa diğer sayılardan küçük olan en küçüktür.

let x = 3, y = 12, z = 1;

const enKucuk = x < y && x < z ? x : y < z ? y : z;
console.log(enKucuk);



// Argüman olarak bir array alan anonim fonksiyon yaz. 3'e tam bölünen sayıların toplamını dönsün. 
// sayilar array'ini bu fonksiyonda kullanarak "Sayılar array'inde 3'e tam bölünen sayıların toplamı: XXX'dir." 
// metnini konsola backtick ile yazdır. 
// - Fonksiyonun adı kalanlar olsun. 
// - Bir array'i argüman olarak alsın. 
// - Bu array'de 3'e tam bölünen sayıların toplamını dönsün. 
// - "Sayılar array'inde 3'e tam bölünen sayıların toplamı: XXX'dir." metnini backtick kullanarak konsola yazdır. 
// - Metindeki toplam değerini(XXX) fonksiyonu sayilar array'i için çağırarak kullan.

const sayilar = [3, 6, 9, 10, 12, 15, 17];

const kalanlar = function(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            sum = sum + array[i];
        };
    };
    return `Sayılar array'inde 3'e tam bölünen sayıların toplamı: ${sum}'dir.`;
}

console.log(kalanlar(sayilar));



// 3 argüman alan bir fonksiyon yaz. Aldığı sayının tek veya çift olmasına göre argüman olarak gelen callback fonksiyonlardan birini kullansın.
// Sonra, bu fonksiyonu çağır.

// - Fonksiyonun adı sayiKontrol olsun.
// - 3 argüman alsın: sayi, ciftSayiCallback, tekSayiCallback.
// - Sayı çift ise ciftSayiCallback'i, tek ise tekSayiCallback'i çalıştırsın.
// - Sonra bu fonksiyonu 3 sayısı için çağır. Callback fonksiyonları sayiKontrol'u çağırırken tanımla.
// - ciftSayiCallback bir sayıyı argüman olarak alsın ve "XXX çift sayıdır." metnini konsola yazdırsın.
// - tekSayiCallback bir sayıyı argüman olarak alsın ve "XXX tek sayıdır." metnini konsola yazdırsın.

const sayiKontrol = (sayi, ciftSayiCallback, tekSayiCallback) => {
    if (sayi % 2 === 0) {
        return ciftSayiCallback(sayi);
    } else {
        return tekSayiCallback(sayi);
    }
}

console.log(sayiKontrol(3, (sayi) => `${sayi} bir çift sayıdır`, (sayi) => `${sayi} bir tek sayıdır`));
