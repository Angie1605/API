'use strict';
const lista = document.getElementById("listEps");
const fragment = new DocumentFragment();
const url ="https://rickandmortyapi.com/api/character";

fetch(url)
.then(response => response.json())
.then(respuesta => 
    {        
        const data = respuesta.results;
        //console.log(data)
        for(const i of data){
            console.log(i.name)
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = i.name;   
            fragment.appendChild(li);
        }
        lista.appendChild(fragment);
    })
.catch(error=>console.log(error))

