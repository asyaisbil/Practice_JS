/*Aşağıda verilen DOM manipülasyonlarını tekrar tekrar kullanılması için adı imageGenerator olan bir fonksiyona dönüştürün. 
Bu fonskiyon sırasıyla; 

image üzerinde beliren metni altText, 
imajın adresini imageUrl,
eklenecek class bilgisini de size isimli parametrelerden alsın.

Bu fonksiyon yeni oluşturulan img element'ini return etsin.*/


const newImage = document.createElement("img");
newImage.alt = "İstanbul Boğazı";
newImage.src = "https://picsum.photos/200/400";
newImage.classList.add("large");

function imageGenerator(altText, ) = 


// test için alttaki satırı kullanabilirsin.
document.body.appendChild(newImage, (altText, imageUrl, size) => {

})

// cevap: 

function imageGenerator(altText, imageUrl, size) {
    const newImage = document.createElement("img");
    newImage.alt = altText;
    newImage.src = imageUrl;
    newImage.classList.add(size);
    return newImage
  }
  
  // test için alttaki satırı kullanabilirsin.
  document.body.appendChild(imageGenerator("İstanbul Boğazı","https://picsum.photos/200/400","large"))




  /*Sayfadaki her paragrafın bir başlığı olmasını istiyoruz. Bunu gözle saymak yerine javascript ile yapalım.

  querySelectorAll kullanarak yazi classına sahip tüm ögeleri seç ve yazilar adında bir değişkene ata.
  Sonra, getElementsByClassName kullanarak baslik classına sahip elemanları basliklar adındaki bir değişkene ata.
  Eğer yazilar değişkeninin eleman sayısı basliklar değişkeninin eleman sayısından büyükse konsola "Başlığı olmayan yazılar var!" yazdır.
*/


import "./styles.css";

/* kodlar aşağıya */
const yazilar = document.querySelectorAll(".yazi");
const basliklar = document.getElementsByClassName("baslik");

if(yazilar.length > basliklar.length) {
  console.log("Başlığı olmayan yazılar var!");
}


/*
changeTextAndColor adında bir fonksiyon yaz. Fonksiyon verilen selector parametresini kullanarak ilgili elemanı seçmeli, metnini ve rengini de diğer parametreleri kullanarak değiştirmeli. Fonksiyon parametreleri sırasıyla şunlar olmalı:
selector: metni değişecek eleman'ın selectorü (örn: .bullets > p).
newText: yeni eklenecek metni.
textColor: yeni yazı rengi.
*/


function changeTextAndColor(selector, newText, textColor) {
    const element = document.querySelector(#selector);
    element.textContent = newText;
    element.style.color = textColor;
    return element;  
 }
 
 // kodunu test etmek için alttaki satırları kullanabilirsin
 changeTextAndColor("#baslik", "Selam!", "blue")



// index.js doyasında eksik bırakılan fonksiyonları tamamlayın. Bu fonksiyon index.html dosyasında yer alan sayacın butonlara 
// tıklanınca sayısının artmasını 
// ve azalmasını sağlamalı.


 const element = document.querySelector("#sayi");
 let elementNum = Number(element.textContent);
 
 function arttir() {
   elementNum += 1;
   element.textContent = elementNum; // HTML'deki değeri güncelle
 }
 
 function azalt() {
   elementNum -= 1;
   element.textContent = elementNum; // HTML'deki değeri güncelle
 }
 
 // alttaki kodları değiştirmeyin
 document.azalt = azalt;
 document.arttir = arttir;
 
 // HTML 'i aşağıda 
 /*
 <!DOCTYPE html>
 <html>
 
 <head>
   <title>Parcel Sandbox</title>
   <meta charset="UTF-8" />
 </head>
 
 <body>
   <h1>Sayaç: <span id="sayi">1</span></h1>
   <div>
     <button onclick="arttir()">Arttır</button>
     <button onclick="azalt()">Azalt</button>
   </div>
 
   <script src="index.js">
   </script>
 </body>
 
 </html>
*/



//Adı getUserCount olan bir fonksiyon yazın. 
// .user-list > div ile seçtiği her kullanıcı adının başına, 
// forEach kullanarak sıra numarasını "1. Emre Kahraman" gibi eklesin 
// ve kaç tane kullanıcı olduğunu konsola yazdırsın. 

const users = document.querySelectorAll("div.user-list");

function getUserCount() {
    for (let i = 0; i < users.length; i++) {
        const newName = `${i + 1}. ${users[i].textContent}`;
        console.log(newName);
        users[i].textContent = newName;
    }

    console.log(`Toplam kullanıcı sayısı: ${users.length}`);
}


/*
.gallery-section içinde birden fazla img tagi bulunuyor.

Bunları images değişkeninde saklayın.
forEach metodu ile 1., 3., 5. ... sıradakilere white-border, 2., 4., 6. ... sıradakilere gray-border class'ı ekleyin.
Her bir img elemanından red-border classını çıkarın.
*/

import "./styles.css";
/* üstteki kodu silme, kodlarını aşağıya yaz */

const images = document.querySelectorAll(".gallery-section img");

function odd() {
  images.forEach((image, index) => {
    if (index % 2 !== 1) {
      image.classList.add("white-border");
    } else {
      image.classList.add("gray-border");
    }
    image.classList.remove("red-border");
  });
}

odd(); // Fonksiyonu çalıştır



// 15

/*
Adı updateLinks olan ve header içindeki navın altındaki link elemanlarının yazılarını, class ve href özelliklerini 
for döngüsü kullanarak değiştiren bir fonksiyon yazın. 
Bu fonksiyonun parametreleri sırasıyla şunlar olmalı:

texts: yazılacak metinler, bir array olarak
classes: eklenecek class'ların listesi, bir array olarak
links: linkler, de bir array olarak
*/



function updateLinks(texts, classes, links) {
  for(let i = 0; i < linkElements.length; i++) {
    const linkElements = document.querySelectorAll("header nav a");
    linkElements[i].textContent = texts;
    linkElements[i].classList.add(classes);
    linkElements[i].href = links;
  }
}


// 16

/*
getElementsByTagName kullanarak tüm paragrafları bulup allText adında bir değişkene ata.
İlk olarak allText değişkeninin boş olup olmadığını kontrol et, eğer boşsa konsola "Can't found" yazdır.
Boş değilse tüm elemanları bir for döngüsü ile gez ve paragrafların içinde 
yer alan tüm "first" stringlerini "first of all" olarak değiştir.
*/


const allText = document.getElementsByTagName("p");

if (allText.length === 0) {
  console.log("Can't found");
} else {
  for(let i = 0; i < allText.length; i++) {
    allText[i].textContent = allText[i].textContent.replaceAll("first","first of all")
  }
}
