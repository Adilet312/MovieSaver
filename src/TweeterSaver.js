import './css/Tabs.css';
let elements = document.querySelectorAll('.blocks');
let containers = document.querySelectorAll('.containers');
elements.forEach(element => {
  element.addEventListener('dragstart',function(e){
    element.classList.add('dragging');
  })
  element.addEventListener('dragend',function(e){
    element.classList.remove('dragging');
  })
})

containers.forEach( container => {
  container.addEventListener('dragover',function(){
    let current = document.querySelector('.dragging');
    container.appendChild(current);
  })
})
