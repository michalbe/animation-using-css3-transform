var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    
    document.body.appendChild(canvas);
    
    canvas.width = 480;
    canvas.height = 760;
    canvas.style.border = "solid #000 2px";
    
    var image = document.createElement('img');  
    image.src = 'aa.png';  
    width = 60;
    height = 100;
    
    var pinguins = [],
        initialPinguins = 100,
        numberOfPinguins = initialPinguins;
    
    while(numberOfPinguins--) {
        pinguins[numberOfPinguins] = {
            'actualFrame': 0,
            'left': Math.random()*480,
            'top':Math.random()*760,
            'directionX':  ~~(Math.random() * 2) ? -1 : 1,
            'directionY':  ~~(Math.random() * 2) ? -1 : 1
        };
       
    }
var MainLoop = function(){
    ctx.fillStyle = '#fff';
    ctx.rect(0, 0, 480, 760);
    ctx.fill();
    
    numberOfPinguins = initialPinguins;
    while(numberOfPinguins--) {
        if (pinguins[numberOfPinguins].left<0) pinguins[numberOfPinguins].directionX = 1;
        if (pinguins[numberOfPinguins].left>480) pinguins[numberOfPinguins].directionX = -1;
        if (pinguins[numberOfPinguins].top<0) pinguins[numberOfPinguins].directionY = 1;
        if (pinguins[numberOfPinguins].top>760) pinguins[numberOfPinguins].directionY = -1;
        
        pinguins[numberOfPinguins].left+=pinguins[numberOfPinguins].directionX;
        pinguins[numberOfPinguins].top+=pinguins[numberOfPinguins].directionY;
        ctx.drawImage(image, 0, height * pinguins[numberOfPinguins].actualFrame, width, height, pinguins[numberOfPinguins].left, pinguins[numberOfPinguins].top, width, height);  
        pinguins[numberOfPinguins].actualFrame == 3 ? pinguins[numberOfPinguins].actualFrame = 0 : pinguins[numberOfPinguins].actualFrame++;  
    }
    
}

setInterval(MainLoop, 1000/numberOfFrames);