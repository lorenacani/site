const receitas = [
{
    id: 1,
    titulo:"a",
    imagem:
    "fghdcxgtjnfvcyh",
    categoria: "jasbnh",
    ingredientes: [
        "wefwe rgerergweg",
        "egerg",
        "gergegergeg"
    ],
    modoDePreparo: [
        "efw",   
        "fwfwe",
        "fwefwe",
        "fwefwe"
    ]
},

{
    id: 2,
    titulo:"b",
    imagem:
    "fghdcxgtjnfvcyh",
    categoria: "jasbnh",
    ingredientes: [
        "wefwe rgerergweg",
        "egerg",
        "gergegergeg"
    ],
    modoDePreparo: [
        "efw",   
        "fwfwe",
        "fwefwe",
        "fwefwe"
    ]
},

{
    id: 3,
    titulo:"c",
    imagem:
    "fghdcxgtjnfvcyh",
    categoria: "jasbnh",
    ingredientes: [
        "wefwe rgerergweg",
        "egerg",
        "gergegergeg"
    ],
    modoDePreparo: [
        "efw",   
        "fwfwe",
        "fwefwe",
        "fwefwe"
    ]
},

{
    id: 4,
    titulo:"rgerergweg",
    imagem:
    "fghdcxgtjnfvcyh",
    categoria: "jasbnh",
    ingredientes: [
        "wefwe rgerergweg",
        "egerg",
        "gergegergeg"
    ],
    modoDePreparo: [
        "efw",   
        "fwfwe",
        "fwefwe",
        "fwefwe"
    ]
},

{
    id: 5,
    titulo:"rgerergweg",
    imagem:
    "fghdcxgtjnfvcyh",
    categoria: "jasbnh",
    ingredientes: [
        "wefwe rgerergweg",
        "egerg",
        "gergegergeg"
    ],
    modoDePreparo: [
        "efw",   
        "fwfwe",
        "fwefwe",
        "fwefwe"
    ]
}
];

// const container = document.getElementById("lista-receitas");

// receitas.forEach(r => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//         <img src="${r.imagem}" alt="${r.titulo}">
//         <h2>${r.titulo}</h2>
//         <p><strong>Categoria:</strong> ${r.categoria}</p>
//         <button onclick="VerDetalhes(${r.id})">Ver Receita</button>
//     `;
//     container.appendChild(card);
// });

// function VerDetalhes(id) {
//     const receita = receitas.find(r => r.id === id);
//     alert(
//         'Ingredientes:\n- $
//         {receita.ingredientes.join('\n- ')}
//         \n\n' +
//         'Modo de Preparo:\n $
//         {receita.modoDePreparo.join('\n-')}
//         );
//     }

const container = document.getElementById("lista-receitas");

receitas.forEach(r => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${r.imagem}" alt="${r.titulo}">
        <h2>${r.titulo}</h2>
        <p><strong>Categoria:</strong> ${r.categoria}</p>
        <button onclick="VerDetalhes(${r.id})">Ver Receita</button>
    `;
    container.appendChild(card);
});

function VerDetalhes(id) {
    const receita = receitas.find(r => r.id === id);

    //preenche o conteúdo do modal
    
    document.getElementById("modal-titulo").textContent = receita.titulo;
    document.getElementById("modal-imagem").src = receita.imagem;
    document.getElementById("modal-imagem").alt = receita.titulo;

    const ulIngredientes = document.getElementById("modal-ingredientes");
    ulIngredientes.innerHTML = "";

    receita.ingredientes.forEach(ingrediente => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        ulIngredientes.appendChild(li);
    });

    const olPreparo = document.getElementById("modal-preparo");
    olPreparo.innerHTML = "";
    receita.modoDePreparo.forEach(passo => {
        const li = document.createElement("li");
        li.textContent = passo;
        olPreparo.appendChild(li);
    });

    //exibe o modal

    document.getElementById("modal").style.display = "block";

    //fecha o modal 

    document.getElementById("fechar-modal").onclick = function() {
        document.getElementById("modal").style.display = "none";
    };

    //fecha clicando fora do modal

    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    function filtrarReceitas() {
        const termo = document.getElementById("campo-busca");
        value.toLowerCase();
        const container = document.getElementById("lista-receitas");
        container.innerHTML = "";

        receitas.filter(r => r.titulo.toLowerCase().includes(termo)).forEach(r => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${r.imagem}" alt="${r.titulo}">
                <h2>${r.titulo}</h2>
                <p><strong>Categoria:</strong> ${r.categoria}</p>
                <button onclick="VerDetalhes(${r.id})">Ver Receita</button>
            `;
            container.appendChild(card);
        });
    }

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
    
    // gera as teclas

    const letras


}
