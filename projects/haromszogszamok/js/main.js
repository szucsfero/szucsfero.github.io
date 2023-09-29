"use strict";

function szamolas() {
  var inputNumber = document.getElementById("haromSzogSzam").value;
  if (inputNumber === "" || isNaN(inputNumber) || (inputNumber < 0 || inputNumber > 99)) {
    alert("Hiba! Nem megfelelő szám (1-99) vagy üres a mező.");
  } else {
    var haromSzogSzam = Number(inputNumber);
    var eredmeny = (haromSzogSzam * (haromSzogSzam + 1)) / 2;
    alert(`Az eredmény: ${eredmeny}`);
  }
}
