document.getElementById('cadastrar_user').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = new FormData(this);

    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/login/cadastrar_conta.php", {
        method: "POST",
        body: formData 
    })
    .then(() => {
        window.location.href = "http://localhost/Trabalho-Blog-2DS/frontend/login/login.html";
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao conectar com o servidor!");
    });
});