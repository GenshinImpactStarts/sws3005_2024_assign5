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



vec4 camera( in int idx )
{
    float speed = 0.2;
    vec3 cam_pos, cam_lookat, cam_up_vec;
	float time = mod(iTime,39.33294);
    
    if (time >= 0.03333 && time < 0.06667) {
        cam_pos = vec3(-3.57501, 10.68408, 10.03236);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.06667 && time < 0.10000) {
        cam_pos = vec3(-3.56908, 10.68408, 10.03568);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.10000 && time < 0.13333) {
        cam_pos = vec3(-3.56315, 10.68408, 10.03900);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.13333 && time < 0.16667) {
        cam_pos = vec3(-3.55722, 10.68408, 10.04232);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.16667 && time < 0.20000) {
        cam_pos = vec3(-3.55128, 10.68408, 10.04564);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.20000 && time < 0.23333) {
        cam_pos = vec3(-3.54535, 10.68408, 10.04895);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.23333 && time < 0.26666) {
        cam_pos = vec3(-3.53942, 10.68408, 10.05227);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.26666 && time < 0.30000) {
        cam_pos = vec3(-3.53349, 10.68408, 10.05559);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.30000 && time < 0.33333) {
        cam_pos = vec3(-3.52756, 10.68408, 10.05891);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.33333 && time < 0.36666) {
        cam_pos = vec3(-3.52162, 10.68408, 10.06223);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.36666 && time < 0.40000) {
        cam_pos = vec3(-3.51569, 10.68408, 10.06554);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.40000 && time < 0.43333) {
        cam_pos = vec3(-3.50976, 10.68408, 10.06886);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.43333 && time < 0.46666) {
        cam_pos = vec3(-3.50383, 10.68408, 10.07218);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.46666 && time < 0.50000) {
        cam_pos = vec3(-3.49790, 10.68408, 10.07550);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.50000 && time < 0.53333) {
        cam_pos = vec3(-3.49196, 10.68408, 10.07882);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.53333 && time < 0.56666) {
        cam_pos = vec3(-3.48603, 10.68408, 10.08214);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.56666 && time < 0.59999) {
        cam_pos = vec3(-3.48010, 10.68408, 10.08545);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.59999 && time < 0.63333) {
        cam_pos = vec3(-3.47417, 10.68408, 10.08877);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.63333 && time < 0.66666) {
        cam_pos = vec3(-3.46824, 10.68408, 10.09209);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.66666 && time < 0.69999) {
        cam_pos = vec3(-3.46231, 10.68408, 10.09541);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.69999 && time < 0.73333) {
        cam_pos = vec3(-3.45637, 10.68408, 10.09872);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.73333 && time < 0.76666) {
        cam_pos = vec3(-3.45044, 10.68408, 10.10204);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.76666 && time < 0.79999) {
        cam_pos = vec3(-3.44451, 10.68408, 10.10536);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.79999 && time < 0.83333) {
        cam_pos = vec3(-3.43858, 10.68408, 10.10868);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.83333 && time < 0.86666) {
        cam_pos = vec3(-3.43265, 10.68408, 10.11200);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.86666 && time < 0.89999) {
        cam_pos = vec3(-3.42671, 10.68408, 10.11532);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.89999 && time < 0.93332) {
        cam_pos = vec3(-3.42078, 10.68408, 10.11863);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.93332 && time < 0.96666) {
        cam_pos = vec3(-3.41485, 10.68408, 10.12195);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.96666 && time < 0.99999) {
        cam_pos = vec3(-3.40892, 10.68408, 10.12527);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 0.99999 && time < 1.03332) {
        cam_pos = vec3(-3.40299, 10.68408, 10.12859);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 1.03332 && time < 1.06666) {
        cam_pos = vec3(-3.39705, 10.68408, 10.13190);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 1.06666 && time < 1.09999) {
        cam_pos = vec3(-3.39112, 10.68408, 10.13522);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 1.09999 && time < 1.13332) {
        cam_pos = vec3(-3.38519, 10.68408, 10.13854);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
    }
    
    if (time >= 1.13332 && time < 1.16666) {
        cam_pos = vec3(-0.18654, 1.61794, 4.02523);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00229, 0.99273, -0.11946);
    }
    
    if (time >= 1.16666 && time < 1.19999) {
        cam_pos = vec3(-0.18560, 1.61417, 4.02916);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.19999 && time < 1.23332) {
        cam_pos = vec3(-0.18594, 1.61192, 4.04619);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.23332 && time < 1.26665) {
        cam_pos = vec3(-0.18648, 1.60835, 4.07322);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.26665 && time < 1.29999) {
        cam_pos = vec3(-0.18720, 1.60360, 4.10930);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.29999 && time < 1.33332) {
        cam_pos = vec3(-0.18809, 1.59775, 4.15362);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.33332 && time < 1.36665) {
        cam_pos = vec3(-0.18912, 1.59091, 4.20544);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.36665 && time < 1.39999) {
        cam_pos = vec3(-0.19030, 1.58317, 4.26413);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.39999 && time < 1.43332) {
        cam_pos = vec3(-0.19160, 1.57460, 4.32911);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.43332 && time < 1.46665) {
        cam_pos = vec3(-0.19301, 1.56527, 4.39987);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.46665 && time < 1.49999) {
        cam_pos = vec3(-0.19453, 1.55524, 4.47593);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.49999 && time < 1.53332) {
        cam_pos = vec3(-0.19615, 1.54456, 4.55687);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.53332 && time < 1.56665) {
        cam_pos = vec3(-0.19786, 1.53329, 4.64231);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.56665 && time < 1.59998) {
        cam_pos = vec3(-0.19965, 1.52148, 4.73189);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.59998 && time < 1.63332) {
        cam_pos = vec3(-0.20152, 1.50916, 4.82528);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.63332 && time < 1.66665) {
        cam_pos = vec3(-0.20346, 1.49638, 4.92217);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.66665 && time < 1.69998) {
        cam_pos = vec3(-0.20546, 1.48318, 5.02229);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.69998 && time < 1.73332) {
        cam_pos = vec3(-0.20753, 1.46958, 5.12536);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.73332 && time < 1.76665) {
        cam_pos = vec3(-0.20964, 1.45563, 5.23113);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.76665 && time < 1.79998) {
        cam_pos = vec3(-0.21181, 1.44136, 5.33937);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.79998 && time < 1.83332) {
        cam_pos = vec3(-0.21402, 1.42679, 5.44985);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.83332 && time < 1.86665) {
        cam_pos = vec3(-0.21627, 1.41195, 5.56236);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.86665 && time < 1.89998) {
        cam_pos = vec3(-0.21855, 1.39687, 5.67669);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.89998 && time < 1.93331) {
        cam_pos = vec3(-0.22087, 1.38157, 5.79265);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.93331 && time < 1.96665) {
        cam_pos = vec3(-0.22322, 1.36609, 5.91005);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.96665 && time < 1.99998) {
        cam_pos = vec3(-0.22559, 1.35044, 6.02869);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 1.99998 && time < 2.03331) {
        cam_pos = vec3(-0.22799, 1.33465, 6.14841);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.03331 && time < 2.06665) {
        cam_pos = vec3(-0.23040, 1.31874, 6.26902);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.06665 && time < 2.09998) {
        cam_pos = vec3(-0.23283, 1.30274, 6.39036);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.09998 && time < 2.13331) {
        cam_pos = vec3(-0.23527, 1.28666, 6.51224);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.13331 && time < 2.16665) {
        cam_pos = vec3(-0.23771, 1.27054, 6.63451);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.16665 && time < 2.19998) {
        cam_pos = vec3(-0.24016, 1.25438, 6.75699);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.19998 && time < 2.23331) {
        cam_pos = vec3(-0.24261, 1.23822, 6.87951);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.23331 && time < 2.26664) {
        cam_pos = vec3(-0.24506, 1.22208, 7.00190);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.26664 && time < 2.29998) {
        cam_pos = vec3(-0.24750, 1.20598, 7.12398);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.29998 && time < 2.33331) {
        cam_pos = vec3(-0.24994, 1.18994, 7.24559);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.33331 && time < 2.36664) {
        cam_pos = vec3(-0.25236, 1.17399, 7.36654);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.36664 && time < 2.39998) {
        cam_pos = vec3(-0.25476, 1.15814, 7.48665);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.39998 && time < 2.43331) {
        cam_pos = vec3(-0.25714, 1.14244, 7.60573);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.43331 && time < 2.46664) {
        cam_pos = vec3(-0.25950, 1.12690, 7.72358);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.46664 && time < 2.49998) {
        cam_pos = vec3(-0.26183, 1.11154, 7.83999);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.49998 && time < 2.53331) {
        cam_pos = vec3(-0.26412, 1.09640, 7.95476);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.53331 && time < 2.56664) {
        cam_pos = vec3(-0.26638, 1.08151, 8.06765);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.56664 && time < 2.59997) {
        cam_pos = vec3(-0.26859, 1.06690, 8.17842);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.59997 && time < 2.63331) {
        cam_pos = vec3(-0.27076, 1.05261, 8.28683);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.63331 && time < 2.66664) {
        cam_pos = vec3(-0.27288, 1.03865, 8.39261);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.66664 && time < 2.69997) {
        cam_pos = vec3(-0.27494, 1.02509, 8.49546);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.69997 && time < 2.73331) {
        cam_pos = vec3(-0.27693, 1.01195, 8.59507);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.73331 && time < 2.76664) {
        cam_pos = vec3(-0.27885, 0.99929, 8.69110);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.76664 && time < 2.79997) {
        cam_pos = vec3(-0.28069, 0.98714, 8.78318);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.79997 && time < 2.83331) {
        cam_pos = vec3(-0.28245, 0.97557, 8.87091);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.83331 && time < 2.86664) {
        cam_pos = vec3(-0.28411, 0.96463, 8.95384);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.86664 && time < 2.89997) {
        cam_pos = vec3(-0.28566, 0.95439, 9.03148);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.89997 && time < 2.93330) {
        cam_pos = vec3(-0.28709, 0.94492, 9.10326);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.93330 && time < 2.96664) {
        cam_pos = vec3(-0.28840, 0.93631, 9.16857);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.96664 && time < 2.99997) {
        cam_pos = vec3(-0.28956, 0.92864, 9.22670);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 2.99997 && time < 3.03330) {
        cam_pos = vec3(-0.29057, 0.92203, 9.27683);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 3.03330 && time < 3.06664) {
        cam_pos = vec3(-0.29139, 0.91660, 9.31803);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 3.06664 && time < 3.09997) {
        cam_pos = vec3(-0.29201, 0.91248, 9.34922);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 3.09997 && time < 3.13330) {
        cam_pos = vec3(-0.29241, 0.90986, 9.36909);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 3.13330 && time < 3.16664) {
        cam_pos = vec3(-0.29255, 0.90894, 9.37612);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
    }
    
    if (time >= 3.16664 && time < 3.19997) {
        cam_pos = vec3(1.64025, 2.46871, 4.22964);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.26847, 0.95989, -0.08048);
    }
    
    if (time >= 3.19997 && time < 3.23330) {
        cam_pos = vec3(1.63569, 2.47286, 4.20413);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.26691, 0.96044, -0.07952);
    }
    
    if (time >= 3.23330 && time < 3.26663) {
        cam_pos = vec3(1.62930, 2.47555, 4.18346);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.26509, 0.96101, -0.07860);
    }
    
    if (time >= 3.26663 && time < 3.29997) {
        cam_pos = vec3(1.62291, 2.47823, 4.16278);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.26328, 0.96159, -0.07768);
    }
    
    if (time >= 3.29997 && time < 3.33330) {
        cam_pos = vec3(1.61652, 2.48091, 4.14211);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.26146, 0.96216, -0.07676);
    }
    
    if (time >= 3.33330 && time < 3.36663) {
        cam_pos = vec3(1.61012, 2.48358, 4.12144);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25964, 0.96272, -0.07583);
    }
    
    if (time >= 3.36663 && time < 3.39997) {
        cam_pos = vec3(1.60371, 2.48626, 4.10077);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25783, 0.96328, -0.07491);
    }
    
    if (time >= 3.39997 && time < 3.43330) {
        cam_pos = vec3(1.59731, 2.48893, 4.08010);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25601, 0.96384, -0.07398);
    }
    
    if (time >= 3.43330 && time < 3.46663) {
        cam_pos = vec3(1.59090, 2.49160, 4.05944);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25419, 0.96439, -0.07306);
    }
    
    if (time >= 3.46663 && time < 3.49997) {
        cam_pos = vec3(1.58448, 2.49427, 4.03877);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25236, 0.96494, -0.07214);
    }
    
    if (time >= 3.49997 && time < 3.53330) {
        cam_pos = vec3(1.57806, 2.49693, 4.01811);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.25054, 0.96548, -0.07121);
    }
    
    if (time >= 3.53330 && time < 3.56663) {
        cam_pos = vec3(1.57164, 2.49960, 3.99745);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.24872, 0.96602, -0.07028);
    }
    
    if (time >= 3.56663 && time < 3.59996) {
        cam_pos = vec3(1.56522, 2.50226, 3.97679);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.24689, 0.96656, -0.06936);
    }
    
    if (time >= 3.59996 && time < 3.63330) {
        cam_pos = vec3(1.55879, 2.50492, 3.95614);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.24507, 0.96709, -0.06843);
    }
    
    if (time >= 3.63330 && time < 3.66663) {
        cam_pos = vec3(1.55236, 2.50757, 3.93548);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.24324, 0.96761, -0.06750);
    }
    
    if (time >= 3.66663 && time < 3.69996) {
        cam_pos = vec3(1.54592, 2.51023, 3.91483);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.24142, 0.96814, -0.06657);
    }
    
    if (time >= 3.69996 && time < 3.73330) {
        cam_pos = vec3(1.53948, 2.51288, 3.89418);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23959, 0.96865, -0.06564);
    }
    
    if (time >= 3.73330 && time < 3.76663) {
        cam_pos = vec3(1.53304, 2.51553, 3.87353);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23776, 0.96917, -0.06472);
    }
    
    if (time >= 3.76663 && time < 3.79996) {
        cam_pos = vec3(1.52659, 2.51818, 3.85288);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23593, 0.96967, -0.06379);
    }
    
    if (time >= 3.79996 && time < 3.83330) {
        cam_pos = vec3(1.52014, 2.52083, 3.83224);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23410, 0.97018, -0.06286);
    }
    
    if (time >= 3.83330 && time < 3.86663) {
        cam_pos = vec3(1.51369, 2.52347, 3.81160);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23226, 0.97068, -0.06192);
    }
    
    if (time >= 3.86663 && time < 3.89996) {
        cam_pos = vec3(1.50723, 2.52611, 3.79095);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.23043, 0.97118, -0.06099);
    }
    
    if (time >= 3.89996 && time < 3.93329) {
        cam_pos = vec3(1.50077, 2.52875, 3.77031);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.22860, 0.97167, -0.06006);
    }
    
    if (time >= 3.93329 && time < 3.96663) {
        cam_pos = vec3(1.49430, 2.53139, 3.74968);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.22676, 0.97215, -0.05913);
    }
    
    if (time >= 3.96663 && time < 3.99996) {
        cam_pos = vec3(1.48783, 2.53403, 3.72904);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.22493, 0.97264, -0.05820);
    }
    
    if (time >= 3.99996 && time < 4.03329) {
        cam_pos = vec3(1.48136, 2.53666, 3.70841);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.22309, 0.97311, -0.05726);
    }
    
    if (time >= 4.03329 && time < 4.06663) {
        cam_pos = vec3(1.47488, 2.53930, 3.68777);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.22125, 0.97359, -0.05633);
    }
    
    if (time >= 4.06663 && time < 4.09996) {
        cam_pos = vec3(1.46841, 2.54193, 3.66714);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21941, 0.97406, -0.05540);
    }
    
    if (time >= 4.09996 && time < 4.13329) {
        cam_pos = vec3(1.46192, 2.54455, 3.64652);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21757, 0.97452, -0.05446);
    }
    
    if (time >= 4.13329 && time < 4.16663) {
        cam_pos = vec3(1.45543, 2.54718, 3.62589);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21573, 0.97498, -0.05353);
    }
    
    if (time >= 4.16663 && time < 4.19996) {
        cam_pos = vec3(1.44894, 2.54981, 3.60527);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21389, 0.97544, -0.05259);
    }
    
    if (time >= 4.19996 && time < 4.23329) {
        cam_pos = vec3(1.44245, 2.55243, 3.58464);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21205, 0.97589, -0.05166);
    }
    
    if (time >= 4.23329 && time < 4.26662) {
        cam_pos = vec3(1.43595, 2.55505, 3.56402);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21021, 0.97634, -0.05072);
    }
    
    if (time >= 4.26662 && time < 4.29996) {
        cam_pos = vec3(1.42945, 2.55767, 3.54340);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20836, 0.97678, -0.04978);
    }
    
    if (time >= 4.29996 && time < 4.33329) {
        cam_pos = vec3(1.42294, 2.56029, 3.52279);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20652, 0.97722, -0.04885);
    }
    
    if (time >= 4.33329 && time < 4.36662) {
        cam_pos = vec3(1.41643, 2.56290, 3.50217);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20467, 0.97766, -0.04791);
    }
    
    if (time >= 4.36662 && time < 4.39996) {
        cam_pos = vec3(1.40992, 2.56552, 3.48156);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20283, 0.97809, -0.04697);
    }
    
    if (time >= 4.39996 && time < 4.43329) {
        cam_pos = vec3(1.40340, 2.56813, 3.46095);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20098, 0.97851, -0.04603);
    }
    
    if (time >= 4.43329 && time < 4.46662) {
        cam_pos = vec3(1.39688, 2.57074, 3.44034);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19913, 0.97893, -0.04509);
    }
    
    if (time >= 4.46662 && time < 4.49996) {
        cam_pos = vec3(1.39036, 2.57334, 3.41973);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19728, 0.97935, -0.04416);
    }
    
    if (time >= 4.49996 && time < 4.53329) {
        cam_pos = vec3(1.38383, 2.57595, 3.39912);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19543, 0.97976, -0.04322);
    }
    
    if (time >= 4.53329 && time < 4.56662) {
        cam_pos = vec3(1.37730, 2.57855, 3.37852);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19358, 0.98017, -0.04228);
    }
    
    if (time >= 4.56662 && time < 4.59995) {
        cam_pos = vec3(1.37076, 2.58116, 3.35792);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19173, 0.98058, -0.04134);
    }
    
    if (time >= 4.59995 && time < 4.63329) {
        cam_pos = vec3(1.36422, 2.58376, 3.33732);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18988, 0.98098, -0.04040);
    }
    
    if (time >= 4.63329 && time < 4.66662) {
        cam_pos = vec3(1.35768, 2.58636, 3.31672);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18803, 0.98137, -0.03945);
    }
    
    if (time >= 4.66662 && time < 4.69995) {
        cam_pos = vec3(1.35113, 2.58895, 3.29612);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18618, 0.98176, -0.03851);
    }
    
    if (time >= 4.69995 && time < 4.73329) {
        cam_pos = vec3(1.34458, 2.59155, 3.27553);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18432, 0.98215, -0.03757);
    }
    
    if (time >= 4.73329 && time < 4.76662) {
        cam_pos = vec3(1.33802, 2.59414, 3.25494);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18247, 0.98253, -0.03663);
    }
    
    if (time >= 4.76662 && time < 4.79995) {
        cam_pos = vec3(1.33146, 2.59674, 3.23435);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18061, 0.98291, -0.03569);
    }
    
    if (time >= 4.79995 && time < 4.83329) {
        cam_pos = vec3(1.32490, 2.59933, 3.21376);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17876, 0.98328, -0.03474);
    }
    
    if (time >= 4.83329 && time < 4.86662) {
        cam_pos = vec3(1.31834, 2.60192, 3.19317);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17690, 0.98365, -0.03380);
    }
    
    if (time >= 4.86662 && time < 4.89995) {
        cam_pos = vec3(1.31177, 2.60450, 3.17259);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17504, 0.98401, -0.03286);
    }
    
    if (time >= 4.89995 && time < 4.93328) {
        cam_pos = vec3(1.30519, 2.60709, 3.15201);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17318, 0.98437, -0.03191);
    }
    
    if (time >= 4.93328 && time < 4.96662) {
        cam_pos = vec3(1.29861, 2.60967, 3.13143);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17132, 0.98473, -0.03097);
    }
    
    if (time >= 4.96662 && time < 4.99995) {
        cam_pos = vec3(1.29203, 2.61226, 3.11085);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16947, 0.98508, -0.03003);
    }
    
    if (time >= 4.99995 && time < 5.03328) {
        cam_pos = vec3(1.28545, 2.61484, 3.09027);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16760, 0.98543, -0.02908);
    }
    
    if (time >= 5.03328 && time < 5.06662) {
        cam_pos = vec3(1.27886, 2.61742, 3.06970);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16574, 0.98577, -0.02813);
    }
    
    if (time >= 5.06662 && time < 5.09995) {
        cam_pos = vec3(1.27227, 2.62000, 3.04912);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16388, 0.98611, -0.02719);
    }
    
    if (time >= 5.09995 && time < 5.13328) {
        cam_pos = vec3(1.26567, 2.62257, 3.02855);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16202, 0.98644, -0.02624);
    }
    
    if (time >= 5.13328 && time < 5.16662) {
        cam_pos = vec3(1.25907, 2.62515, 3.00798);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16016, 0.98677, -0.02530);
    }
    
    if (time >= 5.16662 && time < 5.19995) {
        cam_pos = vec3(1.25246, 2.62772, 2.98742);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15829, 0.98709, -0.02435);
    }
    
    if (time >= 5.19995 && time < 5.23328) {
        cam_pos = vec3(1.24586, 2.63029, 2.96685);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15643, 0.98741, -0.02340);
    }
    
    if (time >= 5.23328 && time < 5.26661) {
        cam_pos = vec3(1.23924, 2.63286, 2.94629);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15457, 0.98773, -0.02246);
    }
    
    if (time >= 5.26661 && time < 5.29995) {
        cam_pos = vec3(1.23263, 2.63543, 2.92573);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15270, 0.98804, -0.02151);
    }
    
    if (time >= 5.29995 && time < 5.33328) {
        cam_pos = vec3(1.22601, 2.63800, 2.90517);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15084, 0.98835, -0.02056);
    }
    
    if (time >= 5.33328 && time < 5.36661) {
        cam_pos = vec3(1.21938, 2.64057, 2.88461);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14897, 0.98865, -0.01961);
    }
    
    if (time >= 5.36661 && time < 5.39995) {
        cam_pos = vec3(1.21276, 2.64313, 2.86406);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14710, 0.98895, -0.01867);
    }
    
    if (time >= 5.39995 && time < 5.43328) {
        cam_pos = vec3(1.20613, 2.64569, 2.84350);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14523, 0.98924, -0.01772);
    }
    
    if (time >= 5.43328 && time < 5.46661) {
        cam_pos = vec3(1.19949, 2.64826, 2.82295);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14337, 0.98953, -0.01677);
    }
    
    if (time >= 5.46661 && time < 5.49995) {
        cam_pos = vec3(1.19285, 2.65082, 2.80240);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14150, 0.98981, -0.01582);
    }
    
    if (time >= 5.49995 && time < 5.53328) {
        cam_pos = vec3(1.18621, 2.65337, 2.78185);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13963, 0.99009, -0.01487);
    }
    
    if (time >= 5.53328 && time < 5.56661) {
        cam_pos = vec3(1.17956, 2.65593, 2.76131);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13776, 0.99037, -0.01392);
    }
    
    if (time >= 5.56661 && time < 5.59994) {
        cam_pos = vec3(1.17291, 2.65849, 2.74076);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13589, 0.99064, -0.01297);
    }
    
    if (time >= 5.59994 && time < 5.63328) {
        cam_pos = vec3(1.16626, 2.66104, 2.72022);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13402, 0.99091, -0.01202);
    }
    
    if (time >= 5.63328 && time < 5.66661) {
        cam_pos = vec3(1.15960, 2.66360, 2.69968);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13215, 0.99117, -0.01107);
    }
    
    if (time >= 5.66661 && time < 5.69994) {
        cam_pos = vec3(1.15294, 2.66615, 2.67915);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13028, 0.99143, -0.01012);
    }
    
    if (time >= 5.69994 && time < 5.73328) {
        cam_pos = vec3(1.14627, 2.66870, 2.65861);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12840, 0.99168, -0.00917);
    }
    
    if (time >= 5.73328 && time < 5.76661) {
        cam_pos = vec3(1.13960, 2.67125, 2.63808);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12653, 0.99193, -0.00822);
    }
    
    if (time >= 5.76661 && time < 5.79994) {
        cam_pos = vec3(1.13293, 2.67380, 2.61755);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12466, 0.99217, -0.00726);
    }
    
    if (time >= 5.79994 && time < 5.83328) {
        cam_pos = vec3(1.12625, 2.67635, 2.59702);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12279, 0.99241, -0.00631);
    }
    
    if (time >= 5.83328 && time < 5.86661) {
        cam_pos = vec3(1.11957, 2.67889, 2.57649);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12091, 0.99265, -0.00536);
    }
    
    if (time >= 5.86661 && time < 5.89994) {
        cam_pos = vec3(1.11288, 2.68144, 2.55596);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11904, 0.99288, -0.00441);
    }
    
    if (time >= 5.89994 && time < 5.93327) {
        cam_pos = vec3(1.10619, 2.68398, 2.53544);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11716, 0.99311, -0.00346);
    }
    
    if (time >= 5.93327 && time < 5.96661) {
        cam_pos = vec3(1.09950, 2.68652, 2.51492);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11529, 0.99333, -0.00250);
    }
    
    if (time >= 5.96661 && time < 5.99994) {
        cam_pos = vec3(1.09280, 2.68906, 2.49440);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11341, 0.99355, -0.00155);
    }
    
    if (time >= 5.99994 && time < 6.03327) {
        cam_pos = vec3(1.08610, 2.69160, 2.47388);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11154, 0.99376, -0.00060);
    }
    
    if (time >= 6.03327 && time < 6.06661) {
        cam_pos = vec3(4.91077, 2.36275, 6.45292);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13925, 0.99004, 0.02072);
    }
    
    if (time >= 6.06661 && time < 6.09994) {
        cam_pos = vec3(4.94315, 2.36024, 6.44168);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13924, 0.99006, 0.02006);
    }
    
    if (time >= 6.09994 && time < 6.13327) {
        cam_pos = vec3(4.97142, 2.35810, 6.42109);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13917, 0.99008, 0.01929);
    }
    
    if (time >= 6.13327 && time < 6.16661) {
        cam_pos = vec3(5.00223, 2.35576, 6.39843);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13909, 0.99011, 0.01845);
    }
    
    if (time >= 6.16661 && time < 6.19994) {
        cam_pos = vec3(5.03539, 2.35323, 6.37381);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13900, 0.99014, 0.01754);
    }
    
    if (time >= 6.19994 && time < 6.23327) {
        cam_pos = vec3(5.07074, 2.35053, 6.34729);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13889, 0.99017, 0.01657);
    }
    
    if (time >= 6.23327 && time < 6.26660) {
        cam_pos = vec3(5.10810, 2.34766, 6.31894);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13878, 0.99020, 0.01554);
    }
    
    if (time >= 6.26660 && time < 6.29994) {
        cam_pos = vec3(5.14733, 2.34464, 6.28882);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13864, 0.99024, 0.01446);
    }
    
    if (time >= 6.29994 && time < 6.33327) {
        cam_pos = vec3(5.18829, 2.34146, 6.25699);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13850, 0.99027, 0.01333);
    }
    
    if (time >= 6.33327 && time < 6.36660) {
        cam_pos = vec3(5.23084, 2.33815, 6.22349);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13833, 0.99031, 0.01215);
    }
    
    if (time >= 6.36660 && time < 6.39994) {
        cam_pos = vec3(5.27485, 2.33471, 6.18836);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13816, 0.99035, 0.01092);
    }
    
    if (time >= 6.39994 && time < 6.43327) {
        cam_pos = vec3(5.32023, 2.33114, 6.15165);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13796, 0.99039, 0.00966);
    }
    
    if (time >= 6.43327 && time < 6.46660) {
        cam_pos = vec3(5.36684, 2.32745, 6.11339);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13775, 0.99043, 0.00835);
    }
    
    if (time >= 6.46660 && time < 6.49994) {
        cam_pos = vec3(5.41460, 2.32365, 6.07361);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13751, 0.99047, 0.00701);
    }
    
    if (time >= 6.49994 && time < 6.53327) {
        cam_pos = vec3(5.46340, 2.31974, 6.03235);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13726, 0.99052, 0.00564);
    }
    
    if (time >= 6.53327 && time < 6.56660) {
        cam_pos = vec3(5.51315, 2.31573, 5.98963);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13699, 0.99056, 0.00423);
    }
    
    if (time >= 6.56660 && time < 6.59993) {
        cam_pos = vec3(5.56375, 2.31162, 5.94548);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13670, 0.99061, 0.00280);
    }
    
    if (time >= 6.59993 && time < 6.63327) {
        cam_pos = vec3(5.61513, 2.30742, 5.89993);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13639, 0.99065, 0.00134);
    }
    
    if (time >= 6.63327 && time < 6.66660) {
        cam_pos = vec3(5.66720, 2.30313, 5.85299);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13605, 0.99070, -0.00015);
    }
    
    if (time >= 6.66660 && time < 6.69993) {
        cam_pos = vec3(5.71988, 2.29876, 5.80470);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13570, 0.99075, -0.00166);
    }
    
    if (time >= 6.69993 && time < 6.73327) {
        cam_pos = vec3(5.77311, 2.29431, 5.75507);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13532, 0.99080, -0.00319);
    }
    
    if (time >= 6.73327 && time < 6.76660) {
        cam_pos = vec3(5.82681, 2.28978, 5.70413);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13491, 0.99085, -0.00475);
    }
    
    if (time >= 6.76660 && time < 6.79993) {
        cam_pos = vec3(5.88091, 2.28518, 5.65190);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13449, 0.99090, -0.00631);
    }
    
    if (time >= 6.79993 && time < 6.83327) {
        cam_pos = vec3(5.93534, 2.28052, 5.59839);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13404, 0.99094, -0.00790);
    }
    
    if (time >= 6.83327 && time < 6.86660) {
        cam_pos = vec3(5.99006, 2.27578, 5.54362);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13356, 0.99100, -0.00950);
    }
    
    if (time >= 6.86660 && time < 6.89993) {
        cam_pos = vec3(6.04498, 2.27098, 5.48763);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13306, 0.99105, -0.01111);
    }
    
    if (time >= 6.89993 && time < 6.93326) {
        cam_pos = vec3(6.10006, 2.26613, 5.43042);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13254, 0.99110, -0.01274);
    }
    
    if (time >= 6.93326 && time < 6.96660) {
        cam_pos = vec3(6.15524, 2.26121, 5.37202);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13199, 0.99115, -0.01437);
    }
    
    if (time >= 6.96660 && time < 6.99993) {
        cam_pos = vec3(6.21046, 2.25624, 5.31244);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13142, 0.99120, -0.01601);
    }
    
    if (time >= 6.99993 && time < 7.03326) {
        cam_pos = vec3(6.26568, 2.25122, 5.25171);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13082, 0.99125, -0.01767);
    }
    
    if (time >= 7.03326 && time < 7.06660) {
        cam_pos = vec3(6.32085, 2.24615, 5.18985);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13019, 0.99130, -0.01932);
    }
    
    if (time >= 7.06660 && time < 7.09993) {
        cam_pos = vec3(6.37590, 2.24104, 5.12687);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12954, 0.99135, -0.02098);
    }
    
    if (time >= 7.09993 && time < 7.13326) {
        cam_pos = vec3(6.43081, 2.23588, 5.06279);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12886, 0.99140, -0.02265);
    }
    
    if (time >= 7.13326 && time < 7.16660) {
        cam_pos = vec3(6.48551, 2.23067, 4.99764);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12816, 0.99146, -0.02431);
    }
    
    if (time >= 7.16660 && time < 7.19993) {
        cam_pos = vec3(6.53998, 2.22543, 4.93143);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12743, 0.99151, -0.02598);
    }
    
    if (time >= 7.19993 && time < 7.23326) {
        cam_pos = vec3(6.59416, 2.22015, 4.86420);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12667, 0.99156, -0.02765);
    }
    
    if (time >= 7.23326 && time < 7.26659) {
        cam_pos = vec3(6.64802, 2.21483, 4.79595);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12589, 0.99161, -0.02931);
    }
    
    if (time >= 7.26659 && time < 7.29993) {
        cam_pos = vec3(6.70151, 2.20948, 4.72671);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12508, 0.99166, -0.03097);
    }
    
    if (time >= 7.29993 && time < 7.33326) {
        cam_pos = vec3(6.75460, 2.20409, 4.65650);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12425, 0.99171, -0.03263);
    }
    
    if (time >= 7.33326 && time < 7.36659) {
        cam_pos = vec3(6.80725, 2.19868, 4.58535);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12339, 0.99177, -0.03429);
    }
    
    if (time >= 7.36659 && time < 7.39993) {
        cam_pos = vec3(6.85943, 2.19324, 4.51327);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12251, 0.99182, -0.03594);
    }
    
    if (time >= 7.39993 && time < 7.43326) {
        cam_pos = vec3(6.91110, 2.18777, 4.44030);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12160, 0.99187, -0.03758);
    }
    
    if (time >= 7.43326 && time < 7.46659) {
        cam_pos = vec3(6.96223, 2.18228, 4.36645);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12066, 0.99192, -0.03921);
    }
    
    if (time >= 7.46659 && time < 7.49993) {
        cam_pos = vec3(7.01278, 2.17676, 4.29174);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11970, 0.99197, -0.04084);
    }
    
    if (time >= 7.49993 && time < 7.53326) {
        cam_pos = vec3(7.06273, 2.17122, 4.21622);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11872, 0.99202, -0.04245);
    }
    
    if (time >= 7.53326 && time < 7.56659) {
        cam_pos = vec3(7.11205, 2.16566, 4.13988);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11771, 0.99207, -0.04406);
    }
    
    if (time >= 7.56659 && time < 7.59992) {
        cam_pos = vec3(7.16071, 2.16008, 4.06278);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11668, 0.99212, -0.04565);
    }
    
    if (time >= 7.59992 && time < 7.63326) {
        cam_pos = vec3(7.20868, 2.15449, 3.98492);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11562, 0.99217, -0.04723);
    }
    
    if (time >= 7.63326 && time < 7.66659) {
        cam_pos = vec3(7.25593, 2.14888, 3.90634);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11454, 0.99222, -0.04880);
    }
    
    if (time >= 7.66659 && time < 7.69992) {
        cam_pos = vec3(7.30244, 2.14326, 3.82706);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11344, 0.99227, -0.05035);
    }
    
    if (time >= 7.69992 && time < 7.73326) {
        cam_pos = vec3(7.34819, 2.13763, 3.74711);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11231, 0.99232, -0.05189);
    }
    
    if (time >= 7.73326 && time < 7.76659) {
        cam_pos = vec3(7.39315, 2.13198, 3.66652);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11117, 0.99237, -0.05341);
    }
    
    if (time >= 7.76659 && time < 7.79992) {
        cam_pos = vec3(7.43730, 2.12633, 3.58532);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11000, 0.99241, -0.05492);
    }
    
    if (time >= 7.79992 && time < 7.83326) {
        cam_pos = vec3(7.48062, 2.12067, 3.50354);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10881, 0.99246, -0.05640);
    }
    
    if (time >= 7.83326 && time < 7.86659) {
        cam_pos = vec3(7.52309, 2.11500, 3.42120);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10760, 0.99251, -0.05788);
    }
    
    if (time >= 7.86659 && time < 7.89992) {
        cam_pos = vec3(7.56470, 2.10933, 3.33834);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10637, 0.99256, -0.05933);
    }
    
    if (time >= 7.89992 && time < 7.93325) {
        cam_pos = vec3(7.60542, 2.10366, 3.25498);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10512, 0.99260, -0.06076);
    }
    
    if (time >= 7.93325 && time < 7.96659) {
        cam_pos = vec3(7.64523, 2.09798, 3.17117);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10385, 0.99265, -0.06217);
    }
    
    if (time >= 7.96659 && time < 7.99992) {
        cam_pos = vec3(7.68413, 2.09230, 3.08692);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10256, 0.99269, -0.06357);
    }
    
    if (time >= 7.99992 && time < 8.03325) {
        cam_pos = vec3(7.72210, 2.08663, 3.00228);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10126, 0.99274, -0.06494);
    }
    
    if (time >= 8.03325 && time < 8.06659) {
        cam_pos = vec3(7.75913, 2.08096, 2.91726);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09994, 0.99278, -0.06629);
    }
    
    if (time >= 8.06659 && time < 8.09992) {
        cam_pos = vec3(7.79519, 2.07529, 2.83192);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09860, 0.99283, -0.06762);
    }
    
    if (time >= 8.09992 && time < 8.13325) {
        cam_pos = vec3(7.83029, 2.06963, 2.74628);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09725, 0.99287, -0.06892);
    }
    
    if (time >= 8.13325 && time < 8.16659) {
        cam_pos = vec3(7.86441, 2.06398, 2.66037);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09588, 0.99291, -0.07021);
    }
    
    if (time >= 8.16659 && time < 8.19992) {
        cam_pos = vec3(7.89754, 2.05833, 2.57424);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09450, 0.99296, -0.07147);
    }
    
    if (time >= 8.19992 && time < 8.23325) {
        cam_pos = vec3(7.92968, 2.05270, 2.48791);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09310, 0.99300, -0.07270);
    }
    
    if (time >= 8.23325 && time < 8.26658) {
        cam_pos = vec3(7.96081, 2.04708, 2.40142);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09170, 0.99304, -0.07391);
    }
    
    if (time >= 8.26658 && time < 8.29992) {
        cam_pos = vec3(7.99093, 2.04147, 2.31482);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09028, 0.99308, -0.07510);
    }
    
    if (time >= 8.29992 && time < 8.33325) {
        cam_pos = vec3(8.02004, 2.03587, 2.22813);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08885, 0.99312, -0.07626);
    }
    
    if (time >= 8.33325 && time < 8.36658) {
        cam_pos = vec3(8.04813, 2.03030, 2.14139);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08741, 0.99316, -0.07739);
    }
    
    if (time >= 8.36658 && time < 8.39992) {
        cam_pos = vec3(8.07520, 2.02474, 2.05465);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08596, 0.99320, -0.07850);
    }
    
    if (time >= 8.39992 && time < 8.43325) {
        cam_pos = vec3(8.10125, 2.01920, 1.96793);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08450, 0.99324, -0.07959);
    }
    
    if (time >= 8.43325 && time < 8.46658) {
        cam_pos = vec3(8.12628, 2.01368, 1.88129);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08303, 0.99328, -0.08064);
    }
    
    if (time >= 8.46658 && time < 8.49992) {
        cam_pos = vec3(8.15029, 2.00819, 1.79477);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08156, 0.99332, -0.08167);
    }
    
    if (time >= 8.49992 && time < 8.53325) {
        cam_pos = vec3(8.17327, 2.00272, 1.70839);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08009, 0.99335, -0.08268);
    }
    
    if (time >= 8.53325 && time < 8.56658) {
        cam_pos = vec3(8.19524, 1.99728, 1.62222);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07860, 0.99339, -0.08366);
    }
    
    if (time >= 8.56658 && time < 8.59991) {
        cam_pos = vec3(8.21620, 1.99187, 1.53628);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07712, 0.99343, -0.08461);
    }
    
    if (time >= 8.59991 && time < 8.63325) {
        cam_pos = vec3(8.23615, 1.98649, 1.45062);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07563, 0.99346, -0.08553);
    }
    
    if (time >= 8.63325 && time < 8.66658) {
        cam_pos = vec3(8.25509, 1.98115, 1.36529);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07414, 0.99350, -0.08643);
    }
    
    if (time >= 8.66658 && time < 8.69991) {
        cam_pos = vec3(8.27305, 1.97584, 1.28033);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07265, 0.99353, -0.08729);
    }
    
    if (time >= 8.69991 && time < 8.73325) {
        cam_pos = vec3(8.29002, 1.97056, 1.19579);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07117, 0.99356, -0.08814);
    }
    
    if (time >= 8.73325 && time < 8.76658) {
        cam_pos = vec3(8.30601, 1.96533, 1.11172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06968, 0.99360, -0.08895);
    }
    
    if (time >= 8.76658 && time < 8.79991) {
        cam_pos = vec3(8.32104, 1.96013, 1.02816);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06819, 0.99363, -0.08974);
    }
    
    if (time >= 8.79991 && time < 8.83325) {
        cam_pos = vec3(8.33512, 1.95499, 0.94517);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06671, 0.99366, -0.09050);
    }
    
    if (time >= 8.83325 && time < 8.86658) {
        cam_pos = vec3(8.34826, 1.94988, 0.86279);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06524, 0.99369, -0.09123);
    }
    
    if (time >= 8.86658 && time < 8.89991) {
        cam_pos = vec3(8.36048, 1.94483, 0.78108);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06377, 0.99372, -0.09194);
    }
    
    if (time >= 8.89991 && time < 8.93324) {
        cam_pos = vec3(8.37179, 1.93983, 0.70008);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06231, 0.99375, -0.09262);
    }
    
    if (time >= 8.93324 && time < 8.96658) {
        cam_pos = vec3(8.38221, 1.93488, 0.61987);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06086, 0.99378, -0.09327);
    }
    
    if (time >= 8.96658 && time < 8.99991) {
        cam_pos = vec3(8.39176, 1.92999, 0.54048);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05942, 0.99381, -0.09390);
    }
    
    if (time >= 8.99991 && time < 9.03324) {
        cam_pos = vec3(8.40046, 1.92516, 0.46200);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05799, 0.99383, -0.09450);
    }
    
    if (time >= 9.03324 && time < 9.06658) {
        cam_pos = vec3(8.40833, 1.92039, 0.38446);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05657, 0.99386, -0.09507);
    }
    
    if (time >= 9.06658 && time < 9.09991) {
        cam_pos = vec3(8.41540, 1.91569, 0.30793);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05517, 0.99389, -0.09562);
    }
    
    if (time >= 9.09991 && time < 9.13324) {
        cam_pos = vec3(8.42169, 1.91106, 0.23249);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05378, 0.99391, -0.09614);
    }
    
    if (time >= 9.13324 && time < 9.16658) {
        cam_pos = vec3(8.42721, 1.90650, 0.15819);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05241, 0.99394, -0.09664);
    }
    
    if (time >= 9.16658 && time < 9.19991) {
        cam_pos = vec3(8.43202, 1.90202, 0.08511);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05106, 0.99396, -0.09712);
    }
    
    if (time >= 9.19991 && time < 9.23324) {
        cam_pos = vec3(8.43612, 1.89763, 0.01333);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04973, 0.99399, -0.09757);
    }
    
    if (time >= 9.23324 && time < 9.26657) {
        cam_pos = vec3(8.43955, 1.89331, -0.05709);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04842, 0.99401, -0.09799);
    }
    
    if (time >= 9.26657 && time < 9.29991) {
        cam_pos = vec3(8.44235, 1.88909, -0.12607);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04713, 0.99403, -0.09839);
    }
    
    if (time >= 9.29991 && time < 9.33324) {
        cam_pos = vec3(8.44454, 1.88496, -0.19351);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04587, 0.99405, -0.09877);
    }
    
    if (time >= 9.33324 && time < 9.36657) {
        cam_pos = vec3(8.44617, 1.88093, -0.25934);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04464, 0.99407, -0.09913);
    }
    
    if (time >= 9.36657 && time < 9.39991) {
        cam_pos = vec3(8.44726, 1.87701, -0.32345);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04344, 0.99409, -0.09947);
    }
    
    if (time >= 9.39991 && time < 9.43324) {
        cam_pos = vec3(8.44785, 1.87320, -0.38574);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04227, 0.99411, -0.09978);
    }
    
    if (time >= 9.43324 && time < 9.46657) {
        cam_pos = vec3(8.44800, 1.86951, -0.44612);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04114, 0.99413, -0.10007);
    }
    
    if (time >= 9.46657 && time < 9.49991) {
        cam_pos = vec3(8.44773, 1.86594, -0.50447);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04004, 0.99415, -0.10035);
    }
    
    if (time >= 9.49991 && time < 9.53324) {
        cam_pos = vec3(8.44710, 1.86250, -0.56067);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03897, 0.99416, -0.10060);
    }
    
    if (time >= 9.53324 && time < 9.56657) {
        cam_pos = vec3(8.44614, 1.85920, -0.61459);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03795, 0.99418, -0.10083);
    }
    
    if (time >= 9.56657 && time < 9.59990) {
        cam_pos = vec3(8.44490, 1.85605, -0.66610);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03698, 0.99419, -0.10105);
    }
    
    if (time >= 9.59990 && time < 9.63324) {
        cam_pos = vec3(8.44344, 1.85306, -0.71503);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03605, 0.99421, -0.10124);
    }
    
    if (time >= 9.63324 && time < 9.66657) {
        cam_pos = vec3(-2.49388, 1.52098, 1.18673);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21409, 0.96899, -0.12304);
    }
    
    if (time >= 9.66657 && time < 9.69990) {
        cam_pos = vec3(-2.51706, 1.51905, 1.20003);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21467, 0.96870, -0.12463);
    }
    
    if (time >= 9.69990 && time < 9.73324) {
        cam_pos = vec3(-2.50752, 1.51774, 1.20947);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21474, 0.96846, -0.12635);
    }
    
    if (time >= 9.73324 && time < 9.76657) {
        cam_pos = vec3(-2.49676, 1.51608, 1.22065);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21480, 0.96820, -0.12829);
    }
    
    if (time >= 9.76657 && time < 9.79990) {
        cam_pos = vec3(-2.48462, 1.51402, 1.23372);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21485, 0.96790, -0.13046);
    }
    
    if (time >= 9.79990 && time < 9.83324) {
        cam_pos = vec3(-2.47096, 1.51155, 1.24880);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21487, 0.96756, -0.13289);
    }
    
    if (time >= 9.83324 && time < 9.86657) {
        cam_pos = vec3(-2.45559, 1.50861, 1.26604);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21487, 0.96718, -0.13559);
    }
    
    if (time >= 9.86657 && time < 9.89990) {
        cam_pos = vec3(-2.43832, 1.50518, 1.28559);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21484, 0.96677, -0.13860);
    }
    
    if (time >= 9.89990 && time < 9.93323) {
        cam_pos = vec3(-2.41894, 1.50122, 1.30757);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21475, 0.96630, -0.14194);
    }
    
    if (time >= 9.93323 && time < 9.96657) {
        cam_pos = vec3(-2.39725, 1.49668, 1.33209);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21460, 0.96578, -0.14563);
    }
    
    if (time >= 9.96657 && time < 9.99990) {
        cam_pos = vec3(-2.37302, 1.49155, 1.35922);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21436, 0.96521, -0.14971);
    }
    
    if (time >= 9.99990 && time < 10.03323) {
        cam_pos = vec3(-2.34606, 1.48579, 1.38896);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21402, 0.96458, -0.15418);
    }
    
    if (time >= 10.03323 && time < 10.06657) {
        cam_pos = vec3(-2.31621, 1.47940, 1.42125);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21356, 0.96390, -0.15905);
    }
    
    if (time >= 10.06657 && time < 10.09990) {
        cam_pos = vec3(-2.28336, 1.47239, 1.45591);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21294, 0.96315, -0.16433);
    }
    
    if (time >= 10.09990 && time < 10.13323) {
        cam_pos = vec3(-2.24751, 1.46479, 1.49267);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21215, 0.96234, -0.17000);
    }
    
    if (time >= 10.13323 && time < 10.16657) {
        cam_pos = vec3(-2.20875, 1.45666, 1.53112);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.21116, 0.96147, -0.17603);
    }
    
    if (time >= 10.16657 && time < 10.19990) {
        cam_pos = vec3(-2.16732, 1.44808, 1.57074);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20996, 0.96056, -0.18235);
    }
    
    if (time >= 10.19990 && time < 10.23323) {
        cam_pos = vec3(-2.12355, 1.43915, 1.61095);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20853, 0.95960, -0.18891);
    }
    
    if (time >= 10.23323 && time < 10.26656) {
        cam_pos = vec3(-2.07788, 1.42999, 1.65114);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20688, 0.95861, -0.19563);
    }
    
    if (time >= 10.26656 && time < 10.29990) {
        cam_pos = vec3(-2.03082, 1.42072, 1.69075);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20502, 0.95760, -0.20243);
    }
    
    if (time >= 10.29990 && time < 10.33323) {
        cam_pos = vec3(-1.98286, 1.41145, 1.72927);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20296, 0.95657, -0.20923);
    }
    
    if (time >= 10.33323 && time < 10.36656) {
        cam_pos = vec3(-1.93450, 1.40228, 1.76630);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.20072, 0.95555, -0.21597);
    }
    
    if (time >= 10.36656 && time < 10.39990) {
        cam_pos = vec3(-1.88614, 1.39328, 1.80156);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19832, 0.95453, -0.22258);
    }
    
    if (time >= 10.39990 && time < 10.43323) {
        cam_pos = vec3(-1.83816, 1.38451, 1.83487);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19580, 0.95352, -0.22903);
    }
    
    if (time >= 10.43323 && time < 10.46656) {
        cam_pos = vec3(-1.79081, 1.37601, 1.86614);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19316, 0.95254, -0.23529);
    }
    
    if (time >= 10.46656 && time < 10.49990) {
        cam_pos = vec3(-1.74432, 1.36780, 1.89536);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.19045, 0.95157, -0.24134);
    }
    
    if (time >= 10.49990 && time < 10.53323) {
        cam_pos = vec3(-1.69882, 1.35991, 1.92257);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18767, 0.95063, -0.24717);
    }
    
    if (time >= 10.53323 && time < 10.56656) {
        cam_pos = vec3(-1.65443, 1.35232, 1.94783);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18484, 0.94971, -0.25276);
    }
    
    if (time >= 10.56656 && time < 10.59989) {
        cam_pos = vec3(-1.61118, 1.34504, 1.97125);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.18198, 0.94881, -0.25814);
    }
    
    if (time >= 10.59989 && time < 10.63323) {
        cam_pos = vec3(-1.56912, 1.33805, 1.99293);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17910, 0.94795, -0.26329);
    }
    
    if (time >= 10.63323 && time < 10.66656) {
        cam_pos = vec3(-1.52825, 1.33135, 2.01297);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17621, 0.94711, -0.26822);
    }
    
    if (time >= 10.66656 && time < 10.69989) {
        cam_pos = vec3(-1.48856, 1.32493, 2.03151);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17332, 0.94629, -0.27295);
    }
    
    if (time >= 10.69989 && time < 10.73323) {
        cam_pos = vec3(-1.45003, 1.31876, 2.04863);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.17043, 0.94549, -0.27748);
    }
    
    if (time >= 10.73323 && time < 10.76656) {
        cam_pos = vec3(-1.41263, 1.31284, 2.06445);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16756, 0.94472, -0.28182);
    }
    
    if (time >= 10.76656 && time < 10.79989) {
        cam_pos = vec3(-1.37633, 1.30714, 2.07907);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16470, 0.94398, -0.28598);
    }
    
    if (time >= 10.79989 && time < 10.83323) {
        cam_pos = vec3(-1.34110, 1.30167, 2.09258);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.16186, 0.94325, -0.28996);
    }
    
    if (time >= 10.83323 && time < 10.86656) {
        cam_pos = vec3(-1.30688, 1.29639, 2.10505);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15904, 0.94255, -0.29379);
    }
    
    if (time >= 10.86656 && time < 10.89989) {
        cam_pos = vec3(-1.27365, 1.29131, 2.11658);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15625, 0.94186, -0.29747);
    }
    
    if (time >= 10.89989 && time < 10.93322) {
        cam_pos = vec3(-1.24137, 1.28640, 2.12724);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15349, 0.94119, -0.30099);
    }
    
    if (time >= 10.93322 && time < 10.96656) {
        cam_pos = vec3(-1.21000, 1.28166, 2.13708);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.15075, 0.94054, -0.30439);
    }
    
    if (time >= 10.96656 && time < 10.99989) {
        cam_pos = vec3(-1.17950, 1.27707, 2.14618);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14805, 0.93991, -0.30765);
    }
    
    if (time >= 10.99989 && time < 11.03322) {
        cam_pos = vec3(-1.14984, 1.27263, 2.15459);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14538, 0.93930, -0.31078);
    }
    
    if (time >= 11.03322 && time < 11.06656) {
        cam_pos = vec3(-1.12098, 1.26832, 2.16236);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14274, 0.93870, -0.31381);
    }
    
    if (time >= 11.06656 && time < 11.09989) {
        cam_pos = vec3(-1.09290, 1.26414, 2.16955);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.14013, 0.93811, -0.31671);
    }
    
    if (time >= 11.09989 && time < 11.13322) {
        cam_pos = vec3(-1.06556, 1.26008, 2.17619);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13755, 0.93754, -0.31952);
    }
    
    if (time >= 11.13322 && time < 11.16656) {
        cam_pos = vec3(-1.03892, 1.25614, 2.18232);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13501, 0.93699, -0.32222);
    }
    
    if (time >= 11.16656 && time < 11.19989) {
        cam_pos = vec3(-1.01298, 1.25229, 2.18799);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13250, 0.93644, -0.32483);
    }
    
    if (time >= 11.19989 && time < 11.23322) {
        cam_pos = vec3(-0.98768, 1.24854, 2.19323);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.13002, 0.93591, -0.32735);
    }
    
    if (time >= 11.23322 && time < 11.26655) {
        cam_pos = vec3(-0.96303, 1.24488, 2.19808);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12758, 0.93540, -0.32978);
    }
    
    if (time >= 11.26655 && time < 11.29989) {
        cam_pos = vec3(-0.93898, 1.24130, 2.20256);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12517, 0.93489, -0.33213);
    }
    
    if (time >= 11.29989 && time < 11.33322) {
        cam_pos = vec3(-0.91551, 1.23780, 2.20669);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12279, 0.93440, -0.33441);
    }
    
    if (time >= 11.33322 && time < 11.36655) {
        cam_pos = vec3(-0.89261, 1.23437, 2.21052);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.12044, 0.93391, -0.33660);
    }
    
    if (time >= 11.36655 && time < 11.39989) {
        cam_pos = vec3(-0.87025, 1.23101, 2.21406);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11813, 0.93344, -0.33873);
    }
    
    if (time >= 11.39989 && time < 11.43322) {
        cam_pos = vec3(-0.84841, 1.22770, 2.21733);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11584, 0.93298, -0.34078);
    }
    
    if (time >= 11.43322 && time < 11.46655) {
        cam_pos = vec3(-0.82708, 1.22446, 2.22037);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11359, 0.93252, -0.34278);
    }
    
    if (time >= 11.46655 && time < 11.49989) {
        cam_pos = vec3(-0.80624, 1.22126, 2.22318);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.11137, 0.93208, -0.34471);
    }
    
    if (time >= 11.49989 && time < 11.53322) {
        cam_pos = vec3(-0.78587, 1.21812, 2.22578);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10918, 0.93165, -0.34658);
    }
    
    if (time >= 11.53322 && time < 11.56655) {
        cam_pos = vec3(-0.76596, 1.21501, 2.22820);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10702, 0.93122, -0.34839);
    }
    
    if (time >= 11.56655 && time < 11.59988) {
        cam_pos = vec3(-0.74648, 1.21195, 2.23046);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10489, 0.93080, -0.35015);
    }
    
    if (time >= 11.59988 && time < 11.63322) {
        cam_pos = vec3(-0.72743, 1.20892, 2.23256);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10279, 0.93040, -0.35185);
    }
    
    if (time >= 11.63322 && time < 11.66655) {
        cam_pos = vec3(-0.70879, 1.20592, 2.23452);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.10072, 0.92999, -0.35350);
    }
    
    if (time >= 11.66655 && time < 11.69988) {
        cam_pos = vec3(-0.69055, 1.20294, 2.23636);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09868, 0.92960, -0.35511);
    }
    
    if (time >= 11.69988 && time < 11.73322) {
        cam_pos = vec3(-0.67270, 1.19999, 2.23810);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09667, 0.92922, -0.35667);
    }
    
    if (time >= 11.73322 && time < 11.76655) {
        cam_pos = vec3(-0.65522, 1.19706, 2.23974);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09468, 0.92884, -0.35818);
    }
    
    if (time >= 11.76655 && time < 11.79988) {
        cam_pos = vec3(-0.63810, 1.19415, 2.24130);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09273, 0.92847, -0.35965);
    }
    
    if (time >= 11.79988 && time < 11.83322) {
        cam_pos = vec3(-0.62133, 1.19125, 2.24279);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.09080, 0.92810, -0.36108);
    }
    
    if (time >= 11.83322 && time < 11.86655) {
        cam_pos = vec3(-0.60491, 1.18836, 2.24422);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08889, 0.92775, -0.36247);
    }
    
    if (time >= 11.86655 && time < 11.89988) {
        cam_pos = vec3(-0.58881, 1.18547, 2.24561);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08702, 0.92740, -0.36382);
    }
    
    if (time >= 11.89988 && time < 11.93321) {
        cam_pos = vec3(-0.57304, 1.18259, 2.24696);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08516, 0.92705, -0.36513);
    }
    
    if (time >= 11.93321 && time < 11.96655) {
        cam_pos = vec3(-0.55758, 1.17970, 2.24829);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08334, 0.92672, -0.36641);
    }
    
    if (time >= 11.96655 && time < 11.99988) {
        cam_pos = vec3(-0.54243, 1.17682, 2.24960);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.08154, 0.92638, -0.36765);
    }
    
    if (time >= 11.99988 && time < 12.03321) {
        cam_pos = vec3(-0.52757, 1.17392, 2.25091);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07977, 0.92606, -0.36886);
    }
    
    if (time >= 12.03321 && time < 12.06655) {
        cam_pos = vec3(-0.51299, 1.17102, 2.25223);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07802, 0.92574, -0.37003);
    }
    
    if (time >= 12.06655 && time < 12.09988) {
        cam_pos = vec3(-0.49870, 1.16810, 2.25356);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07629, 0.92542, -0.37118);
    }
    
    if (time >= 12.09988 && time < 12.13321) {
        cam_pos = vec3(-0.48467, 1.16516, 2.25492);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07459, 0.92511, -0.37229);
    }
    
    if (time >= 12.13321 && time < 12.16655) {
        cam_pos = vec3(-0.47091, 1.16221, 2.25632);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07291, 0.92481, -0.37338);
    }
    
    if (time >= 12.16655 && time < 12.19988) {
        cam_pos = vec3(-0.45741, 1.15923, 2.25776);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.07126, 0.92451, -0.37443);
    }
    
    if (time >= 12.19988 && time < 12.23321) {
        cam_pos = vec3(-0.44416, 1.15622, 2.25926);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06963, 0.92422, -0.37546);
    }
    
    if (time >= 12.23321 && time < 12.26654) {
        cam_pos = vec3(-0.43115, 1.15319, 2.26083);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06802, 0.92393, -0.37647);
    }
    
    if (time >= 12.26654 && time < 12.29988) {
        cam_pos = vec3(-0.41838, 1.15012, 2.26246);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06644, 0.92365, -0.37744);
    }
    
    if (time >= 12.29988 && time < 12.33321) {
        cam_pos = vec3(-0.40584, 1.14701, 2.26418);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06487, 0.92337, -0.37840);
    }
    
    if (time >= 12.33321 && time < 12.36654) {
        cam_pos = vec3(-0.39353, 1.14386, 2.26600);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06333, 0.92309, -0.37933);
    }
    
    if (time >= 12.36654 && time < 12.39988) {
        cam_pos = vec3(-0.38143, 1.14067, 2.26791);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06181, 0.92282, -0.38023);
    }
    
    if (time >= 12.39988 && time < 12.43321) {
        cam_pos = vec3(-0.36956, 1.13743, 2.26994);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06031, 0.92256, -0.38111);
    }
    
    if (time >= 12.43321 && time < 12.46654) {
        cam_pos = vec3(-0.35789, 1.13414, 2.27209);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05883, 0.92230, -0.38198);
    }
    
    if (time >= 12.46654 && time < 12.49988) {
        cam_pos = vec3(-0.34642, 1.13079, 2.27437);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05737, 0.92204, -0.38282);
    }
    
    if (time >= 12.49988 && time < 12.53321) {
        cam_pos = vec3(-0.33516, 1.12738, 2.27680);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05594, 0.92179, -0.38363);
    }
    
    if (time >= 12.53321 && time < 12.56654) {
        cam_pos = vec3(-0.32408, 1.12391, 2.27938);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05452, 0.92154, -0.38443);
    }
    
    if (time >= 12.56654 && time < 12.59987) {
        cam_pos = vec3(-0.31320, 1.12037, 2.28212);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05312, 0.92130, -0.38521);
    }
    
    if (time >= 12.59987 && time < 12.63321) {
        cam_pos = vec3(-0.30251, 1.11676, 2.28503);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05174, 0.92106, -0.38598);
    }
    
    if (time >= 12.63321 && time < 12.66654) {
        cam_pos = vec3(-0.29199, 1.11307, 2.28813);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05039, 0.92082, -0.38672);
    }
    
    if (time >= 12.66654 && time < 12.69987) {
        cam_pos = vec3(-0.28165, 1.10929, 2.29142);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04905, 0.92059, -0.38744);
    }
    
    if (time >= 12.69987 && time < 12.73321) {
        cam_pos = vec3(-0.27148, 1.10543, 2.29493);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04773, 0.92036, -0.38815);
    }
    
    if (time >= 12.73321 && time < 12.76654) {
        cam_pos = vec3(-0.26148, 1.10148, 2.29865);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04642, 0.92013, -0.38884);
    }
    
    if (time >= 12.76654 && time < 12.79987) {
        cam_pos = vec3(-0.25165, 1.09743, 2.30261);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04514, 0.91991, -0.38952);
    }
    
    if (time >= 12.79987 && time < 12.83321) {
        cam_pos = vec3(-0.24197, 1.09327, 2.30681);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04387, 0.91969, -0.39018);
    }
    
    if (time >= 12.83321 && time < 12.86654) {
        cam_pos = vec3(-0.23245, 1.08901, 2.31126);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04263, 0.91948, -0.39082);
    }
    
    if (time >= 12.86654 && time < 12.89987) {
        cam_pos = vec3(-0.22309, 1.08463, 2.31600);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04140, 0.91927, -0.39145);
    }
    
    if (time >= 12.89987 && time < 12.93320) {
        cam_pos = vec3(-0.21387, 1.08014, 2.32101);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04018, 0.91906, -0.39206);
    }
    
    if (time >= 12.93320 && time < 12.96654) {
        cam_pos = vec3(-0.20480, 1.07551, 2.32633);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03899, 0.91886, -0.39266);
    }
    
    if (time >= 12.96654 && time < 12.99987) {
        cam_pos = vec3(-0.19587, 1.07075, 2.33196);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03781, 0.91866, -0.39325);
    }
    
    if (time >= 12.99987 && time < 13.03320) {
        cam_pos = vec3(-0.18708, 1.06585, 2.33793);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03665, 0.91846, -0.39382);
    }
    
    if (time >= 13.03320 && time < 13.06654) {
        cam_pos = vec3(-0.17842, 1.06080, 2.34424);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03550, 0.91826, -0.39438);
    }
    
    if (time >= 13.06654 && time < 13.09987) {
        cam_pos = vec3(-0.16989, 1.05559, 2.35091);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03437, 0.91807, -0.39492);
    }
    
    if (time >= 13.09987 && time < 13.13320) {
        cam_pos = vec3(-0.16149, 1.05023, 2.35796);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03326, 0.91788, -0.39546);
    }
    
    if (time >= 13.13320 && time < 13.16654) {
        cam_pos = vec3(-0.15322, 1.04469, 2.36541);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03217, 0.91770, -0.39598);
    }
    
    if (time >= 13.16654 && time < 13.19987) {
        cam_pos = vec3(-0.14507, 1.03898, 2.37327);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03108, 0.91751, -0.39649);
    }
    
    if (time >= 13.19987 && time < 13.23320) {
        cam_pos = vec3(-0.13703, 1.03308, 2.38156);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03002, 0.91733, -0.39699);
    }
    
    if (time >= 13.23320 && time < 13.26653) {
        cam_pos = vec3(-0.12911, 1.02698, 2.39029);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02897, 0.91716, -0.39748);
    }
    
    if (time >= 13.26653 && time < 13.29987) {
        cam_pos = vec3(-0.12130, 1.02069, 2.39949);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02793, 0.91698, -0.39795);
    }
    
    if (time >= 13.29987 && time < 13.33320) {
        cam_pos = vec3(-0.11359, 1.01419, 2.40917);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02692, 0.91681, -0.39842);
    }
    
    if (time >= 13.33320 && time < 13.36653) {
        cam_pos = vec3(-0.10599, 1.00748, 2.41934);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02591, 0.91664, -0.39887);
    }
    
    if (time >= 13.36653 && time < 13.39987) {
        cam_pos = vec3(-0.09849, 1.00055, 2.43001);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02492, 0.91647, -0.39932);
    }
    
    if (time >= 13.39987 && time < 13.43320) {
        cam_pos = vec3(-0.09109, 0.99339, 2.44120);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02395, 0.91631, -0.39975);
    }
    
    if (time >= 13.43320 && time < 13.46653) {
        cam_pos = vec3(-0.08377, 0.98600, 2.45291);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02298, 0.91615, -0.40018);
    }
    
    if (time >= 13.46653 && time < 13.49987) {
        cam_pos = vec3(-0.07655, 0.97838, 2.46515);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02204, 0.91599, -0.40059);
    }
    
    if (time >= 13.49987 && time < 13.53320) {
        cam_pos = vec3(-0.06941, 0.97053, 2.47792);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02110, 0.91583, -0.40100);
    }
    
    if (time >= 13.53320 && time < 13.56653) {
        cam_pos = vec3(-0.06234, 0.96245, 2.49121);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02019, 0.91568, -0.40140);
    }
    
    if (time >= 13.56653 && time < 13.59986) {
        cam_pos = vec3(-0.05536, 0.95415, 2.50503);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01928, 0.91553, -0.40179);
    }
    
    if (time >= 13.59986 && time < 13.63320) {
        cam_pos = vec3(-0.04844, 0.94562, 2.51934);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01839, 0.91538, -0.40217);
    }
    
    if (time >= 13.63320 && time < 13.66653) {
        cam_pos = vec3(-0.04159, 0.93688, 2.53413);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01751, 0.91524, -0.40254);
    }
    
    if (time >= 13.66653 && time < 13.69986) {
        cam_pos = vec3(-0.03481, 0.92794, 2.54936);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01665, 0.91509, -0.40290);
    }
    
    if (time >= 13.69986 && time < 13.73320) {
        cam_pos = vec3(-0.02808, 0.91883, 2.56500);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01579, 0.91495, -0.40326);
    }
    
    if (time >= 13.73320 && time < 13.76653) {
        cam_pos = vec3(-0.02140, 0.90955, 2.58101);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01495, 0.91481, -0.40361);
    }
    
    if (time >= 13.76653 && time < 13.79986) {
        cam_pos = vec3(-0.01478, 0.90014, 2.59731);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01413, 0.91467, -0.40395);
    }
    
    if (time >= 13.79986 && time < 13.83320) {
        cam_pos = vec3(-0.00820, 0.89063, 2.61385);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01332, 0.91454, -0.40428);
    }
    
    if (time >= 13.83320 && time < 13.86653) {
        cam_pos = vec3(-0.00167, 0.88103, 2.63057);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01252, 0.91441, -0.40461);
    }
    
    if (time >= 13.86653 && time < 13.89986) {
        cam_pos = vec3(0.00483, 0.87140, 2.64739);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01173, 0.91428, -0.40492);
    }
    
    if (time >= 13.89986 && time < 13.93319) {
        cam_pos = vec3(0.01128, 0.86175, 2.66422);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01095, 0.91415, -0.40523);
    }
    
    if (time >= 13.93319 && time < 13.96653) {
        cam_pos = vec3(0.01770, 0.85213, 2.68100);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01019, 0.91402, -0.40554);
    }
    
    if (time >= 13.96653 && time < 13.99986) {
        cam_pos = vec3(0.02409, 0.84257, 2.69765);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00944, 0.91390, -0.40584);
    }
    
    if (time >= 13.99986 && time < 14.03319) {
        cam_pos = vec3(0.03044, 0.83310, 2.71410);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00870, 0.91377, -0.40613);
    }
    
    if (time >= 14.03319 && time < 14.06653) {
        cam_pos = vec3(0.03675, 0.82376, 2.73027);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00797, 0.91365, -0.40641);
    }
    
    if (time >= 14.06653 && time < 14.09986) {
        cam_pos = vec3(0.04303, 0.81456, 2.74611);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00725, 0.91354, -0.40669);
    }
    
    if (time >= 14.09986 && time < 14.13319) {
        cam_pos = vec3(0.04928, 0.80554, 2.76157);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00655, 0.91342, -0.40696);
    }
    
    if (time >= 14.13319 && time < 14.16653) {
        cam_pos = vec3(0.05548, 0.79671, 2.77660);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00585, 0.91331, -0.40723);
    }
    
    if (time >= 14.16653 && time < 14.19986) {
        cam_pos = vec3(0.06164, 0.78809, 2.79116);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00517, 0.91319, -0.40749);
    }
    
    if (time >= 14.19986 && time < 14.23319) {
        cam_pos = vec3(0.06776, 0.77970, 2.80523);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00450, 0.91308, -0.40775);
    }
    
    if (time >= 14.23319 && time < 14.26652) {
        cam_pos = vec3(0.07384, 0.77155, 2.81878);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00384, 0.91298, -0.40800);
    }
    
    if (time >= 14.26652 && time < 14.29986) {
        cam_pos = vec3(0.07987, 0.76363, 2.83180);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00319, 0.91287, -0.40824);
    }
    
    if (time >= 14.29986 && time < 14.33319) {
        cam_pos = vec3(0.08584, 0.75597, 2.84428);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00255, 0.91276, -0.40848);
    }
    
    if (time >= 14.33319 && time < 14.36652) {
        cam_pos = vec3(0.09177, 0.74855, 2.85622);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00193, 0.91266, -0.40871);
    }
    
    if (time >= 14.36652 && time < 14.39986) {
        cam_pos = vec3(0.09764, 0.74138, 2.86762);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00131, 0.91256, -0.40894);
    }
    
    if (time >= 14.39986 && time < 14.43319) {
        cam_pos = vec3(0.10345, 0.73446, 2.87848);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00070, 0.91246, -0.40916);
    }
    
    if (time >= 14.43319 && time < 14.46652) {
        cam_pos = vec3(0.10920, 0.72778, 2.88882);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00011, 0.91236, -0.40938);
    }
    
    if (time >= 14.46652 && time < 14.49986) {
        cam_pos = vec3(0.11489, 0.72134, 2.89864);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00048, 0.91227, -0.40959);
    }
    
    if (time >= 14.49986 && time < 14.53319) {
        cam_pos = vec3(0.12051, 0.71514, 2.90796);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00105, 0.91217, -0.40980);
    }
    
    if (time >= 14.53319 && time < 14.56652) {
        cam_pos = vec3(0.12607, 0.70916, 2.91678);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00162, 0.91208, -0.41001);
    }
    
    if (time >= 14.56652 && time < 14.59985) {
        cam_pos = vec3(0.13156, 0.70341, 2.92513);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00217, 0.91199, -0.41020);
    }
    
    if (time >= 14.59985 && time < 14.63319) {
        cam_pos = vec3(0.13698, 0.69788, 2.93303);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00272, 0.91190, -0.41040);
    }
    
    if (time >= 14.63319 && time < 14.66652) {
        cam_pos = vec3(0.14233, 0.69256, 2.94047);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00325, 0.91181, -0.41059);
    }
    
    if (time >= 14.66652 && time < 14.69985) {
        cam_pos = vec3(0.14761, 0.68744, 2.94748);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00378, 0.91173, -0.41077);
    }
    
    if (time >= 14.69985 && time < 14.73319) {
        cam_pos = vec3(0.15281, 0.68252, 2.95408);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00429, 0.91164, -0.41096);
    }
    
    if (time >= 14.73319 && time < 14.76652) {
        cam_pos = vec3(0.15794, 0.67779, 2.96028);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00480, 0.91156, -0.41113);
    }
    
    if (time >= 14.76652 && time < 14.79985) {
        cam_pos = vec3(0.16299, 0.67324, 2.96610);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00529, 0.91148, -0.41131);
    }
    
    if (time >= 14.79985 && time < 14.83319) {
        cam_pos = vec3(0.16797, 0.66888, 2.97155);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00578, 0.91140, -0.41148);
    }
    
    if (time >= 14.83319 && time < 14.86652) {
        cam_pos = vec3(0.17287, 0.66468, 2.97664);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00626, 0.91132, -0.41164);
    }
    
    if (time >= 14.86652 && time < 14.89985) {
        cam_pos = vec3(0.17769, 0.66066, 2.98139);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00673, 0.91125, -0.41180);
    }
    
    if (time >= 14.89985 && time < 14.93318) {
        cam_pos = vec3(0.18243, 0.65679, 2.98581);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00719, 0.91117, -0.41196);
    }
    
    if (time >= 14.93318 && time < 14.96652) {
        cam_pos = vec3(0.18710, 0.65308, 2.98992);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00764, 0.91110, -0.41211);
    }
    
    if (time >= 14.96652 && time < 14.99985) {
        cam_pos = vec3(0.19168, 0.64952, 2.99372);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00808, 0.91103, -0.41226);
    }
    
    if (time >= 14.99985 && time < 15.03318) {
        cam_pos = vec3(0.19619, 0.64610, 2.99723);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00851, 0.91096, -0.41241);
    }
    
    if (time >= 15.03318 && time < 15.06652) {
        cam_pos = vec3(0.20062, 0.64283, 3.00046);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00894, 0.91089, -0.41255);
    }
    
    if (time >= 15.06652 && time < 15.09985) {
        cam_pos = vec3(0.20496, 0.63969, 3.00342);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00935, 0.91082, -0.41269);
    }
    
    if (time >= 15.09985 && time < 15.13318) {
        cam_pos = vec3(0.20923, 0.63668, 3.00612);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00976, 0.91076, -0.41283);
    }
    
    if (time >= 15.13318 && time < 15.16652) {
        cam_pos = vec3(0.21341, 0.63380, 3.00857);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01016, 0.91069, -0.41296);
    }
    
    if (time >= 15.16652 && time < 15.19985) {
        cam_pos = vec3(0.21752, 0.63104, 3.01077);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01055, 0.91063, -0.41309);
    }
    
    if (time >= 15.19985 && time < 15.23318) {
        cam_pos = vec3(0.22154, 0.62840, 3.01275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01093, 0.91057, -0.41322);
    }
    
    if (time >= 15.23318 && time < 15.26651) {
        cam_pos = vec3(0.22549, 0.62587, 3.01450);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01130, 0.91051, -0.41334);
    }
    
    if (time >= 15.26651 && time < 15.29985) {
        cam_pos = vec3(0.22936, 0.62346, 3.01604);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01166, 0.91045, -0.41346);
    }
    
    if (time >= 15.29985 && time < 15.33318) {
        cam_pos = vec3(0.23314, 0.62116, 3.01737);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01202, 0.91039, -0.41358);
    }
    
    if (time >= 15.33318 && time < 15.36651) {
        cam_pos = vec3(0.23685, 0.61896, 3.01850);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01237, 0.91033, -0.41369);
    }
    
    if (time >= 15.36651 && time < 15.39985) {
        cam_pos = vec3(0.24047, 0.61686, 3.01944);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01271, 0.91028, -0.41380);
    }
    
    if (time >= 15.39985 && time < 15.43318) {
        cam_pos = vec3(0.24402, 0.61486, 3.02019);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01304, 0.91022, -0.41391);
    }
    
    if (time >= 15.43318 && time < 15.46651) {
        cam_pos = vec3(0.24749, 0.61296, 3.02076);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01336, 0.91017, -0.41402);
    }
    
    if (time >= 15.46651 && time < 15.49985) {
        cam_pos = vec3(0.25088, 0.61115, 3.02116);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01368, 0.91012, -0.41412);
    }
    
    if (time >= 15.49985 && time < 15.53318) {
        cam_pos = vec3(0.25419, 0.60943, 3.02139);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01399, 0.91007, -0.41422);
    }
    
    if (time >= 15.53318 && time < 15.56651) {
        cam_pos = vec3(0.25742, 0.60780, 3.02146);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01429, 0.91002, -0.41431);
    }
    
    if (time >= 15.56651 && time < 15.59984) {
        cam_pos = vec3(0.26058, 0.60626, 3.02137);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01458, 0.90997, -0.41441);
    }
    
    if (time >= 15.59984 && time < 15.63318) {
        cam_pos = vec3(0.26366, 0.60480, 3.02113);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01487, 0.90993, -0.41450);
    }
    
    if (time >= 15.63318 && time < 15.66651) {
        cam_pos = vec3(0.26666, 0.60342, 3.02074);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01515, 0.90988, -0.41459);
    }
    
    if (time >= 15.66651 && time < 15.69984) {
        cam_pos = vec3(0.26958, 0.60212, 3.02021);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01542, 0.90984, -0.41467);
    }
    
    if (time >= 15.69984 && time < 15.73318) {
        cam_pos = vec3(0.27243, 0.60089, 3.01954);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01568, 0.90980, -0.41476);
    }
    
    if (time >= 15.73318 && time < 15.76651) {
        cam_pos = vec3(0.27520, 0.59975, 3.01874);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01594, 0.90976, -0.41484);
    }
    
    if (time >= 15.76651 && time < 15.79984) {
        cam_pos = vec3(0.27789, 0.59867, 3.01781);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01619, 0.90971, -0.41492);
    }
    
    if (time >= 15.79984 && time < 15.83318) {
        cam_pos = vec3(0.28051, 0.59767, 3.01675);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01643, 0.90968, -0.41499);
    }
    
    if (time >= 15.83318 && time < 15.86651) {
        cam_pos = vec3(0.28306, 0.59674, 3.01558);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01666, 0.90964, -0.41507);
    }
    
    if (time >= 15.86651 && time < 15.89984) {
        cam_pos = vec3(0.28553, 0.59588, 3.01428);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01689, 0.90960, -0.41514);
    }
    
    if (time >= 15.89984 && time < 15.93317) {
        cam_pos = vec3(0.28792, 0.59508, 3.01287);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01711, 0.90957, -0.41521);
    }
    
    if (time >= 15.93317 && time < 15.96651) {
        cam_pos = vec3(0.29025, 0.59435, 3.01135);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01733, 0.90953, -0.41527);
    }
    
    if (time >= 15.96651 && time < 15.99984) {
        cam_pos = vec3(0.29250, 0.59368, 3.00972);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01753, 0.90950, -0.41534);
    }
    
    if (time >= 15.99984 && time < 16.03317) {
        cam_pos = vec3(0.29467, 0.59308, 3.00798);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01773, 0.90947, -0.41540);
    }
    
    if (time >= 16.03317 && time < 16.06651) {
        cam_pos = vec3(0.29678, 0.59253, 3.00615);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01793, 0.90943, -0.41546);
    }
    
    if (time >= 16.06651 && time < 16.09984) {
        cam_pos = vec3(0.29881, 0.59205, 3.00421);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01811, 0.90940, -0.41552);
    }
    
    if (time >= 16.09984 && time < 16.13317) {
        cam_pos = vec3(0.30077, 0.59162, 3.00218);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01829, 0.90938, -0.41557);
    }
    
    if (time >= 16.13317 && time < 16.16651) {
        cam_pos = vec3(0.30266, 0.59125, 3.00006);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01847, 0.90935, -0.41563);
    }
    
    if (time >= 16.16651 && time < 16.19984) {
        cam_pos = vec3(0.30448, 0.59094, 2.99784);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01863, 0.90932, -0.41568);
    }
    
    if (time >= 16.19984 && time < 16.23317) {
        cam_pos = vec3(0.30623, 0.59068, 2.99554);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01879, 0.90929, -0.41573);
    }
    
    if (time >= 16.23317 && time < 16.26650) {
        cam_pos = vec3(0.30791, 0.59047, 2.99314);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01895, 0.90927, -0.41578);
    }
    
    if (time >= 16.26650 && time < 16.29984) {
        cam_pos = vec3(0.30952, 0.59032, 2.99067);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01909, 0.90925, -0.41582);
    }
    
    if (time >= 16.29984 && time < 16.33317) {
        cam_pos = vec3(0.31107, 0.59022, 2.98811);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01923, 0.90922, -0.41586);
    }
    
    if (time >= 16.33317 && time < 16.36650) {
        cam_pos = vec3(0.31254, 0.59017, 2.98547);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01937, 0.90920, -0.41590);
    }
    
    if (time >= 16.36650 && time < 16.39984) {
        cam_pos = vec3(0.31395, 0.59016, 2.98276);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01950, 0.90918, -0.41594);
    }
    
    if (time >= 16.39984 && time < 16.43317) {
        cam_pos = vec3(0.31529, 0.59021, 2.97997);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01962, 0.90916, -0.41598);
    }
    
    if (time >= 16.43317 && time < 16.46650) {
        cam_pos = vec3(0.31656, 0.59031, 2.97710);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01973, 0.90914, -0.41602);
    }
    
    if (time >= 16.46650 && time < 16.49984) {
        cam_pos = vec3(0.31776, 0.59045, 2.97416);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01984, 0.90913, -0.41605);
    }
    
    if (time >= 16.49984 && time < 16.53317) {
        cam_pos = vec3(0.31890, 0.59064, 2.97116);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01995, 0.90911, -0.41608);
    }
    
    if (time >= 16.53317 && time < 16.56650) {
        cam_pos = vec3(0.31998, 0.59087, 2.96808);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02005, 0.90909, -0.41611);
    }
    
    if (time >= 16.56650 && time < 16.59983) {
        cam_pos = vec3(0.32099, 0.59115, 2.96494);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02014, 0.90908, -0.41614);
    }
    
    if (time >= 16.59983 && time < 16.63317) {
        cam_pos = vec3(0.32193, 0.59147, 2.96173);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02022, 0.90906, -0.41617);
    }
    
    if (time >= 16.63317 && time < 16.66650) {
        cam_pos = vec3(0.32281, 0.59183, 2.95845);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02030, 0.90905, -0.41619);
    }
    
    if (time >= 16.66650 && time < 16.69983) {
        cam_pos = vec3(0.32363, 0.59223, 2.95512);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02038, 0.90904, -0.41621);
    }
    
    if (time >= 16.69983 && time < 16.73317) {
        cam_pos = vec3(0.32438, 0.59268, 2.95172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02045, 0.90903, -0.41623);
    }
    
    if (time >= 16.73317 && time < 16.76650) {
        cam_pos = vec3(0.32507, 0.59317, 2.94827);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02051, 0.90902, -0.41625);
    }
    
    if (time >= 16.76650 && time < 16.79983) {
        cam_pos = vec3(0.32570, 0.59369, 2.94475);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02057, 0.90901, -0.41627);
    }
    
    if (time >= 16.79983 && time < 16.83317) {
        cam_pos = vec3(0.32626, 0.59426, 2.94118);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02062, 0.90900, -0.41628);
    }
    
    if (time >= 16.83317 && time < 16.86650) {
        cam_pos = vec3(0.32677, 0.59487, 2.93755);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02066, 0.90899, -0.41630);
    }
    
    if (time >= 16.86650 && time < 16.89983) {
        cam_pos = vec3(0.32721, 0.59551, 2.93387);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02070, 0.90899, -0.41631);
    }
    
    if (time >= 16.89983 && time < 16.93316) {
        cam_pos = vec3(0.32759, 0.59619, 2.93013);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02074, 0.90898, -0.41632);
    }
    
    if (time >= 16.93316 && time < 16.96650) {
        cam_pos = vec3(0.32791, 0.59691, 2.92634);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02077, 0.90898, -0.41633);
    }
    
    if (time >= 16.96650 && time < 16.99983) {
        cam_pos = vec3(0.32817, 0.59766, 2.92250);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02079, 0.90897, -0.41634);
    }
    
    if (time >= 16.99983 && time < 17.03316) {
        cam_pos = vec3(0.32838, 0.59845, 2.91861);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02081, 0.90897, -0.41634);
    }
    
    if (time >= 17.03316 && time < 17.06650) {
        cam_pos = vec3(0.32852, 0.59927, 2.91467);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02082, 0.90897, -0.41635);
    }
    
    if (time >= 17.06650 && time < 17.09983) {
        cam_pos = vec3(0.32861, 0.60013, 2.91069);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02083, 0.90897, -0.41635);
    }
    
    if (time >= 17.09983 && time < 17.13316) {
        cam_pos = vec3(0.32863, 0.60102, 2.90665);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02083, 0.90897, -0.41635);
    }
    
    if (time >= 17.13316 && time < 17.16650) {
        cam_pos = vec3(1.47811, 2.15372, 2.16790);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02224, 0.99874, -0.03519);
    }
    
    if (time >= 17.16650 && time < 17.19983) {
        cam_pos = vec3(1.48885, 2.15978, 2.16076);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02275, 0.99917, -0.03381);
    }
    
    if (time >= 17.19983 && time < 17.23316) {
        cam_pos = vec3(1.49368, 2.15782, 2.15741);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02326, 0.99914, -0.03440);
    }
    
    if (time >= 17.23316 && time < 17.26649) {
        cam_pos = vec3(1.49850, 2.15586, 2.15404);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02377, 0.99911, -0.03498);
    }
    
    if (time >= 17.26649 && time < 17.29983) {
        cam_pos = vec3(1.50331, 2.15390, 2.15066);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02429, 0.99907, -0.03556);
    }
    
    if (time >= 17.29983 && time < 17.33316) {
        cam_pos = vec3(1.50812, 2.15194, 2.14727);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02480, 0.99904, -0.03614);
    }
    
    if (time >= 17.33316 && time < 17.36649) {
        cam_pos = vec3(1.51291, 2.14998, 2.14387);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02532, 0.99901, -0.03671);
    }
    
    if (time >= 17.36649 && time < 17.39983) {
        cam_pos = vec3(1.51769, 2.14802, 2.14045);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02584, 0.99897, -0.03728);
    }
    
    if (time >= 17.39983 && time < 17.43316) {
        cam_pos = vec3(1.52247, 2.14606, 2.13702);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02637, 0.99894, -0.03785);
    }
    
    if (time >= 17.43316 && time < 17.46649) {
        cam_pos = vec3(1.52724, 2.14410, 2.13358);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02690, 0.99890, -0.03842);
    }
    
    if (time >= 17.46649 && time < 17.49983) {
        cam_pos = vec3(1.53200, 2.14214, 2.13013);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02743, 0.99886, -0.03899);
    }
    
    if (time >= 17.49983 && time < 17.53316) {
        cam_pos = vec3(1.53674, 2.14018, 2.12667);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02796, 0.99883, -0.03955);
    }
    
    if (time >= 17.53316 && time < 17.56649) {
        cam_pos = vec3(1.54148, 2.13822, 2.12319);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02850, 0.99879, -0.04011);
    }
    
    if (time >= 17.56649 && time < 17.59982) {
        cam_pos = vec3(1.54622, 2.13626, 2.11970);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02904, 0.99875, -0.04067);
    }
    
    if (time >= 17.59982 && time < 17.63316) {
        cam_pos = vec3(-1.69579, 2.17056, 1.89713);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00800, 0.99994, -0.00592);
    }
    
    if (time >= 17.63316 && time < 17.66649) {
        cam_pos = vec3(-1.74570, 2.16692, 1.90200);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00878, 0.99994, -0.00611);
    }
    
    if (time >= 17.66649 && time < 17.69982) {
        cam_pos = vec3(-1.77869, 2.16304, 1.90790);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00938, 0.99993, -0.00648);
    }
    
    if (time >= 17.69982 && time < 17.73316) {
        cam_pos = vec3(-1.81178, 2.15912, 1.91360);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00998, 0.99993, -0.00684);
    }
    
    if (time >= 17.73316 && time < 17.76649) {
        cam_pos = vec3(-1.84497, 2.15515, 1.91911);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01058, 0.99992, -0.00720);
    }
    
    if (time >= 17.76649 && time < 17.79982) {
        cam_pos = vec3(-1.87824, 2.15114, 1.92443);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01119, 0.99991, -0.00756);
    }
    
    if (time >= 17.79982 && time < 17.83316) {
        cam_pos = vec3(-1.91161, 2.14708, 1.92956);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01180, 0.99990, -0.00791);
    }
    
    if (time >= 17.83316 && time < 17.86649) {
        cam_pos = vec3(-1.94506, 2.14298, 1.93450);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01241, 0.99989, -0.00826);
    }
    
    if (time >= 17.86649 && time < 17.89982) {
        cam_pos = vec3(-1.97861, 2.13884, 1.93924);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01302, 0.99988, -0.00861);
    }
    
    if (time >= 17.89982 && time < 17.93315) {
        cam_pos = vec3(-2.01224, 2.13465, 1.94379);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01364, 0.99987, -0.00895);
    }
    
    if (time >= 17.93315 && time < 17.96649) {
        cam_pos = vec3(-2.04597, 2.13041, 1.94814);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01425, 0.99986, -0.00929);
    }
    
    if (time >= 17.96649 && time < 17.99982) {
        cam_pos = vec3(-2.07977, 2.12613, 1.95230);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01487, 0.99984, -0.00962);
    }
    
    if (time >= 17.99982 && time < 18.03315) {
        cam_pos = vec3(-2.11367, 2.12181, 1.95627);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01550, 0.99983, -0.00995);
    }
    
    if (time >= 18.03315 && time < 18.06649) {
        cam_pos = vec3(-2.14764, 2.11744, 1.96003);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01612, 0.99982, -0.01028);
    }
    
    if (time >= 18.06649 && time < 18.09982) {
        cam_pos = vec3(-2.18170, 2.11303, 1.96361);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01675, 0.99980, -0.01060);
    }
    
    if (time >= 18.09982 && time < 18.13315) {
        cam_pos = vec3(-2.21585, 2.10858, 1.96698);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01738, 0.99979, -0.01091);
    }
    
    if (time >= 18.13315 && time < 18.16649) {
        cam_pos = vec3(-2.25007, 2.10408, 1.97016);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01801, 0.99977, -0.01123);
    }
    
    if (time >= 18.16649 && time < 18.19982) {
        cam_pos = vec3(-2.28438, 2.09953, 1.97314);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01864, 0.99976, -0.01154);
    }
    
    if (time >= 18.19982 && time < 18.23315) {
        cam_pos = vec3(-2.31876, 2.09494, 1.97593);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01928, 0.99974, -0.01184);
    }
    
    if (time >= 18.23315 && time < 18.26648) {
        cam_pos = vec3(-2.35322, 2.09031, 1.97851);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01992, 0.99973, -0.01214);
    }
    
    if (time >= 18.26648 && time < 18.29982) {
        cam_pos = vec3(-2.38776, 2.08564, 1.98090);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02056, 0.99971, -0.01244);
    }
    
    if (time >= 18.29982 && time < 18.33315) {
        cam_pos = vec3(-2.42238, 2.08091, 1.98308);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02120, 0.99969, -0.01273);
    }
    
    if (time >= 18.33315 && time < 18.36648) {
        cam_pos = vec3(-2.45707, 2.07615, 1.98507);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02185, 0.99968, -0.01302);
    }
    
    if (time >= 18.36648 && time < 18.39982) {
        cam_pos = vec3(-2.49184, 2.07134, 1.98686);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02249, 0.99966, -0.01330);
    }
    
    if (time >= 18.39982 && time < 18.43315) {
        cam_pos = vec3(-2.52667, 2.06648, 1.98844);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02314, 0.99964, -0.01358);
    }
    
    if (time >= 18.43315 && time < 18.46648) {
        cam_pos = vec3(-2.56158, 2.06159, 1.98983);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02379, 0.99962, -0.01386);
    }
    
    if (time >= 18.46648 && time < 18.49982) {
        cam_pos = vec3(-2.59657, 2.05664, 1.99101);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02445, 0.99960, -0.01413);
    }
    
    if (time >= 18.49982 && time < 18.53315) {
        cam_pos = vec3(-2.63162, 2.05166, 1.99199);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02510, 0.99958, -0.01440);
    }
    
    if (time >= 18.53315 && time < 18.56648) {
        cam_pos = vec3(-2.66674, 2.04663, 1.99277);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02576, 0.99956, -0.01466);
    }
    
    if (time >= 18.56648 && time < 18.59981) {
        cam_pos = vec3(-2.70193, 2.04155, 1.99334);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02642, 0.99954, -0.01492);
    }
    
    if (time >= 18.59981 && time < 18.63315) {
        cam_pos = vec3(-2.73719, 2.03643, 1.99372);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02708, 0.99952, -0.01518);
    }
    
    if (time >= 18.63315 && time < 18.66648) {
        cam_pos = vec3(-2.77251, 2.03127, 1.99388);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02774, 0.99950, -0.01543);
    }
    
    if (time >= 18.66648 && time < 18.69981) {
        cam_pos = vec3(-2.80790, 2.02606, 1.99385);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02841, 0.99947, -0.01567);
    }
    
    if (time >= 18.69981 && time < 18.73315) {
        cam_pos = vec3(-2.84335, 2.02081, 1.99361);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02908, 0.99945, -0.01592);
    }
    
    if (time >= 18.73315 && time < 18.76648) {
        cam_pos = vec3(-2.87886, 2.01551, 1.99316);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02975, 0.99943, -0.01615);
    }
    
    if (time >= 18.76648 && time < 18.79981) {
        cam_pos = vec3(-2.91444, 2.01017, 1.99252);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03042, 0.99940, -0.01639);
    }
    
    if (time >= 18.79981 && time < 18.83315) {
        cam_pos = vec3(-2.95008, 2.00479, 1.99166);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03109, 0.99938, -0.01662);
    }
    
    if (time >= 18.83315 && time < 18.86648) {
        cam_pos = vec3(-2.98577, 1.99936, 1.99060);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03177, 0.99935, -0.01684);
    }
    
    if (time >= 18.86648 && time < 18.89981) {
        cam_pos = vec3(-3.02153, 1.99388, 1.98933);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03244, 0.99933, -0.01706);
    }
    
    if (time >= 18.89981 && time < 18.93314) {
        cam_pos = vec3(-3.05734, 1.98837, 1.98786);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03312, 0.99930, -0.01728);
    }
    
    if (time >= 18.93314 && time < 18.96648) {
        cam_pos = vec3(-3.09321, 1.98280, 1.98618);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03380, 0.99928, -0.01749);
    }
    
    if (time >= 18.96648 && time < 18.99981) {
        cam_pos = vec3(-3.12914, 1.97720, 1.98429);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03448, 0.99925, -0.01770);
    }
    
    if (time >= 18.99981 && time < 19.03314) {
        cam_pos = vec3(-3.16512, 1.97155, 1.98219);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03517, 0.99922, -0.01790);
    }
    
    if (time >= 19.03314 && time < 19.06648) {
        cam_pos = vec3(-3.20115, 1.96585, 1.97989);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03585, 0.99919, -0.01810);
    }
    
    if (time >= 19.06648 && time < 19.09981) {
        cam_pos = vec3(-3.23724, 1.96011, 1.97738);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03654, 0.99916, -0.01829);
    }
    
    if (time >= 19.09981 && time < 19.13314) {
        cam_pos = vec3(-3.27338, 1.95433, 1.97465);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03723, 0.99914, -0.01848);
    }
    
    if (time >= 19.13314 && time < 19.16648) {
        cam_pos = vec3(-3.30956, 1.94850, 1.97172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03792, 0.99911, -0.01867);
    }
    
    if (time >= 19.16648 && time < 19.19981) {
        cam_pos = vec3(-3.34580, 1.94263, 1.96859);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03861, 0.99908, -0.01885);
    }
    
    if (time >= 19.19981 && time < 19.23314) {
        cam_pos = vec3(-3.38209, 1.93672, 1.96524);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03930, 0.99905, -0.01903);
    }
    
    if (time >= 19.23314 && time < 19.26647) {
        cam_pos = vec3(-3.41842, 1.93076, 1.96168);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04000, 0.99902, -0.01920);
    }
    
    if (time >= 19.26647 && time < 19.29981) {
        cam_pos = vec3(-3.45480, 1.92475, 1.95791);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04070, 0.99898, -0.01937);
    }
    
    if (time >= 19.29981 && time < 19.33314) {
        cam_pos = vec3(-3.49122, 1.91871, 1.95393);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04139, 0.99895, -0.01953);
    }
    
    if (time >= 19.33314 && time < 19.36647) {
        cam_pos = vec3(-3.52769, 1.91261, 1.94974);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04209, 0.99892, -0.01969);
    }
    
    if (time >= 19.36647 && time < 19.39981) {
        cam_pos = vec3(-3.56420, 1.90648, 1.94534);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04280, 0.99889, -0.01984);
    }
    
    if (time >= 19.39981 && time < 19.43314) {
        cam_pos = vec3(-3.60075, 1.90030, 1.94072);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04350, 0.99885, -0.01999);
    }
    
    if (time >= 19.43314 && time < 19.46647) {
        cam_pos = vec3(-3.63734, 1.89407, 1.93590);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04420, 0.99882, -0.02014);
    }
    
    if (time >= 19.46647 && time < 19.49981) {
        cam_pos = vec3(-3.67397, 1.88780, 1.93086);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04491, 0.99879, -0.02028);
    }
    
    if (time >= 19.49981 && time < 19.53314) {
        cam_pos = vec3(-3.71064, 1.88149, 1.92561);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04562, 0.99875, -0.02042);
    }
    
    if (time >= 19.53314 && time < 19.56647) {
        cam_pos = vec3(-5.46054, 4.39953, 3.18061);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27218, 0.93272, 0.23443);
    }
    
    if (time >= 19.56647 && time < 19.59980) {
        cam_pos = vec3(-5.44522, 4.40699, 3.16556);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.59980 && time < 19.63314) {
        cam_pos = vec3(-5.41945, 4.39958, 3.14300);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.63314 && time < 19.66647) {
        cam_pos = vec3(-5.39368, 4.39217, 3.12043);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.66647 && time < 19.69980) {
        cam_pos = vec3(-5.36790, 4.38477, 3.09786);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.69980 && time < 19.73314) {
        cam_pos = vec3(-5.34213, 4.37736, 3.07529);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.73314 && time < 19.76647) {
        cam_pos = vec3(-5.31636, 4.36995, 3.05273);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.76647 && time < 19.79980) {
        cam_pos = vec3(-5.29059, 4.36254, 3.03016);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.79980 && time < 19.83314) {
        cam_pos = vec3(-5.26482, 4.35514, 3.00759);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.83314 && time < 19.86647) {
        cam_pos = vec3(-5.23905, 4.34773, 2.98502);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.86647 && time < 19.89980) {
        cam_pos = vec3(-5.21328, 4.34032, 2.96246);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.89980 && time < 19.93313) {
        cam_pos = vec3(-5.18750, 4.33291, 2.93989);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.93313 && time < 19.96647) {
        cam_pos = vec3(-5.16173, 4.32551, 2.91732);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.96647 && time < 19.99980) {
        cam_pos = vec3(-5.13596, 4.31810, 2.89475);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 19.99980 && time < 20.03313) {
        cam_pos = vec3(-5.11019, 4.31069, 2.87219);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.03313 && time < 20.06647) {
        cam_pos = vec3(-5.08442, 4.30328, 2.84962);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.06647 && time < 20.09980) {
        cam_pos = vec3(-5.05865, 4.29588, 2.82705);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.09980 && time < 20.13313) {
        cam_pos = vec3(-5.03288, 4.28847, 2.80448);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.13313 && time < 20.16647) {
        cam_pos = vec3(-5.00711, 4.28106, 2.78192);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.16647 && time < 20.19980) {
        cam_pos = vec3(-4.98133, 4.27365, 2.75935);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.19980 && time < 20.23313) {
        cam_pos = vec3(-4.95556, 4.26625, 2.73678);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.23313 && time < 20.26646) {
        cam_pos = vec3(-4.92979, 4.25884, 2.71421);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.26646 && time < 20.29980) {
        cam_pos = vec3(-4.90402, 4.25143, 2.69165);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.29980 && time < 20.33313) {
        cam_pos = vec3(-4.87825, 4.24402, 2.66908);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.33313 && time < 20.36646) {
        cam_pos = vec3(-4.85248, 4.23662, 2.64651);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.36646 && time < 20.39980) {
        cam_pos = vec3(-4.82671, 4.22921, 2.62394);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.39980 && time < 20.43313) {
        cam_pos = vec3(-4.80094, 4.22180, 2.60138);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
    }
    
    if (time >= 20.43313 && time < 20.46646) {
        cam_pos = vec3(-0.15489, 1.15505, 1.32142);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00217, 0.99834, -0.04823);
    }
    
    if (time >= 20.46646 && time < 20.49980) {
        cam_pos = vec3(-0.12552, 1.13784, 1.31361);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.49980 && time < 20.53313) {
        cam_pos = vec3(-0.12475, 1.13952, 1.31369);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.53313 && time < 20.56646) {
        cam_pos = vec3(-0.12399, 1.14120, 1.31377);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.56646 && time < 20.59979) {
        cam_pos = vec3(-0.12322, 1.14289, 1.31384);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.59979 && time < 20.63313) {
        cam_pos = vec3(-0.12245, 1.14457, 1.31392);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.63313 && time < 20.66646) {
        cam_pos = vec3(-0.12169, 1.14625, 1.31400);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.66646 && time < 20.69979) {
        cam_pos = vec3(-0.12092, 1.14793, 1.31407);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.69979 && time < 20.73313) {
        cam_pos = vec3(-0.12016, 1.14961, 1.31415);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.73313 && time < 20.76646) {
        cam_pos = vec3(-0.11939, 1.15129, 1.31423);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.76646 && time < 20.79979) {
        cam_pos = vec3(-0.11862, 1.15298, 1.31430);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.79979 && time < 20.83313) {
        cam_pos = vec3(-0.11786, 1.15466, 1.31438);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.83313 && time < 20.86646) {
        cam_pos = vec3(-0.11709, 1.15634, 1.31445);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.86646 && time < 20.89979) {
        cam_pos = vec3(-0.11633, 1.15802, 1.31453);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.89979 && time < 20.93312) {
        cam_pos = vec3(-0.11556, 1.15970, 1.31461);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.93312 && time < 20.96646) {
        cam_pos = vec3(-0.11479, 1.16138, 1.31468);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.96646 && time < 20.99979) {
        cam_pos = vec3(-0.11403, 1.16306, 1.31476);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 20.99979 && time < 21.03312) {
        cam_pos = vec3(-0.11326, 1.16475, 1.31484);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.03312 && time < 21.06646) {
        cam_pos = vec3(-0.11250, 1.16643, 1.31491);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.06646 && time < 21.09979) {
        cam_pos = vec3(-0.11173, 1.16811, 1.31499);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.09979 && time < 21.13312) {
        cam_pos = vec3(-0.11096, 1.16979, 1.31507);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.13312 && time < 21.16646) {
        cam_pos = vec3(-0.11020, 1.17147, 1.31514);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.16646 && time < 21.19979) {
        cam_pos = vec3(-0.10943, 1.17315, 1.31522);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.19979 && time < 21.23312) {
        cam_pos = vec3(-0.10867, 1.17484, 1.31530);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.23312 && time < 21.26645) {
        cam_pos = vec3(-0.10790, 1.17652, 1.31537);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.26645 && time < 21.29979) {
        cam_pos = vec3(-0.10713, 1.17820, 1.31545);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.29979 && time < 21.33312) {
        cam_pos = vec3(-0.10637, 1.17988, 1.31553);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.33312 && time < 21.36645) {
        cam_pos = vec3(-0.10560, 1.18156, 1.31560);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.36645 && time < 21.39979) {
        cam_pos = vec3(-0.10483, 1.18324, 1.31568);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.39979 && time < 21.43312) {
        cam_pos = vec3(-0.10407, 1.18492, 1.31575);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.43312 && time < 21.46645) {
        cam_pos = vec3(-0.10330, 1.18661, 1.31583);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.46645 && time < 21.49979) {
        cam_pos = vec3(-0.10254, 1.18829, 1.31591);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.49979 && time < 21.53312) {
        cam_pos = vec3(-0.10177, 1.18997, 1.31598);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.53312 && time < 21.56645) {
        cam_pos = vec3(-0.10100, 1.19165, 1.31606);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.56645 && time < 21.59978) {
        cam_pos = vec3(-0.10024, 1.19333, 1.31614);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.59978 && time < 21.63312) {
        cam_pos = vec3(-0.09947, 1.19501, 1.31621);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.63312 && time < 21.66645) {
        cam_pos = vec3(-0.09871, 1.19670, 1.31629);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.66645 && time < 21.69978) {
        cam_pos = vec3(-0.09794, 1.19838, 1.31637);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.69978 && time < 21.73312) {
        cam_pos = vec3(-0.09717, 1.20006, 1.31644);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.73312 && time < 21.76645) {
        cam_pos = vec3(-0.09641, 1.20174, 1.31652);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.76645 && time < 21.79978) {
        cam_pos = vec3(-0.09564, 1.20342, 1.31660);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.79978 && time < 21.83312) {
        cam_pos = vec3(-0.09488, 1.20510, 1.31667);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.83312 && time < 21.86645) {
        cam_pos = vec3(-0.09411, 1.20678, 1.31675);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.86645 && time < 21.89978) {
        cam_pos = vec3(-0.09334, 1.20847, 1.31683);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.89978 && time < 21.93311) {
        cam_pos = vec3(-0.09258, 1.21015, 1.31690);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.93311 && time < 21.96645) {
        cam_pos = vec3(-0.09181, 1.21183, 1.31698);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.96645 && time < 21.99978) {
        cam_pos = vec3(-0.09104, 1.21351, 1.31706);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 21.99978 && time < 22.03311) {
        cam_pos = vec3(-0.09028, 1.21519, 1.31713);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 22.03311 && time < 22.06645) {
        cam_pos = vec3(-0.08951, 1.21687, 1.31721);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 22.06645 && time < 22.09978) {
        cam_pos = vec3(-0.08875, 1.21856, 1.31728);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
    }
    
    if (time >= 22.09978 && time < 22.13311) {
        cam_pos = vec3(1.97615, 2.24797, 1.06978);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02225, 0.99954, -0.02015);
    }
    
    if (time >= 22.13311 && time < 22.16645) {
        cam_pos = vec3(1.97745, 2.25483, 1.08202);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02225, 0.99955, -0.02011);
    }
    
    if (time >= 22.16645 && time < 22.19978) {
        cam_pos = vec3(1.96481, 2.25483, 1.09590);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02210, 0.99955, -0.02028);
    }
    
    if (time >= 22.19978 && time < 22.23311) {
        cam_pos = vec3(1.95206, 2.25483, 1.10970);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02195, 0.99955, -0.02044);
    }
    
    if (time >= 22.23311 && time < 22.26644) {
        cam_pos = vec3(1.93921, 2.25483, 1.12340);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02180, 0.99955, -0.02060);
    }
    
    if (time >= 22.26644 && time < 22.29978) {
        cam_pos = vec3(1.92627, 2.25483, 1.13700);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02165, 0.99955, -0.02076);
    }
    
    if (time >= 22.29978 && time < 22.33311) {
        cam_pos = vec3(1.91322, 2.25483, 1.15051);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02150, 0.99955, -0.02092);
    }
    
    if (time >= 22.33311 && time < 22.36644) {
        cam_pos = vec3(1.90007, 2.25483, 1.16392);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02134, 0.99955, -0.02108);
    }
    
    if (time >= 22.36644 && time < 22.39978) {
        cam_pos = vec3(1.88682, 2.25483, 1.17723);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02119, 0.99955, -0.02123);
    }
    
    if (time >= 22.39978 && time < 22.43311) {
        cam_pos = vec3(1.87348, 2.25483, 1.19045);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02103, 0.99955, -0.02139);
    }
    
    if (time >= 22.43311 && time < 22.46644) {
        cam_pos = vec3(1.86004, 2.25483, 1.20357);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02087, 0.99955, -0.02154);
    }
    
    if (time >= 22.46644 && time < 22.49978) {
        cam_pos = vec3(1.84650, 2.25483, 1.21659);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02071, 0.99955, -0.02170);
    }
    
    if (time >= 22.49978 && time < 22.53311) {
        cam_pos = vec3(1.83287, 2.25483, 1.22950);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02055, 0.99955, -0.02185);
    }
    
    if (time >= 22.53311 && time < 22.56644) {
        cam_pos = vec3(1.81914, 2.25483, 1.24232);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02039, 0.99955, -0.02200);
    }
    
    if (time >= 22.56644 && time < 22.59977) {
        cam_pos = vec3(1.80532, 2.25483, 1.25504);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02023, 0.99955, -0.02215);
    }
    
    if (time >= 22.59977 && time < 22.63311) {
        cam_pos = vec3(1.79141, 2.25483, 1.26765);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02006, 0.99955, -0.02230);
    }
    
    if (time >= 22.63311 && time < 22.66644) {
        cam_pos = vec3(1.77740, 2.25483, 1.28016);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01990, 0.99955, -0.02244);
    }
    
    if (time >= 22.66644 && time < 22.69977) {
        cam_pos = vec3(1.76330, 2.25483, 1.29257);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01973, 0.99955, -0.02259);
    }
    
    if (time >= 22.69977 && time < 22.73311) {
        cam_pos = vec3(1.74911, 2.25483, 1.30487);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01957, 0.99955, -0.02274);
    }
    
    if (time >= 22.73311 && time < 22.76644) {
        cam_pos = vec3(1.73483, 2.25483, 1.31707);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01940, 0.99955, -0.02288);
    }
    
    if (time >= 22.76644 && time < 22.79977) {
        cam_pos = vec3(7.66379, 1.85569, 5.75011);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00779, 0.99995, 0.00584);
    }
    
    if (time >= 22.79977 && time < 22.83311) {
        cam_pos = vec3(7.70659, 1.85587, 5.79521);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00858, 0.99994, 0.00646);
    }
    
    if (time >= 22.83311 && time < 22.86644) {
        cam_pos = vec3(7.70868, 1.85883, 5.80990);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00920, 0.99993, 0.00690);
    }
    
    if (time >= 22.86644 && time < 22.89977) {
        cam_pos = vec3(7.71076, 1.86180, 5.82452);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00981, 0.99993, 0.00732);
    }
    
    if (time >= 22.89977 && time < 22.93310) {
        cam_pos = vec3(7.71283, 1.86479, 5.83908);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01043, 0.99992, 0.00775);
    }
    
    if (time >= 22.93310 && time < 22.96644) {
        cam_pos = vec3(7.71489, 1.86780, 5.85356);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01105, 0.99991, 0.00817);
    }
    
    if (time >= 22.96644 && time < 22.99977) {
        cam_pos = vec3(7.71693, 1.87082, 5.86798);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01167, 0.99990, 0.00860);
    }
    
    if (time >= 22.99977 && time < 23.03310) {
        cam_pos = vec3(7.71896, 1.87387, 5.88234);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01229, 0.99988, 0.00901);
    }
    
    if (time >= 23.03310 && time < 23.06644) {
        cam_pos = vec3(7.72098, 1.87692, 5.89662);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01292, 0.99987, 0.00943);
    }
    
    if (time >= 23.06644 && time < 23.09977) {
        cam_pos = vec3(7.72299, 1.88000, 5.91084);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01354, 0.99986, 0.00984);
    }
    
    if (time >= 23.09977 && time < 23.13310) {
        cam_pos = vec3(7.72498, 1.88309, 5.92499);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01417, 0.99985, 0.01025);
    }
    
    if (time >= 23.13310 && time < 23.16644) {
        cam_pos = vec3(7.72696, 1.88620, 5.93907);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01480, 0.99983, 0.01066);
    }
    
    if (time >= 23.16644 && time < 23.19977) {
        cam_pos = vec3(7.72893, 1.88932, 5.95308);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01543, 0.99982, 0.01107);
    }
    
    if (time >= 23.19977 && time < 23.23310) {
        cam_pos = vec3(7.73089, 1.89246, 5.96702);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01607, 0.99981, 0.01147);
    }
    
    if (time >= 23.23310 && time < 23.26643) {
        cam_pos = vec3(7.73282, 1.89562, 5.98090);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01670, 0.99979, 0.01187);
    }
    
    if (time >= 23.26643 && time < 23.29977) {
        cam_pos = vec3(7.73475, 1.89880, 5.99471);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01734, 0.99977, 0.01227);
    }
    
    if (time >= 23.29977 && time < 23.33310) {
        cam_pos = vec3(7.73666, 1.90199, 6.00846);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01798, 0.99976, 0.01266);
    }
    
    if (time >= 23.33310 && time < 23.36643) {
        cam_pos = vec3(7.73856, 1.90520, 6.02213);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01862, 0.99974, 0.01306);
    }
    
    if (time >= 23.36643 && time < 23.39977) {
        cam_pos = vec3(7.74045, 1.90842, 6.03574);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01926, 0.99972, 0.01345);
    }
    
    if (time >= 23.39977 && time < 23.43310) {
        cam_pos = vec3(7.74231, 1.91166, 6.04928);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01991, 0.99971, 0.01383);
    }
    
    if (time >= 23.43310 && time < 23.46643) {
        cam_pos = vec3(7.74417, 1.91492, 6.06275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02055, 0.99969, 0.01422);
    }
    
    if (time >= 23.46643 && time < 23.49977) {
        cam_pos = vec3(7.74600, 1.91820, 6.07615);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02120, 0.99967, 0.01460);
    }
    
    if (time >= 23.49977 && time < 23.53310) {
        cam_pos = vec3(7.74783, 1.92149, 6.08948);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02185, 0.99965, 0.01498);
    }
    
    if (time >= 23.53310 && time < 23.56643) {
        cam_pos = vec3(7.74963, 1.92480, 6.10275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02250, 0.99963, 0.01535);
    }
    
    if (time >= 23.56643 && time < 23.59976) {
        cam_pos = vec3(7.75142, 1.92812, 6.11596);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02315, 0.99961, 0.01573);
    }
    
    if (time >= 23.59976 && time < 23.63310) {
        cam_pos = vec3(7.75320, 1.93147, 6.12909);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02381, 0.99959, 0.01610);
    }
    
    if (time >= 23.63310 && time < 23.66643) {
        cam_pos = vec3(7.75496, 1.93482, 6.14215);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02447, 0.99957, 0.01647);
    }
    
    if (time >= 23.66643 && time < 23.69976) {
        cam_pos = vec3(7.75670, 1.93820, 6.15515);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02512, 0.99954, 0.01683);
    }
    
    if (time >= 23.69976 && time < 23.73310) {
        cam_pos = vec3(7.75843, 1.94159, 6.16808);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02578, 0.99952, 0.01719);
    }
    
    if (time >= 23.73310 && time < 23.76643) {
        cam_pos = vec3(7.76013, 1.94500, 6.18094);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02644, 0.99950, 0.01755);
    }
    
    if (time >= 23.76643 && time < 23.79976) {
        cam_pos = vec3(7.76182, 1.94843, 6.19374);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02711, 0.99947, 0.01791);
    }
    
    if (time >= 23.79976 && time < 23.83310) {
        cam_pos = vec3(7.76350, 1.95187, 6.20646);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02777, 0.99945, 0.01826);
    }
    
    if (time >= 23.83310 && time < 23.86643) {
        cam_pos = vec3(7.76515, 1.95533, 6.21912);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02844, 0.99942, 0.01862);
    }
    
    if (time >= 23.86643 && time < 23.89976) {
        cam_pos = vec3(7.76679, 1.95880, 6.23172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02910, 0.99940, 0.01896);
    }
    
    if (time >= 23.89976 && time < 23.93309) {
        cam_pos = vec3(7.76841, 1.96230, 6.24424);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.02977, 0.99937, 0.01931);
    }
    
    if (time >= 23.93309 && time < 23.96643) {
        cam_pos = vec3(7.77001, 1.96581, 6.25670);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03044, 0.99934, 0.01965);
    }
    
    if (time >= 23.96643 && time < 23.99976) {
        cam_pos = vec3(7.77160, 1.96933, 6.26909);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03112, 0.99932, 0.01999);
    }
    
    if (time >= 23.99976 && time < 24.03309) {
        cam_pos = vec3(7.77316, 1.97287, 6.28141);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03179, 0.99929, 0.02033);
    }
    
    if (time >= 24.03309 && time < 24.06643) {
        cam_pos = vec3(7.77471, 1.97643, 6.29366);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03246, 0.99926, 0.02067);
    }
    
    if (time >= 24.06643 && time < 24.09976) {
        cam_pos = vec3(7.77624, 1.98001, 6.30585);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03314, 0.99923, 0.02100);
    }
    
    if (time >= 24.09976 && time < 24.13309) {
        cam_pos = vec3(7.77774, 1.98360, 6.31797);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03382, 0.99920, 0.02133);
    }
    
    if (time >= 24.13309 && time < 24.16643) {
        cam_pos = vec3(7.77923, 1.98721, 6.33003);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03450, 0.99917, 0.02165);
    }
    
    if (time >= 24.16643 && time < 24.19976) {
        cam_pos = vec3(7.78070, 1.99084, 6.34202);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03518, 0.99914, 0.02198);
    }
    
    if (time >= 24.19976 && time < 24.23309) {
        cam_pos = vec3(7.78215, 1.99448, 6.35393);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03586, 0.99911, 0.02230);
    }
    
    if (time >= 24.23309 && time < 24.26642) {
        cam_pos = vec3(7.78357, 1.99814, 6.36579);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03655, 0.99908, 0.02262);
    }
    
    if (time >= 24.26642 && time < 24.29976) {
        cam_pos = vec3(7.78498, 2.00181, 6.37757);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03724, 0.99904, 0.02293);
    }
    
    if (time >= 24.29976 && time < 24.33309) {
        cam_pos = vec3(7.78637, 2.00551, 6.38929);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03792, 0.99901, 0.02324);
    }
    
    if (time >= 24.33309 && time < 24.36642) {
        cam_pos = vec3(7.78774, 2.00921, 6.40094);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03861, 0.99898, 0.02355);
    }
    
    if (time >= 24.36642 && time < 24.39976) {
        cam_pos = vec3(7.78908, 2.01294, 6.41252);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03930, 0.99894, 0.02386);
    }
    
    if (time >= 24.39976 && time < 24.43309) {
        cam_pos = vec3(7.79040, 2.01668, 6.42404);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.03999, 0.99891, 0.02416);
    }
    
    if (time >= 24.43309 && time < 24.46642) {
        cam_pos = vec3(7.79171, 2.02044, 6.43549);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04069, 0.99887, 0.02447);
    }
    
    if (time >= 24.46642 && time < 24.49976) {
        cam_pos = vec3(7.79298, 2.02421, 6.44687);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04138, 0.99884, 0.02476);
    }
    
    if (time >= 24.49976 && time < 24.53309) {
        cam_pos = vec3(7.79424, 2.02801, 6.45818);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04208, 0.99880, 0.02506);
    }
    
    if (time >= 24.53309 && time < 24.56642) {
        cam_pos = vec3(7.79548, 2.03181, 6.46943);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04278, 0.99876, 0.02535);
    }
    
    if (time >= 24.56642 && time < 24.59975) {
        cam_pos = vec3(7.79669, 2.03564, 6.48061);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04347, 0.99873, 0.02564);
    }
    
    if (time >= 24.59975 && time < 24.63309) {
        cam_pos = vec3(7.79789, 2.03948, 6.49173);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04417, 0.99869, 0.02593);
    }
    
    if (time >= 24.63309 && time < 24.66642) {
        cam_pos = vec3(7.79905, 2.04334, 6.50278);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04488, 0.99865, 0.02621);
    }
    
    if (time >= 24.66642 && time < 24.69975) {
        cam_pos = vec3(7.80020, 2.04721, 6.51376);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04558, 0.99861, 0.02649);
    }
    
    if (time >= 24.69975 && time < 24.73309) {
        cam_pos = vec3(7.80132, 2.05110, 6.52467);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04628, 0.99857, 0.02677);
    }
    
    if (time >= 24.73309 && time < 24.76642) {
        cam_pos = vec3(7.80242, 2.05501, 6.53552);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04699, 0.99853, 0.02705);
    }
    
    if (time >= 24.76642 && time < 24.79975) {
        cam_pos = vec3(7.80350, 2.05893, 6.54630);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04770, 0.99849, 0.02732);
    }
    
    if (time >= 24.79975 && time < 24.83309) {
        cam_pos = vec3(7.80455, 2.06288, 6.55702);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04841, 0.99845, 0.02759);
    }
    
    if (time >= 24.83309 && time < 24.86642) {
        cam_pos = vec3(7.80558, 2.06683, 6.56767);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04912, 0.99840, 0.02785);
    }
    
    if (time >= 24.86642 && time < 24.89975) {
        cam_pos = vec3(7.80658, 2.07081, 6.57825);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.04983, 0.99836, 0.02812);
    }
    
    if (time >= 24.89975 && time < 24.93308) {
        cam_pos = vec3(7.80756, 2.07480, 6.58876);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05054, 0.99832, 0.02838);
    }
    
    if (time >= 24.93308 && time < 24.96642) {
        cam_pos = vec3(7.80851, 2.07880, 6.59921);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05125, 0.99828, 0.02864);
    }
    
    if (time >= 24.96642 && time < 24.99975) {
        cam_pos = vec3(7.80944, 2.08283, 6.60959);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05197, 0.99823, 0.02889);
    }
    
    if (time >= 24.99975 && time < 25.03308) {
        cam_pos = vec3(7.81034, 2.08687, 6.61991);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05268, 0.99819, 0.02914);
    }
    
    if (time >= 25.03308 && time < 25.06642) {
        cam_pos = vec3(7.81122, 2.09092, 6.63016);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05340, 0.99814, 0.02939);
    }
    
    if (time >= 25.06642 && time < 25.09975) {
        cam_pos = vec3(7.81208, 2.09499, 6.64035);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05412, 0.99809, 0.02964);
    }
    
    if (time >= 25.09975 && time < 25.13308) {
        cam_pos = vec3(7.81290, 2.09908, 6.65046);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05484, 0.99805, 0.02988);
    }
    
    if (time >= 25.13308 && time < 25.16642) {
        cam_pos = vec3(7.81370, 2.10319, 6.66051);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05556, 0.99800, 0.03012);
    }
    
    if (time >= 25.16642 && time < 25.19975) {
        cam_pos = vec3(7.81448, 2.10731, 6.67050);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05629, 0.99795, 0.03036);
    }
    
    if (time >= 25.19975 && time < 25.23308) {
        cam_pos = vec3(7.81523, 2.11145, 6.68042);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05701, 0.99790, 0.03059);
    }
    
    if (time >= 25.23308 && time < 25.26641) {
        cam_pos = vec3(7.81595, 2.11560, 6.69027);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05773, 0.99786, 0.03082);
    }
    
    if (time >= 25.26641 && time < 25.29975) {
        cam_pos = vec3(7.81665, 2.11978, 6.70006);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05846, 0.99781, 0.03105);
    }
    
    if (time >= 25.29975 && time < 25.33308) {
        cam_pos = vec3(7.81731, 2.12396, 6.70978);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05919, 0.99776, 0.03128);
    }
    
    if (time >= 25.33308 && time < 25.36641) {
        cam_pos = vec3(7.81795, 2.12817, 6.71944);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.05992, 0.99771, 0.03150);
    }
    
    if (time >= 25.36641 && time < 25.39975) {
        cam_pos = vec3(7.81857, 2.13239, 6.72903);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06065, 0.99766, 0.03172);
    }
    
    if (time >= 25.39975 && time < 25.43308) {
        cam_pos = vec3(7.81915, 2.13663, 6.73855);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06138, 0.99760, 0.03194);
    }
    
    if (time >= 25.43308 && time < 25.46641) {
        cam_pos = vec3(7.81971, 2.14088, 6.74801);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.06211, 0.99755, 0.03215);
    }
    
    if (time >= 25.46641 && time < 25.49975) {
        cam_pos = vec3(-0.16909, 1.10378, 5.59157);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01061, 0.97606, -0.21608);
    }
    
    if (time >= 25.49975 && time < 25.53308) {
        cam_pos = vec3(-0.23261, 1.08795, 5.63068);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01010, 0.97609, -0.21715);
    }
    
    if (time >= 25.53308 && time < 25.56641) {
        cam_pos = vec3(-0.23555, 1.07691, 5.69906);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00994, 0.97635, -0.21595);
    }
    
    if (time >= 25.56641 && time < 25.59974) {
        cam_pos = vec3(-0.23895, 1.06401, 5.78033);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00976, 0.97667, -0.21453);
    }
    
    if (time >= 25.59974 && time < 25.63308) {
        cam_pos = vec3(-0.24263, 1.04996, 5.87066);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00955, 0.97702, -0.21294);
    }
    
    if (time >= 25.63308 && time < 25.66641) {
        cam_pos = vec3(-0.24646, 1.03518, 5.96777);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00933, 0.97739, -0.21124);
    }
    
    if (time >= 25.66641 && time < 25.69974) {
        cam_pos = vec3(-0.25035, 1.01997, 6.07018);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00910, 0.97778, -0.20945);
    }
    
    if (time >= 25.69974 && time < 25.73308) {
        cam_pos = vec3(-0.25425, 1.00453, 6.17684);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00887, 0.97818, -0.20758);
    }
    
    if (time >= 25.73308 && time < 25.76641) {
        cam_pos = vec3(-0.25811, 0.98902, 6.28701);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00863, 0.97859, -0.20565);
    }
    
    if (time >= 25.76641 && time < 25.79974) {
        cam_pos = vec3(-0.26191, 0.97356, 6.40011);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00839, 0.97900, -0.20367);
    }
    
    if (time >= 25.79974 && time < 25.83308) {
        cam_pos = vec3(-0.26561, 0.95823, 6.51570);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00814, 0.97943, -0.20164);
    }
    
    if (time >= 25.83308 && time < 25.86641) {
        cam_pos = vec3(-0.26918, 0.94312, 6.63340);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00790, 0.97985, -0.19958);
    }
    
    if (time >= 25.86641 && time < 25.89974) {
        cam_pos = vec3(-0.27261, 0.92829, 6.75293);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00765, 0.98028, -0.19748);
    }
    
    if (time >= 25.89974 && time < 25.93307) {
        cam_pos = vec3(-0.27589, 0.91378, 6.87405);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00741, 0.98070, -0.19536);
    }
    
    if (time >= 25.93307 && time < 25.96641) {
        cam_pos = vec3(-0.27900, 0.89964, 6.99654);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00716, 0.98113, -0.19322);
    }
    
    if (time >= 25.96641 && time < 25.99974) {
        cam_pos = vec3(-0.28194, 0.88592, 7.12024);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00692, 0.98156, -0.19105);
    }
    
    if (time >= 25.99974 && time < 26.03307) {
        cam_pos = vec3(-0.28468, 0.87263, 7.24499);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00668, 0.98198, -0.18886);
    }
    
    if (time >= 26.03307 && time < 26.06641) {
        cam_pos = vec3(-0.28723, 0.85980, 7.37065);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00644, 0.98240, -0.18666);
    }
    
    if (time >= 26.06641 && time < 26.09974) {
        cam_pos = vec3(-0.28958, 0.84747, 7.49710);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00620, 0.98282, -0.18445);
    }
    
    if (time >= 26.09974 && time < 26.13307) {
        cam_pos = vec3(-0.29171, 0.83564, 7.62423);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00596, 0.98324, -0.18222);
    }
    
    if (time >= 26.13307 && time < 26.16641) {
        cam_pos = vec3(-0.29364, 0.82434, 7.75196);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00573, 0.98365, -0.17998);
    }
    
    if (time >= 26.16641 && time < 26.19974) {
        cam_pos = vec3(-0.29535, 0.81358, 7.88018);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00551, 0.98406, -0.17774);
    }
    
    if (time >= 26.19974 && time < 26.23307) {
        cam_pos = vec3(-0.29684, 0.80337, 8.00881);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00528, 0.98447, -0.17548);
    }
    
    if (time >= 26.23307 && time < 26.26640) {
        cam_pos = vec3(-0.29810, 0.79372, 8.13778);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00506, 0.98487, -0.17322);
    }
    
    if (time >= 26.26640 && time < 26.29974) {
        cam_pos = vec3(-0.29914, 0.78464, 8.26702);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00484, 0.98527, -0.17096);
    }
    
    if (time >= 26.29974 && time < 26.33307) {
        cam_pos = vec3(-0.29996, 0.77614, 8.39646);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00463, 0.98566, -0.16869);
    }
    
    if (time >= 26.33307 && time < 26.36640) {
        cam_pos = vec3(-0.30054, 0.76823, 8.52603);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00442, 0.98605, -0.16642);
    }
    
    if (time >= 26.36640 && time < 26.39974) {
        cam_pos = vec3(-0.30090, 0.76090, 8.65567);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00421, 0.98643, -0.16415);
    }
    
    if (time >= 26.39974 && time < 26.43307) {
        cam_pos = vec3(-0.30103, 0.75417, 8.78532);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00401, 0.98680, -0.16187);
    }
    
    if (time >= 26.43307 && time < 26.46640) {
        cam_pos = vec3(-0.30093, 0.74803, 8.91493);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00381, 0.98717, -0.15960);
    }
    
    if (time >= 26.46640 && time < 26.49974) {
        cam_pos = vec3(-0.30060, 0.74249, 9.04443);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00362, 0.98754, -0.15733);
    }
    
    if (time >= 26.49974 && time < 26.53307) {
        cam_pos = vec3(-0.30004, 0.73754, 9.17376);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00343, 0.98790, -0.15506);
    }
    
    if (time >= 26.53307 && time < 26.56640) {
        cam_pos = vec3(-0.29926, 0.73319, 9.30288);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00324, 0.98825, -0.15280);
    }
    
    if (time >= 26.56640 && time < 26.59973) {
        cam_pos = vec3(-0.29825, 0.72943, 9.43172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00306, 0.98860, -0.15054);
    }
    
    if (time >= 26.59973 && time < 26.63307) {
        cam_pos = vec3(-0.29702, 0.72626, 9.56023);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00289, 0.98894, -0.14828);
    }
    
    if (time >= 26.63307 && time < 26.66640) {
        cam_pos = vec3(-0.29557, 0.72368, 9.68835);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00271, 0.98928, -0.14603);
    }
    
    if (time >= 26.66640 && time < 26.69973) {
        cam_pos = vec3(-0.29391, 0.72168, 9.81603);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00255, 0.98960, -0.14379);
    }
    
    if (time >= 26.69973 && time < 26.73307) {
        cam_pos = vec3(-0.29202, 0.72026, 9.94320);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00238, 0.98993, -0.14156);
    }
    
    if (time >= 26.73307 && time < 26.76640) {
        cam_pos = vec3(-0.28992, 0.71940, 10.06979);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00223, 0.99024, -0.13934);
    }
    
    if (time >= 26.76640 && time < 26.79973) {
        cam_pos = vec3(-0.28763, 0.71911, 10.19576);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00207, 0.99055, -0.13712);
    }
    
    if (time >= 26.79973 && time < 26.83307) {
        cam_pos = vec3(-0.28513, 0.71937, 10.32102);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00192, 0.99085, -0.13492);
    }
    
    if (time >= 26.83307 && time < 26.86640) {
        cam_pos = vec3(-0.28243, 0.72018, 10.44552);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00178, 0.99115, -0.13273);
    }
    
    if (time >= 26.86640 && time < 26.89973) {
        cam_pos = vec3(-0.27955, 0.72151, 10.56917);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00164, 0.99144, -0.13056);
    }
    
    if (time >= 26.89973 && time < 26.93306) {
        cam_pos = vec3(-0.27648, 0.72337, 10.69191);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00151, 0.99172, -0.12840);
    }
    
    if (time >= 26.93306 && time < 26.96640) {
        cam_pos = vec3(-0.27322, 0.72573, 10.81364);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00138, 0.99200, -0.12626);
    }
    
    if (time >= 26.96640 && time < 26.99973) {
        cam_pos = vec3(-0.26981, 0.72858, 10.93428);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00125, 0.99226, -0.12414);
    }
    
    if (time >= 26.99973 && time < 27.03306) {
        cam_pos = vec3(-0.26623, 0.73191, 11.05373);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00113, 0.99252, -0.12204);
    }
    
    if (time >= 27.03306 && time < 27.06640) {
        cam_pos = vec3(-0.26250, 0.73570, 11.17189);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00101, 0.99278, -0.11996);
    }
    
    if (time >= 27.06640 && time < 27.09973) {
        cam_pos = vec3(-0.25862, 0.73991, 11.28865);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00090, 0.99303, -0.11790);
    }
    
    if (time >= 27.09973 && time < 27.13306) {
        cam_pos = vec3(-0.25461, 0.74455, 11.40388);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00080, 0.99326, -0.11587);
    }
    
    if (time >= 27.13306 && time < 27.16640) {
        cam_pos = vec3(-0.25047, 0.74957, 11.51745);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00069, 0.99350, -0.11387);
    }
    
    if (time >= 27.16640 && time < 27.19973) {
        cam_pos = vec3(-0.24625, 0.75495, 11.62920);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00060, 0.99372, -0.11190);
    }
    
    if (time >= 27.19973 && time < 27.23306) {
        cam_pos = vec3(-0.24192, 0.76067, 11.73898);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00050, 0.99394, -0.10996);
    }
    
    if (time >= 27.23306 && time < 27.26639) {
        cam_pos = vec3(-0.23752, 0.76668, 11.84659);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00042, 0.99414, -0.10807);
    }
    
    if (time >= 27.26639 && time < 27.29973) {
        cam_pos = vec3(-0.23306, 0.77295, 11.95181);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00033, 0.99434, -0.10621);
    }
    
    if (time >= 27.29973 && time < 27.33306) {
        cam_pos = vec3(-0.22857, 0.77944, 12.05441);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00025, 0.99454, -0.10440);
    }
    
    if (time >= 27.33306 && time < 27.36639) {
        cam_pos = vec3(-0.22407, 0.78610, 12.15409);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00018, 0.99472, -0.10264);
    }
    
    if (time >= 27.36639 && time < 27.39973) {
        cam_pos = vec3(-0.21959, 0.79288, 12.25052);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00011, 0.99489, -0.10094);
    }
    
    if (time >= 27.39973 && time < 27.43306) {
        cam_pos = vec3(-0.21515, 0.79971, 12.34332);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00005, 0.99506, -0.09930);
    }
    
    if (time >= 27.43306 && time < 27.46639) {
        cam_pos = vec3(-0.21080, 0.80652, 12.43202);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00001, 0.99521, -0.09773);
    }
    
    if (time >= 27.46639 && time < 27.49973) {
        cam_pos = vec3(-0.20658, 0.81323, 12.51604);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00007, 0.99536, -0.09625);
    }
    
    if (time >= 27.49973 && time < 27.53306) {
        cam_pos = vec3(-0.20254, 0.81973, 12.59470);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00012, 0.99549, -0.09486);
    }
    
    if (time >= 27.53306 && time < 27.56639) {
        cam_pos = vec3(-0.19875, 0.82591, 12.66710);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00016, 0.99561, -0.09358);
    }
    
    if (time >= 27.56639 && time < 27.59972) {
        cam_pos = vec3(-0.19529, 0.83162, 12.73210);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00020, 0.99572, -0.09243);
    }
    
    if (time >= 27.59972 && time < 27.63306) {
        cam_pos = vec3(-0.19225, 0.83666, 12.78818);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00024, 0.99581, -0.09144);
    }
    
    if (time >= 27.63306 && time < 27.66639) {
        cam_pos = vec3(-0.18978, 0.84079, 12.83322);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00026, 0.99588, -0.09064);
    }
    
    if (time >= 27.66639 && time < 27.69972) {
        cam_pos = vec3(-0.18806, 0.84367, 12.86414);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00028, 0.99593, -0.09009);
    }
    
    if (time >= 27.69972 && time < 27.73306) {
        cam_pos = vec3(-0.18740, 0.84479, 12.87612);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00029, 0.99595, -0.08988);
    }
    
    if (time >= 27.73306 && time < 27.76639) {
        cam_pos = vec3(0.19028, 2.59307, 1.30396);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01019, 0.99501, 0.09773);
    }
    
    if (time >= 27.76639 && time < 27.79972) {
        cam_pos = vec3(0.19448, 2.60586, 1.21560);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.79972 && time < 27.83306) {
        cam_pos = vec3(0.19553, 2.60399, 1.22427);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.83306 && time < 27.86639) {
        cam_pos = vec3(0.19657, 2.60211, 1.23295);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.86639 && time < 27.89972) {
        cam_pos = vec3(0.19762, 2.60023, 1.24163);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.89972 && time < 27.93305) {
        cam_pos = vec3(0.19866, 2.59835, 1.25031);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.93305 && time < 27.96639) {
        cam_pos = vec3(0.19970, 2.59648, 1.25899);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.96639 && time < 27.99972) {
        cam_pos = vec3(0.20075, 2.59460, 1.26767);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 27.99972 && time < 28.03305) {
        cam_pos = vec3(0.20179, 2.59272, 1.27635);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.03305 && time < 28.06639) {
        cam_pos = vec3(0.20283, 2.59085, 1.28503);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.06639 && time < 28.09972) {
        cam_pos = vec3(0.20388, 2.58897, 1.29371);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.09972 && time < 28.13305) {
        cam_pos = vec3(0.20492, 2.58709, 1.30239);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.13305 && time < 28.16639) {
        cam_pos = vec3(0.20597, 2.58521, 1.31107);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.16639 && time < 28.19972) {
        cam_pos = vec3(0.20701, 2.58334, 1.31975);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.19972 && time < 28.23305) {
        cam_pos = vec3(0.20805, 2.58146, 1.32843);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.23305 && time < 28.26638) {
        cam_pos = vec3(0.20910, 2.57958, 1.33711);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.26638 && time < 28.29972) {
        cam_pos = vec3(0.21014, 2.57771, 1.34578);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.29972 && time < 28.33305) {
        cam_pos = vec3(0.21118, 2.57583, 1.35446);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.33305 && time < 28.36638) {
        cam_pos = vec3(0.21223, 2.57395, 1.36314);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.36638 && time < 28.39972) {
        cam_pos = vec3(0.21327, 2.57207, 1.37182);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.39972 && time < 28.43305) {
        cam_pos = vec3(0.21431, 2.57020, 1.38050);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.43305 && time < 28.46638) {
        cam_pos = vec3(0.21536, 2.56832, 1.38918);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.46638 && time < 28.49972) {
        cam_pos = vec3(0.21640, 2.56644, 1.39786);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.49972 && time < 28.53305) {
        cam_pos = vec3(0.21745, 2.56457, 1.40654);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.53305 && time < 28.56638) {
        cam_pos = vec3(0.21849, 2.56269, 1.41522);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.56638 && time < 28.59971) {
        cam_pos = vec3(0.21953, 2.56081, 1.42390);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.59971 && time < 28.63305) {
        cam_pos = vec3(0.22058, 2.55893, 1.43258);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.63305 && time < 28.66638) {
        cam_pos = vec3(0.22162, 2.55706, 1.44126);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.66638 && time < 28.69971) {
        cam_pos = vec3(0.22266, 2.55518, 1.44994);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.69971 && time < 28.73305) {
        cam_pos = vec3(0.22371, 2.55330, 1.45861);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.73305 && time < 28.76638) {
        cam_pos = vec3(0.22475, 2.55143, 1.46729);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.76638 && time < 28.79971) {
        cam_pos = vec3(0.22580, 2.54955, 1.47597);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.79971 && time < 28.83305) {
        cam_pos = vec3(0.22684, 2.54767, 1.48465);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.83305 && time < 28.86638) {
        cam_pos = vec3(0.22788, 2.54579, 1.49333);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.86638 && time < 28.89971) {
        cam_pos = vec3(0.22893, 2.54392, 1.50201);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.89971 && time < 28.93304) {
        cam_pos = vec3(0.22997, 2.54204, 1.51069);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.93304 && time < 28.96638) {
        cam_pos = vec3(0.23101, 2.54016, 1.51937);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.96638 && time < 28.99971) {
        cam_pos = vec3(0.23206, 2.53829, 1.52805);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 28.99971 && time < 29.03304) {
        cam_pos = vec3(0.23310, 2.53641, 1.53673);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.03304 && time < 29.06638) {
        cam_pos = vec3(0.23415, 2.53453, 1.54541);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.06638 && time < 29.09971) {
        cam_pos = vec3(0.23519, 2.53265, 1.55409);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.09971 && time < 29.13304) {
        cam_pos = vec3(0.23623, 2.53078, 1.56277);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.13304 && time < 29.16638) {
        cam_pos = vec3(0.23728, 2.52890, 1.57145);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.16638 && time < 29.19971) {
        cam_pos = vec3(0.23832, 2.52702, 1.58012);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.19971 && time < 29.23304) {
        cam_pos = vec3(0.23936, 2.52515, 1.58880);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.23304 && time < 29.26637) {
        cam_pos = vec3(0.24041, 2.52327, 1.59748);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.26637 && time < 29.29971) {
        cam_pos = vec3(0.24145, 2.52139, 1.60616);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.29971 && time < 29.33304) {
        cam_pos = vec3(0.24250, 2.51951, 1.61484);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.33304 && time < 29.36637) {
        cam_pos = vec3(0.24354, 2.51764, 1.62352);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.36637 && time < 29.39971) {
        cam_pos = vec3(0.24458, 2.51576, 1.63220);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.39971 && time < 29.43304) {
        cam_pos = vec3(0.24563, 2.51388, 1.64088);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.43304 && time < 29.46637) {
        cam_pos = vec3(0.24667, 2.51201, 1.64956);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.46637 && time < 29.49971) {
        cam_pos = vec3(0.24771, 2.51013, 1.65824);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
    }
    
    if (time >= 29.49971 && time < 29.53304) {
        cam_pos = vec3(-0.39592, 2.16920, 5.27969);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00420, 0.99872, 0.05023);
    }
    
    if (time >= 29.53304 && time < 29.56637) {
        cam_pos = vec3(-0.39018, 2.14003, 5.29535);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00379, 0.99900, 0.04444);
    }
    
    if (time >= 29.56637 && time < 29.59970) {
        cam_pos = vec3(-0.37977, 2.11638, 5.28006);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00330, 0.99921, 0.03958);
    }
    
    if (time >= 29.59970 && time < 29.63304) {
        cam_pos = vec3(-0.37005, 2.09435, 5.26562);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00287, 0.99938, 0.03502);
    }
    
    if (time >= 29.63304 && time < 29.66637) {
        cam_pos = vec3(-0.36078, 2.07340, 5.25172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00247, 0.99953, 0.03067);
    }
    
    if (time >= 29.66637 && time < 29.69970) {
        cam_pos = vec3(-0.35185, 2.05322, 5.23816);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00209, 0.99965, 0.02646);
    }
    
    if (time >= 29.69970 && time < 29.73304) {
        cam_pos = vec3(-0.34315, 2.03364, 5.22485);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00173, 0.99975, 0.02236);
    }
    
    if (time >= 29.73304 && time < 29.76637) {
        cam_pos = vec3(-0.33465, 2.01452, 5.21169);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00140, 0.99983, 0.01833);
    }
    
    if (time >= 29.76637 && time < 29.79970) {
        cam_pos = vec3(-0.32629, 1.99576, 5.19864);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00107, 0.99990, 0.01437);
    }
    
    if (time >= 29.79970 && time < 29.83304) {
        cam_pos = vec3(-0.31804, 1.97729, 5.18566);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00077, 0.99995, 0.01045);
    }
    
    if (time >= 29.83304 && time < 29.86637) {
        cam_pos = vec3(-0.30989, 1.95907, 5.17270);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00047, 0.99998, 0.00656);
    }
    
    if (time >= 29.86637 && time < 29.89970) {
        cam_pos = vec3(-0.30182, 1.94105, 5.15975);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00019, 1.00000, 0.00271);
    }
    
    if (time >= 29.89970 && time < 29.93303) {
        cam_pos = vec3(-0.29381, 1.92319, 5.14678);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00008, 1.00000, -0.00113);
    }
    
    if (time >= 29.93303 && time < 29.96637) {
        cam_pos = vec3(-0.28584, 1.90547, 5.13377);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00034, 0.99999, -0.00495);
    }
    
    if (time >= 29.96637 && time < 29.99970) {
        cam_pos = vec3(-0.27791, 1.88786, 5.12070);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00059, 0.99996, -0.00877);
    }
    
    if (time >= 29.99970 && time < 30.03303) {
        cam_pos = vec3(-0.27001, 1.87034, 5.10757);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00082, 0.99992, -0.01258);
    }
    
    if (time >= 30.03303 && time < 30.06637) {
        cam_pos = vec3(-0.26213, 1.85289, 5.09436);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00105, 0.99987, -0.01639);
    }
    
    if (time >= 30.06637 && time < 30.09970) {
        cam_pos = vec3(-0.25426, 1.83550, 5.08105);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00127, 0.99979, -0.02021);
    }
    
    if (time >= 30.09970 && time < 30.13303) {
        cam_pos = vec3(-0.24640, 1.81815, 5.06764);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00148, 0.99971, -0.02403);
    }
    
    if (time >= 30.13303 && time < 30.16637) {
        cam_pos = vec3(-0.23854, 1.80084, 5.05411);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00168, 0.99961, -0.02786);
    }
    
    if (time >= 30.16637 && time < 30.19970) {
        cam_pos = vec3(-0.23068, 1.78354, 5.04046);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00187, 0.99950, -0.03170);
    }
    
    if (time >= 30.19970 && time < 30.23303) {
        cam_pos = vec3(-0.22281, 1.76625, 5.02668);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00205, 0.99937, -0.03556);
    }
    
    if (time >= 30.23303 && time < 30.26636) {
        cam_pos = vec3(-0.21492, 1.74896, 5.01275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00222, 0.99922, -0.03943);
    }
    
    if (time >= 30.26636 && time < 30.29970) {
        cam_pos = vec3(-0.20702, 1.73165, 4.99866);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00238, 0.99906, -0.04333);
    }
    
    if (time >= 30.29970 && time < 30.33303) {
        cam_pos = vec3(-0.19910, 1.71433, 4.98442);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00253, 0.99888, -0.04724);
    }
    
    if (time >= 30.33303 && time < 30.36636) {
        cam_pos = vec3(-0.19115, 1.69698, 4.97000);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00267, 0.99869, -0.05118);
    }
    
    if (time >= 30.36636 && time < 30.39970) {
        cam_pos = vec3(-0.18317, 1.67959, 4.95540);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00280, 0.99847, -0.05514);
    }
    
    if (time >= 30.39970 && time < 30.43303) {
        cam_pos = vec3(-0.17516, 1.66215, 4.94061);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00293, 0.99825, -0.05914);
    }
    
    if (time >= 30.43303 && time < 30.46636) {
        cam_pos = vec3(-0.16711, 1.64466, 4.92561);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00304, 0.99800, -0.06316);
    }
    
    if (time >= 30.46636 && time < 30.49970) {
        cam_pos = vec3(-0.15902, 1.62711, 4.91041);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00314, 0.99773, -0.06721);
    }
    
    if (time >= 30.49970 && time < 30.53303) {
        cam_pos = vec3(-0.15089, 1.60948, 4.89498);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00323, 0.99745, -0.07131);
    }
    
    if (time >= 30.53303 && time < 30.56636) {
        cam_pos = vec3(-0.14271, 1.59178, 4.87932);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00331, 0.99715, -0.07543);
    }
    
    if (time >= 30.56636 && time < 30.59969) {
        cam_pos = vec3(-0.13447, 1.57399, 4.86341);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00338, 0.99682, -0.07960);
    }
    
    if (time >= 30.59969 && time < 30.63303) {
        cam_pos = vec3(-0.12618, 1.55610, 4.84724);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00344, 0.99648, -0.08381);
    }
    
    if (time >= 30.63303 && time < 30.66636) {
        cam_pos = vec3(-0.11782, 1.53811, 4.83079);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00348, 0.99611, -0.08807);
    }
    
    if (time >= 30.66636 && time < 30.69969) {
        cam_pos = vec3(-0.10940, 1.52001, 4.81406);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00352, 0.99572, -0.09238);
    }
    
    if (time >= 30.69969 && time < 30.73303) {
        cam_pos = vec3(-0.10091, 1.50178, 4.79703);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00354, 0.99530, -0.09673);
    }
    
    if (time >= 30.73303 && time < 30.76636) {
        cam_pos = vec3(-0.09234, 1.48341, 4.77968);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00354, 0.99487, -0.10115);
    }
    
    if (time >= 30.76636 && time < 30.79969) {
        cam_pos = vec3(-0.08370, 1.46490, 4.76199);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00354, 0.99440, -0.10562);
    }
    
    if (time >= 30.79969 && time < 30.83303) {
        cam_pos = vec3(-0.07496, 1.44623, 4.74394);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00352, 0.99391, -0.11015);
    }
    
    if (time >= 30.83303 && time < 30.86636) {
        cam_pos = vec3(-0.06613, 1.42738, 4.72551);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00348, 0.99339, -0.11475);
    }
    
    if (time >= 30.86636 && time < 30.89969) {
        cam_pos = vec3(-0.05720, 1.40836, 4.70669);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00343, 0.99284, -0.11942);
    }
    
    if (time >= 30.89969 && time < 30.93302) {
        cam_pos = vec3(-0.04816, 1.38913, 4.68743);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00337, 0.99226, -0.12416);
    }
    
    if (time >= 30.93302 && time < 30.96636) {
        cam_pos = vec3(-0.03901, 1.36968, 4.66772);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00328, 0.99164, -0.12899);
    }
    
    if (time >= 30.96636 && time < 30.99969) {
        cam_pos = vec3(-0.02973, 1.35000, 4.64752);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00318, 0.99099, -0.13391);
    }
    
    if (time >= 30.99969 && time < 31.03302) {
        cam_pos = vec3(-0.02032, 1.33006, 4.62680);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00306, 0.99030, -0.13892);
    }
    
    if (time >= 31.03302 && time < 31.06636) {
        cam_pos = vec3(-0.01075, 1.30984, 4.60552);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00292, 0.98957, -0.14403);
    }
    
    if (time >= 31.06636 && time < 31.09969) {
        cam_pos = vec3(-0.00103, 1.28932, 4.58364);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00275, 0.98880, -0.14925);
    }
    
    if (time >= 31.09969 && time < 31.13302) {
        cam_pos = vec3(0.00887, 1.26846, 4.56110);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00257, 0.98797, -0.15459);
    }
    
    if (time >= 31.13302 && time < 31.16636) {
        cam_pos = vec3(0.01896, 1.24723, 4.53784);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00235, 0.98710, -0.16007);
    }
    
    if (time >= 31.16636 && time < 31.19969) {
        cam_pos = vec3(0.02925, 1.22560, 4.51381);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00211, 0.98618, -0.16569);
    }
    
    if (time >= 31.19969 && time < 31.23302) {
        cam_pos = vec3(0.03978, 1.20351, 4.48891);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00184, 0.98519, -0.17147);
    }
    
    if (time >= 31.23302 && time < 31.26635) {
        cam_pos = vec3(0.05058, 1.18092, 4.46307);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00154, 0.98413, -0.17742);
    }
    
    if (time >= 31.26635 && time < 31.29969) {
        cam_pos = vec3(0.06166, 1.15775, 4.43616);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00120, 0.98300, -0.18358);
    }
    
    if (time >= 31.29969 && time < 31.33302) {
        cam_pos = vec3(0.07307, 1.13394, 4.40805);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00082, 0.98179, -0.18996);
    }
    
    if (time >= 31.33302 && time < 31.36635) {
        cam_pos = vec3(0.08486, 1.10939, 4.37859);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00040, 0.98049, -0.19659);
    }
    
    if (time >= 31.36635 && time < 31.39969) {
        cam_pos = vec3(0.09709, 1.08397, 4.34756);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00008, 0.97907, -0.20352);
    }
    
    if (time >= 31.39969 && time < 31.43302) {
        cam_pos = vec3(0.10983, 1.05754, 4.31470);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00062, 0.97753, -0.21080);
    }
    
    if (time >= 31.43302 && time < 31.46635) {
        cam_pos = vec3(0.12318, 1.02988, 4.27966);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00123, 0.97584, -0.21849);
    }
    
    if (time >= 31.46635 && time < 31.49969) {
        cam_pos = vec3(0.13730, 1.00072, 4.24195);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00193, 0.97396, -0.22670);
    }
    
    if (time >= 31.49969 && time < 31.53302) {
        cam_pos = vec3(0.15236, 0.96966, 4.20089);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00274, 0.97186, -0.23554);
    }
    
    if (time >= 31.53302 && time < 31.56635) {
        cam_pos = vec3(0.16869, 0.93608, 4.15540);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00369, 0.96946, -0.24523);
    }
    
    if (time >= 31.56635 && time < 31.59968) {
        cam_pos = vec3(0.18680, 0.89892, 4.10371);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00484, 0.96663, -0.25611);
    }
    
    if (time >= 31.59968 && time < 31.63302) {
        cam_pos = vec3(0.20769, 0.85616, 4.04235);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00630, 0.96316, -0.26886);
    }
    
    if (time >= 31.63302 && time < 31.66635) {
        cam_pos = vec3(0.23399, 0.80254, 3.96235);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00835, 0.95843, -0.28521);
    }
    
    if (time >= 31.66635 && time < 31.69968) {
        cam_pos = vec3(0.29307, 0.68282, 3.76987);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01393, 0.94616, -0.32338);
    }
    
    if (time >= 31.69968 && time < 31.73302) {
        cam_pos = vec3(3.73702, 1.31688, 1.97586);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14170, 0.98684, -0.07279);
    }
    
    if (time >= 31.73302 && time < 31.76635) {
        cam_pos = vec3(3.74971, 1.33127, 1.94776);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.76635 && time < 31.79968) {
        cam_pos = vec3(3.72918, 1.33965, 1.93674);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.79968 && time < 31.83302) {
        cam_pos = vec3(3.70864, 1.34802, 1.92572);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.83302 && time < 31.86635) {
        cam_pos = vec3(3.68811, 1.35640, 1.91471);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.86635 && time < 31.89968) {
        cam_pos = vec3(3.66758, 1.36478, 1.90369);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.89968 && time < 31.93301) {
        cam_pos = vec3(3.64705, 1.37316, 1.89268);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.93301 && time < 31.96635) {
        cam_pos = vec3(3.62651, 1.38154, 1.88166);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.96635 && time < 31.99968) {
        cam_pos = vec3(3.60598, 1.38991, 1.87065);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 31.99968 && time < 32.03301) {
        cam_pos = vec3(3.58545, 1.39829, 1.85963);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.03301 && time < 32.06635) {
        cam_pos = vec3(3.56492, 1.40667, 1.84861);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.06635 && time < 32.09968) {
        cam_pos = vec3(3.54438, 1.41505, 1.83760);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.09968 && time < 32.13301) {
        cam_pos = vec3(3.52385, 1.42342, 1.82658);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.13301 && time < 32.16635) {
        cam_pos = vec3(3.50332, 1.43180, 1.81557);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.16635 && time < 32.19968) {
        cam_pos = vec3(3.48279, 1.44018, 1.80455);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.19968 && time < 32.23301) {
        cam_pos = vec3(3.46225, 1.44856, 1.79354);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.23301 && time < 32.26634) {
        cam_pos = vec3(3.44172, 1.45694, 1.78252);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.26634 && time < 32.29968) {
        cam_pos = vec3(3.42119, 1.46531, 1.77151);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.29968 && time < 32.33301) {
        cam_pos = vec3(3.40065, 1.47369, 1.76049);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.33301 && time < 32.36634) {
        cam_pos = vec3(3.38012, 1.48207, 1.74947);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.36634 && time < 32.39968) {
        cam_pos = vec3(3.35959, 1.49045, 1.73846);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.39968 && time < 32.43301) {
        cam_pos = vec3(3.33906, 1.49882, 1.72744);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.43301 && time < 32.46634) {
        cam_pos = vec3(3.31852, 1.50720, 1.71643);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.46634 && time < 32.49968) {
        cam_pos = vec3(3.29799, 1.51558, 1.70541);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.49968 && time < 32.53301) {
        cam_pos = vec3(3.27746, 1.52396, 1.69440);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.53301 && time < 32.56634) {
        cam_pos = vec3(3.25693, 1.53234, 1.68338);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.56634 && time < 32.59967) {
        cam_pos = vec3(3.23639, 1.54071, 1.67236);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.59967 && time < 32.63301) {
        cam_pos = vec3(3.21586, 1.54909, 1.66135);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.63301 && time < 32.66634) {
        cam_pos = vec3(3.19533, 1.55747, 1.65033);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.66634 && time < 32.69967) {
        cam_pos = vec3(3.17480, 1.56585, 1.63932);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.69967 && time < 32.73301) {
        cam_pos = vec3(3.15426, 1.57422, 1.62830);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.73301 && time < 32.76634) {
        cam_pos = vec3(3.13373, 1.58260, 1.61729);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.76634 && time < 32.79967) {
        cam_pos = vec3(3.11320, 1.59098, 1.60627);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.79967 && time < 32.83301) {
        cam_pos = vec3(3.09267, 1.59936, 1.59525);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.83301 && time < 32.86634) {
        cam_pos = vec3(3.07213, 1.60774, 1.58424);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.86634 && time < 32.89967) {
        cam_pos = vec3(3.05160, 1.61611, 1.57322);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.89967 && time < 32.93300) {
        cam_pos = vec3(3.03107, 1.62449, 1.56221);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.93300 && time < 32.96634) {
        cam_pos = vec3(3.01054, 1.63287, 1.55119);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.96634 && time < 32.99967) {
        cam_pos = vec3(2.99000, 1.64125, 1.54018);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 32.99967 && time < 33.03300) {
        cam_pos = vec3(2.96947, 1.64962, 1.52916);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.03300 && time < 33.06634) {
        cam_pos = vec3(2.94894, 1.65800, 1.51815);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.06634 && time < 33.09967) {
        cam_pos = vec3(2.92841, 1.66638, 1.50713);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.09967 && time < 33.13300) {
        cam_pos = vec3(2.90787, 1.67476, 1.49611);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.13300 && time < 33.16634) {
        cam_pos = vec3(2.88734, 1.68314, 1.48510);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.16634 && time < 33.19967) {
        cam_pos = vec3(2.86681, 1.69151, 1.47408);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.19967 && time < 33.23300) {
        cam_pos = vec3(2.84627, 1.69989, 1.46307);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.23300 && time < 33.26633) {
        cam_pos = vec3(2.82574, 1.70827, 1.45205);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.26633 && time < 33.29967) {
        cam_pos = vec3(2.80521, 1.71665, 1.44104);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.29967 && time < 33.33300) {
        cam_pos = vec3(2.78468, 1.72502, 1.43002);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.33300 && time < 33.36633) {
        cam_pos = vec3(2.76414, 1.73340, 1.41900);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.36633 && time < 33.39967) {
        cam_pos = vec3(2.74361, 1.74178, 1.40799);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.39967 && time < 33.43300) {
        cam_pos = vec3(2.72308, 1.75016, 1.39697);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.43300 && time < 33.46633) {
        cam_pos = vec3(2.70255, 1.75854, 1.38596);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.46633 && time < 33.49967) {
        cam_pos = vec3(2.68201, 1.76691, 1.37494);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.49967 && time < 33.53300) {
        cam_pos = vec3(2.66148, 1.77529, 1.36393);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.53300 && time < 33.56633) {
        cam_pos = vec3(2.64095, 1.78367, 1.35291);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.56633 && time < 33.59966) {
        cam_pos = vec3(2.62042, 1.79205, 1.34190);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.59966 && time < 33.63300) {
        cam_pos = vec3(2.59988, 1.80042, 1.33088);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.63300 && time < 33.66633) {
        cam_pos = vec3(2.57935, 1.80880, 1.31986);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.66633 && time < 33.69966) {
        cam_pos = vec3(2.55882, 1.81718, 1.30885);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.69966 && time < 33.73300) {
        cam_pos = vec3(2.53829, 1.82556, 1.29783);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.73300 && time < 33.76633) {
        cam_pos = vec3(2.51775, 1.83394, 1.28682);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.76633 && time < 33.79966) {
        cam_pos = vec3(2.49722, 1.84231, 1.27580);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.79966 && time < 33.83300) {
        cam_pos = vec3(2.47669, 1.85069, 1.26479);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.83300 && time < 33.86633) {
        cam_pos = vec3(2.45616, 1.85907, 1.25377);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.86633 && time < 33.89966) {
        cam_pos = vec3(2.43562, 1.86745, 1.24275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.89966 && time < 33.93299) {
        cam_pos = vec3(2.41509, 1.87582, 1.23174);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.93299 && time < 33.96633) {
        cam_pos = vec3(2.39456, 1.88420, 1.22072);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.96633 && time < 33.99966) {
        cam_pos = vec3(2.37403, 1.89258, 1.20971);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 33.99966 && time < 34.03299) {
        cam_pos = vec3(2.35349, 1.90096, 1.19869);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.03299 && time < 34.06633) {
        cam_pos = vec3(2.33296, 1.90934, 1.18768);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.06633 && time < 34.09966) {
        cam_pos = vec3(2.31243, 1.91771, 1.17666);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.09966 && time < 34.13299) {
        cam_pos = vec3(2.29189, 1.92609, 1.16564);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.13299 && time < 34.16633) {
        cam_pos = vec3(2.27136, 1.93447, 1.15463);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.16633 && time < 34.19966) {
        cam_pos = vec3(2.25083, 1.94285, 1.14361);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
    }
    
    if (time >= 34.19966 && time < 34.23299) {
        cam_pos = vec3(0.75697, 2.41493, 5.13841);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00024, 0.99908, 0.03882);
    }
    
    if (time >= 34.23299 && time < 34.26632) {
        cam_pos = vec3(0.73052, 2.45845, 5.04032);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00212, 0.99876, 0.04970);
    }
    
    if (time >= 34.26632 && time < 34.29966) {
        cam_pos = vec3(0.71686, 2.50329, 4.86397);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00261, 0.99807, 0.06199);
    }
    
    if (time >= 34.29966 && time < 34.33299) {
        cam_pos = vec3(0.70221, 2.54723, 4.67112);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00312, 0.99715, 0.07538);
    }
    
    if (time >= 34.33299 && time < 34.36632) {
        cam_pos = vec3(0.68746, 2.58690, 4.47293);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00362, 0.99602, 0.08909);
    }
    
    if (time >= 34.36632 && time < 34.39966) {
        cam_pos = vec3(0.67310, 2.62086, 4.27608);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00410, 0.99471, 0.10266);
    }
    
    if (time >= 34.39966 && time < 34.43299) {
        cam_pos = vec3(0.65943, 2.64871, 4.08470);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00454, 0.99326, 0.11582);
    }
    
    if (time >= 34.43299 && time < 34.46632) {
        cam_pos = vec3(0.64659, 2.67065, 3.90138);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00495, 0.99171, 0.12840);
    }
    
    if (time >= 34.46632 && time < 34.49966) {
        cam_pos = vec3(0.63466, 2.68717, 3.72775);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00532, 0.99009, 0.14029);
    }
    
    if (time >= 34.49966 && time < 34.53299) {
        cam_pos = vec3(0.62366, 2.69891, 3.56479);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00565, 0.98845, 0.15144);
    }
    
    if (time >= 34.53299 && time < 34.56632) {
        cam_pos = vec3(0.61360, 2.70658, 3.41309);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00595, 0.98681, 0.16180);
    }
    
    if (time >= 34.56632 && time < 34.59965) {
        cam_pos = vec3(0.60444, 2.71086, 3.27293);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00621, 0.98519, 0.17136);
    }
    
    if (time >= 34.59965 && time < 34.63299) {
        cam_pos = vec3(0.59618, 2.71243, 3.14439);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00644, 0.98362, 0.18013);
    }
    
    if (time >= 34.63299 && time < 34.66632) {
        cam_pos = vec3(0.58876, 2.71188, 3.02745);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00665, 0.98213, 0.18810);
    }
    
    if (time >= 34.66632 && time < 34.69965) {
        cam_pos = vec3(0.58215, 2.70977, 2.92196);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00683, 0.98072, 0.19529);
    }
    
    if (time >= 34.69965 && time < 34.73299) {
        cam_pos = vec3(0.57631, 2.70660, 2.82774);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00698, 0.97942, 0.20171);
    }
    
    if (time >= 34.73299 && time < 34.76632) {
        cam_pos = vec3(0.57120, 2.70277, 2.74454);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00711, 0.97823, 0.20738);
    }
    
    if (time >= 34.76632 && time < 34.79965) {
        cam_pos = vec3(0.56680, 2.69866, 2.67212);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00723, 0.97717, 0.21232);
    }
    
    if (time >= 34.79965 && time < 34.83299) {
        cam_pos = vec3(0.56307, 2.69457, 2.61020);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00732, 0.97625, 0.21654);
    }
    
    if (time >= 34.83299 && time < 34.86632) {
        cam_pos = vec3(0.55997, 2.69074, 2.55852);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00740, 0.97546, 0.22006);
    }
    
    if (time >= 34.86632 && time < 34.89965) {
        cam_pos = vec3(0.55748, 2.68738, 2.51679);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00746, 0.97481, 0.22290);
    }
    
    if (time >= 34.89965 && time < 34.93298) {
        cam_pos = vec3(0.55558, 2.68464, 2.48475);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00751, 0.97431, 0.22509);
    }
    
    if (time >= 34.93298 && time < 34.96632) {
        cam_pos = vec3(0.55424, 2.68261, 2.46215);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00754, 0.97395, 0.22663);
    }
    
    if (time >= 34.96632 && time < 34.99965) {
        cam_pos = vec3(0.55345, 2.68138, 2.44872);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00756, 0.97374, 0.22754);
    }
    
    if (time >= 34.99965 && time < 35.03298) {
        cam_pos = vec3(0.55319, 2.68096, 2.44423);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00756, 0.97367, 0.22785);
    }
    
    if (time >= 35.03298 && time < 35.06632) {
        cam_pos = vec3(3.69813, 0.96564, 3.97664);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11132, 0.98861, -0.09484);
    }
    
    if (time >= 35.06632 && time < 35.09965) {
        cam_pos = vec3(3.73937, 0.94744, 3.98386);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11281, 0.98877, -0.09801);
    }
    
    if (time >= 35.09965 && time < 35.13298) {
        cam_pos = vec3(3.74730, 0.94744, 3.97471);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11304, 0.98877, -0.09775);
    }
    
    if (time >= 35.13298 && time < 35.16632) {
        cam_pos = vec3(3.75521, 0.94744, 3.96554);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11327, 0.98877, -0.09748);
    }
    
    if (time >= 35.16632 && time < 35.19965) {
        cam_pos = vec3(3.76310, 0.94744, 3.95635);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11349, 0.98877, -0.09722);
    }
    
    if (time >= 35.19965 && time < 35.23298) {
        cam_pos = vec3(3.77097, 0.94744, 3.94714);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11372, 0.98877, -0.09695);
    }
    
    if (time >= 35.23298 && time < 35.26631) {
        cam_pos = vec3(3.77882, 0.94744, 3.93791);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11395, 0.98877, -0.09669);
    }
    
    if (time >= 35.26631 && time < 35.29965) {
        cam_pos = vec3(3.78665, 0.94744, 3.92867);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11417, 0.98877, -0.09642);
    }
    
    if (time >= 35.29965 && time < 35.33298) {
        cam_pos = vec3(3.79445, 0.94744, 3.91940);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11440, 0.98877, -0.09615);
    }
    
    if (time >= 35.33298 && time < 35.36631) {
        cam_pos = vec3(3.80223, 0.94744, 3.91012);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11462, 0.98877, -0.09589);
    }
    
    if (time >= 35.36631 && time < 35.39965) {
        cam_pos = vec3(3.81000, 0.94744, 3.90082);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11484, 0.98877, -0.09562);
    }
    
    if (time >= 35.39965 && time < 35.43298) {
        cam_pos = vec3(3.81773, 0.94744, 3.89151);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11507, 0.98877, -0.09535);
    }
    
    if (time >= 35.43298 && time < 35.46631) {
        cam_pos = vec3(3.82545, 0.94744, 3.88217);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11529, 0.98877, -0.09508);
    }
    
    if (time >= 35.46631 && time < 35.49965) {
        cam_pos = vec3(3.83315, 0.94744, 3.87282);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11551, 0.98877, -0.09481);
    }
    
    if (time >= 35.49965 && time < 35.53298) {
        cam_pos = vec3(3.84082, 0.94744, 3.86344);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11573, 0.98877, -0.09454);
    }
    
    if (time >= 35.53298 && time < 35.56631) {
        cam_pos = vec3(3.84847, 0.94744, 3.85406);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11595, 0.98877, -0.09427);
    }
    
    if (time >= 35.56631 && time < 35.59964) {
        cam_pos = vec3(3.85610, 0.94744, 3.84465);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11617, 0.98877, -0.09400);
    }
    
    if (time >= 35.59964 && time < 35.63298) {
        cam_pos = vec3(3.86371, 0.94744, 3.83522);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11639, 0.98877, -0.09373);
    }
    
    if (time >= 35.63298 && time < 35.66631) {
        cam_pos = vec3(3.87130, 0.94744, 3.82578);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11661, 0.98877, -0.09346);
    }
    
    if (time >= 35.66631 && time < 35.69964) {
        cam_pos = vec3(3.87886, 0.94744, 3.81632);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11683, 0.98877, -0.09319);
    }
    
    if (time >= 35.69964 && time < 35.73298) {
        cam_pos = vec3(3.88640, 0.94744, 3.80684);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11704, 0.98877, -0.09291);
    }
    
    if (time >= 35.73298 && time < 35.76631) {
        cam_pos = vec3(3.89393, 0.94744, 3.79735);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11726, 0.98877, -0.09264);
    }
    
    if (time >= 35.76631 && time < 35.79964) {
        cam_pos = vec3(3.90142, 0.94744, 3.78783);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11747, 0.98877, -0.09237);
    }
    
    if (time >= 35.79964 && time < 35.83298) {
        cam_pos = vec3(3.90890, 0.94744, 3.77830);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11769, 0.98877, -0.09209);
    }
    
    if (time >= 35.83298 && time < 35.86631) {
        cam_pos = vec3(3.91635, 0.94744, 3.76876);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11790, 0.98877, -0.09182);
    }
    
    if (time >= 35.86631 && time < 35.89964) {
        cam_pos = vec3(3.92378, 0.94744, 3.75919);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11812, 0.98877, -0.09154);
    }
    
    if (time >= 35.89964 && time < 35.93297) {
        cam_pos = vec3(3.93119, 0.94744, 3.74961);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11833, 0.98877, -0.09127);
    }
    
    if (time >= 35.93297 && time < 35.96631) {
        cam_pos = vec3(3.93858, 0.94744, 3.74001);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11854, 0.98877, -0.09099);
    }
    
    if (time >= 35.96631 && time < 35.99964) {
        cam_pos = vec3(3.94594, 0.94744, 3.73039);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11876, 0.98877, -0.09071);
    }
    
    if (time >= 35.99964 && time < 36.03297) {
        cam_pos = vec3(3.95328, 0.94744, 3.72076);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11897, 0.98877, -0.09043);
    }
    
    if (time >= 36.03297 && time < 36.06631) {
        cam_pos = vec3(3.96060, 0.94744, 3.71110);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11918, 0.98877, -0.09016);
    }
    
    if (time >= 36.06631 && time < 36.09964) {
        cam_pos = vec3(1.57752, 0.69410, 4.14448);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01144, 0.99943, 0.02583);
    }
    
    if (time >= 36.09964 && time < 36.13297) {
        cam_pos = vec3(1.55063, 0.69476, 4.14861);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01233, 0.99955, 0.02723);
    }
    
    if (time >= 36.13297 && time < 36.16631) {
        cam_pos = vec3(1.54975, 0.69834, 4.14798);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01177, 0.99956, 0.02737);
    }
    
    if (time >= 36.16631 && time < 36.19964) {
        cam_pos = vec3(1.54884, 0.70203, 4.14733);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01119, 0.99956, 0.02751);
    }
    
    if (time >= 36.19964 && time < 36.23297) {
        cam_pos = vec3(1.54790, 0.70585, 4.14666);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.01060, 0.99956, 0.02765);
    }
    
    if (time >= 36.23297 && time < 36.26630) {
        cam_pos = vec3(1.54693, 0.70979, 4.14596);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00998, 0.99956, 0.02780);
    }
    
    if (time >= 36.26630 && time < 36.29964) {
        cam_pos = vec3(1.54592, 0.71385, 4.14525);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00935, 0.99957, 0.02795);
    }
    
    if (time >= 36.29964 && time < 36.33297) {
        cam_pos = vec3(1.54488, 0.71805, 4.14451);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00869, 0.99957, 0.02811);
    }
    
    if (time >= 36.33297 && time < 36.36630) {
        cam_pos = vec3(1.54381, 0.72238, 4.14374);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00801, 0.99957, 0.02828);
    }
    
    if (time >= 36.36630 && time < 36.39964) {
        cam_pos = vec3(1.54270, 0.72684, 4.14296);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00732, 0.99957, 0.02844);
    }
    
    if (time >= 36.39964 && time < 36.43297) {
        cam_pos = vec3(1.54156, 0.73144, 4.14214);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00660, 0.99957, 0.02861);
    }
    
    if (time >= 36.43297 && time < 36.46630) {
        cam_pos = vec3(1.54038, 0.73619, 4.14131);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00586, 0.99957, 0.02879);
    }
    
    if (time >= 36.46630 && time < 36.49964) {
        cam_pos = vec3(1.53917, 0.74108, 4.14044);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00509, 0.99957, 0.02897);
    }
    
    if (time >= 36.49964 && time < 36.53297) {
        cam_pos = vec3(1.53791, 0.74612, 4.13955);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00430, 0.99957, 0.02916);
    }
    
    if (time >= 36.53297 && time < 36.56630) {
        cam_pos = vec3(1.53662, 0.75132, 4.13863);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00349, 0.99956, 0.02935);
    }
    
    if (time >= 36.56630 && time < 36.59963) {
        cam_pos = vec3(1.53528, 0.75668, 4.13769);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00265, 0.99956, 0.02955);
    }
    
    if (time >= 36.59963 && time < 36.63297) {
        cam_pos = vec3(1.53390, 0.76219, 4.13671);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00179, 0.99956, 0.02975);
    }
    
    if (time >= 36.63297 && time < 36.66630) {
        cam_pos = vec3(1.53248, 0.76788, 4.13570);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(0.00090, 0.99955, 0.02996);
    }
    
    if (time >= 36.66630 && time < 36.69963) {
        cam_pos = vec3(1.53102, 0.77374, 4.13467);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00002, 0.99954, 0.03017);
    }
    
    if (time >= 36.69963 && time < 36.73297) {
        cam_pos = vec3(1.52950, 0.77978, 4.13360);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00097, 0.99954, 0.03039);
    }
    
    if (time >= 36.73297 && time < 36.76630) {
        cam_pos = vec3(1.52794, 0.78600, 4.13250);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00194, 0.99953, 0.03061);
    }
    
    if (time >= 36.76630 && time < 36.79963) {
        cam_pos = vec3(1.52633, 0.79240, 4.13136);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00294, 0.99952, 0.03084);
    }
    
    if (time >= 36.79963 && time < 36.83297) {
        cam_pos = vec3(1.52467, 0.79900, 4.13019);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00398, 0.99951, 0.03108);
    }
    
    if (time >= 36.83297 && time < 36.86630) {
        cam_pos = vec3(1.52295, 0.80580, 4.12899);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00505, 0.99950, 0.03132);
    }
    
    if (time >= 36.86630 && time < 36.89963) {
        cam_pos = vec3(1.52119, 0.81281, 4.12775);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00614, 0.99948, 0.03157);
    }
    
    if (time >= 36.89963 && time < 36.93296) {
        cam_pos = vec3(1.51936, 0.82003, 4.12647);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00728, 0.99947, 0.03182);
    }
    
    if (time >= 36.93296 && time < 36.96630) {
        cam_pos = vec3(1.51748, 0.82746, 4.12514);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00844, 0.99945, 0.03208);
    }
    
    if (time >= 36.96630 && time < 36.99963) {
        cam_pos = vec3(1.51554, 0.83512, 4.12379);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.00965, 0.99943, 0.03234);
    }
    
    if (time >= 36.99963 && time < 37.03296) {
        cam_pos = vec3(1.51353, 0.84301, 4.12238);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01088, 0.99941, 0.03262);
    }
    
    if (time >= 37.03296 && time < 37.06630) {
        cam_pos = vec3(1.51146, 0.85115, 4.12094);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01216, 0.99938, 0.03289);
    }
    
    if (time >= 37.06630 && time < 37.09963) {
        cam_pos = vec3(1.50932, 0.85953, 4.11945);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01348, 0.99936, 0.03318);
    }
    
    if (time >= 37.09963 && time < 37.13296) {
        cam_pos = vec3(1.50712, 0.86816, 4.11791);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01484, 0.99933, 0.03347);
    }
    
    if (time >= 37.13296 && time < 37.16630) {
        cam_pos = vec3(1.50484, 0.87707, 4.11632);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01623, 0.99930, 0.03377);
    }
    
    if (time >= 37.16630 && time < 37.19963) {
        cam_pos = vec3(1.50249, 0.88624, 4.11469);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01768, 0.99926, 0.03408);
    }
    
    if (time >= 37.19963 && time < 37.23296) {
        cam_pos = vec3(1.50006, 0.89570, 4.11300);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.01917, 0.99922, 0.03439);
    }
    
    if (time >= 37.23296 && time < 37.26629) {
        cam_pos = vec3(1.49755, 0.90545, 4.11126);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02070, 0.99918, 0.03471);
    }
    
    if (time >= 37.26629 && time < 37.29963) {
        cam_pos = vec3(1.49495, 0.91551, 4.10946);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02228, 0.99914, 0.03504);
    }
    
    if (time >= 37.29963 && time < 37.33296) {
        cam_pos = vec3(1.49228, 0.92588, 4.10761);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02392, 0.99909, 0.03538);
    }
    
    if (time >= 37.33296 && time < 37.36629) {
        cam_pos = vec3(1.48950, 0.93657, 4.10570);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02560, 0.99903, 0.03572);
    }
    
    if (time >= 37.36629 && time < 37.39963) {
        cam_pos = vec3(1.48664, 0.94760, 4.10372);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02734, 0.99898, 0.03607);
    }
    
    if (time >= 37.39963 && time < 37.43296) {
        cam_pos = vec3(1.48368, 0.95899, 4.10169);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.02913, 0.99891, 0.03643);
    }
    
    if (time >= 37.43296 && time < 37.46629) {
        cam_pos = vec3(1.48061, 0.97073, 4.09958);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.03098, 0.99884, 0.03679);
    }
    
    if (time >= 37.46629 && time < 37.49963) {
        cam_pos = vec3(1.47744, 0.98285, 4.09741);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.03290, 0.99877, 0.03717);
    }
    
    if (time >= 37.49963 && time < 37.53296) {
        cam_pos = vec3(1.47417, 0.99536, 4.09516);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.03487, 0.99869, 0.03755);
    }
    
    if (time >= 37.53296 && time < 37.56629) {
        cam_pos = vec3(1.47077, 1.00827, 4.09284);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.03691, 0.99860, 0.03794);
    }
    
    if (time >= 37.56629 && time < 37.59962) {
        cam_pos = vec3(1.46726, 1.02159, 4.09044);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.03901, 0.99850, 0.03834);
    }
    
    if (time >= 37.59962 && time < 37.63296) {
        cam_pos = vec3(1.46362, 1.03535, 4.08796);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.04118, 0.99840, 0.03874);
    }
    
    if (time >= 37.63296 && time < 37.66629) {
        cam_pos = vec3(1.45985, 1.04956, 4.08540);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.04343, 0.99829, 0.03916);
    }
    
    if (time >= 37.66629 && time < 37.69962) {
        cam_pos = vec3(1.45595, 1.06424, 4.08275);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.04575, 0.99817, 0.03958);
    }
    
    if (time >= 37.69962 && time < 37.73296) {
        cam_pos = vec3(1.45191, 1.07939, 4.08001);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.04815, 0.99804, 0.04001);
    }
    
    if (time >= 37.73296 && time < 37.76629) {
        cam_pos = vec3(1.44773, 1.09504, 4.07718);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.05062, 0.99790, 0.04045);
    }
    
    if (time >= 37.76629 && time < 37.79962) {
        cam_pos = vec3(1.44339, 1.11120, 4.07425);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.05318, 0.99775, 0.04089);
    }
    
    if (time >= 37.79962 && time < 37.83296) {
        cam_pos = vec3(1.43889, 1.12789, 4.07123);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.05582, 0.99758, 0.04134);
    }
    
    if (time >= 37.83296 && time < 37.86629) {
        cam_pos = vec3(1.43424, 1.14512, 4.06810);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.05855, 0.99741, 0.04180);
    }
    
    if (time >= 37.86629 && time < 37.89962) {
        cam_pos = vec3(1.42942, 1.16291, 4.06486);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.06137, 0.99722, 0.04226);
    }
    
    if (time >= 37.89962 && time < 37.93295) {
        cam_pos = vec3(1.42442, 1.18126, 4.06152);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.06428, 0.99702, 0.04273);
    }
    
    if (time >= 37.93295 && time < 37.96629) {
        cam_pos = vec3(1.41925, 1.20020, 4.05806);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.06728, 0.99680, 0.04321);
    }
    
    if (time >= 37.96629 && time < 37.99962) {
        cam_pos = vec3(1.41390, 1.21973, 4.05449);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.07037, 0.99656, 0.04369);
    }
    
    if (time >= 37.99962 && time < 38.03295) {
        cam_pos = vec3(1.40836, 1.23985, 4.05081);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.07357, 0.99631, 0.04417);
    }
    
    if (time >= 38.03295 && time < 38.06629) {
        cam_pos = vec3(1.40263, 1.26058, 4.04701);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.07686, 0.99604, 0.04466);
    }
    
    if (time >= 38.06629 && time < 38.09962) {
        cam_pos = vec3(1.39672, 1.28190, 4.04309);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.08024, 0.99575, 0.04515);
    }
    
    if (time >= 38.09962 && time < 38.13295) {
        cam_pos = vec3(1.39061, 1.30381, 4.03906);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.08372, 0.99544, 0.04564);
    }
    
    if (time >= 38.13295 && time < 38.16629) {
        cam_pos = vec3(1.38432, 1.32631, 4.03491);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.08729, 0.99511, 0.04613);
    }
    
    if (time >= 38.16629 && time < 38.19962) {
        cam_pos = vec3(1.37785, 1.34935, 4.03065);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.09095, 0.99476, 0.04662);
    }
    
    if (time >= 38.19962 && time < 38.23295) {
        cam_pos = vec3(1.37120, 1.37293, 4.02629);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.09470, 0.99439, 0.04710);
    }
    
    if (time >= 38.23295 && time < 38.26628) {
        cam_pos = vec3(1.36437, 1.39701, 4.02182);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.09852, 0.99400, 0.04758);
    }
    
    if (time >= 38.26628 && time < 38.29962) {
        cam_pos = vec3(1.35739, 1.42153, 4.01726);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.10242, 0.99358, 0.04805);
    }
    
    if (time >= 38.29962 && time < 38.33295) {
        cam_pos = vec3(1.35026, 1.44644, 4.01262);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.10638, 0.99314, 0.04851);
    }
    
    if (time >= 38.33295 && time < 38.36628) {
        cam_pos = vec3(1.34300, 1.47169, 4.00790);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11039, 0.99268, 0.04896);
    }
    
    if (time >= 38.36628 && time < 38.39962) {
        cam_pos = vec3(1.33564, 1.49718, 4.00312);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11444, 0.99220, 0.04939);
    }
    
    if (time >= 38.39962 && time < 38.43295) {
        cam_pos = vec3(1.32820, 1.52285, 3.99830);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.11852, 0.99170, 0.04981);
    }
    
    if (time >= 38.43295 && time < 38.46628) {
        cam_pos = vec3(1.32069, 1.54861, 3.99345);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.12261, 0.99118, 0.05022);
    }
    
    if (time >= 38.46628 && time < 38.49962) {
        cam_pos = vec3(1.31315, 1.57436, 3.98859);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.12671, 0.99065, 0.05060);
    }
    
    if (time >= 38.49962 && time < 38.53295) {
        cam_pos = vec3(1.30561, 1.60000, 3.98374);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.13078, 0.99010, 0.05097);
    }
    
    if (time >= 38.53295 && time < 38.56628) {
        cam_pos = vec3(1.29809, 1.62546, 3.97891);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.13482, 0.98954, 0.05131);
    }
    
    if (time >= 38.56628 && time < 38.59961) {
        cam_pos = vec3(1.29062, 1.65063, 3.97412);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.13882, 0.98897, 0.05164);
    }
    
    if (time >= 38.59961 && time < 38.63295) {
        cam_pos = vec3(1.28323, 1.67543, 3.96939);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14276, 0.98839, 0.05194);
    }
    
    if (time >= 38.63295 && time < 38.66628) {
        cam_pos = vec3(1.27594, 1.69979, 3.96474);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.14663, 0.98781, 0.05222);
    }
    
    if (time >= 38.66628 && time < 38.69961) {
        cam_pos = vec3(1.26877, 1.72363, 3.96017);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.15041, 0.98723, 0.05248);
    }
    
    if (time >= 38.69961 && time < 38.73295) {
        cam_pos = vec3(1.26175, 1.74689, 3.95570);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.15410, 0.98665, 0.05271);
    }
    
    if (time >= 38.73295 && time < 38.76628) {
        cam_pos = vec3(1.25489, 1.76954, 3.95133);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.15770, 0.98607, 0.05293);
    }
    
    if (time >= 38.76628 && time < 38.79961) {
        cam_pos = vec3(1.24820, 1.79152, 3.94709);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.16118, 0.98549, 0.05312);
    }
    
    if (time >= 38.79961 && time < 38.83295) {
        cam_pos = vec3(1.24170, 1.81282, 3.94296);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.16456, 0.98493, 0.05330);
    }
    
    if (time >= 38.83295 && time < 38.86628) {
        cam_pos = vec3(1.23540, 1.83341, 3.93897);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.16782, 0.98437, 0.05346);
    }
    
    if (time >= 38.86628 && time < 38.89961) {
        cam_pos = vec3(1.22929, 1.85329, 3.93511);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.17097, 0.98382, 0.05360);
    }
    
    if (time >= 38.89961 && time < 38.93294) {
        cam_pos = vec3(1.22338, 1.87244, 3.93137);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.17400, 0.98328, 0.05373);
    }
    
    if (time >= 38.93294 && time < 38.96628) {
        cam_pos = vec3(1.21769, 1.89087, 3.92778);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.17692, 0.98275, 0.05384);
    }
    
    if (time >= 38.96628 && time < 38.99961) {
        cam_pos = vec3(1.21219, 1.90859, 3.92431);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.17972, 0.98224, 0.05394);
    }
    
    if (time >= 38.99961 && time < 39.03294) {
        cam_pos = vec3(1.20690, 1.92560, 3.92097);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.18241, 0.98174, 0.05403);
    }
    
    if (time >= 39.03294 && time < 39.06628) {
        cam_pos = vec3(1.20180, 1.94194, 3.91776);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.18499, 0.98125, 0.05411);
    }
    
    if (time >= 39.06628 && time < 39.09961) {
        cam_pos = vec3(1.19691, 1.95760, 3.91468);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.18747, 0.98078, 0.05417);
    }
    
    if (time >= 39.09961 && time < 39.13294) {
        cam_pos = vec3(1.19220, 1.97261, 3.91172);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.18984, 0.98032, 0.05423);
    }
    
    if (time >= 39.13294 && time < 39.16628) {
        cam_pos = vec3(1.18768, 1.98700, 3.90888);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.19211, 0.97987, 0.05428);
    }
    
    if (time >= 39.16628 && time < 39.19961) {
        cam_pos = vec3(1.18335, 2.00077, 3.90616);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.19428, 0.97944, 0.05432);
    }
    
    if (time >= 39.19961 && time < 39.23294) {
        cam_pos = vec3(1.17918, 2.01396, 3.90355);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.19636, 0.97902, 0.05435);
    }
    
    if (time >= 39.23294 && time < 39.26627) {
        cam_pos = vec3(1.17520, 2.02658, 3.90104);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.19835, 0.97862, 0.05438);
    }
    
    if (time >= 39.26627 && time < 39.29961) {
        cam_pos = vec3(1.17137, 2.03865, 3.89864);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.20025, 0.97823, 0.05441);
    }
    
    if (time >= 39.29961 && time < 39.33294) {
        cam_pos = vec3(1.16770, 2.05020, 3.89634);
        cam_lookat = vec3(0.0, 2.0, 0.0);
        cam_up_vec = vec3(-0.20207, 0.97786, 0.05442);
    }
        vec3 cam_z_axis = normalize( cam_pos - cam_lookat );
    vec3 cam_x_axis = normalize( cross(cam_up_vec, cam_z_axis) );
    vec3 cam_y_axis = normalize( cross(cam_z_axis, cam_x_axis) );
    switch(idx) {
        case 0: return vec4( cam_pos, 1.0 ); // Camera position.
        case 1: return vec4( cam_x_axis, 0.0 ); // Camera x-axis.
        case 2: return vec4( cam_y_axis, 0.0 ); // Camera y-axis.
        case 3: return vec4( cam_z_axis, 0.0 ); // Camera z-axis.
    }
}


