var data = [
[{o: 0.093, f: 13.141, l: "A", a: 0},
{o: 13.141, f: 24.888, l: "B", a: 1},
{o: 24.888, f: 48.899, l: "B", a: 0},
{o: 48.899, f: 73.074, l: "B", a: 1},
{o: 73.074, f: 97.087, l: "B", a: 0},
{o: 97.087, f: 120.951, l: "B", a: 1},
{o: 120.951, f: 144.77, l: "B", a: 0},
{o: 144.77, f: 168.476, l: "B", a: 1},
{o: 168.476, f: 192.239, l: "B", a: 0},
{o: 192.239, f: 215.766, l: "B", a: 1},
{o: 215.766, f: 239.678, l: "B", a: 0},
{o: 239.678, f: 263.582, l: "B", a: 1},
{o: 263.582, f: 287.82, l: "B", a: 0},
{o: 287.82, f: 308.967, l: "B", a: 1},
{o: 308.967, f: 352.969, l: "B'", a: 0}],
[{o: 0.036, f: 10.948, l: "E", a: 0},
{o: 10.948, f: 24.272, l: "B", a: 1},
{o: 24.272, f: 51.5, l: "B", a: 0},
{o: 51.5, f: 67.348, l: "D", a: 1},
{o: 67.348, f: 79.732, l: "D", a: 0},
{o: 79.732, f: 91.036, l: "D", a: 1},
{o: 91.036, f: 102.204, l: "D", a: 0},
{o: 102.204, f: 119.572, l: "D", a: 1},
{o: 119.572, f: 138.048, l: "D", a: 0},
{o: 138.048, f: 151.88, l: "D", a: 1},
{o: 151.88, f: 167.416, l: "D", a: 0},
{o: 167.416, f: 180.86, l: "C", a: 1},
{o: 180.86, f: 200.796, l: "C", a: 0},
{o: 200.796, f: 215.84, l: "C", a: 1},
{o: 215.84, f: 240.116, l: "A", a: 0},
{o: 240.116, f: 260.848, l: "A", a: 1},
{o: 260.848, f: 285.108, l: "B", a: 0},
{o: 285.108, f: 294.164, l: "F", a: 1},
{o: 294.164, f: 306.036, l: "G", a: 0},
{o: 306.036, f: 315.532, l: "H", a: 1},
{o: 315.532, f: 334.824, l: "I", a: 0},
{o: 334.824, f: 348.708, l: "J", a: 1}],
[{o: 0.036, f: 10.948, l: "F", a: 0},
{o: 10.948, f: 24.272, l: "G", a: 1},
{o: 24.272, f: 51.5, l: "B", a: 0},
{o: 51.5, f: 67.348, l: "D", a: 1},
{o: 67.348, f: 79.732, l: "H", a: 0},
{o: 79.732, f: 91.036, l: "D", a: 1},
{o: 91.036, f: 102.204, l: "D", a: 0},
{o: 102.204, f: 119.572, l: "D", a: 1},
{o: 119.572, f: 138.048, l: "I", a: 0},
{o: 138.048, f: 151.88, l: "E", a: 1},
{o: 151.88, f: 167.416, l: "E", a: 0},
{o: 167.416, f: 180.86, l: "J", a: 1},
{o: 180.86, f: 200.796, l: "C", a: 0},
{o: 200.796, f: 215.84, l: "C", a: 1},
{o: 215.84, f: 240.116, l: "A", a: 0},
{o: 240.116, f: 260.848, l: "A", a: 1},
{o: 260.848, f: 285.108, l: "B", a: 0},
{o: 285.108, f: 294.164, l: "K", a: 1},
{o: 294.164, f: 306.036, l: "L", a: 0},
{o: 306.036, f: 315.532, l: "M", a: 1},
{o: 315.532, f: 334.824, l: "N", a: 0},
{o: 334.824, f: 348.708, l: "O", a: 1}],
[{o: 0.253, f: 10.933, l: "6", a: 0},
{o: 10.933, f: 50.387, l: "1", a: 1},
{o: 50.387, f: 56.84, l: "2", a: 0},
{o: 56.84, f: 62.467, l: "3", a: 1},
{o: 62.467, f: 72.04, l: "2", a: 0},
{o: 72.04, f: 83.32, l: "1", a: 1},
{o: 83.32, f: 91.24, l: "2", a: 0},
{o: 91.24, f: 96.253, l: "1", a: 1},
{o: 96.253, f: 101.107, l: "2", a: 0},
{o: 101.107, f: 143.747, l: "1", a: 1},
{o: 143.747, f: 150.2, l: "3", a: 0},
{o: 150.2, f: 157.4, l: "1", a: 1},
{o: 157.4, f: 162.973, l: "2", a: 0},
{o: 162.973, f: 216.627, l: "1", a: 1},
{o: 216.627, f: 261.08, l: "4", a: 0},
{o: 261.08, f: 286.44, l: "1", a: 1},
{o: 286.44, f: 295.693, l: "2", a: 0},
{o: 295.693, f: 300.573, l: "3", a: 1},
{o: 300.573, f: 307.533, l: "2", a: 0},
{o: 307.533, f: 324.6, l: "1", a: 1},
{o: 324.6, f: 333.32, l: "7", a: 0},
{o: 333.32, f: 349.453, l: "5", a: 1},
{o: 349.453, f: 352.813, l: "8", a: 0}],
[{o: 0, f: 23.84, l: "a", a: 0},
{o: 23.84, f: 70.03, l: "b", a: 1},
{o: 70.03, f: 262.985, l: "c", a: 0},
{o: 262.985, f: 309.92, l: "b", a: 1},
{o: 309.92, f: 352.385, l: "d", a: 0}],
[{o: 0, f: 25.217, l: "n1", a: 0},
{o: 25.217, f: 38.626, l: "A", a: 1},
{o: 38.626, f: 49.226, l: "C", a: 0},
{o: 49.226, f: 62.833, l: "A", a: 1},
{o: 62.833, f: 97.373, l: "n2", a: 0},
{o: 97.373, f: 110.875, l: "A", a: 1},
{o: 110.875, f: 263.93, l: "n3", a: 0},
{o: 263.93, f: 277.49, l: "A", a: 1},
{o: 277.49, f: 288.148, l: "C", a: 0},
{o: 288.148, f: 301.72, l: "A", a: 1},
{o: 301.72, f: 309.243, l: "n4", a: 0},
{o: 309.243, f: 319.634, l: "B", a: 1},
{o: 319.634, f: 324.081, l: "n5", a: 0},
{o: 324.081, f: 335.749, l: "B", a: 1},
{o: 335.749, f: 346.151, l: "B", a: 0},
{o: 346.151, f: 352.618, l: "n7", a: 1}],
[{o: 0, f: 0.028, l: "H", a: 0},
{o: 0.028, f: 41.052, l: "G", a: 1},
{o: 41.052, f: 47.276, l: "B", a: 0},
{o: 47.276, f: 59.232, l: "G", a: 1},
{o: 59.232, f: 68.304, l: "B", a: 0},
{o: 68.304, f: 83.108, l: "G", a: 1},
{o: 83.108, f: 95.324, l: "A", a: 0},
{o: 95.324, f: 111.044, l: "G", a: 1},
{o: 111.044, f: 119.944, l: "B", a: 0},
{o: 119.944, f: 137.104, l: "G", a: 1},
{o: 137.104, f: 150.576, l: "B", a: 0},
{o: 150.576, f: 227.272, l: "G", a: 1},
{o: 227.272, f: 238.088, l: "B", a: 0},
{o: 238.088, f: 307.904, l: "G", a: 1},
{o: 307.904, f: 325.896, l: "B", a: 0},
{o: 325.896, f: 334.64, l: "F", a: 1},
{o: 334.64, f: 343.372, l: "G", a: 0},
{o: 343.372, f: 348.148, l: "D", a: 1},
{o: 348.148, f: 352.933, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001174.ogg";

var artist = "RWC MDB J 2001 M03";

var track = "9";
