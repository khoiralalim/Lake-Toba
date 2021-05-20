//Manipulasi DOM

var span = document.getElementsByTagName('span')[0];
span.textContent = 'Reviewer!'; 
span.style.display = 'inline';  

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Other Information</em>'