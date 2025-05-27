const receitas = [
    {
        id: 1,
        titulo: "Bolo de Chocolate",
        imagem: "Atividade Avaliativa PWEB II - 2BIM - Copia/bolocho.jpg",
        categoria: "Sobremesa",
        ingredientes: ["Farinha", "Ovos", "Chocolate", "Leite"],
        modoDePreparo: ["Misture os ingredientes", "Asse por 40 minutos"]
    },
    {
        id: 2,
        titulo: "Salada Verde",
        imagem: "https://via.placeholder.com/300",
        categoria: "Saudável",
        ingredientes: ["Alface", "Tomate", "Azeite"],
        modoDePreparo: ["Lave os ingredientes", "Misture e tempere"]
    },
    {
        id: 3,
        titulo: "Pão de Queijo",
        imagem: "https://via.placeholder.com/300x200?text=Pao+de+Queijo",
        categoria: "Lanche",
        ingredientes: ["1 xícara de polvilho doce", "1/2 xícara de queijo minas ralado", "1 ovo", "1/4 xícara de óleo", "Sal a gosto"],
        modoDePreparo: ["Misture todos os ingredientes até formar uma massa homogênea", "Modele bolinhas e coloque em uma assadeira untada", "Asse em forno preaquecido a 180°C por 20 minutos ou até dourar", "Sirva quente"]
    },
    {
        id: 4,
        titulo: "Omelete Simples",
        imagem: "https://via.placeholder.com/300x200?text=Omelete+Simples",
        categoria: "Lanche",
        ingredientes: ["2 ovos", "Sal a gosto", "Pimenta do reino a gosto", "Recheio a gosto (queijo, presunto, tomate)"],
        modoDePreparo: ["Bata os ovos com sal", "Despeje em uma frigideira antiaderente aquecida e tempere", "Quando começar a firmar, adicione o recheio", "Dobre ao meio e cozinhe até o recheio aquecer", "Sirva quente"]
    },
    {
        id: 5,
        titulo: "Macarrão ao Alho e Óleo",
        imagem: "https://via.placeholder.com/300x200?text=Macarrao+Alho+e+Oleo",
        categoria: "Prato Principal",
        ingredientes: ["200g de macarrão", "3 dentes de alho picados", "Azeite de oliva", "Parmesão ralado", "Sal a gosto", "Salsinha para decorar"],
        modoDePreparo: ["Cozinhe o macarrão conforme instruções da embalagem", "Em uma frigideira, aqueça o azeite e refogue o alho até dourar", "Misture o macarrão cozido ao alho e óleo", "Tempere com sal e decore com salsinha", "Sirva quente"]
    },
    {
        id: 6,
        titulo: "Salada Caesar",
        imagem: "https://via.placeholder.com/300",
        categoria: "Saudável",
        ingredientes: ["Alface", "Tomate", "Azeite"],
        modoDePreparo: ["Lave os ingredientes", "Misture e tempere"]
    },
    {
        id: 7,
        titulo: "Bolo de Cenoura",
        imagem: "https://via.placeholder.com/300?text=Bolo+de+Cenoura",
        categoria: "Sobremesa",
        ingredientes: ["Cenoura", "Farinha", "Ovos", "Açúcar", "Óleo"],
        modoDePreparo: ["Bata os ingredientes no liquidificador", "Asse por 40 minutos"]
    },
    {
        id: 8,
        titulo: "Sanduíche Natural",
        imagem: "https://via.placeholder.com/300?text=Sanduiche+Natural",
        categoria: "Lanche",
        ingredientes: ["Pão integral", "Peito de peru", "Alface", "Tomate", "Requeijão"],
        modoDePreparo: ["Monte o sanduíche com os ingredientes", "Sirva gelado"]
    },

    {
    id: 9,
    titulo: "Smoothie de Banana",
    imagem: "https://via.placeholder.com/300x200?text=Smoothie+de+Banana",
    categoria: "Bebida",
    ingredientes: ["1 banana madura", "200ml de leite", "1 colher de mel", "Gelo a gosto"],
    modoDePreparo: [
        "Bata todos os ingredientes no liquidificador até ficar homogêneo",
        "Sirva gelado"
    ]
    },
    {
    id: 9,
    titulo: "Misto Quente",
    imagem: "https://via.placeholder.com/300x200?text=Misto+Quente",
    categoria: "Lanche",
    ingredientes: ["Pão de forma", "Presunto", "Queijo", "Manteiga"],
    modoDePreparo: [
      "Passe manteiga no pão",
      "Coloque presunto e queijo entre as fatias",
      "Leve para tostar na frigideira ou sanduicheira",
      "Sirva quente"
    ]
  },
  {
    id: 10,
    titulo: "Suco de Laranja",
    imagem: "https://via.placeholder.com/300x200?text=Suco+de+Laranja",
    categoria: "Bebida",
    ingredientes: ["Laranjas", "Açúcar (opcional)", "Gelo"],
    modoDePreparo: [
      "Esprema as laranjas para extrair o suco",
      "Adicione açúcar a gosto",
      "Misture bem e sirva com gelo"
    ]
  },
  {
    id: 11,
    titulo: "Ovos Mexidos",
    imagem: "https://via.placeholder.com/300x200?text=Ovos+Mexidos",
    categoria: "Café da Manhã",
    ingredientes: ["2 ovos", "Sal a gosto", "Pimenta a gosto", "Manteiga"],
    modoDePreparo: [
      "Quebre os ovos em uma tigela e bata com garfo",
      "Derreta manteiga na frigideira",
      "Despeje os ovos e mexa até cozinharem",
      "Tempere com sal e pimenta e sirva"
    ]
    },
    {
    id: 12,
    titulo: "Sanduíche Natural",
    imagem: "https://via.placeholder.com/300x200?text=Sanduiche+Natural",
    categoria: "Lanche",
    ingredientes: ["Pão integral", "Peito de peru", "Alface", "Tomate", "Maionese"],
    modoDePreparo: [
      "Passe maionese no pão",
      "Coloque peito de peru, alface e tomate",
      "Feche o sanduíche e sirva"
    ]
  },
  {
    id: 13,
    titulo: "Vitamina de Banana",
    imagem: "https://via.placeholder.com/300x200?text=Vitamina+de+Banana",
    categoria: "Bebida",
    ingredientes: ["1 banana", "1 copo de leite", "Mel a gosto"],
    modoDePreparo: [
      "Bata todos os ingredientes no liquidificador",
      "Sirva gelado"
    ]
  },
  {
    id: 14,
    titulo: "Iogurte com Mel e Granola",
    imagem: "https://via.placeholder.com/300x200?text=Iogurte+com+Mel",
    categoria: "Café da Manhã",
    ingredientes: ["Iogurte natural", "Mel", "Granola"],
    modoDePreparo: [
      "Coloque o iogurte em uma tigela",
      "Adicione mel e granola por cima",
      "Sirva imediatamente"
    ]
  }

];


