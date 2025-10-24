// Espera o documento carregar
$(document).ready(function() {

    const apiUrl = "/api/tarefas"; // A URL da nossa API Java

    // Função para carregar as tarefas
    function carregarTarefas() {
        $("#lista-tarefas").empty(); // Limpa a lista antes de carregar

        // GET (jQuery) - Pega as tarefas do back-end
        $.get(apiUrl, function(tarefas) {
            tarefas.forEach(function(tarefa) {
                adicionarTarefaNaLista(tarefa);
            });
        });
    }

    // ==========================================================
    // FUNÇÃO ATUALIZADA (com Checkbox)
    // ==========================================================
    function adicionarTarefaNaLista(tarefa) {
        const itemLista = $("<li></li>");

        // 1. CRIA O CHECKBOX
        const checkbox = $("<input type='checkbox' class='checkbox-tarefa' />");
        checkbox.prop('checked', tarefa.concluida); // Define se vem marcado ou não

        // 2. ADICIONA O EVENTO 'change' (clique) AO CHECKBOX
        // É isso que vai chamar a API para CONCLUIR/DESCONCLUIR
        checkbox.change(function() {
            $.ajax({
                url: `${apiUrl}/${tarefa.id}`, // A API PUT inverte o status
                type: 'PUT',
                success: carregarTarefas // Recarrega a lista
            });
        });

        // 3. O TEXTO (SPAN) DA TAREFA
        const spanDescricao = $("<span></span>").text(tarefa.descricao);

        // Adiciona a classe 'concluida' ao <li> se a tarefa estiver
        if (tarefa.concluida) {
            itemLista.addClass("concluida");
        }

        // O clique no texto não faz mais nada.

        // 4. O BOTÃO DE DELETAR (igual a antes)
        const btnDeletar = $("<button>X</button>");
        btnDeletar.click(function() {
            $.ajax({
                url: `${apiUrl}/${tarefa.id}`,
                type: 'DELETE',
                success: carregarTarefas // Recarrega a lista
            });
        });

        // 5. MONTAR O ITEM DA LISTA (em ordem)
        itemLista.append(checkbox);      // 1º o Checkbox
        itemLista.append(spanDescricao);  // 2º o Texto
        itemLista.append(btnDeletar);     // 3º o Botão X

        $("#lista-tarefas").append(itemLista);
    }


    // Evento de submit do formulário para CRIAR (POST)
    $("#form-tarefa").submit(function(e) {
        e.preventDefault(); // Impede o recarregamento da página
        const descricao = $("#input-descricao").val();

        // POST (jQuery) - Envia a nova tarefa como JSON
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ descricao: descricao }),
            success: function() {
                carregarTarefas(); // Recarrega a lista
                $("#input-descricao").val(""); // Limpa o input
            }
        });
    });

    // Carrega as tarefas ao iniciar a página
    carregarTarefas();
});