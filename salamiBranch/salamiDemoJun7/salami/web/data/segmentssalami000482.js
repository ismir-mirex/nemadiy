var data = [
[{o: 0.209, f: 17.166, l: "A", a: 0},
{o: 17.166, f: 24.651, l: "A'", a: 1},
{o: 24.651, f: 43.147, l: "B", a: 0},
{o: 43.147, f: 70.363, l: "B", a: 1},
{o: 70.363, f: 83.779, l: "C", a: 0},
{o: 83.779, f: 104.058, l: "D", a: 1}],
[{o: 0.224, f: 7.888, l: "E", a: 0},
{o: 7.888, f: 12.12, l: "E", a: 1},
{o: 12.12, f: 16.48, l: "E", a: 0},
{o: 16.48, f: 22.188, l: "E", a: 1},
{o: 22.188, f: 27.952, l: "A", a: 0},
{o: 27.952, f: 33.792, l: "E", a: 1},
{o: 33.792, f: 41.184, l: "E", a: 0},
{o: 41.184, f: 46.428, l: "E", a: 1},
{o: 46.428, f: 52.208, l: "E", a: 0},
{o: 52.208, f: 57.812, l: "E", a: 1},
{o: 57.812, f: 60.292, l: "E", a: 0},
{o: 60.292, f: 64.192, l: "E", a: 1},
{o: 64.192, f: 70.272, l: "E", a: 0},
{o: 70.272, f: 77.72, l: "E", a: 1},
{o: 77.72, f: 81.952, l: "E", a: 0},
{o: 81.952, f: 88.076, l: "E", a: 1},
{o: 88.076, f: 94.14, l: "E", a: 0},
{o: 94.14, f: 100.784, l: "E", a: 1}],
[{o: 0.224, f: 7.888, l: "E", a: 0},
{o: 7.888, f: 12.12, l: "G", a: 1},
{o: 12.12, f: 16.48, l: "G", a: 0},
{o: 16.48, f: 22.188, l: "C", a: 1},
{o: 22.188, f: 27.952, l: "B", a: 0},
{o: 27.952, f: 33.792, l: "E", a: 1},
{o: 33.792, f: 41.184, l: "C", a: 0},
{o: 41.184, f: 46.428, l: "G", a: 1},
{o: 46.428, f: 52.208, l: "A", a: 0},
{o: 52.208, f: 57.812, l: "G", a: 1},
{o: 57.812, f: 60.292, l: "F", a: 0},
{o: 60.292, f: 64.192, l: "H", a: 1},
{o: 64.192, f: 70.272, l: "A", a: 0},
{o: 70.272, f: 77.72, l: "C", a: 1},
{o: 77.72, f: 81.952, l: "C", a: 0},
{o: 81.952, f: 88.076, l: "C", a: 1},
{o: 88.076, f: 94.14, l: "D", a: 0},
{o: 94.14, f: 100.784, l: "D", a: 1}],
[{o: 0.52, f: 11.253, l: "1", a: 0},
{o: 11.253, f: 17.653, l: "6", a: 1},
{o: 17.653, f: 24.627, l: "1", a: 0},
{o: 24.627, f: 32.52, l: "2", a: 1},
{o: 32.52, f: 38.547, l: "5", a: 0},
{o: 38.547, f: 43.307, l: "4", a: 1},
{o: 43.307, f: 51.6, l: "2", a: 0},
{o: 51.6, f: 56.907, l: "5", a: 1},
{o: 56.907, f: 64.373, l: "4", a: 0},
{o: 64.373, f: 70.307, l: "7", a: 1},
{o: 70.307, f: 98.853, l: "3", a: 0},
{o: 98.853, f: 103.933, l: "8", a: 1}],
[{o: 0, f: 23.84, l: "a", a: 0},
{o: 23.84, f: 42.465, l: "b", a: 1},
{o: 42.465, f: 61.09, l: "b", a: 0},
{o: 61.09, f: 81.205, l: "c", a: 1},
{o: 81.205, f: 88.655, l: "d", a: 0},
{o: 88.655, f: 96.105, l: "d", a: 1},
{o: 96.105, f: 103.555, l: "e", a: 0}],
[{o: 0, f: 24.869, l: "n1", a: 0},
{o: 24.869, f: 43.468, l: "A", a: 1},
{o: 43.468, f: 60.314, l: "A", a: 0},
{o: 60.314, f: 104.072, l: "n3", a: 1}],
[{o: 0, f: 0.124, l: "I", a: 0},
{o: 0.124, f: 5.484, l: "E", a: 1},
{o: 5.484, f: 24.224, l: "A", a: 0},
{o: 24.224, f: 33.564, l: "D", a: 1},
{o: 33.564, f: 42.848, l: "H", a: 0},
{o: 42.848, f: 52.004, l: "A", a: 1},
{o: 52.004, f: 70.072, l: "H", a: 0},
{o: 70.072, f: 82.968, l: "F", a: 1},
{o: 82.968, f: 100.46, l: "B", a: 0},
{o: 100.46, f: 104.047, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000482.ogg";
