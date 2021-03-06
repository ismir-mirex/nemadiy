var data = [
[{o: 0.232, f: 9.926, l: "A", a: 0},
{o: 9.926, f: 43.236, l: "B", a: 1},
{o: 43.236, f: 76.556, l: "B", a: 0},
{o: 76.556, f: 110.339, l: "B", a: 1},
{o: 110.339, f: 121.928, l: "C", a: 0},
{o: 121.928, f: 138.252, l: "B'", a: 1},
{o: 138.252, f: 146.077, l: "B'", a: 0},
{o: 146.077, f: 170.637, l: "B''", a: 1}],
[{o: 0.204, f: 11.224, l: "B", a: 0},
{o: 11.224, f: 24.732, l: "D", a: 1},
{o: 24.732, f: 31.628, l: "C", a: 0},
{o: 31.628, f: 38.64, l: "B", a: 1},
{o: 38.64, f: 54.976, l: "A", a: 0},
{o: 54.976, f: 64.632, l: "D", a: 1},
{o: 64.632, f: 71.868, l: "B", a: 0},
{o: 71.868, f: 78.656, l: "D", a: 1},
{o: 78.656, f: 91.78, l: "A", a: 0},
{o: 91.78, f: 102.172, l: "D", a: 1},
{o: 102.172, f: 109.448, l: "E", a: 0},
{o: 109.448, f: 121.432, l: "C", a: 1},
{o: 121.432, f: 137.768, l: "A", a: 0},
{o: 137.768, f: 142.604, l: "A", a: 1},
{o: 142.604, f: 154.944, l: "B", a: 0},
{o: 154.944, f: 164.732, l: "B", a: 1}],
[{o: 0.204, f: 11.224, l: "B", a: 0},
{o: 11.224, f: 24.732, l: "D", a: 1},
{o: 24.732, f: 31.628, l: "C", a: 0},
{o: 31.628, f: 38.64, l: "B", a: 1},
{o: 38.64, f: 54.976, l: "A", a: 0},
{o: 54.976, f: 64.632, l: "D", a: 1},
{o: 64.632, f: 71.868, l: "B", a: 0},
{o: 71.868, f: 78.656, l: "E", a: 1},
{o: 78.656, f: 91.78, l: "A", a: 0},
{o: 91.78, f: 102.172, l: "E", a: 1},
{o: 102.172, f: 109.448, l: "G", a: 0},
{o: 109.448, f: 121.432, l: "H", a: 1},
{o: 121.432, f: 137.768, l: "F", a: 0},
{o: 137.768, f: 142.604, l: "F", a: 1},
{o: 142.604, f: 154.944, l: "B", a: 0},
{o: 154.944, f: 164.732, l: "I", a: 1}],
[{o: 0.707, f: 8.813, l: "2", a: 0},
{o: 8.813, f: 23.733, l: "1", a: 1},
{o: 23.733, f: 41.547, l: "3", a: 0},
{o: 41.547, f: 59.627, l: "1", a: 1},
{o: 59.627, f: 74.893, l: "3", a: 0},
{o: 74.893, f: 91.787, l: "1", a: 1},
{o: 91.787, f: 100.973, l: "2", a: 0},
{o: 100.973, f: 111.12, l: "5", a: 1},
{o: 111.12, f: 120.827, l: "6", a: 0},
{o: 120.827, f: 129.32, l: "2", a: 1},
{o: 129.32, f: 136.6, l: "7", a: 0},
{o: 136.6, f: 162.32, l: "4", a: 1},
{o: 162.32, f: 168.093, l: "8", a: 0}],
[{o: 0, f: 10.43, l: "a", a: 0},
{o: 10.43, f: 24.585, l: "b", a: 1},
{o: 24.585, f: 58.11, l: "c", a: 0},
{o: 58.11, f: 91.635, l: "c", a: 1},
{o: 91.635, f: 102.065, l: "a", a: 0},
{o: 102.065, f: 167.625, l: "d", a: 1},
{o: 167.625, f: 169.86, l: "e", a: 0}],
[{o: 0, f: 17.554, l: "n1", a: 0},
{o: 17.554, f: 27.388, l: "A", a: 1},
{o: 27.388, f: 50.945, l: "n2", a: 0},
{o: 50.945, f: 60.86, l: "A", a: 1},
{o: 60.86, f: 84.265, l: "n3", a: 0},
{o: 84.265, f: 93.925, l: "A", a: 1},
{o: 93.925, f: 170.574, l: "n4", a: 0}],
[{o: 0, f: 0.124, l: "G", a: 0},
{o: 0.124, f: 16.896, l: "F", a: 1},
{o: 16.896, f: 22.46, l: "C", a: 0},
{o: 22.46, f: 137.448, l: "F", a: 1},
{o: 137.448, f: 164.44, l: "D", a: 0},
{o: 164.44, f: 170.633, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000192.ogg";
