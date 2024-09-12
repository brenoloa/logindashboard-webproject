function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica de validação simples
    if (username === "admin" && password === "admin") {
        // Redireciona para o dashboard
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
// Função para o botão 'Ícone'
function mostrarIcone() {
    const contentArea = document.getElementById('content'); // Área onde o conteúdo é exibido
    contentArea.innerHTML = `
        <h2>Seção Ícone</h2>
        <p>Este é o conteúdo exibido ao clicar no botão 'Ícone'.</p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const suporteIcon = document.querySelector('a[onclick="mostrarSuporte()"]');
    const outrosIcons = document.querySelectorAll('a[onclick^="mostrar"]'); // Seleciona todos os ícones que começam com "mostrar"

    const dashboardContainer = document.getElementById('dashboardContent');

    // Guardar o conteúdo original da dashboard
    //const dashboardOriginal = dashboardContainer.innerHTML;

   // Função para restaurar o conteúdo original da dashboard
    function restaurarDashboard() {
        dashboardContainer.innerHTML = dashboardOriginal;
    }

    // Função para esconder suporte e exibir dashboard original ao clicar em outro ícone
    function esconderSuporte() {
        restaurarDashboard();  // Restaura a dashboard original
    }

    // Adicionar o evento de clique para cada ícone que não seja o suporte
    outrosIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            esconderSuporte();  // Chama a função que restaura o conteúdo original
        });
    });

    // Adicionar o evento de clique para o ícone de Suporte Técnico
    suporteIcon.addEventListener('click', function() {
        // Substituir o conteúdo da dashboard pelo chat do suporte
        dashboardContainer.innerHTML = `
            <div class="chat-card">
                <h3>Suporte Técnico</h3>
                <div class="chat-box">
                    <p><strong>Suporte:</strong> Olá! Como posso ajudar?</p>
                    <p><strong>Você:</strong> Preciso de ajuda com a dashboard.</p>
                    <p><strong>Suporte:</strong> Claro, com o que exatamente você precisa?</p>
                    <p><strong>Você:</strong> Como adiciono novos usuários?</p>
                    <p><strong>Suporte:</strong> Para adicionar novos usuários, vá até a aba 'Usuários' no menu lateral.</p>
                </div>
                <textarea placeholder="Digite sua mensagem..."></textarea>
            </div>
        `;
    });
});
