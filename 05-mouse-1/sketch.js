// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Shader Vars
let theShader
let theTexture

let zero


function preload() {
  theShader = loadShader('shader.vert', 'shader.frag')
}


// p5 Setup
function setup() {
  // setup canvas in container
  let canvas = createCanvas(canW, canH, WEBGL)
  canvas.parent(container)

  zero = {
    x: -width/2.0,
    y: -height/2.0,
    z: -width/2.0
  }

  // disable scaling for retina etc.
  pixelDensity(1)

  theTexture = createGraphics(width, height, WEBGL)
  theTexture.noStroke()

  noStroke()
}



// p5 Draw
function draw() {
  background(255)

  theTexture.shader(theShader)

  // send per frame info of sketch to shader.frag
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]); // we flip Y so it's oriented properly in our shader

  theTexture.rect(0, 0, width, height);

  // this be like fill
  texture(theTexture)
  rect(zero.x, zero.y, width, height)
}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.