const container = document.getElementById("lista-receitas");

function criarCards(receitasFiltradas) {
    container.innerHTML = "";
    receitasFiltradas.forEach(r => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${r.imagem}" alt="Imagem da receita ${r.titulo}">
            <h2>${r.titulo}</h2>
            <p><strong>Categoria:</strong> ${r.categoria}</p>
            <button onclick="VerDetalhes(${r.id})" aria-label="Ver detalhes da receita ${r.titulo}">Ver Receita</button>
        `;
        container.appendChild(card);
    });
}

criarCards(receitas);

function VerDetalhes(id) {
    const receita = receitas.find(r => r.id === id);

    document.getElementById("modal-titulo").textContent = receita.titulo;
    const imgModal = document.getElementById("modal-imagem");
    imgModal.src = receita.imagem;
    imgModal.alt = "Imagem da receita " + receita.titulo;

    const ulIngredientes = document.getElementById("modal-ingredientes");
    ulIngredientes.innerHTML = "";
    receita.ingredientes.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        ulIngredientes.appendChild(li);
    });

    const olPreparo = document.getElementById("modal-preparo");
    olPreparo.innerHTML = "";
    receita.modoDePreparo.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        olPreparo.appendChild(li);
    });

    document.getElementById("modal").style.display = "block";
}

// Fechar modal
document.getElementById("fechar-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};
window.onclick = function(event) {
    if(event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};

function filtrarReceitas() {
    const termo = document.getElementById("campo-busca").value.toLowerCase();
    const filtradas = receitas.filter(r => r.titulo.toLowerCase().includes(termo));
    criarCards(filtradas);
}

// Teclado virtual
const teclado = document.getElementById("teclado-virtual");
const campoBusca = document.getElementById("campo-busca");
const teclasContainer = document.getElementById("teclas");

document.getElementById("abrir-teclado").onclick = function() {
    teclado.style.display = "flex";
    campoBusca.focus();
};

function fecharTeclado() {
    teclado.style.display = "none";
}

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letras.split("").forEach(letra => {
    const botao = document.createElement("button");
    botao.textContent = letra;
    botao.onclick = () => {
        campoBusca.value += letra;
        campoBusca.focus();
    };
    teclasContainer.appendChild(botao);
});

// Botão espaço
const botaoEspaco = document.createElement("button");
botaoEspaco.textContent = "Espaço";
botaoEspaco.onclick = () => {
    campoBusca.value += " ";
    campoBusca.focus();
};
teclasContainer.appendChild(botaoEspaco);

// Botão apagar
const botaoApagar = document.createElement("button");
botaoApagar.textContent = "Apagar";
botaoApagar.onclick = () => {
    campoBusca.value = campoBusca.value.slice(0, -1);
    campoBusca.focus();
};
teclasContainer.appendChild(botaoApagar);

// Botão alto contraste
document.getElementById("botao-contraste").onclick = function() {
    document.body.classList.toggle("alto-contraste");
};