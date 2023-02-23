// //creo un objeto con los datos del alumno que quiero guardar y linkeo el boton de submit
class Student {
    constructor(name,email) {
        this.name = name;
        this.email = email;
        this.scoreTest1 = [];
        this.scoreTest2 = [];//para cuando agregue un segundo y tercer test
    }
}


//formulario Create account
const createAccountForm = document.querySelector("#createAccount");

createAccountForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let studentName = document.querySelector(".form__input--name");
    let createAccountEmail = document.querySelector(".form__input--email");
    let createAccountPassword = document.querySelector(".form__input--password");

    const objStudent = new Student(studentName.value, createAccountEmail.value);
    localStorage.setItem("students", JSON.stringify(objStudent));


    auth.
        createUserWithEmailAndPassword(createAccountEmail.value, createAccountPassword.value)
        .then(userCredential => {
        
            //limpio el formulario
            createAccountForm.reset();

            //redirecciono a la pagina de tests
            window.location = "./html/tests.html";
        
        })
        .catch(error => {
            //alert the user if the email is already in use
            if (error.code === "auth/email-already-in-use") {
                Swal.fire({
                    title: 'Error',
                    text: 'The email already exists. Please Log in.',
            })
            }
            if (createAccountPassword.value.length < 6) {
                Swal.fire({
                    title: 'Error',
                    text: 'The password must be at least 6 characters long.',
            })
            }
            if (studentName.value === "") {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter your name.',
            })
            }
            if (createAccountEmail.value === "") {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter your email.',
            })
            }
            if (createAccountPassword.value === "") {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter your password.',
            })
            }
         
        });
}
);


// //formulario Login
const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let studentName = document.querySelector("#login-name");
    let email = document.querySelector("#login-email");
    let password = document.querySelector("#login-password");

    const objStudent = new Student(studentName.value, email.value);
    
    
    auth.signInWithEmailAndPassword(email.value, password.value)
        .then(userCredential => {
            //limpio el formulario
            loginForm.reset();
            //guardo la info en el local
            localStorage.setItem("students", JSON.stringify(objStudent));
            //voy a la pagina de tests
            window.location = "./html/tests.html";
        })  
        .catch(error => {
        if (studentName.value === ""){
            addErrorMessage("login-name", "Please enter your name");
            }
        if (email.value === ""){
            addErrorMessage("login-email", "Please enter your email");
            }
        if (password.value === ""){
            addErrorMessage("login-password", "Please enter your password");
            }
        if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
            addErrorMessage("login-email", "The email doesn't exist. Please create an account.");
            }
        if (error.message === "The password is invalid or the user does not have a password."){
            addErrorMessage("login-password", "The password is incorrect. Please try again.");
            }
        }
    );
}
);



//ir de sign in a create account y viceversa
const linkToLoginForm = document.querySelector("#linkLogin");
linkToLoginForm.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("inactive");
    createAccountForm.classList.add("inactive");
} );

const linkToCreateAccountForm = document.querySelector("#linkCreateAccount");
linkToCreateAccountForm.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.add("inactive");
    createAccountForm.classList.remove("inactive");
} );


function addErrorMessage(field, message){
    const small = loginForm[field].parentElement.querySelector("small");
    small.innerText = message;
    small.style.opacity = '1';
}
