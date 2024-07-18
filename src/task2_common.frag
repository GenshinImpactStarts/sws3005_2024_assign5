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
// COMMENTS TO GRADER: This is the common fragment shader which will be included
//                     in all the other fragment shaders by shadertoy.
//
//                     We use multiple passes and this is only a part of tasks2.
//                     There are 1 common file and 4 pass files in total.
//                     The complete project is in the following link:
//                     https://www.shadertoy.com/view/lflcWH
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
//   triangles (front, back, top, bottom, ring, foot)
//
// BufferB layout:
//   camera
const int NUM_LIGHTS    = 3;
const int NUM_MATERIALS = 13;
const int NUM_PLANES    = 1;
const int NUM_SPHERES   = 7;

const int NUM_VERTEX[] = int[](
    210, // front
    162, // back
    114, // top
    93,  // bottom
    96,  // ring
    159  // foot
);

const int LIGHTS_UNIT    = 3;
const int MATERIALS_UNIT = 4;
const int PLANES_UNIT    = 1;
const int SPHERES_UNIT   = 1;

const vec3 AABB_MIN[] = vec3[](
    vec3(-0.46,  1.62, -0.04), // front
    vec3(-0.46,  1.47, -0.25), // back
    vec3(-0.24,  2.85, -0.06), // top
    vec3(-0.46,  0.89, -0.22), // bottom
    vec3(-0.71,  2.50, -0.27), // ring
    vec3(-0.59, -0.02, -0.77)  // foot
);

const vec3 AABB_MAX[] = vec3[](
    vec3(0.59, 3.13,  0.62), // front
    vec3(0.59, 3.39,  0.22), // back
    vec3(0.33, 3.45,  0.56), // top
    vec3(0.59, 2.17,  0.51), // bottom
    vec3(0.84, 3.81, -0.18), // ring
    vec3(0.71, 1.12,  0.45)  // foot
);

const int LIGHTS_OFFSET    = 0;
const int MATERIALS_OFFSET = LIGHTS_OFFSET    + LIGHTS_UNIT    * NUM_LIGHTS;
const int PLANES_OFFSET    = MATERIALS_OFFSET + MATERIALS_UNIT * NUM_MATERIALS;
const int SPHERES_OFFSET   = PLANES_OFFSET    + PLANES_UNIT    * NUM_PLANES;
const int TRIANGLES_OFFSET = SPHERES_OFFSET   + SPHERES_UNIT   * NUM_SPHERES;
