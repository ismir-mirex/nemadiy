var data = [
[{o: 0.441, f: 31.923, l: "A", a: 0},
{o: 31.923, f: 60.058, l: "A", a: 1},
{o: 60.058, f: 72.38, l: "B", a: 0},
{o: 72.38, f: 100.761, l: "A", a: 1},
{o: 100.761, f: 113.103, l: "B", a: 0},
{o: 113.103, f: 152.575, l: "A", a: 1}],
[{o: 0.212, f: 8.204, l: "A", a: 0},
{o: 8.204, f: 19.116, l: "A", a: 1},
{o: 19.116, f: 30.08, l: "A", a: 0},
{o: 30.08, f: 37.576, l: "A", a: 1},
{o: 37.576, f: 51.196, l: "A", a: 0},
{o: 51.196, f: 57.848, l: "C", a: 1},
{o: 57.848, f: 71.464, l: "B", a: 0},
{o: 71.464, f: 84.704, l: "A", a: 1},
{o: 84.704, f: 99.388, l: "A", a: 0},
{o: 99.388, f: 111.74, l: "B", a: 1},
{o: 111.74, f: 118.74, l: "A", a: 0},
{o: 118.74, f: 134.74, l: "A", a: 1},
{o: 134.74, f: 147.024, l: "C", a: 0}],
[{o: 0.212, f: 8.204, l: "C", a: 0},
{o: 8.204, f: 19.116, l: "A", a: 1},
{o: 19.116, f: 30.08, l: "A", a: 0},
{o: 30.08, f: 37.576, l: "D", a: 1},
{o: 37.576, f: 51.196, l: "A", a: 0},
{o: 51.196, f: 57.848, l: "E", a: 1},
{o: 57.848, f: 71.464, l: "B", a: 0},
{o: 71.464, f: 84.704, l: "A", a: 1},
{o: 84.704, f: 99.388, l: "A", a: 0},
{o: 99.388, f: 111.74, l: "B", a: 1},
{o: 111.74, f: 118.74, l: "F", a: 0},
{o: 118.74, f: 134.74, l: "A", a: 1},
{o: 134.74, f: 147.024, l: "G", a: 0}],
[{o: 0.44, f: 5.787, l: "7", a: 0},
{o: 5.787, f: 16.693, l: "1", a: 1},
{o: 16.693, f: 24.147, l: "2", a: 0},
{o: 24.147, f: 29.867, l: "4", a: 1},
{o: 29.867, f: 34.267, l: "8", a: 0},
{o: 34.267, f: 43.933, l: "1", a: 1},
{o: 43.933, f: 52.32, l: "2", a: 0},
{o: 52.32, f: 57.64, l: "4", a: 1},
{o: 57.64, f: 69.933, l: "3", a: 0},
{o: 69.933, f: 88.053, l: "1", a: 1},
{o: 88.053, f: 93.373, l: "2", a: 0},
{o: 93.373, f: 99.173, l: "4", a: 1},
{o: 99.173, f: 111.053, l: "3", a: 0},
{o: 111.053, f: 125.2, l: "1", a: 1},
{o: 125.2, f: 133.64, l: "2", a: 0},
{o: 133.64, f: 145.853, l: "5", a: 1},
{o: 145.853, f: 151.4, l: "6", a: 0}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 32.78, l: "b", a: 1},
{o: 32.78, f: 61.09, l: "b", a: 0},
{o: 61.09, f: 76.735, l: "c", a: 1},
{o: 76.735, f: 99.085, l: "b", a: 0},
{o: 99.085, f: 150.49, l: "d", a: 1},
{o: 150.49, f: 151.98, l: "e", a: 0}],
[{o: 0, f: 3.913, l: "n1", a: 0},
{o: 3.913, f: 31.869, l: "A", a: 1},
{o: 31.869, f: 60.093, l: "A", a: 0},
{o: 60.093, f: 72.365, l: "n2", a: 1},
{o: 72.365, f: 100.751, l: "A", a: 0},
{o: 100.751, f: 113.058, l: "n3", a: 1},
{o: 113.058, f: 141.572, l: "A", a: 0},
{o: 141.572, f: 152.369, l: "n4", a: 1}],
[{o: 0, f: 0.328, l: "F", a: 0},
{o: 0.328, f: 9.724, l: "D", a: 1},
{o: 9.724, f: 29.636, l: "E", a: 0},
{o: 29.636, f: 37.804, l: "A", a: 1},
{o: 37.804, f: 58.296, l: "E", a: 0},
{o: 58.296, f: 68.216, l: "C", a: 1},
{o: 68.216, f: 78.932, l: "A", a: 0},
{o: 78.932, f: 98.944, l: "E", a: 1},
{o: 98.944, f: 108.884, l: "C", a: 0},
{o: 108.884, f: 119.644, l: "A", a: 1},
{o: 119.644, f: 132.284, l: "E", a: 0},
{o: 132.284, f: 146.32, l: "B", a: 1},
{o: 146.32, f: 152.556, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001235.ogg";

var artist = "The Beatles";

var track = "Hold Me Tight";
