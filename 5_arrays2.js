
//sayilar array'indeki çift sayıları filtreleyerek ciftSayilar isimli bir değişkende sakla.

const sayilar = [1,2,3,4,5,6,7,8,9,10];

const ciftSayilar = sayilar.filter((sayi) => sayi % 2 === 0);
console.log(ciftSayilar);


//kelimeler array'inde 4 karakterden büyük olanları filtreleyin ve kelimeMd isimli bir değişkende saklayın. Bu değişkeni konsola yazdır.

const kelimeler = ["filter", "map", "reduce", "find", "includes", "indexOf", "length"]

const kelimeMd = kelimeler.filter((i) => i.length > 4);
console.log(kelimeMd);


// users arrayinde rolü admin olan kullanıcıları filtrele ve admins isimli bir değişkende sakla. Sonra, konsola yazdır.

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Eve", role: "admin" }
];

const admins = users.filter((i) => i.role === "admin");
console.log(admins);


// Bir şirkette çalışan maaşları sırasıyla: 80000, 100000, 90000, 40000'dir.
// .map() metodu kullanarak maaslar'a %40 zam yap, guncelMaaslar isimli bir değişkende sakla ve konsola güncel maaş listesini yazdır.

const maaslar = [80000, 100000, 90000, 40000]
const guncelMaaslar = maaslar.map((sayi) => sayi + (sayi * 40 / 100));
console.log(guncelMaaslar);


// kelimeler array'indeki kelimelerin toplam karakter sayısını .reduce() kullanarak hesapla ve toplamKarakter isimli değişkende sakla. 
// Konsola yazdır.

const kelimeler = ["Merhaba", "Workintech'li", "aramıza", "hoş", "geldin."];

const toplamKarakter = kelimeler.reduce(((toplam, i) => toplam + i.length),0);
console.log(toplamKarakter);


// sides isimli array'de kenarları verilmiş dikdörtgenlerin toplam alanını .reduce() kullanarak hesapla 
// ve "Toplam alan XXm2'dir." metnini konsola yazdır.

const sides = [[1,3], [2,5], [3,7], [6,5], [7,5], [10,2]];

console.log("Toplam alan " + sides.reduce((toplam, sayi) => toplam + sayi[0] * sayi[1] ,0) + "m2'dir.");


// sayilar array'indeki en büyük ve en küçük sayı arasındaki farkı .sort() metodunu kullanarak hesapla ve konsola yazdır.

const sayilar = [1,4,8,10,101,-5,90,-40];

const siraliSayilar = sayilar.sort((a,b) => a-b);
console.log(siraliSayilar[siraliSayilar.length-1]-siraliSayilar[0]);


// students array'indeki öğrecilerden 80 ve üstü alanları filtreleyin ve highScorers değişkeninde sakla. Konsola yüksek not alanları yazdır.

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 }
];

const highScorers = students.filter((obj) => obj.grade >= 80);
console.log(highScorers);


// sides isimli array'de kenarları verilmiş dikdörtgenlerin alanını .map() metodunu kullanarak areas isimli değişkende sakla. 
// Bu sides ve areas değişkenlerini backtick ile kullanarak 3. index'teki eleman için "Ölçüleri 6m ve 5m olan odanın alanı 30m2'dir." 
// metnini konsola yazdır.

const sides = [[1,3], [2,5], [3,7], [6,5], [7,5], [10,2]];

const areas = sides.map((arr) => arr[0] * arr[1]);
console.log(`Ölçüleri ${sides[3][0]}m ve ${sides[3][1]}m olan odanın alanı ${areas[3]}m2'dir.`)


// users listesindeki isimleri yazı kurallarına uygun hale getir (ilk harf büyük diğer harfler küçük) ve konsola yazdır.

const users = ["emre", "HASAN", "haTice", "seleN"];

const duzgunUsers = users.map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase());
console.log(duzgunUsers);


