function _(selector) {
    return document.querySelector(selector);
}

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("canvas-wrapper");
    background(255);

}

function mouseDragged() {
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if (document.getElementById("pen-pencil").checked) {
        line(pmouseX, pmouseY, mouseX, mouseY);
        cPush();
    } else if (document.getElementById("pen-brush").checked) {
        ellipse(mouseX, mouseY, size, size);
    } else if (document.getElementById("pen-erase").checked) {
        rect(mouseX, mouseY, size, size);
        fill();
    }

}

function resetCanvas() {
    background(255);
}

_("#save-canvas").addEventListener("click", function() {
    saveCanvas(canvas, "sketch", "png");
});