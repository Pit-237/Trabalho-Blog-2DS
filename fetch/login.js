// FAZER LOGIN
document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio tradicional

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/login/login_conta.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // importante para sessões
        body: JSON.stringify({ email, senha })
    })
    .then(res => res.json())
    .then(resposta => {
        if (resposta.status === "ok") {
            console.log("Resposta do PHP:", resposta);
            // login certo → redireciona
            window.location.href = "http://localhost/Trabalho-Blog-2DS/frontend/Front_End.HTML";
        } else {
            alert(resposta.msg || "Email ou senha incorretos!");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao conectar com o servidor!");
    });
});
