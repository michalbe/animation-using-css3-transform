var numberOfFrames =  130,
    frameCount=0,
    fps = 0,
    container = document.createElement('div'),
    lastTime;
    
    container.style.position = 'absolute';
    container.style.zIndex = 10000;
    document.body.appendChild(container);
    
    
var MeasureFPS = function(){
    var newTime = new Date();
    var diffTime = Math.ceil((newTime.getTime() - lastTime.getTime()));
    
    if (diffTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = newTime;
    }
    
    var fpsTemp = fps +'/' + numberOfFrames;
    
    container.innerHTML = fpsTemp;
    
    frameCount++;
}
lastTime = new Date();
setInterval(MeasureFPS, 1000/numberOfFrames);