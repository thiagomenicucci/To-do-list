package com.tarefas.listatarefas.controller;

import com.tarefas.listatarefas.model.Tarefa;
import com.tarefas.listatarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas") // Todos os métodos começarão com "/api/tarefas"
public class TarefaController {

    @Autowired // O Spring vai injetar o repositório aqui
    private TarefaRepository repository;

    // GET /api/tarefas - Lista todas
    @GetMapping
    public List<Tarefa> listarTarefas() {
        return repository.findAll();
    }

    // POST /api/tarefas - Cria uma nova
    @PostMapping
    public Tarefa criarTarefa(@RequestBody Tarefa tarefa) {
        // Ignora o ID e a conclusão, só pega a descrição
        Tarefa novaTarefa = new Tarefa();
        novaTarefa.setDescricao(tarefa.getDescricao());
        return repository.save(novaTarefa);
    }

    // PUT /api/tarefas/{id} - Marca como concluída/pendente
    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> atualizarTarefa(@PathVariable Long id) {
        return repository.findById(id).map(tarefa -> {
            tarefa.setConcluida(!tarefa.isConcluida()); // Inverte o status
            repository.save(tarefa);
            return ResponseEntity.ok(tarefa);
        }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/tarefas/{id} - Deleta a tarefa
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTarefa(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}