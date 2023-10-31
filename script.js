document.addEventListener('DOMContentLoaded', function() {

let paragraph = document.createElement('p');
let text = document.createTextNode('text');

paragraph.style.background = 'red';

paragraph.appendChild(text);

document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('click me');
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener('dblclick', function() {
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode('clicked');
        h1.appendChild(h1Text);
        document.body.appendChild(h1);
    })
})