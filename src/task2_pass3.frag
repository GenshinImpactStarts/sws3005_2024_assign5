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
