var canvas,
    context,
    paint = false;

window.onload = function() {

    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    let    width = canvas.width = 800,
        height = canvas.height = 600;

    canvas.addEventListener('mousedown', StartPaint, false);
    canvas.addEventListener('mousemove', MovePaint, false);
    canvas.addEventListener('mouseup', StopPaint, false);


    
}

function StartPaint() {
    paint = true;
    Draw(event.pageX-this.offsetLeft, event.pageY-this.offsetTop);
}

function MovePaint() {
    if(paint)
        Draw(event.pageX-this.offsetLeft, event.pageY-this.offsetTop);
}

function StopPaint() {
    paint = false;
}

function Draw(width,height) {
    context.beginPath();
    context.arc(width,height, 5, 0, 2 * Math.PI, false);
    context.fill();
}