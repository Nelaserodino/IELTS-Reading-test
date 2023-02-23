//Mensaje de Bienvenida
const user = JSON.parse(localStorage.getItem("students"));

let welcomeUser = document.getElementById("welcomeUser");
welcomeUser.innerText = `Welcome ${user.name}!`;



//array con las respuestas correctas
let arrayCorrectAnswersSection1 = ["D", "C", "B", "A", "C", "B", "A","FALSE", "FALSE", "TRUE", "NOT-GIVEN", "TRUE", "NOT-GIVEN", "TRUE"];

//boton check para sumar los puntos
let studentAnswers = document.querySelector (".section1");
let arrayAnswersSection1 = [];
let selectSection1 = studentAnswers.querySelectorAll('select');

//capturo los valores de los inputs y los guardo en un array
studentAnswers.addEventListener ("submit", (event) => {
   event.preventDefault ();
    arrayAnswersSection1 = [];
    selectSection1.forEach(element => {
        arrayAnswersSection1.push(element.value)
    });
    localStorage.setItem('answersTest1Section1', JSON.stringify(arrayAnswersSection1));
    

    cleanAnswers(selectSection1);

    calculatePoints(arrayAnswersSection1, arrayCorrectAnswersSection1,selectSection1);
    user.scoreTest1[0] = totalPoints;
    localStorage.setItem('totalPointsSection1', totalPoints);
    localStorage.setItem("students", JSON.stringify(user));

    Swal.fire({
        text: 'You have ' + totalPoints + ' correct answers',
      })
      
    document.querySelector("#goSection2").style.display = "flex";

}); 
