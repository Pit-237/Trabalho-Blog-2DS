// CADASTRAR NOVO USUARIO
document.getElementById('cadastrar_user').addEventListener('submit', function (form) {
    form.preventDefault();

    let formData = new formData(this);

    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/login/cadastrar_conta.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
        .then(res => res.json())
        .then(data => {

            if (data.status === "ok" || data.sucesso) {
                window.location.href = "l../frontend/login/login.html";
            } else {
                alert("Erro no cadastro!");
            }

        })
    });
});

// FAZER LOGIN
let formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(form) {
    form.preventDefault(); 

    // Pega os valores do form
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Cria objeto para enviar
    const dados = { email, senha };

    // Faz o fetch
    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // envia a sessão
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(resposta => {
        if (resposta.status === "ok") {
            // Login correto → redireciona
            window.location.href = "pagina_protegida.html";
        } else {
            // Login errado → mostra mensagem
            alert(resposta.msg || "Erro no login!");
        }
    })
    .catch(err => {
        console.error("Erro no fetch:", err);
    });
});
