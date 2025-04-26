// 1

/* Id'si theme olan butona event listener ekle.

- id'si theme olan element'i querySelector ile seç ve buton isimli bir değişkende sakla.
- buton tıklanınca üzerindeki yazı Light Mode olsun. 
- Body'e dark class'ını eklesin. (querySelector kullan)
*/ 


import "./styles.css";

const buton = document.querySelector('#theme');

function lightMode() {
  buton.textContent = 'Light Mode';
  document.querySelector("body").classList.add("dark");
}

buton.addEventListener("click",lightMode);



// 2

/*
Bir div element'i oluştur ve id'si root olan element'in içine ekle.

- div element'ini yeniDiv isimli değişkende sakla.
- yeniDiv element'inin içinde Tıkla yazsın.
- Bu element tıklanınca Element tıklandı mesajı alert olarak çıksın.
- query metodu kullanarak id'si root olan element'i seç.
*/ 


const yeniDiv = document.createElement("div");
yeniDiv.textContent = "Tıkla";
yeniDiv.addEventListener("click",(e) => {
    alert("Element tıklandı.")
})

const root = document.querySelector("#root");
root.appendChild(yeniDiv);



// 3

/* Dinamik olarak bir button oluştur ve body'e ekle.

- button element'ini button isimli bir değişkende sakla.
- İçinde Dinamik Buton yazsın.
- Bu elemente btn ve btn-primary class'larını ekle.
- query ve get metodu kullanmadan body'nin içine ekle. */

import "./styles.css";

const button = document.createElement("button");

button.textContent = "Dinamik Buton";
button.classList.add("btn btn-primary");

document.body.appendChild(button);


// 4

/*
index.js dosyasındaki event listenerları tamamla. Herhangi bir tuşa basıldığında konsola event ismini ve basılan tuşu yazdırsın. 
Örn: Key down: i Key up: i

import "./styles.css";

document.addEventListener("keydown", function (event) {

});

document.addEventListener("keyup", function (event) {
 
});

*/

import "./styles.css";

document.addEventListener("keydown", function (event) {
    console.log("Key down: " + event.key);
});

document.addEventListener("keyup", function (event) {
    console.log("Key up: " + event.key);
});


// 7

/*
Get metodlarından biri ile id'si increase olan bir element'i seç ve double click event'i ekle. Konsola Dikkat: Çift tıklama yapıldı! yazdırsın.
*/ 


document.getElementById("increase").addEventListener("double click", (e) => {
    console.log("Dikkat: Çift tıklama yapıldı!");
});


// 8

/*
5 satır açıklama girilebilen bir text alanının HTML kodunu yaz. Id'si desc olsun.
*/ 

<textarea id="desc" rows="5"> </textarea>


// 11

/*
Mouse ile image id'li resmin üzerine gelince resme grayscale class'ı ekle, mouse resim üzerinden ayrılınca çıkar.

- image id'li elementi query selector ile seç ve resim isimli bir değişkende sakla.
- Gerekli event listenerları ekle.
*/

import "./styles.css";

const resim = document.querySelector("#image");
resim.addEventListener("mouseover", () => {
    resim.classList.add("grayscale");
})
resim.addEventListener("mouseout", () => {
    resim.classList.remove("grayscale");
})



// 12

/*

app id'li element'i query metodu ile seç ve tıklandığında active class'ını ekleyip, çıkar.

- Seçtiğin element'i bir değişkende saklamadan yap. İpucu: event.target
*/


document.querySelector("#app").addEventListener("click", () => {
    document.querySelector("#app").classList.toggle("active");
})



// 13

/*
Başlığın altında kayıt formu oluştur.

- 3 tane input olsun.
- Input'ların id'si sırasıyla, tamAd, ePosta, sifre olsun.
- Input'ların type değeri id'sine göre ayarlansın.
- Inputların hemen üzerinde başlıklar olsun: Adınız Soyadınız:, Email Adresiniz:, Şifreniz: olsun.
- En altta Kayıt yazan buton olsun. type'ı submit olsun.

-Dikkat: form oluşturmayı unutma.

*/


<form>
    <label for="tamAd">Adınız Soyadınız:</label>
    <input id="tamAd" type="text">
    
    </input>

    <label for="ePosta">Email Adresiniz:</label>
    <input id="ePosta" type="email">
    
    </input>

    <label for="sifre">Şifreniz:</label>
    <input id="sifre" type="password">
    
    </input>    
    <button type="submit">Kayıt</button>
</form>



// 14

/*
Aşağıdaki HTML yapıyı oluşturan javascipt kodu for döngüsü yardımı ile yazın.

<div class="gallery">
  <div class="row">
    <img src="https://picsum.photos/200?1">
    <img src="https://picsum.photos/200?2">
    <img src="https://picsum.photos/200?3">
    <img src="https://picsum.photos/200?4">
    <img src="https://picsum.photos/200?5">
    <img src="https://picsum.photos/200?6">
  </div>
</div>

- Resimlerde src property ile backtick kullanarak url'i ekleyin. 
- Element'leri yarattıktan sonra parent'ina ekleyin.
*/

