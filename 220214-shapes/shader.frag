// this is mandatory
#ifdef GL_ES
precision mediump float;
#endif

// Per frame info from the sketch.js
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


// do shit with the pixel
void main() {
  // position of the pixel. pixel divided by resolution to get normalized value.
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec3 color;

  float r, g;
  float b = 0.0;

  if (u_mouse.x / u_resolution.x > .5) {
    r = st.x * (u_mouse.x / u_resolution.x);
  } else {
    r = (0.0);
  }

  g = st.y * (u_mouse.y / u_resolution.y);

  color = vec3(r, g, b);
  // this can only exist once!
  // it colors the pixel.
  gl_FragColor = vec4(color.r , color.g, color.g, 1.0);

}
