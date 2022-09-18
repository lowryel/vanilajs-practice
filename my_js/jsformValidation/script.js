const form = document.getElementById('form')
let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let confirm = document.getElementById('confirmPass')


// Show Input Error Messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Check email is valid
function checkEmail(input) { 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(email, 'Email is not valid');
    }
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get fieldname
function getFieldName(input) { 
    return input.id[0].toUpperCase() + input.id.slice(1);
}

function checkPassword(password, confirmPass) {
    if (password.value, confirmPass.value === '') { showError(password, 'Password is required');}
    else if (password.value !== confirmPass.value) {
        showError(confirmPass, 'Password do not match');
    }else if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
    }else {
        showSuccess(password);
    }
}

function usernameLength(username) {
    if (username.value === '') { showError(username, 'Username is required'); }
    else if (username.value.length < 3) { showError(username, 'Username must be at least 3 characters'); }
    else {
        showSuccess(username);
    }
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmPass]);
    checkPassword(password, confirm);
    usernameLength(username);
    checkEmail(email);
})



