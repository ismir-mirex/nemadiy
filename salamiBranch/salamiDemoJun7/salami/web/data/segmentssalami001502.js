var data = [
[{o: 0.539, f: 2.575, l: "Z", a: 0},
{o: 2.575, f: 18.351, l: "N", a: 1},
{o: 18.351, f: 41.761, l: "A", a: 0},
{o: 41.761, f: 64.918, l: "A", a: 1},
{o: 64.918, f: 88.259, l: "A", a: 0},
{o: 88.259, f: 103.756, l: "B", a: 1},
{o: 103.756, f: 111.52, l: "C", a: 0},
{o: 111.52, f: 134.7, l: "A", a: 1},
{o: 134.7, f: 157.749, l: "A", a: 0},
{o: 157.749, f: 180.722, l: "A", a: 1},
{o: 180.722, f: 256.844, l: "B", a: 0}],
[{o: 0.204, f: 25.612, l: "B", a: 0},
{o: 25.612, f: 41.184, l: "B", a: 1},
{o: 41.184, f: 57.584, l: "B", a: 0},
{o: 57.584, f: 72.18, l: "B", a: 1},
{o: 72.18, f: 91.592, l: "B", a: 0},
{o: 91.592, f: 111.464, l: "A", a: 1},
{o: 111.464, f: 130.324, l: "B", a: 0},
{o: 130.324, f: 150.948, l: "B", a: 1},
{o: 150.948, f: 161.996, l: "B", a: 0},
{o: 161.996, f: 173.008, l: "B", a: 1},
{o: 173.008, f: 188.856, l: "B", a: 0},
{o: 188.856, f: 202.84, l: "C", a: 1},
{o: 202.84, f: 222.092, l: "D", a: 0},
{o: 222.092, f: 248.96, l: "E", a: 1}],
[{o: 0.204, f: 25.612, l: "B", a: 0},
{o: 25.612, f: 41.184, l: "B", a: 1},
{o: 41.184, f: 57.584, l: "B", a: 0},
{o: 57.584, f: 72.18, l: "B", a: 1},
{o: 72.18, f: 91.592, l: "B", a: 0},
{o: 91.592, f: 111.464, l: "A", a: 1},
{o: 111.464, f: 130.324, l: "B", a: 0},
{o: 130.324, f: 150.948, l: "B", a: 1},
{o: 150.948, f: 161.996, l: "C", a: 0},
{o: 161.996, f: 173.008, l: "D", a: 1},
{o: 173.008, f: 188.856, l: "E", a: 0},
{o: 188.856, f: 202.84, l: "F", a: 1},
{o: 202.84, f: 222.092, l: "G", a: 0},
{o: 222.092, f: 248.96, l: "H", a: 1}],
[{o: 0.6, f: 2.347, l: "5", a: 0},
{o: 2.347, f: 16.613, l: "2", a: 1},
{o: 16.613, f: 33.667, l: "1", a: 0},
{o: 33.667, f: 40.973, l: "2", a: 1},
{o: 40.973, f: 57.347, l: "1", a: 0},
{o: 57.347, f: 63.187, l: "2", a: 1},
{o: 63.187, f: 81.16, l: "1", a: 0},
{o: 81.16, f: 87.96, l: "2", a: 1},
{o: 87.96, f: 103.48, l: "3", a: 0},
{o: 103.48, f: 117.027, l: "6", a: 1},
{o: 117.027, f: 127.693, l: "1", a: 0},
{o: 127.693, f: 133.427, l: "2", a: 1},
{o: 133.427, f: 150.227, l: "1", a: 0},
{o: 150.227, f: 156.973, l: "2", a: 1},
{o: 156.973, f: 173.24, l: "1", a: 0},
{o: 173.24, f: 179.48, l: "2", a: 1},
{o: 179.48, f: 194.867, l: "3", a: 0},
{o: 194.867, f: 202.627, l: "4", a: 1},
{o: 202.627, f: 215.187, l: "7", a: 0},
{o: 215.187, f: 223.747, l: "4", a: 1},
{o: 223.747, f: 241.48, l: "2", a: 0},
{o: 241.48, f: 249.733, l: "5", a: 1},
{o: 249.733, f: 256.52, l: "8", a: 0}],
[{o: 0, f: 41.72, l: "a", a: 0},
{o: 41.72, f: 88.655, l: "a", a: 1},
{o: 88.655, f: 104.3, l: "b", a: 0},
{o: 104.3, f: 146.02, l: "a", a: 1},
{o: 146.02, f: 181.035, l: "c", a: 0},
{o: 181.035, f: 195.935, l: "b", a: 1},
{o: 195.935, f: 233.93, l: "a", a: 0},
{o: 233.93, f: 256.28, l: "d", a: 1}],
[{o: 0, f: 11.447, l: "n1", a: 0},
{o: 11.447, f: 34.911, l: "A", a: 1},
{o: 34.911, f: 58.108, l: "A", a: 0},
{o: 58.108, f: 81.421, l: "A", a: 1},
{o: 81.421, f: 104.722, l: "C", a: 0},
{o: 104.722, f: 127.954, l: "A", a: 1},
{o: 127.954, f: 150.999, l: "A", a: 0},
{o: 150.999, f: 174.01, l: "A", a: 1},
{o: 174.01, f: 197.091, l: "C", a: 0},
{o: 197.091, f: 222.134, l: "B", a: 1},
{o: 222.134, f: 245.087, l: "B", a: 0},
{o: 245.087, f: 256.766, l: "n3", a: 1}],
[{o: 0, f: 0.352, l: "G", a: 0},
{o: 0.352, f: 87.52, l: "E", a: 1},
{o: 87.52, f: 103.216, l: "F", a: 0},
{o: 103.216, f: 180.176, l: "E", a: 1},
{o: 180.176, f: 195.732, l: "F", a: 0},
{o: 195.732, f: 247.648, l: "E", a: 1},
{o: 247.648, f: 256.837, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001502.ogg";
