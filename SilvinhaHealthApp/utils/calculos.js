export const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = 'Abaixo do peso'
}