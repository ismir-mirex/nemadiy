var data = [
[{o: 0.434, f: 2.12, l: "A", a: 0},
{o: 2.12, f: 14.009, l: "G", a: 1},
{o: 14.009, f: 35.504, l: "B", a: 0},
{o: 35.504, f: 47.946, l: "C", a: 1},
{o: 47.946, f: 69.838, l: "B", a: 0},
{o: 69.838, f: 82.336, l: "C", a: 1},
{o: 82.336, f: 95.658, l: "D", a: 0},
{o: 95.658, f: 97.416, l: "A", a: 1},
{o: 97.416, f: 109.809, l: "F", a: 0},
{o: 109.809, f: 131.827, l: "B", a: 1},
{o: 131.827, f: 144.648, l: "C", a: 0},
{o: 144.648, f: 157.953, l: "D", a: 1},
{o: 157.953, f: 159.851, l: "A", a: 0},
{o: 159.851, f: 172.47, l: "C", a: 1},
{o: 172.47, f: 182.95, l: "E", a: 0}],
[{o: 0.26, f: 8.476, l: "D", a: 0},
{o: 8.476, f: 16.02, l: "B", a: 1},
{o: 16.02, f: 26.212, l: "E", a: 0},
{o: 26.212, f: 34.636, l: "B", a: 1},
{o: 34.636, f: 46.06, l: "B", a: 0},
{o: 46.06, f: 60.36, l: "B", a: 1},
{o: 60.36, f: 77.08, l: "B", a: 0},
{o: 77.08, f: 88.6, l: "A", a: 1},
{o: 88.6, f: 97.668, l: "D", a: 0},
{o: 97.668, f: 109.2, l: "B", a: 1},
{o: 109.2, f: 123.088, l: "B", a: 0},
{o: 123.088, f: 136.064, l: "B", a: 1},
{o: 136.064, f: 150.92, l: "A", a: 0},
{o: 150.92, f: 159.724, l: "C", a: 1},
{o: 159.724, f: 167.204, l: "A", a: 0},
{o: 167.204, f: 178.668, l: "C", a: 1}],
[{o: 0.26, f: 8.476, l: "A", a: 0},
{o: 8.476, f: 16.02, l: "B", a: 1},
{o: 16.02, f: 26.212, l: "C", a: 0},
{o: 26.212, f: 34.636, l: "B", a: 1},
{o: 34.636, f: 46.06, l: "B", a: 0},
{o: 46.06, f: 60.36, l: "B", a: 1},
{o: 60.36, f: 77.08, l: "B", a: 0},
{o: 77.08, f: 88.6, l: "D", a: 1},
{o: 88.6, f: 97.668, l: "E", a: 0},
{o: 97.668, f: 109.2, l: "B", a: 1},
{o: 109.2, f: 123.088, l: "B", a: 0},
{o: 123.088, f: 136.064, l: "B", a: 1},
{o: 136.064, f: 150.92, l: "F", a: 0},
{o: 150.92, f: 159.724, l: "G", a: 1},
{o: 159.724, f: 167.204, l: "H", a: 0},
{o: 167.204, f: 178.668, l: "I", a: 1}],
[{o: 0.787, f: 3.44, l: "8", a: 0},
{o: 3.44, f: 13.533, l: "6", a: 1},
{o: 13.533, f: 25.04, l: "5", a: 0},
{o: 25.04, f: 69.4, l: "2", a: 1},
{o: 69.4, f: 87.413, l: "1", a: 0},
{o: 87.413, f: 97.84, l: "3", a: 1},
{o: 97.84, f: 114.053, l: "4", a: 0},
{o: 114.053, f: 122.733, l: "1", a: 1},
{o: 122.733, f: 132.28, l: "2", a: 0},
{o: 132.28, f: 149.773, l: "1", a: 1},
{o: 149.773, f: 160.213, l: "3", a: 0},
{o: 160.213, f: 175.173, l: "1", a: 1},
{o: 175.173, f: 182.76, l: "7", a: 0}],
[{o: 0, f: 20.86, l: "a", a: 0},
{o: 20.86, f: 48.425, l: "b", a: 1},
{o: 48.425, f: 81.95, l: "b", a: 0},
{o: 81.95, f: 98.34, l: "c", a: 1},
{o: 98.34, f: 109.515, l: "d", a: 0},
{o: 109.515, f: 143.785, l: "b", a: 1},
{o: 143.785, f: 160.92, l: "c", a: 0},
{o: 160.92, f: 181.035, l: "e", a: 1},
{o: 181.035, f: 182.525, l: "f", a: 0}],
[{o: 0, f: 14.768, l: "n1", a: 0},
{o: 14.768, f: 48.704, l: "A", a: 1},
{o: 48.704, f: 82.048, l: "A", a: 0},
{o: 82.048, f: 132.365, l: "n3", a: 1},
{o: 132.365, f: 145.136, l: "B", a: 0},
{o: 145.136, f: 160.311, l: "n4", a: 1},
{o: 160.311, f: 173, l: "B", a: 0},
{o: 173, f: 182.834, l: "n5", a: 1}],
[{o: 0, f: 0.26, l: "H", a: 0},
{o: 0.26, f: 18.804, l: "C", a: 1},
{o: 18.804, f: 34.12, l: "G", a: 0},
{o: 34.12, f: 52.832, l: "C", a: 1},
{o: 52.832, f: 76.296, l: "G", a: 0},
{o: 76.296, f: 92.284, l: "E", a: 1},
{o: 92.284, f: 116.76, l: "C", a: 0},
{o: 116.76, f: 130.468, l: "G", a: 1},
{o: 130.468, f: 143.488, l: "C", a: 0},
{o: 143.488, f: 157.948, l: "E", a: 1},
{o: 157.948, f: 168.276, l: "C", a: 0},
{o: 168.276, f: 178.744, l: "B", a: 1},
{o: 178.744, f: 182.893, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001186.ogg";
