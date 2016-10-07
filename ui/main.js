console.log('Loaded!');

// change the text of the main text of div

var element = document.getElementById('main-text');
    
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
var marginRight = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'; 
}
img.onclick = function() { 
var interval = setInterval(moveRight, 50); 
};

