const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [2048, 2048]
};

const sketch = () => {
    return ({
        context,
        width,
        height
    }) => {
        // BACKGROUND
        context.fillStyle = 'blue';
        context.fillRect(0, 0, width, height);

        //BODY
        context.beginPath();
        context.arc(width / 2, height / 2, 600, 0, 2 * Math.PI, false)
        context.fillStyle = '#FF7D85';
        context.fill();
        context.lineWidth = 10;
        context.stroke();

        // left arm
        context.beginPath();
        context.arc(width * .22, height / 2, 175, Math.PI / 2, 3 / 2 * Math.PI, false)
        context.fill();
        context.stroke();


        // right arm
        context.beginPath();
        context.arc(width * .78, height / 2, 175, 3 / 2 * Math.PI, Math.PI / 2, false)
        context.fill();
        context.stroke();


        //EYES

        // #1st
        context.fillStyle = '#0263A9';
        context.beginPath();
        context.lineWidth = 15;
        context.ellipse(width * .42, height * .4, 175, 80, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.stroke();

        context.beginPath();
        context.ellipse(width * .58, height * .4, 175, 80, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.stroke();
        // Black layer
        context.fillStyle = 'black';
        context.beginPath();
        context.lineWidth = 15;
        context.ellipse(width * .42, height * .38, 150, 80, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();

        context.beginPath();
        context.ellipse(width * .58, height * .38, 150, 80, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();

        // White layer
        context.fillStyle = 'white';
        context.beginPath();
        context.lineWidth = 15;
        context.ellipse(width * .42, height * .37, 110, 60, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();

        context.beginPath();
        context.ellipse(width * .58, height * .37, 110, 60, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();

        // CHEEKS
        context.fillStyle = '#FF4A5C';
        context.beginPath();
        context.ellipse(width * .32, height * .46, 50, 75, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();

        context.beginPath();
        context.ellipse(width * .68, height * .46, 50, 75, Math.PI / 2, 0, 2 * Math.PI)
        context.fill();
        context.closePath();


        // MOUTH
        context.beginPath();
        context.strokeStyle = 'black';
        context.arc(width / 2, height * .48, 50, 0, 2 * Math.PI / 2, false)
        context.stroke();
    };
};

canvasSketch(sketch, settings);