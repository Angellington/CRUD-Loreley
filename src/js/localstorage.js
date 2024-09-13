window.onload = function(){
    readAll()
}

// Make data
let data = [
    {id: 0, name: 'Minerva', last_name: 'Alves', gender: 'M', birthday: '20-06-2005', email: 'superetro85@gmail.com'}
]

// Verificar se tem presença no LocalStorage, se nao gouver, será criado
if (!localStorage.getItem('people')){
    localStorage.setItem('people', JSON.stringify(data));
}