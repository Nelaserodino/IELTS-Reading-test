
//funcion para sumar los puntos obtenidos 
let totalPoints = 0;
let flag = false;

function calculatePoints(arrayStudentAnswers, arrayCorrectAnswers, arrayValues){
    totalPoints = 0;
   
   for (let i = 0; i < arrayStudentAnswers.length; i++) {

    flag = false;

    let newElement = document.createElement("p");
    newElement.innerText = "";

        if(Array.isArray(arrayCorrectAnswers[i])){
            
            for (const element of arrayCorrectAnswers[i]) {
                if(arrayStudentAnswers[i] == element){
                    flag = true;
                }
            }

        }else{
            
            if(arrayStudentAnswers[i] == arrayCorrectAnswers[i]){
                flag = true;
            }
        }

        if (flag){
            totalPoints++;  
            arrayValues[i].style.border = "thick solid #02CDD0";
            //creo un elemento nuevo en el dom con un tick
        
            newElement.innerText = "✔";
            newElement.style.color = "#02CDD0";
            newElement.style.fontSize = "20px";
            newElement.style.fontWeight = "bold";
            newElement.style.marginLeft = "10px";
            arrayValues[i].after(newElement);
        

        }else{

            arrayValues[i].style.border = "thick solid red";
            newElement.innerText = "✗";
            newElement.style.color = "red";
            newElement.style.fontSize = "20px";
            newElement.style.fontWeight = "bold";
            newElement.style.marginLeft = "10px";
            arrayValues[i].after(newElement);

        }
        
    }
};


function cleanAnswers(arrayValues){

    arrayValues.forEach(element => {
        if(element.nextElementSibling){
            element.nextElementSibling.remove();
        }
        
    });
}




//DICCIONARIO
let dictionaryContainer = document.querySelector(".dictionary");
let word = document.querySelector("#input-word");
let definitionContainer = document.querySelector(".definition-container");
let dictionaryText = document.querySelector(".dictionary-text");
const dictionaryBtn = document.querySelector(".dictionary-btn");


dictionaryBtn.addEventListener("click", toggleDictionary);



// funcion toggle para el diccionario
function toggleDictionary(){
    const isDictionaryClosed = dictionaryContainer.classList.contains("inactive");
    if (!isDictionaryClosed){
        dictionaryContainer.classList.add("active");
    }
    dictionaryContainer.classList.toggle("inactive");
}


//funcion data
function data (result, word){
    //borro el contenido del div definicion
    definitionContainer.innerHTML = "";
    if (result.title){ //si la palabra no existe en el diccionario
        dictionaryText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please try again.`;
    } else { //si la palabra existe en el diccionario
        let definitions = result [0].meanings [0].definitions[0],
        phonetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        const defitionInfo = `
            <article class="word">
            <p><b>Word: </b>${result[0].word}</p>
            <p>${phonetics}s</p>
            <p><b>Definition: </b>${definitions.definition}</p>
            <p><b>Example: </b>${definitions.example}</p>
            <audio controls>
            <source src="${result[0].phonetics[0].audio}" type="audio/mpeg">
            </audio>
            </article>`
        ;
    definitionContainer.insertAdjacentHTML('beforeend', defitionInfo);
    }
}


//fetch api del diccionario
function fetchApi (word){
    dictionaryText.innerHTML = `Searching for the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    //hago fetch del api y lo que devuelve lo tengo que parsear a json, luego volver a usar el metodo then y llamar a la funcion data, pasando como argumento la respuesta y la palabra buscada.
    fetch(url).then(res => res.json()).then (result => data(result, word));
    
}

word.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.key ==="Enter" &&  word.value){
        fetchApi( word.value); 
    }
} );



//boton de logout
const logoutBtn = document.querySelector("#logOut");

logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    auth.signOut();
    localStorage.clear();
    window.location = "../index.html";
});