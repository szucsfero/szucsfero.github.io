'use strict';

function hozzavalok() {
    var szemelyek = document.getElementById('persons').value;
    document.getElementById('tej').innerText = (szemelyek*0.2).toFixed(2);
    document.getElementById('tojas').innerText = szemelyek*2;
    document.getElementById('cukor').innerText = szemelyek;
}