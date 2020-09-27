import $ from 'jquery';
import './css/main.scss';
$('#search').keyup(function(){
  let city = $('#search').val();

  // let city = new RegExp(searchArea,'i');
  console.log(city)
  // let city = "Seattle";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response)
    }
  }
  request.open('GET',url,true);
  request.send();
});




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
