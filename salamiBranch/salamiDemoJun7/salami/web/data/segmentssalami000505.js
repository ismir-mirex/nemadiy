var data = [
[{o: 0.42, f: 23.624, l: "A", a: 0},
{o: 23.624, f: 46.531, l: "A", a: 1},
{o: 46.531, f: 69.964, l: "A", a: 0},
{o: 69.964, f: 117.299, l: "A", a: 1},
{o: 117.299, f: 140.907, l: "A", a: 0},
{o: 140.907, f: 164.475, l: "A", a: 1},
{o: 164.475, f: 188.26, l: "A", a: 0},
{o: 188.26, f: 211.897, l: "A", a: 1},
{o: 211.897, f: 235.617, l: "A", a: 0},
{o: 235.617, f: 259.609, l: "A", a: 1},
{o: 259.609, f: 283.353, l: "A", a: 0},
{o: 283.353, f: 307.427, l: "A", a: 1},
{o: 307.427, f: 331.44, l: "A", a: 0},
{o: 331.44, f: 355.562, l: "A", a: 1},
{o: 355.562, f: 379.545, l: "A", a: 0},
{o: 379.545, f: 424.735, l: "A", a: 1}],
[{o: 0.192, f: 16.236, l: "B", a: 0},
{o: 16.236, f: 30.976, l: "A", a: 1},
{o: 30.976, f: 46.476, l: "A", a: 0},
{o: 46.476, f: 60.96, l: "A", a: 1},
{o: 60.96, f: 79.6, l: "A", a: 0},
{o: 79.6, f: 89.976, l: "A", a: 1},
{o: 89.976, f: 107.328, l: "A", a: 0},
{o: 107.328, f: 117.668, l: "A", a: 1},
{o: 117.668, f: 128.012, l: "A", a: 0},
{o: 128.012, f: 145.18, l: "A", a: 1},
{o: 145.18, f: 163.388, l: "A", a: 0},
{o: 163.388, f: 184.236, l: "A", a: 1},
{o: 184.236, f: 196.512, l: "C", a: 0},
{o: 196.512, f: 212.9, l: "A", a: 1},
{o: 212.9, f: 226.18, l: "D", a: 0},
{o: 226.18, f: 245.076, l: "E", a: 1},
{o: 245.076, f: 258.616, l: "F", a: 0},
{o: 258.616, f: 280.824, l: "G", a: 1},
{o: 280.824, f: 304.76, l: "H", a: 0},
{o: 304.76, f: 330.896, l: "I", a: 1},
{o: 330.896, f: 343.424, l: "A", a: 0},
{o: 343.424, f: 365.98, l: "J", a: 1},
{o: 365.98, f: 389.444, l: "A", a: 0},
{o: 389.444, f: 412.152, l: "K", a: 1},
{o: 412.152, f: 421.544, l: "L", a: 0}],
[{o: 0.192, f: 16.236, l: "D", a: 0},
{o: 16.236, f: 30.976, l: "A", a: 1},
{o: 30.976, f: 46.476, l: "A", a: 0},
{o: 46.476, f: 60.96, l: "B", a: 1},
{o: 60.96, f: 79.6, l: "B", a: 0},
{o: 79.6, f: 89.976, l: "C", a: 1},
{o: 89.976, f: 107.328, l: "A", a: 0},
{o: 107.328, f: 117.668, l: "A", a: 1},
{o: 117.668, f: 128.012, l: "C", a: 0},
{o: 128.012, f: 145.18, l: "B", a: 1},
{o: 145.18, f: 163.388, l: "E", a: 0},
{o: 163.388, f: 184.236, l: "F", a: 1},
{o: 184.236, f: 196.512, l: "G", a: 0},
{o: 196.512, f: 212.9, l: "H", a: 1},
{o: 212.9, f: 226.18, l: "I", a: 0},
{o: 226.18, f: 245.076, l: "J", a: 1},
{o: 245.076, f: 258.616, l: "K", a: 0},
{o: 258.616, f: 280.824, l: "L", a: 1},
{o: 280.824, f: 304.76, l: "M", a: 0},
{o: 304.76, f: 330.896, l: "N", a: 1},
{o: 330.896, f: 343.424, l: "A", a: 0},
{o: 343.424, f: 365.98, l: "O", a: 1},
{o: 365.98, f: 389.444, l: "A", a: 0},
{o: 389.444, f: 412.152, l: "P", a: 1},
{o: 412.152, f: 421.544, l: "Q", a: 0}],
[{o: 0.413, f: 15.613, l: "2", a: 0},
{o: 15.613, f: 22.173, l: "1", a: 1},
{o: 22.173, f: 37.373, l: "2", a: 0},
{o: 37.373, f: 44.747, l: "1", a: 1},
{o: 44.747, f: 52.56, l: "2", a: 0},
{o: 52.56, f: 61.813, l: "1", a: 1},
{o: 61.813, f: 89.387, l: "5", a: 0},
{o: 89.387, f: 117.907, l: "1", a: 1},
{o: 117.907, f: 147.893, l: "5", a: 0},
{o: 147.893, f: 183.347, l: "1", a: 1},
{o: 183.347, f: 194.16, l: "7", a: 0},
{o: 194.16, f: 208, l: "6", a: 1},
{o: 208, f: 223.96, l: "3", a: 0},
{o: 223.96, f: 232.387, l: "4", a: 1},
{o: 232.387, f: 242.36, l: "3", a: 0},
{o: 242.36, f: 258.347, l: "4", a: 1},
{o: 258.347, f: 276.613, l: "3", a: 0},
{o: 276.613, f: 296.56, l: "4", a: 1},
{o: 296.56, f: 306.173, l: "3", a: 0},
{o: 306.173, f: 326.667, l: "4", a: 1},
{o: 326.667, f: 337.707, l: "3", a: 0},
{o: 337.707, f: 352.133, l: "6", a: 1},
{o: 352.133, f: 368.707, l: "5", a: 0},
{o: 368.707, f: 379.147, l: "1", a: 1},
{o: 379.147, f: 394.107, l: "2", a: 0},
{o: 394.107, f: 399.96, l: "1", a: 1},
{o: 399.96, f: 417.36, l: "2", a: 0},
{o: 417.36, f: 422.627, l: "8", a: 1}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 380.695, l: "b", a: 1},
{o: 380.695, f: 400.81, l: "a", a: 0},
{o: 400.81, f: 424.65, l: "a", a: 1}],
[{o: 0, f: 424.321, l: "A", a: 0},
{o: 0.035, f: 424.693, l: "A", a: 1}],
[{o: 0, f: 0.28, l: "K", a: 0},
{o: 0.28, f: 21.852, l: "E", a: 1},
{o: 21.852, f: 194.896, l: "D", a: 0},
{o: 194.896, f: 219.14, l: "A", a: 1},
{o: 219.14, f: 338.632, l: "D", a: 0},
{o: 338.632, f: 382.864, l: "A", a: 1},
{o: 382.864, f: 419.072, l: "D", a: 0},
{o: 419.072, f: 420.248, l: "J", a: 1},
{o: 420.248, f: 424.726, l: "K", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000505.ogg";
