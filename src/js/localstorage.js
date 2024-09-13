window.onload = function(){
    readAll()
}


// Make data
let data = [
    {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-07-2005', email: 'superetro85@gmail.com'}, {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-07-2005', email: 'superetro85@gmail.com'}
]


// --- Converter o array de objeto ---
const jsonData = JSON.stringify(data);
localStorage.setItem('people', jsonData);




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
    data.forEach(item => {
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
            <button><i class="fa-solid fa-trash" id="delete"></i></button>
        </td>
        `;

        id++;

        tbody.appendChild(tr)
    })
}

