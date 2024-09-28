// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');
// const subject = document.getElementById('subject');
// const form = document.getElementById('form');

// form.addEventListener('submit' ,e =>{
//   e.preventDefault();
//   validateInputs();

// });


// const setError = (element , message) =>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }
// const isValidEmail = email =>{
//  const re   = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  return re.test(string(email).toLowerCase());
// }

// const setSuccess = element =>{
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.remove('success');
//     inputControl.classList.remove('error');
// }

// const validateInputs = () => {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
// const messageValue = message.value.trim();
// const subjectValue = subject.value.trim();

// if(usernameValue === ''){
//     setError(username, 'username is required');
// }else{
//    setSuccess(username);
// }


// if(emailValue === ''){
//     setError(email, 'email is required');
// }else if(!isValidEmail(emailValue)){
//    setError(email, 'Provide a valid email adress');
// }else{
//     setSuccess(email);
// }

// if(messageValue === ''){
//     setError(message,'message is required');
// }else{
//     setSuccess(message);
// }

// if(subjectValue === ''){
//     setError(subject,'subject is required')

// }else{
//     setSuccess(subject);
// }

// };


function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Initialize valid flag
    var valid = true;

    // Name validation
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        valid = false;
    } else if (name.trim().length < 2) {
        document.getElementById("nameError").innerText = "Name cannot be just spaces.";
        valid = false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    }

    // Subject validation
    if (subject.trim() === "") {
        document.getElementById("subjectError").innerText = "Please enter a subject.";
        valid = false;
    }

    // Message validation
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Please enter a message.";
        valid = false;
    }

    // Return the valid status
    return valid;
}




