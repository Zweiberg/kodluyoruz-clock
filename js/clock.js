function tarih (){
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date
}
setInterval(tarih, 1000)


let fullName = prompt("Lütfen adınızı girin")
let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${fullName}`