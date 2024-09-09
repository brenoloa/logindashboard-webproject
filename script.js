function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === "admin" && password === "admin") {
        // Redireciona para o dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
//alert("admin - admin");
