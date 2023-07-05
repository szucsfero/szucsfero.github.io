'use strict';

function eredmeny() {
    if (document.getElementById('55').checked == true) {
        document.getElementById('eredmeny').innerText = "Helyes válasz!";
    } else if (document.getElementById('35').checked == true || document.getElementById('45').checked == true || document.getElementById('65').checked == true) {
        document.getElementById('eredmeny').innerText = "Rossz válasz!";
    } else {
        document.getElementById('eredmeny').innerText = "Hiányos válasz!";
    }

    document.getElementById('35').checked = false;
    document.getElementById('45').checked = false;
    document.getElementById('55').checked = false;
    document.getElementById('65').checked = false;
}