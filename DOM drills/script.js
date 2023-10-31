

    let div = document.createElement('div');

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('this is a h1');

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('this is a h2');
    
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('this is a h3');
    
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('this is a h4');
    
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('this is a h5');
    
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('this is a h6');
    
    let randcolor;

    let listLength = 1;

    let listItem;
    let listText;
    
    const colors = ['cyan', 'purple', 'red', 'black', 'red', 'green', 'yellow', 'orange'];

addEventListener('DOMContentLoaded', function(){

    div.className = 'header-container';

    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';
    
    h1.appendChild(h1Text);
    div.appendChild(h1);

    h2.appendChild(h2Text);
    div.appendChild(h2);
    
    h3.appendChild(h3Text);
    div.appendChild(h3);

    h4.appendChild(h4Text);
    div.appendChild(h4);

    h5.appendChild(h5Text);
    div.appendChild(h5);

    h6.appendChild(h6Text);
    div.appendChild(h6);

    document.body.appendChild(div);

});

addEventListener("dblclick", function(){

    if(!(this.event.target.className == 'h1' || this.event.target.className == 'h2' || this.event.target.className == 'h3' || this.event.target.className == 'h4' || this.event.target.className == 'h5' || this.event.target.className == 'h6'))
        return;
    randcolor = colors[Math.floor(Math.random()  * 9)];
    document.getElementsByClassName(event.target.className)[0].style.color = randcolor;

});

addEventListener("click", function(){

    if(this.event.target.className != 'button')
        return;

    listItem = document.createElement('li')
    listText = document.createTextNode('This is list item ' + listLength);
        
    listItem.className = "li";

    listItem.appendChild(listText);

    document.body.appendChild(listItem);

    listLength++;
});

addEventListener('click', function(){

    if(this.event.target.className != 'li')
        return;

    randcolor = colors[Math.floor(Math.random()  * 9)];

    this.event.target.style.color = randcolor;
});

addEventListener('dblclick', function(){

    if(this.event.target.className != 'li')
        return;

    this.event.target.remove(); 
})