vec4 light( in int idx )
{
    switch(idx) {
        // Light 0.
        case 0: return vec4( 4.0, 8.0, -3.0, 0.0 ); // position
        case 1: return vec4( 0.1, 0.1, 0.1, 0.0 );  // I_a
        case 2: return vec4( 1.0, 1.0, 1.0, 0.0 );  // I_source

        // Light 1.
        case 3: return vec4( -4.0, 8.0, 0.0, 0.0 ); // position
        case 4: return vec4( 0.1, 0.1, 0.1, 0.0 );  // I_a
        case 5: return vec4( 1.0, 1.0, 1.0, 0.0 );  // I_source
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
        case  5: return 0.2 * vec4( 0.8, 0.7, 0.1, 0.0 ); // k_a
        case  6: return 2.0 * vec4( 0.8, 0.7, 0.1, 0.0 ); // k_r
        case  7: return vec4( 0.8, 0.7, 0.1, 64.0 );      // k_rg, n

        // Green plastic material.(2)
        case  8: return 1.0 * vec4( 0.0, 0.8, 0.0, 0.0 ); // k_d
        case  9: return 0.2 * vec4( 0.0, 0.8, 0.0, 0.0 ); // k_a
        case 10: return vec4( 1.0, 1.0, 1.0, 0.0 );       // k_r
        case 11: return vec4( 0.5, 0.5, 0.5, 128.0 );     // k_rg, n

        // Mirror.(3)
        case 12: return vec4( 0.0, 0.2, 0.2, 0.0 ); // k_d
        case 13: return vec4( 0.0, 0.08, 0.08, 0.0 ); // k_a
        case 14: return vec4( 0.0, 0.6, 0.6, 0.0 ); // k_r
        case 15: return vec4( 0.0, 0.12, 0.12, 64.0 ); // k_rg, n

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
        case 29: return vec4( 0.11, 0.06, 0.09, 0.0 ); // k_a
        case 30: return vec4( 0.33, 0.33, 0.52, 0.0 ); // k_r
        case 31: return vec4( 0.132, 0.132, 0.208, 128.0 ); // k_rg, n

        // Black material.(8)
        case 32: return vec4( 0.0, 0.0, 0.0, 0.0 ); // k_d
        case 33: return vec4( 0.11, 0.06, 0.09, 0.0 ); // k_a
        case 34: return vec4( 0.33, 0.33, 0.52, 0.0 ); // k_r
        case 35: return vec4( 0.132, 0.132, 0.208, 128.0 ); // k_rg, n

        // Blue material.(9)
        case 36: return 1.0 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_d
        case 37: return 0.2 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_a
        case 38: return 2.0 * vec4( 0.1, 0.4, 1.0, 0.0 ); // k_r
        case 39: return vec4( 0.1, 0.4, 1.0, 64.0 );      // k_rg, n

        // Purple material.(10)
        case 40: return 1.0 * vec4( 0.6, 0.0, 0.8, 0.0 ); // k_d
        case 41: return 0.2 * vec4( 0.6, 0.0, 0.8, 0.0 ); // k_a
        case 42: return 2.0 * vec4( 0.5, 0.0, 0.7, 0.0 ); // k_r
        case 43: return vec4( 0.5, 0.0, 0.7, 64.0 );      // k_rg, n

        // Red material.(11)
        case 44: return 1.0 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_d
        case 45: return 0.2 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_a
        case 46: return 2.0 * vec4( 1.0, 0.1, 0.1, 0.0 ); // k_r
        case 47: return vec4( 1.0, 0.1, 0.1, 64.0 );      // k_rg, n

        // Orange material.(12)
        case 48: return 1.0 * vec4( 1.0, 0.5, 0.1, 0.0 ); // k_d
        case 49: return 0.2 * vec4( 1.0, 0.5, 0.1, 0.0 ); // k_a
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
        case 0: return vec4( 0.1, 2.32, 0.5, uintBitsToFloat(packHalf2x16(vec2(0.1, 0.1))) ); // center, radius, materialID
        
        case 1:
            // result = getSphere();
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 1)));
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
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 2)));
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
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 4)));
            if (Time < 8.0) return result;
            result = rotationMatrix120 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 4))) );
                return result;
            }
            return result;  
        case 4: 
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 6)));
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
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 7)));
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
            result.w = uintBitsToFloat(packHalf2x16(vec2(0.09, 9)));
            if (Time < 8.0) return result;
            result = rotationMatrix300 * result;
            if (Time > 10.0 + 2.0 * PI){
                newX = mix( result.x,0.1, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                newY = 2.32;
                newZ = mix( result.z,0.5, (Time - 10.0 - 2.0 * PI) / (10.0- 2.0 * PI));
                result = vec4( newX, newY, newZ, uintBitsToFloat(packHalf2x16(vec2(0.09, 10))) );
                return result;
            }
            return result;
    }
}

