var licz1=0;
var licz2=0;
var opr;
var pierwsza = true;
var nastepny = false;
var id;
var press = document.getElementById(id);



function cyfra(cyf) {
    if (pierwsza || document.getElementById("liczba1").value=="0") {
        document.getElementById("liczba1").value = cyf;
        pierwsza = false;
    } else {
        document.getElementById("liczba1").value += cyf;
    }
}

function li() {
    var spr=document.getElementById("liczba1").value;
    var przec=",";
    
    if (spr.search(",")== -1){
        document.getElementById("liczba1").value+=",";
        document.getElementById("koniec").innerHTML="jest przecinek";
    }
    else {
        document.getElementById("koniec").innerHTML="nie ma przecineka";
    }
}
function czysc() {
    document.getElementById("liczba1").value = "0";
    licz1=0;
    licz2=0;
    pierwsza = true;
    nastepny = false;
   
}

function operator(znak) {
   if (nastepny) {
    if (znak == "/") {
       licz1 = licz1 / Number(document.getElementById("liczba1").value);    
   } else if (znak == "*") {
       licz1 = licz1 * Number(document.getElementById("liczba1").value);
   } else if (znak == "-") {
       licz1 = licz1 - Number(document.getElementById("liczba1").value);
   } else if (znak == "+") {
       licz1 = licz1 + Number(document.getElementById("liczba1").value);
   }
   } else {
       licz1 = document.getElementById("liczba1").value;
       nastepny = true;
   }
    document.getElementById("liczba1").value = licz1;
    licz1 = Number(licz1);
    pierwsza = true;
    opr = znak;
    //document.getElementById("koniec").innerHTML = znak +" "+ nastepny;
} 

function wynik() {
    var wyn;
    licz2 = Number(document.getElementById("liczba1").value);
    if (opr == "/") {
       wyn = licz1 / licz2;
    } else if (opr == "*") {
       wyn = licz1 * licz2;
   } else if (opr == "-") {
       wyn = licz1 - licz2;
   } else if (opr == "+") {
       wyn = licz1 + licz2;
   }
    document.getElementById("liczba1").value = wyn;
    //licz1 = wyn;
    pierwsza = true;
    
}
