const user = JSON.parse(localStorage.getItem("students"));
//array con las respuestas correctas
let arrayCorrectAnswersSection3 = ["C", "B", "A", "B", "A", "C", "A","PARALLEL FLOATS", "A PLATFORM", "HUGE EXPANSES", "MANY FIGHTERS", ["RECREATIONAL","MODERN RECREATIONAL"],"BIRCH-BARK"];

let studentAnswers = document.querySelector(".section3");
let arrayAnswersSection3 = [];
let valuesSection3 = studentAnswers.querySelectorAll('select, input');

//capturo los valores de los inputs y los guardo en un array
studentAnswers.addEventListener ("submit", (event) => {
    event.preventDefault ();
    arrayAnswersSection3 = [];

    valuesSection3.forEach(element => {
        arrayAnswersSection3.push(element.value.toUpperCase().trim());
    });

    
    localStorage.setItem('answersTest1Section3', JSON.stringify(arrayAnswersSection3));
    console.log(JSON.parse(localStorage.getItem('answersTest1Section3')))

    cleanAnswers(valuesSection3);

    calculatePoints(arrayAnswersSection3, arrayCorrectAnswersSection3, valuesSection3);

    
    user.scoreTest1[2] = totalPoints;
    localStorage.setItem('totalPointsSection3', totalPoints);
    localStorage.setItem("students", JSON.stringify(user));

    Swal.fire({
        text: 'You have ' + totalPoints + ' correct answers',
      })
}); 


//add event listener for button check score
let buttonCheckScore = document.getElementById("btn-check-score");
buttonCheckScore.addEventListener("click", () => {
    let totalPointsSection1 = localStorage.getItem('totalPointsSection1');
    let totalPointsSection2 = localStorage.getItem('totalPointsSection2');
    let totalPointsSection3 = localStorage.getItem('totalPointsSection3');
    let totalPoints = parseInt(totalPointsSection1) + parseInt(totalPointsSection2) + parseInt(totalPointsSection3);
    localStorage.setItem('totalPoints', totalPoints);
    Swal.fire({
        text: 'You have ' + totalPoints + ' points in total',

      })
});