// Tamamlanmış taskleri filtrele ve sadece id'leri completedTaskIds adlı bir değişkende sakla. Bu id'leri konsola yazdır.

const tasks = [
  {id: 1, completed: true},
  {id: 2, completed: false},
  {id: 3, completed: true}
];

const completedTaskIds = tasks.filter(obj => obj.completed).map(obj => obj.id);
console.log(completedTaskIds);


// cumle değişkeninde "a" harfinin kaç kere tekrar ettiğini .reduce() kullanarak hesapla ve konsola yazdır.

const cumle = "6 aylık kursu başarı ile tamamladım.";
const aCumle = cumle.split("").reduce((toplam, char) => toplam + (char === "a" ? 1 : 0),0);
console.log(aCumle);


// Bir fonksiyon yaz, adı reverse olsun. Argüman olarak aldığı string bir değeri .reduce() kullanarak tersine çevirsin. 
// "workintech" kelimesi için bu fonksiyonu çalıştır ve sonucunu konsola yazdır.

- İpucu: reduce için başlangıç değerini '' verebilirsin.
- .reverse() metodunu kullanma.


const reverse = (str) => str.split("").reduce(((arr, char) => char + arr),'');

console.log(reverse("workintech"));


// Adı getReport olan fonksiyon yaz. Kullanıcı bilgilerinden(obje) oluşan bir listeyi(array) argüman olarak alsın. 
// active kullanıcıların impression sayılarının toplamını "Aktif kullanıcı impression sayısı: XXX" gibi bir metin dönsün. 
// Aşağıdaki vdfUsers için bu fonksiyonu çalıştır ve sonucu konsola yazdır.

const vdfUsers = [
    {name: "Erhan", impression: 101, status: "active"},
    {name: "Hatice", impression: 1001, status: "passive"},
    {name: "Melisa", impression: 10, status: "passive"},
    {name: "Murat", impression: 42, status: "active"},
]

const getReport = (arr) => arr.reduce((toplam, sayi) => toplam + (sayi.status === "active" ? 1 : 0),0);
console.log("Aktif kullanıcı impression sayısı: " + getReport(vdfUsers));



// members değişkeninde saklı üyeleri yaşa göre küçükten büyüğe sırala ve konsola yazdır.

const members = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

console.log(members.sort((a,b) => a.age-b.age));


// Adı filteredArays olan bir fonksiyon yaz. 
// Array'lerden oluşan bir array'i ve elemanSayisi'nı alsın. 
// Array'de, eleman sayısı istenen elemanSayisi'na eşit veya büyük olan elemanları filtreleyip, geri dönsün. 
// diziler arrayini ve 3 rakamını kullanarak bu fonksiyonu çağır ve sonucunu konsola yazdır.

const diziler = [[1, 2], [3, 4, 5], [6, 7]];

const filteredArays = (array, elemanSayisi) => array.filter(a => a.length >= elemanSayisi);
console.log(filteredArays(diziler[3]));


// names isimli arrayde var olan ifadelerin baş harflerinden oluşan kısaltmalarını kisaltmalar isimli bir değişkende oluştur ve konsola yazdır. 
// İpucu: 
// - .map() ile names'deki her bir ifadeyi al. 
// - .split() ile her ifadeyi kelimelerden oluşan bir array'e dönüştür. 
// - .map() ile her kelimenin ilk harfini bir değişkende sakla. 
// - .join() ile bu harfleri bir araya getir.

const names = ["Central Processing Unit", "Graphics Processing Unit", "Command Line Interface", "Proof of Concept"];

const kisaltmalar = names.map(name => 
    name.split(" ").map(word => word[0]).join("")
);

console.log(kisaltmalar); // ["CPU", "GPU", "CLI", "POC"]



// sayilar array'inde tekrar eden sayıları .reduce() metodu ile çıkar ve konsola yazdır. 
// - İpucu: .reduce() başlangıç değeri olarak boş array [] verebilirsin. 

