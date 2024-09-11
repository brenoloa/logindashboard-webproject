function gerarDados() {
    const totalVendas = Math.floor(Math.random() * 4000) + 1000;
    document.getElementById('totalVendas').innerText = "R$ " + totalVendas;

    const mediaVendas = Math.floor(Math.random() * 400) + 100;
    document.getElementById('mediaVendas').innerText = "R$ " + mediaVendas;

    const produtos = ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E"];
    const produtosVendidos = document.getElementById('produtosVendidos');
    produtosVendidos.innerHTML = "";
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.innerText = produto;
        produtosVendidos.appendChild(li);
    });

    const dataAtual = new Date().toLocaleDateString();
    document.getElementById('dataAtual').innerText = dataAtual;
}

function mostrarHistorico() {
    const historicoList = document.getElementById('historicoList');
    historicoList.innerHTML = "";

    const historico = [
        "Venda 1: R$ 1500,00 - 12/01/2024",
        "Venda 2: R$ 1200,00 - 15/01/2024",
        "Venda 3: R$ 1800,00 - 18/01/2024"
    ];

    historico.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        historicoList.appendChild(li);
    });

    document.getElementById('historicoVendas').style.display = 'block';
    esconderOutrasSecoes('historicoVendas');
}

function mostrarResumo() {
    document.getElementById('resumoVendas').style.display = 'block';
    document.getElementById('mediaVendasCard').style.display = 'block';
    esconderOutrasSecoes('resumoVendas');
}

function mostrarProdutos() {
    document.getElementById('produtosCard').style.display = 'block';
    esconderOutrasSecoes('produtosCard');
}

function esconderOutrasSecoes(visivel) {
    const seções = ['resumoVendas', 'mediaVendasCard', 'produtosCard', 'historicoVendas', 'dataAtualCard'];
    seções.forEach(secao => {
        if (secao !== visivel) {
            document.getElementById(secao).style.display = 'none';
        }
    });
}

function sair() {
    window.location.href = "index.html";
}

if (window.location.pathname.includes('dashboard.html')) {
    gerarDados();
}
