import re

section_idx = 0
section_cnt = 0
with open('../data/camera.txt') as file:
    for line in file:
        line = line.strip()
        if section_idx == 0:
            print(f'case {section_cnt}:')
        elif section_idx == 1 or section_idx == 3:
            print(f'    {line}')
        section_idx += 1
        if section_idx == 6:
            section_idx = 0
            section_cnt += 1
            print('    break;')
