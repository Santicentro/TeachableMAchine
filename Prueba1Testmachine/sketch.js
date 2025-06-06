// Variable del clasificador
let classifier;
// URL del modelo de Teachable Machine
let imageModelURL = "https://teachablemachine.withgoogle.com/models/yQrQqDKsx/";

// Video
let video;
// Etiqueta de clasificación
let label = "Cargando modelo...";

// Imágenes
let freelife, botellaDeAgua, SB1, iPhone;

// Precarga de modelo e imágenes
function preload() {
  console.log("Cargando modelo...");
  classifier = ml5.imageClassifier(imageModelURL + "model.json", modelLoaded);

  // Cargar imágenes (asegúrate de que están en la carpeta "imagenes/")
  freelife = loadImage("imagenes/Freelife.jpg");
  botellaDeAgua = loadImage("imagenes/botella.jpg");
  SB1 = loadImage("imagenes/Santiago.png");
  iPhone = loadImage("imagenes/iPhone.jpeg");
}

// Confirmación de que el modelo ha sido cargado
function modelLoaded() {
  console.log("Modelo cargado exitosamente!");
}

function setup() {
  createCanvas(640, 480);
  background(255,0,0);
  modelLoaded();

  // Captura de video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
    
  classifyVideo();

}

function draw() {
  background(0);
  
  // Dibujar el video
  image(video, 0, 0, width, height);

  // Dibujar la etiqueta de clasificación en pantalla
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 10);

  // Máquina de estados basada en la clasificación
  if (label === "Freelife") {
    image(freelife, 500, 100, 100, 100);
    print("Detectado: Freelife");

  } else if (label === "Botella de agua") {
    image(botellaDeAgua, 500, 100, 100, 100);
    fill(255, 0, 0, 100);
    rect(0, 0, 640, 480);
    print("Detectado: Botella de agua");

  } else if (label === "Santiago") {
    image(SB1, 500, 100, 100, 100);
    fill(0, 255, 0, 100);
    rect(0, 0, 640, 480);
    print("Detectado: Santiago");

  } else if (label === "iPhone") {
    image(iPhone, 500, 100, 100, 100);
    fill(0, 0, 255, 100);
    rect(0, 0, 640, 480);
    print("Detectado: iPhone");

  } else {
 
  }
}

// Función para clasificar el video
function classifyVideo() {
  classifier.classifyStart(video, gotResult);
  console.log("Video listo, iniciando clasificación...");
}

// Callback cuando se obtiene una clasificación
function gotResult(results) {
  label = results[0].label;


}
