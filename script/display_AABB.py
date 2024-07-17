import matplotlib.pyplot as plt
import matplotlib.patches as patches
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

aabb_bounds = {
    "FRONT": {"MIN": (-0.45, 1.40, 0.00), "MAX": (0.59, 2.91, 0.62)},
    "BACK": {"MIN": (-0.45, 1.25, -0.24), "MAX": (0.59, 3.17, 0.22)},
    "TOP": {"MIN": (-0.23, 2.64, -0.05), "MAX": (0.33, 3.23, 0.56)},
    "BOTTOM": {"MIN": (-0.45, 0.67, -0.21), "MAX": (0.59, 1.95, 0.51)}
}

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

for name, bounds in aabb_bounds.items():
    min_point = bounds["MIN"]
    max_point = bounds["MAX"]
    points = np.array([[min_point[0], min_point[1], min_point[2]],
                       [min_point[0], min_point[1], max_point[2]],
                       [min_point[0], max_point[1], min_point[2]],
                       [min_point[0], max_point[1], max_point[2]],
                       [max_point[0], min_point[1], min_point[2]],
                       [max_point[0], min_point[1], max_point[2]],
                       [max_point[0], max_point[1], min_point[2]],
                       [max_point[0], max_point[1], max_point[2]]])

    for start, end in [[0, 1], [2, 3], [4, 5], [6, 7],
                       [0, 2], [1, 3], [4, 6], [5, 7],
                       [0, 4], [1, 5], [2, 6], [3, 7]]:
        ax.plot3D(*zip(*points[[start, end], :]), color="b")

ax.set_xlabel('X axis')
ax.set_ylabel('Y axis')
ax.set_zlabel('Z axis')
plt.show()
