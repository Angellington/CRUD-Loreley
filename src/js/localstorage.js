window.onload = function(){
    readAll()
}

// Make data
let data = [
    {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-06-2005', email: 'superetro85@gmail.com'}
]

// localStorage.setItem('people', JSON.stringify(data))
// conseguir os dados 
// let getData = localStorage.getItem('people') ? JSON.parse(localStorage.getItem('people')) : [];

if (!localStorage.getItem('people')){
    localStorage.setItem('people', JSON.stringify(data));
}



// Transform


function readAll(){

    // Pega os dados
    const data = JSON.parse(localStorage.getItem('people')) || [];

    // Selecionar o corpo da tablea
    const tbody = document.querySelector('table tbody');

    // Limpar tabela existente
    tbody.innerHTML = '';


    // Adicionar cada item como uma nova linha na tabela
    data.forEach(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td data-title="id" class="id">${item.id}</td>
            <td data-title="name" class="name">${item.name}</td>
            <td data-title="last-name" class="last-name">${item.last_name}</td>
            <td data-title="gender" class="gender">${item.gender}</td>
            <td data-title="birthday" class="birthday">${item.birthday}</td>
            <td data-title="email" class="email">${item.email}</td>
            <td data-title="actions" class="actions">
                <button><i class="fa-solid fa-pen-to-square" id="edit"></i></button>
                <button><i class="fa-solid fa-trash" id="delete"></i></button>
            </td>
        `;

        tbody.appendChild(tr)
    })
};

// const form = document.getElementsByName('form')

const formu = document.getElementsByName('form')[0]

formu.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputName = document.getElementById('name').value;
    const inputLastName = document.getElementById('last-name').value;
    const inputBirthday = document.getElementById('nasc').value;
    const inputEmail = document.getElementById('email').value
    const inputGender = document.querySelector('input[name="gender"]:checked')?.value || ' ';

    // Obtem um array dos dados armazenados
    const data = JSON.parse(localStorage.getItem('people')) || [];

    // Definindo um novo objeto post pelo Form
    const newItem = {
        id: data.length,
        name: inputName,
        last_name: inputLastName,
        gender: inputGender,
        birthday: inputBirthday,
        email: inputEmail
    };

    //Adiciona o novo item no array
    data.push(newItem);

    //Atualizar no localStorage
    localStorage.setItem('people', JSON.stringify(data))
    
    // Re-renderizar os dados
    readAll();
    
})

