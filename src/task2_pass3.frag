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
// COMMENTS TO GRADER: This is the pass 3 shader which will output to the CubeA
//                     in shadertoy. CubeA is the cube texture that will be used
//                     as the environment map.
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

float random ( vec3 p ) {
    return fract( sin( dot( p, vec3( 12.9898, 78.233, 45.543 ) ) ) * 43758.5453123 );
}

void mainCubemap( out vec4 fragColor, in vec2 fragCoord, in vec3 rayOri, in vec3 rayDir )
{
    float mask = step(0.998, random(rayDir));
    fragColor = vec4(mask, mask, mask, 1.0);
}
