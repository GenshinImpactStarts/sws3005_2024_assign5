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
// COMMENTS TO GRADER: This is the pass 1 shader which will output to the BufferA
//                     in shadertoy. BufferA layout can be found in the common
//                     fragment shader.
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

const float PI = 3.1415926536;

const float angle60 = 1.0471975512;
const float angle120 = 2.0943951024;
const float angle180 = 3.1415926536;
const float angle240 = 4.1887902048;
const float angle300 = 5.2359877560;

const mat4 rotationMatrix60 = mat4(
    0.5, 0.0, -0.8660254038, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.8660254038, 0.0, 0.5, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const mat4 rotationMatrix120 = mat4(
    -0.5, 0.0, -0.8660254038, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.8660254038, 0.0, -0.5, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const mat4 rotationMatrix180 = mat4(
    -1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, -1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const mat4 rotationMatrix240 = mat4(
    -0.5, 0.0, 0.8660254038, 0.0,
    0.0, 1.0, 0.0, 0.0,
    -0.8660254038, 0.0, -0.5, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const mat4 rotationMatrix300 = mat4(
    0.5, 0.0, 0.8660254038, 0.0,
    0.0, 1.0, 0.0, 0.0,
    -0.8660254038, 0.0, 0.5, 0.0,
    0.0, 0.0, 0.0, 1.0
);



vec4 light( in int idx )
{
    switch(idx) {
        // Light 0.
        case 0: return vec4( -12.0, 8.0, -16.0, 0.0 ); // position
        case 1: return vec4( 0.15, 0.15, 0.15, 0.0 );  // I_a
        case 2: return vec4( 1.0, 1.0, 1.0, 0.0 );  // I_source

        // Light 1.
        case 3: return vec4( 8.0, 5.0, 0.0, 0.0 ); // position
        case 4: return vec4( 0.15, 0.15, 0.15, 0.0 );  // I_a
        case 5: return vec4( 1.0, 1.0, 1.0, 0.0 );  // I_source
        
        // Light 1.
        case 6: return vec4( -3.0, 6.0, 4.0, 0.0 ); // position
        case 7: return vec4( 0.08, 0.08, 0.08, 0.0 );  // I_a
        case 8: return vec4( 1.0, 1.0, 1.0, 0.0 );  // I_source
        
        
    }
}

vec4 material( in int idx )
{
    switch(idx) {
        // Silver material.(0)
        case  0: return 1.0 * vec4( 0.5, 0.5, 0.5, 0.0 ); // k_d
        case  1: return 0.2 * vec4( 0.5, 0.5, 0.5, 0.0 ); // k_a
        case  2: return 2.0 * vec4( 0.5, 0.5, 0.5, 0.0 ); // k_r
        case  3: return vec4( 0.5, 0.5, 0.5, 64.0 );      // k_rg, n

        // Gold material.(1)
        case  4: return 1.0 * vec4( 0.8, 0.7, 0.1, 0.0 ); // k_d
        case  5: return 0.6 * vec4( 0.8, 0.7, 0.1, 0.0 ); // k_a
        case  6: return 2.0 * vec4( 0.8, 0.7, 0.1, 0.0 ); // k_r
        case  7: return vec4( 0.8, 0.7, 0.1, 64.0 );      // k_rg, n

        // Green plastic material.(2)
        case  8: return 1.0 * vec4( 0.0, 0.8, 0.0, 0.0 ); // k_d
        case  9: return 0.5 * vec4( 0.0, 0.8, 0.0, 0.0 ); // k_a
        case 10: return vec4( 1.0, 1.0, 1.0, 0.0 );       // k_r
        case 11: return vec4( 0.5, 0.5, 0.5, 128.0 );     // k_rg, n

        // Mirror.(3)
        case 12: return vec4( 0.0, 0.1, 0.2, 0.0 ); // k_d
        case 13: return vec4( 0.0, 0.1, 0.2, 0.0 ); // k_a
        case 14: return vec4( 0.0, 0.1, 0.2, 0.0 ); // k_r
        case 15: return vec4( 0.3, 0.4, 0.5, 64.0 ); // k_rg, n

        // Copper material.(4)
        case 16: return vec4( 0.780392, 0.568627, 0.113725, 0.0 ); // k_d
        case 17: return vec4( 0.329412, 0.223529, 0.027451, 0.0 ); // k_a
        case 18: return vec4( 0.992157, 0.941176, 0.807843, 0.0 ); // k_r
        case 19: return vec4( 0.396863, 0.376470, 0.323137, 27.0 ); // k_rg, n

        // Pearl material.(5)
        case 20: return vec4( 1.0, 0.829, 0.829, 0.0 ); // k_d
        case 21: return vec4( 0.25, 0.20725, 0.20725, 0.0 ); // k_a
        case 22: return vec4( 0.296648, 0.296648, 0.296648, 0.0 ); // k_r
        case 23: return vec4( 0.118659, 0.118659, 0.118659, 128.0 ); // k_rg, n

        // Bronze material.(6)
        case 24: return vec4( 0.714, 0.4284, 0.18144, 0.0 ); // k_d
        case 25: return vec4( 0.2125, 0.1275, 0.054, 0.0 ); // k_a
        case 26: return vec4( 0.393548, 0.271906, 0.166721, 0.0 ); // k_r
        case 27: return vec4( 0.157419, 0.108762, 0.066688, 128.0 ); // k_rg, n

        // Violet material.(7)
        case 28: return vec4( 0.43, 0.47, 0.54, 0.0 ); // k_d
        case 29: return 2.0 * vec4( 0.11, 0.06, 0.09, 0.0 ); // k_a
        case 30: return vec4( 0.33, 0.33, 0.52, 0.0 ); // k_r
        case 31: return vec4( 0.132, 0.132, 0.208, 128.0 ); // k_rg, n

        // Black material.(8)
        case 32: return vec4( 0.0, 0.0, 0.0, 0.0 ); // k_d
        case 33: return vec4( 0.11, 0.06, 0.09, 0.0 ); // k_a
        case 34: return vec4( 0.33, 0.33, 0.52, 0.0 ); // k_r
        case 35: return vec4( 0.132, 0.132, 0.208, 128.0 ); // k_rg, n

        // Blue material.(9)
        case 36: return 1.0 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_d
        case 37: return 0.4 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_a
        case 38: return 2.0 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_r
        case 39: return vec4( 0.1, 0.4, 1.0, 64.0 );      // k_rg, n

        // Purple material.(10)
        case 40: return 1.0 * vec4( 0.6, 0.0, 0.8, 0.0 ); // k_d
        case 41: return 0.2 * vec4( 0.6, 0.0, 0.8, 0.0 ); // k_a
        case 42: return 2.0 * vec4( 0.5, 0.0, 0.7, 0.0 ); // k_r
        case 43: return vec4( 0.5, 0.0, 0.7, 64.0 );      // k_rg, n

        // Red material.(11)
        case 44: return 1.0 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_d
        case 45: return 0.6 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_a
        case 46: return 2.0 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_r
        case 47: return vec4( 1.0, 0.1, 0.1, 64.0 );      // k_rg, n

        // Orange material.(12)
        case 48: return 1.0 * vec4( 1.0, 0.5, 0.1, 0.0 ); // k_d
        case 49: return 0.5 * vec4( 1.0, 0.5, 0.1, 0.0 ); // k_a
        case 50: return 2.0 * vec4( 1.0, 0.5, 0.1, 0.0 ); // k_r
        case 51: return vec4( 1.0, 0.5, 0.1, 64.0 );      // k_rg, n
    }
}

vec4 plane( in int idx )
{
    switch(idx) {
        // Horizontal plane.
        case 0: return vec4( 0.0, 1.0, 0.0, 0.0 ); // A, B, C, D
        // Vertical plane.
        case 1: return vec4( 0.0, 0.0, 1.0, 14.0 );
        case 2: return vec4( 1.0, 0.0, 0.0, 14.0 );
        case 3: return vec4( 0.0, 0.0, -1.0, 14.0 );
        case 4: return vec4( -1.0, 0.0, 0.0, 14.0 );
        case 5: return vec4( 1.0, 0.0, 1.0, 14.0 );
        case 6: return vec4( 1.0, 0.0, -1.0, 14.0 );
        case 7: return vec4( -1.0, 0.0, 1.0, 14.0 );
        case 8: return vec4( -1.0, 0.0, -1.0, 14.0 );
    }
}

vec4 getSphere(){
    float Time = mod(iTime, 20.0);
    int num = 1;
    vec4 result;
    float newX;
    float newY;
    float newZ;
    float endPos1X = 0.0;
    float endPos1Y = 4.0;
    float endPos1Z = 0.0;
    float r0 = (endPos1Y - 2.32)/2.0;
    float r1 = endPos1Y - 2.32;
    float r2 = mix(r1,r1+2.0,(Time-10.0)/(2.0 * PI));

    if (Time < 5.0) {
        return vec4( 0.1, 2.32, 0.5, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    } else if(Time < 7.0){
        result = vec4( 0.1, 2.32+r0-r0*cos((Time-5.0)*PI/2.0), 0.5 + r0*sin((Time-5.0)*PI/2.0), uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    }else if (Time < 8.0) {
        newX = mix(0.1, endPos1X, (Time - 7.0) / 1.0);
        newY = endPos1Y;
        newZ = mix(0.5, endPos1Z, (Time - 7.0) / 1.0);
        return vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    } else if (Time < 10.0) {
        result = vec4( endPos1X + r1 * sin((Time - 8.0)/2.0 * PI/2.0), 4.0 - r1 + r1 * cos((Time - 8.0)/2.0 * PI/2.0), endPos1Z, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    }else if (Time < 10.0 + 2.0 * PI){
        float speed = 1.0;

        result = vec4( endPos1X + r2*cos((Time-10.0)*speed), 2.32, endPos1Z + r2*sin((Time-10.0)*speed), uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    }else if (Time < 20.0){
        result = vec4( endPos1X + r2, 2.32, endPos1Z, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
        // newX = mix( endPos1X + r2,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
        // newY = 2.32;
        // newZ = mix( endPos1Z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
        // result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
    }
    return result;
}

vec4 sphere( in int idx )
{
    vec4 result = getSphere();
    float Time = mod(iTime, 20.0);
    float newX;
    float newY;
    float newZ;
    switch(idx) {
        case 0:
            return vec4( 0.1, 2.32, 0.5, uintBitsToFloat(packHalf2x16(vec2(0.1, 0.1))) ); // center, radius, materialID
        case 1:
            // result = getSphere();
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 11)));
            if (Time < 8.0) return result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 11))) );
                return result;
            }
            return result;
        case 2:
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 12)));
            if (Time < 8.0) return result;
            result = rotationMatrix60 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 12))) );
                return result;
            }
            return result;
        case 3:
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 1)));
            if (Time < 8.0) return result;
            result = rotationMatrix120 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 1))) );
                return result;
            }
            return result;
        case 4:
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 2)));
            if (Time < 8.0) return result;
            result = rotationMatrix180 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 2))) );
                return result;
            }
            return result;
        case 5:
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 9)));
            if (Time < 8.0) return result;
            result = rotationMatrix240 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 9))) );
                return result;
            }
            return result;
        case 6:
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 7)));
            if (Time < 8.0) return result;
            result = rotationMatrix300 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 7))) );
                return result;
            }
            return result;
    }
}

