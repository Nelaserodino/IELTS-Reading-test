const user = JSON.parse(localStorage.getItem("students"));
//array con las respuestas correctas
let arrayCorrectAnswersSection2 = ["V", "I", "VIII", "VI", "IV", "III", "NEW EMPLOYEES","NEXT ORIENTATION SESSION", ["THE ORIENTATION", "ATTENDING THE ORIENTATION"] , "PROCEDURES AND POLICIES", "THE EMPLOYEE'S SUPERVISOR", "HUMAN RESOURCES", ["MARCH 15", "MARCH 15TH"]];

let studentAnswers = document.querySelector (".section2");
let arrayAnswersSection2 = [];
let valuesSection2 = studentAnswers.querySelectorAll('select, input');


//capturo los valores de los inputs y los guardo en un array
studentAnswers.addEventListener ("submit", (event) => {
    event.preventDefault ();
    arrayAnswersSection2 = [];
    
    valuesSection2.forEach(element => {
        arrayAnswersSection2.push(element.value.toUpperCase().trim());
    });
    
    localStorage.setItem('answersTest1Section2', JSON.stringify(arrayAnswersSection2));
    console.log(JSON.parse(localStorage.getItem('answersTest1Section2')))

    cleanAnswers(valuesSection2);

    calculatePoints(arrayAnswersSection2, arrayCorrectAnswersSection2,valuesSection2);

    user.scoreTest1[1] = totalPoints;
    localStorage.setItem('totalPointsSection2', totalPoints);
    localStorage.setItem("students", JSON.stringify(user));

    Swal.fire({
        text: 'You have ' + totalPoints + ' correct answers',
      })
      
      document.querySelector('#goSection3').style.display = "flex";

}); 
