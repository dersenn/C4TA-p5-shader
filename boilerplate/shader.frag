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
  // position of the pixel. pixel divided by resolution.
  vec2 st = gl_FragCoord.xy / u_resolution.xy; 

  // this can only exist once!
  // it colors the pixel.
  float myX = st.x * (u_mouse.x / u_resolution.x);
  float myY = st.y * (u_mouse.y / u_resolution.y);


  gl_FragColor = vec4(myX , myY, 0.0 ,1.0);

}
