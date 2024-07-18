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

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

void mainCubemap( out vec4 fragColor, in vec2 fragCoord, in vec3 rayOri, in vec3 rayDir )
{
    int side;
    vec2 coord;

    float absX = abs(rayDir.x);
    float absY = abs(rayDir.y);
    float absZ = abs(rayDir.z);

    if ( absX > absY && absX > absZ ) {
        if ( rayDir.x > 0.0 ) { // +X
            coord = vec2(-rayDir.z, -rayDir.y) / absX;
        } else { // -X
            coord = vec2(rayDir.z, -rayDir.y) / absX;
        }
    } else if ( absY > absX && absY > absZ ) {
        if ( rayDir.y > 0.0 ) { // +Y
            coord = vec2(rayDir.x, rayDir.z) / absY;
        } else { // -Y
            coord = vec2(rayDir.x, -rayDir.z) / absY;
        }
    } else {
        if ( rayDir.z > 0.0 ) { // +Z
            coord = vec2(rayDir.x, -rayDir.y) / absZ;
        } else { // -Z
            coord = vec2(-rayDir.x, -rayDir.y) / absZ;
        }
    }

    fragColor = random(coord) > 0.998 ? vec4(1.0, 1.0, 1.0, 1.0) : vec4(0.0, 0.0, 0.0, 1.0);
}
