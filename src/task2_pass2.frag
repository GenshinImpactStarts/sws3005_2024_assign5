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

const float NUM_FRAME = 1179.0;
const float FPS = 30.0;

const float TOTAL_TIME = NUM_FRAME / FPS;

vec4 camera( in int idx )
{
    float speed = 0.2;
    vec3 cam_pos, cam_lookat, cam_up_vec;
    int frame = int( mod( iTime, TOTAL_TIME ) * FPS );
    switch(frame) {
        case 0:
            cam_pos = vec3(-3.57501, 10.68408, 10.03236);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 1:
            cam_pos = vec3(-3.56908, 10.68408, 10.03568);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 2:
            cam_pos = vec3(-3.56315, 10.68408, 10.03900);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 3:
            cam_pos = vec3(-3.55722, 10.68408, 10.04232);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 4:
            cam_pos = vec3(-3.55128, 10.68408, 10.04564);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 5:
            cam_pos = vec3(-3.54535, 10.68408, 10.04895);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 6:
            cam_pos = vec3(-3.53942, 10.68408, 10.05227);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 7:
            cam_pos = vec3(-3.53349, 10.68408, 10.05559);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 8:
            cam_pos = vec3(-3.52756, 10.68408, 10.05891);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 9:
            cam_pos = vec3(-3.52162, 10.68408, 10.06223);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 10:
            cam_pos = vec3(-3.51569, 10.68408, 10.06554);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 11:
            cam_pos = vec3(-3.50976, 10.68408, 10.06886);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 12:
            cam_pos = vec3(-3.50383, 10.68408, 10.07218);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 13:
            cam_pos = vec3(-3.49790, 10.68408, 10.07550);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 14:
            cam_pos = vec3(-3.49196, 10.68408, 10.07882);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 15:
            cam_pos = vec3(-3.48603, 10.68408, 10.08214);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 16:
            cam_pos = vec3(-3.48010, 10.68408, 10.08545);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 17:
            cam_pos = vec3(-3.47417, 10.68408, 10.08877);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 18:
            cam_pos = vec3(-3.46824, 10.68408, 10.09209);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 19:
            cam_pos = vec3(-3.46231, 10.68408, 10.09541);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 20:
            cam_pos = vec3(-3.45637, 10.68408, 10.09872);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 21:
            cam_pos = vec3(-3.45044, 10.68408, 10.10204);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 22:
            cam_pos = vec3(-3.44451, 10.68408, 10.10536);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 23:
            cam_pos = vec3(-3.43858, 10.68408, 10.10868);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 24:
            cam_pos = vec3(-3.43265, 10.68408, 10.11200);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 25:
            cam_pos = vec3(-3.42671, 10.68408, 10.11532);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 26:
            cam_pos = vec3(-3.42078, 10.68408, 10.11863);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 27:
            cam_pos = vec3(-3.41485, 10.68408, 10.12195);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 28:
            cam_pos = vec3(-3.40892, 10.68408, 10.12527);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 29:
            cam_pos = vec3(-3.40299, 10.68408, 10.12859);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 30:
            cam_pos = vec3(-3.39705, 10.68408, 10.13190);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 31:
            cam_pos = vec3(-3.39112, 10.68408, 10.13522);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 32:
            cam_pos = vec3(-3.38519, 10.68408, 10.13854);
            cam_up_vec = vec3(-0.31821, 0.75836, 0.56888);
            break;
        case 33:
            cam_pos = vec3(-0.18654, 1.61794, 4.02523);
            cam_up_vec = vec3(0.00229, 0.99273, -0.11946);
            break;
        case 34:
            cam_pos = vec3(-0.18560, 1.61417, 4.02916);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 35:
            cam_pos = vec3(-0.18594, 1.61192, 4.04619);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 36:
            cam_pos = vec3(-0.18648, 1.60835, 4.07322);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 37:
            cam_pos = vec3(-0.18720, 1.60360, 4.10930);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 38:
            cam_pos = vec3(-0.18809, 1.59775, 4.15362);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 39:
            cam_pos = vec3(-0.18912, 1.59091, 4.20544);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 40:
            cam_pos = vec3(-0.19030, 1.58317, 4.26413);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 41:
            cam_pos = vec3(-0.19160, 1.57460, 4.32911);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 42:
            cam_pos = vec3(-0.19301, 1.56527, 4.39987);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 43:
            cam_pos = vec3(-0.19453, 1.55524, 4.47593);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 44:
            cam_pos = vec3(-0.19615, 1.54456, 4.55687);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 45:
            cam_pos = vec3(-0.19786, 1.53329, 4.64231);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 46:
            cam_pos = vec3(-0.19965, 1.52148, 4.73189);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 47:
            cam_pos = vec3(-0.20152, 1.50916, 4.82528);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 48:
            cam_pos = vec3(-0.20346, 1.49638, 4.92217);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 49:
            cam_pos = vec3(-0.20546, 1.48318, 5.02229);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 50:
            cam_pos = vec3(-0.20753, 1.46958, 5.12536);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 51:
            cam_pos = vec3(-0.20964, 1.45563, 5.23113);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 52:
            cam_pos = vec3(-0.21181, 1.44136, 5.33937);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 53:
            cam_pos = vec3(-0.21402, 1.42679, 5.44985);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 54:
            cam_pos = vec3(-0.21627, 1.41195, 5.56236);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 55:
            cam_pos = vec3(-0.21855, 1.39687, 5.67669);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 56:
            cam_pos = vec3(-0.22087, 1.38157, 5.79265);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 57:
            cam_pos = vec3(-0.22322, 1.36609, 5.91005);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 58:
            cam_pos = vec3(-0.22559, 1.35044, 6.02869);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 59:
            cam_pos = vec3(-0.22799, 1.33465, 6.14841);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 60:
            cam_pos = vec3(-0.23040, 1.31874, 6.26902);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 61:
            cam_pos = vec3(-0.23283, 1.30274, 6.39036);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 62:
            cam_pos = vec3(-0.23527, 1.28666, 6.51224);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 63:
            cam_pos = vec3(-0.23771, 1.27054, 6.63451);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 64:
            cam_pos = vec3(-0.24016, 1.25438, 6.75699);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 65:
            cam_pos = vec3(-0.24261, 1.23822, 6.87951);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 66:
            cam_pos = vec3(-0.24506, 1.22208, 7.00190);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 67:
            cam_pos = vec3(-0.24750, 1.20598, 7.12398);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 68:
            cam_pos = vec3(-0.24994, 1.18994, 7.24559);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 69:
            cam_pos = vec3(-0.25236, 1.17399, 7.36654);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 70:
            cam_pos = vec3(-0.25476, 1.15814, 7.48665);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 71:
            cam_pos = vec3(-0.25714, 1.14244, 7.60573);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 72:
            cam_pos = vec3(-0.25950, 1.12690, 7.72358);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 73:
            cam_pos = vec3(-0.26183, 1.11154, 7.83999);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 74:
            cam_pos = vec3(-0.26412, 1.09640, 7.95476);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 75:
            cam_pos = vec3(-0.26638, 1.08151, 8.06765);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 76:
            cam_pos = vec3(-0.26859, 1.06690, 8.17842);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 77:
            cam_pos = vec3(-0.27076, 1.05261, 8.28683);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 78:
            cam_pos = vec3(-0.27288, 1.03865, 8.39261);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 79:
            cam_pos = vec3(-0.27494, 1.02509, 8.49546);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 80:
            cam_pos = vec3(-0.27693, 1.01195, 8.59507);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 81:
            cam_pos = vec3(-0.27885, 0.99929, 8.69110);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 82:
            cam_pos = vec3(-0.28069, 0.98714, 8.78318);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 83:
            cam_pos = vec3(-0.28245, 0.97557, 8.87091);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 84:
            cam_pos = vec3(-0.28411, 0.96463, 8.95384);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 85:
            cam_pos = vec3(-0.28566, 0.95439, 9.03148);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 86:
            cam_pos = vec3(-0.28709, 0.94492, 9.10326);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 87:
            cam_pos = vec3(-0.28840, 0.93631, 9.16857);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 88:
            cam_pos = vec3(-0.28956, 0.92864, 9.22670);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 89:
            cam_pos = vec3(-0.29057, 0.92203, 9.27683);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 90:
            cam_pos = vec3(-0.29139, 0.91660, 9.31803);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 91:
            cam_pos = vec3(-0.29201, 0.91248, 9.34922);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 92:
            cam_pos = vec3(-0.29241, 0.90986, 9.36909);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 93:
            cam_pos = vec3(-0.29255, 0.90894, 9.37612);
            cam_up_vec = vec3(0.00239, 0.99281, -0.11969);
            break;
        case 94:
            cam_pos = vec3(1.64025, 2.46871, 4.22964);
            cam_up_vec = vec3(0.26847, 0.95989, -0.08048);
            break;
        case 95:
            cam_pos = vec3(1.63569, 2.47286, 4.20413);
            cam_up_vec = vec3(0.26691, 0.96044, -0.07952);
            break;
        case 96:
            cam_pos = vec3(1.62930, 2.47555, 4.18346);
            cam_up_vec = vec3(0.26509, 0.96101, -0.07860);
            break;
        case 97:
            cam_pos = vec3(1.62291, 2.47823, 4.16278);
            cam_up_vec = vec3(0.26328, 0.96159, -0.07768);
            break;
        case 98:
            cam_pos = vec3(1.61652, 2.48091, 4.14211);
            cam_up_vec = vec3(0.26146, 0.96216, -0.07676);
            break;
        case 99:
            cam_pos = vec3(1.61012, 2.48358, 4.12144);
            cam_up_vec = vec3(0.25964, 0.96272, -0.07583);
            break;
        case 100:
            cam_pos = vec3(1.60371, 2.48626, 4.10077);
            cam_up_vec = vec3(0.25783, 0.96328, -0.07491);
            break;
        case 101:
            cam_pos = vec3(1.59731, 2.48893, 4.08010);
            cam_up_vec = vec3(0.25601, 0.96384, -0.07398);
            break;
        case 102:
            cam_pos = vec3(1.59090, 2.49160, 4.05944);
            cam_up_vec = vec3(0.25419, 0.96439, -0.07306);
            break;
        case 103:
            cam_pos = vec3(1.58448, 2.49427, 4.03877);
            cam_up_vec = vec3(0.25236, 0.96494, -0.07214);
            break;
        case 104:
            cam_pos = vec3(1.57806, 2.49693, 4.01811);
            cam_up_vec = vec3(0.25054, 0.96548, -0.07121);
            break;
        case 105:
            cam_pos = vec3(1.57164, 2.49960, 3.99745);
            cam_up_vec = vec3(0.24872, 0.96602, -0.07028);
            break;
        case 106:
            cam_pos = vec3(1.56522, 2.50226, 3.97679);
            cam_up_vec = vec3(0.24689, 0.96656, -0.06936);
            break;
        case 107:
            cam_pos = vec3(1.55879, 2.50492, 3.95614);
            cam_up_vec = vec3(0.24507, 0.96709, -0.06843);
            break;
        case 108:
            cam_pos = vec3(1.55236, 2.50757, 3.93548);
            cam_up_vec = vec3(0.24324, 0.96761, -0.06750);
            break;
        case 109:
            cam_pos = vec3(1.54592, 2.51023, 3.91483);
            cam_up_vec = vec3(0.24142, 0.96814, -0.06657);
            break;
        case 110:
            cam_pos = vec3(1.53948, 2.51288, 3.89418);
            cam_up_vec = vec3(0.23959, 0.96865, -0.06564);
            break;
        case 111:
            cam_pos = vec3(1.53304, 2.51553, 3.87353);
            cam_up_vec = vec3(0.23776, 0.96917, -0.06472);
            break;
        case 112:
            cam_pos = vec3(1.52659, 2.51818, 3.85288);
            cam_up_vec = vec3(0.23593, 0.96967, -0.06379);
            break;
        case 113:
            cam_pos = vec3(1.52014, 2.52083, 3.83224);
            cam_up_vec = vec3(0.23410, 0.97018, -0.06286);
            break;
        case 114:
            cam_pos = vec3(1.51369, 2.52347, 3.81160);
            cam_up_vec = vec3(0.23226, 0.97068, -0.06192);
            break;
        case 115:
            cam_pos = vec3(1.50723, 2.52611, 3.79095);
            cam_up_vec = vec3(0.23043, 0.97118, -0.06099);
            break;
        case 116:
            cam_pos = vec3(1.50077, 2.52875, 3.77031);
            cam_up_vec = vec3(0.22860, 0.97167, -0.06006);
            break;
        case 117:
            cam_pos = vec3(1.49430, 2.53139, 3.74968);
            cam_up_vec = vec3(0.22676, 0.97215, -0.05913);
            break;
        case 118:
            cam_pos = vec3(1.48783, 2.53403, 3.72904);
            cam_up_vec = vec3(0.22493, 0.97264, -0.05820);
            break;
        case 119:
            cam_pos = vec3(1.48136, 2.53666, 3.70841);
            cam_up_vec = vec3(0.22309, 0.97311, -0.05726);
            break;
        case 120:
            cam_pos = vec3(1.47488, 2.53930, 3.68777);
            cam_up_vec = vec3(0.22125, 0.97359, -0.05633);
            break;
        case 121:
            cam_pos = vec3(1.46841, 2.54193, 3.66714);
            cam_up_vec = vec3(0.21941, 0.97406, -0.05540);
            break;
        case 122:
            cam_pos = vec3(1.46192, 2.54455, 3.64652);
            cam_up_vec = vec3(0.21757, 0.97452, -0.05446);
            break;
        case 123:
            cam_pos = vec3(1.45543, 2.54718, 3.62589);
            cam_up_vec = vec3(0.21573, 0.97498, -0.05353);
            break;
        case 124:
            cam_pos = vec3(1.44894, 2.54981, 3.60527);
            cam_up_vec = vec3(0.21389, 0.97544, -0.05259);
            break;
        case 125:
            cam_pos = vec3(1.44245, 2.55243, 3.58464);
            cam_up_vec = vec3(0.21205, 0.97589, -0.05166);
            break;
        case 126:
            cam_pos = vec3(1.43595, 2.55505, 3.56402);
            cam_up_vec = vec3(0.21021, 0.97634, -0.05072);
            break;
        case 127:
            cam_pos = vec3(1.42945, 2.55767, 3.54340);
            cam_up_vec = vec3(0.20836, 0.97678, -0.04978);
            break;
        case 128:
            cam_pos = vec3(1.42294, 2.56029, 3.52279);
            cam_up_vec = vec3(0.20652, 0.97722, -0.04885);
            break;
        case 129:
            cam_pos = vec3(1.41643, 2.56290, 3.50217);
            cam_up_vec = vec3(0.20467, 0.97766, -0.04791);
            break;
        case 130:
            cam_pos = vec3(1.40992, 2.56552, 3.48156);
            cam_up_vec = vec3(0.20283, 0.97809, -0.04697);
            break;
        case 131:
            cam_pos = vec3(1.40340, 2.56813, 3.46095);
            cam_up_vec = vec3(0.20098, 0.97851, -0.04603);
            break;
        case 132:
            cam_pos = vec3(1.39688, 2.57074, 3.44034);
            cam_up_vec = vec3(0.19913, 0.97893, -0.04509);
            break;
        case 133:
            cam_pos = vec3(1.39036, 2.57334, 3.41973);
            cam_up_vec = vec3(0.19728, 0.97935, -0.04416);
            break;
        case 134:
            cam_pos = vec3(1.38383, 2.57595, 3.39912);
            cam_up_vec = vec3(0.19543, 0.97976, -0.04322);
            break;
        case 135:
            cam_pos = vec3(1.37730, 2.57855, 3.37852);
            cam_up_vec = vec3(0.19358, 0.98017, -0.04228);
            break;
        case 136:
            cam_pos = vec3(1.37076, 2.58116, 3.35792);
            cam_up_vec = vec3(0.19173, 0.98058, -0.04134);
            break;
        case 137:
            cam_pos = vec3(1.36422, 2.58376, 3.33732);
            cam_up_vec = vec3(0.18988, 0.98098, -0.04040);
            break;
        case 138:
            cam_pos = vec3(1.35768, 2.58636, 3.31672);
            cam_up_vec = vec3(0.18803, 0.98137, -0.03945);
            break;
        case 139:
            cam_pos = vec3(1.35113, 2.58895, 3.29612);
            cam_up_vec = vec3(0.18618, 0.98176, -0.03851);
            break;
        case 140:
            cam_pos = vec3(1.34458, 2.59155, 3.27553);
            cam_up_vec = vec3(0.18432, 0.98215, -0.03757);
            break;
        case 141:
            cam_pos = vec3(1.33802, 2.59414, 3.25494);
            cam_up_vec = vec3(0.18247, 0.98253, -0.03663);
            break;
        case 142:
            cam_pos = vec3(1.33146, 2.59674, 3.23435);
            cam_up_vec = vec3(0.18061, 0.98291, -0.03569);
            break;
        case 143:
            cam_pos = vec3(1.32490, 2.59933, 3.21376);
            cam_up_vec = vec3(0.17876, 0.98328, -0.03474);
            break;
        case 144:
            cam_pos = vec3(1.31834, 2.60192, 3.19317);
            cam_up_vec = vec3(0.17690, 0.98365, -0.03380);
            break;
        case 145:
            cam_pos = vec3(1.31177, 2.60450, 3.17259);
            cam_up_vec = vec3(0.17504, 0.98401, -0.03286);
            break;
        case 146:
            cam_pos = vec3(1.30519, 2.60709, 3.15201);
            cam_up_vec = vec3(0.17318, 0.98437, -0.03191);
            break;
        case 147:
            cam_pos = vec3(1.29861, 2.60967, 3.13143);
            cam_up_vec = vec3(0.17132, 0.98473, -0.03097);
            break;
        case 148:
            cam_pos = vec3(1.29203, 2.61226, 3.11085);
            cam_up_vec = vec3(0.16947, 0.98508, -0.03003);
            break;
        case 149:
            cam_pos = vec3(1.28545, 2.61484, 3.09027);
            cam_up_vec = vec3(0.16760, 0.98543, -0.02908);
            break;
        case 150:
            cam_pos = vec3(1.27886, 2.61742, 3.06970);
            cam_up_vec = vec3(0.16574, 0.98577, -0.02813);
            break;
        case 151:
            cam_pos = vec3(1.27227, 2.62000, 3.04912);
            cam_up_vec = vec3(0.16388, 0.98611, -0.02719);
            break;
        case 152:
            cam_pos = vec3(1.26567, 2.62257, 3.02855);
            cam_up_vec = vec3(0.16202, 0.98644, -0.02624);
            break;
        case 153:
            cam_pos = vec3(1.25907, 2.62515, 3.00798);
            cam_up_vec = vec3(0.16016, 0.98677, -0.02530);
            break;
        case 154:
            cam_pos = vec3(1.25246, 2.62772, 2.98742);
            cam_up_vec = vec3(0.15829, 0.98709, -0.02435);
            break;
        case 155:
            cam_pos = vec3(1.24586, 2.63029, 2.96685);
            cam_up_vec = vec3(0.15643, 0.98741, -0.02340);
            break;
        case 156:
            cam_pos = vec3(1.23924, 2.63286, 2.94629);
            cam_up_vec = vec3(0.15457, 0.98773, -0.02246);
            break;
        case 157:
            cam_pos = vec3(1.23263, 2.63543, 2.92573);
            cam_up_vec = vec3(0.15270, 0.98804, -0.02151);
            break;
        case 158:
            cam_pos = vec3(1.22601, 2.63800, 2.90517);
            cam_up_vec = vec3(0.15084, 0.98835, -0.02056);
            break;
        case 159:
            cam_pos = vec3(1.21938, 2.64057, 2.88461);
            cam_up_vec = vec3(0.14897, 0.98865, -0.01961);
            break;
        case 160:
            cam_pos = vec3(1.21276, 2.64313, 2.86406);
            cam_up_vec = vec3(0.14710, 0.98895, -0.01867);
            break;
        case 161:
            cam_pos = vec3(1.20613, 2.64569, 2.84350);
            cam_up_vec = vec3(0.14523, 0.98924, -0.01772);
            break;
        case 162:
            cam_pos = vec3(1.19949, 2.64826, 2.82295);
            cam_up_vec = vec3(0.14337, 0.98953, -0.01677);
            break;
        case 163:
            cam_pos = vec3(1.19285, 2.65082, 2.80240);
            cam_up_vec = vec3(0.14150, 0.98981, -0.01582);
            break;
        case 164:
            cam_pos = vec3(1.18621, 2.65337, 2.78185);
            cam_up_vec = vec3(0.13963, 0.99009, -0.01487);
            break;
        case 165:
            cam_pos = vec3(1.17956, 2.65593, 2.76131);
            cam_up_vec = vec3(0.13776, 0.99037, -0.01392);
            break;
        case 166:
            cam_pos = vec3(1.17291, 2.65849, 2.74076);
            cam_up_vec = vec3(0.13589, 0.99064, -0.01297);
            break;
        case 167:
            cam_pos = vec3(1.16626, 2.66104, 2.72022);
            cam_up_vec = vec3(0.13402, 0.99091, -0.01202);
            break;
        case 168:
            cam_pos = vec3(1.15960, 2.66360, 2.69968);
            cam_up_vec = vec3(0.13215, 0.99117, -0.01107);
            break;
        case 169:
            cam_pos = vec3(1.15294, 2.66615, 2.67915);
            cam_up_vec = vec3(0.13028, 0.99143, -0.01012);
            break;
        case 170:
            cam_pos = vec3(1.14627, 2.66870, 2.65861);
            cam_up_vec = vec3(0.12840, 0.99168, -0.00917);
            break;
        case 171:
            cam_pos = vec3(1.13960, 2.67125, 2.63808);
            cam_up_vec = vec3(0.12653, 0.99193, -0.00822);
            break;
        case 172:
            cam_pos = vec3(1.13293, 2.67380, 2.61755);
            cam_up_vec = vec3(0.12466, 0.99217, -0.00726);
            break;
        case 173:
            cam_pos = vec3(1.12625, 2.67635, 2.59702);
            cam_up_vec = vec3(0.12279, 0.99241, -0.00631);
            break;
        case 174:
            cam_pos = vec3(1.11957, 2.67889, 2.57649);
            cam_up_vec = vec3(0.12091, 0.99265, -0.00536);
            break;
        case 175:
            cam_pos = vec3(1.11288, 2.68144, 2.55596);
            cam_up_vec = vec3(0.11904, 0.99288, -0.00441);
            break;
        case 176:
            cam_pos = vec3(1.10619, 2.68398, 2.53544);
            cam_up_vec = vec3(0.11716, 0.99311, -0.00346);
            break;
        case 177:
            cam_pos = vec3(1.09950, 2.68652, 2.51492);
            cam_up_vec = vec3(0.11529, 0.99333, -0.00250);
            break;
        case 178:
            cam_pos = vec3(1.09280, 2.68906, 2.49440);
            cam_up_vec = vec3(0.11341, 0.99355, -0.00155);
            break;
        case 179:
            cam_pos = vec3(1.08610, 2.69160, 2.47388);
            cam_up_vec = vec3(0.11154, 0.99376, -0.00060);
            break;
        case 180:
            cam_pos = vec3(4.91077, 2.36275, 6.45292);
            cam_up_vec = vec3(0.13925, 0.99004, 0.02072);
            break;
        case 181:
            cam_pos = vec3(4.94315, 2.36024, 6.44168);
            cam_up_vec = vec3(0.13924, 0.99006, 0.02006);
            break;
        case 182:
            cam_pos = vec3(4.97142, 2.35810, 6.42109);
            cam_up_vec = vec3(0.13917, 0.99008, 0.01929);
            break;
        case 183:
            cam_pos = vec3(5.00223, 2.35576, 6.39843);
            cam_up_vec = vec3(0.13909, 0.99011, 0.01845);
            break;
        case 184:
            cam_pos = vec3(5.03539, 2.35323, 6.37381);
            cam_up_vec = vec3(0.13900, 0.99014, 0.01754);
            break;
        case 185:
            cam_pos = vec3(5.07074, 2.35053, 6.34729);
            cam_up_vec = vec3(0.13889, 0.99017, 0.01657);
            break;
        case 186:
            cam_pos = vec3(5.10810, 2.34766, 6.31894);
            cam_up_vec = vec3(0.13878, 0.99020, 0.01554);
            break;
        case 187:
            cam_pos = vec3(5.14733, 2.34464, 6.28882);
            cam_up_vec = vec3(0.13864, 0.99024, 0.01446);
            break;
        case 188:
            cam_pos = vec3(5.18829, 2.34146, 6.25699);
            cam_up_vec = vec3(0.13850, 0.99027, 0.01333);
            break;
        case 189:
            cam_pos = vec3(5.23084, 2.33815, 6.22349);
            cam_up_vec = vec3(0.13833, 0.99031, 0.01215);
            break;
        case 190:
            cam_pos = vec3(5.27485, 2.33471, 6.18836);
            cam_up_vec = vec3(0.13816, 0.99035, 0.01092);
            break;
        case 191:
            cam_pos = vec3(5.32023, 2.33114, 6.15165);
            cam_up_vec = vec3(0.13796, 0.99039, 0.00966);
            break;
        case 192:
            cam_pos = vec3(5.36684, 2.32745, 6.11339);
            cam_up_vec = vec3(0.13775, 0.99043, 0.00835);
            break;
        case 193:
            cam_pos = vec3(5.41460, 2.32365, 6.07361);
            cam_up_vec = vec3(0.13751, 0.99047, 0.00701);
            break;
        case 194:
            cam_pos = vec3(5.46340, 2.31974, 6.03235);
            cam_up_vec = vec3(0.13726, 0.99052, 0.00564);
            break;
        case 195:
            cam_pos = vec3(5.51315, 2.31573, 5.98963);
            cam_up_vec = vec3(0.13699, 0.99056, 0.00423);
            break;
        case 196:
            cam_pos = vec3(5.56375, 2.31162, 5.94548);
            cam_up_vec = vec3(0.13670, 0.99061, 0.00280);
            break;
        case 197:
            cam_pos = vec3(5.61513, 2.30742, 5.89993);
            cam_up_vec = vec3(0.13639, 0.99065, 0.00134);
            break;
        case 198:
            cam_pos = vec3(5.66720, 2.30313, 5.85299);
            cam_up_vec = vec3(0.13605, 0.99070, -0.00015);
            break;
        case 199:
            cam_pos = vec3(5.71988, 2.29876, 5.80470);
            cam_up_vec = vec3(0.13570, 0.99075, -0.00166);
            break;
        case 200:
            cam_pos = vec3(5.77311, 2.29431, 5.75507);
            cam_up_vec = vec3(0.13532, 0.99080, -0.00319);
            break;
        case 201:
            cam_pos = vec3(5.82681, 2.28978, 5.70413);
            cam_up_vec = vec3(0.13491, 0.99085, -0.00475);
            break;
        case 202:
            cam_pos = vec3(5.88091, 2.28518, 5.65190);
            cam_up_vec = vec3(0.13449, 0.99090, -0.00631);
            break;
        case 203:
            cam_pos = vec3(5.93534, 2.28052, 5.59839);
            cam_up_vec = vec3(0.13404, 0.99094, -0.00790);
            break;
        case 204:
            cam_pos = vec3(5.99006, 2.27578, 5.54362);
            cam_up_vec = vec3(0.13356, 0.99100, -0.00950);
            break;
        case 205:
            cam_pos = vec3(6.04498, 2.27098, 5.48763);
            cam_up_vec = vec3(0.13306, 0.99105, -0.01111);
            break;
        case 206:
            cam_pos = vec3(6.10006, 2.26613, 5.43042);
            cam_up_vec = vec3(0.13254, 0.99110, -0.01274);
            break;
        case 207:
            cam_pos = vec3(6.15524, 2.26121, 5.37202);
            cam_up_vec = vec3(0.13199, 0.99115, -0.01437);
            break;
        case 208:
            cam_pos = vec3(6.21046, 2.25624, 5.31244);
            cam_up_vec = vec3(0.13142, 0.99120, -0.01601);
            break;
        case 209:
            cam_pos = vec3(6.26568, 2.25122, 5.25171);
            cam_up_vec = vec3(0.13082, 0.99125, -0.01767);
            break;
        case 210:
            cam_pos = vec3(6.32085, 2.24615, 5.18985);
            cam_up_vec = vec3(0.13019, 0.99130, -0.01932);
            break;
        case 211:
            cam_pos = vec3(6.37590, 2.24104, 5.12687);
            cam_up_vec = vec3(0.12954, 0.99135, -0.02098);
            break;
        case 212:
            cam_pos = vec3(6.43081, 2.23588, 5.06279);
            cam_up_vec = vec3(0.12886, 0.99140, -0.02265);
            break;
        case 213:
            cam_pos = vec3(6.48551, 2.23067, 4.99764);
            cam_up_vec = vec3(0.12816, 0.99146, -0.02431);
            break;
        case 214:
            cam_pos = vec3(6.53998, 2.22543, 4.93143);
            cam_up_vec = vec3(0.12743, 0.99151, -0.02598);
            break;
        case 215:
            cam_pos = vec3(6.59416, 2.22015, 4.86420);
            cam_up_vec = vec3(0.12667, 0.99156, -0.02765);
            break;
        case 216:
            cam_pos = vec3(6.64802, 2.21483, 4.79595);
            cam_up_vec = vec3(0.12589, 0.99161, -0.02931);
            break;
        case 217:
            cam_pos = vec3(6.70151, 2.20948, 4.72671);
            cam_up_vec = vec3(0.12508, 0.99166, -0.03097);
            break;
        case 218:
            cam_pos = vec3(6.75460, 2.20409, 4.65650);
            cam_up_vec = vec3(0.12425, 0.99171, -0.03263);
            break;
        case 219:
            cam_pos = vec3(6.80725, 2.19868, 4.58535);
            cam_up_vec = vec3(0.12339, 0.99177, -0.03429);
            break;
        case 220:
            cam_pos = vec3(6.85943, 2.19324, 4.51327);
            cam_up_vec = vec3(0.12251, 0.99182, -0.03594);
            break;
        case 221:
            cam_pos = vec3(6.91110, 2.18777, 4.44030);
            cam_up_vec = vec3(0.12160, 0.99187, -0.03758);
            break;
        case 222:
            cam_pos = vec3(6.96223, 2.18228, 4.36645);
            cam_up_vec = vec3(0.12066, 0.99192, -0.03921);
            break;
        case 223:
            cam_pos = vec3(7.01278, 2.17676, 4.29174);
            cam_up_vec = vec3(0.11970, 0.99197, -0.04084);
            break;
        case 224:
            cam_pos = vec3(7.06273, 2.17122, 4.21622);
            cam_up_vec = vec3(0.11872, 0.99202, -0.04245);
            break;
        case 225:
            cam_pos = vec3(7.11205, 2.16566, 4.13988);
            cam_up_vec = vec3(0.11771, 0.99207, -0.04406);
            break;
        case 226:
            cam_pos = vec3(7.16071, 2.16008, 4.06278);
            cam_up_vec = vec3(0.11668, 0.99212, -0.04565);
            break;
        case 227:
            cam_pos = vec3(7.20868, 2.15449, 3.98492);
            cam_up_vec = vec3(0.11562, 0.99217, -0.04723);
            break;
        case 228:
            cam_pos = vec3(7.25593, 2.14888, 3.90634);
            cam_up_vec = vec3(0.11454, 0.99222, -0.04880);
            break;
        case 229:
            cam_pos = vec3(7.30244, 2.14326, 3.82706);
            cam_up_vec = vec3(0.11344, 0.99227, -0.05035);
            break;
        case 230:
            cam_pos = vec3(7.34819, 2.13763, 3.74711);
            cam_up_vec = vec3(0.11231, 0.99232, -0.05189);
            break;
        case 231:
            cam_pos = vec3(7.39315, 2.13198, 3.66652);
            cam_up_vec = vec3(0.11117, 0.99237, -0.05341);
            break;
        case 232:
            cam_pos = vec3(7.43730, 2.12633, 3.58532);
            cam_up_vec = vec3(0.11000, 0.99241, -0.05492);
            break;
        case 233:
            cam_pos = vec3(7.48062, 2.12067, 3.50354);
            cam_up_vec = vec3(0.10881, 0.99246, -0.05640);
            break;
        case 234:
            cam_pos = vec3(7.52309, 2.11500, 3.42120);
            cam_up_vec = vec3(0.10760, 0.99251, -0.05788);
            break;
        case 235:
            cam_pos = vec3(7.56470, 2.10933, 3.33834);
            cam_up_vec = vec3(0.10637, 0.99256, -0.05933);
            break;
        case 236:
            cam_pos = vec3(7.60542, 2.10366, 3.25498);
            cam_up_vec = vec3(0.10512, 0.99260, -0.06076);
            break;
        case 237:
            cam_pos = vec3(7.64523, 2.09798, 3.17117);
            cam_up_vec = vec3(0.10385, 0.99265, -0.06217);
            break;
        case 238:
            cam_pos = vec3(7.68413, 2.09230, 3.08692);
            cam_up_vec = vec3(0.10256, 0.99269, -0.06357);
            break;
        case 239:
            cam_pos = vec3(7.72210, 2.08663, 3.00228);
            cam_up_vec = vec3(0.10126, 0.99274, -0.06494);
            break;
        case 240:
            cam_pos = vec3(7.75913, 2.08096, 2.91726);
            cam_up_vec = vec3(0.09994, 0.99278, -0.06629);
            break;
        case 241:
            cam_pos = vec3(7.79519, 2.07529, 2.83192);
            cam_up_vec = vec3(0.09860, 0.99283, -0.06762);
            break;
        case 242:
            cam_pos = vec3(7.83029, 2.06963, 2.74628);
            cam_up_vec = vec3(0.09725, 0.99287, -0.06892);
            break;
        case 243:
            cam_pos = vec3(7.86441, 2.06398, 2.66037);
            cam_up_vec = vec3(0.09588, 0.99291, -0.07021);
            break;
        case 244:
            cam_pos = vec3(7.89754, 2.05833, 2.57424);
            cam_up_vec = vec3(0.09450, 0.99296, -0.07147);
            break;
        case 245:
            cam_pos = vec3(7.92968, 2.05270, 2.48791);
            cam_up_vec = vec3(0.09310, 0.99300, -0.07270);
            break;
        case 246:
            cam_pos = vec3(7.96081, 2.04708, 2.40142);
            cam_up_vec = vec3(0.09170, 0.99304, -0.07391);
            break;
        case 247:
            cam_pos = vec3(7.99093, 2.04147, 2.31482);
            cam_up_vec = vec3(0.09028, 0.99308, -0.07510);
            break;
        case 248:
            cam_pos = vec3(8.02004, 2.03587, 2.22813);
            cam_up_vec = vec3(0.08885, 0.99312, -0.07626);
            break;
        case 249:
            cam_pos = vec3(8.04813, 2.03030, 2.14139);
            cam_up_vec = vec3(0.08741, 0.99316, -0.07739);
            break;
        case 250:
            cam_pos = vec3(8.07520, 2.02474, 2.05465);
            cam_up_vec = vec3(0.08596, 0.99320, -0.07850);
            break;
        case 251:
            cam_pos = vec3(8.10125, 2.01920, 1.96793);
            cam_up_vec = vec3(0.08450, 0.99324, -0.07959);
            break;
        case 252:
            cam_pos = vec3(8.12628, 2.01368, 1.88129);
            cam_up_vec = vec3(0.08303, 0.99328, -0.08064);
            break;
        case 253:
            cam_pos = vec3(8.15029, 2.00819, 1.79477);
            cam_up_vec = vec3(0.08156, 0.99332, -0.08167);
            break;
        case 254:
            cam_pos = vec3(8.17327, 2.00272, 1.70839);
            cam_up_vec = vec3(0.08009, 0.99335, -0.08268);
            break;
        case 255:
            cam_pos = vec3(8.19524, 1.99728, 1.62222);
            cam_up_vec = vec3(0.07860, 0.99339, -0.08366);
            break;
        case 256:
            cam_pos = vec3(8.21620, 1.99187, 1.53628);
            cam_up_vec = vec3(0.07712, 0.99343, -0.08461);
            break;
        case 257:
            cam_pos = vec3(8.23615, 1.98649, 1.45062);
            cam_up_vec = vec3(0.07563, 0.99346, -0.08553);
            break;
        case 258:
            cam_pos = vec3(8.25509, 1.98115, 1.36529);
            cam_up_vec = vec3(0.07414, 0.99350, -0.08643);
            break;
        case 259:
            cam_pos = vec3(8.27305, 1.97584, 1.28033);
            cam_up_vec = vec3(0.07265, 0.99353, -0.08729);
            break;
        case 260:
            cam_pos = vec3(8.29002, 1.97056, 1.19579);
            cam_up_vec = vec3(0.07117, 0.99356, -0.08814);
            break;
        case 261:
            cam_pos = vec3(8.30601, 1.96533, 1.11172);
            cam_up_vec = vec3(0.06968, 0.99360, -0.08895);
            break;
        case 262:
            cam_pos = vec3(8.32104, 1.96013, 1.02816);
            cam_up_vec = vec3(0.06819, 0.99363, -0.08974);
            break;
        case 263:
            cam_pos = vec3(8.33512, 1.95499, 0.94517);
            cam_up_vec = vec3(0.06671, 0.99366, -0.09050);
            break;
        case 264:
            cam_pos = vec3(8.34826, 1.94988, 0.86279);
            cam_up_vec = vec3(0.06524, 0.99369, -0.09123);
            break;
        case 265:
            cam_pos = vec3(8.36048, 1.94483, 0.78108);
            cam_up_vec = vec3(0.06377, 0.99372, -0.09194);
            break;
        case 266:
            cam_pos = vec3(8.37179, 1.93983, 0.70008);
            cam_up_vec = vec3(0.06231, 0.99375, -0.09262);
            break;
        case 267:
            cam_pos = vec3(8.38221, 1.93488, 0.61987);
            cam_up_vec = vec3(0.06086, 0.99378, -0.09327);
            break;
        case 268:
            cam_pos = vec3(8.39176, 1.92999, 0.54048);
            cam_up_vec = vec3(0.05942, 0.99381, -0.09390);
            break;
        case 269:
            cam_pos = vec3(8.40046, 1.92516, 0.46200);
            cam_up_vec = vec3(0.05799, 0.99383, -0.09450);
            break;
        case 270:
            cam_pos = vec3(8.40833, 1.92039, 0.38446);
            cam_up_vec = vec3(0.05657, 0.99386, -0.09507);
            break;
        case 271:
            cam_pos = vec3(8.41540, 1.91569, 0.30793);
            cam_up_vec = vec3(0.05517, 0.99389, -0.09562);
            break;
        case 272:
            cam_pos = vec3(8.42169, 1.91106, 0.23249);
            cam_up_vec = vec3(0.05378, 0.99391, -0.09614);
            break;
        case 273:
            cam_pos = vec3(8.42721, 1.90650, 0.15819);
            cam_up_vec = vec3(0.05241, 0.99394, -0.09664);
            break;
        case 274:
            cam_pos = vec3(8.43202, 1.90202, 0.08511);
            cam_up_vec = vec3(0.05106, 0.99396, -0.09712);
            break;
        case 275:
            cam_pos = vec3(8.43612, 1.89763, 0.01333);
            cam_up_vec = vec3(0.04973, 0.99399, -0.09757);
            break;
        case 276:
            cam_pos = vec3(8.43955, 1.89331, -0.05709);
            cam_up_vec = vec3(0.04842, 0.99401, -0.09799);
            break;
        case 277:
            cam_pos = vec3(8.44235, 1.88909, -0.12607);
            cam_up_vec = vec3(0.04713, 0.99403, -0.09839);
            break;
        case 278:
            cam_pos = vec3(8.44454, 1.88496, -0.19351);
            cam_up_vec = vec3(0.04587, 0.99405, -0.09877);
            break;
        case 279:
            cam_pos = vec3(8.44617, 1.88093, -0.25934);
            cam_up_vec = vec3(0.04464, 0.99407, -0.09913);
            break;
        case 280:
            cam_pos = vec3(8.44726, 1.87701, -0.32345);
            cam_up_vec = vec3(0.04344, 0.99409, -0.09947);
            break;
        case 281:
            cam_pos = vec3(8.44785, 1.87320, -0.38574);
            cam_up_vec = vec3(0.04227, 0.99411, -0.09978);
            break;
        case 282:
            cam_pos = vec3(8.44800, 1.86951, -0.44612);
            cam_up_vec = vec3(0.04114, 0.99413, -0.10007);
            break;
        case 283:
            cam_pos = vec3(8.44773, 1.86594, -0.50447);
            cam_up_vec = vec3(0.04004, 0.99415, -0.10035);
            break;
        case 284:
            cam_pos = vec3(8.44710, 1.86250, -0.56067);
            cam_up_vec = vec3(0.03897, 0.99416, -0.10060);
            break;
        case 285:
            cam_pos = vec3(8.44614, 1.85920, -0.61459);
            cam_up_vec = vec3(0.03795, 0.99418, -0.10083);
            break;
        case 286:
            cam_pos = vec3(8.44490, 1.85605, -0.66610);
            cam_up_vec = vec3(0.03698, 0.99419, -0.10105);
            break;
        case 287:
            cam_pos = vec3(8.44344, 1.85306, -0.71503);
            cam_up_vec = vec3(0.03605, 0.99421, -0.10124);
            break;
        case 288:
            cam_pos = vec3(-2.49388, 1.52098, 1.18673);
            cam_up_vec = vec3(0.21409, 0.96899, -0.12304);
            break;
        case 289:
            cam_pos = vec3(-2.51706, 1.51905, 1.20003);
            cam_up_vec = vec3(0.21467, 0.96870, -0.12463);
            break;
        case 290:
            cam_pos = vec3(-2.50752, 1.51774, 1.20947);
            cam_up_vec = vec3(0.21474, 0.96846, -0.12635);
            break;
        case 291:
            cam_pos = vec3(-2.49676, 1.51608, 1.22065);
            cam_up_vec = vec3(0.21480, 0.96820, -0.12829);
            break;
        case 292:
            cam_pos = vec3(-2.48462, 1.51402, 1.23372);
            cam_up_vec = vec3(0.21485, 0.96790, -0.13046);
            break;
        case 293:
            cam_pos = vec3(-2.47096, 1.51155, 1.24880);
            cam_up_vec = vec3(0.21487, 0.96756, -0.13289);
            break;
        case 294:
            cam_pos = vec3(-2.45559, 1.50861, 1.26604);
            cam_up_vec = vec3(0.21487, 0.96718, -0.13559);
            break;
        case 295:
            cam_pos = vec3(-2.43832, 1.50518, 1.28559);
            cam_up_vec = vec3(0.21484, 0.96677, -0.13860);
            break;
        case 296:
            cam_pos = vec3(-2.41894, 1.50122, 1.30757);
            cam_up_vec = vec3(0.21475, 0.96630, -0.14194);
            break;
        case 297:
            cam_pos = vec3(-2.39725, 1.49668, 1.33209);
            cam_up_vec = vec3(0.21460, 0.96578, -0.14563);
            break;
        case 298:
            cam_pos = vec3(-2.37302, 1.49155, 1.35922);
            cam_up_vec = vec3(0.21436, 0.96521, -0.14971);
            break;
        case 299:
            cam_pos = vec3(-2.34606, 1.48579, 1.38896);
            cam_up_vec = vec3(0.21402, 0.96458, -0.15418);
            break;
        case 300:
            cam_pos = vec3(-2.31621, 1.47940, 1.42125);
            cam_up_vec = vec3(0.21356, 0.96390, -0.15905);
            break;
        case 301:
            cam_pos = vec3(-2.28336, 1.47239, 1.45591);
            cam_up_vec = vec3(0.21294, 0.96315, -0.16433);
            break;
        case 302:
            cam_pos = vec3(-2.24751, 1.46479, 1.49267);
            cam_up_vec = vec3(0.21215, 0.96234, -0.17000);
            break;
        case 303:
            cam_pos = vec3(-2.20875, 1.45666, 1.53112);
            cam_up_vec = vec3(0.21116, 0.96147, -0.17603);
            break;
        case 304:
            cam_pos = vec3(-2.16732, 1.44808, 1.57074);
            cam_up_vec = vec3(0.20996, 0.96056, -0.18235);
            break;
        case 305:
            cam_pos = vec3(-2.12355, 1.43915, 1.61095);
            cam_up_vec = vec3(0.20853, 0.95960, -0.18891);
            break;
        case 306:
            cam_pos = vec3(-2.07788, 1.42999, 1.65114);
            cam_up_vec = vec3(0.20688, 0.95861, -0.19563);
            break;
        case 307:
            cam_pos = vec3(-2.03082, 1.42072, 1.69075);
            cam_up_vec = vec3(0.20502, 0.95760, -0.20243);
            break;
        case 308:
            cam_pos = vec3(-1.98286, 1.41145, 1.72927);
            cam_up_vec = vec3(0.20296, 0.95657, -0.20923);
            break;
        case 309:
            cam_pos = vec3(-1.93450, 1.40228, 1.76630);
            cam_up_vec = vec3(0.20072, 0.95555, -0.21597);
            break;
        case 310:
            cam_pos = vec3(-1.88614, 1.39328, 1.80156);
            cam_up_vec = vec3(0.19832, 0.95453, -0.22258);
            break;
        case 311:
            cam_pos = vec3(-1.83816, 1.38451, 1.83487);
            cam_up_vec = vec3(0.19580, 0.95352, -0.22903);
            break;
        case 312:
            cam_pos = vec3(-1.79081, 1.37601, 1.86614);
            cam_up_vec = vec3(0.19316, 0.95254, -0.23529);
            break;
        case 313:
            cam_pos = vec3(-1.74432, 1.36780, 1.89536);
            cam_up_vec = vec3(0.19045, 0.95157, -0.24134);
            break;
        case 314:
            cam_pos = vec3(-1.69882, 1.35991, 1.92257);
            cam_up_vec = vec3(0.18767, 0.95063, -0.24717);
            break;
        case 315:
            cam_pos = vec3(-1.65443, 1.35232, 1.94783);
            cam_up_vec = vec3(0.18484, 0.94971, -0.25276);
            break;
        case 316:
            cam_pos = vec3(-1.61118, 1.34504, 1.97125);
            cam_up_vec = vec3(0.18198, 0.94881, -0.25814);
            break;
        case 317:
            cam_pos = vec3(-1.56912, 1.33805, 1.99293);
            cam_up_vec = vec3(0.17910, 0.94795, -0.26329);
            break;
        case 318:
            cam_pos = vec3(-1.52825, 1.33135, 2.01297);
            cam_up_vec = vec3(0.17621, 0.94711, -0.26822);
            break;
        case 319:
            cam_pos = vec3(-1.48856, 1.32493, 2.03151);
            cam_up_vec = vec3(0.17332, 0.94629, -0.27295);
            break;
        case 320:
            cam_pos = vec3(-1.45003, 1.31876, 2.04863);
            cam_up_vec = vec3(0.17043, 0.94549, -0.27748);
            break;
        case 321:
            cam_pos = vec3(-1.41263, 1.31284, 2.06445);
            cam_up_vec = vec3(0.16756, 0.94472, -0.28182);
            break;
        case 322:
            cam_pos = vec3(-1.37633, 1.30714, 2.07907);
            cam_up_vec = vec3(0.16470, 0.94398, -0.28598);
            break;
        case 323:
            cam_pos = vec3(-1.34110, 1.30167, 2.09258);
            cam_up_vec = vec3(0.16186, 0.94325, -0.28996);
            break;
        case 324:
            cam_pos = vec3(-1.30688, 1.29639, 2.10505);
            cam_up_vec = vec3(0.15904, 0.94255, -0.29379);
            break;
        case 325:
            cam_pos = vec3(-1.27365, 1.29131, 2.11658);
            cam_up_vec = vec3(0.15625, 0.94186, -0.29747);
            break;
        case 326:
            cam_pos = vec3(-1.24137, 1.28640, 2.12724);
            cam_up_vec = vec3(0.15349, 0.94119, -0.30099);
            break;
        case 327:
            cam_pos = vec3(-1.21000, 1.28166, 2.13708);
            cam_up_vec = vec3(0.15075, 0.94054, -0.30439);
            break;
        case 328:
            cam_pos = vec3(-1.17950, 1.27707, 2.14618);
            cam_up_vec = vec3(0.14805, 0.93991, -0.30765);
            break;
        case 329:
            cam_pos = vec3(-1.14984, 1.27263, 2.15459);
            cam_up_vec = vec3(0.14538, 0.93930, -0.31078);
            break;
        case 330:
            cam_pos = vec3(-1.12098, 1.26832, 2.16236);
            cam_up_vec = vec3(0.14274, 0.93870, -0.31381);
            break;
        case 331:
            cam_pos = vec3(-1.09290, 1.26414, 2.16955);
            cam_up_vec = vec3(0.14013, 0.93811, -0.31671);
            break;
        case 332:
            cam_pos = vec3(-1.06556, 1.26008, 2.17619);
            cam_up_vec = vec3(0.13755, 0.93754, -0.31952);
            break;
        case 333:
            cam_pos = vec3(-1.03892, 1.25614, 2.18232);
            cam_up_vec = vec3(0.13501, 0.93699, -0.32222);
            break;
        case 334:
            cam_pos = vec3(-1.01298, 1.25229, 2.18799);
            cam_up_vec = vec3(0.13250, 0.93644, -0.32483);
            break;
        case 335:
            cam_pos = vec3(-0.98768, 1.24854, 2.19323);
            cam_up_vec = vec3(0.13002, 0.93591, -0.32735);
            break;
        case 336:
            cam_pos = vec3(-0.96303, 1.24488, 2.19808);
            cam_up_vec = vec3(0.12758, 0.93540, -0.32978);
            break;
        case 337:
            cam_pos = vec3(-0.93898, 1.24130, 2.20256);
            cam_up_vec = vec3(0.12517, 0.93489, -0.33213);
            break;
        case 338:
            cam_pos = vec3(-0.91551, 1.23780, 2.20669);
            cam_up_vec = vec3(0.12279, 0.93440, -0.33441);
            break;
        case 339:
            cam_pos = vec3(-0.89261, 1.23437, 2.21052);
            cam_up_vec = vec3(0.12044, 0.93391, -0.33660);
            break;
        case 340:
            cam_pos = vec3(-0.87025, 1.23101, 2.21406);
            cam_up_vec = vec3(0.11813, 0.93344, -0.33873);
            break;
        case 341:
            cam_pos = vec3(-0.84841, 1.22770, 2.21733);
            cam_up_vec = vec3(0.11584, 0.93298, -0.34078);
            break;
        case 342:
            cam_pos = vec3(-0.82708, 1.22446, 2.22037);
            cam_up_vec = vec3(0.11359, 0.93252, -0.34278);
            break;
        case 343:
            cam_pos = vec3(-0.80624, 1.22126, 2.22318);
            cam_up_vec = vec3(0.11137, 0.93208, -0.34471);
            break;
        case 344:
            cam_pos = vec3(-0.78587, 1.21812, 2.22578);
            cam_up_vec = vec3(0.10918, 0.93165, -0.34658);
            break;
        case 345:
            cam_pos = vec3(-0.76596, 1.21501, 2.22820);
            cam_up_vec = vec3(0.10702, 0.93122, -0.34839);
            break;
        case 346:
            cam_pos = vec3(-0.74648, 1.21195, 2.23046);
            cam_up_vec = vec3(0.10489, 0.93080, -0.35015);
            break;
        case 347:
            cam_pos = vec3(-0.72743, 1.20892, 2.23256);
            cam_up_vec = vec3(0.10279, 0.93040, -0.35185);
            break;
        case 348:
            cam_pos = vec3(-0.70879, 1.20592, 2.23452);
            cam_up_vec = vec3(0.10072, 0.92999, -0.35350);
            break;
        case 349:
            cam_pos = vec3(-0.69055, 1.20294, 2.23636);
            cam_up_vec = vec3(0.09868, 0.92960, -0.35511);
            break;
        case 350:
            cam_pos = vec3(-0.67270, 1.19999, 2.23810);
            cam_up_vec = vec3(0.09667, 0.92922, -0.35667);
            break;
        case 351:
            cam_pos = vec3(-0.65522, 1.19706, 2.23974);
            cam_up_vec = vec3(0.09468, 0.92884, -0.35818);
            break;
        case 352:
            cam_pos = vec3(-0.63810, 1.19415, 2.24130);
            cam_up_vec = vec3(0.09273, 0.92847, -0.35965);
            break;
        case 353:
            cam_pos = vec3(-0.62133, 1.19125, 2.24279);
            cam_up_vec = vec3(0.09080, 0.92810, -0.36108);
            break;
        case 354:
            cam_pos = vec3(-0.60491, 1.18836, 2.24422);
            cam_up_vec = vec3(0.08889, 0.92775, -0.36247);
            break;
        case 355:
            cam_pos = vec3(-0.58881, 1.18547, 2.24561);
            cam_up_vec = vec3(0.08702, 0.92740, -0.36382);
            break;
        case 356:
            cam_pos = vec3(-0.57304, 1.18259, 2.24696);
            cam_up_vec = vec3(0.08516, 0.92705, -0.36513);
            break;
        case 357:
            cam_pos = vec3(-0.55758, 1.17970, 2.24829);
            cam_up_vec = vec3(0.08334, 0.92672, -0.36641);
            break;
        case 358:
            cam_pos = vec3(-0.54243, 1.17682, 2.24960);
            cam_up_vec = vec3(0.08154, 0.92638, -0.36765);
            break;
        case 359:
            cam_pos = vec3(-0.52757, 1.17392, 2.25091);
            cam_up_vec = vec3(0.07977, 0.92606, -0.36886);
            break;
        case 360:
            cam_pos = vec3(-0.51299, 1.17102, 2.25223);
            cam_up_vec = vec3(0.07802, 0.92574, -0.37003);
            break;
        case 361:
            cam_pos = vec3(-0.49870, 1.16810, 2.25356);
            cam_up_vec = vec3(0.07629, 0.92542, -0.37118);
            break;
        case 362:
            cam_pos = vec3(-0.48467, 1.16516, 2.25492);
            cam_up_vec = vec3(0.07459, 0.92511, -0.37229);
            break;
        case 363:
            cam_pos = vec3(-0.47091, 1.16221, 2.25632);
            cam_up_vec = vec3(0.07291, 0.92481, -0.37338);
            break;
        case 364:
            cam_pos = vec3(-0.45741, 1.15923, 2.25776);
            cam_up_vec = vec3(0.07126, 0.92451, -0.37443);
            break;
        case 365:
            cam_pos = vec3(-0.44416, 1.15622, 2.25926);
            cam_up_vec = vec3(0.06963, 0.92422, -0.37546);
            break;
        case 366:
            cam_pos = vec3(-0.43115, 1.15319, 2.26083);
            cam_up_vec = vec3(0.06802, 0.92393, -0.37647);
            break;
        case 367:
            cam_pos = vec3(-0.41838, 1.15012, 2.26246);
            cam_up_vec = vec3(0.06644, 0.92365, -0.37744);
            break;
        case 368:
            cam_pos = vec3(-0.40584, 1.14701, 2.26418);
            cam_up_vec = vec3(0.06487, 0.92337, -0.37840);
            break;
        case 369:
            cam_pos = vec3(-0.39353, 1.14386, 2.26600);
            cam_up_vec = vec3(0.06333, 0.92309, -0.37933);
            break;
        case 370:
            cam_pos = vec3(-0.38143, 1.14067, 2.26791);
            cam_up_vec = vec3(0.06181, 0.92282, -0.38023);
            break;
        case 371:
            cam_pos = vec3(-0.36956, 1.13743, 2.26994);
            cam_up_vec = vec3(0.06031, 0.92256, -0.38111);
            break;
        case 372:
            cam_pos = vec3(-0.35789, 1.13414, 2.27209);
            cam_up_vec = vec3(0.05883, 0.92230, -0.38198);
            break;
        case 373:
            cam_pos = vec3(-0.34642, 1.13079, 2.27437);
            cam_up_vec = vec3(0.05737, 0.92204, -0.38282);
            break;
        case 374:
            cam_pos = vec3(-0.33516, 1.12738, 2.27680);
            cam_up_vec = vec3(0.05594, 0.92179, -0.38363);
            break;
        case 375:
            cam_pos = vec3(-0.32408, 1.12391, 2.27938);
            cam_up_vec = vec3(0.05452, 0.92154, -0.38443);
            break;
        case 376:
            cam_pos = vec3(-0.31320, 1.12037, 2.28212);
            cam_up_vec = vec3(0.05312, 0.92130, -0.38521);
            break;
        case 377:
            cam_pos = vec3(-0.30251, 1.11676, 2.28503);
            cam_up_vec = vec3(0.05174, 0.92106, -0.38598);
            break;
        case 378:
            cam_pos = vec3(-0.29199, 1.11307, 2.28813);
            cam_up_vec = vec3(0.05039, 0.92082, -0.38672);
            break;
        case 379:
            cam_pos = vec3(-0.28165, 1.10929, 2.29142);
            cam_up_vec = vec3(0.04905, 0.92059, -0.38744);
            break;
        case 380:
            cam_pos = vec3(-0.27148, 1.10543, 2.29493);
            cam_up_vec = vec3(0.04773, 0.92036, -0.38815);
            break;
        case 381:
            cam_pos = vec3(-0.26148, 1.10148, 2.29865);
            cam_up_vec = vec3(0.04642, 0.92013, -0.38884);
            break;
        case 382:
            cam_pos = vec3(-0.25165, 1.09743, 2.30261);
            cam_up_vec = vec3(0.04514, 0.91991, -0.38952);
            break;
        case 383:
            cam_pos = vec3(-0.24197, 1.09327, 2.30681);
            cam_up_vec = vec3(0.04387, 0.91969, -0.39018);
            break;
        case 384:
            cam_pos = vec3(-0.23245, 1.08901, 2.31126);
            cam_up_vec = vec3(0.04263, 0.91948, -0.39082);
            break;
        case 385:
            cam_pos = vec3(-0.22309, 1.08463, 2.31600);
            cam_up_vec = vec3(0.04140, 0.91927, -0.39145);
            break;
        case 386:
            cam_pos = vec3(-0.21387, 1.08014, 2.32101);
            cam_up_vec = vec3(0.04018, 0.91906, -0.39206);
            break;
        case 387:
            cam_pos = vec3(-0.20480, 1.07551, 2.32633);
            cam_up_vec = vec3(0.03899, 0.91886, -0.39266);
            break;
        case 388:
            cam_pos = vec3(-0.19587, 1.07075, 2.33196);
            cam_up_vec = vec3(0.03781, 0.91866, -0.39325);
            break;
        case 389:
            cam_pos = vec3(-0.18708, 1.06585, 2.33793);
            cam_up_vec = vec3(0.03665, 0.91846, -0.39382);
            break;
        case 390:
            cam_pos = vec3(-0.17842, 1.06080, 2.34424);
            cam_up_vec = vec3(0.03550, 0.91826, -0.39438);
            break;
        case 391:
            cam_pos = vec3(-0.16989, 1.05559, 2.35091);
            cam_up_vec = vec3(0.03437, 0.91807, -0.39492);
            break;
        case 392:
            cam_pos = vec3(-0.16149, 1.05023, 2.35796);
            cam_up_vec = vec3(0.03326, 0.91788, -0.39546);
            break;
        case 393:
            cam_pos = vec3(-0.15322, 1.04469, 2.36541);
            cam_up_vec = vec3(0.03217, 0.91770, -0.39598);
            break;
        case 394:
            cam_pos = vec3(-0.14507, 1.03898, 2.37327);
            cam_up_vec = vec3(0.03108, 0.91751, -0.39649);
            break;
        case 395:
            cam_pos = vec3(-0.13703, 1.03308, 2.38156);
            cam_up_vec = vec3(0.03002, 0.91733, -0.39699);
            break;
        case 396:
            cam_pos = vec3(-0.12911, 1.02698, 2.39029);
            cam_up_vec = vec3(0.02897, 0.91716, -0.39748);
            break;
        case 397:
            cam_pos = vec3(-0.12130, 1.02069, 2.39949);
            cam_up_vec = vec3(0.02793, 0.91698, -0.39795);
            break;
        case 398:
            cam_pos = vec3(-0.11359, 1.01419, 2.40917);
            cam_up_vec = vec3(0.02692, 0.91681, -0.39842);
            break;
        case 399:
            cam_pos = vec3(-0.10599, 1.00748, 2.41934);
            cam_up_vec = vec3(0.02591, 0.91664, -0.39887);
            break;
        case 400:
            cam_pos = vec3(-0.09849, 1.00055, 2.43001);
            cam_up_vec = vec3(0.02492, 0.91647, -0.39932);
            break;
        case 401:
            cam_pos = vec3(-0.09109, 0.99339, 2.44120);
            cam_up_vec = vec3(0.02395, 0.91631, -0.39975);
            break;
        case 402:
            cam_pos = vec3(-0.08377, 0.98600, 2.45291);
            cam_up_vec = vec3(0.02298, 0.91615, -0.40018);
            break;
        case 403:
            cam_pos = vec3(-0.07655, 0.97838, 2.46515);
            cam_up_vec = vec3(0.02204, 0.91599, -0.40059);
            break;
        case 404:
            cam_pos = vec3(-0.06941, 0.97053, 2.47792);
            cam_up_vec = vec3(0.02110, 0.91583, -0.40100);
            break;
        case 405:
            cam_pos = vec3(-0.06234, 0.96245, 2.49121);
            cam_up_vec = vec3(0.02019, 0.91568, -0.40140);
            break;
        case 406:
            cam_pos = vec3(-0.05536, 0.95415, 2.50503);
            cam_up_vec = vec3(0.01928, 0.91553, -0.40179);
            break;
        case 407:
            cam_pos = vec3(-0.04844, 0.94562, 2.51934);
            cam_up_vec = vec3(0.01839, 0.91538, -0.40217);
            break;
        case 408:
            cam_pos = vec3(-0.04159, 0.93688, 2.53413);
            cam_up_vec = vec3(0.01751, 0.91524, -0.40254);
            break;
        case 409:
            cam_pos = vec3(-0.03481, 0.92794, 2.54936);
            cam_up_vec = vec3(0.01665, 0.91509, -0.40290);
            break;
        case 410:
            cam_pos = vec3(-0.02808, 0.91883, 2.56500);
            cam_up_vec = vec3(0.01579, 0.91495, -0.40326);
            break;
        case 411:
            cam_pos = vec3(-0.02140, 0.90955, 2.58101);
            cam_up_vec = vec3(0.01495, 0.91481, -0.40361);
            break;
        case 412:
            cam_pos = vec3(-0.01478, 0.90014, 2.59731);
            cam_up_vec = vec3(0.01413, 0.91467, -0.40395);
            break;
        case 413:
            cam_pos = vec3(-0.00820, 0.89063, 2.61385);
            cam_up_vec = vec3(0.01332, 0.91454, -0.40428);
            break;
        case 414:
            cam_pos = vec3(-0.00167, 0.88103, 2.63057);
            cam_up_vec = vec3(0.01252, 0.91441, -0.40461);
            break;
        case 415:
            cam_pos = vec3(0.00483, 0.87140, 2.64739);
            cam_up_vec = vec3(0.01173, 0.91428, -0.40492);
            break;
        case 416:
            cam_pos = vec3(0.01128, 0.86175, 2.66422);
            cam_up_vec = vec3(0.01095, 0.91415, -0.40523);
            break;
        case 417:
            cam_pos = vec3(0.01770, 0.85213, 2.68100);
            cam_up_vec = vec3(0.01019, 0.91402, -0.40554);
            break;
        case 418:
            cam_pos = vec3(0.02409, 0.84257, 2.69765);
            cam_up_vec = vec3(0.00944, 0.91390, -0.40584);
            break;
        case 419:
            cam_pos = vec3(0.03044, 0.83310, 2.71410);
            cam_up_vec = vec3(0.00870, 0.91377, -0.40613);
            break;
        case 420:
            cam_pos = vec3(0.03675, 0.82376, 2.73027);
            cam_up_vec = vec3(0.00797, 0.91365, -0.40641);
            break;
        case 421:
            cam_pos = vec3(0.04303, 0.81456, 2.74611);
            cam_up_vec = vec3(0.00725, 0.91354, -0.40669);
            break;
        case 422:
            cam_pos = vec3(0.04928, 0.80554, 2.76157);
            cam_up_vec = vec3(0.00655, 0.91342, -0.40696);
            break;
        case 423:
            cam_pos = vec3(0.05548, 0.79671, 2.77660);
            cam_up_vec = vec3(0.00585, 0.91331, -0.40723);
            break;
        case 424:
            cam_pos = vec3(0.06164, 0.78809, 2.79116);
            cam_up_vec = vec3(0.00517, 0.91319, -0.40749);
            break;
        case 425:
            cam_pos = vec3(0.06776, 0.77970, 2.80523);
            cam_up_vec = vec3(0.00450, 0.91308, -0.40775);
            break;
        case 426:
            cam_pos = vec3(0.07384, 0.77155, 2.81878);
            cam_up_vec = vec3(0.00384, 0.91298, -0.40800);
            break;
        case 427:
            cam_pos = vec3(0.07987, 0.76363, 2.83180);
            cam_up_vec = vec3(0.00319, 0.91287, -0.40824);
            break;
        case 428:
            cam_pos = vec3(0.08584, 0.75597, 2.84428);
            cam_up_vec = vec3(0.00255, 0.91276, -0.40848);
            break;
        case 429:
            cam_pos = vec3(0.09177, 0.74855, 2.85622);
            cam_up_vec = vec3(0.00193, 0.91266, -0.40871);
            break;
        case 430:
            cam_pos = vec3(0.09764, 0.74138, 2.86762);
            cam_up_vec = vec3(0.00131, 0.91256, -0.40894);
            break;
        case 431:
            cam_pos = vec3(0.10345, 0.73446, 2.87848);
            cam_up_vec = vec3(0.00070, 0.91246, -0.40916);
            break;
        case 432:
            cam_pos = vec3(0.10920, 0.72778, 2.88882);
            cam_up_vec = vec3(0.00011, 0.91236, -0.40938);
            break;
        case 433:
            cam_pos = vec3(0.11489, 0.72134, 2.89864);
            cam_up_vec = vec3(-0.00048, 0.91227, -0.40959);
            break;
        case 434:
            cam_pos = vec3(0.12051, 0.71514, 2.90796);
            cam_up_vec = vec3(-0.00105, 0.91217, -0.40980);
            break;
        case 435:
            cam_pos = vec3(0.12607, 0.70916, 2.91678);
            cam_up_vec = vec3(-0.00162, 0.91208, -0.41001);
            break;
        case 436:
            cam_pos = vec3(0.13156, 0.70341, 2.92513);
            cam_up_vec = vec3(-0.00217, 0.91199, -0.41020);
            break;
        case 437:
            cam_pos = vec3(0.13698, 0.69788, 2.93303);
            cam_up_vec = vec3(-0.00272, 0.91190, -0.41040);
            break;
        case 438:
            cam_pos = vec3(0.14233, 0.69256, 2.94047);
            cam_up_vec = vec3(-0.00325, 0.91181, -0.41059);
            break;
        case 439:
            cam_pos = vec3(0.14761, 0.68744, 2.94748);
            cam_up_vec = vec3(-0.00378, 0.91173, -0.41077);
            break;
        case 440:
            cam_pos = vec3(0.15281, 0.68252, 2.95408);
            cam_up_vec = vec3(-0.00429, 0.91164, -0.41096);
            break;
        case 441:
            cam_pos = vec3(0.15794, 0.67779, 2.96028);
            cam_up_vec = vec3(-0.00480, 0.91156, -0.41113);
            break;
        case 442:
            cam_pos = vec3(0.16299, 0.67324, 2.96610);
            cam_up_vec = vec3(-0.00529, 0.91148, -0.41131);
            break;
        case 443:
            cam_pos = vec3(0.16797, 0.66888, 2.97155);
            cam_up_vec = vec3(-0.00578, 0.91140, -0.41148);
            break;
        case 444:
            cam_pos = vec3(0.17287, 0.66468, 2.97664);
            cam_up_vec = vec3(-0.00626, 0.91132, -0.41164);
            break;
        case 445:
            cam_pos = vec3(0.17769, 0.66066, 2.98139);
            cam_up_vec = vec3(-0.00673, 0.91125, -0.41180);
            break;
        case 446:
            cam_pos = vec3(0.18243, 0.65679, 2.98581);
            cam_up_vec = vec3(-0.00719, 0.91117, -0.41196);
            break;
        case 447:
            cam_pos = vec3(0.18710, 0.65308, 2.98992);
            cam_up_vec = vec3(-0.00764, 0.91110, -0.41211);
            break;
        case 448:
            cam_pos = vec3(0.19168, 0.64952, 2.99372);
            cam_up_vec = vec3(-0.00808, 0.91103, -0.41226);
            break;
        case 449:
            cam_pos = vec3(0.19619, 0.64610, 2.99723);
            cam_up_vec = vec3(-0.00851, 0.91096, -0.41241);
            break;
        case 450:
            cam_pos = vec3(0.20062, 0.64283, 3.00046);
            cam_up_vec = vec3(-0.00894, 0.91089, -0.41255);
            break;
        case 451:
            cam_pos = vec3(0.20496, 0.63969, 3.00342);
            cam_up_vec = vec3(-0.00935, 0.91082, -0.41269);
            break;
        case 452:
            cam_pos = vec3(0.20923, 0.63668, 3.00612);
            cam_up_vec = vec3(-0.00976, 0.91076, -0.41283);
            break;
        case 453:
            cam_pos = vec3(0.21341, 0.63380, 3.00857);
            cam_up_vec = vec3(-0.01016, 0.91069, -0.41296);
            break;
        case 454:
            cam_pos = vec3(0.21752, 0.63104, 3.01077);
            cam_up_vec = vec3(-0.01055, 0.91063, -0.41309);
            break;
        case 455:
            cam_pos = vec3(0.22154, 0.62840, 3.01275);
            cam_up_vec = vec3(-0.01093, 0.91057, -0.41322);
            break;
        case 456:
            cam_pos = vec3(0.22549, 0.62587, 3.01450);
            cam_up_vec = vec3(-0.01130, 0.91051, -0.41334);
            break;
        case 457:
            cam_pos = vec3(0.22936, 0.62346, 3.01604);
            cam_up_vec = vec3(-0.01166, 0.91045, -0.41346);
            break;
        case 458:
            cam_pos = vec3(0.23314, 0.62116, 3.01737);
            cam_up_vec = vec3(-0.01202, 0.91039, -0.41358);
            break;
        case 459:
            cam_pos = vec3(0.23685, 0.61896, 3.01850);
            cam_up_vec = vec3(-0.01237, 0.91033, -0.41369);
            break;
        case 460:
            cam_pos = vec3(0.24047, 0.61686, 3.01944);
            cam_up_vec = vec3(-0.01271, 0.91028, -0.41380);
            break;
        case 461:
            cam_pos = vec3(0.24402, 0.61486, 3.02019);
            cam_up_vec = vec3(-0.01304, 0.91022, -0.41391);
            break;
        case 462:
            cam_pos = vec3(0.24749, 0.61296, 3.02076);
            cam_up_vec = vec3(-0.01336, 0.91017, -0.41402);
            break;
        case 463:
            cam_pos = vec3(0.25088, 0.61115, 3.02116);
            cam_up_vec = vec3(-0.01368, 0.91012, -0.41412);
            break;
        case 464:
            cam_pos = vec3(0.25419, 0.60943, 3.02139);
            cam_up_vec = vec3(-0.01399, 0.91007, -0.41422);
            break;
        case 465:
            cam_pos = vec3(0.25742, 0.60780, 3.02146);
            cam_up_vec = vec3(-0.01429, 0.91002, -0.41431);
            break;
        case 466:
            cam_pos = vec3(0.26058, 0.60626, 3.02137);
            cam_up_vec = vec3(-0.01458, 0.90997, -0.41441);
            break;
        case 467:
            cam_pos = vec3(0.26366, 0.60480, 3.02113);
            cam_up_vec = vec3(-0.01487, 0.90993, -0.41450);
            break;
        case 468:
            cam_pos = vec3(0.26666, 0.60342, 3.02074);
            cam_up_vec = vec3(-0.01515, 0.90988, -0.41459);
            break;
        case 469:
            cam_pos = vec3(0.26958, 0.60212, 3.02021);
            cam_up_vec = vec3(-0.01542, 0.90984, -0.41467);
            break;
        case 470:
            cam_pos = vec3(0.27243, 0.60089, 3.01954);
            cam_up_vec = vec3(-0.01568, 0.90980, -0.41476);
            break;
        case 471:
            cam_pos = vec3(0.27520, 0.59975, 3.01874);
            cam_up_vec = vec3(-0.01594, 0.90976, -0.41484);
            break;
        case 472:
            cam_pos = vec3(0.27789, 0.59867, 3.01781);
            cam_up_vec = vec3(-0.01619, 0.90971, -0.41492);
            break;
        case 473:
            cam_pos = vec3(0.28051, 0.59767, 3.01675);
            cam_up_vec = vec3(-0.01643, 0.90968, -0.41499);
            break;
        case 474:
            cam_pos = vec3(0.28306, 0.59674, 3.01558);
            cam_up_vec = vec3(-0.01666, 0.90964, -0.41507);
            break;
        case 475:
            cam_pos = vec3(0.28553, 0.59588, 3.01428);
            cam_up_vec = vec3(-0.01689, 0.90960, -0.41514);
            break;
        case 476:
            cam_pos = vec3(0.28792, 0.59508, 3.01287);
            cam_up_vec = vec3(-0.01711, 0.90957, -0.41521);
            break;
        case 477:
            cam_pos = vec3(0.29025, 0.59435, 3.01135);
            cam_up_vec = vec3(-0.01733, 0.90953, -0.41527);
            break;
        case 478:
            cam_pos = vec3(0.29250, 0.59368, 3.00972);
            cam_up_vec = vec3(-0.01753, 0.90950, -0.41534);
            break;
        case 479:
            cam_pos = vec3(0.29467, 0.59308, 3.00798);
            cam_up_vec = vec3(-0.01773, 0.90947, -0.41540);
            break;
        case 480:
            cam_pos = vec3(0.29678, 0.59253, 3.00615);
            cam_up_vec = vec3(-0.01793, 0.90943, -0.41546);
            break;
        case 481:
            cam_pos = vec3(0.29881, 0.59205, 3.00421);
            cam_up_vec = vec3(-0.01811, 0.90940, -0.41552);
            break;
        case 482:
            cam_pos = vec3(0.30077, 0.59162, 3.00218);
            cam_up_vec = vec3(-0.01829, 0.90938, -0.41557);
            break;
        case 483:
            cam_pos = vec3(0.30266, 0.59125, 3.00006);
            cam_up_vec = vec3(-0.01847, 0.90935, -0.41563);
            break;
        case 484:
            cam_pos = vec3(0.30448, 0.59094, 2.99784);
            cam_up_vec = vec3(-0.01863, 0.90932, -0.41568);
            break;
        case 485:
            cam_pos = vec3(0.30623, 0.59068, 2.99554);
            cam_up_vec = vec3(-0.01879, 0.90929, -0.41573);
            break;
        case 486:
            cam_pos = vec3(0.30791, 0.59047, 2.99314);
            cam_up_vec = vec3(-0.01895, 0.90927, -0.41578);
            break;
        case 487:
            cam_pos = vec3(0.30952, 0.59032, 2.99067);
            cam_up_vec = vec3(-0.01909, 0.90925, -0.41582);
            break;
        case 488:
            cam_pos = vec3(0.31107, 0.59022, 2.98811);
            cam_up_vec = vec3(-0.01923, 0.90922, -0.41586);
            break;
        case 489:
            cam_pos = vec3(0.31254, 0.59017, 2.98547);
            cam_up_vec = vec3(-0.01937, 0.90920, -0.41590);
            break;
        case 490:
            cam_pos = vec3(0.31395, 0.59016, 2.98276);
            cam_up_vec = vec3(-0.01950, 0.90918, -0.41594);
            break;
        case 491:
            cam_pos = vec3(0.31529, 0.59021, 2.97997);
            cam_up_vec = vec3(-0.01962, 0.90916, -0.41598);
            break;
        case 492:
            cam_pos = vec3(0.31656, 0.59031, 2.97710);
            cam_up_vec = vec3(-0.01973, 0.90914, -0.41602);
            break;
        case 493:
            cam_pos = vec3(0.31776, 0.59045, 2.97416);
            cam_up_vec = vec3(-0.01984, 0.90913, -0.41605);
            break;
        case 494:
            cam_pos = vec3(0.31890, 0.59064, 2.97116);
            cam_up_vec = vec3(-0.01995, 0.90911, -0.41608);
            break;
        case 495:
            cam_pos = vec3(0.31998, 0.59087, 2.96808);
            cam_up_vec = vec3(-0.02005, 0.90909, -0.41611);
            break;
        case 496:
            cam_pos = vec3(0.32099, 0.59115, 2.96494);
            cam_up_vec = vec3(-0.02014, 0.90908, -0.41614);
            break;
        case 497:
            cam_pos = vec3(0.32193, 0.59147, 2.96173);
            cam_up_vec = vec3(-0.02022, 0.90906, -0.41617);
            break;
        case 498:
            cam_pos = vec3(0.32281, 0.59183, 2.95845);
            cam_up_vec = vec3(-0.02030, 0.90905, -0.41619);
            break;
        case 499:
            cam_pos = vec3(0.32363, 0.59223, 2.95512);
            cam_up_vec = vec3(-0.02038, 0.90904, -0.41621);
            break;
        case 500:
            cam_pos = vec3(0.32438, 0.59268, 2.95172);
            cam_up_vec = vec3(-0.02045, 0.90903, -0.41623);
            break;
        case 501:
            cam_pos = vec3(0.32507, 0.59317, 2.94827);
            cam_up_vec = vec3(-0.02051, 0.90902, -0.41625);
            break;
        case 502:
            cam_pos = vec3(0.32570, 0.59369, 2.94475);
            cam_up_vec = vec3(-0.02057, 0.90901, -0.41627);
            break;
        case 503:
            cam_pos = vec3(0.32626, 0.59426, 2.94118);
            cam_up_vec = vec3(-0.02062, 0.90900, -0.41628);
            break;
        case 504:
            cam_pos = vec3(0.32677, 0.59487, 2.93755);
            cam_up_vec = vec3(-0.02066, 0.90899, -0.41630);
            break;
        case 505:
            cam_pos = vec3(0.32721, 0.59551, 2.93387);
            cam_up_vec = vec3(-0.02070, 0.90899, -0.41631);
            break;
        case 506:
            cam_pos = vec3(0.32759, 0.59619, 2.93013);
            cam_up_vec = vec3(-0.02074, 0.90898, -0.41632);
            break;
        case 507:
            cam_pos = vec3(0.32791, 0.59691, 2.92634);
            cam_up_vec = vec3(-0.02077, 0.90898, -0.41633);
            break;
        case 508:
            cam_pos = vec3(0.32817, 0.59766, 2.92250);
            cam_up_vec = vec3(-0.02079, 0.90897, -0.41634);
            break;
        case 509:
            cam_pos = vec3(0.32838, 0.59845, 2.91861);
            cam_up_vec = vec3(-0.02081, 0.90897, -0.41634);
            break;
        case 510:
            cam_pos = vec3(0.32852, 0.59927, 2.91467);
            cam_up_vec = vec3(-0.02082, 0.90897, -0.41635);
            break;
        case 511:
            cam_pos = vec3(0.32861, 0.60013, 2.91069);
            cam_up_vec = vec3(-0.02083, 0.90897, -0.41635);
            break;
        case 512:
            cam_pos = vec3(0.32863, 0.60102, 2.90665);
            cam_up_vec = vec3(-0.02083, 0.90897, -0.41635);
            break;
        case 513:
            cam_pos = vec3(1.47811, 2.15372, 2.16790);
            cam_up_vec = vec3(-0.02224, 0.99874, -0.03519);
            break;
        case 514:
            cam_pos = vec3(1.48885, 2.15978, 2.16076);
            cam_up_vec = vec3(-0.02275, 0.99917, -0.03381);
            break;
        case 515:
            cam_pos = vec3(1.49368, 2.15782, 2.15741);
            cam_up_vec = vec3(-0.02326, 0.99914, -0.03440);
            break;
        case 516:
            cam_pos = vec3(1.49850, 2.15586, 2.15404);
            cam_up_vec = vec3(-0.02377, 0.99911, -0.03498);
            break;
        case 517:
            cam_pos = vec3(1.50331, 2.15390, 2.15066);
            cam_up_vec = vec3(-0.02429, 0.99907, -0.03556);
            break;
        case 518:
            cam_pos = vec3(1.50812, 2.15194, 2.14727);
            cam_up_vec = vec3(-0.02480, 0.99904, -0.03614);
            break;
        case 519:
            cam_pos = vec3(1.51291, 2.14998, 2.14387);
            cam_up_vec = vec3(-0.02532, 0.99901, -0.03671);
            break;
        case 520:
            cam_pos = vec3(1.51769, 2.14802, 2.14045);
            cam_up_vec = vec3(-0.02584, 0.99897, -0.03728);
            break;
        case 521:
            cam_pos = vec3(1.52247, 2.14606, 2.13702);
            cam_up_vec = vec3(-0.02637, 0.99894, -0.03785);
            break;
        case 522:
            cam_pos = vec3(1.52724, 2.14410, 2.13358);
            cam_up_vec = vec3(-0.02690, 0.99890, -0.03842);
            break;
        case 523:
            cam_pos = vec3(1.53200, 2.14214, 2.13013);
            cam_up_vec = vec3(-0.02743, 0.99886, -0.03899);
            break;
        case 524:
            cam_pos = vec3(1.53674, 2.14018, 2.12667);
            cam_up_vec = vec3(-0.02796, 0.99883, -0.03955);
            break;
        case 525:
            cam_pos = vec3(1.54148, 2.13822, 2.12319);
            cam_up_vec = vec3(-0.02850, 0.99879, -0.04011);
            break;
        case 526:
            cam_pos = vec3(1.54622, 2.13626, 2.11970);
            cam_up_vec = vec3(-0.02904, 0.99875, -0.04067);
            break;
        case 527:
            cam_pos = vec3(-1.69579, 2.17056, 1.89713);
            cam_up_vec = vec3(0.00800, 0.99994, -0.00592);
            break;
        case 528:
            cam_pos = vec3(-1.74570, 2.16692, 1.90200);
            cam_up_vec = vec3(0.00878, 0.99994, -0.00611);
            break;
        case 529:
            cam_pos = vec3(-1.77869, 2.16304, 1.90790);
            cam_up_vec = vec3(0.00938, 0.99993, -0.00648);
            break;
        case 530:
            cam_pos = vec3(-1.81178, 2.15912, 1.91360);
            cam_up_vec = vec3(0.00998, 0.99993, -0.00684);
            break;
        case 531:
            cam_pos = vec3(-1.84497, 2.15515, 1.91911);
            cam_up_vec = vec3(0.01058, 0.99992, -0.00720);
            break;
        case 532:
            cam_pos = vec3(-1.87824, 2.15114, 1.92443);
            cam_up_vec = vec3(0.01119, 0.99991, -0.00756);
            break;
        case 533:
            cam_pos = vec3(-1.91161, 2.14708, 1.92956);
            cam_up_vec = vec3(0.01180, 0.99990, -0.00791);
            break;
        case 534:
            cam_pos = vec3(-1.94506, 2.14298, 1.93450);
            cam_up_vec = vec3(0.01241, 0.99989, -0.00826);
            break;
        case 535:
            cam_pos = vec3(-1.97861, 2.13884, 1.93924);
            cam_up_vec = vec3(0.01302, 0.99988, -0.00861);
            break;
        case 536:
            cam_pos = vec3(-2.01224, 2.13465, 1.94379);
            cam_up_vec = vec3(0.01364, 0.99987, -0.00895);
            break;
        case 537:
            cam_pos = vec3(-2.04597, 2.13041, 1.94814);
            cam_up_vec = vec3(0.01425, 0.99986, -0.00929);
            break;
        case 538:
            cam_pos = vec3(-2.07977, 2.12613, 1.95230);
            cam_up_vec = vec3(0.01487, 0.99984, -0.00962);
            break;
        case 539:
            cam_pos = vec3(-2.11367, 2.12181, 1.95627);
            cam_up_vec = vec3(0.01550, 0.99983, -0.00995);
            break;
        case 540:
            cam_pos = vec3(-2.14764, 2.11744, 1.96003);
            cam_up_vec = vec3(0.01612, 0.99982, -0.01028);
            break;
        case 541:
            cam_pos = vec3(-2.18170, 2.11303, 1.96361);
            cam_up_vec = vec3(0.01675, 0.99980, -0.01060);
            break;
        case 542:
            cam_pos = vec3(-2.21585, 2.10858, 1.96698);
            cam_up_vec = vec3(0.01738, 0.99979, -0.01091);
            break;
        case 543:
            cam_pos = vec3(-2.25007, 2.10408, 1.97016);
            cam_up_vec = vec3(0.01801, 0.99977, -0.01123);
            break;
        case 544:
            cam_pos = vec3(-2.28438, 2.09953, 1.97314);
            cam_up_vec = vec3(0.01864, 0.99976, -0.01154);
            break;
        case 545:
            cam_pos = vec3(-2.31876, 2.09494, 1.97593);
            cam_up_vec = vec3(0.01928, 0.99974, -0.01184);
            break;
        case 546:
            cam_pos = vec3(-2.35322, 2.09031, 1.97851);
            cam_up_vec = vec3(0.01992, 0.99973, -0.01214);
            break;
        case 547:
            cam_pos = vec3(-2.38776, 2.08564, 1.98090);
            cam_up_vec = vec3(0.02056, 0.99971, -0.01244);
            break;
        case 548:
            cam_pos = vec3(-2.42238, 2.08091, 1.98308);
            cam_up_vec = vec3(0.02120, 0.99969, -0.01273);
            break;
        case 549:
            cam_pos = vec3(-2.45707, 2.07615, 1.98507);
            cam_up_vec = vec3(0.02185, 0.99968, -0.01302);
            break;
        case 550:
            cam_pos = vec3(-2.49184, 2.07134, 1.98686);
            cam_up_vec = vec3(0.02249, 0.99966, -0.01330);
            break;
        case 551:
            cam_pos = vec3(-2.52667, 2.06648, 1.98844);
            cam_up_vec = vec3(0.02314, 0.99964, -0.01358);
            break;
        case 552:
            cam_pos = vec3(-2.56158, 2.06159, 1.98983);
            cam_up_vec = vec3(0.02379, 0.99962, -0.01386);
            break;
        case 553:
            cam_pos = vec3(-2.59657, 2.05664, 1.99101);
            cam_up_vec = vec3(0.02445, 0.99960, -0.01413);
            break;
        case 554:
            cam_pos = vec3(-2.63162, 2.05166, 1.99199);
            cam_up_vec = vec3(0.02510, 0.99958, -0.01440);
            break;
        case 555:
            cam_pos = vec3(-2.66674, 2.04663, 1.99277);
            cam_up_vec = vec3(0.02576, 0.99956, -0.01466);
            break;
        case 556:
            cam_pos = vec3(-2.70193, 2.04155, 1.99334);
            cam_up_vec = vec3(0.02642, 0.99954, -0.01492);
            break;
        case 557:
            cam_pos = vec3(-2.73719, 2.03643, 1.99372);
            cam_up_vec = vec3(0.02708, 0.99952, -0.01518);
            break;
        case 558:
            cam_pos = vec3(-2.77251, 2.03127, 1.99388);
            cam_up_vec = vec3(0.02774, 0.99950, -0.01543);
            break;
        case 559:
            cam_pos = vec3(-2.80790, 2.02606, 1.99385);
            cam_up_vec = vec3(0.02841, 0.99947, -0.01567);
            break;
        case 560:
            cam_pos = vec3(-2.84335, 2.02081, 1.99361);
            cam_up_vec = vec3(0.02908, 0.99945, -0.01592);
            break;
        case 561:
            cam_pos = vec3(-2.87886, 2.01551, 1.99316);
            cam_up_vec = vec3(0.02975, 0.99943, -0.01615);
            break;
        case 562:
            cam_pos = vec3(-2.91444, 2.01017, 1.99252);
            cam_up_vec = vec3(0.03042, 0.99940, -0.01639);
            break;
        case 563:
            cam_pos = vec3(-2.95008, 2.00479, 1.99166);
            cam_up_vec = vec3(0.03109, 0.99938, -0.01662);
            break;
        case 564:
            cam_pos = vec3(-2.98577, 1.99936, 1.99060);
            cam_up_vec = vec3(0.03177, 0.99935, -0.01684);
            break;
        case 565:
            cam_pos = vec3(-3.02153, 1.99388, 1.98933);
            cam_up_vec = vec3(0.03244, 0.99933, -0.01706);
            break;
        case 566:
            cam_pos = vec3(-3.05734, 1.98837, 1.98786);
            cam_up_vec = vec3(0.03312, 0.99930, -0.01728);
            break;
        case 567:
            cam_pos = vec3(-3.09321, 1.98280, 1.98618);
            cam_up_vec = vec3(0.03380, 0.99928, -0.01749);
            break;
        case 568:
            cam_pos = vec3(-3.12914, 1.97720, 1.98429);
            cam_up_vec = vec3(0.03448, 0.99925, -0.01770);
            break;
        case 569:
            cam_pos = vec3(-3.16512, 1.97155, 1.98219);
            cam_up_vec = vec3(0.03517, 0.99922, -0.01790);
            break;
        case 570:
            cam_pos = vec3(-3.20115, 1.96585, 1.97989);
            cam_up_vec = vec3(0.03585, 0.99919, -0.01810);
            break;
        case 571:
            cam_pos = vec3(-3.23724, 1.96011, 1.97738);
            cam_up_vec = vec3(0.03654, 0.99916, -0.01829);
            break;
        case 572:
            cam_pos = vec3(-3.27338, 1.95433, 1.97465);
            cam_up_vec = vec3(0.03723, 0.99914, -0.01848);
            break;
        case 573:
            cam_pos = vec3(-3.30956, 1.94850, 1.97172);
            cam_up_vec = vec3(0.03792, 0.99911, -0.01867);
            break;
        case 574:
            cam_pos = vec3(-3.34580, 1.94263, 1.96859);
            cam_up_vec = vec3(0.03861, 0.99908, -0.01885);
            break;
        case 575:
            cam_pos = vec3(-3.38209, 1.93672, 1.96524);
            cam_up_vec = vec3(0.03930, 0.99905, -0.01903);
            break;
        case 576:
            cam_pos = vec3(-3.41842, 1.93076, 1.96168);
            cam_up_vec = vec3(0.04000, 0.99902, -0.01920);
            break;
        case 577:
            cam_pos = vec3(-3.45480, 1.92475, 1.95791);
            cam_up_vec = vec3(0.04070, 0.99898, -0.01937);
            break;
        case 578:
            cam_pos = vec3(-3.49122, 1.91871, 1.95393);
            cam_up_vec = vec3(0.04139, 0.99895, -0.01953);
            break;
        case 579:
            cam_pos = vec3(-3.52769, 1.91261, 1.94974);
            cam_up_vec = vec3(0.04209, 0.99892, -0.01969);
            break;
        case 580:
            cam_pos = vec3(-3.56420, 1.90648, 1.94534);
            cam_up_vec = vec3(0.04280, 0.99889, -0.01984);
            break;
        case 581:
            cam_pos = vec3(-3.60075, 1.90030, 1.94072);
            cam_up_vec = vec3(0.04350, 0.99885, -0.01999);
            break;
        case 582:
            cam_pos = vec3(-3.63734, 1.89407, 1.93590);
            cam_up_vec = vec3(0.04420, 0.99882, -0.02014);
            break;
        case 583:
            cam_pos = vec3(-3.67397, 1.88780, 1.93086);
            cam_up_vec = vec3(0.04491, 0.99879, -0.02028);
            break;
        case 584:
            cam_pos = vec3(-3.71064, 1.88149, 1.92561);
            cam_up_vec = vec3(0.04562, 0.99875, -0.02042);
            break;
        case 585:
            cam_pos = vec3(-5.46054, 4.39953, 3.18061);
            cam_up_vec = vec3(-0.27218, 0.93272, 0.23443);
            break;
        case 586:
            cam_pos = vec3(-5.44522, 4.40699, 3.16556);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 587:
            cam_pos = vec3(-5.41945, 4.39958, 3.14300);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 588:
            cam_pos = vec3(-5.39368, 4.39217, 3.12043);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 589:
            cam_pos = vec3(-5.36790, 4.38477, 3.09786);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 590:
            cam_pos = vec3(-5.34213, 4.37736, 3.07529);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 591:
            cam_pos = vec3(-5.31636, 4.36995, 3.05273);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 592:
            cam_pos = vec3(-5.29059, 4.36254, 3.03016);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 593:
            cam_pos = vec3(-5.26482, 4.35514, 3.00759);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 594:
            cam_pos = vec3(-5.23905, 4.34773, 2.98502);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 595:
            cam_pos = vec3(-5.21328, 4.34032, 2.96246);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 596:
            cam_pos = vec3(-5.18750, 4.33291, 2.93989);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 597:
            cam_pos = vec3(-5.16173, 4.32551, 2.91732);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 598:
            cam_pos = vec3(-5.13596, 4.31810, 2.89475);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 599:
            cam_pos = vec3(-5.11019, 4.31069, 2.87219);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 600:
            cam_pos = vec3(-5.08442, 4.30328, 2.84962);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 601:
            cam_pos = vec3(-5.05865, 4.29588, 2.82705);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 602:
            cam_pos = vec3(-5.03288, 4.28847, 2.80448);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 603:
            cam_pos = vec3(-5.00711, 4.28106, 2.78192);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 604:
            cam_pos = vec3(-4.98133, 4.27365, 2.75935);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 605:
            cam_pos = vec3(-4.95556, 4.26625, 2.73678);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 606:
            cam_pos = vec3(-4.92979, 4.25884, 2.71421);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 607:
            cam_pos = vec3(-4.90402, 4.25143, 2.69165);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 608:
            cam_pos = vec3(-4.87825, 4.24402, 2.66908);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 609:
            cam_pos = vec3(-4.85248, 4.23662, 2.64651);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 610:
            cam_pos = vec3(-4.82671, 4.22921, 2.62394);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 611:
            cam_pos = vec3(-4.80094, 4.22180, 2.60138);
            cam_up_vec = vec3(-0.27405, 0.93233, 0.23593);
            break;
        case 612:
            cam_pos = vec3(-0.15489, 1.15505, 1.32142);
            cam_up_vec = vec3(-0.00217, 0.99834, -0.04823);
            break;
        case 613:
            cam_pos = vec3(-0.12552, 1.13784, 1.31361);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 614:
            cam_pos = vec3(-0.12475, 1.13952, 1.31369);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 615:
            cam_pos = vec3(-0.12399, 1.14120, 1.31377);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 616:
            cam_pos = vec3(-0.12322, 1.14289, 1.31384);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 617:
            cam_pos = vec3(-0.12245, 1.14457, 1.31392);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 618:
            cam_pos = vec3(-0.12169, 1.14625, 1.31400);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 619:
            cam_pos = vec3(-0.12092, 1.14793, 1.31407);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 620:
            cam_pos = vec3(-0.12016, 1.14961, 1.31415);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 621:
            cam_pos = vec3(-0.11939, 1.15129, 1.31423);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 622:
            cam_pos = vec3(-0.11862, 1.15298, 1.31430);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 623:
            cam_pos = vec3(-0.11786, 1.15466, 1.31438);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 624:
            cam_pos = vec3(-0.11709, 1.15634, 1.31445);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 625:
            cam_pos = vec3(-0.11633, 1.15802, 1.31453);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 626:
            cam_pos = vec3(-0.11556, 1.15970, 1.31461);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 627:
            cam_pos = vec3(-0.11479, 1.16138, 1.31468);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 628:
            cam_pos = vec3(-0.11403, 1.16306, 1.31476);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 629:
            cam_pos = vec3(-0.11326, 1.16475, 1.31484);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 630:
            cam_pos = vec3(-0.11250, 1.16643, 1.31491);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 631:
            cam_pos = vec3(-0.11173, 1.16811, 1.31499);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 632:
            cam_pos = vec3(-0.11096, 1.16979, 1.31507);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 633:
            cam_pos = vec3(-0.11020, 1.17147, 1.31514);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 634:
            cam_pos = vec3(-0.10943, 1.17315, 1.31522);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 635:
            cam_pos = vec3(-0.10867, 1.17484, 1.31530);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 636:
            cam_pos = vec3(-0.10790, 1.17652, 1.31537);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 637:
            cam_pos = vec3(-0.10713, 1.17820, 1.31545);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 638:
            cam_pos = vec3(-0.10637, 1.17988, 1.31553);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 639:
            cam_pos = vec3(-0.10560, 1.18156, 1.31560);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 640:
            cam_pos = vec3(-0.10483, 1.18324, 1.31568);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 641:
            cam_pos = vec3(-0.10407, 1.18492, 1.31575);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 642:
            cam_pos = vec3(-0.10330, 1.18661, 1.31583);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 643:
            cam_pos = vec3(-0.10254, 1.18829, 1.31591);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 644:
            cam_pos = vec3(-0.10177, 1.18997, 1.31598);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 645:
            cam_pos = vec3(-0.10100, 1.19165, 1.31606);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 646:
            cam_pos = vec3(-0.10024, 1.19333, 1.31614);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 647:
            cam_pos = vec3(-0.09947, 1.19501, 1.31621);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 648:
            cam_pos = vec3(-0.09871, 1.19670, 1.31629);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 649:
            cam_pos = vec3(-0.09794, 1.19838, 1.31637);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 650:
            cam_pos = vec3(-0.09717, 1.20006, 1.31644);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 651:
            cam_pos = vec3(-0.09641, 1.20174, 1.31652);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 652:
            cam_pos = vec3(-0.09564, 1.20342, 1.31660);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 653:
            cam_pos = vec3(-0.09488, 1.20510, 1.31667);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 654:
            cam_pos = vec3(-0.09411, 1.20678, 1.31675);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 655:
            cam_pos = vec3(-0.09334, 1.20847, 1.31683);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 656:
            cam_pos = vec3(-0.09258, 1.21015, 1.31690);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 657:
            cam_pos = vec3(-0.09181, 1.21183, 1.31698);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 658:
            cam_pos = vec3(-0.09104, 1.21351, 1.31706);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 659:
            cam_pos = vec3(-0.09028, 1.21519, 1.31713);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 660:
            cam_pos = vec3(-0.08951, 1.21687, 1.31721);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 661:
            cam_pos = vec3(-0.08875, 1.21856, 1.31728);
            cam_up_vec = vec3(-0.00050, 0.99875, -0.04998);
            break;
        case 662:
            cam_pos = vec3(1.97615, 2.24797, 1.06978);
            cam_up_vec = vec3(-0.02225, 0.99954, -0.02015);
            break;
        case 663:
            cam_pos = vec3(1.97745, 2.25483, 1.08202);
            cam_up_vec = vec3(-0.02225, 0.99955, -0.02011);
            break;
        case 664:
            cam_pos = vec3(1.96481, 2.25483, 1.09590);
            cam_up_vec = vec3(-0.02210, 0.99955, -0.02028);
            break;
        case 665:
            cam_pos = vec3(1.95206, 2.25483, 1.10970);
            cam_up_vec = vec3(-0.02195, 0.99955, -0.02044);
            break;
        case 666:
            cam_pos = vec3(1.93921, 2.25483, 1.12340);
            cam_up_vec = vec3(-0.02180, 0.99955, -0.02060);
            break;
        case 667:
            cam_pos = vec3(1.92627, 2.25483, 1.13700);
            cam_up_vec = vec3(-0.02165, 0.99955, -0.02076);
            break;
        case 668:
            cam_pos = vec3(1.91322, 2.25483, 1.15051);
            cam_up_vec = vec3(-0.02150, 0.99955, -0.02092);
            break;
        case 669:
            cam_pos = vec3(1.90007, 2.25483, 1.16392);
            cam_up_vec = vec3(-0.02134, 0.99955, -0.02108);
            break;
        case 670:
            cam_pos = vec3(1.88682, 2.25483, 1.17723);
            cam_up_vec = vec3(-0.02119, 0.99955, -0.02123);
            break;
        case 671:
            cam_pos = vec3(1.87348, 2.25483, 1.19045);
            cam_up_vec = vec3(-0.02103, 0.99955, -0.02139);
            break;
        case 672:
            cam_pos = vec3(1.86004, 2.25483, 1.20357);
            cam_up_vec = vec3(-0.02087, 0.99955, -0.02154);
            break;
        case 673:
            cam_pos = vec3(1.84650, 2.25483, 1.21659);
            cam_up_vec = vec3(-0.02071, 0.99955, -0.02170);
            break;
        case 674:
            cam_pos = vec3(1.83287, 2.25483, 1.22950);
            cam_up_vec = vec3(-0.02055, 0.99955, -0.02185);
            break;
        case 675:
            cam_pos = vec3(1.81914, 2.25483, 1.24232);
            cam_up_vec = vec3(-0.02039, 0.99955, -0.02200);
            break;
        case 676:
            cam_pos = vec3(1.80532, 2.25483, 1.25504);
            cam_up_vec = vec3(-0.02023, 0.99955, -0.02215);
            break;
        case 677:
            cam_pos = vec3(1.79141, 2.25483, 1.26765);
            cam_up_vec = vec3(-0.02006, 0.99955, -0.02230);
            break;
        case 678:
            cam_pos = vec3(1.77740, 2.25483, 1.28016);
            cam_up_vec = vec3(-0.01990, 0.99955, -0.02244);
            break;
        case 679:
            cam_pos = vec3(1.76330, 2.25483, 1.29257);
            cam_up_vec = vec3(-0.01973, 0.99955, -0.02259);
            break;
        case 680:
            cam_pos = vec3(1.74911, 2.25483, 1.30487);
            cam_up_vec = vec3(-0.01957, 0.99955, -0.02274);
            break;
        case 681:
            cam_pos = vec3(1.73483, 2.25483, 1.31707);
            cam_up_vec = vec3(-0.01940, 0.99955, -0.02288);
            break;
        case 682:
            cam_pos = vec3(7.66379, 1.85569, 5.75011);
            cam_up_vec = vec3(0.00779, 0.99995, 0.00584);
            break;
        case 683:
            cam_pos = vec3(7.70659, 1.85587, 5.79521);
            cam_up_vec = vec3(0.00858, 0.99994, 0.00646);
            break;
        case 684:
            cam_pos = vec3(7.70868, 1.85883, 5.80990);
            cam_up_vec = vec3(0.00920, 0.99993, 0.00690);
            break;
        case 685:
            cam_pos = vec3(7.71076, 1.86180, 5.82452);
            cam_up_vec = vec3(0.00981, 0.99993, 0.00732);
            break;
        case 686:
            cam_pos = vec3(7.71283, 1.86479, 5.83908);
            cam_up_vec = vec3(0.01043, 0.99992, 0.00775);
            break;
        case 687:
            cam_pos = vec3(7.71489, 1.86780, 5.85356);
            cam_up_vec = vec3(0.01105, 0.99991, 0.00817);
            break;
        case 688:
            cam_pos = vec3(7.71693, 1.87082, 5.86798);
            cam_up_vec = vec3(0.01167, 0.99990, 0.00860);
            break;
        case 689:
            cam_pos = vec3(7.71896, 1.87387, 5.88234);
            cam_up_vec = vec3(0.01229, 0.99988, 0.00901);
            break;
        case 690:
            cam_pos = vec3(7.72098, 1.87692, 5.89662);
            cam_up_vec = vec3(0.01292, 0.99987, 0.00943);
            break;
        case 691:
            cam_pos = vec3(7.72299, 1.88000, 5.91084);
            cam_up_vec = vec3(0.01354, 0.99986, 0.00984);
            break;
        case 692:
            cam_pos = vec3(7.72498, 1.88309, 5.92499);
            cam_up_vec = vec3(0.01417, 0.99985, 0.01025);
            break;
        case 693:
            cam_pos = vec3(7.72696, 1.88620, 5.93907);
            cam_up_vec = vec3(0.01480, 0.99983, 0.01066);
            break;
        case 694:
            cam_pos = vec3(7.72893, 1.88932, 5.95308);
            cam_up_vec = vec3(0.01543, 0.99982, 0.01107);
            break;
        case 695:
            cam_pos = vec3(7.73089, 1.89246, 5.96702);
            cam_up_vec = vec3(0.01607, 0.99981, 0.01147);
            break;
        case 696:
            cam_pos = vec3(7.73282, 1.89562, 5.98090);
            cam_up_vec = vec3(0.01670, 0.99979, 0.01187);
            break;
        case 697:
            cam_pos = vec3(7.73475, 1.89880, 5.99471);
            cam_up_vec = vec3(0.01734, 0.99977, 0.01227);
            break;
        case 698:
            cam_pos = vec3(7.73666, 1.90199, 6.00846);
            cam_up_vec = vec3(0.01798, 0.99976, 0.01266);
            break;
        case 699:
            cam_pos = vec3(7.73856, 1.90520, 6.02213);
            cam_up_vec = vec3(0.01862, 0.99974, 0.01306);
            break;
        case 700:
            cam_pos = vec3(7.74045, 1.90842, 6.03574);
            cam_up_vec = vec3(0.01926, 0.99972, 0.01345);
            break;
        case 701:
            cam_pos = vec3(7.74231, 1.91166, 6.04928);
            cam_up_vec = vec3(0.01991, 0.99971, 0.01383);
            break;
        case 702:
            cam_pos = vec3(7.74417, 1.91492, 6.06275);
            cam_up_vec = vec3(0.02055, 0.99969, 0.01422);
            break;
        case 703:
            cam_pos = vec3(7.74600, 1.91820, 6.07615);
            cam_up_vec = vec3(0.02120, 0.99967, 0.01460);
            break;
        case 704:
            cam_pos = vec3(7.74783, 1.92149, 6.08948);
            cam_up_vec = vec3(0.02185, 0.99965, 0.01498);
            break;
        case 705:
            cam_pos = vec3(7.74963, 1.92480, 6.10275);
            cam_up_vec = vec3(0.02250, 0.99963, 0.01535);
            break;
        case 706:
            cam_pos = vec3(7.75142, 1.92812, 6.11596);
            cam_up_vec = vec3(0.02315, 0.99961, 0.01573);
            break;
        case 707:
            cam_pos = vec3(7.75320, 1.93147, 6.12909);
            cam_up_vec = vec3(0.02381, 0.99959, 0.01610);
            break;
        case 708:
            cam_pos = vec3(7.75496, 1.93482, 6.14215);
            cam_up_vec = vec3(0.02447, 0.99957, 0.01647);
            break;
        case 709:
            cam_pos = vec3(7.75670, 1.93820, 6.15515);
            cam_up_vec = vec3(0.02512, 0.99954, 0.01683);
            break;
        case 710:
            cam_pos = vec3(7.75843, 1.94159, 6.16808);
            cam_up_vec = vec3(0.02578, 0.99952, 0.01719);
            break;
        case 711:
            cam_pos = vec3(7.76013, 1.94500, 6.18094);
            cam_up_vec = vec3(0.02644, 0.99950, 0.01755);
            break;
        case 712:
            cam_pos = vec3(7.76182, 1.94843, 6.19374);
            cam_up_vec = vec3(0.02711, 0.99947, 0.01791);
            break;
        case 713:
            cam_pos = vec3(7.76350, 1.95187, 6.20646);
            cam_up_vec = vec3(0.02777, 0.99945, 0.01826);
            break;
        case 714:
            cam_pos = vec3(7.76515, 1.95533, 6.21912);
            cam_up_vec = vec3(0.02844, 0.99942, 0.01862);
            break;
        case 715:
            cam_pos = vec3(7.76679, 1.95880, 6.23172);
            cam_up_vec = vec3(0.02910, 0.99940, 0.01896);
            break;
        case 716:
            cam_pos = vec3(7.76841, 1.96230, 6.24424);
            cam_up_vec = vec3(0.02977, 0.99937, 0.01931);
            break;
        case 717:
            cam_pos = vec3(7.77001, 1.96581, 6.25670);
            cam_up_vec = vec3(0.03044, 0.99934, 0.01965);
            break;
        case 718:
            cam_pos = vec3(7.77160, 1.96933, 6.26909);
            cam_up_vec = vec3(0.03112, 0.99932, 0.01999);
            break;
        case 719:
            cam_pos = vec3(7.77316, 1.97287, 6.28141);
            cam_up_vec = vec3(0.03179, 0.99929, 0.02033);
            break;
        case 720:
            cam_pos = vec3(7.77471, 1.97643, 6.29366);
            cam_up_vec = vec3(0.03246, 0.99926, 0.02067);
            break;
        case 721:
            cam_pos = vec3(7.77624, 1.98001, 6.30585);
            cam_up_vec = vec3(0.03314, 0.99923, 0.02100);
            break;
        case 722:
            cam_pos = vec3(7.77774, 1.98360, 6.31797);
            cam_up_vec = vec3(0.03382, 0.99920, 0.02133);
            break;
        case 723:
            cam_pos = vec3(7.77923, 1.98721, 6.33003);
            cam_up_vec = vec3(0.03450, 0.99917, 0.02165);
            break;
        case 724:
            cam_pos = vec3(7.78070, 1.99084, 6.34202);
            cam_up_vec = vec3(0.03518, 0.99914, 0.02198);
            break;
        case 725:
            cam_pos = vec3(7.78215, 1.99448, 6.35393);
            cam_up_vec = vec3(0.03586, 0.99911, 0.02230);
            break;
        case 726:
            cam_pos = vec3(7.78357, 1.99814, 6.36579);
            cam_up_vec = vec3(0.03655, 0.99908, 0.02262);
            break;
        case 727:
            cam_pos = vec3(7.78498, 2.00181, 6.37757);
            cam_up_vec = vec3(0.03724, 0.99904, 0.02293);
            break;
        case 728:
            cam_pos = vec3(7.78637, 2.00551, 6.38929);
            cam_up_vec = vec3(0.03792, 0.99901, 0.02324);
            break;
        case 729:
            cam_pos = vec3(7.78774, 2.00921, 6.40094);
            cam_up_vec = vec3(0.03861, 0.99898, 0.02355);
            break;
        case 730:
            cam_pos = vec3(7.78908, 2.01294, 6.41252);
            cam_up_vec = vec3(0.03930, 0.99894, 0.02386);
            break;
        case 731:
            cam_pos = vec3(7.79040, 2.01668, 6.42404);
            cam_up_vec = vec3(0.03999, 0.99891, 0.02416);
            break;
        case 732:
            cam_pos = vec3(7.79171, 2.02044, 6.43549);
            cam_up_vec = vec3(0.04069, 0.99887, 0.02447);
            break;
        case 733:
            cam_pos = vec3(7.79298, 2.02421, 6.44687);
            cam_up_vec = vec3(0.04138, 0.99884, 0.02476);
            break;
        case 734:
            cam_pos = vec3(7.79424, 2.02801, 6.45818);
            cam_up_vec = vec3(0.04208, 0.99880, 0.02506);
            break;
        case 735:
            cam_pos = vec3(7.79548, 2.03181, 6.46943);
            cam_up_vec = vec3(0.04278, 0.99876, 0.02535);
            break;
        case 736:
            cam_pos = vec3(7.79669, 2.03564, 6.48061);
            cam_up_vec = vec3(0.04347, 0.99873, 0.02564);
            break;
        case 737:
            cam_pos = vec3(7.79789, 2.03948, 6.49173);
            cam_up_vec = vec3(0.04417, 0.99869, 0.02593);
            break;
        case 738:
            cam_pos = vec3(7.79905, 2.04334, 6.50278);
            cam_up_vec = vec3(0.04488, 0.99865, 0.02621);
            break;
        case 739:
            cam_pos = vec3(7.80020, 2.04721, 6.51376);
            cam_up_vec = vec3(0.04558, 0.99861, 0.02649);
            break;
        case 740:
            cam_pos = vec3(7.80132, 2.05110, 6.52467);
            cam_up_vec = vec3(0.04628, 0.99857, 0.02677);
            break;
        case 741:
            cam_pos = vec3(7.80242, 2.05501, 6.53552);
            cam_up_vec = vec3(0.04699, 0.99853, 0.02705);
            break;
        case 742:
            cam_pos = vec3(7.80350, 2.05893, 6.54630);
            cam_up_vec = vec3(0.04770, 0.99849, 0.02732);
            break;
        case 743:
            cam_pos = vec3(7.80455, 2.06288, 6.55702);
            cam_up_vec = vec3(0.04841, 0.99845, 0.02759);
            break;
        case 744:
            cam_pos = vec3(7.80558, 2.06683, 6.56767);
            cam_up_vec = vec3(0.04912, 0.99840, 0.02785);
            break;
        case 745:
            cam_pos = vec3(7.80658, 2.07081, 6.57825);
            cam_up_vec = vec3(0.04983, 0.99836, 0.02812);
            break;
        case 746:
            cam_pos = vec3(7.80756, 2.07480, 6.58876);
            cam_up_vec = vec3(0.05054, 0.99832, 0.02838);
            break;
        case 747:
            cam_pos = vec3(7.80851, 2.07880, 6.59921);
            cam_up_vec = vec3(0.05125, 0.99828, 0.02864);
            break;
        case 748:
            cam_pos = vec3(7.80944, 2.08283, 6.60959);
            cam_up_vec = vec3(0.05197, 0.99823, 0.02889);
            break;
        case 749:
            cam_pos = vec3(7.81034, 2.08687, 6.61991);
            cam_up_vec = vec3(0.05268, 0.99819, 0.02914);
            break;
        case 750:
            cam_pos = vec3(7.81122, 2.09092, 6.63016);
            cam_up_vec = vec3(0.05340, 0.99814, 0.02939);
            break;
        case 751:
            cam_pos = vec3(7.81208, 2.09499, 6.64035);
            cam_up_vec = vec3(0.05412, 0.99809, 0.02964);
            break;
        case 752:
            cam_pos = vec3(7.81290, 2.09908, 6.65046);
            cam_up_vec = vec3(0.05484, 0.99805, 0.02988);
            break;
        case 753:
            cam_pos = vec3(7.81370, 2.10319, 6.66051);
            cam_up_vec = vec3(0.05556, 0.99800, 0.03012);
            break;
        case 754:
            cam_pos = vec3(7.81448, 2.10731, 6.67050);
            cam_up_vec = vec3(0.05629, 0.99795, 0.03036);
            break;
        case 755:
            cam_pos = vec3(7.81523, 2.11145, 6.68042);
            cam_up_vec = vec3(0.05701, 0.99790, 0.03059);
            break;
        case 756:
            cam_pos = vec3(7.81595, 2.11560, 6.69027);
            cam_up_vec = vec3(0.05773, 0.99786, 0.03082);
            break;
        case 757:
            cam_pos = vec3(7.81665, 2.11978, 6.70006);
            cam_up_vec = vec3(0.05846, 0.99781, 0.03105);
            break;
        case 758:
            cam_pos = vec3(7.81731, 2.12396, 6.70978);
            cam_up_vec = vec3(0.05919, 0.99776, 0.03128);
            break;
        case 759:
            cam_pos = vec3(7.81795, 2.12817, 6.71944);
            cam_up_vec = vec3(0.05992, 0.99771, 0.03150);
            break;
        case 760:
            cam_pos = vec3(7.81857, 2.13239, 6.72903);
            cam_up_vec = vec3(0.06065, 0.99766, 0.03172);
            break;
        case 761:
            cam_pos = vec3(7.81915, 2.13663, 6.73855);
            cam_up_vec = vec3(0.06138, 0.99760, 0.03194);
            break;
        case 762:
            cam_pos = vec3(7.81971, 2.14088, 6.74801);
            cam_up_vec = vec3(0.06211, 0.99755, 0.03215);
            break;
        case 763:
            cam_pos = vec3(-0.16909, 1.10378, 5.59157);
            cam_up_vec = vec3(0.01061, 0.97606, -0.21608);
            break;
        case 764:
            cam_pos = vec3(-0.23261, 1.08795, 5.63068);
            cam_up_vec = vec3(0.01010, 0.97609, -0.21715);
            break;
        case 765:
            cam_pos = vec3(-0.23555, 1.07691, 5.69906);
            cam_up_vec = vec3(0.00994, 0.97635, -0.21595);
            break;
        case 766:
            cam_pos = vec3(-0.23895, 1.06401, 5.78033);
            cam_up_vec = vec3(0.00976, 0.97667, -0.21453);
            break;
        case 767:
            cam_pos = vec3(-0.24263, 1.04996, 5.87066);
            cam_up_vec = vec3(0.00955, 0.97702, -0.21294);
            break;
        case 768:
            cam_pos = vec3(-0.24646, 1.03518, 5.96777);
            cam_up_vec = vec3(0.00933, 0.97739, -0.21124);
            break;
        case 769:
            cam_pos = vec3(-0.25035, 1.01997, 6.07018);
            cam_up_vec = vec3(0.00910, 0.97778, -0.20945);
            break;
        case 770:
            cam_pos = vec3(-0.25425, 1.00453, 6.17684);
            cam_up_vec = vec3(0.00887, 0.97818, -0.20758);
            break;
        case 771:
            cam_pos = vec3(-0.25811, 0.98902, 6.28701);
            cam_up_vec = vec3(0.00863, 0.97859, -0.20565);
            break;
        case 772:
            cam_pos = vec3(-0.26191, 0.97356, 6.40011);
            cam_up_vec = vec3(0.00839, 0.97900, -0.20367);
            break;
        case 773:
            cam_pos = vec3(-0.26561, 0.95823, 6.51570);
            cam_up_vec = vec3(0.00814, 0.97943, -0.20164);
            break;
        case 774:
            cam_pos = vec3(-0.26918, 0.94312, 6.63340);
            cam_up_vec = vec3(0.00790, 0.97985, -0.19958);
            break;
        case 775:
            cam_pos = vec3(-0.27261, 0.92829, 6.75293);
            cam_up_vec = vec3(0.00765, 0.98028, -0.19748);
            break;
        case 776:
            cam_pos = vec3(-0.27589, 0.91378, 6.87405);
            cam_up_vec = vec3(0.00741, 0.98070, -0.19536);
            break;
        case 777:
            cam_pos = vec3(-0.27900, 0.89964, 6.99654);
            cam_up_vec = vec3(0.00716, 0.98113, -0.19322);
            break;
        case 778:
            cam_pos = vec3(-0.28194, 0.88592, 7.12024);
            cam_up_vec = vec3(0.00692, 0.98156, -0.19105);
            break;
        case 779:
            cam_pos = vec3(-0.28468, 0.87263, 7.24499);
            cam_up_vec = vec3(0.00668, 0.98198, -0.18886);
            break;
        case 780:
            cam_pos = vec3(-0.28723, 0.85980, 7.37065);
            cam_up_vec = vec3(0.00644, 0.98240, -0.18666);
            break;
        case 781:
            cam_pos = vec3(-0.28958, 0.84747, 7.49710);
            cam_up_vec = vec3(0.00620, 0.98282, -0.18445);
            break;
        case 782:
            cam_pos = vec3(-0.29171, 0.83564, 7.62423);
            cam_up_vec = vec3(0.00596, 0.98324, -0.18222);
            break;
        case 783:
            cam_pos = vec3(-0.29364, 0.82434, 7.75196);
            cam_up_vec = vec3(0.00573, 0.98365, -0.17998);
            break;
        case 784:
            cam_pos = vec3(-0.29535, 0.81358, 7.88018);
            cam_up_vec = vec3(0.00551, 0.98406, -0.17774);
            break;
        case 785:
            cam_pos = vec3(-0.29684, 0.80337, 8.00881);
            cam_up_vec = vec3(0.00528, 0.98447, -0.17548);
            break;
        case 786:
            cam_pos = vec3(-0.29810, 0.79372, 8.13778);
            cam_up_vec = vec3(0.00506, 0.98487, -0.17322);
            break;
        case 787:
            cam_pos = vec3(-0.29914, 0.78464, 8.26702);
            cam_up_vec = vec3(0.00484, 0.98527, -0.17096);
            break;
        case 788:
            cam_pos = vec3(-0.29996, 0.77614, 8.39646);
            cam_up_vec = vec3(0.00463, 0.98566, -0.16869);
            break;
        case 789:
            cam_pos = vec3(-0.30054, 0.76823, 8.52603);
            cam_up_vec = vec3(0.00442, 0.98605, -0.16642);
            break;
        case 790:
            cam_pos = vec3(-0.30090, 0.76090, 8.65567);
            cam_up_vec = vec3(0.00421, 0.98643, -0.16415);
            break;
        case 791:
            cam_pos = vec3(-0.30103, 0.75417, 8.78532);
            cam_up_vec = vec3(0.00401, 0.98680, -0.16187);
            break;
        case 792:
            cam_pos = vec3(-0.30093, 0.74803, 8.91493);
            cam_up_vec = vec3(0.00381, 0.98717, -0.15960);
            break;
        case 793:
            cam_pos = vec3(-0.30060, 0.74249, 9.04443);
            cam_up_vec = vec3(0.00362, 0.98754, -0.15733);
            break;
        case 794:
            cam_pos = vec3(-0.30004, 0.73754, 9.17376);
            cam_up_vec = vec3(0.00343, 0.98790, -0.15506);
            break;
        case 795:
            cam_pos = vec3(-0.29926, 0.73319, 9.30288);
            cam_up_vec = vec3(0.00324, 0.98825, -0.15280);
            break;
        case 796:
            cam_pos = vec3(-0.29825, 0.72943, 9.43172);
            cam_up_vec = vec3(0.00306, 0.98860, -0.15054);
            break;
        case 797:
            cam_pos = vec3(-0.29702, 0.72626, 9.56023);
            cam_up_vec = vec3(0.00289, 0.98894, -0.14828);
            break;
        case 798:
            cam_pos = vec3(-0.29557, 0.72368, 9.68835);
            cam_up_vec = vec3(0.00271, 0.98928, -0.14603);
            break;
        case 799:
            cam_pos = vec3(-0.29391, 0.72168, 9.81603);
            cam_up_vec = vec3(0.00255, 0.98960, -0.14379);
            break;
        case 800:
            cam_pos = vec3(-0.29202, 0.72026, 9.94320);
            cam_up_vec = vec3(0.00238, 0.98993, -0.14156);
            break;
        case 801:
            cam_pos = vec3(-0.28992, 0.71940, 10.06979);
            cam_up_vec = vec3(0.00223, 0.99024, -0.13934);
            break;
        case 802:
            cam_pos = vec3(-0.28763, 0.71911, 10.19576);
            cam_up_vec = vec3(0.00207, 0.99055, -0.13712);
            break;
        case 803:
            cam_pos = vec3(-0.28513, 0.71937, 10.32102);
            cam_up_vec = vec3(0.00192, 0.99085, -0.13492);
            break;
        case 804:
            cam_pos = vec3(-0.28243, 0.72018, 10.44552);
            cam_up_vec = vec3(0.00178, 0.99115, -0.13273);
            break;
        case 805:
            cam_pos = vec3(-0.27955, 0.72151, 10.56917);
            cam_up_vec = vec3(0.00164, 0.99144, -0.13056);
            break;
        case 806:
            cam_pos = vec3(-0.27648, 0.72337, 10.69191);
            cam_up_vec = vec3(0.00151, 0.99172, -0.12840);
            break;
        case 807:
            cam_pos = vec3(-0.27322, 0.72573, 10.81364);
            cam_up_vec = vec3(0.00138, 0.99200, -0.12626);
            break;
        case 808:
            cam_pos = vec3(-0.26981, 0.72858, 10.93428);
            cam_up_vec = vec3(0.00125, 0.99226, -0.12414);
            break;
        case 809:
            cam_pos = vec3(-0.26623, 0.73191, 11.05373);
            cam_up_vec = vec3(0.00113, 0.99252, -0.12204);
            break;
        case 810:
            cam_pos = vec3(-0.26250, 0.73570, 11.17189);
            cam_up_vec = vec3(0.00101, 0.99278, -0.11996);
            break;
        case 811:
            cam_pos = vec3(-0.25862, 0.73991, 11.28865);
            cam_up_vec = vec3(0.00090, 0.99303, -0.11790);
            break;
        case 812:
            cam_pos = vec3(-0.25461, 0.74455, 11.40388);
            cam_up_vec = vec3(0.00080, 0.99326, -0.11587);
            break;
        case 813:
            cam_pos = vec3(-0.25047, 0.74957, 11.51745);
            cam_up_vec = vec3(0.00069, 0.99350, -0.11387);
            break;
        case 814:
            cam_pos = vec3(-0.24625, 0.75495, 11.62920);
            cam_up_vec = vec3(0.00060, 0.99372, -0.11190);
            break;
        case 815:
            cam_pos = vec3(-0.24192, 0.76067, 11.73898);
            cam_up_vec = vec3(0.00050, 0.99394, -0.10996);
            break;
        case 816:
            cam_pos = vec3(-0.23752, 0.76668, 11.84659);
            cam_up_vec = vec3(0.00042, 0.99414, -0.10807);
            break;
        case 817:
            cam_pos = vec3(-0.23306, 0.77295, 11.95181);
            cam_up_vec = vec3(0.00033, 0.99434, -0.10621);
            break;
        case 818:
            cam_pos = vec3(-0.22857, 0.77944, 12.05441);
            cam_up_vec = vec3(0.00025, 0.99454, -0.10440);
            break;
        case 819:
            cam_pos = vec3(-0.22407, 0.78610, 12.15409);
            cam_up_vec = vec3(0.00018, 0.99472, -0.10264);
            break;
        case 820:
            cam_pos = vec3(-0.21959, 0.79288, 12.25052);
            cam_up_vec = vec3(0.00011, 0.99489, -0.10094);
            break;
        case 821:
            cam_pos = vec3(-0.21515, 0.79971, 12.34332);
            cam_up_vec = vec3(0.00005, 0.99506, -0.09930);
            break;
        case 822:
            cam_pos = vec3(-0.21080, 0.80652, 12.43202);
            cam_up_vec = vec3(-0.00001, 0.99521, -0.09773);
            break;
        case 823:
            cam_pos = vec3(-0.20658, 0.81323, 12.51604);
            cam_up_vec = vec3(-0.00007, 0.99536, -0.09625);
            break;
        case 824:
            cam_pos = vec3(-0.20254, 0.81973, 12.59470);
            cam_up_vec = vec3(-0.00012, 0.99549, -0.09486);
            break;
        case 825:
            cam_pos = vec3(-0.19875, 0.82591, 12.66710);
            cam_up_vec = vec3(-0.00016, 0.99561, -0.09358);
            break;
        case 826:
            cam_pos = vec3(-0.19529, 0.83162, 12.73210);
            cam_up_vec = vec3(-0.00020, 0.99572, -0.09243);
            break;
        case 827:
            cam_pos = vec3(-0.19225, 0.83666, 12.78818);
            cam_up_vec = vec3(-0.00024, 0.99581, -0.09144);
            break;
        case 828:
            cam_pos = vec3(-0.18978, 0.84079, 12.83322);
            cam_up_vec = vec3(-0.00026, 0.99588, -0.09064);
            break;
        case 829:
            cam_pos = vec3(-0.18806, 0.84367, 12.86414);
            cam_up_vec = vec3(-0.00028, 0.99593, -0.09009);
            break;
        case 830:
            cam_pos = vec3(-0.18740, 0.84479, 12.87612);
            cam_up_vec = vec3(-0.00029, 0.99595, -0.08988);
            break;
        case 831:
            cam_pos = vec3(0.19028, 2.59307, 1.30396);
            cam_up_vec = vec3(0.01019, 0.99501, 0.09773);
            break;
        case 832:
            cam_pos = vec3(0.19448, 2.60586, 1.21560);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 833:
            cam_pos = vec3(0.19553, 2.60399, 1.22427);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 834:
            cam_pos = vec3(0.19657, 2.60211, 1.23295);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 835:
            cam_pos = vec3(0.19762, 2.60023, 1.24163);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 836:
            cam_pos = vec3(0.19866, 2.59835, 1.25031);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 837:
            cam_pos = vec3(0.19970, 2.59648, 1.25899);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 838:
            cam_pos = vec3(0.20075, 2.59460, 1.26767);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 839:
            cam_pos = vec3(0.20179, 2.59272, 1.27635);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 840:
            cam_pos = vec3(0.20283, 2.59085, 1.28503);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 841:
            cam_pos = vec3(0.20388, 2.58897, 1.29371);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 842:
            cam_pos = vec3(0.20492, 2.58709, 1.30239);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 843:
            cam_pos = vec3(0.20597, 2.58521, 1.31107);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 844:
            cam_pos = vec3(0.20701, 2.58334, 1.31975);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 845:
            cam_pos = vec3(0.20805, 2.58146, 1.32843);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 846:
            cam_pos = vec3(0.20910, 2.57958, 1.33711);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 847:
            cam_pos = vec3(0.21014, 2.57771, 1.34578);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 848:
            cam_pos = vec3(0.21118, 2.57583, 1.35446);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 849:
            cam_pos = vec3(0.21223, 2.57395, 1.36314);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 850:
            cam_pos = vec3(0.21327, 2.57207, 1.37182);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 851:
            cam_pos = vec3(0.21431, 2.57020, 1.38050);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 852:
            cam_pos = vec3(0.21536, 2.56832, 1.38918);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 853:
            cam_pos = vec3(0.21640, 2.56644, 1.39786);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 854:
            cam_pos = vec3(0.21745, 2.56457, 1.40654);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 855:
            cam_pos = vec3(0.21849, 2.56269, 1.41522);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 856:
            cam_pos = vec3(0.21953, 2.56081, 1.42390);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 857:
            cam_pos = vec3(0.22058, 2.55893, 1.43258);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 858:
            cam_pos = vec3(0.22162, 2.55706, 1.44126);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 859:
            cam_pos = vec3(0.22266, 2.55518, 1.44994);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 860:
            cam_pos = vec3(0.22371, 2.55330, 1.45861);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 861:
            cam_pos = vec3(0.22475, 2.55143, 1.46729);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 862:
            cam_pos = vec3(0.22580, 2.54955, 1.47597);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 863:
            cam_pos = vec3(0.22684, 2.54767, 1.48465);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 864:
            cam_pos = vec3(0.22788, 2.54579, 1.49333);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 865:
            cam_pos = vec3(0.22893, 2.54392, 1.50201);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 866:
            cam_pos = vec3(0.22997, 2.54204, 1.51069);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 867:
            cam_pos = vec3(0.23101, 2.54016, 1.51937);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 868:
            cam_pos = vec3(0.23206, 2.53829, 1.52805);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 869:
            cam_pos = vec3(0.23310, 2.53641, 1.53673);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 870:
            cam_pos = vec3(0.23415, 2.53453, 1.54541);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 871:
            cam_pos = vec3(0.23519, 2.53265, 1.55409);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 872:
            cam_pos = vec3(0.23623, 2.53078, 1.56277);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 873:
            cam_pos = vec3(0.23728, 2.52890, 1.57145);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 874:
            cam_pos = vec3(0.23832, 2.52702, 1.58012);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 875:
            cam_pos = vec3(0.23936, 2.52515, 1.58880);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 876:
            cam_pos = vec3(0.24041, 2.52327, 1.59748);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 877:
            cam_pos = vec3(0.24145, 2.52139, 1.60616);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 878:
            cam_pos = vec3(0.24250, 2.51951, 1.61484);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 879:
            cam_pos = vec3(0.24354, 2.51764, 1.62352);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 880:
            cam_pos = vec3(0.24458, 2.51576, 1.63220);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 881:
            cam_pos = vec3(0.24563, 2.51388, 1.64088);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 882:
            cam_pos = vec3(0.24667, 2.51201, 1.64956);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 883:
            cam_pos = vec3(0.24771, 2.51013, 1.65824);
            cam_up_vec = vec3(0.01028, 0.99500, 0.09930);
            break;
        case 884:
            cam_pos = vec3(-0.39592, 2.16920, 5.27969);
            cam_up_vec = vec3(-0.00420, 0.99872, 0.05023);
            break;
        case 885:
            cam_pos = vec3(-0.39018, 2.14003, 5.29535);
            cam_up_vec = vec3(-0.00379, 0.99900, 0.04444);
            break;
        case 886:
            cam_pos = vec3(-0.37977, 2.11638, 5.28006);
            cam_up_vec = vec3(-0.00330, 0.99921, 0.03958);
            break;
        case 887:
            cam_pos = vec3(-0.37005, 2.09435, 5.26562);
            cam_up_vec = vec3(-0.00287, 0.99938, 0.03502);
            break;
        case 888:
            cam_pos = vec3(-0.36078, 2.07340, 5.25172);
            cam_up_vec = vec3(-0.00247, 0.99953, 0.03067);
            break;
        case 889:
            cam_pos = vec3(-0.35185, 2.05322, 5.23816);
            cam_up_vec = vec3(-0.00209, 0.99965, 0.02646);
            break;
        case 890:
            cam_pos = vec3(-0.34315, 2.03364, 5.22485);
            cam_up_vec = vec3(-0.00173, 0.99975, 0.02236);
            break;
        case 891:
            cam_pos = vec3(-0.33465, 2.01452, 5.21169);
            cam_up_vec = vec3(-0.00140, 0.99983, 0.01833);
            break;
        case 892:
            cam_pos = vec3(-0.32629, 1.99576, 5.19864);
            cam_up_vec = vec3(-0.00107, 0.99990, 0.01437);
            break;
        case 893:
            cam_pos = vec3(-0.31804, 1.97729, 5.18566);
            cam_up_vec = vec3(-0.00077, 0.99995, 0.01045);
            break;
        case 894:
            cam_pos = vec3(-0.30989, 1.95907, 5.17270);
            cam_up_vec = vec3(-0.00047, 0.99998, 0.00656);
            break;
        case 895:
            cam_pos = vec3(-0.30182, 1.94105, 5.15975);
            cam_up_vec = vec3(-0.00019, 1.00000, 0.00271);
            break;
        case 896:
            cam_pos = vec3(-0.29381, 1.92319, 5.14678);
            cam_up_vec = vec3(0.00008, 1.00000, -0.00113);
            break;
        case 897:
            cam_pos = vec3(-0.28584, 1.90547, 5.13377);
            cam_up_vec = vec3(0.00034, 0.99999, -0.00495);
            break;
        case 898:
            cam_pos = vec3(-0.27791, 1.88786, 5.12070);
            cam_up_vec = vec3(0.00059, 0.99996, -0.00877);
            break;
        case 899:
            cam_pos = vec3(-0.27001, 1.87034, 5.10757);
            cam_up_vec = vec3(0.00082, 0.99992, -0.01258);
            break;
        case 900:
            cam_pos = vec3(-0.26213, 1.85289, 5.09436);
            cam_up_vec = vec3(0.00105, 0.99987, -0.01639);
            break;
        case 901:
            cam_pos = vec3(-0.25426, 1.83550, 5.08105);
            cam_up_vec = vec3(0.00127, 0.99979, -0.02021);
            break;
        case 902:
            cam_pos = vec3(-0.24640, 1.81815, 5.06764);
            cam_up_vec = vec3(0.00148, 0.99971, -0.02403);
            break;
        case 903:
            cam_pos = vec3(-0.23854, 1.80084, 5.05411);
            cam_up_vec = vec3(0.00168, 0.99961, -0.02786);
            break;
        case 904:
            cam_pos = vec3(-0.23068, 1.78354, 5.04046);
            cam_up_vec = vec3(0.00187, 0.99950, -0.03170);
            break;
        case 905:
            cam_pos = vec3(-0.22281, 1.76625, 5.02668);
            cam_up_vec = vec3(0.00205, 0.99937, -0.03556);
            break;
        case 906:
            cam_pos = vec3(-0.21492, 1.74896, 5.01275);
            cam_up_vec = vec3(0.00222, 0.99922, -0.03943);
            break;
        case 907:
            cam_pos = vec3(-0.20702, 1.73165, 4.99866);
            cam_up_vec = vec3(0.00238, 0.99906, -0.04333);
            break;
        case 908:
            cam_pos = vec3(-0.19910, 1.71433, 4.98442);
            cam_up_vec = vec3(0.00253, 0.99888, -0.04724);
            break;
        case 909:
            cam_pos = vec3(-0.19115, 1.69698, 4.97000);
            cam_up_vec = vec3(0.00267, 0.99869, -0.05118);
            break;
        case 910:
            cam_pos = vec3(-0.18317, 1.67959, 4.95540);
            cam_up_vec = vec3(0.00280, 0.99847, -0.05514);
            break;
        case 911:
            cam_pos = vec3(-0.17516, 1.66215, 4.94061);
            cam_up_vec = vec3(0.00293, 0.99825, -0.05914);
            break;
        case 912:
            cam_pos = vec3(-0.16711, 1.64466, 4.92561);
            cam_up_vec = vec3(0.00304, 0.99800, -0.06316);
            break;
        case 913:
            cam_pos = vec3(-0.15902, 1.62711, 4.91041);
            cam_up_vec = vec3(0.00314, 0.99773, -0.06721);
            break;
        case 914:
            cam_pos = vec3(-0.15089, 1.60948, 4.89498);
            cam_up_vec = vec3(0.00323, 0.99745, -0.07131);
            break;
        case 915:
            cam_pos = vec3(-0.14271, 1.59178, 4.87932);
            cam_up_vec = vec3(0.00331, 0.99715, -0.07543);
            break;
        case 916:
            cam_pos = vec3(-0.13447, 1.57399, 4.86341);
            cam_up_vec = vec3(0.00338, 0.99682, -0.07960);
            break;
        case 917:
            cam_pos = vec3(-0.12618, 1.55610, 4.84724);
            cam_up_vec = vec3(0.00344, 0.99648, -0.08381);
            break;
        case 918:
            cam_pos = vec3(-0.11782, 1.53811, 4.83079);
            cam_up_vec = vec3(0.00348, 0.99611, -0.08807);
            break;
        case 919:
            cam_pos = vec3(-0.10940, 1.52001, 4.81406);
            cam_up_vec = vec3(0.00352, 0.99572, -0.09238);
            break;
        case 920:
            cam_pos = vec3(-0.10091, 1.50178, 4.79703);
            cam_up_vec = vec3(0.00354, 0.99530, -0.09673);
            break;
        case 921:
            cam_pos = vec3(-0.09234, 1.48341, 4.77968);
            cam_up_vec = vec3(0.00354, 0.99487, -0.10115);
            break;
        case 922:
            cam_pos = vec3(-0.08370, 1.46490, 4.76199);
            cam_up_vec = vec3(0.00354, 0.99440, -0.10562);
            break;
        case 923:
            cam_pos = vec3(-0.07496, 1.44623, 4.74394);
            cam_up_vec = vec3(0.00352, 0.99391, -0.11015);
            break;
        case 924:
            cam_pos = vec3(-0.06613, 1.42738, 4.72551);
            cam_up_vec = vec3(0.00348, 0.99339, -0.11475);
            break;
        case 925:
            cam_pos = vec3(-0.05720, 1.40836, 4.70669);
            cam_up_vec = vec3(0.00343, 0.99284, -0.11942);
            break;
        case 926:
            cam_pos = vec3(-0.04816, 1.38913, 4.68743);
            cam_up_vec = vec3(0.00337, 0.99226, -0.12416);
            break;
        case 927:
            cam_pos = vec3(-0.03901, 1.36968, 4.66772);
            cam_up_vec = vec3(0.00328, 0.99164, -0.12899);
            break;
        case 928:
            cam_pos = vec3(-0.02973, 1.35000, 4.64752);
            cam_up_vec = vec3(0.00318, 0.99099, -0.13391);
            break;
        case 929:
            cam_pos = vec3(-0.02032, 1.33006, 4.62680);
            cam_up_vec = vec3(0.00306, 0.99030, -0.13892);
            break;
        case 930:
            cam_pos = vec3(-0.01075, 1.30984, 4.60552);
            cam_up_vec = vec3(0.00292, 0.98957, -0.14403);
            break;
        case 931:
            cam_pos = vec3(-0.00103, 1.28932, 4.58364);
            cam_up_vec = vec3(0.00275, 0.98880, -0.14925);
            break;
        case 932:
            cam_pos = vec3(0.00887, 1.26846, 4.56110);
            cam_up_vec = vec3(0.00257, 0.98797, -0.15459);
            break;
        case 933:
            cam_pos = vec3(0.01896, 1.24723, 4.53784);
            cam_up_vec = vec3(0.00235, 0.98710, -0.16007);
            break;
        case 934:
            cam_pos = vec3(0.02925, 1.22560, 4.51381);
            cam_up_vec = vec3(0.00211, 0.98618, -0.16569);
            break;
        case 935:
            cam_pos = vec3(0.03978, 1.20351, 4.48891);
            cam_up_vec = vec3(0.00184, 0.98519, -0.17147);
            break;
        case 936:
            cam_pos = vec3(0.05058, 1.18092, 4.46307);
            cam_up_vec = vec3(0.00154, 0.98413, -0.17742);
            break;
        case 937:
            cam_pos = vec3(0.06166, 1.15775, 4.43616);
            cam_up_vec = vec3(0.00120, 0.98300, -0.18358);
            break;
        case 938:
            cam_pos = vec3(0.07307, 1.13394, 4.40805);
            cam_up_vec = vec3(0.00082, 0.98179, -0.18996);
            break;
        case 939:
            cam_pos = vec3(0.08486, 1.10939, 4.37859);
            cam_up_vec = vec3(0.00040, 0.98049, -0.19659);
            break;
        case 940:
            cam_pos = vec3(0.09709, 1.08397, 4.34756);
            cam_up_vec = vec3(-0.00008, 0.97907, -0.20352);
            break;
        case 941:
            cam_pos = vec3(0.10983, 1.05754, 4.31470);
            cam_up_vec = vec3(-0.00062, 0.97753, -0.21080);
            break;
        case 942:
            cam_pos = vec3(0.12318, 1.02988, 4.27966);
            cam_up_vec = vec3(-0.00123, 0.97584, -0.21849);
            break;
        case 943:
            cam_pos = vec3(0.13730, 1.00072, 4.24195);
            cam_up_vec = vec3(-0.00193, 0.97396, -0.22670);
            break;
        case 944:
            cam_pos = vec3(0.15236, 0.96966, 4.20089);
            cam_up_vec = vec3(-0.00274, 0.97186, -0.23554);
            break;
        case 945:
            cam_pos = vec3(0.16869, 0.93608, 4.15540);
            cam_up_vec = vec3(-0.00369, 0.96946, -0.24523);
            break;
        case 946:
            cam_pos = vec3(0.18680, 0.89892, 4.10371);
            cam_up_vec = vec3(-0.00484, 0.96663, -0.25611);
            break;
        case 947:
            cam_pos = vec3(0.20769, 0.85616, 4.04235);
            cam_up_vec = vec3(-0.00630, 0.96316, -0.26886);
            break;
        case 948:
            cam_pos = vec3(0.23399, 0.80254, 3.96235);
            cam_up_vec = vec3(-0.00835, 0.95843, -0.28521);
            break;
        case 949:
            cam_pos = vec3(0.29307, 0.68282, 3.76987);
            cam_up_vec = vec3(-0.01393, 0.94616, -0.32338);
            break;
        case 950:
            cam_pos = vec3(3.73702, 1.31688, 1.97586);
            cam_up_vec = vec3(-0.14170, 0.98684, -0.07279);
            break;
        case 951:
            cam_pos = vec3(3.74971, 1.33127, 1.94776);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 952:
            cam_pos = vec3(3.72918, 1.33965, 1.93674);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 953:
            cam_pos = vec3(3.70864, 1.34802, 1.92572);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 954:
            cam_pos = vec3(3.68811, 1.35640, 1.91471);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 955:
            cam_pos = vec3(3.66758, 1.36478, 1.90369);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 956:
            cam_pos = vec3(3.64705, 1.37316, 1.89268);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 957:
            cam_pos = vec3(3.62651, 1.38154, 1.88166);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 958:
            cam_pos = vec3(3.60598, 1.38991, 1.87065);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 959:
            cam_pos = vec3(3.58545, 1.39829, 1.85963);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 960:
            cam_pos = vec3(3.56492, 1.40667, 1.84861);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 961:
            cam_pos = vec3(3.54438, 1.41505, 1.83760);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 962:
            cam_pos = vec3(3.52385, 1.42342, 1.82658);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 963:
            cam_pos = vec3(3.50332, 1.43180, 1.81557);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 964:
            cam_pos = vec3(3.48279, 1.44018, 1.80455);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 965:
            cam_pos = vec3(3.46225, 1.44856, 1.79354);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 966:
            cam_pos = vec3(3.44172, 1.45694, 1.78252);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 967:
            cam_pos = vec3(3.42119, 1.46531, 1.77151);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 968:
            cam_pos = vec3(3.40065, 1.47369, 1.76049);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 969:
            cam_pos = vec3(3.38012, 1.48207, 1.74947);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 970:
            cam_pos = vec3(3.35959, 1.49045, 1.73846);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 971:
            cam_pos = vec3(3.33906, 1.49882, 1.72744);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 972:
            cam_pos = vec3(3.31852, 1.50720, 1.71643);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 973:
            cam_pos = vec3(3.29799, 1.51558, 1.70541);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 974:
            cam_pos = vec3(3.27746, 1.52396, 1.69440);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 975:
            cam_pos = vec3(3.25693, 1.53234, 1.68338);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 976:
            cam_pos = vec3(3.23639, 1.54071, 1.67236);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 977:
            cam_pos = vec3(3.21586, 1.54909, 1.66135);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 978:
            cam_pos = vec3(3.19533, 1.55747, 1.65033);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 979:
            cam_pos = vec3(3.17480, 1.56585, 1.63932);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 980:
            cam_pos = vec3(3.15426, 1.57422, 1.62830);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 981:
            cam_pos = vec3(3.13373, 1.58260, 1.61729);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 982:
            cam_pos = vec3(3.11320, 1.59098, 1.60627);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 983:
            cam_pos = vec3(3.09267, 1.59936, 1.59525);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 984:
            cam_pos = vec3(3.07213, 1.60774, 1.58424);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 985:
            cam_pos = vec3(3.05160, 1.61611, 1.57322);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 986:
            cam_pos = vec3(3.03107, 1.62449, 1.56221);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 987:
            cam_pos = vec3(3.01054, 1.63287, 1.55119);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 988:
            cam_pos = vec3(2.99000, 1.64125, 1.54018);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 989:
            cam_pos = vec3(2.96947, 1.64962, 1.52916);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 990:
            cam_pos = vec3(2.94894, 1.65800, 1.51815);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 991:
            cam_pos = vec3(2.92841, 1.66638, 1.50713);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 992:
            cam_pos = vec3(2.90787, 1.67476, 1.49611);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 993:
            cam_pos = vec3(2.88734, 1.68314, 1.48510);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 994:
            cam_pos = vec3(2.86681, 1.69151, 1.47408);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 995:
            cam_pos = vec3(2.84627, 1.69989, 1.46307);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 996:
            cam_pos = vec3(2.82574, 1.70827, 1.45205);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 997:
            cam_pos = vec3(2.80521, 1.71665, 1.44104);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 998:
            cam_pos = vec3(2.78468, 1.72502, 1.43002);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 999:
            cam_pos = vec3(2.76414, 1.73340, 1.41900);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1000:
            cam_pos = vec3(2.74361, 1.74178, 1.40799);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1001:
            cam_pos = vec3(2.72308, 1.75016, 1.39697);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1002:
            cam_pos = vec3(2.70255, 1.75854, 1.38596);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1003:
            cam_pos = vec3(2.68201, 1.76691, 1.37494);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1004:
            cam_pos = vec3(2.66148, 1.77529, 1.36393);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1005:
            cam_pos = vec3(2.64095, 1.78367, 1.35291);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1006:
            cam_pos = vec3(2.62042, 1.79205, 1.34190);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1007:
            cam_pos = vec3(2.59988, 1.80042, 1.33088);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1008:
            cam_pos = vec3(2.57935, 1.80880, 1.31986);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1009:
            cam_pos = vec3(2.55882, 1.81718, 1.30885);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1010:
            cam_pos = vec3(2.53829, 1.82556, 1.29783);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1011:
            cam_pos = vec3(2.51775, 1.83394, 1.28682);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1012:
            cam_pos = vec3(2.49722, 1.84231, 1.27580);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1013:
            cam_pos = vec3(2.47669, 1.85069, 1.26479);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1014:
            cam_pos = vec3(2.45616, 1.85907, 1.25377);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1015:
            cam_pos = vec3(2.43562, 1.86745, 1.24275);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1016:
            cam_pos = vec3(2.41509, 1.87582, 1.23174);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1017:
            cam_pos = vec3(2.39456, 1.88420, 1.22072);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1018:
            cam_pos = vec3(2.37403, 1.89258, 1.20971);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1019:
            cam_pos = vec3(2.35349, 1.90096, 1.19869);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1020:
            cam_pos = vec3(2.33296, 1.90934, 1.18768);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1021:
            cam_pos = vec3(2.31243, 1.91771, 1.17666);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1022:
            cam_pos = vec3(2.29189, 1.92609, 1.16564);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1023:
            cam_pos = vec3(2.27136, 1.93447, 1.15463);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1024:
            cam_pos = vec3(2.25083, 1.94285, 1.14361);
            cam_up_vec = vec3(-0.14293, 0.98723, -0.07039);
            break;
        case 1025:
            cam_pos = vec3(0.75697, 2.41493, 5.13841);
            cam_up_vec = vec3(0.00024, 0.99908, 0.03882);
            break;
        case 1026:
            cam_pos = vec3(0.73052, 2.45845, 5.04032);
            cam_up_vec = vec3(0.00212, 0.99876, 0.04970);
            break;
        case 1027:
            cam_pos = vec3(0.71686, 2.50329, 4.86397);
            cam_up_vec = vec3(0.00261, 0.99807, 0.06199);
            break;
        case 1028:
            cam_pos = vec3(0.70221, 2.54723, 4.67112);
            cam_up_vec = vec3(0.00312, 0.99715, 0.07538);
            break;
        case 1029:
            cam_pos = vec3(0.68746, 2.58690, 4.47293);
            cam_up_vec = vec3(0.00362, 0.99602, 0.08909);
            break;
        case 1030:
            cam_pos = vec3(0.67310, 2.62086, 4.27608);
            cam_up_vec = vec3(0.00410, 0.99471, 0.10266);
            break;
        case 1031:
            cam_pos = vec3(0.65943, 2.64871, 4.08470);
            cam_up_vec = vec3(0.00454, 0.99326, 0.11582);
            break;
        case 1032:
            cam_pos = vec3(0.64659, 2.67065, 3.90138);
            cam_up_vec = vec3(0.00495, 0.99171, 0.12840);
            break;
        case 1033:
            cam_pos = vec3(0.63466, 2.68717, 3.72775);
            cam_up_vec = vec3(0.00532, 0.99009, 0.14029);
            break;
        case 1034:
            cam_pos = vec3(0.62366, 2.69891, 3.56479);
            cam_up_vec = vec3(0.00565, 0.98845, 0.15144);
            break;
        case 1035:
            cam_pos = vec3(0.61360, 2.70658, 3.41309);
            cam_up_vec = vec3(0.00595, 0.98681, 0.16180);
            break;
        case 1036:
            cam_pos = vec3(0.60444, 2.71086, 3.27293);
            cam_up_vec = vec3(0.00621, 0.98519, 0.17136);
            break;
        case 1037:
            cam_pos = vec3(0.59618, 2.71243, 3.14439);
            cam_up_vec = vec3(0.00644, 0.98362, 0.18013);
            break;
        case 1038:
            cam_pos = vec3(0.58876, 2.71188, 3.02745);
            cam_up_vec = vec3(0.00665, 0.98213, 0.18810);
            break;
        case 1039:
            cam_pos = vec3(0.58215, 2.70977, 2.92196);
            cam_up_vec = vec3(0.00683, 0.98072, 0.19529);
            break;
        case 1040:
            cam_pos = vec3(0.57631, 2.70660, 2.82774);
            cam_up_vec = vec3(0.00698, 0.97942, 0.20171);
            break;
        case 1041:
            cam_pos = vec3(0.57120, 2.70277, 2.74454);
            cam_up_vec = vec3(0.00711, 0.97823, 0.20738);
            break;
        case 1042:
            cam_pos = vec3(0.56680, 2.69866, 2.67212);
            cam_up_vec = vec3(0.00723, 0.97717, 0.21232);
            break;
        case 1043:
            cam_pos = vec3(0.56307, 2.69457, 2.61020);
            cam_up_vec = vec3(0.00732, 0.97625, 0.21654);
            break;
        case 1044:
            cam_pos = vec3(0.55997, 2.69074, 2.55852);
            cam_up_vec = vec3(0.00740, 0.97546, 0.22006);
            break;
        case 1045:
            cam_pos = vec3(0.55748, 2.68738, 2.51679);
            cam_up_vec = vec3(0.00746, 0.97481, 0.22290);
            break;
        case 1046:
            cam_pos = vec3(0.55558, 2.68464, 2.48475);
            cam_up_vec = vec3(0.00751, 0.97431, 0.22509);
            break;
        case 1047:
            cam_pos = vec3(0.55424, 2.68261, 2.46215);
            cam_up_vec = vec3(0.00754, 0.97395, 0.22663);
            break;
        case 1048:
            cam_pos = vec3(0.55345, 2.68138, 2.44872);
            cam_up_vec = vec3(0.00756, 0.97374, 0.22754);
            break;
        case 1049:
            cam_pos = vec3(0.55319, 2.68096, 2.44423);
            cam_up_vec = vec3(0.00756, 0.97367, 0.22785);
            break;
        case 1050:
            cam_pos = vec3(3.69813, 0.96564, 3.97664);
            cam_up_vec = vec3(-0.11132, 0.98861, -0.09484);
            break;
        case 1051:
            cam_pos = vec3(3.73937, 0.94744, 3.98386);
            cam_up_vec = vec3(-0.11281, 0.98877, -0.09801);
            break;
        case 1052:
            cam_pos = vec3(3.74730, 0.94744, 3.97471);
            cam_up_vec = vec3(-0.11304, 0.98877, -0.09775);
            break;
        case 1053:
            cam_pos = vec3(3.75521, 0.94744, 3.96554);
            cam_up_vec = vec3(-0.11327, 0.98877, -0.09748);
            break;
        case 1054:
            cam_pos = vec3(3.76310, 0.94744, 3.95635);
            cam_up_vec = vec3(-0.11349, 0.98877, -0.09722);
            break;
        case 1055:
            cam_pos = vec3(3.77097, 0.94744, 3.94714);
            cam_up_vec = vec3(-0.11372, 0.98877, -0.09695);
            break;
        case 1056:
            cam_pos = vec3(3.77882, 0.94744, 3.93791);
            cam_up_vec = vec3(-0.11395, 0.98877, -0.09669);
            break;
        case 1057:
            cam_pos = vec3(3.78665, 0.94744, 3.92867);
            cam_up_vec = vec3(-0.11417, 0.98877, -0.09642);
            break;
        case 1058:
            cam_pos = vec3(3.79445, 0.94744, 3.91940);
            cam_up_vec = vec3(-0.11440, 0.98877, -0.09615);
            break;
        case 1059:
            cam_pos = vec3(3.80223, 0.94744, 3.91012);
            cam_up_vec = vec3(-0.11462, 0.98877, -0.09589);
            break;
        case 1060:
            cam_pos = vec3(3.81000, 0.94744, 3.90082);
            cam_up_vec = vec3(-0.11484, 0.98877, -0.09562);
            break;
        case 1061:
            cam_pos = vec3(3.81773, 0.94744, 3.89151);
            cam_up_vec = vec3(-0.11507, 0.98877, -0.09535);
            break;
        case 1062:
            cam_pos = vec3(3.82545, 0.94744, 3.88217);
            cam_up_vec = vec3(-0.11529, 0.98877, -0.09508);
            break;
        case 1063:
            cam_pos = vec3(3.83315, 0.94744, 3.87282);
            cam_up_vec = vec3(-0.11551, 0.98877, -0.09481);
            break;
        case 1064:
            cam_pos = vec3(3.84082, 0.94744, 3.86344);
            cam_up_vec = vec3(-0.11573, 0.98877, -0.09454);
            break;
        case 1065:
            cam_pos = vec3(3.84847, 0.94744, 3.85406);
            cam_up_vec = vec3(-0.11595, 0.98877, -0.09427);
            break;
        case 1066:
            cam_pos = vec3(3.85610, 0.94744, 3.84465);
            cam_up_vec = vec3(-0.11617, 0.98877, -0.09400);
            break;
        case 1067:
            cam_pos = vec3(3.86371, 0.94744, 3.83522);
            cam_up_vec = vec3(-0.11639, 0.98877, -0.09373);
            break;
        case 1068:
            cam_pos = vec3(3.87130, 0.94744, 3.82578);
            cam_up_vec = vec3(-0.11661, 0.98877, -0.09346);
            break;
        case 1069:
            cam_pos = vec3(3.87886, 0.94744, 3.81632);
            cam_up_vec = vec3(-0.11683, 0.98877, -0.09319);
            break;
        case 1070:
            cam_pos = vec3(3.88640, 0.94744, 3.80684);
            cam_up_vec = vec3(-0.11704, 0.98877, -0.09291);
            break;
        case 1071:
            cam_pos = vec3(3.89393, 0.94744, 3.79735);
            cam_up_vec = vec3(-0.11726, 0.98877, -0.09264);
            break;
        case 1072:
            cam_pos = vec3(3.90142, 0.94744, 3.78783);
            cam_up_vec = vec3(-0.11747, 0.98877, -0.09237);
            break;
        case 1073:
            cam_pos = vec3(3.90890, 0.94744, 3.77830);
            cam_up_vec = vec3(-0.11769, 0.98877, -0.09209);
            break;
        case 1074:
            cam_pos = vec3(3.91635, 0.94744, 3.76876);
            cam_up_vec = vec3(-0.11790, 0.98877, -0.09182);
            break;
        case 1075:
            cam_pos = vec3(3.92378, 0.94744, 3.75919);
            cam_up_vec = vec3(-0.11812, 0.98877, -0.09154);
            break;
        case 1076:
            cam_pos = vec3(3.93119, 0.94744, 3.74961);
            cam_up_vec = vec3(-0.11833, 0.98877, -0.09127);
            break;
        case 1077:
            cam_pos = vec3(3.93858, 0.94744, 3.74001);
            cam_up_vec = vec3(-0.11854, 0.98877, -0.09099);
            break;
        case 1078:
            cam_pos = vec3(3.94594, 0.94744, 3.73039);
            cam_up_vec = vec3(-0.11876, 0.98877, -0.09071);
            break;
        case 1079:
            cam_pos = vec3(3.95328, 0.94744, 3.72076);
            cam_up_vec = vec3(-0.11897, 0.98877, -0.09043);
            break;
        case 1080:
            cam_pos = vec3(3.96060, 0.94744, 3.71110);
            cam_up_vec = vec3(-0.11918, 0.98877, -0.09016);
            break;
        case 1081:
            cam_pos = vec3(1.57752, 0.69410, 4.14448);
            cam_up_vec = vec3(0.01144, 0.99943, 0.02583);
            break;
        case 1082:
            cam_pos = vec3(1.55063, 0.69476, 4.14861);
            cam_up_vec = vec3(0.01233, 0.99955, 0.02723);
            break;
        case 1083:
            cam_pos = vec3(1.54975, 0.69834, 4.14798);
            cam_up_vec = vec3(0.01177, 0.99956, 0.02737);
            break;
        case 1084:
            cam_pos = vec3(1.54884, 0.70203, 4.14733);
            cam_up_vec = vec3(0.01119, 0.99956, 0.02751);
            break;
        case 1085:
            cam_pos = vec3(1.54790, 0.70585, 4.14666);
            cam_up_vec = vec3(0.01060, 0.99956, 0.02765);
            break;
        case 1086:
            cam_pos = vec3(1.54693, 0.70979, 4.14596);
            cam_up_vec = vec3(0.00998, 0.99956, 0.02780);
            break;
        case 1087:
            cam_pos = vec3(1.54592, 0.71385, 4.14525);
            cam_up_vec = vec3(0.00935, 0.99957, 0.02795);
            break;
        case 1088:
            cam_pos = vec3(1.54488, 0.71805, 4.14451);
            cam_up_vec = vec3(0.00869, 0.99957, 0.02811);
            break;
        case 1089:
            cam_pos = vec3(1.54381, 0.72238, 4.14374);
            cam_up_vec = vec3(0.00801, 0.99957, 0.02828);
            break;
        case 1090:
            cam_pos = vec3(1.54270, 0.72684, 4.14296);
            cam_up_vec = vec3(0.00732, 0.99957, 0.02844);
            break;
        case 1091:
            cam_pos = vec3(1.54156, 0.73144, 4.14214);
            cam_up_vec = vec3(0.00660, 0.99957, 0.02861);
            break;
        case 1092:
            cam_pos = vec3(1.54038, 0.73619, 4.14131);
            cam_up_vec = vec3(0.00586, 0.99957, 0.02879);
            break;
        case 1093:
            cam_pos = vec3(1.53917, 0.74108, 4.14044);
            cam_up_vec = vec3(0.00509, 0.99957, 0.02897);
            break;
        case 1094:
            cam_pos = vec3(1.53791, 0.74612, 4.13955);
            cam_up_vec = vec3(0.00430, 0.99957, 0.02916);
            break;
        case 1095:
            cam_pos = vec3(1.53662, 0.75132, 4.13863);
            cam_up_vec = vec3(0.00349, 0.99956, 0.02935);
            break;
        case 1096:
            cam_pos = vec3(1.53528, 0.75668, 4.13769);
            cam_up_vec = vec3(0.00265, 0.99956, 0.02955);
            break;
        case 1097:
            cam_pos = vec3(1.53390, 0.76219, 4.13671);
            cam_up_vec = vec3(0.00179, 0.99956, 0.02975);
            break;
        case 1098:
            cam_pos = vec3(1.53248, 0.76788, 4.13570);
            cam_up_vec = vec3(0.00090, 0.99955, 0.02996);
            break;
        case 1099:
            cam_pos = vec3(1.53102, 0.77374, 4.13467);
            cam_up_vec = vec3(-0.00002, 0.99954, 0.03017);
            break;
        case 1100:
            cam_pos = vec3(1.52950, 0.77978, 4.13360);
            cam_up_vec = vec3(-0.00097, 0.99954, 0.03039);
            break;
        case 1101:
            cam_pos = vec3(1.52794, 0.78600, 4.13250);
            cam_up_vec = vec3(-0.00194, 0.99953, 0.03061);
            break;
        case 1102:
            cam_pos = vec3(1.52633, 0.79240, 4.13136);
            cam_up_vec = vec3(-0.00294, 0.99952, 0.03084);
            break;
        case 1103:
            cam_pos = vec3(1.52467, 0.79900, 4.13019);
            cam_up_vec = vec3(-0.00398, 0.99951, 0.03108);
            break;
        case 1104:
            cam_pos = vec3(1.52295, 0.80580, 4.12899);
            cam_up_vec = vec3(-0.00505, 0.99950, 0.03132);
            break;
        case 1105:
            cam_pos = vec3(1.52119, 0.81281, 4.12775);
            cam_up_vec = vec3(-0.00614, 0.99948, 0.03157);
            break;
        case 1106:
            cam_pos = vec3(1.51936, 0.82003, 4.12647);
            cam_up_vec = vec3(-0.00728, 0.99947, 0.03182);
            break;
        case 1107:
            cam_pos = vec3(1.51748, 0.82746, 4.12514);
            cam_up_vec = vec3(-0.00844, 0.99945, 0.03208);
            break;
        case 1108:
            cam_pos = vec3(1.51554, 0.83512, 4.12379);
            cam_up_vec = vec3(-0.00965, 0.99943, 0.03234);
            break;
        case 1109:
            cam_pos = vec3(1.51353, 0.84301, 4.12238);
            cam_up_vec = vec3(-0.01088, 0.99941, 0.03262);
            break;
        case 1110:
            cam_pos = vec3(1.51146, 0.85115, 4.12094);
            cam_up_vec = vec3(-0.01216, 0.99938, 0.03289);
            break;
        case 1111:
            cam_pos = vec3(1.50932, 0.85953, 4.11945);
            cam_up_vec = vec3(-0.01348, 0.99936, 0.03318);
            break;
        case 1112:
            cam_pos = vec3(1.50712, 0.86816, 4.11791);
            cam_up_vec = vec3(-0.01484, 0.99933, 0.03347);
            break;
        case 1113:
            cam_pos = vec3(1.50484, 0.87707, 4.11632);
            cam_up_vec = vec3(-0.01623, 0.99930, 0.03377);
            break;
        case 1114:
            cam_pos = vec3(1.50249, 0.88624, 4.11469);
            cam_up_vec = vec3(-0.01768, 0.99926, 0.03408);
            break;
        case 1115:
            cam_pos = vec3(1.50006, 0.89570, 4.11300);
            cam_up_vec = vec3(-0.01917, 0.99922, 0.03439);
            break;
        case 1116:
            cam_pos = vec3(1.49755, 0.90545, 4.11126);
            cam_up_vec = vec3(-0.02070, 0.99918, 0.03471);
            break;
        case 1117:
            cam_pos = vec3(1.49495, 0.91551, 4.10946);
            cam_up_vec = vec3(-0.02228, 0.99914, 0.03504);
            break;
        case 1118:
            cam_pos = vec3(1.49228, 0.92588, 4.10761);
            cam_up_vec = vec3(-0.02392, 0.99909, 0.03538);
            break;
        case 1119:
            cam_pos = vec3(1.48950, 0.93657, 4.10570);
            cam_up_vec = vec3(-0.02560, 0.99903, 0.03572);
            break;
        case 1120:
            cam_pos = vec3(1.48664, 0.94760, 4.10372);
            cam_up_vec = vec3(-0.02734, 0.99898, 0.03607);
            break;
        case 1121:
            cam_pos = vec3(1.48368, 0.95899, 4.10169);
            cam_up_vec = vec3(-0.02913, 0.99891, 0.03643);
            break;
        case 1122:
            cam_pos = vec3(1.48061, 0.97073, 4.09958);
            cam_up_vec = vec3(-0.03098, 0.99884, 0.03679);
            break;
        case 1123:
            cam_pos = vec3(1.47744, 0.98285, 4.09741);
            cam_up_vec = vec3(-0.03290, 0.99877, 0.03717);
            break;
        case 1124:
            cam_pos = vec3(1.47417, 0.99536, 4.09516);
            cam_up_vec = vec3(-0.03487, 0.99869, 0.03755);
            break;
        case 1125:
            cam_pos = vec3(1.47077, 1.00827, 4.09284);
            cam_up_vec = vec3(-0.03691, 0.99860, 0.03794);
            break;
        case 1126:
            cam_pos = vec3(1.46726, 1.02159, 4.09044);
            cam_up_vec = vec3(-0.03901, 0.99850, 0.03834);
            break;
        case 1127:
            cam_pos = vec3(1.46362, 1.03535, 4.08796);
            cam_up_vec = vec3(-0.04118, 0.99840, 0.03874);
            break;
        case 1128:
            cam_pos = vec3(1.45985, 1.04956, 4.08540);
            cam_up_vec = vec3(-0.04343, 0.99829, 0.03916);
            break;
        case 1129:
            cam_pos = vec3(1.45595, 1.06424, 4.08275);
            cam_up_vec = vec3(-0.04575, 0.99817, 0.03958);
            break;
        case 1130:
            cam_pos = vec3(1.45191, 1.07939, 4.08001);
            cam_up_vec = vec3(-0.04815, 0.99804, 0.04001);
            break;
        case 1131:
            cam_pos = vec3(1.44773, 1.09504, 4.07718);
            cam_up_vec = vec3(-0.05062, 0.99790, 0.04045);
            break;
        case 1132:
            cam_pos = vec3(1.44339, 1.11120, 4.07425);
            cam_up_vec = vec3(-0.05318, 0.99775, 0.04089);
            break;
        case 1133:
            cam_pos = vec3(1.43889, 1.12789, 4.07123);
            cam_up_vec = vec3(-0.05582, 0.99758, 0.04134);
            break;
        case 1134:
            cam_pos = vec3(1.43424, 1.14512, 4.06810);
            cam_up_vec = vec3(-0.05855, 0.99741, 0.04180);
            break;
        case 1135:
            cam_pos = vec3(1.42942, 1.16291, 4.06486);
            cam_up_vec = vec3(-0.06137, 0.99722, 0.04226);
            break;
        case 1136:
            cam_pos = vec3(1.42442, 1.18126, 4.06152);
            cam_up_vec = vec3(-0.06428, 0.99702, 0.04273);
            break;
        case 1137:
            cam_pos = vec3(1.41925, 1.20020, 4.05806);
            cam_up_vec = vec3(-0.06728, 0.99680, 0.04321);
            break;
        case 1138:
            cam_pos = vec3(1.41390, 1.21973, 4.05449);
            cam_up_vec = vec3(-0.07037, 0.99656, 0.04369);
            break;
        case 1139:
            cam_pos = vec3(1.40836, 1.23985, 4.05081);
            cam_up_vec = vec3(-0.07357, 0.99631, 0.04417);
            break;
        case 1140:
            cam_pos = vec3(1.40263, 1.26058, 4.04701);
            cam_up_vec = vec3(-0.07686, 0.99604, 0.04466);
            break;
        case 1141:
            cam_pos = vec3(1.39672, 1.28190, 4.04309);
            cam_up_vec = vec3(-0.08024, 0.99575, 0.04515);
            break;
        case 1142:
            cam_pos = vec3(1.39061, 1.30381, 4.03906);
            cam_up_vec = vec3(-0.08372, 0.99544, 0.04564);
            break;
        case 1143:
            cam_pos = vec3(1.38432, 1.32631, 4.03491);
            cam_up_vec = vec3(-0.08729, 0.99511, 0.04613);
            break;
        case 1144:
            cam_pos = vec3(1.37785, 1.34935, 4.03065);
            cam_up_vec = vec3(-0.09095, 0.99476, 0.04662);
            break;
        case 1145:
            cam_pos = vec3(1.37120, 1.37293, 4.02629);
            cam_up_vec = vec3(-0.09470, 0.99439, 0.04710);
            break;
        case 1146:
            cam_pos = vec3(1.36437, 1.39701, 4.02182);
            cam_up_vec = vec3(-0.09852, 0.99400, 0.04758);
            break;
        case 1147:
            cam_pos = vec3(1.35739, 1.42153, 4.01726);
            cam_up_vec = vec3(-0.10242, 0.99358, 0.04805);
            break;
        case 1148:
            cam_pos = vec3(1.35026, 1.44644, 4.01262);
            cam_up_vec = vec3(-0.10638, 0.99314, 0.04851);
            break;
        case 1149:
            cam_pos = vec3(1.34300, 1.47169, 4.00790);
            cam_up_vec = vec3(-0.11039, 0.99268, 0.04896);
            break;
        case 1150:
            cam_pos = vec3(1.33564, 1.49718, 4.00312);
            cam_up_vec = vec3(-0.11444, 0.99220, 0.04939);
            break;
        case 1151:
            cam_pos = vec3(1.32820, 1.52285, 3.99830);
            cam_up_vec = vec3(-0.11852, 0.99170, 0.04981);
            break;
        case 1152:
            cam_pos = vec3(1.32069, 1.54861, 3.99345);
            cam_up_vec = vec3(-0.12261, 0.99118, 0.05022);
            break;
        case 1153:
            cam_pos = vec3(1.31315, 1.57436, 3.98859);
            cam_up_vec = vec3(-0.12671, 0.99065, 0.05060);
            break;
        case 1154:
            cam_pos = vec3(1.30561, 1.60000, 3.98374);
            cam_up_vec = vec3(-0.13078, 0.99010, 0.05097);
            break;
        case 1155:
            cam_pos = vec3(1.29809, 1.62546, 3.97891);
            cam_up_vec = vec3(-0.13482, 0.98954, 0.05131);
            break;
        case 1156:
            cam_pos = vec3(1.29062, 1.65063, 3.97412);
            cam_up_vec = vec3(-0.13882, 0.98897, 0.05164);
            break;
        case 1157:
            cam_pos = vec3(1.28323, 1.67543, 3.96939);
            cam_up_vec = vec3(-0.14276, 0.98839, 0.05194);
            break;
        case 1158:
            cam_pos = vec3(1.27594, 1.69979, 3.96474);
            cam_up_vec = vec3(-0.14663, 0.98781, 0.05222);
            break;
        case 1159:
            cam_pos = vec3(1.26877, 1.72363, 3.96017);
            cam_up_vec = vec3(-0.15041, 0.98723, 0.05248);
            break;
        case 1160:
            cam_pos = vec3(1.26175, 1.74689, 3.95570);
            cam_up_vec = vec3(-0.15410, 0.98665, 0.05271);
            break;
        case 1161:
            cam_pos = vec3(1.25489, 1.76954, 3.95133);
            cam_up_vec = vec3(-0.15770, 0.98607, 0.05293);
            break;
        case 1162:
            cam_pos = vec3(1.24820, 1.79152, 3.94709);
            cam_up_vec = vec3(-0.16118, 0.98549, 0.05312);
            break;
        case 1163:
            cam_pos = vec3(1.24170, 1.81282, 3.94296);
            cam_up_vec = vec3(-0.16456, 0.98493, 0.05330);
            break;
        case 1164:
            cam_pos = vec3(1.23540, 1.83341, 3.93897);
            cam_up_vec = vec3(-0.16782, 0.98437, 0.05346);
            break;
        case 1165:
            cam_pos = vec3(1.22929, 1.85329, 3.93511);
            cam_up_vec = vec3(-0.17097, 0.98382, 0.05360);
            break;
        case 1166:
            cam_pos = vec3(1.22338, 1.87244, 3.93137);
            cam_up_vec = vec3(-0.17400, 0.98328, 0.05373);
            break;
        case 1167:
            cam_pos = vec3(1.21769, 1.89087, 3.92778);
            cam_up_vec = vec3(-0.17692, 0.98275, 0.05384);
            break;
        case 1168:
            cam_pos = vec3(1.21219, 1.90859, 3.92431);
            cam_up_vec = vec3(-0.17972, 0.98224, 0.05394);
            break;
        case 1169:
            cam_pos = vec3(1.20690, 1.92560, 3.92097);
            cam_up_vec = vec3(-0.18241, 0.98174, 0.05403);
            break;
        case 1170:
            cam_pos = vec3(1.20180, 1.94194, 3.91776);
            cam_up_vec = vec3(-0.18499, 0.98125, 0.05411);
            break;
        case 1171:
            cam_pos = vec3(1.19691, 1.95760, 3.91468);
            cam_up_vec = vec3(-0.18747, 0.98078, 0.05417);
            break;
        case 1172:
            cam_pos = vec3(1.19220, 1.97261, 3.91172);
            cam_up_vec = vec3(-0.18984, 0.98032, 0.05423);
            break;
        case 1173:
            cam_pos = vec3(1.18768, 1.98700, 3.90888);
            cam_up_vec = vec3(-0.19211, 0.97987, 0.05428);
            break;
        case 1174:
            cam_pos = vec3(1.18335, 2.00077, 3.90616);
            cam_up_vec = vec3(-0.19428, 0.97944, 0.05432);
            break;
        case 1175:
            cam_pos = vec3(1.17918, 2.01396, 3.90355);
            cam_up_vec = vec3(-0.19636, 0.97902, 0.05435);
            break;
        case 1176:
            cam_pos = vec3(1.17520, 2.02658, 3.90104);
            cam_up_vec = vec3(-0.19835, 0.97862, 0.05438);
            break;
        case 1177:
            cam_pos = vec3(1.17137, 2.03865, 3.89864);
            cam_up_vec = vec3(-0.20025, 0.97823, 0.05441);
            break;
        default:
            cam_pos = vec3(1.16770, 2.05020, 3.89634);
            cam_up_vec = vec3(-0.20207, 0.97786, 0.05442);
            break;
    }
    cam_lookat = vec3( 0.0, 2.0, 0.0 );

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

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    int idx = int(fragCoord.x) + int(fragCoord.y) * int(iResolution.x);
    if ( idx < 4 ) {
        fragColor = camera(idx);
    } else {
        discard;
    }
}
