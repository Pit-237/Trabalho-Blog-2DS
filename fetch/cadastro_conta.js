document.getElementById('cadastrar_user').addEventListener('submit', function(e) {
    e.preventDefault(); // evita o envio tradicional

    const formData = new FormData(this);

    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/login/cadastrar_conta.php", {
        method: "POST",
        body: formData // envia como POST normal
    })
    .then(() => {
        // redireciona manualmente, pois o PHP não retorna JSON
        window.location.href = "http://localhost/Trabalho-Blog-2DS/frontend/login/login.html";
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao conectar com o servidor!");
    });
});