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


  float myX = st.x * (u_mouse.x / u_resolution.x);
  float myY = st.y * (u_mouse.y / u_resolution.y);

  // float myX = float smoothstep(float 0.0, float u_resolution.x, float u_mouse.x);

  // if (u_mouse.x == 0) {
  //   myX = 0;
  //   myY = 0;
  // };

  // this can only exist once!
  // it colors the pixel.
  gl_FragColor = vec4(myX , myY, 0.0 ,1.0);

}
