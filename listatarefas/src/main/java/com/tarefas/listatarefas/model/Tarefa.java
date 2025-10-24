package com.tarefas.listatarefas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Diz ao JPA que esta classe é uma tabela no banco
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID automático
    private Long id;
    private String descricao;
    private boolean concluida = false; // Padrão é 'false'

    // Getters e Setters (Necessários para o Spring)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public boolean isConcluida() { return concluida; }
    public void setConcluida(boolean concluida) { this.concluida = concluida; }
}