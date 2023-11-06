// 1. Função tradicional sem parâmetros
function saudacao() {
    console.log("Bem-vindo a calculadora de IMC!");
  }
  
  // 2. Função tradicional com parâmetros e retorno de valor 
  function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }
  
  // 3. Arrow function com parâmetros e retorno de valor 
  const avaliarIMC = imc => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  };
  
  saudacao();
  
    const peso = 70; 
    const altura = 1.75; 
  
  const imc = calcularIMC(peso, altura);
  console.log(`Seu IMC é ${imc.toFixed(2)}`);
  
  const classificacao = avaliarIMC(imc);
  console.log(`Classificação: ${classificacao}`);
  
  
