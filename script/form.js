var emailError = document.getElementById('email-error');
var passError = document.getElementById('pass-error');
var loginError = document.getElementById('login-error');

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

function validatePass(){
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

function validateForm(){
    if(!validateEmail() || !validatePass()){
        loginError.style.display = 'block';
        loginError.innerHTML = 'Login failed';
        setTimeout(()=>{loginError.style.display = 'none';},4000);
        return false
    }

    return true;
}