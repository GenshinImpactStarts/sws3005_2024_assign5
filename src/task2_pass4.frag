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

const float PI = 3.1415926536;

const vec3 BACKGROUND_COLOR = vec3( 0.1, 0.2, 0.6 );

// Vertical field-of-view angle of camera. In radians.
const float FOVY = 50.0 * PI / 180.0;

// Use this for avoiding the "epsilon problem" or the shadow acne problem.
const float DEFAULT_TMIN = 10.0e-4;

// Use this for tmax for non-shadow ray intersection test.
const float DEFAULT_TMAX = 10.0e6;

// Equivalent to number of recursion levels (0 means ray-casting only).
// We are using iterations to replace recursions.
const int NUM_ITERATIONS = 3;

//============================================================================
// Define new struct types.
//============================================================================
struct Ray_t {
    vec3 o;  // Ray Origin.
    vec3 d;  // Ray Direction. A unit vector.
};

struct Camera_t {
    vec3 pos;
    vec3 x;
    vec3 y;
    vec3 z;
};

struct Plane_t {
    // The plane equation is Ax + By + Cz + D = 0.
    float A, B, C, D;
    int materialID;
};

struct Sphere_t {
    vec3 center;
    float radius;
    int materialID;
};

struct Triangle_t {
    vec3 A, B, C;
    int materialID;
};

struct Barycentric_t {
    float alpha, beta, gamma;
};

struct Light_t {
    vec3 position;  // Point light 3D position.
    vec3 I_a;       // For Ambient.
    vec3 I_source;  // For Diffuse and Specular.
};

struct Material_t {
    vec3 k_a;   // Ambient coefficient.
    vec3 k_d;   // Diffuse coefficient.
    vec3 k_r;   // Reflected specular coefficient.
    vec3 k_rg;  // Global reflection coefficient.
    float n;    // The specular reflection exponent. Ranges from 0.0 to 128.0.
};

//----------------------------------------------------------------------------
// The lighting model used here is similar to that shown in
// Lecture Topic B08 (Basic Ray Tracing). Here it is computed as
//
//     I_local = SUM_OVER_ALL_LIGHTS {
//                   I_a * k_a +
//                   k_shadow * I_source * [ k_d * (N.L) + k_r * (R.V)^n ]
//               }
// and
//     I = I_local  +  k_rg * I_reflected
//----------------------------------------------------------------------------


vec4 texelFetch( sampler2D tex, int index )
{
    int x = index % int(iResolution.x);
    int y = index / int(iResolution.x);
    return texelFetch( tex, ivec2(x,y), 0 );
}

void loadCamera( out Camera_t cam )
{
    cam.pos = texelFetch( iChannel1, 0 ).xyz;
    cam.x   = texelFetch( iChannel1, 1 ).xyz;
    cam.y   = texelFetch( iChannel1, 2 ).xyz;
    cam.z   = texelFetch( iChannel1, 3 ).xyz;
}

void loadLight( in int lightIndex, out Light_t light )
{
    int index = lightIndex * LIGHTS_UNIT + LIGHTS_OFFSET;
    light.position = texelFetch( iChannel0,   index ).xyz;
    light.I_a      = texelFetch( iChannel0, index+1 ).xyz;
    light.I_source = texelFetch( iChannel0, index+2 ).xyz;
}

void loadMaterial( in int materialIndex, out Material_t mat )
{
    int index = materialIndex * MATERIALS_UNIT + MATERIALS_OFFSET;
    mat.k_a  = texelFetch( iChannel0,   index ).xyz;
    mat.k_d  = texelFetch( iChannel0, index+1 ).xyz;
    mat.k_r  = texelFetch( iChannel0, index+2 ).xyz;
    mat.k_rg = texelFetch( iChannel0, index+3 ).xyz;
    mat.n    = texelFetch( iChannel0, index+3 ).w;
}

void loadPlane( in int planeIndex, out Plane_t pln )
{
    int index = planeIndex * PLANES_UNIT + PLANES_OFFSET;
    vec4 planeData = texelFetch( iChannel0, index );
    pln.A = planeData.x;
    pln.B = planeData.y;
    pln.C = planeData.z;
    pln.D = planeData.w;
    pln.materialID = 3;
}

void loadSphere( in int sphereIndex, out Sphere_t sph )
{
    int index = sphereIndex * SPHERES_UNIT + SPHERES_OFFSET;
    vec4 sphereData = texelFetch( iChannel0, index );
    sph.center = sphereData.xyz;
    vec2 radius_material = unpackHalf2x16(floatBitsToUint(sphereData.w));
    sph.radius = radius_material.x;
    sph.materialID = int(radius_material.y + 0.5);
}

