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
  // position of the pixel. pixel divided by resolution to get normalized value.
  vec2 st = (gl_FragCoord.xy / u_resolution.xy) + u_mouse / 4.0;

  // always normalize values coming from p5.
  vec2 pos = u_position.xy / u_resolution.xy;
  // vec2 pos = u_mouse.xy / u_resolution.xy;
  vec2 dim = u_dimension.xy / u_resolution.xy;


  // vec4 rect = vec4(pos.x, pos.y, pos.xy + dim.xy);
  vec4 rect = vec4(0.2, 0.3, 0.4, 0.5);
  vec2 hv = step(rect.xy, st) * step(st, rect.zw);
  float onOff = hv.x * hv.y;



  // vec3 color = vec3(r, g, 0.0);

  // this can only exist once! it colors the pixel.
  gl_FragColor = mix(vec4(0,0,0,0), vec4(1,0,0,0), onOff);

}