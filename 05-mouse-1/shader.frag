// this is mandatory
#ifdef GL_ES
precision mediump float;
#endif

// the same as in the vertex shader. needs to be declared here too.
varying vec2 vTexCoord;

// Per frame info from sketch.js
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

// float rand(float i, float o) = {
//   float o;
//   o = fract(sin(x)* o);
//   return o;
// }


// do shit with the pixel
void main() {
  // position of the pixel. pixel divided by resolution to get normalized value.
  vec2 st = (gl_FragCoord.xy / u_resolution.xy);
  vec2 m = (u_mouse.xy / u_resolution.xy);

  float dm = distance(m, st);

  float g;
  float rad = .02;
  vec2 part = vec2(0.0, 0.1);

  if (dm < rad) {
    g = 0.0;
  } else {
    // g = smoothstep(0.0, .1, d);
    g = step(0.0, dm);
  }

  vec3 color = vec3(0.0, g, 0.0);

  // this can only exist once! it colors the pixel.
  gl_FragColor = vec4(color, 1.0);

}