void loadTriangle( in int vertexIndex, out Triangle_t tri )
{
    int index = vertexIndex + TRIANGLES_OFFSET;
    tri.A = texelFetch( iChannel0,   index ).xyz;
    tri.B = texelFetch( iChannel0, index+1 ).xyz;
    tri.C = texelFetch( iChannel0, index+2 ).xyz;
    tri.materialID = 10;
}



/////////////////////////////////////////////////////////////////////////////
// Computes intersection between a plane and a ray.
// Returns true if there is an intersection where the ray parameter t is
// between tmin and tmax, otherwise returns false.
// If there is such an intersection, outputs the value of t, the position
// of the intersection (hitPos) and the normal vector at the intersection
// (hitNormal).
/////////////////////////////////////////////////////////////////////////////
bool IntersectPlane( in Plane_t pln, in Ray_t ray, in float tmin, in float tmax,
                     out float t, out vec3 hitPos, out vec3 hitNormal )
{
    vec3 N = vec3( pln.A, pln.B, pln.C );
    float NRd = dot( N, ray.d );
    float NRo = dot( N, ray.o );
    float t0 = (-pln.D - NRo) / NRd;
    if ( t0 < tmin || t0 > tmax ) return false;

    // We have a hit -- output results.
    t = t0;
    hitPos = ray.o + t0 * ray.d;
    hitNormal = normalize( N );
    return true;
}



/////////////////////////////////////////////////////////////////////////////
// Computes intersection between a plane and a ray.
// Returns true if there is an intersection where the ray parameter t is
// between tmin and tmax, otherwise returns false.
/////////////////////////////////////////////////////////////////////////////
bool IntersectPlane( in Plane_t pln, in Ray_t ray, in float tmin, in float tmax )
{
    vec3 N = vec3( pln.A, pln.B, pln.C );
    float NRd = dot( N, ray.d );
    float NRo = dot( N, ray.o );
    float t0 = (-pln.D - NRo) / NRd;
    if ( t0 < tmin || t0 > tmax ) return false;
    return true;
}



/////////////////////////////////////////////////////////////////////////////
// Computes intersection between a sphere and a ray.
// Returns true if there is an intersection where the ray parameter t is
// between tmin and tmax, otherwise returns false.
// If there is one or two such intersections, outputs the value of the
// smaller t, the position of the intersection (hitPos) and the normal
// vector at the intersection (hitNormal).
/////////////////////////////////////////////////////////////////////////////
bool IntersectSphere( in Sphere_t sph, in Ray_t ray, in float tmin, in float tmax,
                      out float t, out vec3 hitPos, out vec3 hitNormal )
{
    /////////////////////////////////
    // TASK: WRITE YOUR CODE HERE. //
    /////////////////////////////////

    vec3 movedRayOrigin = ray.o - sph.center;
    float a = 1.0; // actually ray.d * ray.d
    float b = 2.0 * dot( ray.d, movedRayOrigin );
    float c = dot( movedRayOrigin, movedRayOrigin ) - sph.radius * sph.radius;
    float d = b * b - 4.0 * a * c; // Discriminant.
    if ( d < 0.0 ) return false; // No intersection.

    float t0 = (-b - sqrt(d)) / (2.0 * a); // Try the smaller root.
    if ( t0 < tmin || t0 > tmax ) {
        t0 = (-b + sqrt(d)) / (2.0 * a); // Try the larger root.
        if ( t0 < tmin || t0 > tmax ) {
            return false;
        }
    }

    // We have a hit -- output results.
    t = t0;
    hitPos = ray.o + t0 * ray.d;
    hitNormal = normalize( movedRayOrigin + t0 * ray.d );
    return true;
}



/////////////////////////////////////////////////////////////////////////////
// Computes intersection between a sphere and a ray.
// Returns true if there is an intersection where the ray parameter t is
// between tmin and tmax, otherwise returns false.
/////////////////////////////////////////////////////////////////////////////
bool IntersectSphere( in Sphere_t sph, in Ray_t ray, in float tmin, in float tmax )
{
    /////////////////////////////////
    // TASK: WRITE YOUR CODE HERE. //
    /////////////////////////////////

    vec3 movedRayOrigin = ray.o - sph.center;
    float a = 1.0;
    float b = 2.0 * dot( ray.d, movedRayOrigin );
    float c = dot( movedRayOrigin, movedRayOrigin ) - sph.radius * sph.radius;
    float d = b * b - 4.0 * a * c; // Discriminant.
    if ( d < 0.0 ) return false; // No intersection.

    float t0 = (-b - sqrt(d)) / (2.0 * a); // Try the smaller root.
    if ( t0 < tmin || t0 > tmax ) {
        t0 = (-b + sqrt(d)) / (2.0 * a); // Try the larger root.
        if ( t0 < tmin || t0 > tmax ) {
            return false;
        }
    }
    return true;
}



