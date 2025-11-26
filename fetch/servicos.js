// Listar os Serviços

//selecionando a div onde a lista sera exibida
let lista = document.getElementById('lista');
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

            response.funcionarios.forEach(fun => {
                // montando o visual da lista
                let row = document.createElement('div');
                row.classList.add('row');
                row.setAttribute('id', fun.CodFun);
                row.setAttribute('onclick', 'alert("Funcionario ' + fun.Nome + ' selecionado de id ' + fun.CodFun + '")');

                let col = document.createElement('div');
                col.classList.add('col-12');

                let p = document.createElement('p');
                p.innerText = fun.CodFun + ' - ' + fun.Nome;

                col.appendChild(p);
                row.appendChild(col);
                lista.appendChild(row);
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