document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    let resultado = `Seu IMC é ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultado += "Você está abaixo do peso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Alimentos ricos em carboidratos e proteínas, como batata doce, arroz integral, carnes magras e feijões.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios de resistência como musculação, para ganho de massa muscular.</li></ul>";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += "Você está com peso normal. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta balanceada com frutas, vegetais, proteínas magras e carboidratos complexos.</li>";
        resultado += "<li><strong>Atividades:</strong> Manter uma rotina de atividades físicas moderadas, como caminhadas ou ciclismo.</li></ul>";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += "Você está com sobrepeso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Alimentos com baixo teor calórico, como vegetais e proteínas magras; evitar alimentos processados.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios aeróbicos, como corrida e natação, para perda de peso.</li></ul>";
    } else {
        resultado += "Você está com obesidade. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta com acompanhamento profissional, priorizando alimentos saudáveis e baixa ingestão de gorduras e açúcares.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios leves e moderados com acompanhamento, como caminhada e hidroginástica.</li></ul>";
    }

    resultado += "<p><em>Nota: Antes de iniciar qualquer atividade física ou dieta, consulte sempre um Nutricionista e um Profissional de Educação Física para obter melhores resultados e garantir sua saúde.</em></p>";

    document.getElementById("resultado").innerHTML = resultado;
});