bool IntersectTriangle( in Triangle_t tri, in Ray_t ray, in float tmin, in float tmax,
                        out float t, out vec3 hitPos, out vec3 hitNormal, out Barycentric_t bary )
{
    vec3 A_sub_Ro = tri.A - ray.o;
    vec3 A_sub_B = tri.A - tri.B;
    vec3 A_sub_C = tri.A - tri.C;

    mat3 beta_mat = mat3( A_sub_Ro, A_sub_C, ray.d );
    mat3 gamma_mat = mat3( A_sub_B, A_sub_Ro, ray.d );
    mat3 A_mat = mat3(A_sub_B, A_sub_C, ray.d);

    float detA = determinant(A_mat);
    if (abs(detA) < 1e-6) return false;

    float beta = determinant( beta_mat ) / detA;
    float gamma = determinant( gamma_mat ) / detA;

    if ( beta < 0.0 || gamma < 0.0 || beta + gamma > 1.0 ) return false;

    mat3 t_mat = mat3( A_sub_B, A_sub_C, A_sub_Ro );
    float t0 = determinant( t_mat ) / detA;

    if ( t0 < tmin || t0 > tmax ) return false;

    // We have a hit -- output results.
    t = t0;
    hitPos = ray.o + t0 * ray.d;
    hitNormal = normalize( cross( A_sub_B, A_sub_C ) );
    bary.alpha = 1.0 - beta - gamma;
    bary.beta = beta;
    bary.gamma = gamma;
    return true;
}



bool IntersectTriangle( in Triangle_t tri, in Ray_t ray, in float tmin, in float tmax )
{
    vec3 A_sub_Ro = tri.A - ray.o;
    vec3 A_sub_B = tri.A - tri.B;
    vec3 A_sub_C = tri.A - tri.C;

    mat3 beta_mat = mat3( A_sub_Ro, A_sub_C, ray.d );
    mat3 gamma_mat = mat3( A_sub_B, A_sub_Ro, ray.d );
    mat3 A_mat = mat3(A_sub_B, A_sub_C, ray.d);

    float detA = determinant(A_mat);
    if (abs(detA) < 1e-6) return false;

    float beta = determinant( beta_mat ) / detA;
    float gamma = determinant( gamma_mat ) / detA;

    if ( beta < 0.0 || gamma < 0.0 || beta + gamma > 1.0 ) return false;

    mat3 t_mat = mat3( A_sub_B, A_sub_C, A_sub_Ro );
    float t0 = determinant( t_mat ) / detA;

    if ( t0 < tmin || t0 > tmax ) return false;
    return true;
}



bool IntersectAABB( in Ray_t ray, in int AABB_idx )
{
    vec3 invD = vec3(
        ray.d.x == 0.0 ? 1e9 : 1.0 / ray.d.x,
        ray.d.y == 0.0 ? 1e9 : 1.0 / ray.d.y,
        ray.d.z == 0.0 ? 1e9 : 1.0 / ray.d.z
    );
    vec3 t_near = (AABB_MIN[AABB_idx] - ray.o) * invD;
    vec3 t_far = (AABB_MAX[AABB_idx] - ray.o) * invD;

    vec3 t_min = min(t_near, t_far);
    vec3 t_max = max(t_near, t_far);

    float t_min_max = max(max(t_min.x, t_min.y), t_min.z);
    float t_max_min = min(min(t_max.x, t_max.y), t_max.z);

    return t_min_max <= t_max_min && t_max_min >= 0.0;
}



bool IntersectNearestTriangle( in Ray_t ray, in float tmin, in float tmax,
                               out float t, out vec3 hitPos, out vec3 hitNormal,
                               out int hitMatID, out Barycentric_t bary )
{
    bool hasHitSomething = false;
    int vert_offset = 0;
    int vert_cnt;
    for ( int i = 0; i < NUM_VERTEX.length(); i++ ) {
        vert_cnt = NUM_VERTEX[i];
        if ( IntersectAABB( ray, i ) ) {
            Triangle_t tri;
            for ( int j = 0; j < vert_cnt; j += 3 ) {
                loadTriangle( vert_offset + j, tri );
                if ( IntersectTriangle( tri, ray, tmin, t,
                                        t, hitPos, hitNormal, bary ) ) {
                    hasHitSomething = true;
                    hitMatID = tri.materialID;
                }
            }
        }
        vert_offset += vert_cnt;
    }
    return hasHitSomething;
}



