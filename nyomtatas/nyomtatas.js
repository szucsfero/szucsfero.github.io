function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.getElementById('szelesseg').value;
    const magassag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    //Megjelenítés
    document.getElementById('terulet').textContent = terulet;
    document.getElementById('papir').textContent = Math.round(koltseg/terulet);
    document.getElementById('koltseg').textContent = koltseg;
    document.getElementById('valasz').style.visibility = "visible";
}

