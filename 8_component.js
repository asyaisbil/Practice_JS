
/* Aşağıdaki component'i forEach kullanarak oluşturun ve class'ı liste olan element'e ekleyin. Component:
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>

- query metodu ile liste class'ına sahip element'i alın ve liste adında bir değişkende saklayın. - forEach döngüsü içinde her item için bir li element'i oluşturun ve li adlı bir değişlende saklayın. - li element'inin metnini ekleyin. - li element'ini liste'ye ekleyin.
*/

import "./styles.css";

const items = ['Item 1', 'Item 2', 'Item 3'];

//  buradan itibaren cevap 
const liste = document.querySelector(".liste");
items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    liste.appendChild(li);
})


/*
Bir button component'i oluştur ve body'e ekle.

- Oluşturulan butonu button isimli değişkende sakla.
- Üzerinde Kayıt Ol yazsın.
- btn class'ına sahip olsun.
- query veya get metodlarını kullanmadan body'i seçin.
*/

const button = document.createElement("button");
button.textContent = "Kayıt Ol";
button.classList.add("btn");
document.body.appendChild(button);


/*
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, ImagePost adında bir fonksiyon yaz.

Component:
<div class="card">
   <img src="https://picsum.photos/200" >
</div>


- div element'i oluştur ve card adında bir değişkende sakla.
- Buna card class'ını ekle.
- img element'i oluştur ve img adında bir değişkende sakla.
- src değerini https://picsum.photos/200 yap.
- img'ı card içine ekle.
- oluşan component'i geri dön.
*/

function ImagePost() {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200";
    card.appendChild(img);
    return card;
}



/*
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, Project adında bir fonksiyon yaz.

Component:
<div>
   <img src="https://picsum.photos/200" >
   <h1>Proje 1</h1>
   <p>Proje açıklaması buraya gelecek.</p>
</div>


- div element'i oluştur ve container adında bir değişkende sakla.
- img element'i oluştur ve img adında bir değişkende sakla.
- src değerini https://picsum.photos/200 yap.
- img'ı container içine ekle.
- h1 element'i oluştur ve title isimli değişkende sakla.
- Metnini Proje 1 yap.
- title'ı container içine ekle.
- p element'ini oluştur ve desc isimli değişkende sakla.
- Metnini Proje açıklaması buraya gelecek. yap.
- desc'i container içine ekle.
- oluşan component'i geri dön.
*/

function Project() {

    const container = document.createElement("div");

    const img = document.createElement("img");
    img.src = "https://picsum.photos/200";
    container.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = "Proje 1";
    container.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = "Proje açıklaması buraya gelecek.";
    container.appendChild(desc);

    return container;
}



/*
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, Description adında bir fonksiyon yaz. Bu fonksiyon bir metni parametre olarak alsın ve p element'ine eklesin.

Component:
<div>
    <p>Gelen parametre buraya gelecek</p>
</div>


- Fonksiyon'da metin adında bir parametre tanımla.
- div element'i oluştur ve container adında bir değişkende sakla.
- p element'ini oluştur ve desc isimli değişkende sakla.
- Metnini gelen argüman yap.
- desc'i container içine ekle.
- Oluşan component'i geri dön.
*/

function Description(metin) {
    const container = document.createElement("div");
    const desc = document.createElement("p");
    desc.textContent = metin;
    container.appendChild(desc);
    return container;
}




/*
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, PizzaDetails adında bir fonksiyon yaz. 

Component:
<div>
    <span>300TL</span>
    <span>4.7</span>
    <span>(228)</span>
</div>


- Fonksiyon 3 parametre alsın. fiyat, puan, oySayisi
- Bu fonksiyonda önce div element'i oluştur ve container adında bir değişkende sakla.
- span element'ini oluştur ve price isimli değişkende sakla.
- Gelen fiyat bilgisini ekle.
- price'ı container içine ekle.
- span element'ini oluştur ve rating isimli değişkende sakla.
- Gelen puan bilgisini ekle.
- rating'i container içine ekle.
- span element'ini oluştur ve count isimli değişkende sakla.
- Gelen oySayisi bilgisini backtick kullanarak ekle.
- count'u container içine ekle.
- Oluşan component'i geri dön.
*/

function PizzaDetails(fiyat, puan, oySayisi) {

    const container = document.createElement("div");

    const price = document.createElement("span");
    price.textContent = fiyat;
    container.appendChild(price);

    const rating = document.createElement("span");
    rating.textContent = puan;
    container.appendChild(rating);

    const count = document.createElement("span");
    count.textContent =  `${oySayisi}`;
    container.appendChild(count);

    return container;
}



