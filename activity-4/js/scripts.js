
var user = "friend";
var salutation = "Hello";
var greeting = salutation + ", " + user + "!";

var el = document.getElementById("greeting");
el.textContent = greeting;

var price = 30;
var studentDiscount = .20;
var studentPrice = price - (price * studentDiscount);

var el1 = document.getElementById("price");
el1.textContent = "$" + price;

var el2 = document.getElementById("student-price");
el2.textContent = "$" + studentPrice;
