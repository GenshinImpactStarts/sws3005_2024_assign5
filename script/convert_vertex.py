import re
from win32con import CF_UNICODETEXT
from win32clipboard import OpenClipboard, CloseClipboard, EmptyClipboard, SetClipboardData

vec3_pattern = re.compile(r'vec3\((-?[\d.]+), (-?[\d.]+), (-?[\d.]+)\);?')

AABB = ([float('inf')] * 3, [float('-inf')] * 3)
cnt = 0

with open('../data/output-jio2.txt', 'r') as file:
    data = []
    for idx, line in enumerate(file):
        matches = vec3_pattern.finditer(line)
        for match in matches:
            p = [match.group(1), match.group(2), match.group(3)]
            p[1] = '{:.6f}'.format(float(p[1]) + 0.219530)
            data.append(f'case {210+162+114+93+96+idx}: return vec4({p[0]}, {p[1]}, {p[2]}, 0.0);\n')
            OpenClipboard()
            EmptyClipboard()
            SetClipboardData(CF_UNICODETEXT, ''.join(data))
            CloseClipboard()
            # print(f'case {210+162+114+93+96+idx}: return vec4({match.group(1)}, {match.group(2)}, {match.group(3)}, 0.0);')
            cnt += 1
            for i in range(3):
                AABB[0][i] = min(AABB[0][i], float(p[i]))
                AABB[1][i] = max(AABB[1][i], float(p[i]))
print(f'AABB: {AABB}')
print(f'cnt: {cnt}')
