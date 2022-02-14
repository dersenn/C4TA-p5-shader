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

let shapes = []
let nCols = 5
let nRows = 1

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

  for (let x = 0; x < nCols; x++) {
    for (let y = 0; y < nRows; y++) {
      shapes.push({
        x: zero.x + x*(width/nCols),
        y: zero.y + y*(height/nRows),
        w: width/nCols,
        h: height/nRows
      })
    }
  }
  // console.log(shapes)

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

  for (let i = 0; i < shapes.length; i++) {
    let s = shapes[i]

    theShader.setUniform("u_position", [s.x, s.y]);
    theShader.setUniform("u_dimension", [s.w, s.h]);

    rect(s.x, s.y, s.w, s.h)
  }

}





function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




// my only friend, the end.