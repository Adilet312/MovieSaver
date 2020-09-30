// import $ from 'jquery';
import './css/main.scss';


const search = document.querySelector('#search');
const outputDiv = document.querySelector('#output');
const ul = document.createElement('ul');


const searchMovies = async (title) =>{
  const url=`http://www.omdbapi.com/?s=${title}&page=1&apikey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const movies = await response.json();
  let results;
  if(title.length>0){

    results= movies.Search.filter( movie => {
      let regex = new RegExp(`^${title}`,'gi');
      return movie.Title.match(regex);
    });
  }
  else{
    results = [];
    outputDiv.innerHTML = '';
  }
  showMovies(results);
}

search.addEventListener('input',() => searchMovies(search.value));

function showMovies(result){

  if(result.length > 0){
    let output  = result.map( movie =>`
      <li>
        <a href="#">
          <img src="${movie.Poster}">
          <span class="addTo">+</span>
          <h4>${movie.Title}</h4>
          <p>Holiday movies offer us a glimpse into how the world is could be, often in sharp contrast to our lives as they are. In that way, the annual act of viewing them is like a religious ritual.</p>
        </a>
      </li>
    `).join('');
    ul.innerHTML = output;
    outputDiv.appendChild(ul);
  }
  /*Add item into local storage*/
  const item = document.querySelector('.addTo');
  item.addEventListener('click',function(event){
    const title = event.target.parentNode.children[2];
    console.log("title",title.textContent);
    localStorage.setItem('movieTitle',title.innerText);
    const movieTitle = localStorage.getItem('movieTitle');
    console.log(movieTitle)
  })
}




/*indexDB*/
/*window.onload = () =>{
  let request = window.indexDB.open('movieDB',1);
  request.onerror = function(){
    console.log('DB is failed to open');
  }
  request.onsuccess = function(){
    console.log('DB is  opened successfully');
    request.result;
  }
}
*/

/*
Calling API with AJAX
let request = new XMLHttpRequest();
function searchMovies(title){
  const url=`http://www.omdbapi.com/?s=${title}&page=1&apikey=${process.env.API_KEY}`;
  request.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
      const response = JSON.parse(this.responseText);
      const result = response.Search.filter( movie =>{
            let regex = new RegExp(`^${title}`,'gi');
            return movie.Title.match(regex);
      });

      title ? showMovies(result) : showMovies([]);
    }
  }
  request.open('GET',url,true);
  request.send();
}
*/

















// let elements = document.querySelectorAll('.blocks');
// let containers = document.querySelectorAll('.containers');
// elements.forEach(element => {
//   element.addEventListener('dragstart',function(){
//     element.classList.add('dragging');
//   })
//   element.addEventListener('dragend',function(){
//     element.classList.remove('dragging');
//   })
// })
//
// containers.forEach( container => {
//   container.addEventListener('dragover',function(){
//     let current = document.querySelector('.dragging');
//     container.appendChild(current);
//   })
// })