bool IntersectAnyTriangle( in Ray_t ray, in float tmin, in float tmax )
{
    int vert_offset = 0;
    int vert_cnt;
    for ( int i = 0; i < NUM_VERTEX.length(); i++ ) {
        if ( IntersectAABB( ray, i ) ) {
            vert_cnt = NUM_VERTEX[i];
            Triangle_t tri;
            for ( int j = 0; j < vert_cnt; j += 3 ) {
                loadTriangle( vert_offset + j, tri );
                if ( IntersectTriangle( tri, ray, tmin, tmax ) ) {
                    return true;
                }
            }
        }
        vert_offset += vert_cnt;
    }
    return false;
}



/////////////////////////////////////////////////////////////////////////////
// Computes (I_a * k_a) + k_shadow * I_source * [ k_d * (N.L) + k_r * (R.V)^n ].
// Input vectors L, N and V are pointing AWAY from surface point.
// Assume all vectors L, N and V are unit vectors.
/////////////////////////////////////////////////////////////////////////////
vec3 PhongLighting( in vec3 L, in vec3 N, in vec3 V, in bool inShadow,
                    in Material_t mat, in Light_t light )
{
    if ( inShadow ) {
        return light.I_a * mat.k_a;
    }
    else {
        vec3 R = reflect( -L, N );
        float N_dot_L = max( 0.0, dot( N, L ) );
        float R_dot_V = max( 0.0, dot( R, V ) );
        float R_dot_V_pow_n = ( R_dot_V == 0.0 )? 0.0 : pow( R_dot_V, mat.n );

        return light.I_a * mat.k_a +
               light.I_source * (mat.k_d * N_dot_L + mat.k_r * R_dot_V_pow_n);
    }
}



