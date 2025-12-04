//Cadastrar Serviços
document.getElementById('formServicos').addEventListener('submit', function (form) {
    form.preventDefault();

    let formData = new FormData(this);

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/servicos/listar_servico.php', {
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

// Listar os Serviços

let lista = document.getElementById('servico');
let servico = {};

function getServicos() {
    isLoading = true;

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/servicos/listar_servico.php',
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

            response.servicos.forEach(serv => {
                let col = document.createElement('div');
                col.classList.add('col-sm-12', 'col-md-6', 'col-xl-3', 'd-flex', 'justify-content-center')

                let card = document.createElement('div');
                card.classList.add('cards', 'my-3', 'custom-width');

                let excluir = document.createElement('div');
                excluir.classList.add('excluir');
                excluir.innerText = "X";
                excluir.dataset.id = serv.id;
                excluir.addEventListener('click', () => {
                    let id = excluir.dataset.id;

                    let servico_excluido = { id: id };

                    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/servicos/remover_servico_por_id.php", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(servico_excluido)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        });
                        window.location.reload();
                });

                let bola = document.createElement('div');
                bola.classList.add('bola');
                bola.innerText = "$";

                let nome = document.createElement('h5');
                nome.innerText = serv.nome;

                let descricao = document.createElement('p');
                descricao.innerText = serv.descricao;

                let preco = document.createElement('h3');
                preco.innerHTML = "<b>R$</b> " + serv.preco;

                let botao = document.createElement('button');
                botao.classList.add('botao', 'w-100', 'btn');
                botao.innerText = 'Contatar Serviço';

                lista.appendChild(col);

                col.appendChild(card);
                card.appendChild(excluir);
                card.appendChild(bola);
                card.appendChild(nome);
                card.appendChild(descricao);
                card.appendChild(preco);
                card.appendChild(botao);
            });

        })
        .catch(erro => {
            console.log(erro);
        })
        .finally(() => {
            isLoading = false;
        })
}
getServicos();