from PIL import Image
import numpy as np

ROTATE = True
INPUT = 'texture/右2.png'
OUTPUT = 'texture/右2.txt'

image = Image.open(INPUT)
image = image.convert('RGBA')
image_data = np.asarray(image, dtype=np.float32) / 255.0

if ROTATE:
    x_range = range(image_data.shape[0]-1, -1, -1)
    y_range = range(0, image_data.shape[1], 1)
else:
    x_range = range(0, image_data.shape[0], 1)
    y_range = range(image_data.shape[1]-1, -1, -1)

with open(OUTPUT, 'w') as ofile:
    print('switch(idx){', file=ofile, end='')
    for y_idx, y in enumerate(y_range):
        for x_idx, x in enumerate(x_range):
            pixel = image_data[x, y]
            # print(f'case {x_idx+y_idx*image_data.shape[0]}:return vec4({pixel[0]:.3f},{pixel[1]:.3f},{pixel[2]:.3f},1.);', file=ofile, end='')
            print(f'C({x_idx+y_idx*image_data.shape[0]},{pixel[0]:.3f},{pixel[1]:.3f},{pixel[2]:.3f})', file=ofile, end='')
    print('}', file=ofile, end='')
