document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const empresa = document.getElementById('empresa').value;
    const cargo = document.getElementById('cargo').value;
    const assunto = document.getElementById('assunto').value;

    // Formata a mensagem
    const mensagem = `Novo contato da Twoak Company:%0A` +
                     `Nome: ${nome} ${sobrenome}%0A` +
                     `Email: ${email}%0A` +
                     `Telefone: ${telefone}%0A` +
                     `Empresa: ${empresa}%0A` +
                     `Cargo: ${cargo}%0A` +
                     `Assunto: ${assunto}`;

    // Número do WhatsApp (sem espaços, + ou parênteses)
    const numeroWhatsApp = '+5511970629125';

    // Cria o link para o WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // Redireciona para o WhatsApp
    window.open(url, '_blank');
});