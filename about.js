console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const rubberDuck = document.querySelector('img');

function duckGreeting () {
	alert("Looking good. Quack!")
}

rubberDuck.addEventListener('mouseover', duckGreeting);