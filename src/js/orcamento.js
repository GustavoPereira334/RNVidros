// src/js/orcamento.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orcamentoForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Serviço:* ${servico}%0A*Mensagem:* ${mensagem}`;

    window.open(`https://wa.me/5511967400213?text=${texto}`, '_blank');
  });
});