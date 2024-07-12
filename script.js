let data = [
    {
        id: 1,
        image: "./images/moy.jpg",
        name: "Kungaboqar yog'i Oila tanlovi, tozalangan va xidsizlantirilgan...",
        price: "9000 so'm"
    },
    {
        id: 2,
        image: "./images/tel.jpg",
        name: "Smartfon Xiaomi Redmi 13C 4GB+128GB, 8GB+256GB, 6.74...",
        price: "1 869 000 so'm"
    },
    {
        id: 3,
        image: "./images/televizor.jpg",
        name: "Televizor QLT SmartTV 32, 43, 55 HD/Full HD/4K UHD",
        price: "1 499 000 so'm"
    },
    {
        id: 4,
        image: "./images/noutbuk.jpg",
        name: "Ноутбук Lenovo Legion 5/Core i7-12700H/DDR5 16GB/SSD...",
        price: "23 200 000 so'm"
    },
    {
        id: 5,
        image: "./images/s24ultra.jpg",
        name: "Smartfon Samsung Galaxy S24 Ultra",
        price: "14 966 000 so'm"
    },
    {
        id: 6,
        image: "./images/krasofka.jpg",
        name: "Erkaklar krossovkalari Skechers GOWALK Flex 216481",
        price: "762 000 so'm"
    },
    {
        id: 7,
        image: "./images/jacobs.jpg",
        name: "Qahva Jacobs Velvet, tabiiy, eruvchan, kukunli, 95 g",
        price: "28 000 so'm"
    },
    {
        id: 8,
        image: "./images/suvinner.jpg",
        name: "Havo xushbo'ylantirgich avtomobil uchun",
        price: "75 000 so'm"
    },
    {
        id: 9,
        image: "./images/soat.png",
        name: "Smart soat",
        price: "100 000 so'm"
    }
];





let list = document.getElementById('list');


for (let i = 0; i < data.length; i++) {
    list.innerHTML += `
    <div class="card m-3 p-3" style="width: 18rem;">
    <i class='bx bx-heart' style='color:#ff0000' id="heart"></i>
    <img src="${data[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="card-text"> ${data[i].price}</p>
    <a href="#" class="btn btn-primary" style="background-color: rgb(170, 0, 0);">Savatga</a>
    </div>
    </div>
    `
};




const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Kun mavzusi";
}else{
  modeText.innerText = "Tun mavzusi";
}
});




const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});