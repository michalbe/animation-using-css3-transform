var canvas = document.createElement('div');
       
    canvas.style.border = "solid #000 2px";
    canvas.style.position = "absolute";
    canvas.style.overflow = "hidden";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = 480;
    canvas.style.height = 760;
    
    document.body.appendChild(canvas);
 
    var width = 60,
        height = 100;
    
    var pinguins = [],
        initialPinguins = 100,
        numberOfPinguins = initialPinguins;
    
    while(numberOfPinguins--) {
        var image = document.createElement('img');  
            image.src = 'aa.png'; 
        pinguins[numberOfPinguins] = {
            'image':image,
            'div':document.createElement('div'),
            'actualFrame': 0,
            'left':Math.random()*480,
            'top':Math.random()*760,
            'directionX':  ~~(Math.random() * 2) ? -1 : 1,
            'directionY':  ~~(Math.random() * 2) ? -1 : 1
        };
        
        pinguins[numberOfPinguins].div.style.width = width;
        pinguins[numberOfPinguins].div.style.height = height;
        pinguins[numberOfPinguins].div.style.position = "absolute";
        pinguins[numberOfPinguins].div.style.overflow = "hidden";
        pinguins[numberOfPinguins].div.style.left = 0//Math.random()*480;
        pinguins[numberOfPinguins].div.style.top = 0//Math.random()*760;
        pinguins[numberOfPinguins].div.style.webkitTransform = "translate("+pinguins[numberOfPinguins].left+"px, "+pinguins[numberOfPinguins].top+"px)";
        pinguins[numberOfPinguins].div.appendChild(pinguins[numberOfPinguins].image);
       canvas.appendChild(pinguins[numberOfPinguins].div);
    }
var MainLoop = function(){
    numberOfPinguins = initialPinguins;
    while(numberOfPinguins--) {
        if (pinguins[numberOfPinguins].left<0) pinguins[numberOfPinguins].directionX = 1;
        if (pinguins[numberOfPinguins].left>480) pinguins[numberOfPinguins].directionX = -1;
        if (pinguins[numberOfPinguins].top<0) pinguins[numberOfPinguins].directionY = 1;
        if (pinguins[numberOfPinguins].top>760) pinguins[numberOfPinguins].directionY = -1;
        
        pinguins[numberOfPinguins].left+=pinguins[numberOfPinguins].directionX;
        pinguins[numberOfPinguins].top+=pinguins[numberOfPinguins].directionY;
        //ctx.drawImage(image, 0, height * pinguins[numberOfPinguins].actualFrame, width, height, pinguins[numberOfPinguins].left, pinguins[numberOfPinguins].top, width, height);  
        pinguins[numberOfPinguins].image.style.webkitTransform = "translate(0px, -"+height * pinguins[numberOfPinguins].actualFrame+"px)";
        pinguins[numberOfPinguins].div.style.webkitTransform = "translate("+pinguins[numberOfPinguins].left+"px, "+pinguins[numberOfPinguins].top+"px)";
        //pinguins[numberOfPinguins]-webkit-transform
        pinguins[numberOfPinguins].actualFrame == 3 ? pinguins[numberOfPinguins].actualFrame = 0 : pinguins[numberOfPinguins].actualFrame++;  
    }
    
}

setInterval(MainLoop, 1000/numberOfFrames);