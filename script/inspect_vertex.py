import re
import matplotlib.pyplot as plt

vec3_pattern = re.compile(r'vec3\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\);?')

triangles_str = []

x_coords, y_coords, z_coords = [], [], []

points_0 = []
points_1 = []

cross_cnt = 0

AABB = ([float('inf')] * 3, [float('-inf')] * 3)
AABB_0 = ([float('inf')] * 3, [float('-inf')] * 3)
AABB_1 = ([float('inf')] * 3, [float('-inf')] * 3)

# read the vertex data
with open('../data/output-shenzi-2.txt', 'r') as file:
    points = []
    for line in file:
        matches = vec3_pattern.finditer(line)
        for match in matches:
            points.append((match.group(1), match.group(2), match.group(3)))
        if len(points) == 3:
            triangles_str.append(points)
            points = []

# ------------------------------------------------

# print AABB of the whole model
for tri_str in triangles_str:
    tri = [None] * len(tri_str)
    for i in range(3):
        tri[i] = (float(tri_str[i][0]), float(tri_str[i][1]), float(tri_str[i][2]))
    for j in range(3):
        for i in range(3):
            AABB[0][i] = min(AABB[0][i], tri[j][i])
            AABB[1][i] = max(AABB[1][i], tri[j][i])
print(f'AABB: {AABB}')

# ------------------------------------------------

# find the best board

AXIS = 2
POSITIVE_NOT_CROSS = False

res = []
# for board in range(int(AABB[0][AXIS]*100)-1, int(AABB[1][AXIS]*100)+2, 1):
for board in range(22, 23, 1):
    board /= 100.0
    points_0, points_1 = [], []
    cross_cnt = 0
    cross_delta = 0
    for tri_str in triangles_str:
        tri = [None] * len(tri_str)
        for i in range(3):
            tri[i] = (float(tri_str[i][0]), float(tri_str[i][1]), float(tri_str[i][2]))
        cond1 = tri[0][AXIS] < board or tri[1][AXIS] < board or tri[2][AXIS] < board
        cond2 = tri[0][AXIS] > board or tri[1][AXIS] > board or tri[2][AXIS] > board
        if (POSITIVE_NOT_CROSS and cond1) or (not POSITIVE_NOT_CROSS and cond2):
            for j in range(3):
            #     for i in range(3):
            #         AABB_0[0][i] = min(AABB_0[0][i], tri[j][i])
            #         AABB_0[1][i] = max(AABB_0[1][i], tri[j][i])
                points_0.append(tri_str[j])
            if (POSITIVE_NOT_CROSS and cond2) or (not POSITIVE_NOT_CROSS and cond1):
                cross_cnt += 1
                if POSITIVE_NOT_CROSS:
                    cross_delta = max(cross_delta, max(tri, key=lambda point: point[AXIS])[AXIS] - board)
                else:
                    cross_delta = max(cross_delta, board - min(tri, key=lambda point: point[AXIS])[AXIS])
        else:
            for j in range(3):
        #         for i in range(3):
        #             AABB_1[0][i] = min(AABB_1[0][i], tri[j][i])
        #             AABB_1[1][i] = max(AABB_1[1][i], tri[j][i])
                points_1.append(tri_str[j])
    res.append((board, len(points_0), len(points_1), cross_cnt, cross_delta))
res = [item for item in res if item[1] > 50 and item[2] > 50]
res.sort(key=lambda item: (item[4], item[3], item[0]))

for item in res:
    print(item)

for i, (x, y, z) in enumerate(points_0):
    # print(f'case {i}: return vec4({x}, {y}, {z}, 0.0);')
    print(f'vec3({x}, {y}, {z});')

print('--------------------------------')

for i, (x, y, z) in enumerate(points_1):
    # print(f'case {i}: return vec4({x}, {y}, {z}, 0.0);')
    print(f'vec3({x}, {y}, {z});')

# ------------------------------------------------

# print(f'AABB0: {AABB_0}')
# print(f'AABB1: {AABB_1}')

# ------------------------------------------------

# print figure

# AXIS = 2

# for tri_str in triangles_str:
#     tri = [None] * len(tri_str)
#     for i in range(3):
#         tri[i] = (float(tri_str[i][0]), float(tri_str[i][1]), float(tri_str[i][2]))
#     point = min(tri, key=lambda point: point[AXIS])
#     x_coords.append(point[0])
#     y_coords.append(point[1])
#     z_coords.append(point[2])

# plt.figure(figsize=(10, 3))
# plt.hist(x_coords, bins=30, alpha=0.7, label='X Axis')
# plt.title('Point Density on X Axis')
# plt.xlabel('Value')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()

# 绘制y轴上的点密度图
# plt.figure(figsize=(10, 3))
# plt.hist(y_coords, bins=30, alpha=0.7, label='Y Axis')
# plt.title('Point Density on Y Axis')
# plt.xlabel('Value')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()

# 绘制z轴上的点密度图
# plt.figure(figsize=(10, 3))
# plt.hist(z_coords, bins=30, alpha=0.7, label='Z Axis')
# plt.title('Point Density on Z Axis')
# plt.xlabel('Value')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()

# print(len(x_coords), len(y_coords), len(z_coords))

# print(len(points_0), len(points_1))

# print(cross_cnt)
