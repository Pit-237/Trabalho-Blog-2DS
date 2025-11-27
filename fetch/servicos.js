// Listar os Serviços

//selecionando a div onde a lista sera exibida
let lista = document.getElementById('servico');
let servico = {};

function getServicos() {
    isLoading = true;

    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/listar_servico.php',
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
                // montando o visual da lista
                let col = document.createElement('div');
                col.classList.add('col-sm-12', 'col-md-6', 'col-xl-3')

                let card = document.createElement('div');
                card.classList.add('cards', 'my-3', 'w-75');

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

getServicos(); // Buscar Dados