const galleryDiv = document.createElement("div");
galleryDiv.classList.add("gallery");
const rowDiv = document.createElement("div");
rowDiv.classList.add("row");

for(let i = 0; i < 6; i++) {
    const imageItem = document.createElement("img");
    imageItem.src = `https://picsum.photos/200?${i+1}`;
    rowDiv.appendChild(imageItem);
}

galleryDiv.appendChild(rowDiv);



// 15

/*
Input alanına yazılanları büyük harfe çevir.
*/ 

const input = document.getElementById("name");

input.addEventListener("input", (e) => {
    e.target.value = e.target.value.toUpperCase();
})


// 16

/*
sil butonlarına tıklayınca ilgili item'ı silsin.

- li içindeki span'leri deleteButtons isimli değişkende sakla.
- forEach metodu kullanarak her bir item'a click event'i ekle.
- Tıklanan element'in parent element'ini sil.

- İpucu: parentElement, remove, event.target
*/

import "./styles.css";

const deleteButtons = document.querySelectorAll("li span");
deleteButtons.forEach((item) => {
  item.addEventListener("click",(event) => {
    event.target.parentElement.remove();
  })
}
)


// 17

/*
complete butonlarına tıklayınca ilgili item'ların class'ını completed yap. 

- li içindeki span'leri completeButtons isimli değişkende sakla.
- forEach metodu kullanarak her bir item'a click event'i ekle.
- Tıklanan element'in parent element'ine completed class'ını ekle.
- Tıklanan element'i sil.

- İpucu: parentElement, remove, event.target, classList
*/

const completeButtons = document.querySelectorAll("li span");
completeButtons.forEach((i) => {
    i.addEventListener("click", (e) => {
        e.target.parentElement.classList.add("completed");
        e.target.remove();
    })
})


// 18

/*
index.js sayfasındaki kodu tamamlayarak, keyDiv id'li element'in arkplan rengini  keyDown event'i ile değiştir.

- get metodu ile keyDiv id'li element'i yakala ve box isimli bir değişkende sakla.
- w harfine basıldığında green olsun.
- i harfine basıldığında  red olsun.
- t harfine basıldığında purple olsun.
*/

const box = document.getElementById("keyDiv");

document.addEventListener("keydown", function (event) {
  if(event.key === "w") {
          box.style.backgroundColor = "green"
      } else if (event.key === "i") {
         box.style.backgroundColor = "red"
      } else if (event.key === "t") {
          box.style.backgroundColor = "purple"
      }

  
      });



// 19

/*
Klavyedeki yön tuşlarına basılınca ilgili tuşun rengini yeşil yap.

- keydown ve keyup eventlerini dokümana ekle.
- ArrowUp, ArrowLeft v.b. tuşlara basıldığında ilgili tuşu getElementById ile yakala.
- Tuşa basıldığında arkaplan rengini green yap, tuş bırakıldığında arkaplan rengini null yap.

- İpucu: event.key, style
*/


document.addEventListener("keydown", function (event) {
    let key = event.key;
  
    if (key === "ArrowUp") {
      document.getElementById("up").style.backgroundColor = "green";
    } else if (key === "ArrowDown") {
      document.getElementById("down").style.backgroundColor = "green";
    } else if (key === "ArrowLeft") {
      document.getElementById("left").style.backgroundColor = "green";
    } else if (key === "ArrowRight") {
      document.getElementById("right").style.backgroundColor = "green";
    }
  });
  
  document.addEventListener("keyup", function (event) {
    let key = event.key;
  
    if (key === "ArrowUp") {
      document.getElementById("up").style.backgroundColor = null;
    } else if (key === "ArrowDown") {
      document.getElementById("down").style.backgroundColor = null;
    } else if (key === "ArrowLeft") {
      document.getElementById("left").style.backgroundColor = null;
    } else if (key === "ArrowRight") {
      document.getElementById("right").style.backgroundColor = null;
    }
  });
  


// 20

/*
Aşağıdaki form kodunu tamamla: - email ve password alanlarının değeri değiştiğinde event.target.value kullanarak 
değerleri alıp konsola yazdır. - Form submit olduğunda Form submitted! yazısını konsola yazdır. -İpucu: change


document.getElementById("email");


document.getElementById("password");


document.getElementById("myForm");
*/


const email = document.getElementById("email");
email.addEventListener("change", (event) => {
    console.log(event.target.value);
})

const password = document.getElementById("password");
password.addEventListener("change", (event) => {
    console.log(event.target.value);
})

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
})
