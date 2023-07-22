const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function novaTarefa(tarefa) {
    const li = criaItemLista();
    li.innerText = tarefa + ' ';
    tarefas.appendChild(li);
    criaBtnApagar(li);
    clearInput();
    salvarTarefas();
}

function criaItemLista() {
    const li = document.createElement('li');
    return li;
}

function criaBtnApagar(li) {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Remover';
    btnApagar.setAttribute('class', 'remover');
    btnApagar.setAttribute('title', 'Remover esta tarefa');
    li.appendChild(btnApagar);
}

function clearInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvarTarefas() {
    const itensTarefas = document.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of itensTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Remover', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregarTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
        novaTarefa(tarefa);
    }

}

inputTarefa.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
        if (!inputTarefa.value) return;
        novaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    novaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('remover')) {
        element.parentElement.remove();
    }
    salvarTarefas();
});

carregarTarefas();