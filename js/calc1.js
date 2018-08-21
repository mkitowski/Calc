var licz1;
var licz2;
var liczx;
var dzial;
if (liczx!=""){
    liczx=0
}

function dodaj() {
    licz1=document.getElementById("liczba1").value;
    liczx=Number(liczx)+Number(licz1);
    dzial="1";
    document.getElementById("liczba1").value = liczx;
    document.getElementById("koniec").innerHTML=dzial+" "+liczx+" "+licz1;
}

function odejmij() {
    licz1=document.getElementById("liczba1").value;
    liczx=Number(liczx)-Number(licz1);
    dzial="2";
    document.getElementById("liczba1").value = liczx;
    document.getElementById("koniec").innerHTML=dzial+" "+licz1+liczx;
}

function razy() {
    licz1=document.getElementById("liczba1").value;
    liczx=Number(liczx)*Number(licz1);
    dzial="3";
    document.getElementById("liczba1").value = "";
    document.getElementById("koniec").innerHTML=dzial+" "+licz1+liczx;
}

function dziel() {
    licz1=document.getElementById("liczba1").value;
    liczx=Number(liczx)/Number(licz1)
    dzial="4";
    document.getElementById("liczba1").value = "";
    document.getElementById("koniec").innerHTML=dzial+" "+licz1;
}

function wynik() {
    licz2=document.getElementById("liczba1").value;
    document.getElementById("koniec").innerHTML=dzial+" "+licz1+licz2;
    var a=liczx;
    var b=Number(licz2);
    if (dzial=="1"){
        var wynik=a+b;
        }
    if (dzial=="2"){
        var wynik=a-b;
    }
    if (dzial=="3"){
        var wynik=a*b;
    }
    if (dzial=="4"){
        var wynik=a/b;
    }
    liczx = wynik;
    document.getElementById("liczba1").value = wynik;
}
