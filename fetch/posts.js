document.getElementById('formPosts').addEventListener('submit', function (form) {
    form.preventDefault();

    let formData = new FormData(this);

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/atualizacoes/cadastrar_atualizacao.php', {
        method: 'POST',
        body: formData 
    })
        .then()
        .then()
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Ocorreu um erro na comunicação com o servidor: ' + error.message);
        });
        window.location.reload();
});

let lista = document.getElementById('posts');
let posts = {};
let categorias = {
    1: "Blog",
    2: "Notícias",
    3: "Empresa",
    4: "Assuntos Gerais"
};


function getPosts() {
    isLoading = true;

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/atualizacoes/listar_atualizacao.php',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

        .then(response => response.json())
        .then(response => {

            console.log(response);
            response.posts.sort((a, b) => new Date(b.data) - new Date(a.data));

            response.posts.forEach((resp, index) => {
                
                let col = document.createElement('div');
                if (index === 0 ) {
                    col.classList.add('col-sm-12', 'col-lg-8', 'my-4');
                } else {
                    col.classList.add('col-sm-12', 'col-lg-4', 'my-4');
                }

                let card = document.createElement('div');
                card.classList.add('cards', 'card');

                let img = document.createElement('img');
                img.classList.add('card-img-top');
                img.src = resp.imagem;

                let card_body = document.createElement('div');
                card_body.classList.add('card-body');

                let linha = document.createElement('div');
                linha.classList.add('row');

                let data = document.createElement('p');
                data.classList.add('col-6', 'd-flex', 'justify-content-start');
                data.innerText = resp.data;

                let horario = document.createElement('p');
                horario.classList.add('col-6', 'd-flex', 'justify-content-end');
                horario.innerText = resp.horario;

                let categoria = document.createElement('p');
                categoria.classList.add('category');
                categoria.innerText = categorias[resp.categoria];

                let conteudo = document.createElement('p');
                conteudo.classList.add('card-text');
                conteudo.textContent = resp.conteudo;
                
                let visu = document.createElement('div');
                visu.classList.add('d-flex', 'justify-content-end');

                let olho = document.createElement('p');
                olho.innerText = `👁️`;

                let num_visualizacao = document.createElement('p');
                num_visualizacao.classList.add('m-1');
                num_visualizacao.innerText = resp.visualizacao;

                lista.appendChild(col);

                col.appendChild(card);
                card.appendChild(img);
                card.appendChild(card_body);
                card_body.appendChild(linha);
                linha.appendChild(data);
                linha.appendChild(horario);
                card_body.appendChild(categoria);
                card_body.appendChild(conteudo);
                card_body.appendChild(visu);
                visu.appendChild(olho);
                visu.appendChild(num_visualizacao);
            });

        })
        .catch(erro => {
            console.log(erro);
        })
        .finally(() => {
            isLoading = false;
        })
}
getPosts();