'use strict';

function tomegSzazalekSzamitas() {
    var inputSalt = document.getElementById("salt").value;
    var inputWater = document.getElementById("water").value;

    if (inputSalt === "" || inputWater === "" || isNaN(inputSalt) || isNaN(inputWater) || (inputSalt < 0 || inputWater < 0)) {
        alert("Hiba! A megadott érték nem lehet kisebb, mint 0 VAGY nem adott meg értéket.");
    } else {        
        var eredmeny = (Number(inputSalt)/(Number(inputWater)+Number(inputSalt)))*100;
        document.getElementById('megoldas').innerText = eredmeny;
    }
}