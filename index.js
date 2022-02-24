const btn = document.querySelector('button');
const p = document.querySelector('p');

const clicked = (e) => {
 if(btn.style.backgroundColor === 'grey'){
   btn.style.backgroundColor = 'red';
   p.textContent =" Getting a hold of javascript";
   
 }else{
    btn.style.backgroundColor = 'grey';
    p.textContent = " ";
 }
};

btn.addEventListener('click', clicked);





