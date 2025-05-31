//declara a constante p guardar os dados da receita

const receitas = [
    {
        id: 1,
        titulo: "Bolo de Chocolate",
        imagem: "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg",
        categoria: "Sobremesa",
        ingredientes: ["Farinha", "Ovos", "Chocolate", "Leite"],
        modoDePreparo: ["Misture os ingredientes", "Asse por 40 minutos"]
    },
    {
        id: 2,
        titulo: "Salada Verde",
        imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F8da0abaa9284033641a8445fb6893269c87087a7.png&w=1080&q=70",
        categoria: "Saudável",
        ingredientes: ["Alface", "Tomate", "Azeite"],
        modoDePreparo: ["Lave os ingredientes", "Misture e tempere"]
    },
    {
        id: 3,
        titulo: "Pão de Queijo",
        imagem: "https://boomi.b-cdn.net/wp-content/uploads/2023/08/Dia-do-Pao-de-Queijo-7-receitas-saudaveis-de-pao-de-queijo.png",
        categoria: "Lanche",
        ingredientes: ["1 xícara de polvilho doce", "1/2 xícara de queijo minas ralado", "1 ovo", "1/4 xícara de óleo", "Sal a gosto"],
        modoDePreparo: ["Misture todos os ingredientes até formar uma massa homogênea", "Modele bolinhas e coloque em uma assadeira untada", "Asse em forno preaquecido a 180°C por 20 minutos ou até dourar", "Sirva quente"]
    },
    {
        id: 4,
        titulo: "Omelete Simples",
        imagem: "https://receitanatureba.com/wp-content/uploads/2020/12/Omelete-de-Aveia.jpg",
        categoria: "Lanche",
        ingredientes: ["2 ovos", "Sal a gosto", "Pimenta do reino a gosto", "Recheio a gosto (queijo, presunto, tomate)"],
        modoDePreparo: ["Bata os ovos com sal", "Despeje em uma frigideira antiaderente aquecida e tempere", "Quando começar a firmar, adicione o recheio", "Dobre ao meio e cozinhe até o recheio aquecer", "Sirva quente"]
    },
    {
        id: 5,
        titulo: "Macarrão ao Alho e Óleo",
        imagem: "https://www.receitasja.com.br/wp-content/uploads/2024/09/macarrao-alho-e-oleo-e1727359562890.webp",
        categoria: "Prato Principal",
        ingredientes: ["200g de macarrão", "3 dentes de alho picados", "Azeite de oliva", "Parmesão ralado", "Sal a gosto", "Salsinha para decorar"],
        modoDePreparo: ["Cozinhe o macarrão conforme instruções da embalagem", "Em uma frigideira, aqueça o azeite e refogue o alho até dourar", "Misture o macarrão cozido ao alho e óleo", "Tempere com sal e decore com salsinha", "Sirva quente"]
    },
    {
        id: 6,
        titulo: "Salada Caesar",
        imagem: "https://chefcristinahaaland.com.br/wp-content/uploads/2020/12/chefcristinahaaland-Salada-Caesar-com-frango.jpg",
        categoria: "Saudável",
        ingredientes: ["Alface", "Tomate", "Azeite"],
        modoDePreparo: ["Lave os ingredientes", "Misture e tempere"]
    },
    {
        id: 7,
        titulo: "Bolo de Cenoura",
        imagem: "https://cozinhadoce.com.br/wp-content/uploads/2024/07/bolo-de-cenoura-recheado-receita-facil.jpg",
        categoria: "Sobremesa",
        ingredientes: ["Cenoura", "Farinha", "Ovos", "Açúcar", "Óleo"],
        modoDePreparo: ["Bata os ingredientes no liquidificador", "Asse por 40 minutos"]
    },
    {
        id: 8,
        titulo: "Sanduíche Natural",
        imagem: "https://anamariareceitas.com.br/wp-content/uploads/2022/11/Sanduiche-natural.jpg",
        categoria: "Lanche",
        ingredientes: ["Pão integral", "Peito de peru", "Alface", "Tomate", "Requeijão"],
        modoDePreparo: ["Monte o sanduíche com os ingredientes", "Sirva gelado"]
    },
    {
        id: 9,
        titulo: "Smoothie de Banana",
        imagem: "https://s2-receitas.glbimg.com/Oqm-mIijs6kC1gyUcxnJSAoJj1E=/0x0:3909x2601/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/G/4/A9H6fFQAytVCNoESDfiA/banana-smoothie.jpg",
        categoria: "Bebida",
        ingredientes: ["1 banana madura", "200ml de leite", "1 colher de mel", "Gelo a gosto"],
        modoDePreparo: ["Bata todos os ingredientes no liquidificador até ficar homogêneo","Sirva gelado"]
    },
    {
        id: 10,
        titulo: "Misto Quente",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/f863e4fb1b47b206b2276d9b70a5b183_XL.jpg",
        categoria: "Lanche",
        ingredientes: ["Pão de forma", "Presunto", "Queijo", "Manteiga"],
        modoDePreparo: ["Passe manteiga no pão","Coloque presunto e queijo entre as fatias","Leve para tostar na frigideira ou sanduicheira","Sirva quente"]
    },
    {
        id: 11,
        titulo: "Suco de Laranja",
        imagem: "https://i.ytimg.com/vi/Nn9140bDPnc/maxresdefault.jpg",
        categoria: "Bebida",
        ingredientes: ["Laranjas", "Açúcar (opcional)", "Gelo"],
        modoDePreparo: ["Esprema as laranjas para extrair o suco","Adicione açúcar a gosto","Misture bem e sirva com gelo"]
    },
    {
        id: 12,
        titulo: "Iogurte com Mel e Granola",
        imagem: "https://as1.ftcdn.net/jpg/03/36/55/64/1000_F_336556423_HT62E1tPRSUyGbJBtxX5FAUgrbTSL0JT.jpg",
        categoria: "Café da Manhã",
        ingredientes: ["Iogurte natural", "Mel", "Granola"],
        modoDePreparo: ["Coloque o iogurte em uma tigela","Adicione mel e granola por cima","Sirva imediatamente"]
    }
];

