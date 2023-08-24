const form = document.getElementById ('tarefas');
let Linha = '<li>';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const inputNomeDaTarefa = document.getElementById ('nome-da-tarefa');

    Linha += `<li>${inputNomeDaTarefa.value}</li>`;

    const listaTarefas = document.querySelector('ul');
    listaTarefas.innerHTML = Linha; 

    $('li').click(function() {
        $(this).addClass("liRisco");
    });

});