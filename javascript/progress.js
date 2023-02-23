const user = JSON.parse(localStorage.getItem("students"));

let studentName = document.getElementById("student-name");
studentName.innerText = `${user.name}`


const totalPointsSection1 = JSON.parse(localStorage.getItem("totalPointsSection1"));
const totalPointsSection2 = JSON.parse(localStorage.getItem("totalPointsSection2"));
const totalPointsSection3 = JSON.parse(localStorage.getItem("totalPointsSection3"));
const totalPoints = parseInt(totalPointsSection1) + parseInt(totalPointsSection2) +  parseInt(totalPointsSection3);


function renderPoints (){
        let pointsSection1 = document.getElementById("points-section1");
        pointsSection1.innerText = `${totalPointsSection1}`
        let pointsSection2 = document.getElementById("points-section2");
        pointsSection2.innerText = `${totalPointsSection2}`
        let pointsSection3 = document.getElementById("points-section3");
        pointsSection3.innerText = `${totalPointsSection3}`
        let finalScore = document.getElementById("score"); 
        const scoreFinal = getStudentReadingScore(totalPoints);
        finalScore.innerText = scoreFinal;

        if ((totalPointsSection1 == null)||(totalPointsSection2 == null)||(totalPointsSection3 == null)){
                pointsSection1.innerText = "0";
                pointsSection2.innerText = "0";
                pointsSection3.innerText = "0";
}
}

renderPoints();

//funcion que calcula el Reading score segun puntos ingresados
function getStudentReadingScore (studentReadingPoints){

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
       
   }
   return readingScore;
   
   }   

 



