var data = [
[{o: 0.077, f: 33.667, l: "A", a: 0},
{o: 33.667, f: 47.508, l: "A'", a: 1},
{o: 47.508, f: 69.07, l: "B", a: 0},
{o: 69.07, f: 82.929, l: "A'", a: 1},
{o: 82.929, f: 152.926, l: "C", a: 0},
{o: 152.926, f: 185.644, l: "A", a: 1},
{o: 185.644, f: 199.576, l: "A'", a: 0},
{o: 199.576, f: 269.978, l: "C", a: 1},
{o: 269.978, f: 301.788, l: "A", a: 0},
{o: 301.788, f: 320.46, l: "A'", a: 1},
{o: 320.46, f: 338.326, l: "B", a: 0},
{o: 338.326, f: 352.771, l: "A", a: 1},
{o: 352.771, f: 397.817, l: "C'", a: 0}],
[{o: 0.028, f: 10.416, l: "J", a: 0},
{o: 10.416, f: 20.676, l: "J", a: 1},
{o: 20.676, f: 29.212, l: "J", a: 0},
{o: 29.212, f: 36.284, l: "J", a: 1},
{o: 36.284, f: 47.028, l: "J", a: 0},
{o: 47.028, f: 54.004, l: "G", a: 1},
{o: 54.004, f: 61.496, l: "J", a: 0},
{o: 61.496, f: 76.248, l: "J", a: 1},
{o: 76.248, f: 84.5, l: "J", a: 0},
{o: 84.5, f: 97.58, l: "G", a: 1},
{o: 97.58, f: 110.504, l: "J", a: 0},
{o: 110.504, f: 123.516, l: "G", a: 1},
{o: 123.516, f: 136.456, l: "J", a: 0},
{o: 136.456, f: 149.456, l: "J", a: 1},
{o: 149.456, f: 157.984, l: "J", a: 0},
{o: 157.984, f: 174.696, l: "J", a: 1},
{o: 174.696, f: 181.428, l: "J", a: 0},
{o: 181.428, f: 192.512, l: "G", a: 1},
{o: 192.512, f: 201.124, l: "J", a: 0},
{o: 201.124, f: 214.272, l: "G", a: 1},
{o: 214.272, f: 230.044, l: "J", a: 0},
{o: 230.044, f: 241.448, l: "J", a: 1},
{o: 241.448, f: 252.716, l: "J", a: 0},
{o: 252.716, f: 264.044, l: "J", a: 1},
{o: 264.044, f: 270.536, l: "G", a: 0},
{o: 270.536, f: 282.62, l: "G", a: 1},
{o: 282.62, f: 294.94, l: "J", a: 0},
{o: 294.94, f: 307.704, l: "J", a: 1},
{o: 307.704, f: 316.888, l: "G", a: 0},
{o: 316.888, f: 327.744, l: "G", a: 1},
{o: 327.744, f: 334.176, l: "J", a: 0},
{o: 334.176, f: 346.816, l: "G", a: 1},
{o: 346.816, f: 359.796, l: "J", a: 0},
{o: 359.796, f: 369.1, l: "G", a: 1},
{o: 369.1, f: 385.448, l: "J", a: 0},
{o: 385.448, f: 392.392, l: "J", a: 1}],
[{o: 0.028, f: 10.416, l: "J", a: 0},
{o: 10.416, f: 20.676, l: "E", a: 1},
{o: 20.676, f: 29.212, l: "L", a: 0},
{o: 29.212, f: 36.284, l: "F", a: 1},
{o: 36.284, f: 47.028, l: "D", a: 0},
{o: 47.028, f: 54.004, l: "G", a: 1},
{o: 54.004, f: 61.496, l: "O", a: 0},
{o: 61.496, f: 76.248, l: "F", a: 1},
{o: 76.248, f: 84.5, l: "D", a: 0},
{o: 84.5, f: 97.58, l: "I", a: 1},
{o: 97.58, f: 110.504, l: "C", a: 0},
{o: 110.504, f: 123.516, l: "N", a: 1},
{o: 123.516, f: 136.456, l: "E", a: 0},
{o: 136.456, f: 149.456, l: "E", a: 1},
{o: 149.456, f: 157.984, l: "M", a: 0},
{o: 157.984, f: 174.696, l: "E", a: 1},
{o: 174.696, f: 181.428, l: "A", a: 0},
{o: 181.428, f: 192.512, l: "B", a: 1},
{o: 192.512, f: 201.124, l: "D", a: 0},
{o: 201.124, f: 214.272, l: "N", a: 1},
{o: 214.272, f: 230.044, l: "C", a: 0},
{o: 230.044, f: 241.448, l: "E", a: 1},
{o: 241.448, f: 252.716, l: "H", a: 0},
{o: 252.716, f: 264.044, l: "H", a: 1},
{o: 264.044, f: 270.536, l: "P", a: 0},
{o: 270.536, f: 282.62, l: "G", a: 1},
{o: 282.62, f: 294.94, l: "K", a: 0},
{o: 294.94, f: 307.704, l: "K", a: 1},
{o: 307.704, f: 316.888, l: "I", a: 0},
{o: 316.888, f: 327.744, l: "G", a: 1},
{o: 327.744, f: 334.176, l: "A", a: 0},
{o: 334.176, f: 346.816, l: "B", a: 1},
{o: 346.816, f: 359.796, l: "J", a: 0},
{o: 359.796, f: 369.1, l: "G", a: 1},
{o: 369.1, f: 385.448, l: "M", a: 0},
{o: 385.448, f: 392.392, l: "A", a: 1}],
[{o: 0.387, f: 1.853, l: "5", a: 0},
{o: 1.853, f: 14.52, l: "1", a: 1},
{o: 14.52, f: 24.2, l: "3", a: 0},
{o: 24.2, f: 28.213, l: "5", a: 1},
{o: 28.213, f: 43.24, l: "1", a: 0},
{o: 43.24, f: 51.08, l: "2", a: 1},
{o: 51.08, f: 59.867, l: "3", a: 0},
{o: 59.867, f: 64.867, l: "5", a: 1},
{o: 64.867, f: 78.72, l: "1", a: 0},
{o: 78.72, f: 83.36, l: "2", a: 1},
{o: 83.36, f: 112.72, l: "4", a: 0},
{o: 112.72, f: 147.24, l: "2", a: 1},
{o: 147.24, f: 152.267, l: "6", a: 0},
{o: 152.267, f: 166.053, l: "1", a: 1},
{o: 166.053, f: 176.253, l: "3", a: 0},
{o: 176.253, f: 180.613, l: "5", a: 1},
{o: 180.613, f: 195.64, l: "1", a: 0},
{o: 195.64, f: 199.973, l: "2", a: 1},
{o: 199.973, f: 229.533, l: "4", a: 0},
{o: 229.533, f: 264.32, l: "2", a: 1},
{o: 264.32, f: 268.733, l: "6", a: 0},
{o: 268.733, f: 283.427, l: "1", a: 1},
{o: 283.427, f: 292.733, l: "3", a: 0},
{o: 292.733, f: 297.373, l: "5", a: 1},
{o: 297.373, f: 319.387, l: "1", a: 0},
{o: 319.387, f: 329.133, l: "3", a: 1},
{o: 329.133, f: 333.707, l: "5", a: 0},
{o: 333.707, f: 347.907, l: "1", a: 1},
{o: 347.907, f: 352.173, l: "2", a: 0},
{o: 352.173, f: 362.773, l: "1", a: 1},
{o: 362.773, f: 370.627, l: "4", a: 0},
{o: 370.627, f: 381.667, l: "3", a: 1},
{o: 381.667, f: 388.96, l: "2", a: 0},
{o: 388.96, f: 394.253, l: "7", a: 1},
{o: 394.253, f: 397.64, l: "8", a: 0}],
[{o: 0, f: 32.035, l: "a", a: 0},
{o: 32.035, f: 68.54, l: "b", a: 1},
{o: 68.54, f: 152.725, l: "c", a: 0},
{o: 152.725, f: 185.505, l: "a", a: 1},
{o: 185.505, f: 269.69, l: "c", a: 0},
{o: 269.69, f: 302.47, l: "a", a: 1},
{o: 302.47, f: 338.23, l: "b", a: 0},
{o: 338.23, f: 396.34, l: "d", a: 1},
{o: 396.34, f: 397.83, l: "e", a: 0}],
[{o: 0, f: 11.459, l: "n1", a: 0},
{o: 11.459, f: 36.328, l: "C", a: 1},
{o: 36.328, f: 43.479, l: "n2", a: 0},
{o: 43.479, f: 52.686, l: "F", a: 1},
{o: 52.686, f: 87.911, l: "A", a: 0},
{o: 87.911, f: 100.333, l: "E", a: 1},
{o: 100.333, f: 144.254, l: "B", a: 0},
{o: 144.254, f: 160.45, l: "D", a: 1},
{o: 160.45, f: 169.471, l: "n5", a: 0},
{o: 169.471, f: 204.533, l: "A", a: 1},
{o: 204.533, f: 217.072, l: "E", a: 0},
{o: 217.072, f: 261.271, l: "B", a: 1},
{o: 261.271, f: 280.056, l: "D", a: 0},
{o: 280.056, f: 304.298, l: "C", a: 1},
{o: 304.298, f: 311.844, l: "n9", a: 0},
{o: 311.844, f: 322.119, l: "F", a: 1},
{o: 322.119, f: 357.042, l: "A", a: 0},
{o: 357.042, f: 397.572, l: "n11", a: 1}],
[{o: 0, f: 0.028, l: "I", a: 0},
{o: 0.028, f: 14.18, l: "G", a: 1},
{o: 14.18, f: 43.268, l: "H", a: 0},
{o: 43.268, f: 50.404, l: "G", a: 1},
{o: 50.404, f: 101.84, l: "H", a: 0},
{o: 101.84, f: 115.416, l: "D", a: 1},
{o: 115.416, f: 132.188, l: "B", a: 0},
{o: 132.188, f: 150.628, l: "D", a: 1},
{o: 150.628, f: 165.716, l: "G", a: 0},
{o: 165.716, f: 218.076, l: "H", a: 1},
{o: 218.076, f: 223.784, l: "D", a: 0},
{o: 223.784, f: 231.432, l: "H", a: 1},
{o: 231.432, f: 264.952, l: "B", a: 0},
{o: 264.952, f: 282.624, l: "G", a: 1},
{o: 282.624, f: 311.468, l: "H", a: 0},
{o: 311.468, f: 318.692, l: "G", a: 1},
{o: 318.692, f: 382.316, l: "H", a: 0},
{o: 382.316, f: 392.696, l: "G", a: 1},
{o: 392.696, f: 397.747, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000554.ogg";

var artist = "RWC MDB C 2001 M03";

var track = "3";
