var surface;
var happy;
var angle = 0;

function drawCanvas() {

    // Get our Canvas element
    //
    surface = document.getElementById("myCanvas");

    if (surface.getContext) {

        // If Canvas is supported, load the image
        //
        happy = new Image();
        happy.src = "/image/wu.yun.liu.qi.jpg";
        happy.onload = loadingComplete;
    }
}

function loadingComplete(e) {

    surface.height = happy.height;
    surface.width = happy.width;

    // When the image has loaded begin the loop
    //
    setInterval(loop, 166);
}

/// Each loop we rotate the image
///
function loop() {
    // Grab the context
    //
    var surfaceContext = surface.getContext('2d');

    // Save the current context
    //
    surfaceContext.save();

    // Translate to the center point of our image
    //
    surfaceContext.translate(happy.width * 0.5, happy.height * 0.5);

    // Perform the rotation
    //
    surfaceContext.rotate(DegToRad(angle));

    // Translate back to the top left of our image
    //
    surfaceContext.translate(-happy.width * 0.5, -happy.height * 0.5);

    // Finally we draw the image
    //
    surfaceContext.drawImage(happy, 0, 0);

    // And restore the context ready for the next loop
    //
    surfaceContext.restore();

    // Increment our rotation angle
    //
    angle++;
}

function DegToRad(d) {

    // Converts degrees to radians
    //
    return d * 0.0174532925199432957;
}