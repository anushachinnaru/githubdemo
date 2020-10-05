const task1= document.querySelector('#task-1');
console.dir(task1);
task1.style.color = 'white';
task1.style.backgroundColor = 'black';

const task12 = document.getElementById('task-1');
task12.style.color = 'white';
task12.style.backgroundColor = 'black';

const task2 = document.querySelector('title');
task2.textContent = "assignment solved";


const task22 = document.title;
document.title ="assignment solved";

const task3 = document.querySelector('h1');
task3.textContent = "assignment solved";


const name1 = document.getElementById('inputId');

const ulelements = document.querySelector('ul');

const lifirst = document.querySelector('li');

const section = document.querySelector('section');

const button = document.querySelector('button');

// button.addEventListener('click' ,  function(){
//     if(section.className == 'red-bg visible'){
//         section.className = 'red-bg invisible';
//     }
//     else {
//         section.className = 'red-bg visible';
//     }
    

// })

button.addEventListener('click' ,  function(){
      section.classList.value="hkhkh";
})


const inputdiv = document.querySelector('.aas');
inputdiv.insertAdjacentHTML('afterend','<p>nlkll</p>');
// section.style.backgroundColor = 'blue';

// section.className = '';





