var data = [
[{o: 0.041, f: 24.561, l: "A", a: 0},
{o: 24.561, f: 53.757, l: "B", a: 1},
{o: 53.757, f: 72.732, l: "C", a: 0},
{o: 72.732, f: 101.222, l: "B", a: 1},
{o: 101.222, f: 140.401, l: "C", a: 0},
{o: 140.401, f: 198.951, l: "D", a: 1},
{o: 198.951, f: 270.897, l: "D", a: 0},
{o: 270.897, f: 350.273, l: "C", a: 1},
{o: 350.273, f: 373.29, l: "Z", a: 0}],
[{o: 0.024, f: 10.984, l: "A", a: 0},
{o: 10.984, f: 22.784, l: "A", a: 1},
{o: 22.784, f: 38.416, l: "B", a: 0},
{o: 38.416, f: 54.376, l: "B", a: 1},
{o: 54.376, f: 68.084, l: "B", a: 0},
{o: 68.084, f: 84.56, l: "B", a: 1},
{o: 84.56, f: 103.388, l: "B", a: 0},
{o: 103.388, f: 119.576, l: "B", a: 1},
{o: 119.576, f: 143.072, l: "B", a: 0},
{o: 143.072, f: 157.44, l: "B", a: 1},
{o: 157.44, f: 167.708, l: "B", a: 0},
{o: 167.708, f: 176.816, l: "B", a: 1},
{o: 176.816, f: 195.712, l: "B", a: 0},
{o: 195.712, f: 211.084, l: "E", a: 1},
{o: 211.084, f: 224.564, l: "E", a: 0},
{o: 224.564, f: 235.188, l: "E", a: 1},
{o: 235.188, f: 247.464, l: "C", a: 0},
{o: 247.464, f: 271.408, l: "C", a: 1},
{o: 271.408, f: 286.812, l: "A", a: 0},
{o: 286.812, f: 294.368, l: "A", a: 1},
{o: 294.368, f: 309.6, l: "D", a: 0},
{o: 309.6, f: 327.744, l: "F", a: 1},
{o: 327.744, f: 343.02, l: "G", a: 0},
{o: 343.02, f: 361.676, l: "H", a: 1},
{o: 361.676, f: 373.068, l: "I", a: 0}],
[{o: 0.024, f: 10.984, l: "F", a: 0},
{o: 10.984, f: 22.784, l: "G", a: 1},
{o: 22.784, f: 38.416, l: "B", a: 0},
{o: 38.416, f: 54.376, l: "B", a: 1},
{o: 54.376, f: 68.084, l: "A", a: 0},
{o: 68.084, f: 84.56, l: "B", a: 1},
{o: 84.56, f: 103.388, l: "B", a: 0},
{o: 103.388, f: 119.576, l: "A", a: 1},
{o: 119.576, f: 143.072, l: "A", a: 0},
{o: 143.072, f: 157.44, l: "D", a: 1},
{o: 157.44, f: 167.708, l: "D", a: 0},
{o: 167.708, f: 176.816, l: "H", a: 1},
{o: 176.816, f: 195.712, l: "B", a: 0},
{o: 195.712, f: 211.084, l: "E", a: 1},
{o: 211.084, f: 224.564, l: "E", a: 0},
{o: 224.564, f: 235.188, l: "E", a: 1},
{o: 235.188, f: 247.464, l: "C", a: 0},
{o: 247.464, f: 271.408, l: "C", a: 1},
{o: 271.408, f: 286.812, l: "I", a: 0},
{o: 286.812, f: 294.368, l: "J", a: 1},
{o: 294.368, f: 309.6, l: "K", a: 0},
{o: 309.6, f: 327.744, l: "L", a: 1},
{o: 327.744, f: 343.02, l: "M", a: 0},
{o: 343.02, f: 361.676, l: "N", a: 1},
{o: 361.676, f: 373.068, l: "O", a: 0}],
[{o: 0.68, f: 24.227, l: "5", a: 0},
{o: 24.227, f: 56.533, l: "1", a: 1},
{o: 56.533, f: 71.933, l: "4", a: 0},
{o: 71.933, f: 101.333, l: "1", a: 1},
{o: 101.333, f: 143.947, l: "4", a: 0},
{o: 143.947, f: 158.813, l: "3", a: 1},
{o: 158.813, f: 166.8, l: "2", a: 0},
{o: 166.8, f: 177.627, l: "3", a: 1},
{o: 177.627, f: 197.587, l: "1", a: 0},
{o: 197.587, f: 223.707, l: "2", a: 1},
{o: 223.707, f: 233.64, l: "3", a: 0},
{o: 233.64, f: 263.16, l: "2", a: 1},
{o: 263.16, f: 271.16, l: "3", a: 0},
{o: 271.16, f: 281.827, l: "7", a: 1},
{o: 281.827, f: 290.573, l: "5", a: 0},
{o: 290.573, f: 349.853, l: "1", a: 1},
{o: 349.853, f: 357.507, l: "8", a: 0},
{o: 357.507, f: 370.76, l: "6", a: 1}],
[{o: 0, f: 41.72, l: "a", a: 0},
{o: 41.72, f: 88.655, l: "a", a: 1},
{o: 88.655, f: 107.28, l: "b", a: 0},
{o: 107.28, f: 147.51, l: "c", a: 1},
{o: 147.51, f: 275.65, l: "d", a: 0},
{o: 275.65, f: 317.37, l: "c", a: 1},
{o: 317.37, f: 373.245, l: "e", a: 0}],
[{o: 0, f: 2.763, l: "n1", a: 0},
{o: 2.763, f: 18.204, l: "B", a: 1},
{o: 18.204, f: 66.328, l: "A", a: 0},
{o: 66.328, f: 113.65, l: "A", a: 1},
{o: 113.65, f: 271.256, l: "n3", a: 0},
{o: 271.256, f: 286.186, l: "B", a: 1},
{o: 286.186, f: 373.052, l: "n4", a: 0}],
[{o: 0, f: 0.016, l: "F", a: 0},
{o: 0.016, f: 0.016, l: "B", a: 1},
{o: 0.016, f: 19.48, l: "A", a: 0},
{o: 19.48, f: 51.688, l: "C", a: 1},
{o: 51.688, f: 70.752, l: "A", a: 0},
{o: 70.752, f: 100.448, l: "C", a: 1},
{o: 100.448, f: 186.62, l: "A", a: 0},
{o: 186.62, f: 197.204, l: "E", a: 1},
{o: 197.204, f: 300.54, l: "A", a: 0},
{o: 300.54, f: 373.072, l: "E", a: 1},
{o: 373.072, f: 373.213, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000660.ogg";
