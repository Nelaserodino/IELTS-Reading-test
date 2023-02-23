//obtengo los datos que ingresa el alumno para usar la calculadora
let studentReadingPoints = document.getElementById("input-readingPoints");
let studentListeningPoints = document.getElementById("input-listeningPoints");
let readingNeededScore = document.getElementById("input-readingScore");
let listeningNeededScore = document.getElementById("input-listeningScore");


//configuro el CLICK del boton CALCULATE
let btnCalculateScore = document.getElementById("btn-score");
btnCalculateScore.addEventListener("click", handleBtnCalculateScore);

let btnCalculatePoints = document.getElementById("btn-points");
btnCalculatePoints.addEventListener("click", handleBtnCalculatePoints);


//funcion que calcula el Reading score segun puntos ingresados
function getStudentReadingScore (studentReadingPoints){
    studentReadingPoints = (document.getElementById("input-readingPoints").value);
   let readingScore = 0;
   if (studentReadingPoints == 40){
       readingScore = 9;
   } else if (studentReadingPoints ==  39){
        readingScore = 8.5;
   } else if (studentReadingPoints ==  38){
           readingScore = 8;
   } else if ((studentReadingPoints > 34)&&(studentReadingPoints < 38)){
           readingScore = 7.5;
   } else if (studentReadingPoints == 34) {
           readingScore = 7;
   } else if ((studentReadingPoints > 30)&&(studentReadingPoints < 34)){
           readingScore = 6.5;
   } else if (studentReadingPoints == 30) {
           readingScore = 6;
   } else if ((studentReadingPoints > 23)&&(studentReadingPoints < 30)){
           readingScore = 5.5;
   } else if (studentReadingPoints == 23){
           readingScore = 5;
   } else if ((studentReadingPoints > 15)&&(studentReadingPoints < 23)){
           readingScore = 4.5;
   } else if (studentReadingPoints == 15) {
           readingScore = 4;
   } else if ((studentReadingPoints > 11)&&(studentReadingPoints < 15)){
           readingScore = 3.5;
   } else if ((studentReadingPoints > 8)&&(studentReadingPoints <= 11)){
           readingScore = 3;
   } else if ((studentReadingPoints > 5)&&(studentReadingPoints <= 8)){
           readingScore = 2.5;
   } else if ((studentReadingPoints > 6)&&(studentReadingPoints < 4)){
           readingScore = 2;
   } else if (studentReadingPoints <= 4){
            readingScore = 0;
    } else {
        alert ('Please enter a number between 1 - 40');
   }
   return readingScore;
   
   }    

// let resultReadingScore = getStudentReadingScore ();

//funcion que calcula el listening score segun puntos ingresados
function getStudentListeningScore (){
    studentListeningPoints = document.getElementById("input-listeningPoints").value;
    let listeningScore = 0;
    if ((studentListeningPoints == 40)|| (studentListeningPoints == 39)){
        listeningScore = 9;
    } else if ((studentListeningPoints == 38)|| (studentListeningPoints == 37)){
        listeningScore = 8.5;
    }   else if ((studentListeningPoints == 36)|| (studentListeningPoints == 35)){
        listeningScore = 8;
    }   else if ((studentListeningPoints == 34)|| (studentListeningPoints == 33)){
        listeningScore = 7.5;
    }   else if ((studentListeningPoints < 33) && (studentListeningPoints > 29)){
        listeningScore = 7;
    }   else if ((studentListeningPoints < 30) && (studentListeningPoints > 26)){
        listeningScore = 6.5;
    }   else if ((studentListeningPoints < 27) && (studentListeningPoints > 22)){
        listeningScore = 6;
    }   else if ((studentListeningPoints < 23) && (studentListeningPoints > 19)){
        listeningScore = 5.5;
    }   else if ((studentListeningPoints < 18) && (studentListeningPoints > 15)){
        listeningScore = 5;
    }   else if ((studentListeningPoints < 16) && (studentListeningPoints > 12)){
        listeningScore = 4.5;
    }   else if ((studentListeningPoints < 13) && (studentListeningPoints > 7)){    
        listeningScore = 4;
    }   else if (studentListeningPoints == 7){
        listeningScore = 3.5;
    }   else if ((studentListeningPoints < 7) && (studentListeningPoints > 3)){
        listeningScore = 3;
    }   else if ((studentListeningPoints < 4) && (studentListeningPoints > 2)){
        listeningScore = 2.5;
    }   else if (studentListeningPoints == 2){
        listeningScore = 2;
    }   else if (studentListeningPoints == 1){
        listeningScore = 1;
    }   else if (studentListeningPoints == 0){
        listeningScore = 0;
    } else {
        alert ('Please enter a number between 1 - 40');
    }
    return listeningScore;
}

