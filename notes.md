DOM notes

DOM is an object that models HTML documents

document.createElement('tag');       \\div p img h1 etc...
document.createTextNode('Some text');

document.body.appendChild('someElement');
document.body.insertBefore('someElement');
document.body.removeChild('someElement');
someElement.remove();


let paragraph = document.createElement('p');
let text = document.createTextNode('text');
paragraph.appendChild(text);


workflow for DOM

    1. create element
    2. modify element
    3. insert element to document
    

getting elements
    document.getElementById('id-name');
    document.getElementsByClassName('class-name);
    

DOM ONLY WORKS AFTER HTML HAS fully LOADED

document.addEventListener('DOMContentLoaded', function()){
    DOM code
}