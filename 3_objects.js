/*
car objesindeki özellikleri kullanarak aşağıdaki 2 cümleyi köşeli parantez yöntemi kullanarak sırasıyla ve ayrı ayrı konsola yazdır.

- "Arabamız, 2011 model Beyaz renktir."
- "Otomatik vitesli olup, Dizel yakıt ile çalışmaktadır."
*/

const car = {
    renk: "Beyaz",
    "model yılı":  2011,
    vites: "Otomatik",
    "yakıt türü": "Dizel"
}

console.log("Arabamız, " + car["model yılı"] + " model " + car.renk + " renktir.");
console.log(car.vites + " vitesli olup, " + car["yakıt türü"] + " yakıt ile çalışmaktadır.");


/*
araba objesine aşağıdaki metodları ekle.
- getKilometers(): Arabanın güncel kilometresi {kilometre} km'dir. metnini konsola yazdırsın.
- getYear(): Araba {yil} modeldir. metnini konsola yazdırsın.
*/

const araba = {
  model: 'VW Passat',
  "üretim yılı": 2011,
  kilometre: 153000,
  fiyat: 800000,
  function getKilometers() {
    console.log("Arabanın güncel kilometresi " + araba.kilometre + " km'dir.");
  },
  function getYear() {
    console.log("Araba " + araba["üretim yılı"] + " modeldir.");
  }
}


/*
Aşağıda bir kişi için bazı bilgiler değişkenlerde tanımlanmıştır. 
user isimli yeni bir değişken tanımla ve bu bilgileri uygun veri türünü kullanarak bu değişkene ata.
*/ 

const name = "Melis";
const surname = "Koçak";
const age= 45;
const langs = ["English", "Türkçe", "German"];

const user = {
    name: "Melis",
    surname: "Koçak",
    age: 45,
    langs: ["English", "Türkçe", "German"]
}


// cohort0824 array'ini ogrenciler isimli bir değişkene kopyala ve sonuna Erhan'ı ekle.

const cohort0824 = ["Ali", "Ceren", "Derya", "Melisa"];
const ogrenciler = [...cohort0824, "Erhan"];
console.log(cohort0824);


/*
brands array'ine Mercedes'i en başta olacak şekilde ekle ve adı brandsFinal olan yeni bir değişkende sakla. 
(.push() metodu veya döngü kullanma.)
*/

const brands = ["Ford", "BMW", "Audi", "Toyota"];
const brandsFinal = ["Mercedes", ...brands];


/*
person objesi için aşağıdaki işlemleri dot operatörü kullanarak yap.
- oyVerebilir(booelan) özelliğini ekle. Eğer yaşı 18'e eşit veya büyükse değerini true, değilse false yap.
- surname özelliğini ekle. Değerini Koçak yap.
*/ 

