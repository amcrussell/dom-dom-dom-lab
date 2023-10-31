

let button = document.createElement('button');
let buttonText = document.createTextNode('Click to create a square.');

let div = document.createElement('div');

let squareNum = 1;

button.className = 'button';

button.appendChild(buttonText);
div.appendChild(button);
document.body.appendChild(div);

addEventListener('click', function(){

    
    if(event.target.className != 'button')
        return;

    let square = document.createElement('div');


    square.className = 'square';
    square.id = squareNum;

    this.document.body.appendChild(square);

    squareNum++;
});

addEventListener('mouseover', function(){

    if(!['square','//squareText'].includes(this.event.target.className))
        return;

    let c = document.getElementById(event.target.id);

    let textPush = document.createElement('p');
    let text = document.createTextNode(event.target.id);

    textPush.className = 'squareText';

    textPush.appendChild(text);

    c.appendChild(textPush);
});

addEventListener('mouseout', function(){

    if(!['square','//squareText'].includes(this.event.target.className))
        return;

    let c = document.getElementById(event.target.id);


    c.removeChild(event.target.childNodes[0]);
});

addEventListener('click', function(){

    if(this.event.target.className != 'square')
        return;
    this.event.target.style.backgroundColor  = "#"+(Math.floor(Math.random() * 255)).toString(16)+(Math.floor(Math.random() * 255)).toString(16)+(Math.floor(Math.random() * 255)).toString(16);
});

addEventListener('dblclick', function(){
    
    if(!['square','//squareText'].includes(this.event.target.className))
        return;

        

    if(!(this.event.target.id % 2)){
        let squareList = this.document.getElementsByClassName('square');
        
        for(let c=Number(this.event.target.id) + 1 ; c <= squareList.length + 1 ; c++){
            if(this.document.getElementById(c) != null){
                document.getElementById(c).remove();
                return
            }else if(c == squareList.length+1)
                this.alert('no more0');

        }


    }else{
        for(let c = Number(this.event.target.id)-1; c >= 0; c--){
            if( this.document.getElementById(c) != null){
                document.getElementById(c).remove();
                return;
            }else if(c == 0)
                this.alert('no more0');

        }

    }

})