// let resultListeningScore = getStudentListeningScore ();



//funcion que determina los puntos minimos para llegar al score deseado en el reading
function getMinReadingPoints (){
    readingNeededScore = document.getElementById("input-readingScore").value;
    let minReadingPoints = 0;
    if (readingNeededScore == 9){
        minReadingPoints = 40;
    } else if (readingNeededScore == 8.5){
        minReadingPoints = 39;
    } else if (readingNeededScore == 8){
        minReadingPoints = 38;
    } else if (readingNeededScore == 7.5){
        minReadingPoints = 35;
    } else if (readingNeededScore == 7){
        minReadingPoints = 34;
    } else if (readingNeededScore == 6.5){
        minReadingPoints = 31;
    } else if (readingNeededScore == 6){
        minReadingPoints = 30;
    } else if (readingNeededScore == 5.5){
        minReadingPoints = 24;
    } else if (readingNeededScore == 5){
        minReadingPoints = 23;
    } else if (readingNeededScore == 4.5){
        minReadingPoints = 16;
    } else if (readingNeededScore == 4){
        minReadingPoints = 15;
    } else if (readingNeededScore == 3.5){
        minReadingPoints = 12;
    } else if (readingNeededScore == 3){
        minReadingPoints = 9;
    } else if (readingNeededScore == 2.5){
        minReadingPoints = 6;
    } else if (readingNeededScore == 2){
        minReadingPoints = 5;
    } else {
        alert ('Please enter a number between 1 - 9');
    }
    return minReadingPoints;
}

// let resultMinReadingPoints = getMinReadingPoints ();


//funcion que determina los puntos minimos para llegar al score deseado en el listening
function getMinListeningPoints (){
    listeningNeededScore = document.getElementById("input-listeningScore").value;
    let minListeningPoints = 0;
    if (listeningNeededScore == 9){
        minListeningPoints = 39;
    } else if (listeningNeededScore == 8.5){
        minListeningPoints = 37;
    } else if (listeningNeededScore == 8){
        minListeningPoints = 35;
    } else if (listeningNeededScore == 7.5){
        minListeningPoints = 33;
    } else if (listeningNeededScore == 7){
        minListeningPoints = 30;
    } else if (listeningNeededScore == 6.5){
        minListeningPoints = 27;
    } else if (listeningNeededScore == 6){
        minListeningPoints = 23;
    } else if (listeningNeededScore == 5.5){
        minListeningPoints = 20;
    } else if (listeningNeededScore == 5){
        minListeningPoints = 16;
    } else if (listeningNeededScore == 4.5){
        minListeningPoints = 13;
    } else if (listeningNeededScore == 4){
        minListeningPoints = 8;
    } else if (listeningNeededScore == 3.5){
        minListeningPoints = 7;
    } else if (listeningNeededScore == 3){
        minListeningPoints = 4;
    } else if (listeningNeededScore == 2.5){
        minListeningPoints = 3;
    } else if (listeningNeededScore == 2){
        minListeningPoints = 2;
    } else if (listeningNeededScore == 1){
        minListeningPoints = 1;
    } else {
        alert ('Please enter a number between 1 - 9');
    }
    return minListeningPoints;
}

// let resultMinListeningPoints = getMinListeningPoints ();



// //funcion que controla el click del boton CALCULATE para dar el score 
function handleBtnCalculateScore (){
    let containerReading = document.querySelector(".scores");
    let containerListening = document.querySelector(".scores");
    let resultReading = document.createElement ("h3");
    let resultListening = document.createElement ("h3");
    containerReading.innerText = "";
        
    if  (studentReadingPoints.value != ""){
        resultReading.innerText = `Your Reading score is ${getStudentReadingScore ()}`;
        containerReading.append(resultReading);
} 
        if (studentListeningPoints.value != ""){
        resultListening.innerText = `Your Listening score is ${getStudentListeningScore ()}`;
        containerListening.appendChild(resultListening);
}

}


// //funcion que controla el click del boton CALCULATE para dar los puntos minimos
function handleBtnCalculatePoints (){
    let containerReading = document.querySelector(".points");
    let containerListening = document.querySelector(".points");
    let resultReading = document.createElement ("h3");
    let resultListening = document.createElement ("h3");
    containerReading.innerText = "";
    if  (readingNeededScore.value != ""){
        resultReading.innerText =  `You need at least ${getMinReadingPoints ()} points in the Reading test.`;
        containerReading.append(resultReading);
} 
        if (listeningNeededScore.value != ""){
        resultListening.innerText = `You need at least ${getMinListeningPoints ()} points in the Listening test.`;
        containerListening.appendChild(resultListening);
}
}



