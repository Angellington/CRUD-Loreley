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


    const msg = 'My name is Annabel'

    validationmsg(msg, true)

    // Reset Form
    form.reset();
    // Close Modal in another script
    // modal.close();
})



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

    validationmsg.classList.add('validate')
    validationmsg.innerHTML = ''
    validationmsg.appendChild(p)

    
}