const sayilar = [1,1,2,3,4,4,4,5,5,5,6,6,7,8];

const tekrarEdensiz = sayilar.reduce((acc, num) => {
  if (!acc.includes(num)) acc.push(num);
  return acc;
}, []);

console.log(tekrarEdensiz); // [1, 2, 3, 4, 5, 6, 7, 8]


// sayilar arrayinde çift sayıları bul, karesini al, toplamını bul. sonuc isimli değişkende tek satırda `3 farklı` metod kullanarak yap. 
// Konsola sonucu yazdır.

const sayilar = [1, 2, 3, 4, 5];

const sonuc = sayilar.filter(sayi => sayi % 2 === 0).map(sayi => sayi * sayi).reduce((toplam, sayi) => toplam + sayi,0);
console.log(sonuc); 


// Aşağıdaki öğrencilerden en yüksek puan alan ilk üç öğrencinin ortalamasını konsola yazdır.

const ogrenciler = [
  { name: "Erdem", score: 85 },
  { name: "Ali", score: 55 },
  { name: "Hatice", score: 95 },
  { name: "Miray", score: 70 },
  { name: "Erhan", score: 72 }
];

const notlar = (arr) => {
  const ogrNot = [];
  for (i = 0; i < ogrenciler.length; i++) {
    ogrNot.push(arr[i].score);
  }
  return ogrNot;
}
const notArr = notlar(ogrenciler)
const enYuksekUc = notArr.sort((a,b) => b-a);
const sonuc = [enYuksekUc[0],enYuksekUc[1],enYuksekUc[2]];
const ort = sonuc.reduce((toplam, sayi) => toplam + sayi, 0);
const ortSonuc = ort /3;
console.log(ortSonuc);


// IT departmanı bütçesi 5900 $'dır. 
// IT çalışanlarına yapılabilecek maksimum zam oranını yüzdelik olarak ve tam sayı olarak konsola yazdır. 
// - Örn: maksimum yüzde 12 zam alabiliyorlarsa konsolda 12 yazdırmalı.

const people = [
  { name: "Anna", salary:  3000, department: "IT"},
  { name: "Tom", salary: 2000, department: "Marketing"  },
  { name: "Jerry", salary: 1500, department: "Education" },
  { name: "Kate", salary: 2400, department: "IT" }
];

const maxZam = people.filter(dep => dep.department === "IT");
const maxZam2 = maxZam.reduce((toplam, zam) => toplam + zam.salary, 0);
const maxZam3 = (5900/maxZam2);
console.log(maxZam3);


// Çan eğrisi uygulanan bir derste ortalamadan düşük olan öğrencilerin isimlerini bir array olarak isimler isimli değişkende sakla 
// ve konsola yazdır.

const scores = [
  {name: "Hatice", score: 75},
  {name: "Melis", score: 100},
  {name: "Meltem", score: 5},
  {name: "Ahmet", score: 25},
  {name: "Adem", score: 45},
  {name: "Duru", score: 55},
  {name: "Atlas", score: 65},
];

const ortScore = scores.reduce((toplam,sayi) => toplam + sayi.score,0) / scores.length;
const isimler = scores.filter(sayi => sayi.score < ortScore).map(sayi => sayi.name);
console.log(isimler);




const words = [ "Melisa", "Workintech", "Emre", "Burak", "Sümeyye", "Fatih"];
const longestWord = (words) => {
  const longestLength = 0;
  const longest = "";
  for (let i of words) {
    if (i.length > longestLength) {
      longest = i;
    };
  };
  return longest;
}

console.log(longestWord(words));