vec4 triangle( in int idx )
{
    switch(idx) {
        case 0: return vec4(-0.198743, 2.826322, 0.059470, 0.0);
        case 1: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 2: return vec4(-0.186905, 2.532769, 0.265930, 0.0);
        case 3: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 4: return vec4(-0.459840, 1.710626, 0.127664, 0.0);
        case 5: return vec4(-0.367337, 1.627571, 0.370550, 0.0);
        case 6: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 7: return vec4(-0.367337, 1.627571, 0.370550, 0.0);
        case 8: return vec4(-0.090769, 2.249265, 0.577870, 0.0);
        case 9: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 10: return vec4(-0.090769, 2.249265, 0.577870, 0.0);
        case 11: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 12: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 13: return vec4(-0.186905, 2.532769, 0.265930, 0.0);
        case 14: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 15: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 16: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 17: return vec4(-0.112174, 2.183552, 0.235866, 0.0);
        case 18: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 19: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 20: return vec4(-0.112174, 2.183552, 0.235866, 0.0);
        case 21: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 22: return vec4(-0.112174, 2.183552, 0.235866, 0.0);
        case 23: return vec4(-0.135603, 2.326412, 0.330678, 0.0);
        case 24: return vec4(-0.135603, 2.326412, 0.330678, 0.0);
        case 25: return vec4(-0.186905, 2.532769, 0.265930, 0.0);
        case 26: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 27: return vec4(-0.186905, 2.532769, 0.265930, 0.0);
        case 28: return vec4(-0.131967, 2.684812, 0.075591, 0.0);
        case 29: return vec4(-0.198743, 2.826322, 0.059470, 0.0);
        case 30: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 31: return vec4(-0.090769, 2.249265, 0.577870, 0.0);
        case 32: return vec4(-0.367337, 1.627571, 0.370550, 0.0);
        case 33: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 34: return vec4(-0.027793, 2.284574, 0.480639, 0.0);
        case 35: return vec4(-0.090769, 2.249265, 0.577870, 0.0);
        case 36: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 37: return vec4(-0.099666, 2.077898, 0.032954, 0.0);
        case 38: return vec4(-0.112174, 2.183552, 0.235866, 0.0);
        case 39: return vec4(0.311920, 2.532768, 0.265931, 0.0);
        case 40: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 41: return vec4(0.328747, 2.819981, 0.075807, 0.0);
        case 42: return vec4(0.492353, 1.627571, 0.370550, 0.0);
        case 43: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 44: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 45: return vec4(0.492353, 1.627571, 0.370550, 0.0);
        case 46: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 47: return vec4(0.215785, 2.249265, 0.577870, 0.0);
        case 48: return vec4(0.215785, 2.249265, 0.577870, 0.0);
        case 49: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 50: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 51: return vec4(0.311920, 2.532768, 0.265931, 0.0);
        case 52: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 53: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 54: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 55: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 56: return vec4(0.237190, 2.183552, 0.235866, 0.0);
        case 57: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 58: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 59: return vec4(0.237190, 2.183552, 0.235866, 0.0);
        case 60: return vec4(0.260618, 2.326412, 0.330678, 0.0);
        case 61: return vec4(0.237190, 2.183552, 0.235866, 0.0);
        case 62: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 63: return vec4(0.311920, 2.532768, 0.265931, 0.0);
        case 64: return vec4(0.260618, 2.326412, 0.330678, 0.0);
        case 65: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 66: return vec4(0.271844, 2.689906, 0.069960, 0.0);
        case 67: return vec4(0.311920, 2.532768, 0.265931, 0.0);
        case 68: return vec4(0.328747, 2.819981, 0.075807, 0.0);
        case 69: return vec4(0.215785, 2.249265, 0.577870, 0.0);
        case 70: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 71: return vec4(0.492353, 1.627571, 0.370550, 0.0);
        case 72: return vec4(0.152808, 2.284574, 0.480639, 0.0);
        case 73: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 74: return vec4(0.215785, 2.249265, 0.577870, 0.0);
        case 75: return vec4(0.100416, 2.027747, -0.030392, 0.0);
        case 76: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 77: return vec4(0.237190, 2.183552, 0.235866, 0.0);
        case 78: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 79: return vec4(0.251995, 2.721616, 0.337327, 0.0);
        case 80: return vec4(0.578775, 2.400067, -0.022376, 0.0);
        case 81: return vec4(0.251995, 2.721616, 0.337327, 0.0);
        case 82: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 83: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 84: return vec4(0.578775, 2.400067, -0.022376, 0.0);
        case 85: return vec4(0.251995, 2.721616, 0.337327, 0.0);
        case 86: return vec4(0.270568, 3.038477, 0.062047, 0.0);
        case 87: return vec4(0.251995, 2.721616, 0.337327, 0.0);
        case 88: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 89: return vec4(0.270568, 3.038477, 0.062047, 0.0);
        case 90: return vec4(0.133495, 2.853467, 0.085714, 0.0);
        case 91: return vec4(0.000307, 2.781767, 0.203593, 0.0);
        case 92: return vec4(0.066861, 2.731107, 0.258922, 0.0);
        case 93: return vec4(0.000307, 2.781767, 0.203593, 0.0);
        case 94: return vec4(0.207017, 3.081169, 0.161182, 0.0);
        case 95: return vec4(0.051197, 2.873284, 0.340142, 0.0);
        case 96: return vec4(0.000307, 2.781767, 0.203593, 0.0);
        case 97: return vec4(0.051197, 2.873284, 0.340142, 0.0);
        case 98: return vec4(-0.051497, 3.011251, 0.121885, 0.0);
        case 99: return vec4(-0.016326, 2.161511, 0.619721, 0.0);
        case 100: return vec4(-0.140341, 2.256935, 0.489296, 0.0);
        case 101: return vec4(-0.108589, 2.228144, 0.455992, 0.0);
        case 102: return vec4(-0.016326, 2.161511, 0.619721, 0.0);
        case 103: return vec4(0.064858, 2.135775, 0.608844, 0.0);
        case 104: return vec4(-0.140341, 2.256935, 0.489296, 0.0);
        case 105: return vec4(0.064858, 2.135775, 0.608844, 0.0);
        case 106: return vec4(0.077986, 2.234776, 0.533233, 0.0);
        case 107: return vec4(-0.140341, 2.256935, 0.489296, 0.0);
        case 108: return vec4(-0.140341, 2.256935, 0.489296, 0.0);
        case 109: return vec4(0.077986, 2.234776, 0.533233, 0.0);
        case 110: return vec4(-0.096493, 2.266745, 0.454581, 0.0);
        case 111: return vec4(0.077986, 2.234776, 0.533233, 0.0);
        case 112: return vec4(0.064858, 2.135775, 0.608844, 0.0);
        case 113: return vec4(0.107414, 2.160195, 0.602529, 0.0);
        case 114: return vec4(0.064858, 2.135775, 0.608844, 0.0);
        case 115: return vec4(-0.016326, 2.161511, 0.619721, 0.0);
        case 116: return vec4(0.107414, 2.160195, 0.602529, 0.0);
        case 117: return vec4(-0.108589, 2.228144, 0.455992, 0.0);
        case 118: return vec4(0.107414, 2.160195, 0.602529, 0.0);
        case 119: return vec4(-0.016326, 2.161511, 0.619721, 0.0);
        case 120: return vec4(0.107414, 2.160195, 0.602529, 0.0);
        case 121: return vec4(-0.108589, 2.228144, 0.455992, 0.0);
        case 122: return vec4(0.077986, 2.234776, 0.533233, 0.0);
        case 123: return vec4(-0.096493, 2.266745, 0.454581, 0.0);
        case 124: return vec4(0.077986, 2.234776, 0.533233, 0.0);
        case 125: return vec4(-0.108589, 2.228144, 0.455992, 0.0);
        case 126: return vec4(0.239720, 2.256746, 0.511709, 0.0);
        case 127: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 128: return vec4(0.216797, 2.234768, 0.467689, 0.0);
        case 129: return vec4(0.044685, 2.239236, 0.531086, 0.0);
        case 130: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 131: return vec4(0.239720, 2.256746, 0.511709, 0.0);
        case 132: return vec4(0.044685, 2.239236, 0.531086, 0.0);
        case 133: return vec4(0.239720, 2.256746, 0.511709, 0.0);
        case 134: return vec4(0.201567, 2.271960, 0.472507, 0.0);
        case 135: return vec4(-0.043078, 2.093184, 0.544698, 0.0);
        case 136: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 137: return vec4(0.044685, 2.239236, 0.531086, 0.0);
        case 138: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 139: return vec4(-0.043078, 2.093184, 0.544698, 0.0);
        case 140: return vec4(0.044685, 2.239236, 0.531086, 0.0);
        case 141: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 142: return vec4(0.044685, 2.239236, 0.531086, 0.0);
        case 143: return vec4(0.201567, 2.271960, 0.472507, 0.0);
        case 144: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 145: return vec4(0.022112, 2.092685, 0.545129, 0.0);
        case 146: return vec4(0.216797, 2.234768, 0.467689, 0.0);
        case 147: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 148: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 149: return vec4(0.022112, 2.092685, 0.545129, 0.0);
        case 150: return vec4(-0.043078, 2.093184, 0.544698, 0.0);
        case 151: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 152: return vec4(0.070815, 2.127584, 0.591753, 0.0);
        case 153: return vec4(0.022112, 2.092685, 0.545129, 0.0);
        case 154: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 155: return vec4(0.216797, 2.234768, 0.467689, 0.0);
        case 156: return vec4(0.201567, 2.271960, 0.472507, 0.0);
        case 157: return vec4(0.216797, 2.234768, 0.467689, 0.0);
        case 158: return vec4(0.025928, 2.197134, 0.509407, 0.0);
        case 159: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 160: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 161: return vec4(0.118890, 2.659370, 0.397733, 0.0);
        case 162: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 163: return vec4(0.118890, 2.659370, 0.397733, 0.0);
        case 164: return vec4(0.131360, 2.779497, 0.277265, 0.0);
        case 165: return vec4(0.118890, 2.659370, 0.397733, 0.0);
        case 166: return vec4(0.190021, 3.123185, 0.329049, 0.0);
        case 167: return vec4(0.131360, 2.779497, 0.277265, 0.0);
        case 168: return vec4(0.190021, 3.123185, 0.329049, 0.0);
        case 169: return vec4(0.118890, 2.659370, 0.397733, 0.0);
        case 170: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 171: return vec4(0.190021, 3.123185, 0.329049, 0.0);
        case 172: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 173: return vec4(0.131360, 2.779497, 0.277265, 0.0);
        case 174: return vec4(0.264126, 2.557561, 0.338780, 0.0);
        case 175: return vec4(0.344899, 2.771093, 0.076230, 0.0);
        case 176: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 177: return vec4(0.344899, 2.771093, 0.076230, 0.0);
        case 178: return vec4(0.073753, 2.845194, 0.118105, 0.0);
        case 179: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 180: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 181: return vec4(0.073753, 2.845194, 0.118105, 0.0);
        case 182: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 183: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 184: return vec4(-0.013808, 2.867647, 0.088736, 0.0);
        case 185: return vec4(-0.216450, 2.783000, 0.065889, 0.0);
        case 186: return vec4(-0.128414, 2.561538, 0.329633, 0.0);
        case 187: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 188: return vec4(-0.216450, 2.783000, 0.065889, 0.0);
        case 189: return vec4(-0.128414, 2.561538, 0.329633, 0.0);
        case 190: return vec4(-0.083856, 2.429277, 0.342375, 0.0);
        case 191: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 192: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 193: return vec4(0.217129, 2.271016, 0.402411, 0.0);
        case 194: return vec4(0.264126, 2.557561, 0.338780, 0.0);
        case 195: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 196: return vec4(0.277373, 2.010287, 0.434907, 0.0);
        case 197: return vec4(0.217129, 2.271016, 0.402411, 0.0);
        case 198: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 199: return vec4(-0.120593, 2.108763, 0.379246, 0.0);
        case 200: return vec4(0.277373, 2.010287, 0.434907, 0.0);
        case 201: return vec4(-0.120593, 2.108763, 0.379246, 0.0);
        case 202: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 203: return vec4(-0.083856, 2.429277, 0.342375, 0.0);
        case 204: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 205: return vec4(0.073753, 2.845194, 0.118105, 0.0);
        case 206: return vec4(-0.013808, 2.867647, 0.088736, 0.0);
        case 207: return vec4(0.204880, 2.576619, 0.424575, 0.0);
        case 208: return vec4(-0.053706, 2.601016, 0.428838, 0.0);
        case 209: return vec4(-0.083856, 2.429277, 0.342375, 0.0);
        case 210: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 211: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 212: return vec4(-0.198743, 2.826322, 0.059470, 0.0);
        case 213: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 214: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 215: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 216: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 217: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 218: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 219: return vec4(-0.339350, 1.526524, -0.037972, 0.0);
        case 220: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 221: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 222: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 223: return vec4(-0.339350, 1.526524, -0.037972, 0.0);
        case 224: return vec4(-0.459840, 1.710626, 0.127664, 0.0);
        case 225: return vec4(-0.382958, 2.468830, 0.144654, 0.0);
        case 226: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 227: return vec4(-0.459840, 1.710626, 0.127664, 0.0);
        case 228: return vec4(-0.294985, 2.426184, 0.015096, 0.0);
        case 229: return vec4(-0.198743, 2.826322, 0.059470, 0.0);
        case 230: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 231: return vec4(-0.198743, 2.826322, 0.059470, 0.0);
        case 232: return vec4(-0.131967, 2.684812, 0.075591, 0.0);
        case 233: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 234: return vec4(-0.099666, 2.077898, 0.032954, 0.0);
        case 235: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 236: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 237: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 238: return vec4(0.100416, 2.027747, -0.030392, 0.0);
        case 239: return vec4(-0.099666, 2.077898, 0.032954, 0.0);
        case 240: return vec4(0.507974, 2.468830, 0.144654, 0.0);
        case 241: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 242: return vec4(0.328747, 2.819981, 0.075807, 0.0);
        case 243: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 244: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 245: return vec4(0.328747, 2.819981, 0.075807, 0.0);
        case 246: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 247: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 248: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 249: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 250: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 251: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 252: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 253: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 254: return vec4(0.464365, 1.526525, -0.037972, 0.0);
        case 255: return vec4(0.271844, 2.689906, 0.069960, 0.0);
        case 256: return vec4(0.328747, 2.819981, 0.075807, 0.0);
        case 257: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 258: return vec4(0.079396, 2.736917, -0.043969, 0.0);
        case 259: return vec4(-0.131967, 2.684812, 0.075591, 0.0);
        case 260: return vec4(0.271844, 2.689906, 0.069960, 0.0);
        case 261: return vec4(-0.000884, 1.503325, -0.102178, 0.0);
        case 262: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 263: return vec4(0.100416, 2.027747, -0.030392, 0.0);
        case 264: return vec4(-0.115155, 2.149971, -0.217257, 0.0);
        case 265: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 266: return vec4(0.227281, 1.857075, -0.226910, 0.0);
        case 267: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 268: return vec4(0.227281, 1.857075, -0.226910, 0.0);
        case 269: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 270: return vec4(-0.115155, 2.149971, -0.217257, 0.0);
        case 271: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 272: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 273: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 274: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 275: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 276: return vec4(-0.125814, 2.917574, 0.195298, 0.0);
        case 277: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 278: return vec4(-0.340041, 2.707499, 0.178924, 0.0);
        case 279: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 280: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 281: return vec4(-0.340041, 2.707499, 0.178924, 0.0);
        case 282: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 283: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 284: return vec4(0.578775, 2.400067, -0.022376, 0.0);
        case 285: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 286: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 287: return vec4(0.578775, 2.400067, -0.022376, 0.0);
        case 288: return vec4(0.227281, 1.857075, -0.226910, 0.0);
        case 289: return vec4(-0.199971, 1.899570, -0.142343, 0.0);
        case 290: return vec4(-0.115155, 2.149971, -0.217257, 0.0);
        case 291: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 292: return vec4(-0.199971, 1.899570, -0.142343, 0.0);
        case 293: return vec4(0.227281, 1.857075, -0.226910, 0.0);
        case 294: return vec4(-0.199971, 1.899570, -0.142343, 0.0);
        case 295: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 296: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 297: return vec4(0.270568, 3.038477, 0.062047, 0.0);
        case 298: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 299: return vec4(0.578775, 2.400067, -0.022376, 0.0);
        case 300: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 301: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 302: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 303: return vec4(0.266617, 2.024742, -0.240520, 0.0);
        case 304: return vec4(0.270568, 3.038477, 0.062047, 0.0);
        case 305: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 306: return vec4(-0.121024, 3.001428, 0.103137, 0.0);
        case 307: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 308: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 309: return vec4(-0.340041, 2.707499, 0.178924, 0.0);
        case 310: return vec4(-0.121024, 3.001428, 0.103137, 0.0);
        case 311: return vec4(-0.125814, 2.917574, 0.195298, 0.0);
        case 312: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 313: return vec4(-0.121024, 3.001428, 0.103137, 0.0);
        case 314: return vec4(-0.340041, 2.707499, 0.178924, 0.0);
        case 315: return vec4(-0.250912, 2.406855, -0.081150, 0.0);
        case 316: return vec4(-0.115155, 2.149971, -0.217257, 0.0);
        case 317: return vec4(-0.199971, 1.899570, -0.142343, 0.0);
        case 318: return vec4(-0.051497, 3.011251, 0.121885, 0.0);
        case 319: return vec4(-0.013366, 2.852985, 0.093602, 0.0);
        case 320: return vec4(0.000307, 2.781767, 0.203593, 0.0);
        case 321: return vec4(0.000307, 2.781767, 0.203593, 0.0);
        case 322: return vec4(0.133495, 2.853467, 0.085714, 0.0);
        case 323: return vec4(0.207017, 3.081169, 0.161182, 0.0);
        case 324: return vec4(0.145541, 2.859779, -0.054899, 0.0);
        case 325: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 326: return vec4(0.159129, 2.782875, -0.041184, 0.0);
        case 327: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 328: return vec4(-0.065532, 2.863279, -0.047374, 0.0);
        case 329: return vec4(0.064347, 2.494487, -0.089880, 0.0);
        case 330: return vec4(0.064347, 2.494487, -0.089880, 0.0);
        case 331: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 332: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 333: return vec4(0.159129, 2.782875, -0.041184, 0.0);
        case 334: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 335: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 336: return vec4(0.159129, 2.782875, -0.041184, 0.0);
        case 337: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 338: return vec4(0.064347, 2.494487, -0.089880, 0.0);
        case 339: return vec4(0.064347, 2.494487, -0.089880, 0.0);
        case 340: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 341: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 342: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 343: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 344: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 345: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 346: return vec4(0.079877, 2.008625, -0.106236, 0.0);
        case 347: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 348: return vec4(0.146853, 2.433877, -0.124663, 0.0);
        case 349: return vec4(0.079877, 2.008625, -0.106236, 0.0);
        case 350: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 351: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 352: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 353: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 354: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 355: return vec4(0.079877, 2.008625, -0.106236, 0.0);
        case 356: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 357: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 358: return vec4(0.079877, 2.008625, -0.106236, 0.0);
        case 359: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 360: return vec4(0.079877, 2.008625, -0.106236, 0.0);
        case 361: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 362: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 363: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 364: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 365: return vec4(0.159129, 2.782875, -0.041184, 0.0);
        case 366: return vec4(-0.026015, 2.374027, -0.042204, 0.0);
        case 367: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 368: return vec4(-0.065532, 2.863279, -0.047374, 0.0);
        case 369: return vec4(0.344899, 2.771093, 0.076230, 0.0);
        case 370: return vec4(0.151576, 2.816889, 0.068936, 0.0);
        case 371: return vec4(0.073753, 2.845194, 0.118105, 0.0);
        case 372: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 373: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 374: return vec4(0.098125, 3.448996, 0.160518, 0.0);
        case 375: return vec4(0.098125, 3.448996, 0.160518, 0.0);
        case 376: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 377: return vec4(0.083199, 3.262238, -0.020138, 0.0);
        case 378: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 379: return vec4(0.180265, 3.315095, 0.383238, 0.0);
        case 380: return vec4(0.098125, 3.448996, 0.160518, 0.0);
        case 381: return vec4(0.180265, 3.315095, 0.383238, 0.0);
        case 382: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 383: return vec4(-0.068199, 3.147179, 0.558173, 0.0);
        case 384: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 385: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 386: return vec4(0.098125, 3.448996, 0.160518, 0.0);
        case 387: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 388: return vec4(-0.096804, 3.275048, 0.100496, 0.0);
        case 389: return vec4(-0.125814, 2.917574, 0.195298, 0.0);
        case 390: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 391: return vec4(0.098125, 3.448996, 0.160518, 0.0);
        case 392: return vec4(0.180265, 3.315095, 0.383238, 0.0);
        case 393: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 394: return vec4(0.326276, 2.952219, 0.040895, 0.0);
        case 395: return vec4(0.180265, 3.315095, 0.383238, 0.0);
        case 396: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 397: return vec4(0.180265, 3.315095, 0.383238, 0.0);
        case 398: return vec4(-0.068199, 3.147179, 0.558173, 0.0);
        case 399: return vec4(-0.068199, 3.147179, 0.558173, 0.0);
        case 400: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 401: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 402: return vec4(-0.068199, 3.147179, 0.558173, 0.0);
        case 403: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 404: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 405: return vec4(-0.121024, 3.001428, 0.103137, 0.0);
        case 406: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 407: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 408: return vec4(-0.232698, 3.170322, 0.477468, 0.0);
        case 409: return vec4(-0.125814, 2.917574, 0.195298, 0.0);
        case 410: return vec4(-0.121024, 3.001428, 0.103137, 0.0);
        case 411: return vec4(0.270568, 3.038477, 0.062047, 0.0);
        case 412: return vec4(0.294537, 2.973720, 0.343911, 0.0);
        case 413: return vec4(0.113654, 3.388509, 0.143172, 0.0);
        case 414: return vec4(0.034978, 3.191365, 0.445665, 0.0);
        case 415: return vec4(-0.051497, 3.011251, 0.121885, 0.0);
        case 416: return vec4(0.051197, 2.873284, 0.340142, 0.0);
        case 417: return vec4(-0.051497, 3.011251, 0.121885, 0.0);
        case 418: return vec4(0.034978, 3.191365, 0.445665, 0.0);
        case 419: return vec4(-0.042253, 3.346303, 0.294809, 0.0);
        case 420: return vec4(0.207017, 3.081169, 0.161182, 0.0);
        case 421: return vec4(0.188544, 3.252530, 0.419767, 0.0);
        case 422: return vec4(0.051197, 2.873284, 0.340142, 0.0);
        case 423: return vec4(0.207017, 3.081169, 0.161182, 0.0);
        case 424: return vec4(0.185406, 3.368005, 0.229430, 0.0);
        case 425: return vec4(0.188544, 3.252530, 0.419767, 0.0);
        case 426: return vec4(0.188544, 3.252530, 0.419767, 0.0);
        case 427: return vec4(0.034978, 3.191365, 0.445665, 0.0);
        case 428: return vec4(0.051197, 2.873284, 0.340142, 0.0);
        case 429: return vec4(0.031126, 3.079918, 0.445999, 0.0);
        case 430: return vec4(0.069153, 3.423640, 0.257066, 0.0);
        case 431: return vec4(-0.044648, 3.159281, 0.400501, 0.0);
        case 432: return vec4(0.069153, 3.423640, 0.257066, 0.0);
        case 433: return vec4(0.031126, 3.079918, 0.445999, 0.0);
        case 434: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 435: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 436: return vec4(0.031126, 3.079918, 0.445999, 0.0);
        case 437: return vec4(0.094951, 3.072239, 0.430940, 0.0);
        case 438: return vec4(0.069153, 3.423640, 0.257066, 0.0);
        case 439: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 440: return vec4(0.238104, 3.250411, 0.305309, 0.0);
        case 441: return vec4(0.224548, 3.221203, 0.209666, 0.0);
        case 442: return vec4(0.238104, 3.250411, 0.305309, 0.0);
        case 443: return vec4(0.309047, 3.015750, 0.091476, 0.0);
        case 444: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 445: return vec4(0.309047, 3.015750, 0.091476, 0.0);
        case 446: return vec4(0.238104, 3.250411, 0.305309, 0.0);
        case 447: return vec4(0.069153, 3.423640, 0.257066, 0.0);
        case 448: return vec4(-0.134734, 3.237893, 0.207058, 0.0);
        case 449: return vec4(-0.044648, 3.159281, 0.400501, 0.0);
        case 450: return vec4(-0.091589, 3.165616, 0.314905, 0.0);
        case 451: return vec4(-0.044648, 3.159281, 0.400501, 0.0);
        case 452: return vec4(-0.134734, 3.237893, 0.207058, 0.0);
        case 453: return vec4(-0.134734, 3.237893, 0.207058, 0.0);
        case 454: return vec4(-0.117696, 3.090438, 0.185262, 0.0);
        case 455: return vec4(-0.091589, 3.165616, 0.314905, 0.0);
        case 456: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 457: return vec4(0.145541, 2.859779, -0.054899, 0.0);
        case 458: return vec4(0.309047, 3.015750, 0.091476, 0.0);
        case 459: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 460: return vec4(0.238104, 3.250411, 0.305309, 0.0);
        case 461: return vec4(0.169772, 3.122064, 0.422545, 0.0);
        case 462: return vec4(-0.084965, 3.048194, 0.326772, 0.0);
        case 463: return vec4(-0.044648, 3.159281, 0.400501, 0.0);
        case 464: return vec4(-0.102494, 3.094185, 0.346055, 0.0);
        case 465: return vec4(-0.044648, 3.159281, 0.400501, 0.0);
        case 466: return vec4(-0.091589, 3.165616, 0.314905, 0.0);
        case 467: return vec4(-0.102494, 3.094185, 0.346055, 0.0);
        case 468: return vec4(-0.064427, 2.908914, 0.178961, 0.0);
        case 469: return vec4(-0.102494, 3.094185, 0.346055, 0.0);
        case 470: return vec4(-0.091589, 3.165616, 0.314905, 0.0);
        case 471: return vec4(-0.097553, 3.081554, 0.317434, 0.0);
        case 472: return vec4(-0.064427, 2.908914, 0.178961, 0.0);
        case 473: return vec4(-0.091589, 3.165616, 0.314905, 0.0);
        case 474: return vec4(-0.102494, 3.094185, 0.346055, 0.0);
        case 475: return vec4(-0.064427, 2.908914, 0.178961, 0.0);
        case 476: return vec4(-0.097553, 3.081554, 0.317434, 0.0);
        case 477: return vec4(-0.065532, 2.863279, -0.047374, 0.0);
        case 478: return vec4(-0.117696, 3.090438, 0.185262, 0.0);
        case 479: return vec4(-0.134734, 3.237893, 0.207058, 0.0);
        case 480: return vec4(-0.117696, 3.090438, 0.185262, 0.0);
        case 481: return vec4(-0.065532, 2.863279, -0.047374, 0.0);
        case 482: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 483: return vec4(0.190021, 3.123185, 0.329049, 0.0);
        case 484: return vec4(0.170522, 3.094323, 0.208654, 0.0);
        case 485: return vec4(0.257045, 2.948637, 0.211633, 0.0);
        case 486: return vec4(-0.348637, 1.163173, 0.188485, 0.0);
        case 487: return vec4(-0.339350, 1.526524, -0.037972, 0.0);
        case 488: return vec4(-0.294241, 1.085086, 0.220785, 0.0);
        case 489: return vec4(-0.339350, 1.526524, -0.037972, 0.0);
        case 490: return vec4(-0.348637, 1.163173, 0.188485, 0.0);
        case 491: return vec4(-0.459840, 1.710626, 0.127664, 0.0);
        case 492: return vec4(-0.459840, 1.710626, 0.127664, 0.0);
        case 493: return vec4(-0.348637, 1.163173, 0.188485, 0.0);
        case 494: return vec4(-0.367337, 1.627571, 0.370550, 0.0);
        case 495: return vec4(-0.294241, 1.085086, 0.220785, 0.0);
        case 496: return vec4(-0.339350, 1.526524, -0.037972, 0.0);
        case 497: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 498: return vec4(-0.294241, 1.085086, 0.220785, 0.0);
        case 499: return vec4(-0.232687, 1.719725, 0.070112, 0.0);
        case 500: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 501: return vec4(-0.294241, 1.085086, 0.220785, 0.0);
        case 502: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 503: return vec4(-0.348637, 1.163173, 0.188485, 0.0);
        case 504: return vec4(-0.115506, 2.169380, 0.505615, 0.0);
        case 505: return vec4(-0.367337, 1.627571, 0.370550, 0.0);
        case 506: return vec4(-0.348637, 1.163173, 0.188485, 0.0);
        case 507: return vec4(0.464365, 1.526525, -0.037972, 0.0);
        case 508: return vec4(0.473653, 1.163173, 0.188485, 0.0);
        case 509: return vec4(0.419257, 1.085086, 0.220785, 0.0);
        case 510: return vec4(0.473653, 1.163173, 0.188485, 0.0);
        case 511: return vec4(0.464365, 1.526525, -0.037972, 0.0);
        case 512: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 513: return vec4(0.492353, 1.627571, 0.370550, 0.0);
        case 514: return vec4(0.473653, 1.163173, 0.188485, 0.0);
        case 515: return vec4(0.585506, 1.871744, 0.050467, 0.0);
        case 516: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 517: return vec4(0.464365, 1.526525, -0.037972, 0.0);
        case 518: return vec4(0.419257, 1.085086, 0.220785, 0.0);
        case 519: return vec4(0.360413, 1.715362, 0.067056, 0.0);
        case 520: return vec4(0.419257, 1.085086, 0.220785, 0.0);
        case 521: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 522: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 523: return vec4(0.419257, 1.085086, 0.220785, 0.0);
        case 524: return vec4(0.473653, 1.163173, 0.188485, 0.0);
        case 525: return vec4(0.473653, 1.163173, 0.188485, 0.0);
        case 526: return vec4(0.492353, 1.627571, 0.370550, 0.0);
        case 527: return vec4(0.240521, 2.169379, 0.505615, 0.0);
        case 528: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 529: return vec4(0.016260, 1.423471, -0.214446, 0.0);
        case 530: return vec4(-0.026366, 1.051416, -0.219392, 0.0);
        case 531: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 532: return vec4(-0.026366, 1.051416, -0.219392, 0.0);
        case 533: return vec4(0.016260, 1.423471, -0.214446, 0.0);
        case 534: return vec4(-0.026366, 1.051416, -0.219392, 0.0);
        case 535: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 536: return vec4(0.028677, 0.959269, -0.163075, 0.0);
        case 537: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 538: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 539: return vec4(0.028677, 0.959269, -0.163075, 0.0);
        case 540: return vec4(-0.026366, 1.051416, -0.219392, 0.0);
        case 541: return vec4(0.028677, 0.959269, -0.163075, 0.0);
        case 542: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 543: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 544: return vec4(0.016260, 1.423471, -0.214446, 0.0);
        case 545: return vec4(0.001948, 1.478990, -0.180586, 0.0);
        case 546: return vec4(0.052179, 1.479341, -0.184607, 0.0);
        case 547: return vec4(0.016260, 1.423471, -0.214446, 0.0);
        case 548: return vec4(0.017755, 2.103514, -0.164004, 0.0);
        case 549: return vec4(0.373384, 1.987493, 0.288453, 0.0);
        case 550: return vec4(0.277373, 2.010287, 0.434907, 0.0);
        case 551: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 552: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 553: return vec4(0.213478, 1.043798, 0.253628, 0.0);
        case 554: return vec4(0.373384, 1.987493, 0.288453, 0.0);
        case 555: return vec4(0.213478, 1.043798, 0.253628, 0.0);
        case 556: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 557: return vec4(0.373384, 1.987493, 0.288453, 0.0);
        case 558: return vec4(0.277373, 2.010287, 0.434907, 0.0);
        case 559: return vec4(-0.120593, 2.108763, 0.379246, 0.0);
        case 560: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 561: return vec4(-0.198167, 1.731613, 0.171009, 0.0);
        case 562: return vec4(-0.113238, 0.982554, 0.110453, 0.0);
        case 563: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 564: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 565: return vec4(-0.198167, 1.731613, 0.171009, 0.0);
        case 566: return vec4(-0.079960, 1.701094, 0.016835, 0.0);
        case 567: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 568: return vec4(-0.113238, 0.982554, 0.110453, 0.0);
        case 569: return vec4(-0.198167, 1.731613, 0.171009, 0.0);
        case 570: return vec4(-0.198167, 1.731613, 0.171009, 0.0);
        case 571: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 572: return vec4(-0.120593, 2.108763, 0.379246, 0.0);
        case 573: return vec4(0.155248, 1.984359, 0.043959, 0.0);
        case 574: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 575: return vec4(-0.079960, 1.701094, 0.016835, 0.0);
        case 576: return vec4(0.155248, 1.984359, 0.043959, 0.0);
        case 577: return vec4(0.373384, 1.987493, 0.288453, 0.0);
        case 578: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 579: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 580: return vec4(-0.635507, 2.747586, -0.242411, 0.0);
        case 581: return vec4(-0.426697, 2.505814, -0.240123, 0.0);
        case 582: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 583: return vec4(-0.653869, 3.235286, -0.234040, 0.0);
        case 584: return vec4(-0.635507, 2.747586, -0.242411, 0.0);
        case 585: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 586: return vec4(-0.165179, 3.748286, -0.238332, 0.0);
        case 587: return vec4(-0.653869, 3.235286, -0.234040, 0.0);
        case 588: return vec4(-0.165179, 3.748286, -0.238332, 0.0);
        case 589: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 590: return vec4(-0.127114, 3.642886, -0.218079, 0.0);
        case 591: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 592: return vec4(-0.426697, 2.505814, -0.240123, 0.0);
        case 593: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 594: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 595: return vec4(-0.127114, 3.642886, -0.218079, 0.0);
        case 596: return vec4(-0.651850, 3.053614, -0.218081, 0.0);
        case 597: return vec4(-0.127114, 3.642886, -0.218079, 0.0);
        case 598: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 599: return vec4(-0.108327, 3.630056, -0.262072, 0.0);
        case 600: return vec4(-0.635507, 2.747586, -0.242411, 0.0);
        case 601: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 602: return vec4(-0.426697, 2.505814, -0.240123, 0.0);
        case 603: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 604: return vec4(-0.635507, 2.747586, -0.242411, 0.0);
        case 605: return vec4(-0.653869, 3.235286, -0.234040, 0.0);
        case 606: return vec4(-0.165179, 3.748286, -0.238332, 0.0);
        case 607: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 608: return vec4(-0.653869, 3.235286, -0.234040, 0.0);
        case 609: return vec4(-0.546987, 3.325791, -0.259794, 0.0);
        case 610: return vec4(-0.165179, 3.748286, -0.238332, 0.0);
        case 611: return vec4(-0.108327, 3.630056, -0.262072, 0.0);
        case 612: return vec4(-0.557885, 3.362643, -0.185991, 0.0);
        case 613: return vec4(-0.406169, 3.377578, -0.262914, 0.0);
        case 614: return vec4(-0.709601, 3.347708, -0.262914, 0.0);
        case 615: return vec4(-0.557885, 3.362643, -0.185991, 0.0);
        case 616: return vec4(-0.709601, 3.347708, -0.262914, 0.0);
        case 617: return vec4(-0.406169, 3.377578, -0.262914, 0.0);
        case 618: return vec4(-0.556639, 2.679675, -0.185521, 0.0);
        case 619: return vec4(-0.404921, 2.694610, -0.262443, 0.0);
        case 620: return vec4(-0.708353, 2.664739, -0.262443, 0.0);
        case 621: return vec4(-0.556639, 2.679675, -0.185521, 0.0);
        case 622: return vec4(-0.708353, 2.664739, -0.262443, 0.0);
        case 623: return vec4(-0.404921, 2.694610, -0.262443, 0.0);
        case 624: return vec4(-0.041760, 3.575318, -0.244422, 0.0);
        case 625: return vec4(0.284416, 3.733560, -0.265018, 0.0);
        case 626: return vec4(-0.128016, 3.801782, -0.218369, 0.0);
        case 627: return vec4(0.284416, 3.733560, -0.265018, 0.0);
        case 628: return vec4(-0.041760, 3.575318, -0.244422, 0.0);
        case 629: return vec4(-0.128016, 3.801782, -0.218369, 0.0);
        case 630: return vec4(0.760523, 2.747586, -0.242411, 0.0);
        case 631: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 632: return vec4(0.551713, 2.505815, -0.240122, 0.0);
        case 633: return vec4(0.778885, 3.235286, -0.234040, 0.0);
        case 634: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 635: return vec4(0.760523, 2.747586, -0.242411, 0.0);
        case 636: return vec4(0.290195, 3.748286, -0.238332, 0.0);
        case 637: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 638: return vec4(0.778885, 3.235286, -0.234040, 0.0);
        case 639: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 640: return vec4(0.290195, 3.748286, -0.238332, 0.0);
        case 641: return vec4(0.252130, 3.642886, -0.218079, 0.0);
        case 642: return vec4(0.551713, 2.505815, -0.240122, 0.0);
        case 643: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 644: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 645: return vec4(0.252130, 3.642886, -0.218079, 0.0);
        case 646: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 647: return vec4(0.776866, 3.053615, -0.218081, 0.0);
        case 648: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 649: return vec4(0.252130, 3.642886, -0.218079, 0.0);
        case 650: return vec4(0.233343, 3.630056, -0.262072, 0.0);
        case 651: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 652: return vec4(0.760523, 2.747586, -0.242411, 0.0);
        case 653: return vec4(0.551713, 2.505815, -0.240122, 0.0);
        case 654: return vec4(0.760523, 2.747586, -0.242411, 0.0);
        case 655: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 656: return vec4(0.778885, 3.235286, -0.234040, 0.0);
        case 657: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 658: return vec4(0.290195, 3.748286, -0.238332, 0.0);
        case 659: return vec4(0.778885, 3.235286, -0.234040, 0.0);
        case 660: return vec4(0.290195, 3.748286, -0.238332, 0.0);
        case 661: return vec4(0.672003, 3.325791, -0.259794, 0.0);
        case 662: return vec4(0.233343, 3.630056, -0.262072, 0.0);
        case 663: return vec4(0.682900, 3.362643, -0.185991, 0.0);
        case 664: return vec4(0.834617, 3.377578, -0.262913, 0.0);
        case 665: return vec4(0.531185, 3.347708, -0.262913, 0.0);
        case 666: return vec4(0.682900, 3.362643, -0.185991, 0.0);
        case 667: return vec4(0.531185, 3.347708, -0.262913, 0.0);
        case 668: return vec4(0.834617, 3.377578, -0.262913, 0.0);
        case 669: return vec4(0.681651, 2.679675, -0.185520, 0.0);
        case 670: return vec4(0.833369, 2.694610, -0.262442, 0.0);
        case 671: return vec4(0.529937, 2.664739, -0.262442, 0.0);
        case 672: return vec4(0.681651, 2.679675, -0.185520, 0.0);
        case 673: return vec4(0.529937, 2.664739, -0.262442, 0.0);
        case 674: return vec4(0.833369, 2.694610, -0.262442, 0.0);
        case 675: return vec4(0.015005, 1.031375, 0.275563, 0.0);
        case 676: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 677: return vec4(-0.085341, 0.052588, 0.292936, 0.0);
        case 678: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 679: return vec4(0.015005, 1.031375, 0.275563, 0.0);
        case 680: return vec4(0.103999, 1.024596, 0.163502, 0.0);
        case 681: return vec4(-0.010711, 0.165993, 0.290598, 0.0);
        case 682: return vec4(-0.085341, 0.052588, 0.292936, 0.0);
        case 683: return vec4(-0.027314, -0.006262, 0.447663, 0.0);
        case 684: return vec4(-0.027314, -0.006262, 0.447663, 0.0);
        case 685: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 686: return vec4(-0.010711, 0.165993, 0.290598, 0.0);
        case 687: return vec4(-0.010711, 0.165993, 0.290598, 0.0);
        case 688: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 689: return vec4(0.160436, 1.019989, 0.265305, 0.0);
        case 690: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 691: return vec4(0.103999, 1.024596, 0.163502, 0.0);
        case 692: return vec4(0.160436, 1.019989, 0.265305, 0.0);
        case 693: return vec4(0.160436, 1.019989, 0.265305, 0.0);
        case 694: return vec4(0.015005, 1.031375, 0.275563, 0.0);
        case 695: return vec4(-0.010711, 0.165993, 0.290598, 0.0);
        case 696: return vec4(0.015005, 1.031375, 0.275563, 0.0);
        case 697: return vec4(-0.085341, 0.052588, 0.292936, 0.0);
        case 698: return vec4(-0.010711, 0.165993, 0.290598, 0.0);
        case 699: return vec4(-0.027314, -0.006262, 0.447663, 0.0);
        case 700: return vec4(-0.085341, 0.052588, 0.292936, 0.0);
        case 701: return vec4(-0.026443, 0.125679, 0.131967, 0.0);
        case 702: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 703: return vec4(0.078837, 1.024426, 0.105890, 0.0);
        case 704: return vec4(0.184232, 0.046016, 0.107924, 0.0);
        case 705: return vec4(0.078837, 1.024426, 0.105890, 0.0);
        case 706: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 707: return vec4(-0.010089, 1.018949, -0.006296, 0.0);
        case 708: return vec4(0.184232, 0.046016, 0.107924, 0.0);
        case 709: return vec4(0.109018, 0.159058, 0.107339, 0.0);
        case 710: return vec4(0.126466, -0.015555, 0.261685, 0.0);
        case 711: return vec4(0.126466, -0.015555, 0.261685, 0.0);
        case 712: return vec4(0.109018, 0.159058, 0.107339, 0.0);
        case 713: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 714: return vec4(0.109018, 0.159058, 0.107339, 0.0);
        case 715: return vec4(-0.066530, 1.012450, 0.095402, 0.0);
        case 716: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 717: return vec4(-0.010089, 1.018949, -0.006296, 0.0);
        case 718: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 719: return vec4(-0.066530, 1.012450, 0.095402, 0.0);
        case 720: return vec4(-0.066530, 1.012450, 0.095402, 0.0);
        case 721: return vec4(0.109018, 0.159058, 0.107339, 0.0);
        case 722: return vec4(0.078837, 1.024426, 0.105890, 0.0);
        case 723: return vec4(0.184232, 0.046016, 0.107924, 0.0);
        case 724: return vec4(0.078837, 1.024426, 0.105890, 0.0);
        case 725: return vec4(0.109018, 0.159058, 0.107339, 0.0);
        case 726: return vec4(0.184232, 0.046016, 0.107924, 0.0);
        case 727: return vec4(0.126466, -0.015555, 0.261685, 0.0);
        case 728: return vec4(0.125003, 0.121321, -0.051899, 0.0);
        case 729: return vec4(0.135665, 1.060305, 0.201608, 0.0);
        case 730: return vec4(0.256849, 0.425630, 0.173512, 0.0);
        case 731: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 732: return vec4(0.249784, 0.265013, -0.264766, 0.0);
        case 733: return vec4(0.256849, 0.425630, 0.173512, 0.0);
        case 734: return vec4(0.135665, 1.060305, 0.201608, 0.0);
        case 735: return vec4(0.249784, 0.265013, -0.264766, 0.0);
        case 736: return vec4(0.135665, 1.060305, 0.201608, 0.0);
        case 737: return vec4(-0.020036, 1.070062, 0.015155, 0.0);
        case 738: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 739: return vec4(0.256849, 0.425630, 0.173512, 0.0);
        case 740: return vec4(0.249784, 0.265013, -0.264766, 0.0);
        case 741: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 742: return vec4(0.249784, 0.265013, -0.264766, 0.0);
        case 743: return vec4(-0.020036, 1.070062, 0.015155, 0.0);
        case 744: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 745: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 746: return vec4(0.708718, -0.005564, 0.347980, 0.0);
        case 747: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 748: return vec4(0.256849, 0.425630, 0.173512, 0.0);
        case 749: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 750: return vec4(0.708718, -0.005564, 0.347980, 0.0);
        case 751: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 752: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 753: return vec4(0.256849, 0.425630, 0.173512, 0.0);
        case 754: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 755: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 756: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 757: return vec4(0.249784, 0.265013, -0.264766, 0.0);
        case 758: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 759: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 760: return vec4(-0.174860, 0.351519, 0.079523, 0.0);
        case 761: return vec4(-0.020036, 1.070062, 0.015155, 0.0);
        case 762: return vec4(-0.524719, 0.032144, -0.128544, 0.0);
        case 763: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 764: return vec4(-0.174860, 0.351519, 0.079523, 0.0);
        case 765: return vec4(-0.174860, 0.351519, 0.079523, 0.0);
        case 766: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 767: return vec4(-0.020036, 1.070062, 0.015155, 0.0);
        case 768: return vec4(-0.524719, 0.032144, -0.128544, 0.0);
        case 769: return vec4(-0.588271, 0.006201, -0.433714, 0.0);
        case 770: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 771: return vec4(-0.588271, 0.006201, -0.433714, 0.0);
        case 772: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 773: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 774: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 775: return vec4(-0.139941, 0.171092, -0.358654, 0.0);
        case 776: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 777: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 778: return vec4(0.489723, 0.093914, -0.266242, 0.0);
        case 779: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 780: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 781: return vec4(0.334070, 0.313111, 0.123899, 0.0);
        case 782: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 783: return vec4(0.334070, 0.313111, 0.123899, 0.0);
        case 784: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 785: return vec4(0.213478, 1.043798, 0.253628, 0.0);
        case 786: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 787: return vec4(0.213478, 1.043798, 0.253628, 0.0);
        case 788: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 789: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 790: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 791: return vec4(0.334070, 0.313111, 0.123899, 0.0);
        case 792: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 793: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 794: return vec4(0.334070, 0.313111, 0.123899, 0.0);
        case 795: return vec4(0.257321, 0.145362, 0.355660, 0.0);
        case 796: return vec4(0.708718, -0.005564, 0.347980, 0.0);
        case 797: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 798: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 799: return vec4(0.001713, 0.214821, -0.387921, 0.0);
        case 800: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 801: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 802: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 803: return vec4(0.001713, 0.214821, -0.387921, 0.0);
        case 804: return vec4(-0.588271, 0.006201, -0.433714, 0.0);
        case 805: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 806: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 807: return vec4(-0.524719, 0.032144, -0.128544, 0.0);
        case 808: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 809: return vec4(-0.588271, 0.006201, -0.433714, 0.0);
        case 810: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 811: return vec4(-0.524719, 0.032144, -0.128544, 0.0);
        case 812: return vec4(-0.174860, 0.351519, 0.079523, 0.0);
        case 813: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 814: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 815: return vec4(-0.113238, 0.982554, 0.110453, 0.0);
        case 816: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 817: return vec4(-0.113238, 0.982554, 0.110453, 0.0);
        case 818: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 819: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 820: return vec4(0.001713, 0.214821, -0.387921, 0.0);
        case 821: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 822: return vec4(0.001713, 0.214821, -0.387921, 0.0);
        case 823: return vec4(0.021915, 1.119303, -0.024115, 0.0);
        case 824: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 825: return vec4(-0.040552, 0.023171, -0.760682, 0.0);
        case 826: return vec4(0.356214, 0.119525, -0.399525, 0.0);
        case 827: return vec4(0.581312, 0.034502, -0.569417, 0.0);
        case 828: return vec4(0.213478, 1.043798, 0.253628, 0.0);
        case 829: return vec4(0.013893, 0.890794, 0.358372, 0.0);
        case 830: return vec4(0.334070, 0.313111, 0.123899, 0.0);
        case 831: return vec4(-0.344855, 0.199192, -0.187084, 0.0);
        case 832: return vec4(-0.174860, 0.351519, 0.079523, 0.0);
        case 833: return vec4(0.013893, 0.890794, 0.358372, 0.0);
    }
    return vec4(0.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    int idx = int(fragCoord.x) + int(fragCoord.y) * int(iResolution.x);
    if ( idx >= SPHERES_OFFSET && idx < TRIANGLES_OFFSET ) {
        fragColor = sphere(idx - SPHERES_OFFSET);
        return;
    }
    if ( iFrame > 3 ) { // use the previous frame
        discard;
    }
    if ( idx < MATERIALS_OFFSET ) {
        fragColor = light(idx - LIGHTS_OFFSET);
    } else if ( idx < PLANES_OFFSET ) {
        fragColor = material(idx - MATERIALS_OFFSET);
    } else if ( idx < SPHERES_OFFSET ) {
        fragColor = plane(idx - PLANES_OFFSET);
    } else {
        fragColor = triangle(idx - TRIANGLES_OFFSET);
    }
}
