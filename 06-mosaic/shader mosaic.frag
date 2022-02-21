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

// random function ex book of shaders. pseudo random.
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

  st *= 10.0; // Scale the coordinate system by 10
  vec2 ipos = floor(st);  // get the integer coords
  vec2 fpos = fract(st);  // get the fractional coords
  // Combining these two values - the integer part and the fractional part of the coordinate - will allow you to mix variation and order.

  // Assign a random value based on the integer coord
  vec3 color = vec3(random(ipos));

  // Uncomment to see the subdivided grid
  // color = vec3(fpos, 0.0);

  // this can only exist once! it colors the pixel.
  gl_FragColor = vec4(color, 1.0);

}