const container = document.getElementById("lista-receitas");

// LISTA DE RECEITAS
function criarCards(receitasFiltradas) {
    //Limpa todo o conteúdo dentro do container
    container.innerHTML = "";

    //P cada receita r dentro da lista, o codihgo dentro {} eh executado
    receitasFiltradas.forEach(r => {
        //cria card da receita e add imagem, titulo, categoria e mostra os detalhes
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${r.imagem}" alt="Foto da receita ${r.titulo}, categoria: ${r.categoria}">
            <h2>${r.titulo}</h2>
            <p><strong>Categoria:</strong> ${r.categoria}</p>
            <button onclick="VerDetalhes(${r.id})" aria-label="Ver detalhes da receita ${r.titulo}">Ver Receita</button>
        `;
        //add card e mostra ele
        container.appendChild(card);
    });
}

criarCards(receitas);


// abre uma janela modal
//função pega o id da receita clicada,
//busca os dados dessa receita,
//atualiza o conteúdo do modal com título, imagem, ingredientes e modo de preparo e exibe o modal na tela.

function VerDetalhes(id) {
    const receita = receitas.find(r => r.id === id);

    document.getElementById("modal-titulo").textContent = receita.titulo;
    const imgModal = document.getElementById("modal-imagem");
    imgModal.src = receita.imagem;
    imgModal.alt = "Foto detalhada da receita " + receita.titulo + ", categoria: " + receita.categoria;

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

// fecha modal ao clicar no x
document.getElementById("fechar-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

// fecha modal clicando fora
window.onclick = function(event) {
    if(event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};

// filtra receita quando digita na caixa de busca
function filtrarReceitas() {
    const termo = document.getElementById("campo-busca").value.toLowerCase();
    const filtradas = receitas.filter(r => r.titulo.toLowerCase().includes(termo));
    criarCards(filtradas);
}

// abrir teclado virtual
const teclado = document.getElementById("teclado-virtual");
const campoBusca = document.getElementById("campo-busca");
const teclasContainer = document.getElementById("teclas");

document.getElementById("abrir-teclado").onclick = function() {
    teclado.style.display = "flex";
    campoBusca.focus();
};

// fecha teclado virtual
function fecharTeclado() {
    teclado.style.display = "none";
}

// letras do teclado virtual
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

// botao espaço
const botaoEspaco = document.createElement("button");
botaoEspaco.textContent = "Espaço";
botaoEspaco.onclick = () => {
    campoBusca.value += " ";
    campoBusca.focus();
};
teclasContainer.appendChild(botaoEspaco);

// botao apagar
const botaoApagar = document.createElement("button");
botaoApagar.textContent = "Apagar";
botaoApagar.onclick = () => {
    campoBusca.value = campoBusca.value.slice(0, -1);
    campoBusca.focus();
};
teclasContainer.appendChild(botaoApagar);

// alterar contraste
document.getElementById("botao-contraste").onclick = function() {
    document.body.classList.toggle("alto-contraste");
};