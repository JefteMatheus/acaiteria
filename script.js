function enviarWhatsApp() {
    const copo = document.getElementById('copos').value;
    const marmita = document.getElementById('marmitas').value;
    const adicionais = [];
    const acompanhamentos = [];
    const pagamento = document.getElementById('formaPagamento').value;

    // Captura campos de endereço
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cidade = document.getElementById('cidade').value;

    // Preço do pedido
    const precoCopo = { "Copo 300ml": 10.00, "Copo 400ml": 12.00, "Copo 500ml": 15.00 };
    const precoMarmita = { "Marmita 300ml": 12.00, "Marmita 400ml": 14.00, "Marmita 500ml": 22.00 };
    const precoAdicional = { "Morango": 3.00, "Kiwi": 3.00, "Oreo": 3.00, "Creme de Avelã": 3.00 };

    let total = 0;
    let tipoPedido = "";

    // Definir tipo de pedido e calcular total
    if (copo !== "") {
        tipoPedido = copo;
        total += precoCopo[copo] || 0;
    } else if (marmita !== "") {
        tipoPedido = marmita;
        total += precoMarmita[marmita] || 0;
    }

    // Verifica os adicionais selecionados e calcula o preço
    if (document.getElementById('morango').checked) adicionais.push("Morango");
    if (document.getElementById('kiwi').checked) adicionais.push("Kiwi");
    if (document.getElementById('oreo').checked) adicionais.push("Oreo");
    if (document.getElementById('cremeAvela').checked) adicionais.push("Creme de Avelã");
    
    adicionais.forEach(adicional => { total += precoAdicional[adicional] || 0; });

    // Verifica acompanhamentos selecionados (sem custo)
    if (document.getElementById('granola').checked) acompanhamentos.push("Granola");
    if (document.getElementById('leiteCondensado').checked) acompanhamentos.push("Leite Condensado");
    if (document.getElementById('banana').checked) acompanhamentos.push("Banana");
    if (document.getElementById('mm').checked) acompanhamentos.push("M&M");
    if (document.getElementById('pacoca').checked) acompanhamentos.push("Paçoca");
    if (document.getElementById('farinhaAmendoim').checked) acompanhamentos.push("Farinha de Amendoim");
    if (document.getElementById('jujuba').checked) acompanhamentos.push("Jujuba");
    if (document.getElementById('gotasChocolate').checked) acompanhamentos.push("Gotas de Chocolate");

    // Taxa de entrega
    const taxaEntrega = 3.00;

    // Soma o total com a taxa de entrega
    const totalFinal = total + taxaEntrega;

    // Montar mensagem para WhatsApp
    let mensagem = `Pedido de Açaí:\n\nTipo: ${tipoPedido}\n`;
    mensagem += `Adicionais: ${adicionais.join(", ")}\n`;
    mensagem += `Acompanhamentos: ${acompanhamentos.join(", ")}\n\n`;
    mensagem += `Endereço de entrega:\nRua: ${rua}, Bairro: ${bairro}, Número: ${numero}, Complemento: ${complemento}, Cidade: ${cidade}\n`;
    mensagem += `Forma de pagamento: ${pagamento}\n`;
    mensagem += `Total do pedido: R$${total.toFixed(2)}\n`;
    mensagem += `Taxa de entrega: R$${taxaEntrega.toFixed(2)}\n`;
    mensagem += `Total com taxa de entrega: R$${totalFinal.toFixed(2)}\n`; // Valor total com taxa de entrega

    // Formatar link do WhatsApp
    const numeroWhatsApp = "81991702554"; // Substitua pelo número de WhatsApp da açaiteria
    const link = `https://wa.me/55<81991702554>?text=${encodeURIComponent(mensagem)}`;
    
    window.open(link, "_blank");
}
