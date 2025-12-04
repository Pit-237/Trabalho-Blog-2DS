document.getElementById('formNoticias').addEventListener('submit', function (form) {
    form.preventDefault();

    let formData = new FormData(this);

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/criar_noticia.php', {
        method: 'POST',
        body: formData
    })
        .then(() => {})
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Ocorreu um erro na comunicação com o servidor: ' + error.message);
        });

    window.location.reload();
});