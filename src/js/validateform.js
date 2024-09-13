// Prevent default event in submit form
const form = document.getElementsByName('form')[0]

form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    
    // Select Form Elements
    const inputName = document.getElementById('name');
    const inputLastName = document.getElementById('last-name');
    const inputBirthday = document.getElementById('nasc')
    const inputEmail = document.getElementById('email')

    // Take values
    const name = inputName.value;
    const last_name = inputLastName.value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || ' ';
    const birthday = inputBirthday.value;
    const email = inputEmail.value;

    // Create segments variables
    const {msg, isValid} = validForm(name, last_name, gender, birthday, email)

    validationmsg(msg, isValid)

    if(isValid) {
        form.reset();
        modal.close();
        removeValidationMsg();

    } else {
        return {msg: 'Insert Data', isValid: false}
    }

})

function validForm(name, last_name, gender, birthday, email){
    if(name.trim() === ''){
        return{msg: 'Please, set your Name!', isValid: false}
    }; 
    if(last_name.trim() === ''){
        return{msg: 'Please, set your Last Name', isValid: false}
    };
    if(gender.trim() === ''){
        return{msg: 'Please, set your Gender', isValid: false}
    };

    if(birthday.trim() === ''){
        return{msg: 'Please, set your Birthday', isValid: false}
    };
    const birthdayValidation = validateBirthday(birthday);
    if(!birthdayValidation.isValid){
        return birthdayValidation;
    }

    if(email.trim() === ''){
        return{msg: 'Plese, insert your Email', isValid: false}
    }

    const emailValidation = validateEmail(email);
    if(!emailValidation.isValid){
        return emailValidation;
    }
    else {
        return{msg: 'Valid Form', isValid: true}
    }
}


// Validate Birthday Function
function validateBirthday(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Take the age by Year and Month Difference
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    // Verify if has more than 12 years old
    if (age < 12) {
        return {msg: 'Do you have enought the necessary age!', isValid: false}
    } else {
        return {msg: 'You can access!', isValid: true}
    }
}

// Validate Email
function validateEmail(email) {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail corresponde ao padrão
    if (emailRegex.test(email)) {
        return { msg: 'Email válido', isValid: true };
    } else {
        return { msg: 'Email inválido', isValid: false };
    }
}

// Make a Paragraph
function CreateP(){
    const p = document.createElement('p')
    return p
}

// Validation Message
function validationmsg(msg, isValid){
    const validationmsg = document.getElementById('validate');
    const p = CreateP();
    p.innerHTML = msg;

    // Will add class step this condition
    if(isValid == true){
        validationmsg.classList.add('validate')
        validationmsg.classList.remove('bad')
    } else {
        validationmsg.classList.add('bad')
        validationmsg.classList.add('validate')
    }

    validationmsg.innerHTML = ''
    validationmsg.appendChild(p)
}

// Remove Info on Validaton Message
function removeValidationMsg() {
    const validationmsg = document.getElementById('validate');
    if (validationmsg) {
        validationmsg.innerHTML = ''; // Clear the content
        validationmsg.classList.remove('validate', 'bad'); // Remove any classes
    }
}