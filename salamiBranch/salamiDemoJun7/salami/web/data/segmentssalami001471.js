var data = [
[{o: 0.255, f: 69.458, l: "H", a: 0},
{o: 69.458, f: 84.214, l: "A", a: 1},
{o: 84.214, f: 99.181, l: "B", a: 0},
{o: 99.181, f: 113.946, l: "C", a: 1},
{o: 113.946, f: 128.814, l: "A", a: 0},
{o: 128.814, f: 143.592, l: "D", a: 1},
{o: 143.592, f: 158.577, l: "E", a: 0},
{o: 158.577, f: 173.404, l: "C", a: 1},
{o: 173.404, f: 188.243, l: "B", a: 0},
{o: 188.243, f: 203.089, l: "D", a: 1},
{o: 203.089, f: 217.944, l: "E", a: 0},
{o: 217.944, f: 232.821, l: "C", a: 1},
{o: 232.821, f: 247.705, l: "B", a: 0},
{o: 247.705, f: 262.476, l: "C", a: 1},
{o: 262.476, f: 282.229, l: "A", a: 0}],
[{o: 0.156, f: 11.128, l: "F", a: 0},
{o: 11.128, f: 24.928, l: "C", a: 1},
{o: 24.928, f: 34.828, l: "C", a: 0},
{o: 34.828, f: 50.216, l: "E", a: 1},
{o: 50.216, f: 67.452, l: "E", a: 0},
{o: 67.452, f: 76.1, l: "D", a: 1},
{o: 76.1, f: 84.68, l: "D", a: 0},
{o: 84.68, f: 98.124, l: "A", a: 1},
{o: 98.124, f: 120.628, l: "D", a: 0},
{o: 120.628, f: 128.96, l: "B", a: 1},
{o: 128.96, f: 143.792, l: "B", a: 0},
{o: 143.792, f: 158.448, l: "B", a: 1},
{o: 158.448, f: 173.3, l: "D", a: 0},
{o: 173.3, f: 188.116, l: "A", a: 1},
{o: 188.116, f: 203.18, l: "B", a: 0},
{o: 203.18, f: 217.856, l: "G", a: 1},
{o: 217.856, f: 232.708, l: "D", a: 0},
{o: 232.708, f: 248.932, l: "A", a: 1},
{o: 248.932, f: 269.016, l: "D", a: 0},
{o: 269.016, f: 278.612, l: "D", a: 1}],
[{o: 0.156, f: 11.128, l: "C", a: 0},
{o: 11.128, f: 24.928, l: "E", a: 1},
{o: 24.928, f: 34.828, l: "F", a: 0},
{o: 34.828, f: 50.216, l: "G", a: 1},
{o: 50.216, f: 67.452, l: "H", a: 0},
{o: 67.452, f: 76.1, l: "I", a: 1},
{o: 76.1, f: 84.68, l: "D", a: 0},
{o: 84.68, f: 98.124, l: "A", a: 1},
{o: 98.124, f: 120.628, l: "D", a: 0},
{o: 120.628, f: 128.96, l: "J", a: 1},
{o: 128.96, f: 143.792, l: "B", a: 0},
{o: 143.792, f: 158.448, l: "K", a: 1},
{o: 158.448, f: 173.3, l: "D", a: 0},
{o: 173.3, f: 188.116, l: "A", a: 1},
{o: 188.116, f: 203.18, l: "B", a: 0},
{o: 203.18, f: 217.856, l: "L", a: 1},
{o: 217.856, f: 232.708, l: "D", a: 0},
{o: 232.708, f: 248.932, l: "A", a: 1},
{o: 248.932, f: 269.016, l: "D", a: 0},
{o: 269.016, f: 278.612, l: "D", a: 1}],
[{o: 0.627, f: 3.707, l: "8", a: 0},
{o: 3.707, f: 13.733, l: "3", a: 1},
{o: 13.733, f: 23.68, l: "4", a: 0},
{o: 23.68, f: 38.933, l: "3", a: 1},
{o: 38.933, f: 46.64, l: "4", a: 0},
{o: 46.64, f: 58.733, l: "5", a: 1},
{o: 58.733, f: 68.213, l: "6", a: 0},
{o: 68.213, f: 98.827, l: "1", a: 1},
{o: 98.827, f: 113.653, l: "2", a: 0},
{o: 113.653, f: 143.333, l: "1", a: 1},
{o: 143.333, f: 173.067, l: "2", a: 0},
{o: 173.067, f: 202.72, l: "1", a: 1},
{o: 202.72, f: 232.013, l: "2", a: 0},
{o: 232.013, f: 248.707, l: "1", a: 1},
{o: 248.707, f: 262.133, l: "2", a: 0},
{o: 262.133, f: 277.88, l: "1", a: 1},
{o: 277.88, f: 282.093, l: "7", a: 0}],
[{o: 0, f: 68.54, l: "a", a: 0},
{o: 68.54, f: 82.695, l: "b", a: 1},
{o: 82.695, f: 98.34, l: "c", a: 0},
{o: 98.34, f: 113.24, l: "d", a: 1},
{o: 113.24, f: 128.14, l: "b", a: 0},
{o: 128.14, f: 188.485, l: "e", a: 1},
{o: 188.485, f: 248.085, l: "e", a: 0},
{o: 248.085, f: 262.24, l: "d", a: 1},
{o: 262.24, f: 280.12, l: "b", a: 0},
{o: 280.12, f: 281.61, l: "f", a: 1}],
[{o: 0, f: 11.413, l: "n1", a: 0},
{o: 11.413, f: 21.188, l: "B", a: 1},
{o: 21.188, f: 26.053, l: "n2", a: 0},
{o: 26.053, f: 38.545, l: "B", a: 1},
{o: 38.545, f: 52.419, l: "n3", a: 0},
{o: 52.419, f: 64.575, l: "B", a: 1},
{o: 64.575, f: 70.798, l: "n4", a: 0},
{o: 70.798, f: 85.647, l: "D", a: 1},
{o: 85.647, f: 98.615, l: "C", a: 0},
{o: 98.615, f: 115.322, l: "A", a: 1},
{o: 115.322, f: 129.207, l: "D", a: 0},
{o: 129.207, f: 143.592, l: "E", a: 1},
{o: 143.592, f: 157.977, l: "F", a: 0},
{o: 157.977, f: 174.719, l: "A", a: 1},
{o: 174.719, f: 188.604, l: "C", a: 0},
{o: 188.604, f: 202.977, l: "E", a: 1},
{o: 202.977, f: 217.362, l: "F", a: 0},
{o: 217.362, f: 234.127, l: "A", a: 1},
{o: 234.127, f: 247.107, l: "C", a: 0},
{o: 247.107, f: 263.802, l: "A", a: 1},
{o: 263.802, f: 276.782, l: "D", a: 0},
{o: 276.782, f: 282.03, l: "n12", a: 1}],
[{o: 0, f: 0.04, l: "H", a: 0},
{o: 0.04, f: 7.8, l: "G", a: 1},
{o: 7.8, f: 53.716, l: "B", a: 0},
{o: 53.716, f: 83.032, l: "A", a: 1},
{o: 83.032, f: 99.516, l: "F", a: 0},
{o: 99.516, f: 112.74, l: "E", a: 1},
{o: 112.74, f: 127.332, l: "A", a: 0},
{o: 127.332, f: 143.568, l: "F", a: 1},
{o: 143.568, f: 158.928, l: "C", a: 0},
{o: 158.928, f: 172.148, l: "E", a: 1},
{o: 172.148, f: 202.956, l: "F", a: 0},
{o: 202.956, f: 218.336, l: "C", a: 1},
{o: 218.336, f: 231.56, l: "E", a: 0},
{o: 231.56, f: 248.236, l: "F", a: 1},
{o: 248.236, f: 261.232, l: "E", a: 0},
{o: 261.232, f: 278.612, l: "A", a: 1},
{o: 278.612, f: 282.176, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001471.ogg";