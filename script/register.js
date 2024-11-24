var emailError = document.getElementById('email1-error');
var passError = document.getElementById('pass1-error');
var registerError = document.getElementById('register-error');
var nameError = document.getElementById('name-error');
var conPassError = document.getElementById('con-pass-error');

function validateName(){
    var name = document.getElementById('name').value;
    var nameField = document.getElementById('name');

    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        nameField.style = 'border: 1px solid var(--red-color)'
        return false;
    }

    if(!name.match(/^([A-Z]{1}[a-z]+ ?)*$/)){
        nameError.innerHTML = 'enter a valid email';
        nameField.style = 'border: 1px solid var(--red-color)'
        return false;
    }
    nameError.innerHTML = '<i class="bx bxs-check-circle" style="color: green; font-size: 20px"></i>';
    nameField.style = 'border:none'
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    var emailField = document.getElementById('email');

    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        emailField.style = 'border: 1px solid var(--red-color)'
        return false;
    }

    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML = 'enter a valid email';
        emailField.style = 'border: 1px solid var(--red-color)'
        return false;
    }
    emailError.innerHTML = '<i class="bx bxs-check-circle" style="color: green; font-size: 20px"></i>';
    emailField.style = 'border:none'
    return true;
}

function validatePass() {
    var pass = document.getElementById('pass').value;
    var passField = document.getElementById('pass');

    if(pass.length == 0){
        passError.innerHTML = 'password is required';
        passField.style = 'border: 1px solid var(--red-color)'
        return false;
    }

    if(!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
        passError.innerHTML = 'enter a valid password';
        passField.style = 'border: 1px solid var(--red-color)'
        return false;
    }
    passError.innerHTML = '<i class="bx bxs-check-circle" style="color: green; font-size: 20px"></i>';
    passField.style = 'border:none'
    return true;
}

function validateConPass() {
    var pass = document.getElementById('pass').value;
    var conPass = document.getElementById('con-pass').value;
    var passField = document.getElementById('con-pass');

    if(!(pass === conPass)){
        conPassError.innerHTML = 'password did not match';
        passField.style = 'border: 1px solid var(--red-color)'
        return false;
    }
    conPassError.innerHTML = '<i class="bx bxs-check-circle" style="color: green; font-size: 20px"></i>';
    passField.style = 'border:none'
    return true;
}

function validateForm(){
    if(!validateEmail() || !validatePass() || !validateName() || !validateConPass()){
        registerError.style.display = 'block';
        registerError.innerHTML = 'Registration failed';
        setTimeout(()=>{registerError.style.display = 'none';},4000);
        return false;
    }else{
        return true;
    }
}