const person = {
    yas: 46,
    name: "Emre", 
    surname: "Koçak",
    oyVerebilir: function() {
        if (this.yas >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(person);


// human objesine learn metodu ekleyin. Argüman olarak aldığı language bilgisini kendi langs özelliğine eklesin.

const human = {
    name: "Marry",
    age: 45,
    location: "San Francisco",
    langs: ["English", "German"],
    learn: function(language) {
        return this.langs = [...this.langs, language];
    }
}



/*
car isimli boş bir obje tanımla. Daha sonra, markası MERCEDES, modeli C180, model yılı 2022, üretim yeri Almanya olacak şekilde bu objeye ekle.
Not:  Özellikleri tanımlarken gerektiğinde dot operatörü, gerektiğinde köşeli parantez operatörü kullan.
*/

const car = {

};

car.marka = "Mercedes";
car.model = "C180";
car["model yılı"] = 2022;
car["üretim yeri"] = "Almanya";

/*
Aşağıdaki bilgileri kullanarak adı okul olan bir obje tanımla. Bilgileri değişkeni tanımlarken kullan, sonradan ekleme.

- name => "İTÜ"
- location => "Maslak" 
- phone => "(0212) 285 30 30"
- established => 1773
*/


const okul = {
    name: "İTÜ",
    location: "Maslak",
    phone: "(0212) 285 30 30",
    established: 1773
}


/*
Aşağıdaki araba objesine yeni bir satırda start isminde metod ekle. Bu metod konsola Araba çalıştırıldı metnini yazsın. 
Yeni bir satırda bu metodu çağır.
*/

const araba = {
    marka: "Mercedes",
    model: "C180",
    "üretim yılı": 2022
}

araba.start = function() {
    console.log("Araba çalıştırıldı");
}

araba.start();


/*
Bir objede istenilen özelliği verilen bir değer ile değiştiren fonksiyon yaz.

- Fonksiyonun adı changeProperty olsun.
- 3 argüman alsın: object, key, value
- objedeki key'in değerini gelen value ile değiştirsin.
- güncel objeyi dönsün.
*/

function changeProperty(object, key, value) {
    object.key = value;
    return object;
}


/*
Bir objede istenilen özelliği verilen bir değer kadar artıran fonksiyon yaz.

- Fonksiyonun adı incrementProperty olsun.
- 3 argüman alsın: object, key, value
- Objede bu key varsa key'in değerine argüman olarak gelen value'yu eklesin.
- Yoksa gelen değeri direk eklesin.
- Güncel objeyi dönsün.
*/

function incrementProperty(object, key, value) {
    if (object[key] !== undefined) {
        object[key] = object[key] + value;
    } else {
        object[key] = value; 
    }
    return object; 
}



/* Argüman olarak aldığı objeden yeni bir obje yaratan ve içine yeni özellikler ekleyip dönen fonksiyon yaz.
Fonksiyonun adı newCar olsun.
Argüman olarak bir arabanın özelliklerini obje olarak alsın.
Gelen arabanın bir kopyasını yaratsın.
İçine otv özelliği eklesin: Arabanın fiyatı 1450000'den az ise ÖTV oranı 10, değil ise 40 olsun.
İçine mtv özelliği eklesin: Yıllık Motorlu Taşıtlar Vergisi 1-10 yaşındaki arabalar için 1773, 10 yaş üstü arabalar için 520 olsun.
İçine isDomestic özelliği eklesin: Araba yerli üretimse true, değilse false olmalı. (yerli marka: TOGG)
*/ 

//Örnek Kullanım:
newCar({
	id: 121,
	model: 'TOGG T10X',
	yakit: 'Elektrikli',
	vites: 'Otomatik',
	yas: 2,
	fiyat: 1800000
})

araba = {
    id: 121,
    model: 'TOGG T10X',
    yakit: 'Elektrikli',
    vites: 'Otomatik',
    yas: 2,
    fiyat: 1800000
}

function newCar(araba = {}) {
    const araba_copy = {...araba};
    araba_copy.otv = araba.fiyat < 1450000 ? 10 : 40;
    araba_copy.mtv = araba.yas >= 1 && araba.yas <= 10 ? 1773 : 520;
    araba_copy.isDomestic = araba.model.startsWith('TOGG') ? true : false;
    return araba_copy
}

console.log(newCar(araba));


/*
Sayılardan oluşan bir array'i argüman olarak alan bir fonksiyon yaz. Bu fonksiyon içindeki sayıların tekrar sıklığını bir objede key&value ikilisi olarak saklasın ve o objeyi geri dönsün.
Fonksiyonun adı frequency olsun.
Argüman olarak sayilar'dan oluşan bir array'i alsın.
Sayıların tekrar sıklıklarını saklamak için adı depo olan bir boş obje oluşturun.
Argüman olarak gelen array için bir döngü yapın.
Her iterasyonda eldeki sayi obje'de var mı kontrol edin.
Varsa değerini 1 tane artırın.
Yoksa değeri 1 olacak şekilde ekleyin.
*/ 

/*Örnek kullanım:
frequency([1,1,1,1,1,2,2,2,2,13]);
*/

/*
Output:
{
    1: 5,
    2: 4,
    13: 1
}
    */


function frequency(sayilar) {
    const depo = {};
    for (let i = 0; i < sayilar.length; i++) {
        if (sayilar[i] in depo=== true) {
            depo[sayilar[i]]++
        } else {
            depo[sayilar[i]] = 1;
        }
    }
    return depo;
}


console.log(frequency([1,1,1,1,1,2,2,2,2,13]));
