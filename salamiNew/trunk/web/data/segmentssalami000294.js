var data = [
[{o: 0, f: 27.307, l: "Z", a: 0},
{o: 27.307, f: 78.931, l: "A", a: 1},
{o: 78.931, f: 90.293, l: "B", a: 0},
{o: 90.293, f: 112.952, l: "C", a: 1},
{o: 112.952, f: 135.816, l: "B", a: 0},
{o: 135.816, f: 147.069, l: "C", a: 1},
{o: 147.069, f: 172.611, l: "C", a: 0},
{o: 172.611, f: 187.043, l: "B", a: 1},
{o: 187.043, f: 195.49, l: "D", a: 0},
{o: 195.49, f: 243.227, l: "C", a: 1},
{o: 243.227, f: 284.866, l: "E", a: 0},
{o: 284.866, f: 330.448, l: "B", a: 1},
{o: 330.448, f: 355.068, l: "Z", a: 0}],
[{o: 0.116, f: 32.916, l: "E", a: 0},
{o: 32.916, f: 67.984, l: "E", a: 1},
{o: 67.984, f: 86.684, l: "E", a: 0},
{o: 86.684, f: 105.152, l: "E", a: 1},
{o: 105.152, f: 125.888, l: "E", a: 0},
{o: 125.888, f: 137.88, l: "E", a: 1},
{o: 137.88, f: 153.404, l: "E", a: 0},
{o: 153.404, f: 167.384, l: "E", a: 1},
{o: 167.384, f: 184.536, l: "E", a: 0},
{o: 184.536, f: 204.524, l: "E", a: 1},
{o: 204.524, f: 225.188, l: "C", a: 0},
{o: 225.188, f: 243.156, l: "C", a: 1},
{o: 243.156, f: 268.456, l: "F", a: 0},
{o: 268.456, f: 290.996, l: "F", a: 1},
{o: 290.996, f: 307.828, l: "B", a: 0},
{o: 307.828, f: 330.164, l: "B", a: 1},
{o: 330.164, f: 343.62, l: "B", a: 0},
{o: 343.62, f: 354.82, l: "B", a: 1}],
[{o: 0.116, f: 32.916, l: "E", a: 0},
{o: 32.916, f: 67.984, l: "E", a: 1},
{o: 67.984, f: 86.684, l: "G", a: 0},
{o: 86.684, f: 105.152, l: "D", a: 1},
{o: 105.152, f: 125.888, l: "D", a: 0},
{o: 125.888, f: 137.88, l: "D", a: 1},
{o: 137.88, f: 153.404, l: "D", a: 0},
{o: 153.404, f: 167.384, l: "H", a: 1},
{o: 167.384, f: 184.536, l: "A", a: 0},
{o: 184.536, f: 204.524, l: "A", a: 1},
{o: 204.524, f: 225.188, l: "C", a: 0},
{o: 225.188, f: 243.156, l: "C", a: 1},
{o: 243.156, f: 268.456, l: "F", a: 0},
{o: 268.456, f: 290.996, l: "F", a: 1},
{o: 290.996, f: 307.828, l: "B", a: 0},
{o: 307.828, f: 330.164, l: "B", a: 1},
{o: 330.164, f: 343.62, l: "I", a: 0},
{o: 343.62, f: 354.82, l: "J", a: 1}],
[{o: 0.733, f: 10.093, l: "8", a: 0},
{o: 10.093, f: 32.56, l: "6", a: 1},
{o: 32.56, f: 70.413, l: "5", a: 0},
{o: 70.413, f: 97.387, l: "2", a: 1},
{o: 97.387, f: 192.013, l: "1", a: 0},
{o: 192.013, f: 201, l: "2", a: 1},
{o: 201, f: 242.187, l: "1", a: 0},
{o: 242.187, f: 283.44, l: "4", a: 1},
{o: 283.44, f: 295, l: "3", a: 0},
{o: 295, f: 327.88, l: "1", a: 1},
{o: 327.88, f: 341.853, l: "3", a: 0},
{o: 341.853, f: 353.693, l: "7", a: 1}],
[{o: 0, f: 28.31, l: "a", a: 0},
{o: 28.31, f: 48.425, l: "b", a: 1},
{o: 48.425, f: 68.54, l: "b", a: 0},
{o: 68.54, f: 96.85, l: "c", a: 1},
{o: 96.85, f: 128.885, l: "d", a: 0},
{o: 128.885, f: 156.45, l: "e", a: 1},
{o: 156.45, f: 189.23, l: "d", a: 0},
{o: 189.23, f: 354.62, l: "f", a: 1}],
[{o: 0, f: 36.107, l: "n1", a: 0},
{o: 36.107, f: 55.182, l: "B", a: 1},
{o: 55.182, f: 72.214, l: "B", a: 0},
{o: 72.214, f: 79.61, l: "n3", a: 1},
{o: 79.61, f: 89.675, l: "A", a: 0},
{o: 89.675, f: 113.755, l: "n4", a: 1},
{o: 113.755, f: 123.809, l: "A", a: 0},
{o: 123.809, f: 173.476, l: "n5", a: 1},
{o: 173.476, f: 183.496, l: "A", a: 0},
{o: 183.496, f: 354.847, l: "n6", a: 1}],
[{o: 0, f: 0.116, l: "I", a: 0},
{o: 0.116, f: 0.116, l: "B", a: 1},
{o: 0.116, f: 69.4, l: "A", a: 0},
{o: 69.4, f: 137.54, l: "G", a: 1},
{o: 137.54, f: 178.4, l: "H", a: 0},
{o: 178.4, f: 203.1, l: "G", a: 1},
{o: 203.1, f: 243.608, l: "H", a: 0},
{o: 243.608, f: 332.5, l: "B", a: 1},
{o: 332.5, f: 353.7, l: "E", a: 0},
{o: 353.7, f: 354.82, l: "A", a: 1},
{o: 354.82, f: 354.987, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000294.ogg";

var artist = "Caravan of Thieves";

var track = "ShimSham Honey";
