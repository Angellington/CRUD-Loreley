window.onload = function(){
    // readAll()
}

// Make data
let data = [
    {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-06-2005', email: 'superetro85@gmail.com'}
]

// Converter o array de objeto
const jsonData = JSON.stringify(data)

// Passar o dado para o Local Storage, mesmo se tiver vazio
if (!localStorage.getItem('people')){
    localStorage.setItem('people', jsonData);
}

// Passar o data para JSON
const storedData = localStorage.getItem('people')
const obj_data = JSON.parse(storedData);



// Para ter acesso aos atributos, é necessário Iterar... Pegar um de cada
// obj_data.forEach(item => {
//     console.log(`ID: ${item.id}, name: ${item.name}, last_name: ${item.last_name}`)
// })


console.log(obj_data.name)