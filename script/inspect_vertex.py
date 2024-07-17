import re
import matplotlib.pyplot as plt

# 正则表达式模式，用于匹配vec3坐标
vec3_pattern = re.compile(r'vec3\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\);?')

# 用于存储x, y, z坐标的列表
x_coords, y_coords, z_coords = [], [], []

# 读取文件并提取所有坐标
with open('../data/output.txt', 'r') as file:
    points = []
    for line in file:
        matches = vec3_pattern.finditer(line)
        for match in matches:
            points.append((match.group(1), match.group(2), match.group(3)))
        if len(points) == 3:
            p = min(points, key=lambda point: point[1])
            x_coords.append(p[0])
            y_coords.append(p[1])
            z_coords.append(p[2])
            points = []

x_coords.sort()
y_coords.sort()
z_coords.sort()

# 绘制x轴上的点密度图
# plt.figure(figsize=(10, 3))
# plt.hist(x_coords, bins=30, alpha=0.7, label='X Axis')
# plt.title('Point Density on X Axis')
# plt.xlabel('Value')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()

# 绘制y轴上的点密度图
plt.figure(figsize=(10, 3))
plt.hist(y_coords, bins=100, alpha=0.7, label='Y Axis')
plt.title('Point Density on Y Axis')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.legend()
plt.show()

# 绘制z轴上的点密度图
# plt.figure(figsize=(10, 3))
# plt.hist(z_coords, bins=30, alpha=0.7, label='Z Axis')
# plt.title('Point Density on Z Axis')
# plt.xlabel('Value')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()
