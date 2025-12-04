let lista = document.getElementById('noticias');
let categorias = {
    1: "Tecnologia e Sociedade",
    2: "Ciência e Inovação",
    3: "Produtos e Gadgets",
    4: "Mercados e Negócios Tech"
};

function getNoticias() {
    fetch('http://localhost/Trabalho-Blog-2DS/CRUD/listar_noticia.php', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(response => {

            console.log(response);

            response.noticias.forEach(noticia => {

                let excluir = document.createElement('div');
                excluir.classList.add('excluir');
                excluir.innerText = "X";
                excluir.dataset.id = noticia.id;

                excluir.addEventListener('click', () => {
                    let id = excluir.dataset.id;
                    let noticia_excluida = { id: id };

                    fetch("http://localhost/Trabalho-Blog-2DS/CRUD/remover_noticia_por_id.php", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(noticia_excluida)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            window.location.reload();
                        });
                });

                // Montagem dos cards
                let col = document.createElement('div');
                col.classList.add('col-sm-12', 'col-lg-4', 'my-3');

                let card = document.createElement('div');
                card.classList.add('news-card');

                let divImg = document.createElement('div');
                divImg.classList.add('news-img');

                let img = document.createElement('img');
                img.src = noticia.imagem;
                img.alt = noticia.titulo;

                let info = document.createElement('div');
                info.classList.add('news-info');

                let categoria = document.createElement('span');
                categoria.classList.add('categoria');
                categoria.innerText = categorias[noticia.categoria];

                let titulo = document.createElement('h3');
                titulo.classList.add('titulo');
                titulo.innerHTML = noticia.titulo;

                let autor = document.createElement('p');
                autor.classList.add('autor');
                autor.innerText = noticia.autor;

                let data = document.createElement('p');
                data.classList.add('data');
                data.innerText = `Publicado em: ${noticia.data_pub}`;

                let btn = document.createElement('a');
                btn.classList.add('ler-btn');
                btn.innerText = "Ler mais";
                btn.href = `pag_noticias.html?id=${noticia.id}`;

                lista.appendChild(col);
                col.appendChild(card);

                card.appendChild(divImg);
                divImg.appendChild(img);

                card.appendChild(excluir); 

                card.appendChild(info);
                info.appendChild(data);
                info.appendChild(categoria);
                info.appendChild(titulo);
                info.appendChild(autor);
                info.appendChild(btn);
            });
        })
        .catch(erro => {
            console.log(erro);
        });
}

getNoticias();
