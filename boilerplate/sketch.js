// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Shader Vars
let theShader

function preload() {
  theShader = loadShader('shader.vert', 'shader.frag')
}


// p5 Setup
function setup() {
  // setup canvas in container
  let canvas = createCanvas(canW, canH, WEBGL)
  canvas.parent(container)

  // disable scaling for retina etc.
  pixelDensity(1)

  noStroke()
}

// p5 Draw
function draw() {
  background(255)

  // send per frame info of sketch to shader.frag
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0); // we divide millis by 1000 to convert it to seconds
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]); // we flip Y so it's oriented properly in our shader

  // this be like fill
  shader(theShader)

  // the shape to draw onto.
  // but it doesn't really affect the shader.
  // guess i must define this otherwise...
  rect(0, 0, width, height)
}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.