'use strict';

function menetido() {
    if (document.getElementById('indulo').value == document.getElementById('erkezo').value) {
        alert('Hiba: Azonos megállókat választott ki!');
    }
    else {
        var menetido = Math.abs(document.getElementById('indulo').value - document.getElementById('erkezo').value);
        var result = `A menetidő: ${menetido} perc!`;
        alert(result);
    }
}