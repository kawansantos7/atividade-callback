function processarTransacaoPix(chavePix, valor, callbackAcao) {
    if (valor <= 0) {
        console.log("Erro: O valor do PIX deve ser maior que zero.");
        return;
    }
    const transacao = {
        id: Math.floor(Math.random() * 100000),
        chavePix,
        valor,
        data: new Date().toLocaleTimeString()
    };
    console.log("\nProcessando transação PIX...");
    console.log("Transação aprovada!");
    callbackAcao(transacao);
}
function emitirComprovantePorEmail(transacao) {
    console.log("\n--- Comprovante por E-mail ---");
    console.log(`ID: ${transacao.id}`);
    console.log(`Valor: R$ ${transacao.valor.toFixed(2)}`);
    console.log(`Destinatário: ${transacao.chavePix}`);
    console.log("Comprovante enviado com sucesso!");
}
function creditarCashback(transacao) {
    const cashback = transacao.valor * 0.02;
    console.log("\n--- Cashback ---");
    console.log(`Valor da transação: R$ ${transacao.valor.toFixed(2)}`);
    console.log(`Cashback de 2%: R$ ${cashback.toFixed(2)}`);
}
function auditarTransacaoSuspeita(transacao) {
    console.log("\n--- Auditoria Antifraude ---");
    if (transacao.valor > 5000) {
        console.log(" BANDEIRA VERMELHA: Transação suspeita!");
        console.log("Valor acima de R$ 5.000,00. Encaminhar para análise.");
    } else {
        console.log("Transação sem alerta de valor elevado.");
    }
}
console.log("===== TESTE 1: COMPROVANTE =====");
processarTransacaoPix(
    "cliente@email.com",
    250,
    emitirComprovantePorEmail
);
console.log("\n===== TESTE 2: CASHBACK =====");
processarTransacaoPix(
    "12345678900",
    500,
    creditarCashback
);
console.log("\n===== TESTE 3: AUDITORIA =====");
processarTransacaoPix(
    "financeiro@empresa.com",
    7500,
    auditarTransacaoSuspeita
);
console.log("\n===== TESTE 4: DESCONTO =====");
processarTransacaoPix(
    "cliente@email.com",
    100,
    (transacao) => {
        const valorFinal = transacao.valor - 5;
        console.log("Desconto aplicado com sucesso!");
        console.log(`Valor original: R$ ${transacao.valor.toFixed(2)}`);
        console.log("Desconto: R$ 5,00");
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
    }
);
// Passo 5: Simulando webhook assíncrono
function enviarWebhookAssincrono(transacao, callbackFinalizacao) {
    console.log("\nWebhook agendado para envio...");
    console.log(`ID da transação: ${transacao.id}`);
    setTimeout(() => {
        console.log("\nWebhook enviado após 2 segundos!");
        callbackFinalizacao(transacao);
    }, 2000);
}
console.log("\n===== TESTE 5: WEBHOOK ASSÍNCRONO =====");
const transacaoWebhook = {
    id: 12345,
    chavePix: "loja@exemplo.com",
    valor: 350,
    data: new Date().toLocaleTimeString()
};
enviarWebhookAssincrono(transacaoWebhook, (transacao) => {
    console.log("Callback de finalização executada!");
    console.log(`Pagamento confirmado para: ${transacao.chavePix}`);
    console.log(`Valor confirmado: R$ ${transacao.valor.toFixed(2)}`);
});