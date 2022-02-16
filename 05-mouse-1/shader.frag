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

// random function ex book of shaders. pseudo random.s
float random(vec2 st) {
  return fract(
    sin(
      dot(
        st.xy,
        vec2(12.9898,78.233)
      )
    )
    * 43758.5453123
  );
}


// do shit with the pixel
void main() {
  // position of the pixel. pixel divided by resolution to get normalized value.
  vec2 st = (gl_FragCoord.xy / u_resolution.xy);
  vec2 m = (u_mouse.xy / u_resolution.xy);

  float t = u_time * 2.0;

  float dm = distance(m, st);
  float rnd = random(st * t);

  float g;
  float rad = .01 + (((sin(t) + 1.0) * rnd) / 2.0);

  g = smoothstep(0.0, rad, dm);

  vec3 color = vec3(0.0, g, 0.0);

  // this can only exist once! it colors the pixel.
  gl_FragColor = vec4(color, 1.0);

}