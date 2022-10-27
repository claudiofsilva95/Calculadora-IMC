function calcular() {
    let nome = document.querySelector('#nome');
    let alturatxt = document.querySelector('#altura');
    let pesotxt = document.querySelector('#peso');
    let result = document.querySelector('#resultado');
    if (nome.value.length == 0 || alturatxt.value.length == 0 || pesotxt.value.length == 0) {
        alert('Nenhum dos campos podem ficar em branco')
    } else {
        let peso = Number(pesotxt.value);
        let altura = Number(alturatxt.value);
        let imc = peso / (altura * altura);
        if (altura < 0 || altura > 3.00) {
            alert('altura inválida');
        }
        else {
            if (imc < 18.5) {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está abaixo do peso`;
            }
            else if (imc < 24.9) {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está no peso ideal`;
            }
            else if (imc < 29.9) {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está com leve sobrepeso`;
            }
            else if (imc < 34.9) {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está acima do peso, Grau de obesidade- nível I`;
            }
            else if (imc < 39.9) {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está acima do peso, Grau de obesidade- nível II`;
            }
            else {
                result.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(2)} você está acima do peso, Grau de obesidade- nível III`;
            }
        }
    }
    nome.value = ''
    nome.focus()
    alturatxt.value = ''
    altura.focus()
    pesotxt.value = ''
    pesotxt.focus()
}
