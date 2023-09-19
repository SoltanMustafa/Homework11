var yas=prompt("Yaş","Yaşınızı daxil edin");
if (yas>=18){
    document.write("Xoş gəlmişsiniz!")
    document.body.style.color="green";
    document.body.style.fontSize="70px";
    document.body.style.textAlign="center";
}
else{
    document.write("Yaşınız Uyğun deyil!")
    document.body.style.color="red";
    document.body.style.fontSize="70px";
    document.body.style.textAlign="center";
}