function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

function gerarDados() {
    const totalVendas = Math.floor(Math.random() * 4000) + 1000;
    document.getElementById('totalVendas').innerText = "R$ " + totalVendas;

    const mediaVendas = Math.floor(Math.random() * 400) + 100;
    document.getElementById('mediaVendas').innerText = "R$ " + mediaVendas;

    const produtos = ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E"];
    const produtosVendidos = document.getElementById('produtosVendidos');
    produtosVendidos.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.innerText = produto;
        produtosVendidos.appendChild(li);
    });

    const dataAtual = new Date().toLocaleDateString();
    document.getElementById('dataAtual').innerText = dataAtual;
}

if (window.location.pathname.includes('dashboard.html')) {
    gerarDados();
}
function definirDataAtual() {
    const dataAtual = new Date().toLocaleDateString();
    document.getElementById('dataAtual').innerText = dataAtual;
}

if (window.location.pathname.includes('dashboard.html')) {
    definirDataAtual();
}
function sair() {
    window.location.href = "index.html";
}

if (window.location.pathname.includes('dashboard.html')) {
    definirDataAtual();
}