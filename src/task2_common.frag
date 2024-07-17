//============================================================================
// PROJECT ID: 02
//
// GROUP NUMBER: 03
//
// STUDENT NAME: CHEN ZHIAN
// NUS User ID.: t0933479
//
// STUDENT NAME: LI YIXIN
// NUS User ID.: t0933820
//
// STUDENT NAME: OUYANG ANNAN
// NUS User ID.: t0933394
//
// COMMENTS TO GRADER:
//
//============================================================================


// FRAGMENT SHADER FOR SHADERTOY
// Run this at https://www.shadertoy.com/new
// See documentation at https://www.shadertoy.com/howto

// Your browser must support WebGL 2.0.
// Check your browser at https://webglreport.com/?v=2


//============================================================================
// Constants.
//============================================================================

// Constants for the scene objects.
// BufferA layout:
//   lights
//   materials
//   planes
//   spheres
//   triangles
//
// BufferB layout:
//   camera
const int NUM_LIGHTS    = 3;
const int NUM_MATERIALS = 13;
const int NUM_PLANES    = 5;
const int NUM_SPHERES   = 7;
const int NUM_TRIANGLES = 279;

const int LIGHTS_UNIT    = 3;
const int MATERIALS_UNIT = 4;
const int PLANES_UNIT    = 1;
const int SPHERES_UNIT   = 1;
const int TRIANGLES_UNIT = 3;

const int LIGHTS_OFFSET    = 0;
const int MATERIALS_OFFSET = LIGHTS_OFFSET    + LIGHTS_UNIT    * NUM_LIGHTS;
const int PLANES_OFFSET    = MATERIALS_OFFSET + MATERIALS_UNIT * NUM_MATERIALS;
const int SPHERES_OFFSET   = PLANES_OFFSET    + PLANES_UNIT    * NUM_PLANES;
const int TRIANGLES_OFFSET = SPHERES_OFFSET   + SPHERES_UNIT   * NUM_SPHERES;

const vec3 AABB_MIN = vec3(-0.8, -0.1, -0.8);
const vec3 AABB_MAX = vec3( 0.9,  3.9,  0.7);
