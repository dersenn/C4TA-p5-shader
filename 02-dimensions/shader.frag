// this is mandatory
#ifdef GL_ES
precision mediump float;
#endif

// the same as in the vertex shader. needs to be declared here too.
varying vec2 vTexCoord;


// do shit with the pixel
void main() {
  // position of the pixel. pixel divided by resolution to get normalized value. not used here.
  // vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec2 coord = vTexCoord;

  coord *= 10.0; // multiply by number of rows/cols

  coord = fract(coord); // only use fractal part of the coords.

  // this can only exist once! it colors the pixel.
  gl_FragColor = vec4(coord, 0.5, 1.0);

}
