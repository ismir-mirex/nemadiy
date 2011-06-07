var data = [
[{o: 0.041, f: 24.675, l: "A", a: 0},
{o: 24.675, f: 41.236, l: "B", a: 1},
{o: 41.236, f: 73.646, l: "C", a: 0},
{o: 73.646, f: 89.989, l: "B", a: 1},
{o: 89.989, f: 122.23, l: "C", a: 0},
{o: 122.23, f: 139.096, l: "B", a: 1},
{o: 139.096, f: 205.192, l: "D", a: 0},
{o: 205.192, f: 363.093, l: "D", a: 1},
{o: 363.093, f: 431.961, l: "Z", a: 0}],
[{o: 0.008, f: 14.004, l: "C", a: 0},
{o: 14.004, f: 30.44, l: "C", a: 1},
{o: 30.44, f: 44.504, l: "C", a: 0},
{o: 44.504, f: 73.584, l: "C", a: 1},
{o: 73.584, f: 98.916, l: "C", a: 0},
{o: 98.916, f: 122.592, l: "C", a: 1},
{o: 122.592, f: 148.976, l: "C", a: 0},
{o: 148.976, f: 173.368, l: "C", a: 1},
{o: 173.368, f: 197.528, l: "C", a: 0},
{o: 197.528, f: 213.528, l: "C", a: 1},
{o: 213.528, f: 233.588, l: "C", a: 0},
{o: 233.588, f: 259.772, l: "B", a: 1},
{o: 259.772, f: 281.864, l: "B", a: 0},
{o: 281.864, f: 305.436, l: "B", a: 1},
{o: 305.436, f: 320.848, l: "B", a: 0},
{o: 320.848, f: 335.716, l: "D", a: 1},
{o: 335.716, f: 354.012, l: "D", a: 0},
{o: 354.012, f: 362.816, l: "A", a: 1},
{o: 362.816, f: 374.812, l: "A", a: 0},
{o: 374.812, f: 391.228, l: "A", a: 1},
{o: 391.228, f: 407.54, l: "A", a: 0},
{o: 407.54, f: 419.9, l: "E", a: 1},
{o: 419.9, f: 431.772, l: "E", a: 0}],
[{o: 0.008, f: 14.004, l: "D", a: 0},
{o: 14.004, f: 30.44, l: "C", a: 1},
{o: 30.44, f: 44.504, l: "C", a: 0},
{o: 44.504, f: 73.584, l: "C", a: 1},
{o: 73.584, f: 98.916, l: "C", a: 0},
{o: 98.916, f: 122.592, l: "C", a: 1},
{o: 122.592, f: 148.976, l: "C", a: 0},
{o: 148.976, f: 173.368, l: "C", a: 1},
{o: 173.368, f: 197.528, l: "C", a: 0},
{o: 197.528, f: 213.528, l: "C", a: 1},
{o: 213.528, f: 233.588, l: "C", a: 0},
{o: 233.588, f: 259.772, l: "E", a: 1},
{o: 259.772, f: 281.864, l: "F", a: 0},
{o: 281.864, f: 305.436, l: "B", a: 1},
{o: 305.436, f: 320.848, l: "B", a: 0},
{o: 320.848, f: 335.716, l: "G", a: 1},
{o: 335.716, f: 354.012, l: "H", a: 0},
{o: 354.012, f: 362.816, l: "I", a: 1},
{o: 362.816, f: 374.812, l: "J", a: 0},
{o: 374.812, f: 391.228, l: "A", a: 1},
{o: 391.228, f: 407.54, l: "A", a: 0},
{o: 407.54, f: 419.9, l: "K", a: 1},
{o: 419.9, f: 431.772, l: "L", a: 0}],
[{o: 0.52, f: 11.2, l: "7", a: 0},
{o: 11.2, f: 103.747, l: "2", a: 1},
{o: 103.747, f: 113.4, l: "1", a: 0},
{o: 113.4, f: 122.08, l: "2", a: 1},
{o: 122.08, f: 142.667, l: "1", a: 0},
{o: 142.667, f: 150.92, l: "2", a: 1},
{o: 150.92, f: 178.107, l: "1", a: 0},
{o: 178.107, f: 195.333, l: "3", a: 1},
{o: 195.333, f: 302.28, l: "1", a: 0},
{o: 302.28, f: 341.613, l: "3", a: 1},
{o: 341.613, f: 359.04, l: "1", a: 0},
{o: 359.04, f: 366.72, l: "8", a: 1},
{o: 366.72, f: 379.733, l: "5", a: 0},
{o: 379.733, f: 385.76, l: "4", a: 1},
{o: 385.76, f: 398.48, l: "5", a: 0},
{o: 398.48, f: 409.28, l: "4", a: 1},
{o: 409.28, f: 415.453, l: "6", a: 0},
{o: 415.453, f: 425.32, l: "4", a: 1},
{o: 425.32, f: 429.133, l: "6", a: 0}],
[{o: 0, f: 40.975, l: "a", a: 0},
{o: 40.975, f: 89.4, l: "a", a: 1},
{o: 89.4, f: 117.71, l: "b", a: 0},
{o: 117.71, f: 171.35, l: "a", a: 1},
{o: 171.35, f: 200.405, l: "b", a: 0},
{o: 200.405, f: 254.045, l: "a", a: 1},
{o: 254.045, f: 284.59, l: "b", a: 0},
{o: 284.59, f: 338.23, l: "a", a: 1},
{o: 338.23, f: 359.835, l: "b", a: 0},
{o: 359.835, f: 432.1, l: "c", a: 1}],
[{o: 0, f: 21.467, l: "n1", a: 0},
{o: 21.467, f: 37.918, l: "A", a: 1},
{o: 37.918, f: 54.242, l: "A", a: 0},
{o: 54.242, f: 70.403, l: "A", a: 1},
{o: 70.403, f: 86.61, l: "A", a: 0},
{o: 86.61, f: 102.83, l: "A", a: 1},
{o: 102.83, f: 119.072, l: "A", a: 0},
{o: 119.072, f: 135.442, l: "A", a: 1},
{o: 135.442, f: 148.167, l: "A", a: 0},
{o: 148.167, f: 159.509, l: "A", a: 1},
{o: 159.509, f: 168.414, l: "n10", a: 0},
{o: 168.414, f: 179.734, l: "A", a: 1},
{o: 179.734, f: 194.386, l: "n11", a: 0},
{o: 194.386, f: 205.589, l: "A", a: 1},
{o: 205.589, f: 213.635, l: "n12", a: 0},
{o: 213.635, f: 226.464, l: "A", a: 1},
{o: 226.464, f: 239.409, l: "A", a: 0},
{o: 239.409, f: 253.063, l: "A", a: 1},
{o: 253.063, f: 265.52, l: "A", a: 0},
{o: 265.52, f: 278.848, l: "A", a: 1},
{o: 278.848, f: 290.679, l: "A", a: 0},
{o: 290.679, f: 298.295, l: "n18", a: 1},
{o: 298.295, f: 310.114, l: "A", a: 0},
{o: 310.114, f: 319.495, l: "n19", a: 1},
{o: 319.495, f: 331.488, l: "A", a: 0},
{o: 331.488, f: 346.465, l: "n20", a: 1},
{o: 346.465, f: 358.632, l: "A", a: 0},
{o: 358.632, f: 431.752, l: "n21", a: 1}],
[{o: 0, f: 0.008, l: "G", a: 0},
{o: 0.008, f: 360.54, l: "E", a: 1},
{o: 360.54, f: 409.048, l: "F", a: 0},
{o: 409.048, f: 431.772, l: "A", a: 1},
{o: 431.772, f: 431.88, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000906.ogg";