vec4 triangle( in int idx )
{
    switch(idx) {
        case 0: return vec4(-0.198743, 2.826320, 0.059470, 0.0);
        case 1: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 2: return vec4(-0.186905, 2.532767, 0.265930, 0.0);
        case 3: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 4: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 5: return vec4(-0.198743, 2.826320, 0.059470, 0.0);
        case 6: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 7: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 8: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 9: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 10: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 11: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 12: return vec4(-0.339350, 1.526522, -0.037972, 0.0);
        case 13: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 14: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 15: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 16: return vec4(-0.339350, 1.526522, -0.037972, 0.0);
        case 17: return vec4(-0.459840, 1.710624, 0.127664, 0.0);
        case 18: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 19: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 20: return vec4(-0.459840, 1.710624, 0.127664, 0.0);
        case 21: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 22: return vec4(-0.459840, 1.710624, 0.127664, 0.0);
        case 23: return vec4(-0.367337, 1.627569, 0.370550, 0.0);
        case 24: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 25: return vec4(-0.367337, 1.627569, 0.370550, 0.0);
        case 26: return vec4(-0.090769, 2.249263, 0.577870, 0.0);
        case 27: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 28: return vec4(-0.090769, 2.249263, 0.577870, 0.0);
        case 29: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 30: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 31: return vec4(-0.186905, 2.532767, 0.265930, 0.0);
        case 32: return vec4(-0.382958, 2.468828, 0.144654, 0.0);
        case 33: return vec4(-0.348637, 1.163171, 0.188485, 0.0);
        case 34: return vec4(-0.339350, 1.526522, -0.037972, 0.0);
        case 35: return vec4(-0.294241, 1.085084, 0.220785, 0.0);
        case 36: return vec4(-0.339350, 1.526522, -0.037972, 0.0);
        case 37: return vec4(-0.348637, 1.163171, 0.188485, 0.0);
        case 38: return vec4(-0.459840, 1.710624, 0.127664, 0.0);
        case 39: return vec4(-0.459840, 1.710624, 0.127664, 0.0);
        case 40: return vec4(-0.348637, 1.163171, 0.188485, 0.0);
        case 41: return vec4(-0.367337, 1.627569, 0.370550, 0.0);
        case 42: return vec4(-0.294241, 1.085084, 0.220785, 0.0);
        case 43: return vec4(-0.339350, 1.526522, -0.037972, 0.0);
        case 44: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 45: return vec4(-0.294241, 1.085084, 0.220785, 0.0);
        case 46: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 47: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 48: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 49: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 50: return vec4(-0.112174, 2.183550, 0.235866, 0.0);
        case 51: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 52: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 53: return vec4(-0.112174, 2.183550, 0.235866, 0.0);
        case 54: return vec4(-0.294985, 2.426182, 0.015096, 0.0);
        case 55: return vec4(-0.198743, 2.826320, 0.059470, 0.0);
        case 56: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 57: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 58: return vec4(-0.112174, 2.183550, 0.235866, 0.0);
        case 59: return vec4(-0.135603, 2.326410, 0.330678, 0.0);
        case 60: return vec4(-0.135603, 2.326410, 0.330678, 0.0);
        case 61: return vec4(-0.186905, 2.532767, 0.265930, 0.0);
        case 62: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 63: return vec4(-0.186905, 2.532767, 0.265930, 0.0);
        case 64: return vec4(-0.131967, 2.684810, 0.075591, 0.0);
        case 65: return vec4(-0.198743, 2.826320, 0.059470, 0.0);
        case 66: return vec4(-0.198743, 2.826320, 0.059470, 0.0);
        case 67: return vec4(-0.131967, 2.684810, 0.075591, 0.0);
        case 68: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 69: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 70: return vec4(-0.090769, 2.249263, 0.577870, 0.0);
        case 71: return vec4(-0.367337, 1.627569, 0.370550, 0.0);
        case 72: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 73: return vec4(-0.027793, 2.284572, 0.480639, 0.0);
        case 74: return vec4(-0.090769, 2.249263, 0.577870, 0.0);
        case 75: return vec4(-0.294241, 1.085084, 0.220785, 0.0);
        case 76: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 77: return vec4(-0.348637, 1.163171, 0.188485, 0.0);
        case 78: return vec4(-0.115506, 2.169378, 0.505615, 0.0);
        case 79: return vec4(-0.367337, 1.627569, 0.370550, 0.0);
        case 80: return vec4(-0.348637, 1.163171, 0.188485, 0.0);
        case 81: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 82: return vec4(-0.099666, 2.077896, 0.032954, 0.0);
        case 83: return vec4(-0.112174, 2.183550, 0.235866, 0.0);
        case 84: return vec4(-0.099666, 2.077896, 0.032954, 0.0);
        case 85: return vec4(-0.232687, 1.719723, 0.070112, 0.0);
        case 86: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 87: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 88: return vec4(0.100416, 2.027745, -0.030392, 0.0);
        case 89: return vec4(-0.099666, 2.077896, 0.032954, 0.0);
        case 90: return vec4(0.311920, 2.532766, 0.265931, 0.0);
        case 91: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 92: return vec4(0.328747, 2.819979, 0.075807, 0.0);
        case 93: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 94: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 95: return vec4(0.328747, 2.819979, 0.075807, 0.0);
        case 96: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 97: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 98: return vec4(0.328747, 2.819979, 0.075807, 0.0);
        case 99: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 100: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 101: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 102: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 103: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 104: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 105: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 106: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 107: return vec4(0.464365, 1.526523, -0.037972, 0.0);
        case 108: return vec4(0.492353, 1.627569, 0.370550, 0.0);
        case 109: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 110: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 111: return vec4(0.492353, 1.627569, 0.370550, 0.0);
        case 112: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 113: return vec4(0.215785, 2.249263, 0.577870, 0.0);
        case 114: return vec4(0.215785, 2.249263, 0.577870, 0.0);
        case 115: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 116: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 117: return vec4(0.311920, 2.532766, 0.265931, 0.0);
        case 118: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 119: return vec4(0.507974, 2.468828, 0.144654, 0.0);
        case 120: return vec4(0.464365, 1.526523, -0.037972, 0.0);
        case 121: return vec4(0.473653, 1.163171, 0.188485, 0.0);
        case 122: return vec4(0.419257, 1.085084, 0.220785, 0.0);
        case 123: return vec4(0.473653, 1.163171, 0.188485, 0.0);
        case 124: return vec4(0.464365, 1.526523, -0.037972, 0.0);
        case 125: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 126: return vec4(0.492353, 1.627569, 0.370550, 0.0);
        case 127: return vec4(0.473653, 1.163171, 0.188485, 0.0);
        case 128: return vec4(0.585506, 1.871742, 0.050467, 0.0);
        case 129: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 130: return vec4(0.464365, 1.526523, -0.037972, 0.0);
        case 131: return vec4(0.419257, 1.085084, 0.220785, 0.0);
        case 132: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 133: return vec4(0.419257, 1.085084, 0.220785, 0.0);
        case 134: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 135: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 136: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 137: return vec4(0.237190, 2.183550, 0.235866, 0.0);
        case 138: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 139: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 140: return vec4(0.237190, 2.183550, 0.235866, 0.0);
        case 141: return vec4(0.260618, 2.326410, 0.330678, 0.0);
        case 142: return vec4(0.237190, 2.183550, 0.235866, 0.0);
        case 143: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 144: return vec4(0.311920, 2.532766, 0.265931, 0.0);
        case 145: return vec4(0.260618, 2.326410, 0.330678, 0.0);
        case 146: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 147: return vec4(0.271844, 2.689904, 0.069960, 0.0);
        case 148: return vec4(0.311920, 2.532766, 0.265931, 0.0);
        case 149: return vec4(0.328747, 2.819979, 0.075807, 0.0);
        case 150: return vec4(0.271844, 2.689904, 0.069960, 0.0);
        case 151: return vec4(0.328747, 2.819979, 0.075807, 0.0);
        case 152: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 153: return vec4(0.079396, 2.736915, -0.043969, 0.0);
        case 154: return vec4(-0.131967, 2.684810, 0.075591, 0.0);
        case 155: return vec4(0.271844, 2.689904, 0.069960, 0.0);
        case 156: return vec4(0.215785, 2.249263, 0.577870, 0.0);
        case 157: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 158: return vec4(0.492353, 1.627569, 0.370550, 0.0);
        case 159: return vec4(0.152808, 2.284572, 0.480639, 0.0);
        case 160: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 161: return vec4(0.215785, 2.249263, 0.577870, 0.0);
        case 162: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 163: return vec4(0.419257, 1.085084, 0.220785, 0.0);
        case 164: return vec4(0.473653, 1.163171, 0.188485, 0.0);
        case 165: return vec4(0.473653, 1.163171, 0.188485, 0.0);
        case 166: return vec4(0.492353, 1.627569, 0.370550, 0.0);
        case 167: return vec4(0.240521, 2.169377, 0.505615, 0.0);
        case 168: return vec4(0.100416, 2.027745, -0.030392, 0.0);
        case 169: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 170: return vec4(0.237190, 2.183550, 0.235866, 0.0);
        case 171: return vec4(-0.000884, 1.503323, -0.102178, 0.0);
        case 172: return vec4(0.360413, 1.715360, 0.067056, 0.0);
        case 173: return vec4(0.100416, 2.027745, -0.030392, 0.0);
        case 174: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 175: return vec4(-0.635507, 2.747584, -0.242411, 0.0);
        case 176: return vec4(-0.426697, 2.505812, -0.240123, 0.0);
        case 177: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 178: return vec4(-0.653869, 3.235284, -0.234040, 0.0);
        case 179: return vec4(-0.635507, 2.747584, -0.242411, 0.0);
        case 180: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 181: return vec4(-0.165179, 3.748284, -0.238332, 0.0);
        case 182: return vec4(-0.653869, 3.235284, -0.234040, 0.0);
        case 183: return vec4(-0.165179, 3.748284, -0.238332, 0.0);
        case 184: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 185: return vec4(-0.127114, 3.642884, -0.218079, 0.0);
        case 186: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 187: return vec4(-0.426697, 2.505812, -0.240123, 0.0);
        case 188: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 189: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 190: return vec4(-0.127114, 3.642884, -0.218079, 0.0);
        case 191: return vec4(-0.651850, 3.053612, -0.218081, 0.0);
        case 192: return vec4(-0.127114, 3.642884, -0.218079, 0.0);
        case 193: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 194: return vec4(-0.108327, 3.630054, -0.262072, 0.0);
        case 195: return vec4(-0.635507, 2.747584, -0.242411, 0.0);
        case 196: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 197: return vec4(-0.426697, 2.505812, -0.240123, 0.0);
        case 198: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 199: return vec4(-0.635507, 2.747584, -0.242411, 0.0);
        case 200: return vec4(-0.653869, 3.235284, -0.234040, 0.0);
        case 201: return vec4(-0.165179, 3.748284, -0.238332, 0.0);
        case 202: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 203: return vec4(-0.653869, 3.235284, -0.234040, 0.0);
        case 204: return vec4(-0.546987, 3.325789, -0.259794, 0.0);
        case 205: return vec4(-0.165179, 3.748284, -0.238332, 0.0);
        case 206: return vec4(-0.108327, 3.630054, -0.262072, 0.0);
        case 207: return vec4(-0.557885, 3.362641, -0.185991, 0.0);
        case 208: return vec4(-0.406169, 3.377576, -0.262914, 0.0);
        case 209: return vec4(-0.709601, 3.347706, -0.262914, 0.0);
        case 210: return vec4(-0.557885, 3.362641, -0.185991, 0.0);
        case 211: return vec4(-0.709601, 3.347706, -0.262914, 0.0);
        case 212: return vec4(-0.406169, 3.377576, -0.262914, 0.0);
        case 213: return vec4(-0.556639, 2.679673, -0.185521, 0.0);
        case 214: return vec4(-0.404921, 2.694608, -0.262443, 0.0);
        case 215: return vec4(-0.708353, 2.664737, -0.262443, 0.0);
        case 216: return vec4(-0.556639, 2.679673, -0.185521, 0.0);
        case 217: return vec4(-0.708353, 2.664737, -0.262443, 0.0);
        case 218: return vec4(-0.404921, 2.694608, -0.262443, 0.0);
        case 219: return vec4(-0.041760, 3.575316, -0.244422, 0.0);
        case 220: return vec4(0.284416, 3.733558, -0.265018, 0.0);
        case 221: return vec4(-0.128016, 3.801780, -0.218369, 0.0);
        case 222: return vec4(0.284416, 3.733558, -0.265018, 0.0);
        case 223: return vec4(-0.041760, 3.575316, -0.244422, 0.0);
        case 224: return vec4(-0.128016, 3.801780, -0.218369, 0.0);
        case 225: return vec4(0.760523, 2.747584, -0.242411, 0.0);
        case 226: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 227: return vec4(0.551713, 2.505813, -0.240122, 0.0);
        case 228: return vec4(0.778885, 3.235284, -0.234040, 0.0);
        case 229: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 230: return vec4(0.760523, 2.747584, -0.242411, 0.0);
        case 231: return vec4(0.290195, 3.748284, -0.238332, 0.0);
        case 232: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 233: return vec4(0.778885, 3.235284, -0.234040, 0.0);
        case 234: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 235: return vec4(0.290195, 3.748284, -0.238332, 0.0);
        case 236: return vec4(0.252130, 3.642884, -0.218079, 0.0);
        case 237: return vec4(0.551713, 2.505813, -0.240122, 0.0);
        case 238: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 239: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 240: return vec4(0.252130, 3.642884, -0.218079, 0.0);
        case 241: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 242: return vec4(0.776866, 3.053613, -0.218081, 0.0);
        case 243: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 244: return vec4(0.252130, 3.642884, -0.218079, 0.0);
        case 245: return vec4(0.233343, 3.630054, -0.262072, 0.0);
        case 246: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 247: return vec4(0.760523, 2.747584, -0.242411, 0.0);
        case 248: return vec4(0.551713, 2.505813, -0.240122, 0.0);
        case 249: return vec4(0.760523, 2.747584, -0.242411, 0.0);
        case 250: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 251: return vec4(0.778885, 3.235284, -0.234040, 0.0);
        case 252: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 253: return vec4(0.290195, 3.748284, -0.238332, 0.0);
        case 254: return vec4(0.778885, 3.235284, -0.234040, 0.0);
        case 255: return vec4(0.290195, 3.748284, -0.238332, 0.0);
        case 256: return vec4(0.672003, 3.325789, -0.259794, 0.0);
        case 257: return vec4(0.233343, 3.630054, -0.262072, 0.0);
        case 258: return vec4(-0.115155, 2.149969, -0.217257, 0.0);
        case 259: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 260: return vec4(0.227281, 1.857073, -0.226910, 0.0);
        case 261: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 262: return vec4(0.227281, 1.857073, -0.226910, 0.0);
        case 263: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 264: return vec4(-0.115155, 2.149969, -0.217257, 0.0);
        case 265: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 266: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 267: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 268: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 269: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 270: return vec4(-0.125814, 2.917572, 0.195298, 0.0);
        case 271: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 272: return vec4(-0.340041, 2.707497, 0.178924, 0.0);
        case 273: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 274: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 275: return vec4(-0.340041, 2.707497, 0.178924, 0.0);
        case 276: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 277: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 278: return vec4(0.098125, 3.448994, 0.160518, 0.0);
        case 279: return vec4(0.098125, 3.448994, 0.160518, 0.0);
        case 280: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 281: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 282: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 283: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 284: return vec4(0.578775, 2.400065, -0.022376, 0.0);
        case 285: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 286: return vec4(0.083199, 3.262236, -0.020138, 0.0);
        case 287: return vec4(0.578775, 2.400065, -0.022376, 0.0);
        case 288: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 289: return vec4(0.251995, 2.721614, 0.337327, 0.0);
        case 290: return vec4(0.578775, 2.400065, -0.022376, 0.0);
        case 291: return vec4(0.251995, 2.721614, 0.337327, 0.0);
        case 292: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 293: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 294: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 295: return vec4(0.180265, 3.315093, 0.383238, 0.0);
        case 296: return vec4(0.098125, 3.448994, 0.160518, 0.0);
        case 297: return vec4(0.180265, 3.315093, 0.383238, 0.0);
        case 298: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 299: return vec4(-0.068199, 3.147177, 0.558173, 0.0);
        case 300: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 301: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 302: return vec4(0.098125, 3.448994, 0.160518, 0.0);
        case 303: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 304: return vec4(-0.096804, 3.275046, 0.100496, 0.0);
        case 305: return vec4(-0.125814, 2.917572, 0.195298, 0.0);
        case 306: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 307: return vec4(0.098125, 3.448994, 0.160518, 0.0);
        case 308: return vec4(0.180265, 3.315093, 0.383238, 0.0);
        case 309: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 310: return vec4(0.326276, 2.952217, 0.040895, 0.0);
        case 311: return vec4(0.180265, 3.315093, 0.383238, 0.0);
        case 312: return vec4(0.227281, 1.857073, -0.226910, 0.0);
        case 313: return vec4(-0.199971, 1.899568, -0.142343, 0.0);
        case 314: return vec4(-0.115155, 2.149969, -0.217257, 0.0);
        case 315: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 316: return vec4(0.180265, 3.315093, 0.383238, 0.0);
        case 317: return vec4(-0.068199, 3.147177, 0.558173, 0.0);
        case 318: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 319: return vec4(-0.199971, 1.899568, -0.142343, 0.0);
        case 320: return vec4(0.227281, 1.857073, -0.226910, 0.0);
        case 321: return vec4(-0.199971, 1.899568, -0.142343, 0.0);
        case 322: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 323: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 324: return vec4(0.270568, 3.038475, 0.062047, 0.0);
        case 325: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 326: return vec4(0.578775, 2.400065, -0.022376, 0.0);
        case 327: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 328: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 329: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 330: return vec4(0.266617, 2.024740, -0.240520, 0.0);
        case 331: return vec4(0.270568, 3.038475, 0.062047, 0.0);
        case 332: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 333: return vec4(-0.121024, 3.001426, 0.103137, 0.0);
        case 334: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 335: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 336: return vec4(-0.068199, 3.147177, 0.558173, 0.0);
        case 337: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 338: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 339: return vec4(-0.068199, 3.147177, 0.558173, 0.0);
        case 340: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 341: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 342: return vec4(-0.121024, 3.001426, 0.103137, 0.0);
        case 343: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 344: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 345: return vec4(-0.232698, 3.170320, 0.477468, 0.0);
        case 346: return vec4(-0.125814, 2.917572, 0.195298, 0.0);
        case 347: return vec4(-0.121024, 3.001426, 0.103137, 0.0);
        case 348: return vec4(-0.340041, 2.707497, 0.178924, 0.0);
        case 349: return vec4(-0.121024, 3.001426, 0.103137, 0.0);
        case 350: return vec4(-0.125814, 2.917572, 0.195298, 0.0);
        case 351: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 352: return vec4(-0.121024, 3.001426, 0.103137, 0.0);
        case 353: return vec4(-0.340041, 2.707497, 0.178924, 0.0);
        case 354: return vec4(-0.250912, 2.406853, -0.081150, 0.0);
        case 355: return vec4(-0.115155, 2.149969, -0.217257, 0.0);
        case 356: return vec4(-0.199971, 1.899568, -0.142343, 0.0);
        case 357: return vec4(0.578775, 2.400065, -0.022376, 0.0);
        case 358: return vec4(0.251995, 2.721614, 0.337327, 0.0);
        case 359: return vec4(0.270568, 3.038475, 0.062047, 0.0);
        case 360: return vec4(0.251995, 2.721614, 0.337327, 0.0);
        case 361: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 362: return vec4(0.270568, 3.038475, 0.062047, 0.0);
        case 363: return vec4(0.270568, 3.038475, 0.062047, 0.0);
        case 364: return vec4(0.294537, 2.973718, 0.343911, 0.0);
        case 365: return vec4(0.113654, 3.388507, 0.143172, 0.0);
        case 366: return vec4(0.015005, 1.031373, 0.275563, 0.0);
        case 367: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 368: return vec4(-0.085341, 0.052586, 0.292936, 0.0);
        case 369: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 370: return vec4(0.015005, 1.031373, 0.275563, 0.0);
        case 371: return vec4(0.103999, 1.024594, 0.163502, 0.0);
        case 372: return vec4(-0.010711, 0.165991, 0.290598, 0.0);
        case 373: return vec4(-0.085341, 0.052586, 0.292936, 0.0);
        case 374: return vec4(-0.027314, -0.006264, 0.447663, 0.0);
        case 375: return vec4(-0.027314, -0.006264, 0.447663, 0.0);
        case 376: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 377: return vec4(-0.010711, 0.165991, 0.290598, 0.0);
        case 378: return vec4(-0.010711, 0.165991, 0.290598, 0.0);
        case 379: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 380: return vec4(0.160436, 1.019987, 0.265305, 0.0);
        case 381: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 382: return vec4(0.103999, 1.024594, 0.163502, 0.0);
        case 383: return vec4(0.160436, 1.019987, 0.265305, 0.0);
        case 384: return vec4(0.160436, 1.019987, 0.265305, 0.0);
        case 385: return vec4(0.015005, 1.031373, 0.275563, 0.0);
        case 386: return vec4(-0.010711, 0.165991, 0.290598, 0.0);
        case 387: return vec4(0.015005, 1.031373, 0.275563, 0.0);
        case 388: return vec4(-0.085341, 0.052586, 0.292936, 0.0);
        case 389: return vec4(-0.010711, 0.165991, 0.290598, 0.0);
        case 390: return vec4(-0.027314, -0.006264, 0.447663, 0.0);
        case 391: return vec4(-0.085341, 0.052586, 0.292936, 0.0);
        case 392: return vec4(-0.026443, 0.125677, 0.131967, 0.0);
        case 393: return vec4(-0.051497, 3.011249, 0.121885, 0.0);
        case 394: return vec4(-0.013366, 2.852983, 0.093602, 0.0);
        case 395: return vec4(0.000307, 2.781765, 0.203593, 0.0);
        case 396: return vec4(0.133495, 2.853465, 0.085714, 0.0);
        case 397: return vec4(0.000307, 2.781765, 0.203593, 0.0);
        case 398: return vec4(0.066861, 2.731105, 0.258922, 0.0);
        case 399: return vec4(0.000307, 2.781765, 0.203593, 0.0);
        case 400: return vec4(0.133495, 2.853465, 0.085714, 0.0);
        case 401: return vec4(0.207017, 3.081167, 0.161182, 0.0);
        case 402: return vec4(0.000307, 2.781765, 0.203593, 0.0);
        case 403: return vec4(0.207017, 3.081167, 0.161182, 0.0);
        case 404: return vec4(0.051197, 2.873282, 0.340142, 0.0);
        case 405: return vec4(0.000307, 2.781765, 0.203593, 0.0);
        case 406: return vec4(0.051197, 2.873282, 0.340142, 0.0);
        case 407: return vec4(-0.051497, 3.011249, 0.121885, 0.0);
        case 408: return vec4(0.034978, 3.191363, 0.445665, 0.0);
        case 409: return vec4(-0.051497, 3.011249, 0.121885, 0.0);
        case 410: return vec4(0.051197, 2.873282, 0.340142, 0.0);
        case 411: return vec4(-0.051497, 3.011249, 0.121885, 0.0);
        case 412: return vec4(0.034978, 3.191363, 0.445665, 0.0);
        case 413: return vec4(-0.042253, 3.346301, 0.294809, 0.0);
        case 414: return vec4(0.207017, 3.081167, 0.161182, 0.0);
        case 415: return vec4(0.188544, 3.252528, 0.419767, 0.0);
        case 416: return vec4(0.051197, 2.873282, 0.340142, 0.0);
        case 417: return vec4(0.207017, 3.081167, 0.161182, 0.0);
        case 418: return vec4(0.185406, 3.368003, 0.229430, 0.0);
        case 419: return vec4(0.188544, 3.252528, 0.419767, 0.0);
        case 420: return vec4(0.188544, 3.252528, 0.419767, 0.0);
        case 421: return vec4(0.034978, 3.191363, 0.445665, 0.0);
        case 422: return vec4(0.051197, 2.873282, 0.340142, 0.0);
        case 423: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 424: return vec4(0.078837, 1.024424, 0.105890, 0.0);
        case 425: return vec4(0.184232, 0.046014, 0.107924, 0.0);
        case 426: return vec4(0.078837, 1.024424, 0.105890, 0.0);
        case 427: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 428: return vec4(-0.010089, 1.018947, -0.006296, 0.0);
        case 429: return vec4(0.184232, 0.046014, 0.107924, 0.0);
        case 430: return vec4(0.109018, 0.159056, 0.107339, 0.0);
        case 431: return vec4(0.126466, -0.015557, 0.261685, 0.0);
        case 432: return vec4(0.126466, -0.015557, 0.261685, 0.0);
        case 433: return vec4(0.109018, 0.159056, 0.107339, 0.0);
        case 434: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 435: return vec4(0.109018, 0.159056, 0.107339, 0.0);
        case 436: return vec4(-0.066530, 1.012448, 0.095402, 0.0);
        case 437: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 438: return vec4(-0.010089, 1.018947, -0.006296, 0.0);
        case 439: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 440: return vec4(-0.066530, 1.012448, 0.095402, 0.0);
        case 441: return vec4(-0.066530, 1.012448, 0.095402, 0.0);
        case 442: return vec4(0.109018, 0.159056, 0.107339, 0.0);
        case 443: return vec4(0.078837, 1.024424, 0.105890, 0.0);
        case 444: return vec4(0.184232, 0.046014, 0.107924, 0.0);
        case 445: return vec4(0.078837, 1.024424, 0.105890, 0.0);
        case 446: return vec4(0.109018, 0.159056, 0.107339, 0.0);
        case 447: return vec4(0.184232, 0.046014, 0.107924, 0.0);
        case 448: return vec4(0.126466, -0.015557, 0.261685, 0.0);
        case 449: return vec4(0.125003, 0.121319, -0.051899, 0.0);
        case 450: return vec4(-0.016326, 2.161509, 0.619721, 0.0);
        case 451: return vec4(-0.140341, 2.256933, 0.489296, 0.0);
        case 452: return vec4(-0.108589, 2.228142, 0.455992, 0.0);
        case 453: return vec4(-0.016326, 2.161509, 0.619721, 0.0);
        case 454: return vec4(0.064858, 2.135773, 0.608844, 0.0);
        case 455: return vec4(-0.140341, 2.256933, 0.489296, 0.0);
        case 456: return vec4(0.064858, 2.135773, 0.608844, 0.0);
        case 457: return vec4(0.077986, 2.234774, 0.533233, 0.0);
        case 458: return vec4(-0.140341, 2.256933, 0.489296, 0.0);
        case 459: return vec4(-0.140341, 2.256933, 0.489296, 0.0);
        case 460: return vec4(0.077986, 2.234774, 0.533233, 0.0);
        case 461: return vec4(-0.096493, 2.266743, 0.454581, 0.0);
        case 462: return vec4(0.077986, 2.234774, 0.533233, 0.0);
        case 463: return vec4(0.064858, 2.135773, 0.608844, 0.0);
        case 464: return vec4(0.107414, 2.160193, 0.602529, 0.0);
        case 465: return vec4(0.064858, 2.135773, 0.608844, 0.0);
        case 466: return vec4(-0.016326, 2.161509, 0.619721, 0.0);
        case 467: return vec4(0.107414, 2.160193, 0.602529, 0.0);
        case 468: return vec4(-0.108589, 2.228142, 0.455992, 0.0);
        case 469: return vec4(0.107414, 2.160193, 0.602529, 0.0);
        case 470: return vec4(-0.016326, 2.161509, 0.619721, 0.0);
        case 471: return vec4(0.107414, 2.160193, 0.602529, 0.0);
        case 472: return vec4(-0.108589, 2.228142, 0.455992, 0.0);
        case 473: return vec4(0.077986, 2.234774, 0.533233, 0.0);
        case 474: return vec4(-0.096493, 2.266743, 0.454581, 0.0);
        case 475: return vec4(0.077986, 2.234774, 0.533233, 0.0);
        case 476: return vec4(-0.108589, 2.228142, 0.455992, 0.0);
        case 477: return vec4(0.239720, 2.256744, 0.511709, 0.0);
        case 478: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 479: return vec4(0.216797, 2.234766, 0.467689, 0.0);
        case 480: return vec4(0.044685, 2.239234, 0.531086, 0.0);
        case 481: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 482: return vec4(0.239720, 2.256744, 0.511709, 0.0);
        case 483: return vec4(0.044685, 2.239234, 0.531086, 0.0);
        case 484: return vec4(0.239720, 2.256744, 0.511709, 0.0);
        case 485: return vec4(0.201567, 2.271958, 0.472507, 0.0);
        case 486: return vec4(-0.043078, 2.093182, 0.544698, 0.0);
        case 487: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 488: return vec4(0.044685, 2.239234, 0.531086, 0.0);
        case 489: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 490: return vec4(-0.043078, 2.093182, 0.544698, 0.0);
        case 491: return vec4(0.044685, 2.239234, 0.531086, 0.0);
        case 492: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 493: return vec4(0.044685, 2.239234, 0.531086, 0.0);
        case 494: return vec4(0.201567, 2.271958, 0.472507, 0.0);
        case 495: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 496: return vec4(0.022112, 2.092683, 0.545129, 0.0);
        case 497: return vec4(0.216797, 2.234766, 0.467689, 0.0);
        case 498: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 499: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 500: return vec4(0.022112, 2.092683, 0.545129, 0.0);
        case 501: return vec4(-0.043078, 2.093182, 0.544698, 0.0);
        case 502: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 503: return vec4(0.070815, 2.127582, 0.591753, 0.0);
        case 504: return vec4(0.022112, 2.092683, 0.545129, 0.0);
        case 505: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 506: return vec4(0.216797, 2.234766, 0.467689, 0.0);
        case 507: return vec4(0.201567, 2.271958, 0.472507, 0.0);
        case 508: return vec4(0.216797, 2.234766, 0.467689, 0.0);
        case 509: return vec4(0.025928, 2.197132, 0.509407, 0.0);
        case 510: return vec4(0.031126, 3.079916, 0.445999, 0.0);
        case 511: return vec4(0.069153, 3.423638, 0.257066, 0.0);
        case 512: return vec4(-0.044648, 3.159279, 0.400501, 0.0);
        case 513: return vec4(0.069153, 3.423638, 0.257066, 0.0);
        case 514: return vec4(0.031126, 3.079916, 0.445999, 0.0);
        case 515: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 516: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 517: return vec4(0.031126, 3.079916, 0.445999, 0.0);
        case 518: return vec4(0.094951, 3.072237, 0.430940, 0.0);
        case 519: return vec4(0.069153, 3.423638, 0.257066, 0.0);
        case 520: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 521: return vec4(0.238104, 3.250409, 0.305309, 0.0);
        case 522: return vec4(0.224548, 3.221201, 0.209666, 0.0);
        case 523: return vec4(0.238104, 3.250409, 0.305309, 0.0);
        case 524: return vec4(0.309047, 3.015748, 0.091476, 0.0);
        case 525: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 526: return vec4(0.309047, 3.015748, 0.091476, 0.0);
        case 527: return vec4(0.238104, 3.250409, 0.305309, 0.0);
        case 528: return vec4(0.069153, 3.423638, 0.257066, 0.0);
        case 529: return vec4(-0.134734, 3.237891, 0.207058, 0.0);
        case 530: return vec4(-0.044648, 3.159279, 0.400501, 0.0);
        case 531: return vec4(-0.091589, 3.165614, 0.314905, 0.0);
        case 532: return vec4(-0.044648, 3.159279, 0.400501, 0.0);
        case 533: return vec4(-0.134734, 3.237891, 0.207058, 0.0);
        case 534: return vec4(-0.134734, 3.237891, 0.207058, 0.0);
        case 535: return vec4(-0.117696, 3.090436, 0.185262, 0.0);
        case 536: return vec4(-0.091589, 3.165614, 0.314905, 0.0);
        case 537: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 538: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 539: return vec4(0.118890, 2.659368, 0.397733, 0.0);
        case 540: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 541: return vec4(0.118890, 2.659368, 0.397733, 0.0);
        case 542: return vec4(0.131360, 2.779495, 0.277265, 0.0);
        case 543: return vec4(0.118890, 2.659368, 0.397733, 0.0);
        case 544: return vec4(0.190021, 3.123183, 0.329049, 0.0);
        case 545: return vec4(0.131360, 2.779495, 0.277265, 0.0);
        case 546: return vec4(0.190021, 3.123183, 0.329049, 0.0);
        case 547: return vec4(0.118890, 2.659368, 0.397733, 0.0);
        case 548: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 549: return vec4(0.190021, 3.123183, 0.329049, 0.0);
        case 550: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 551: return vec4(0.131360, 2.779495, 0.277265, 0.0);
        case 552: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 553: return vec4(0.145541, 2.859777, -0.054899, 0.0);
        case 554: return vec4(0.309047, 3.015748, 0.091476, 0.0);
        case 555: return vec4(0.145541, 2.859777, -0.054899, 0.0);
        case 556: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 557: return vec4(0.159129, 2.782873, -0.041184, 0.0);
        case 558: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 559: return vec4(0.238104, 3.250409, 0.305309, 0.0);
        case 560: return vec4(0.169772, 3.122062, 0.422545, 0.0);
        case 561: return vec4(-0.084965, 3.048192, 0.326772, 0.0);
        case 562: return vec4(-0.044648, 3.159279, 0.400501, 0.0);
        case 563: return vec4(-0.102494, 3.094183, 0.346055, 0.0);
        case 564: return vec4(-0.044648, 3.159279, 0.400501, 0.0);
        case 565: return vec4(-0.091589, 3.165614, 0.314905, 0.0);
        case 566: return vec4(-0.102494, 3.094183, 0.346055, 0.0);
        case 567: return vec4(-0.064427, 2.908912, 0.178961, 0.0);
        case 568: return vec4(-0.102494, 3.094183, 0.346055, 0.0);
        case 569: return vec4(-0.091589, 3.165614, 0.314905, 0.0);
        case 570: return vec4(-0.097553, 3.081552, 0.317434, 0.0);
        case 571: return vec4(-0.064427, 2.908912, 0.178961, 0.0);
        case 572: return vec4(-0.091589, 3.165614, 0.314905, 0.0);
        case 573: return vec4(-0.102494, 3.094183, 0.346055, 0.0);
        case 574: return vec4(-0.064427, 2.908912, 0.178961, 0.0);
        case 575: return vec4(-0.097553, 3.081552, 0.317434, 0.0);
        case 576: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 577: return vec4(-0.065532, 2.863277, -0.047374, 0.0);
        case 578: return vec4(0.064347, 2.494485, -0.089880, 0.0);
        case 579: return vec4(0.064347, 2.494485, -0.089880, 0.0);
        case 580: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 581: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 582: return vec4(0.159129, 2.782873, -0.041184, 0.0);
        case 583: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 584: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 585: return vec4(0.159129, 2.782873, -0.041184, 0.0);
        case 586: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 587: return vec4(0.064347, 2.494485, -0.089880, 0.0);
        case 588: return vec4(0.064347, 2.494485, -0.089880, 0.0);
        case 589: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 590: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 591: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 592: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 593: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 594: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 595: return vec4(0.079877, 2.008623, -0.106236, 0.0);
        case 596: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 597: return vec4(0.146853, 2.433875, -0.124663, 0.0);
        case 598: return vec4(0.079877, 2.008623, -0.106236, 0.0);
        case 599: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 600: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 601: return vec4(0.016260, 1.423469, -0.214446, 0.0);
        case 602: return vec4(-0.026366, 1.051414, -0.219392, 0.0);
        case 603: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 604: return vec4(-0.026366, 1.051414, -0.219392, 0.0);
        case 605: return vec4(0.016260, 1.423469, -0.214446, 0.0);
        case 606: return vec4(-0.026366, 1.051414, -0.219392, 0.0);
        case 607: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 608: return vec4(0.028677, 0.959267, -0.163075, 0.0);
        case 609: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 610: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 611: return vec4(0.028677, 0.959267, -0.163075, 0.0);
        case 612: return vec4(-0.026366, 1.051414, -0.219392, 0.0);
        case 613: return vec4(0.028677, 0.959267, -0.163075, 0.0);
        case 614: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 615: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 616: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 617: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 618: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 619: return vec4(0.079877, 2.008623, -0.106236, 0.0);
        case 620: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 621: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 622: return vec4(0.079877, 2.008623, -0.106236, 0.0);
        case 623: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 624: return vec4(0.079877, 2.008623, -0.106236, 0.0);
        case 625: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 626: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 627: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 628: return vec4(0.016260, 1.423469, -0.214446, 0.0);
        case 629: return vec4(0.001948, 1.478988, -0.180586, 0.0);
        case 630: return vec4(0.052179, 1.479339, -0.184607, 0.0);
        case 631: return vec4(0.016260, 1.423469, -0.214446, 0.0);
        case 632: return vec4(0.017755, 2.103512, -0.164004, 0.0);
        case 633: return vec4(-0.065532, 2.863277, -0.047374, 0.0);
        case 634: return vec4(-0.117696, 3.090436, 0.185262, 0.0);
        case 635: return vec4(-0.134734, 3.237891, 0.207058, 0.0);
        case 636: return vec4(-0.117696, 3.090436, 0.185262, 0.0);
        case 637: return vec4(-0.065532, 2.863277, -0.047374, 0.0);
        case 638: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 639: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 640: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 641: return vec4(0.159129, 2.782873, -0.041184, 0.0);
        case 642: return vec4(0.190021, 3.123183, 0.329049, 0.0);
        case 643: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 644: return vec4(0.257045, 2.948635, 0.211633, 0.0);
        case 645: return vec4(-0.026015, 2.374025, -0.042204, 0.0);
        case 646: return vec4(0.170522, 3.094321, 0.208654, 0.0);
        case 647: return vec4(-0.065532, 2.863277, -0.047374, 0.0);
        case 648: return vec4(0.135665, 1.060303, 0.201608, 0.0);
        case 649: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 650: return vec4(-0.020036, 1.070060, 0.015155, 0.0);
        case 651: return vec4(0.135665, 1.060303, 0.201608, 0.0);
        case 652: return vec4(0.256849, 0.425628, 0.173512, 0.0);
        case 653: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 654: return vec4(0.249784, 0.265011, -0.264766, 0.0);
        case 655: return vec4(0.256849, 0.425628, 0.173512, 0.0);
        case 656: return vec4(0.135665, 1.060303, 0.201608, 0.0);
        case 657: return vec4(0.249784, 0.265011, -0.264766, 0.0);
        case 658: return vec4(0.135665, 1.060303, 0.201608, 0.0);
        case 659: return vec4(-0.020036, 1.070060, 0.015155, 0.0);
        case 660: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 661: return vec4(0.256849, 0.425628, 0.173512, 0.0);
        case 662: return vec4(0.249784, 0.265011, -0.264766, 0.0);
        case 663: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 664: return vec4(0.249784, 0.265011, -0.264766, 0.0);
        case 665: return vec4(-0.020036, 1.070060, 0.015155, 0.0);
        case 666: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 667: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 668: return vec4(0.708718, -0.005566, 0.347980, 0.0);
        case 669: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 670: return vec4(0.256849, 0.425628, 0.173512, 0.0);
        case 671: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 672: return vec4(0.708718, -0.005566, 0.347980, 0.0);
        case 673: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 674: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 675: return vec4(0.256849, 0.425628, 0.173512, 0.0);
        case 676: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 677: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 678: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 679: return vec4(0.249784, 0.265011, -0.264766, 0.0);
        case 680: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 681: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 682: return vec4(-0.174860, 0.351517, 0.079523, 0.0);
        case 683: return vec4(-0.020036, 1.070060, 0.015155, 0.0);
        case 684: return vec4(-0.524719, 0.032142, -0.128544, 0.0);
        case 685: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 686: return vec4(-0.174860, 0.351517, 0.079523, 0.0);
        case 687: return vec4(-0.174860, 0.351517, 0.079523, 0.0);
        case 688: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 689: return vec4(-0.020036, 1.070060, 0.015155, 0.0);
        case 690: return vec4(-0.524719, 0.032142, -0.128544, 0.0);
        case 691: return vec4(-0.588271, 0.006199, -0.433714, 0.0);
        case 692: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 693: return vec4(-0.588271, 0.006199, -0.433714, 0.0);
        case 694: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 695: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 696: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 697: return vec4(-0.139941, 0.171090, -0.358654, 0.0);
        case 698: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 699: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 700: return vec4(0.489723, 0.093912, -0.266242, 0.0);
        case 701: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 702: return vec4(0.264126, 2.557559, 0.338780, 0.0);
        case 703: return vec4(0.344899, 2.771091, 0.076230, 0.0);
        case 704: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 705: return vec4(0.344899, 2.771091, 0.076230, 0.0);
        case 706: return vec4(0.073753, 2.845192, 0.118105, 0.0);
        case 707: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 708: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 709: return vec4(0.073753, 2.845192, 0.118105, 0.0);
        case 710: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 711: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 712: return vec4(-0.013808, 2.867645, 0.088736, 0.0);
        case 713: return vec4(-0.216450, 2.782998, 0.065889, 0.0);
        case 714: return vec4(-0.128414, 2.561536, 0.329633, 0.0);
        case 715: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 716: return vec4(-0.216450, 2.782998, 0.065889, 0.0);
        case 717: return vec4(-0.128414, 2.561536, 0.329633, 0.0);
        case 718: return vec4(-0.083856, 2.429275, 0.342375, 0.0);
        case 719: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 720: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 721: return vec4(0.217129, 2.271014, 0.402411, 0.0);
        case 722: return vec4(0.264126, 2.557559, 0.338780, 0.0);
        case 723: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 724: return vec4(0.277373, 2.010285, 0.434907, 0.0);
        case 725: return vec4(0.217129, 2.271014, 0.402411, 0.0);
        case 726: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 727: return vec4(-0.120593, 2.108761, 0.379246, 0.0);
        case 728: return vec4(0.277373, 2.010285, 0.434907, 0.0);
        case 729: return vec4(-0.120593, 2.108761, 0.379246, 0.0);
        case 730: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 731: return vec4(-0.083856, 2.429275, 0.342375, 0.0);
        case 732: return vec4(0.373384, 1.987491, 0.288453, 0.0);
        case 733: return vec4(0.277373, 2.010285, 0.434907, 0.0);
        case 734: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 735: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 736: return vec4(0.213478, 1.043796, 0.253628, 0.0);
        case 737: return vec4(0.373384, 1.987491, 0.288453, 0.0);
        case 738: return vec4(0.213478, 1.043796, 0.253628, 0.0);
        case 739: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 740: return vec4(0.373384, 1.987491, 0.288453, 0.0);
        case 741: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 742: return vec4(0.334070, 0.313109, 0.123899, 0.0);
        case 743: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 744: return vec4(0.334070, 0.313109, 0.123899, 0.0);
        case 745: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 746: return vec4(0.213478, 1.043796, 0.253628, 0.0);
        case 747: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 748: return vec4(0.213478, 1.043796, 0.253628, 0.0);
        case 749: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 750: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 751: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 752: return vec4(0.334070, 0.313109, 0.123899, 0.0);
        case 753: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 754: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 755: return vec4(0.334070, 0.313109, 0.123899, 0.0);
        case 756: return vec4(0.257321, 0.145360, 0.355660, 0.0);
        case 757: return vec4(0.708718, -0.005566, 0.347980, 0.0);
        case 758: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 759: return vec4(0.277373, 2.010285, 0.434907, 0.0);
        case 760: return vec4(-0.120593, 2.108761, 0.379246, 0.0);
        case 761: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 762: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 763: return vec4(0.001713, 0.214819, -0.387921, 0.0);
        case 764: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 765: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 766: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 767: return vec4(0.001713, 0.214819, -0.387921, 0.0);
        case 768: return vec4(-0.588271, 0.006199, -0.433714, 0.0);
        case 769: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 770: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 771: return vec4(-0.524719, 0.032142, -0.128544, 0.0);
        case 772: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 773: return vec4(-0.588271, 0.006199, -0.433714, 0.0);
        case 774: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 775: return vec4(-0.524719, 0.032142, -0.128544, 0.0);
        case 776: return vec4(-0.174860, 0.351517, 0.079523, 0.0);
        case 777: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 778: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 779: return vec4(-0.113238, 0.982552, 0.110453, 0.0);
        case 780: return vec4(-0.198167, 1.731611, 0.171009, 0.0);
        case 781: return vec4(-0.113238, 0.982552, 0.110453, 0.0);
        case 782: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 783: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 784: return vec4(-0.198167, 1.731611, 0.171009, 0.0);
        case 785: return vec4(-0.079960, 1.701092, 0.016835, 0.0);
        case 786: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 787: return vec4(-0.113238, 0.982552, 0.110453, 0.0);
        case 788: return vec4(-0.198167, 1.731611, 0.171009, 0.0);
        case 789: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 790: return vec4(-0.113238, 0.982552, 0.110453, 0.0);
        case 791: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 792: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 793: return vec4(0.001713, 0.214819, -0.387921, 0.0);
        case 794: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 795: return vec4(0.001713, 0.214819, -0.387921, 0.0);
        case 796: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 797: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 798: return vec4(-0.040552, 0.023169, -0.760682, 0.0);
        case 799: return vec4(0.356214, 0.119523, -0.399525, 0.0);
        case 800: return vec4(0.581312, 0.034500, -0.569417, 0.0);
        case 801: return vec4(0.213478, 1.043796, 0.253628, 0.0);
        case 802: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 803: return vec4(0.334070, 0.313109, 0.123899, 0.0);
        case 804: return vec4(0.344899, 2.771091, 0.076230, 0.0);
        case 805: return vec4(0.151576, 2.816887, 0.068936, 0.0);
        case 806: return vec4(0.073753, 2.845192, 0.118105, 0.0);
        case 807: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 808: return vec4(0.073753, 2.845192, 0.118105, 0.0);
        case 809: return vec4(-0.013808, 2.867645, 0.088736, 0.0);
        case 810: return vec4(-0.344855, 0.199190, -0.187084, 0.0);
        case 811: return vec4(-0.174860, 0.351517, 0.079523, 0.0);
        case 812: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 813: return vec4(-0.198167, 1.731611, 0.171009, 0.0);
        case 814: return vec4(0.013893, 0.890792, 0.358372, 0.0);
        case 815: return vec4(-0.120593, 2.108761, 0.379246, 0.0);
        case 816: return vec4(0.155248, 1.984357, 0.043959, 0.0);
        case 817: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 818: return vec4(-0.079960, 1.701092, 0.016835, 0.0);
        case 819: return vec4(0.155248, 1.984357, 0.043959, 0.0);
        case 820: return vec4(0.373384, 1.987491, 0.288453, 0.0);
        case 821: return vec4(0.021915, 1.119301, -0.024115, 0.0);
        case 822: return vec4(0.682900, 3.362641, -0.185991, 0.0);
        case 823: return vec4(0.834617, 3.377576, -0.262913, 0.0);
        case 824: return vec4(0.531185, 3.347706, -0.262913, 0.0);
        case 825: return vec4(0.682900, 3.362641, -0.185991, 0.0);
        case 826: return vec4(0.531185, 3.347706, -0.262913, 0.0);
        case 827: return vec4(0.834617, 3.377576, -0.262913, 0.0);
        case 828: return vec4(0.681651, 2.679673, -0.185520, 0.0);
        case 829: return vec4(0.833369, 2.694608, -0.262442, 0.0);
        case 830: return vec4(0.529937, 2.664737, -0.262442, 0.0);
        case 831: return vec4(0.681651, 2.679673, -0.185520, 0.0);
        case 832: return vec4(0.529937, 2.664737, -0.262442, 0.0);
        case 833: return vec4(0.833369, 2.694608, -0.262442, 0.0);
        case 834: return vec4(0.204880, 2.576617, 0.424575, 0.0);
        case 835: return vec4(-0.053706, 2.601014, 0.428838, 0.0);
        case 836: return vec4(-0.083856, 2.429275, 0.342375, 0.0);
    }
    return vec4(0.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    int idx = int(fragCoord.x) + int(fragCoord.y) * int(iResolution.x);
    if ( idx < LIGHTS_OFFSET ) {
        fragColor = camera(idx);
        return;
    } else if ( idx >= SPHERES_OFFSET && idx < TRIANGLES_OFFSET ) {
        fragColor = sphere(idx - SPHERES_OFFSET);
        return;
    }
    if ( iFrame > 1 ) { // use the previous frame
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
