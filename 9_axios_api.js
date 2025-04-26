/*
Düğmeye tıklandığında https://dog.ceo/api/breeds/image/random  adresine istek at ve gelen url'i kullanarak bir img element'i oluştur 
// ve rastgele bir köpek resmini ekranda göster.

1- Önce resmi ekleyeceğimiz dogImage id'li element'icontainer isimli değişkende saklayalım.
2- getDogImage id'li element'e event listener ekle. Tıklandığında bir get isteği atsın.
3- axios'dan gelen response içindeki veriyi(data), data isimli bir değişkende sakla.
- axios'un success alma durumunda önce container içindeki yazıyı sil.
- Sonra gelen response'daki veriyi data isimli değişkende sakla.
- image element'i oluştur ve data'daki url'i(konsola bastırarak kontrol edebilirsin) ekle ve container'a bu resmi ekle.
- axios'un hata alması durumunda hata objesini konsola logla.
*/

const container = document.getElementById("dogImage");

document.getElementById("getDogImage").addEventListener("click", () => {
    axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            container.textContent = "";
            const data = response.data;
            const image = data.message;
            const img = document.createElement("img");
            img.src = image;
            container.appendChild(img);
        })
        .catch(error => {
            console.log(error);
        })
});




/*
https://api.chucknorris.io/jokes/random adresine istek atarak bir Chuck Norris şakasını göster.


1- Önce getJoke id'li buton'u button isimli değişkende saklayalım.
2- button 'a event listener ekle. Tıklandığında bir get isteği atsın.
3- axios'dan gelen response içindeki veriyi(data), data isimli bir değişkende sakla.
- axios'un success alma durumunda önce container içindeki yazıyı sil.
- Sonra gelen response'daki veriyi data isimli değişkende sakla.
- joke id'li element'i yakala ve metin olarak bu data'daki şakayı yazdır(data yapısını incelemek için konsola yazdırabilirsin).
- axios'un hata alması durumunda hata objesini konsola logla.
*/


const button = document.getElementById("getJoke");

button.addEventListener("click", () => {
    axios
        .get("https://api.chucknorris.io/jokes/random")
        .then(response => {
            document.getElementById("joke").textContent = "";
            const data = response.data;
            document.getElementById("joke").textContent = data.value;
        })
        .catch(error => {
            console.log(error);
        });
})


/*
Axios kütüphanesi ile https://reqres.in/api/users adresine get isteği at ve sonucunu response isimli bir değişkende sakla.
*/

axios.get("https://reqres.in/api/users")
    .then(response => {
        const response = response.data;
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("işlem tamamlandı.")
    })




/*
Bir gönderi (post) ID'si al ve bu ID'ye ait gönderinin başlığını ve içeriğini ekrana yazdır. Aşağıdaki  component yapısını oluştur.

<div id="postDetails">
   <h2>qui est esse</h2>
   <p>est rerum tempore ...</p>
</div>


1- Önce kullanacağımız element'leri değişlenlerde saklayalım:
- postForm id'li element'i get metodu ile al ve form isimli değişkende sakla.
- postDetails id'li element'i get metodu ile al ve postDetails isimli değişkende sakla.
2- form'a submit event'i ekle.
- Öncelikle sayfanın yenilenmesini engelle.
- postId id'li input element'inin değerini(value) get metodu ile al ve postId isimli değişkende sakla.
- https://jsonplaceholder.typicode.com/posts/{postId} adrese axios ile get isteği at. Adresin id içeren halini backtick ile oluştur.
- axios'un success alma durumunda önce postDetails içindeki yazıyı sil.
- Sonra gelen response'daki veriyi post isimli değişkende sakla.
- h2 ve p element'lerini oluştur ve aynı isimde değişkenlerde sakla içine metinlerini koy ve postDetails'a ekle.
- axios'un hata alması durumunda postDetails içinde  Gönderi bulunamadı veya bir hata oluştu. yazdır ve hata objesini konsola logla.
*/ 


const form = document.getElementById("postForm");
const postDetails = document.getElementById("postDetails");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const postId = document.getElementById("postId").value;

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            postDetails.textContent = "";
            const post = response.data;
            const h2 = document.createElement("h2");
            h2.textContent = post.title;
            const p = document.createElement("p");
            p.textContent = post.body;
            postDetails.appendChild(h2);
            postDetails.appendChild(p);
        })
        .catch((error) => {
            postDetails.textContent = "Gönderi bulunamadı veya bir hata oluştu.";
            console.log(error)
        })
        .finally()
})



/*
/api/login adresine, { username: 'user', password: 'pass' }  verilerini axios ile gönder. 

- Başarılı olma durumunda gelen veriyi(data) konsola yazdır.
- Fail olma durumunda oluşan objeyi konsola yazdır.
*/




/*
https://jsonplaceholder.typicode.com/users API'sinden kullanıcı adlarını ve e-posta adreslerini çek ve bir liste olarak aşağıdaki  component yapısında ekrana yazdır.

<li>
   <span>Leanne Graham</span> - Sincere@april.biz
</li>


1- userList id'li element'i get metodu ile al ve userList isimli bir değişkende sakla.
2- Axios ile https://jsonplaceholder.typicode.com/users adresine get isteği at. Success durumunda;
- İlk olarak userList içindeki "Yükleniyor" mesajını sil.
- response'da gelen veriyi(data) users isimli bir değişkende sakla.
- users'da forEach ile her bir user'ı al.
- li element'ini oluştur ve listItem isimli değişkende sakla.
- span element'ini oluştur ve name isimli değişkende sakla, içine kullanıcının ismini ekle ve kendisini listItem'a ekle.
- textNode oluştur ve içine backtick kullanarak email adresini ekle ve email isimli değişkende sakla (aradaki boşluklara ve - karakterine dikkat). listItem'a ekle.
- userList'e listItem'ı ekle.
3- axios'un bir hata alması durumunda userList'de Bir hata oluştu. Lütfen daha sonra tekrar deneyin. metnini yazdır. 
- Hata objesini konsola yazdır.
*/

const userList = document.getElementById("userList");

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        userList.textContent = "";
        const users = response.data;
        users.forEach(user => {
            const listItem = document.createElement("li");
            const name = document.createElement("span");
            name.textContent = user.name;
            listItem.appendChild(name);
            const email = document.createTextNode(`- ${user.email}`);
            listItem.appendChild(email);
            userList.appendChild(listItem);
        })
    })
    .catch(error => {
        userList.textContent = "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        console.log(error);
    })
    .finally(() => {
        console.log("işlem tamamlandı.")
    })



/*
/api/data adresine Authorization: Bearer token123 başlığını ekleyerek GET isteği yap.

- Başarılı olma durumunda gelen veriyi(data) konsola yazdır.
- Fail olma durumunda oluşan objeyi konsola yazdır.

- İpucu: axios dokümantasyonunda header nasıl kullanılıyor bakabilirsin.
*/

axios.get("/api/data", {
    headers: {
        "Authorization": "Bearer token123"
    }
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("işlem tamamlandı.");
    })
