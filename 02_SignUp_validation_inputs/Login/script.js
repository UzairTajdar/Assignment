let submit = document.getElementById('form')

submit.addEventListener('submit',()=>{
    validationForm()
})

function validationForm() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    let userError = document.getElementById('userError')
    let passError = document.getElementById('passError')
    var specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let error = false

    if (username.trim()==='') {
        userError.textContent = "Username can't be empty";
        error = true;
    }else if (/\s/.test(username)) {
        userError.textContent = "Username can't contain space";
        error = true;
    }else if (/\d/.test(username) || /[^\w\s]/.test(username)) {
        userError.textContent = "Username can't contain number and special characters";
        error = true;
    }else{
        userError.textContent ='';
    }
    if (password.length < 6) {
        passError.textContent = 'Password must be at least six characters long'
        error = true
    }else if (!/[A-Z]/.test(password)) {
        passError.textContent = 'Password must contain at least one uppercase letter'
        error = true
    }else if (!/[^\w\s]/.test(password)) {
        passError.textContent = 'Password must contain at least one special character'
        error = true
    }else{
        passError.textContent = '';
    }
    return !error
}
