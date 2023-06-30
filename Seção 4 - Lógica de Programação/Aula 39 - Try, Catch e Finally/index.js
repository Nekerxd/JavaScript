function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    // É executada quando não há erro
    const data = new Date('06-30-2023 11:41:34');
    const hora = retornaHora(11);
    console.log(hora);
} catch (error) {
    // É executada quando há erros
    // Tratar o erro
    // console.log(error);
} finally {
    // Sempre é executada
    console.log('Tenha um bom dia.');
}
