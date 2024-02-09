// constante aonde contem as perguntas e dentro dela contem uma [ e uma pergunta e resposta que estao em Chave e contem uma variavel correta para indicar acerto ]
const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: ["var myVar;", "variable myVar;", "let myVar;"],
      correta: 2, // let myVar;
    },
    {
      pergunta:
        "Qual dos seguintes não é um tipo de dados primitivo em JavaScript?",
      respostas: ["Number", "Object", "String"],
      correta: 1, // Object
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0, // // Este é um comentário
    },
    {
      pergunta: "O que o operador '+' faz em JavaScript?",
      respostas: ["Concatena strings", "Adiciona números", "Ambos a e b"],
      correta: 2, // Ambos a e b
    },
    {
      pergunta:
        "Qual é a função usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      respostas: ["round()", "ceil()", "floor()"],
      correta: 0, // round()
    },
    {
      pergunta: "Como você acessa o primeiro elemento de um array em JavaScript?",
      respostas: ["array[0]", "array.first()", "array.get(0)"],
      correta: 0, // array[0]
    },
    {
      pergunta: "O que o método `forEach()` faz em um array em JavaScript?",
      respostas: [
        "Executa uma função uma vez para cada elemento do array",
        "Filtra elementos do array com base em uma condição",
        "Retorna o primeiro elemento do array",
      ],
      correta: 0, // Executa uma função uma vez para cada elemento do array
    },
    {
      pergunta: "Qual é o resultado de '\"5\" + 3' em JavaScript?",
      respostas: ["8", '"53"', "53"],
      correta: 1, // "53"
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais em valor e tipo",
        "Verifica se dois valores são iguais em valor, mas não em tipo",
        "Atribui um valor a uma variável",
      ],
      correta: 0, // Verifica se dois valores são iguais em valor e tipo
    },
    {
      pergunta:
        "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: ["push()", "add()", "insert()"],
      correta: 0, // push()
    },
  ];
  // const. nomeada com ID quiz e fazendo colocaçao de uma div e um template
  const quiz = document.querySelector(`#quiz`);
  const template = document.querySelector(`template`);
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector(`#acertos span`);
  mostrarTotal.textContent = corretas.size + `de` + totalDePerguntas;
  
  for (let item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector(`h3`).textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector(`dl dt`).cloneNode(true);
      dt.querySelector(`span`).textContent = resposta;
      dt.querySelector(`input`).setAttribute(
        `name`,
        `pergunta-` + perguntas.indexOf(item)
      );
      dt.querySelector(`input`).value = item.respostas.indexOf(resposta);
      dt.querySelector(`input`).onchange = (event) => {
        const estacorreta = event.target.value == item.correta; //true and false
  
        corretas.delete(item);
        if (estacorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + `de` + totalDePerguntas;
      };
  
      quizItem.querySelector(`dl`).appendChild(dt);
    }
  
    quizItem.querySelector(`dl dt`).remove();
  
    // coloca pergunta na tela
    quiz.appendChild(quizItem);
  }
  