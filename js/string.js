let ad = document.querySelector("#name")
let userName = prompt("Kullanıcı adınız")
ad.innerHTML = userName

const CLOCK = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" color="black" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
<path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>`

const DATE = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" color = "black" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`


function time() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let day = new Date().getDay()

    if (day==1) {
        day = "Pazartesi"        
    } else if (day==2) {
        day = "Salı"
    } else if (day==3) {
        day = "Çarşamba"        
    } else if (day==4) {
        day = "Perşembe"        
    } else if (day==5) {
        day = "Cuma"        
    } else if (day==6) {
        day = "Cumartesi"        
    } else if (day==7) {
        day = "Pazar"        
    }

    let infoDOM = document.querySelector("#info")
    infoDOM.innerHTML = `${CLOCK} ${hour} : ${minute} : ${seconds} ${day} ${DATE}`
    setTimeout(time,1000)
}


time()
