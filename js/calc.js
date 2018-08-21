
    

function dodaj() {
    var dod1=document.getElementById("liczba1").value;
    var dod2=document.getElementById("liczba2").value;
    var dodaj=Number(dod1)+Number(dod2);
    document.getElementById("wynik").innerHTML="Wynik: "+dodaj
}

function odejmij() {
    var od1=document.getElementById("liczba1").value;
    var od2=document.getElementById("liczba2").value;
    var odejmij=Number(od1)-Number(od2);
    document.getElementById("wynik").innerHTML="Wynik: "+odejmij
}

function razy() {
    var ra1=document.getElementById("liczba1").value;
    var ra2=document.getElementById("liczba2").value;
    var razy=Number(ra1)*Number(ra2);
    document.getElementById("wynik").innerHTML="Wynik: "+razy
}

function dziel() {
    var dz1=document.getElementById("liczba1").value;
    var dz2=document.getElementById("liczba2").value;
    var dziel=Number(dz1)/Number(dz2);
    if (dz1==0)
        {document.getElementById("liczba1").value="0 - przesze zmien to...";
        document.getElementById("wynik").innerHTML="Każdy wie że niedzieli się przez 0!!";}
    else {
         var dziel=Number(dz1)/Number(dz2);
        document.getElementById("wynik").innerHTML="Wynik: "+dziel; }
}