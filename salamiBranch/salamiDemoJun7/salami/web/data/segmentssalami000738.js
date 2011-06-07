var data = [
[{o: 0.418, f: 11.099, l: "A", a: 0},
{o: 11.099, f: 21.681, l: "X", a: 1},
{o: 21.681, f: 32.117, l: "A", a: 0},
{o: 32.117, f: 42.728, l: "X", a: 1},
{o: 42.728, f: 53.151, l: "A", a: 0},
{o: 53.151, f: 63.983, l: "X", a: 1},
{o: 63.983, f: 74.967, l: "B", a: 0},
{o: 74.967, f: 85.92, l: "X", a: 1},
{o: 85.92, f: 96.732, l: "A", a: 0},
{o: 96.732, f: 107.574, l: "X", a: 1},
{o: 107.574, f: 118.295, l: "A", a: 0},
{o: 118.295, f: 129.127, l: "X", a: 1},
{o: 129.127, f: 140.036, l: "B", a: 0},
{o: 140.036, f: 151.072, l: "X", a: 1},
{o: 151.072, f: 161.851, l: "A", a: 0},
{o: 161.851, f: 172.808, l: "X", a: 1},
{o: 172.808, f: 183.786, l: "A", a: 0},
{o: 183.786, f: 194.777, l: "X", a: 1},
{o: 194.777, f: 205.746, l: "A", a: 0},
{o: 205.746, f: 216.604, l: "X", a: 1},
{o: 216.604, f: 227.388, l: "A", a: 0},
{o: 227.388, f: 238.457, l: "X", a: 1},
{o: 238.457, f: 249.504, l: "B", a: 0},
{o: 249.504, f: 260.66, l: "X", a: 1},
{o: 260.66, f: 271.699, l: "B", a: 0},
{o: 271.699, f: 282.942, l: "X", a: 1},
{o: 282.942, f: 294.06, l: "A", a: 0},
{o: 294.06, f: 305.14, l: "X", a: 1},
{o: 305.14, f: 316.204, l: "A", a: 0},
{o: 316.204, f: 334.002, l: "X", a: 1}],
[{o: 0.004, f: 23.328, l: "C", a: 0},
{o: 23.328, f: 37.836, l: "C", a: 1},
{o: 37.836, f: 64.008, l: "C", a: 0},
{o: 64.008, f: 87.98, l: "C", a: 1},
{o: 87.98, f: 106.82, l: "C", a: 0},
{o: 106.82, f: 120.96, l: "C", a: 1},
{o: 120.96, f: 143.512, l: "B", a: 0},
{o: 143.512, f: 173.416, l: "C", a: 1},
{o: 173.416, f: 193.364, l: "C", a: 0},
{o: 193.364, f: 217.168, l: "C", a: 1},
{o: 217.168, f: 230.12, l: "A", a: 0},
{o: 230.12, f: 238.404, l: "A", a: 1},
{o: 238.404, f: 260.608, l: "C", a: 0},
{o: 260.608, f: 273.04, l: "D", a: 1},
{o: 273.04, f: 306.412, l: "B", a: 0},
{o: 306.412, f: 327.324, l: "E", a: 1}],
[{o: 0.004, f: 23.328, l: "D", a: 0},
{o: 23.328, f: 37.836, l: "C", a: 1},
{o: 37.836, f: 64.008, l: "C", a: 0},
{o: 64.008, f: 87.98, l: "A", a: 1},
{o: 87.98, f: 106.82, l: "E", a: 0},
{o: 106.82, f: 120.96, l: "E", a: 1},
{o: 120.96, f: 143.512, l: "B", a: 0},
{o: 143.512, f: 173.416, l: "E", a: 1},
{o: 173.416, f: 193.364, l: "E", a: 0},
{o: 193.364, f: 217.168, l: "C", a: 1},
{o: 217.168, f: 230.12, l: "F", a: 0},
{o: 230.12, f: 238.404, l: "G", a: 1},
{o: 238.404, f: 260.608, l: "A", a: 0},
{o: 260.608, f: 273.04, l: "H", a: 1},
{o: 273.04, f: 306.412, l: "B", a: 0},
{o: 306.412, f: 327.324, l: "I", a: 1}],
[{o: 1.027, f: 9.933, l: "8", a: 0},
{o: 9.933, f: 15.907, l: "4", a: 1},
{o: 15.907, f: 24.88, l: "5", a: 0},
{o: 24.88, f: 35.653, l: "4", a: 1},
{o: 35.653, f: 45.44, l: "5", a: 0},
{o: 45.44, f: 63.68, l: "4", a: 1},
{o: 63.68, f: 84.92, l: "2", a: 0},
{o: 84.92, f: 95.693, l: "1", a: 1},
{o: 95.693, f: 110.533, l: "3", a: 0},
{o: 110.533, f: 127.413, l: "1", a: 1},
{o: 127.413, f: 143.187, l: "2", a: 0},
{o: 143.187, f: 182.76, l: "3", a: 1},
{o: 182.76, f: 205.267, l: "1", a: 0},
{o: 205.267, f: 215.467, l: "7", a: 1},
{o: 215.467, f: 237.373, l: "1", a: 0},
{o: 237.373, f: 280.467, l: "2", a: 1},
{o: 280.467, f: 303.347, l: "3", a: 0},
{o: 303.347, f: 323.667, l: "1", a: 1},
{o: 323.667, f: 333.907, l: "6", a: 0}],
[{o: 0, f: 20.86, l: "a", a: 0},
{o: 20.86, f: 85.675, l: "b", a: 1},
{o: 85.675, f: 157.195, l: "b", a: 0},
{o: 157.195, f: 172.84, l: "c", a: 1},
{o: 172.84, f: 194.445, l: "a", a: 0},
{o: 194.445, f: 260.75, l: "b", a: 1},
{o: 260.75, f: 333.76, l: "b", a: 0}],
[{o: 0, f: 0.894, l: "n1", a: 0},
{o: 0.894, f: 11.529, l: "A", a: 1},
{o: 11.529, f: 21.85, l: "n2", a: 0},
{o: 21.85, f: 41.146, l: "D", a: 1},
{o: 41.146, f: 53.313, l: "A", a: 0},
{o: 53.313, f: 63.332, l: "n4", a: 1},
{o: 63.332, f: 74.641, l: "E", a: 0},
{o: 74.641, f: 85.995, l: "C", a: 1},
{o: 85.995, f: 105.511, l: "D", a: 0},
{o: 105.511, f: 118.062, l: "A", a: 1},
{o: 118.062, f: 128.476, l: "B", a: 0},
{o: 128.476, f: 139.749, l: "E", a: 1},
{o: 139.749, f: 151.708, l: "C", a: 0},
{o: 151.708, f: 163.143, l: "A", a: 1},
{o: 163.143, f: 173.453, l: "B", a: 0},
{o: 173.453, f: 184.506, l: "A", a: 1},
{o: 184.506, f: 195.152, l: "B", a: 0},
{o: 195.152, f: 206.321, l: "A", a: 1},
{o: 206.321, f: 217.223, l: "B", a: 0},
{o: 217.223, f: 228.101, l: "A", a: 1},
{o: 228.101, f: 239.107, l: "B", a: 0},
{o: 239.107, f: 248.79, l: "B", a: 1},
{o: 248.79, f: 261.341, l: "C", a: 0},
{o: 261.341, f: 271.372, l: "B", a: 1},
{o: 271.372, f: 283.585, l: "C", a: 0},
{o: 283.585, f: 294.661, l: "A", a: 1},
{o: 294.661, f: 305.749, l: "B", a: 0},
{o: 305.749, f: 315.478, l: "A", a: 1},
{o: 315.478, f: 334.042, l: "n23", a: 0}],
[{o: 0, f: 0.004, l: "E", a: 0},
{o: 0.004, f: 0.004, l: "B", a: 1},
{o: 0.004, f: 61.924, l: "A", a: 0},
{o: 61.924, f: 89.328, l: "D", a: 1},
{o: 89.328, f: 127.02, l: "B", a: 0},
{o: 127.02, f: 155.68, l: "D", a: 1},
{o: 155.68, f: 236.26, l: "C", a: 0},
{o: 236.26, f: 286.324, l: "D", a: 1},
{o: 286.324, f: 327.324, l: "C", a: 0},
{o: 327.324, f: 334.003, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000738.ogg";
