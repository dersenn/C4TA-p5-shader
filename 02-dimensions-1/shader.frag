// this is mandatory
#ifdef GL_ES
precision mediump float;
#endif

// the same as in the vertex shader. needs to be declared here too.
varying vec2 vTexCoord;

// Per frame info from sketch.js

uniform vec2 u_position;
uniform vec2 u_dimension;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


// do shit with the pixel
void main() {
  // position of the pixel. pixel divided by resolution to get normalized value. not used here.
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  // always normalize values coming from p5.
  // vec2 pos = u_position.xy / u_resolution.xy;
  vec2 pos = u_mouse.xy / u_resolution.xy;
  vec2 dim = u_dimension.xy / u_resolution.xy;

  // if st is bigger than pos return 1.0 else 0.0
  float r = step(pos.x, st.x);
  float g = step(pos.y, st.y);

  vec3 color = vec3(r, g, 0.0);

  // this can only exist once! it colors the pixel.
  gl_FragColor = vec4(color, 1.0);

}