/* 
   ? 1) DOM Manipulation
*/

function changeContent() {
   let container = document.querySelector('.content');
   container.innerHTML = 'Your content has changed';
}

/* 
   ? 2) Click Counter
*/

function countClicks() {
   let container = document.querySelector('.counter');
   let val = parseInt(container.textContent);
   container.innerHTML = val + 1;
}

/* 
   ? 3) Image Switcher
*/
let img = document.querySelector('img');

function switchToImage1() {
   img.src = 'images/image1.jpg';
}

function switchToImage2() {
   img.src = 'images/image2.jpg';
}

/* 
   ? 4) Ajax
*/

function fetchData() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
}

fetchData();
