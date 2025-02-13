let classifier;
let img;
let imgA;
let imgB;
let imgC;
let label;
let confidence;
//copiar modelo de teachable machine en esta variable
let ImageModelURL = "https://teachablemachine.withgoogle.com/models/yQrQqDKsx/";

function preload() {

    classifier = ml5.imageClassifier(ImageModelURL + "model.json");
    img = loadImage("image/freelife.jpg");
    imgA = loadImage("image/iPhone.jpeg");
    imgB= loadImage("image/botella.jpg");
    imgC= loadImage("image/Santiago.png");

  }

function setup() {

    createCanvas(800, 480);
    background(255,0,0);
  
    image(img,0,0, 800, 480);
    classifier.classify(img, gotResult);


  }
  
  function draw() {
    
    textSize(20);
    fill(255);
    stroke(0);
    strokeWeight(4);

    text("Presiona una tecla de la máquina de estados para cambiar de clasificación", 10,30);
    if (keyIsPressed === true) {
        if (key === 'w') {
            classifier.classify(img, gotResult);
            image(img,0,0, 800, 480);
        } else if (key === 's') {
            classifier.classify(imgA, gotResult);
            image(imgA,0,0, 800, 480);
        } else if (key === 'a') {
          classifier.classify(imgA, gotResult);
            image(imgB,0,0, 800, 480);
        } else if (key === 'd') {
          classifier.classify(imgA, gotResult);
            image(imgC,0,0, 800, 480);
         
        }
      }
  }


// Callback function for when classification has finished
function gotResult(results) {
    // The results are in an array ordered by confidence
    console.log(results);
    // Display the results on the canvas
    fill(255,0,0);
    stroke(0);
    textSize(30);

    label = "Label: " + results[0].label;
    confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
    text(label, 10, 360);
    text(confidence, 10, 400);
  
  }