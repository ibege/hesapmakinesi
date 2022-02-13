const buton = document.getElementsByTagName("button");
// console.log(buton);
const ekran = document.getElementsByClassName("ekran1")[0];
const sonuc = document.getElementById("hesapla");
const temizle = document.getElementById("temizle");


for(var i = 0 ; i < 16; i++) {   
    if(i != 12 && i != 14) {
    buton[i].addEventListener("click",yaz);
 }
}

function yaz() {
    ekran.value = ekran.value + this.value;
}

sonuc.addEventListener("click",hesap);

function hesap() {
    ekran.value = eval(ekran.value);
}

temizle.addEventListener("click",sil);

function sil(){
    ekran.value = "";
}