/////////////////////////////////////////////////////////////////////////////
// Casts a ray into the scene and returns color computed at the nearest
// intersection point. The color is the sum of light from all light sources,
// each computed using Phong Lighting Model, with consideration of
// whether the interesection point is being shadowed from the light.
// If there is no interesection, returns the background color, and outputs
// hasHit as false.
// If there is intersection, returns the computed color, and outputs
// hasHit as true, the 3D position of the intersection (hitPos), the
// normal vector at the intersection (hitNormal), and the k_rg value
// of the material of the intersected object.
/////////////////////////////////////////////////////////////////////////////
vec3 CastRay( in Ray_t ray,
              out bool hasHit, out vec3 hitPos, out vec3 hitNormal, out vec3 k_rg )
{
    // Find whether and where the ray hits some object.
    // Take the nearest hit point.

    bool hasHitSomething = false;
    float nearest_t = DEFAULT_TMAX;   // The ray parameter t at the nearest hit point.
    vec3 nearest_hitPos;              // 3D position of the nearest hit point.
    vec3 nearest_hitNormal;           // Normal vector at the nearest hit point.
    int nearest_hitMatID;             // MaterialID of the object at the nearest hit point.

    float temp_t;
    vec3 temp_hitPos;
    vec3 temp_hitNormal;
    bool temp_hasHit;

    /////////////////////////////////////////////////////////////////////////////
    // TASK:
    // * Try interesecting input ray with all the planes and spheres,
    //   and record the front-most (nearest) interesection.
    // * If there is interesection, need to record hasHitSomething,
    //   nearest_t, nearest_hitPos, nearest_hitNormal, nearest_hitMatID.
    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////
    // TASK: WRITE YOUR CODE HERE. //
    /////////////////////////////////

    Barycentric_t bary;
    hasHitSomething = IntersectNearestTriangle( ray, DEFAULT_TMIN, DEFAULT_TMAX,
                                                nearest_t, nearest_hitPos, nearest_hitNormal,
                                                nearest_hitMatID, bary );
    for ( int i = 0; i < NUM_PLANES; i++ ) {
        Plane_t pln;
        loadPlane( i, pln );
        if ( IntersectPlane( pln, ray, DEFAULT_TMIN, nearest_t,
                             temp_t, temp_hitPos, temp_hitNormal ) ) {
            hasHitSomething = true;
            nearest_t = temp_t;
            nearest_hitPos = temp_hitPos;
            nearest_hitNormal = temp_hitNormal;
            nearest_hitMatID = pln.materialID;
        }
    }
    for ( int i = 0; i < NUM_SPHERES; i++ ) {
        Sphere_t sph;
        loadSphere( i, sph );
        if ( IntersectSphere( sph, ray, DEFAULT_TMIN, nearest_t,
                              temp_t, temp_hitPos, temp_hitNormal ) ) {
            hasHitSomething = true;
            nearest_t = temp_t;
            nearest_hitPos = temp_hitPos;
            nearest_hitNormal = temp_hitNormal;
            nearest_hitMatID = sph.materialID;
        }
    }

    // One of the output results.
    hasHit = hasHitSomething;
    if ( !hasHitSomething ) return texture( iChannel2, ray.d ).rgb;

    vec3 I_local = vec3( 0.0 );  // Result color will be accumulated here.

    /////////////////////////////////////////////////////////////////////////////
    // TASK:
    // * Accumulate lighting from each light source on the nearest hit point.
    //   They are all accumulated into I_local.
    // * For each light source, make a shadow ray, and check if the shadow ray
    //   intersects any of the objects (the planes and spheres) between the
    //   nearest hit point and the light source.
    // * Then, call PhongLighting() to compute lighting for this light source.
    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////
    // TASK: WRITE YOUR CODE HERE. //
    /////////////////////////////////

    Material_t Material;
    loadMaterial( nearest_hitMatID, Material );
    // Accumulate lighting from each light source.
    for ( int i = 0; i < NUM_LIGHTS; i++ ) {
        Light_t Light;
        loadLight( i, Light );
        vec3 L = normalize( Light.position - nearest_hitPos );
        vec3 V = normalize( ray.o - nearest_hitPos );

        Ray_t shadowRay;
        shadowRay.o = nearest_hitPos;
        shadowRay.d = L;

        // Check if shadow ray intersects any object.
        // Only consider t between object and light source.
        bool inShadow = false;
        float tmax = length( Light.position - nearest_hitPos );
        inShadow = IntersectAnyTriangle( shadowRay, DEFAULT_TMIN, tmax );
        for ( int j = 0; !inShadow && j < NUM_PLANES; j++ ) {
            Plane_t Plane;
            loadPlane( j, Plane );
            inShadow = IntersectPlane( Plane, shadowRay, DEFAULT_TMIN, tmax );
        }
        for ( int j = 0; !inShadow && j < NUM_SPHERES; j++ ) {
            Sphere_t Sphere;
            loadSphere( j, Sphere );
            inShadow = IntersectSphere( Sphere, shadowRay, DEFAULT_TMIN, tmax );
        }

        I_local += PhongLighting( L, nearest_hitNormal, V, inShadow,
                                  Material, Light );
    }

    // Populate output results.
    hitPos = nearest_hitPos;
    hitNormal = nearest_hitNormal;
    k_rg = Material.k_rg;

    return I_local;
}



/////////////////////////////////////////////////////////////////////////////
// Execution of fragment shader starts here.
// 1. Initializes the scene.
// 2. Compute a primary ray for the current pixel (fragment).
// 3. Trace ray into the scene with NUM_ITERATIONS recursion levels.
/////////////////////////////////////////////////////////////////////////////
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Scale pixel 2D position such that its y coordinate is in [-1.0, 1.0].
    vec2 pixel_pos = (2.0 * fragCoord.xy - iResolution.xy) / iResolution.y;

    Camera_t cam;
    loadCamera( cam );

    // Create primary ray.
    float pixel_pos_z = -1.0 / tan(FOVY / 2.0);
    Ray_t pRay;
    pRay.o = cam.pos;
    pRay.d = normalize( pixel_pos.x * cam.x  +  pixel_pos.y * cam.y  +  pixel_pos_z * cam.z );

    // Start Ray Tracing.
    // Use iterations to emulate the recursion.

    vec3 I_result = vec3( 0.0 );
    vec3 compounded_k_rg = vec3( 1.0 );
    Ray_t nextRay = pRay;

    for ( int level = 0; level <= NUM_ITERATIONS; level++ )
    {
        bool hasHit;
        vec3 hitPos, hitNormal, k_rg;

        vec3 I_local = CastRay( nextRay, hasHit, hitPos, hitNormal, k_rg );

        I_result += compounded_k_rg * I_local;

        if ( !hasHit ) break;

        compounded_k_rg *= k_rg;

        nextRay = Ray_t( hitPos, normalize( reflect(nextRay.d, hitNormal) ) );
    }

    fragColor = vec4( I_result, 1.0 );
}
