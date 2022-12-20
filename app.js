  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzgzAz6MShgS61oSNFrDoK0Qhcdw-4LgU",
    authDomain: "authentication-608f6.firebaseapp.com",
    databaseURL: "https://authentication-608f6-default-rtdb.firebaseio.com",
    projectId: "authentication-608f6",
    storageBucket: "authentication-608f6.appspot.com",
    messagingSenderId: "418795567171",
    appId: "1:418795567171:web:2531c2e1b02ac1d3c3fcf6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var products = []
  var cartItems = []
  var cart_n = document.getElementById("cart_n")
  var computerDiv = document.getElementById("computerDiv")
  var smartphoneDiv = document.getElementById("smartphoneDiv")
  var watchDiv = document.getElementById("watchDiv")


  var COMPUTER = [{
    name:"Lenovo IdeaPad",
    price:4295
  },{
    name:"Lenovo IdeaPad 3",
    price:6995
  },{
    name:"Acer Aspire",
    price:7995
  },{
    name:"Samsung Galaxy Book 2 Pro",
    price:18490
  },{
    name:"Lenovo Yoga Slim 9i",
    price: 22995
  },{
    name:"HP ZBook Fury",
    price:68990
  }
]  

var SMARTPHONE = [{
  name:"iPhone SE Gen. 3",
  price: 6590
},{
  name:"iPhone 14 Pro Max",
  price:22190
},{
  name:"iPhone 13 mini",
  price:8790 
},{
  name:"iPhone 13",
  price:10490
},{
  name:"iPhone 13 Pro",
  price:11790
},{
  name:"iPhone 14 Pro",
  price:13990
}]

var WHATCHES = [{
  name:"MTG-B2000BD-1A4ER",
  price:14498 
},{
  name:"MTG-B2000D-1AER",
  price:13998
},{
  name:"MTG-B3000B-1AER",
  price: 13498
},{
  name:"MTG-B3000BD-1A2ER",
  price:14498
},{
  name:"MTG-B3000BD-1AER",
  price:14498
},{
  name:"MTG-B2000B-1A2ER",
  price:13498
}]

function HTMLcomputerProduct(con){
  let URL = `img/computers/computer${con}.jpeg`
  let btn = `btncomputer${con}`
}  

function HTMLsmartphoneProduct(con){
  let URL = `img/smartphones/smartphone${con}.jpeg`
  let btn = `btnsmartphone${con}`
}

function HTMLwatchProduct(con){
  let URL = `img/watches/watch${con}.jpeg`
  let btn = `btnwatch${con}`
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}