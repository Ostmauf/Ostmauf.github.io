let toSummer = document.getElementById("to-summer");
let toBirth = document.getElementById("to-birth");
let toChristmas = document.getElementById("to-christmas")

//Setinterval
setInterval(timeManager, 1000);

//Funktioner
function timeManager() {
    
    todaysDate = new Date()

    //To summer
    let sommerDate = new Date("2021-06-01");

    dateDiffrenceManager(sommerDate, todaysDate)

    //timeConverter = timeConverter.toFixed(0);

    
    /*//To birthday
    let birthDate = new Date("2021-11-04");

    

    timeToBirth = timeToBirth.toFixed(0);

    //To christmas
    let christmasDate = new Date("2021-12-24");
 

    timeToChristmas = timeToChristmas.toFixed(0);
    
    //Text
    toSummer.innerHTML = "Det är " + timeToSummer + " sekunder till sommarlovet!";
    toBirth.innerHTML = "Det är " + timeToBirth + " sekunder till min födelsedag!";
    toChristmas.innerHTML = "Det är " + timeToChristmas + " sekunder till jul!";
*/
} 



function dateDiffrenceManager(startDate, endDate) {

    let timeConverter = (startDate.getTime() - endDate.getTime()) / 1000;
    
    
    
    console.log(timeConverter);

}


