const person={
    ad:"Soltan",
    soyad:"Mustafali",
    pasword:"123456abc",
    fullName: function() {
        return this.ad+" "+this.soyad;
    }
}
document.write(person.fullName().toUpperCase());

// const person = {
//     ad: "Soltan",
//     soyad: "Mustafali",
//     pasword: "123456abc",
//     fullName: function() {
//         return this.ad + " " + this.soyad;
//     }
// }

// var fullNameUpperCase = person.fullName().toUpperCase();
// document.write("<br><br>",fullNameUpperCase);
// document.body.style.backgroundColor="yellow";

// const person={
//     ad:prompt("Ad","Adınızı daxil edin"),
//     soyad:prompt("Soyad","Soyadınızı daxil edin"),
//     pasword:"123456abc",
//     fullName: function() {
//         return this.ad+" "+this.soyad;
//     }
// }
// document.write("<span style='color:blue; font-size:40px; font-family:tahoma;'>Xoş gəldin</span>"," ","<span style='color:red; font-size: 40px; font-family:tahoma; font-style:italic;'>",person.fullName().toUpperCase(),"</span>","<span style='color:blue; font-size:40px; font-family:tahoma;'>!</span>");
