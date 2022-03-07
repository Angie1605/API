'use strict'
const lista = document.getElementById("listPoke");
const fragment = new DocumentFragment;
const url ="https://rickandmortyapi.com/api/character";

const getPersonajes = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const results = data.results;
    let personajes = [];
    //console.log(data.results);S
    for (const i in results) {
      personajes.push(results[i].url);
    }
    return personajes;
  };
  

const datos = await getPersonajes();

datos.forEach(element =>{   
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = element;   
    fragment.appendChild(li);
});

lista.appendChild(fragment);


//tarea buscar otra api y pintarla con fech 
