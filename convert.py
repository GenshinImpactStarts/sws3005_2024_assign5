import re

vec3_pattern = re.compile(r'vec3\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\);?')

AABB = ([float('inf')] * 3, [float('-inf')] * 3)

with open('output.txt', 'r') as file:
    for idx, line in enumerate(file):
        matches = vec3_pattern.finditer(line)
        for match in matches:
            print(f'case {idx}: return vec4({match.group(1)}, {match.group(2)}, {match.group(3)}, 0.0);')
            for i in range(3):
                AABB[0][i] = min(AABB[0][i], float(match.group(i + 1)))
                AABB[1][i] = max(AABB[1][i], float(match.group(i + 1)))
print(f'AABB: {AABB}')
