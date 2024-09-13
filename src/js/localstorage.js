window.onload = function(){
    readAll()
    modal.showModal()
}



// Make data
let initialData = [
    {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-07-2005', email: 'superetro85@gmail.com'}, {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-07-2005', email: 'superetro85@gmail.com'}
]


// --- Converter o array de objeto ---
if (!localStorage.getItem('people')) {
    const jsonData = JSON.stringify(initialData);
    localStorage.setItem('people', jsonData);
}



// -- Função para ler a passar para a tabela --
function readAll() {
    // Selecionar a tabela
    const tbody = document.getElementsByTagName('tbody')[0]

    // Passar o data para JSON
    const storedData = localStorage.getItem('people')
    const data = JSON.parse(storedData);

    // Limpar o TBODY antes de adicionar novos dados
    tbody.innerHTML = '';

    let id = 0;
    // Iterar sobre os dados para criar uma nova linha a cada tr
    data.forEach((item, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td data-title="id" class="id">${id}</td>
        <td data-title="name" class="name">${item.name}</td>
        <td data-title="last-name" class="last-name">${item.last_name}</td>
        <td data-title="gender" class="gender">${item.gender}</td>
        <td data-title="birthday" class="birthday">${item.birthday}</td>
        <td data-title="email" class="email">${item.email}</td>
        <td data-title="actions" class="actions">
            <button><i class="fa-solid fa-pen-to-square" id="edit"></i><button>
            <button><i class="fa-solid fa-trash" id="delete" data-index=${index}></i></button>
        </td>
        `;

        id++;

        tbody.appendChild(tr)
    })

    // Botão de Delete (Pega todos os delete)
        document.querySelectorAll('#delete').forEach(button => {
            button.addEventListener('click', function(){
                const index = this.getAttribute('data-index');
                deleteItem(index)
        })
    })
}


function createAll(){
    const name = document.getElementById('name').value;

    const last_name = document.getElementById('last-name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || ' ';
    const birthday = document.getElementById('nasc').value;
    const email = document.getElementById('email').value;
    
    // Passar os valores ao LocalStorage
    const newItem = {
        name, last_name, gender, birthday, email
    }

    // LocalStorage enviar
    const storedData = localStorage.getItem('people');
    const data = JSON.parse(storedData) || [];


    
    // Passar o novo Item ao data
    data.push(newItem)

    // Converter os dados para JSON e salvar no Local Storage
    const newDataJSON = JSON.stringify(data);
    localStorage.setItem('people', newDataJSON)

    // Atualizar a tabela
    readAll()

}

function deleteItem(index){
    // Pega no local storage a chave
    const storedData = localStorage.getItem('people');
    // Transformar o JSON
    const data = JSON.parse(storedData);
    // Usar o splice para removerdo LocalStorage
    data.splice(index, 1);
    // Adiciona no LocalStorage
    localStorage.setItem('people', JSON.stringify(data));

    readAll()

}


// Remover do LocalStorage

