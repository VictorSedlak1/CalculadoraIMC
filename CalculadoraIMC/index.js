function calculate() {
  let altura = document.getElementById("altura").value / 100;
  let peso = document.getElementById("peso").value;
  let nome = document.getElementById("nome").value;

  let imc = (peso / altura ** 2).toFixed(1);
  let resultado=""
  if (imc < 15.99) {
    resultado="Magreza Grave"
  } else if (imc >= 16 && imc <= 16.99) {
    resultado="Magreza Moderada"
  } else if (imc >= 17 && imc <= 18.5) {
    resultado="Magreza Leve"
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado="Saudável"
  } else if (imc >= 25 && imc <= 29.9) {
    resultado="Sobrepeso"
  } else if (imc >= 30 && imc <= 34.9){
    resultado="Obesidade Grau 1"
  } else if (imc >= 35 && imc <= 39.9){
    resultado="Obesidade Grau 2 (Severa)"
  } else if (imc >= 40)
    resultado="Obesidade Grau 3 (Mórbida)"
  document.getElementById("resposta").innerHTML= `${nome} Você está com ${resultado}`
}