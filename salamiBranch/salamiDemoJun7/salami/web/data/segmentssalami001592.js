var data = [
[{o: 0.309, f: 37.261, l: "A", a: 0},
{o: 37.261, f: 73.468, l: "A", a: 1},
{o: 73.468, f: 110.076, l: "A", a: 0},
{o: 110.076, f: 146.568, l: "A", a: 1},
{o: 146.568, f: 183.411, l: "A", a: 0},
{o: 183.411, f: 220.579, l: "A", a: 1},
{o: 220.579, f: 257.858, l: "A", a: 0},
{o: 257.858, f: 295.482, l: "A", a: 1},
{o: 295.482, f: 333.105, l: "A", a: 0},
{o: 333.105, f: 371.211, l: "A", a: 1},
{o: 371.211, f: 409.276, l: "A", a: 0},
{o: 409.276, f: 447.557, l: "A", a: 1},
{o: 447.557, f: 485.913, l: "A", a: 0},
{o: 485.913, f: 524.674, l: "A", a: 1},
{o: 524.674, f: 561.469, l: "A", a: 0},
{o: 561.469, f: 598.992, l: "A", a: 1},
{o: 598.992, f: 614.923, l: "A''", a: 0}],
[{o: 0, f: 614.924, l: "A", a: 0}],
[{o: 0, f: 614.924, l: "A", a: 0}],
[{o: 0.493, f: 1.787, l: "6", a: 0},
{o: 1.787, f: 12.573, l: "4", a: 1},
{o: 12.573, f: 18.533, l: "1", a: 0},
{o: 18.533, f: 24.493, l: "4", a: 1},
{o: 24.493, f: 33.187, l: "1", a: 0},
{o: 33.187, f: 38.4, l: "6", a: 1},
{o: 38.4, f: 48.547, l: "1", a: 0},
{o: 48.547, f: 54.573, l: "2", a: 1},
{o: 54.573, f: 69.373, l: "1", a: 0},
{o: 69.373, f: 73.213, l: "3", a: 1},
{o: 73.213, f: 85, l: "1", a: 0},
{o: 85, f: 91.053, l: "2", a: 1},
{o: 91.053, f: 106.293, l: "1", a: 0},
{o: 106.293, f: 110.173, l: "3", a: 1},
{o: 110.173, f: 121.987, l: "1", a: 0},
{o: 121.987, f: 127.533, l: "2", a: 1},
{o: 127.533, f: 152.293, l: "1", a: 0},
{o: 152.293, f: 161.853, l: "2", a: 1},
{o: 161.853, f: 182.733, l: "1", a: 0},
{o: 182.733, f: 194.653, l: "7", a: 1},
{o: 194.653, f: 201.253, l: "2", a: 0},
{o: 201.253, f: 223.013, l: "1", a: 1},
{o: 223.013, f: 231.947, l: "8", a: 0},
{o: 231.947, f: 238.813, l: "2", a: 1},
{o: 238.813, f: 244.253, l: "8", a: 0},
{o: 244.253, f: 306.293, l: "2", a: 1},
{o: 306.293, f: 312.2, l: "1", a: 0},
{o: 312.2, f: 332.293, l: "2", a: 1},
{o: 332.293, f: 345.067, l: "3", a: 0},
{o: 345.067, f: 350.227, l: "5", a: 1},
{o: 350.227, f: 357.36, l: "3", a: 0},
{o: 357.36, f: 369.173, l: "1", a: 1},
{o: 369.173, f: 373.8, l: "5", a: 0},
{o: 373.8, f: 383.173, l: "3", a: 1},
{o: 383.173, f: 390.347, l: "5", a: 0},
{o: 390.347, f: 395.76, l: "3", a: 1},
{o: 395.76, f: 401.52, l: "1", a: 0},
{o: 401.52, f: 407.493, l: "3", a: 1},
{o: 407.493, f: 414.667, l: "1", a: 0},
{o: 414.667, f: 419, l: "7", a: 1},
{o: 419, f: 440.773, l: "5", a: 0},
{o: 440.773, f: 447.307, l: "1", a: 1},
{o: 447.307, f: 520.213, l: "4", a: 0},
{o: 520.213, f: 524.6, l: "6", a: 1},
{o: 524.6, f: 535.893, l: "1", a: 0},
{o: 535.893, f: 542.133, l: "2", a: 1},
{o: 542.133, f: 570.16, l: "1", a: 0},
{o: 570.16, f: 579.493, l: "2", a: 1},
{o: 579.493, f: 594.773, l: "1", a: 0},
{o: 594.773, f: 599.12, l: "3", a: 1},
{o: 599.12, f: 606.093, l: "4", a: 0},
{o: 606.093, f: 614.84, l: "6", a: 1}],
[{o: 0, f: 36.505, l: "a", a: 0},
{o: 36.505, f: 72.265, l: "b", a: 1},
{o: 72.265, f: 109.515, l: "b", a: 0},
{o: 109.515, f: 530.44, l: "c", a: 1},
{o: 530.44, f: 560.24, l: "a", a: 0},
{o: 560.24, f: 615.37, l: "d", a: 1}],
[{o: 0, f: 1.312, l: "n1", a: 0},
{o: 1.312, f: 19.168, l: "A", a: 1},
{o: 19.168, f: 37.152, l: "n2", a: 0},
{o: 37.152, f: 57.469, l: "A", a: 1},
{o: 57.469, f: 73.433, l: "D", a: 0},
{o: 73.433, f: 91.672, l: "A", a: 1},
{o: 91.672, f: 110.225, l: "n5", a: 0},
{o: 110.225, f: 120.906, l: "B", a: 1},
{o: 120.906, f: 136.115, l: "C", a: 0},
{o: 136.115, f: 142.176, l: "n6", a: 1},
{o: 142.176, f: 152.903, l: "B", a: 0},
{o: 152.903, f: 177.4, l: "n7", a: 1},
{o: 177.4, f: 188.175, l: "B", a: 0},
{o: 188.175, f: 231.607, l: "n8", a: 1},
{o: 231.607, f: 247.176, l: "C", a: 0},
{o: 247.176, f: 289.332, l: "n9", a: 1},
{o: 289.332, f: 300.304, l: "B", a: 0},
{o: 300.304, f: 306.503, l: "n10", a: 1},
{o: 306.503, f: 322.188, l: "C", a: 0},
{o: 322.188, f: 330.048, l: "n11", a: 1},
{o: 330.048, f: 341.31, l: "B", a: 0},
{o: 341.31, f: 353.988, l: "E", a: 1},
{o: 353.988, f: 379.379, l: "n12", a: 0},
{o: 379.379, f: 392.127, l: "E", a: 1},
{o: 392.127, f: 524.028, l: "n13", a: 0},
{o: 524.028, f: 545.065, l: "A", a: 1},
{o: 545.065, f: 561.377, l: "D", a: 0},
{o: 561.377, f: 582.438, l: "A", a: 1},
{o: 582.438, f: 599.156, l: "D", a: 0},
{o: 599.156, f: 610.232, l: "B", a: 1},
{o: 610.232, f: 614.911, l: "n18", a: 0}],
[{o: 0, f: 0.216, l: "G", a: 0},
{o: 0.216, f: 59.164, l: "E", a: 1},
{o: 59.164, f: 72.86, l: "F", a: 0},
{o: 72.86, f: 95.656, l: "E", a: 1},
{o: 95.656, f: 109.428, l: "F", a: 0},
{o: 109.428, f: 132.668, l: "E", a: 1},
{o: 132.668, f: 145.956, l: "F", a: 0},
{o: 145.956, f: 167.784, l: "E", a: 1},
{o: 167.784, f: 191.628, l: "F", a: 0},
{o: 191.628, f: 206.752, l: "E", a: 1},
{o: 206.752, f: 220.292, l: "F", a: 0},
{o: 220.292, f: 243.652, l: "E", a: 1},
{o: 243.652, f: 256.628, l: "F", a: 0},
{o: 256.628, f: 318.628, l: "E", a: 1},
{o: 318.628, f: 382.52, l: "F", a: 0},
{o: 382.52, f: 396.028, l: "C", a: 1},
{o: 396.028, f: 485.404, l: "F", a: 0},
{o: 485.404, f: 508.984, l: "E", a: 1},
{o: 508.984, f: 522.352, l: "F", a: 0},
{o: 522.352, f: 547.336, l: "E", a: 1},
{o: 547.336, f: 559.592, l: "F", a: 0},
{o: 559.592, f: 584.156, l: "E", a: 1},
{o: 584.156, f: 606.252, l: "F", a: 0},
{o: 606.252, f: 612.572, l: "A", a: 1},
{o: 612.572, f: 614.924, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001592.ogg";
