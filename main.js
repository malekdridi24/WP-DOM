
function showAlert() {
    var myText = "Connection Approved";
    alert (myText);
  }
function showAlert2() {
    var myText = "Thank You For The Inscription";
    alert (myText);
  }
  function showAlert3() {
    var myText = "Itemes Added To Favorites";
    alert (myText);
  }
  function showAlert4() {
    var myText = "Itemes Added To The Basket";
    alert (myText);
  }
var cards = Array.from(document.querySelectorAll(".cart"));
var deleteBnts = Array.from(document.querySelectorAll(".Delete"));
var plusBnts = Array.from(document.querySelectorAll(".plus"));
var minusBnts = Array.from(document.querySelectorAll(".minus"));
// Add Button
for (let i of plusBnts) {
    i.addEventListener("click", function () {
      i.nextElementSibling.innerHTML++;
      Total();
    });
  }

//Minus Button
for (let i of minusBnts) {
    i.addEventListener("click", function () {
      i.previousElementSibling.innerHTML > 0
        ? i.previousElementSibling.innerHTML--
        : null;
      Total();
    });
  }
  //Total price
function Total() {
    let qte = Array.from(document.querySelectorAll(".qute"));
    let price = Array.from(document.querySelectorAll(".unit-price"));
    let s = 0;
    for (i = 0; i < price.length; i++) {
      s = s + price[i].innerHTML * qte[i].innerHTML;
    }
    s=s.toFixed(2)
    document.getElementById("total-price").innerHTML = s;
  }

 // Delete
for (let j in deleteBnts) {
  deleteBnts[j].addEventListener("click", function () {
    cards[j].remove();});
}