/*
Bir basamak sayısını argüman olarak alıp o basamak sayısına sahip en büyük sayıyı dönen(örn: 3 basamaklı en büyük sayı 999) fonksiyon yaz ve 5 için çalıştır, sonucu konsola yazdır.

- Fonksiyonun adı getBiggest olsun. Arrow fonksiyon olarak tanımla.
- Bir sayıyı argüman olarak alsın: digit
- O basamak sayısına ait en büyük sayıyı sayı veri türünde dönsün.

- İpucu
biggest isimli boş bir string tanımlayabilirsin.
while döngüsü ile her digit için biggest'a 9 string'ini ekleyebilirsin.
biggest'ı sayı veri türünde dönebilirsin.
*/

/*
const getBiggest = (digit) => {
  let biggest = "";
  for (i = 0; i < digit; i++) {
    biggest = biggest + "9";
  }
  return Number(biggest);
}

console.log(getBiggest(3));
*/

/*
const getBiggest = (digit) => {
  let biggest = "";
  let i = 0;
  while (i < digit) {
    biggest = biggest + "9";
    i++;
  }
  return Number(biggest);
}

console.log(getBiggest(5));
*/

const getBiggest = digit => Number("9".repeat(digit)); 
console.log(getBiggest(5)); // 99999



// Kendisine gelen sayılardan oluşan bir listedeki pozitif sayıların toplamını dönen bir fonksiyon yaz. 
// sayilar arrayi için çalıştır ve sonucu konsola yazdır. 
// - Fonksiyonun adı sumOfPositives olsun. Arrow fonksiyon olarak tanımlayın. 
// - Sayılardan oluşan bir listeyi argüman olarak alsın: nums. 
// - positives isimli bir sabit değişkende pozitif sayıları filtrelesin. 
// - sum isimli bir sabir değişkende reduce ile sayıları toplasın. 
// - sonucu geri dönsün. 
// - sayilar isimli array için fonskiyonu çalıştır ve sonucu konsola yazdır. 
// -Dikkat: metodlar için sadece tek satır arrow fonksiyon kullanın.


// const sayilar = [1,-4,5,6,8,9,-10,12,10];

// const sumOfPositives = nums => {
//   const positives = nums.reduce((toplam, sayi) => toplam + (sayi > 0 ? sayi : 0),0);
//   return positives;
// }

// console.log(sumOfPositives(sayilar));


const sayilar = [1,-4,5,6,8,9,-10,12,10];

const sumOfPositives = nums => {
  const positives = nums.filter(sayi => sayi > 0);
  const sum = positives.reduce((toplam,sayi) => toplam + sayi,0);
  return sum;
}

console.log(sumOfPositives(sayilar));


/*
Tekrar eden harfleri bir string olarak geri dönen fonksiyon yaz. 
"6 aylık yazılımcı eğitimini başarıyla tamamladım" metni için çalıştır ve sonucunu konsola yazdır.

- Fonksiyonun adı duplicateCharacters olsun.
- Bir argüman alsın: metin.
- Tekrar eden harfleri metindeki sırasıyla geri dönsün.
- "6 aylık yazılımcı eğitimini başarıyla tamamladım" metni için çalıştır ve sonucunu konsola yazdır.

- İpucu: 
Boş bir string oluştur, adı tekrarEdenler olsun.
İç içe 2 for döngüsü yaz. 2. döngü ilk döngüden sonraki karakterden başlasın.
Aynı karakteri(charAt kullan) bulursa tekrarEdenler bu karakteri içeriyor mu diye baksın.
İçermiyorsa eklesin ve 2. döngüden çıksın.
*/

const duplicateCharacters = metin => {
  let tekrarEdenler = "";
    for (i = 0; i < metin.length; i++) {
      for (j = i + 1; j < metin.length; j++) {
        if (metin.charAt(j) === metin.charAt(i)) {
          if (!tekrarEdenler.includes(metin.charAt(i))) {
            tekrarEdenler = tekrarEdenler + metin.charAt(i);
          }
        }
      }
    }
  return tekrarEdenler;
}

console.log(duplicateCharacters("6 aylık yazılımcı eğitimini başarıyla tamamladım"));
