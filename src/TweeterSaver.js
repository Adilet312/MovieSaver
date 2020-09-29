// import $ from 'jquery';
import './css/main.scss';


const search = document.querySelector('#search');
const outputDiv = document.querySelector('#output');
const searchMovies = async (title) =>{
  const url=`http://www.omdbapi.com/?s=${title}&page=1&apikey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const movies = await response.json();
  let result = movies.Search.filter( movie => {
    let regex = new RegExp(`^${title}`,'gi');
    return movie.Title.match(regex);
  });
  showMovies(result);
}
search.addEventListener('input',() => searchMovies(search.value));

function showMovies(result){
  let ul = document.createElement('ul');
  if(result.length > 0){
    let output  = result.map( movie =>`
      <li>
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}">
        <p>Holiday movies offer us a glimpse into how the world is could be, often in sharp contrast to our lives as they are. In that way, the annual act of viewing them is like a religious ritual.</p>
      </li>
    `).join('');
    ul.innerHTML = output;
    outputDiv.appendChild(ul);
  }
  else{
    ul.innerHTML = '';
  }
}
// function showMovies(result){
//   result.forEach(movie =>{
//     let li  = document.createElement('li');
//     let h2  = document.createElement('h2');
//     h2.innerText = movie.Title;
//     let img = document.createElement('img');
//     img.src = movie.Poster;
//     li.appendChild(h2);
//     li.appendChild(img);
//     output.appendChild(li);
//   })
// }


















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