/*
Aşağıdaki component'i oluşturan ve oluşan component'i geri dönen, MovieDetails adında bir fonksiyon yaz. 

Component:
<div>
    <img src="URL" alt="TITLE">
    <h2>TITLE</h2>
    <p>DESC</p>
</div>


Örnek Veri: 
{
  url: "https://imdb.com/poster",
  title: "Film adı",
  desc: "Film açıklaması"
} 

- Fonksiyon 1 parametre alsın. movie isminde bir obje. (Bu objede title, url, desc bilgileri yer alıyor.)
- Bu fonksiyonda önce div element'i oluştur ve container adında bir değişkende sakla.
- img element'ini oluştur ve poster isimli değişkende sakla.
- Gelen bilgileri component yapısına göre ekle.
- poster'i container içine ekle.
- h2 element'ini oluştur ve title isimli değişkende sakla.
- Gelen başlığı için ekle.
- title'ı container içine ekle.
- p element'ini oluştur ve desc isimli değişkende sakla.
- Gelen açıklamayı buraya ekle.
- desc'i container içine ekle.
- Oluşan component'i geri dön.
*/

function MovieDetails(movie) {

    const container = document.createElement("div");
    
    const poster = document.createElement("img");
    poster.src = movie.url;
    poster.alt = movie.title;
    container.appendChild(poster);

    const title = document.createElement("h2");
    title.textContent = movie.title;
    container.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = movie.desc;
    container.appendChild(desc);

    return container;
}



/* 
Aşağıdaki film bilgilerini içeren array'deki filmleri .map() metodu ve Movie fonksiyonunu kullanarak component'lere dönüştür, components değişkeninde sakla.*/

const movies = ["Spartacus", "Matrix", "Dune"];
function Movie(title) {
 const container = document.createElement('div');
 container.textContent = title;
 return container
}


// buradan itibaren cevap
const components = movies.map((item) => {
    return Movie(item);
})




/*
Aşağıdaki proje bilgilerini içeren array'deki projeleri .map() metodu ve Project fonksiyonunu kullanarak component'lere dönüştür, 
components değişkeninde sakla. Bu components array'inde forEach ile döngü yap ve her bir component'i body'e ekle. - get ve query metodu kullanmadan body'e eriş.
*/ 

const projects = ["Project 1", "Project 2", "Project 3"];


function Project(topic) {
 const container = document.createElement('div');
 container.textContent = topic;
 return container
}


// buradan sonrası cevap

const components = projects.map((item) => {
    return Project(item);
})

components.forEach((item) => {
    document.body.appendChild(item);
})




/*
Bir button component'i oluşturan fonksiyon yaz. Gönder metni için çalıştır ve oluşan component'i id'si app olan element'e ekle.

- Fonksiyonun adı Button olsun.
- Bir parametre alsın: adı text olan bir string.
- Bir button element'i oluştursun vebunu button isimli değişkende saklasın.
- Gelen argümanı butonun metni olarak eklesin.
- Butona btn class'ı eklesin.
- Oluşan butonu geri dönsün.
- Bu fonskiyonu Gönder metni ile çalıştır ve oluşan component'i id'si app olan element'e ekle.
*/

function Button(text) {

    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("btn");
    return button;
}

document.getElementById("app").appendChild(Button("Gönder"));




/*
Bir liste component'i oluşturan fonksiyon yaz. String'lerden oluşan bir array alsın. ["Item 1", "Item 2", "Item 3"] için çalıştır ve oluşan component'i id'si app olan element'e ekle.

- Fonksiyonun adı Liste olsun.
- Bir parametre alsın: adı items olan stringlerden oluşan bir array.
- Bir ul element'i oluştursun ve bunu liste isimli değişkende saklasın.
- Gelen argüman için forEach döngüsü yap.
- Bu döngüde li element'i oluştur ve li isimli değişkende sakla.
- li element'ine metin olarak array'deki item'ı ekle.
- li element'ini listeye ekle.
- Bu fonskiyonu ["Item 1", "Item 2", "Item 3"] için çalıştır ve oluşan component'i id'si app olan element'e ekle.
*/

function Liste(items) {
    const liste = document.createElement("ul");
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        liste.appendChild(li);
    })
    return liste;
}

document.getElementById("app").appendChild(Liste(["Item 1", "Item 2", "Item 3"]));
