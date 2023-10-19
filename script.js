
  
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);



const name = prompt("Who... are you?");
console.log(name);

function onButtonClick() {
  alert(`hello ${name}`);
}