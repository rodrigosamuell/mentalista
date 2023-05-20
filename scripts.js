function iniciar() {
    var numeroSecreto = parseInt(Math.random() * 1001);
    var tentativasRestantes = 10;
  
    var nome = prompt("Qual é o seu nome?");
    alert("Olá " + nome + ", consegue ler minha mente?");
  
    while (tentativasRestantes >= 1 && chute != numeroSecreto) {
      var chute = prompt(
        "Em que número estou pensando?" + "\n" +
        "Entre 0 e 1000, você tem " + tentativasRestantes + " chances."
      );
      tentativasRestantes--;
  
      //condições após o chute
      if (chute == numeroSecreto) {
        alert("Parabéns!" + "\n" + nome + "\n" + "Você Acertou!");
      }
      
      else if (chute > numeroSecreto) {
        alert(
          "Errou!" + "\n" +
          "O número que estou pensando é MENOR do que " + chute + "!" + "\n" + 
            nome + ", tente novamente! Você ainda tem " + tentativasRestantes + " chances."
        );
      }
      
      else if (chute < numeroSecreto) {
        alert(
          "Errou!" + "\n" +
          "O número que estou pensando é MAIOR do que " + chute + "!" + "\n" +
          nome + ", tente novamente, você ainda tem " + tentativasRestantes + " chances."
        );
      }
    }
    
    alert(
      "Você perdeu!" + "\n" +
      "O número que pensei era " + numeroSecreto + "!"
    );
  }