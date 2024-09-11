// Selectors
const add = document.getElementsByClassName('add')[0]
const float_add = document.getElementsByClassName('floating-button')[0]

// Select (X)
const close = document.getElementById('closeIcon')



// Abrir Modal Automatico
add.addEventListener('click', function(){
    // Select Dialog
    const modal = document.getElementById('modal')
    modal.showModal();
})

// Floating BTN - Show Modal
float_add.onclick = function() {
    showM();
}

close.onclick = function(){
    closeM();
}

// Show Modal 
function showM(){
    modal.showModal();
}
// Fechar Modal
function closeM(){
    modal.close();
}
