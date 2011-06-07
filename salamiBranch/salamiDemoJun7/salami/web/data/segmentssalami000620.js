var data = [
[{o: 0.232, f: 57.863, l: "A", a: 0},
{o: 57.863, f: 104.245, l: "B", a: 1},
{o: 104.245, f: 209.944, l: "C", a: 0},
{o: 209.944, f: 239.408, l: "D", a: 1},
{o: 239.408, f: 246.358, l: "E", a: 0},
{o: 246.358, f: 291.403, l: "B", a: 1},
{o: 291.403, f: 350.11, l: "F", a: 0},
{o: 350.11, f: 419.585, l: "C", a: 1},
{o: 419.585, f: 451.986, l: "D", a: 0},
{o: 451.986, f: 600.301, l: "G", a: 1}],
[{o: 0, f: 600.267, l: "A", a: 0}],
[{o: 0.068, f: 23.628, l: "E", a: 0},
{o: 23.628, f: 48.864, l: "F", a: 1},
{o: 48.864, f: 69.104, l: "E", a: 0},
{o: 69.104, f: 86.808, l: "B", a: 1},
{o: 86.808, f: 104.572, l: "F", a: 0},
{o: 104.572, f: 129.344, l: "C", a: 1},
{o: 129.344, f: 154.508, l: "E", a: 0},
{o: 154.508, f: 197.144, l: "E", a: 1},
{o: 197.144, f: 215.016, l: "A", a: 0},
{o: 215.016, f: 239.304, l: "J", a: 1},
{o: 239.304, f: 254.772, l: "H", a: 0},
{o: 254.772, f: 283.728, l: "G", a: 1},
{o: 283.728, f: 303.632, l: "H", a: 0},
{o: 303.632, f: 319.616, l: "D", a: 1},
{o: 319.616, f: 337.636, l: "G", a: 0},
{o: 337.636, f: 354.784, l: "A", a: 1},
{o: 354.784, f: 382.924, l: "H", a: 0},
{o: 382.924, f: 407.604, l: "H", a: 1},
{o: 407.604, f: 417.024, l: "H", a: 0},
{o: 417.024, f: 451.104, l: "J", a: 1},
{o: 451.104, f: 477.468, l: "I", a: 0},
{o: 477.468, f: 505.168, l: "E", a: 1},
{o: 505.168, f: 528.344, l: "H", a: 0},
{o: 528.344, f: 557.328, l: "K", a: 1},
{o: 557.328, f: 596.104, l: "E", a: 0}],
[{o: 0.627, f: 10.893, l: "5", a: 0},
{o: 10.893, f: 20.52, l: "2", a: 1},
{o: 20.52, f: 27.133, l: "4", a: 0},
{o: 27.133, f: 34.12, l: "5", a: 1},
{o: 34.12, f: 45.587, l: "1", a: 0},
{o: 45.587, f: 58.533, l: "4", a: 1},
{o: 58.533, f: 76, l: "3", a: 0},
{o: 76, f: 83.893, l: "2", a: 1},
{o: 83.893, f: 101.373, l: "3", a: 0},
{o: 101.373, f: 121.133, l: "2", a: 1},
{o: 121.133, f: 135.027, l: "1", a: 0},
{o: 135.027, f: 143.72, l: "7", a: 1},
{o: 143.72, f: 222.147, l: "1", a: 0},
{o: 222.147, f: 238.947, l: "3", a: 1},
{o: 238.947, f: 268.947, l: "2", a: 0},
{o: 268.947, f: 277.773, l: "3", a: 1},
{o: 277.773, f: 308.307, l: "2", a: 0},
{o: 308.307, f: 438.52, l: "1", a: 1},
{o: 438.52, f: 448.92, l: "3", a: 0},
{o: 448.92, f: 478.467, l: "6", a: 1},
{o: 478.467, f: 535.293, l: "2", a: 0},
{o: 535.293, f: 545.08, l: "1", a: 1},
{o: 545.08, f: 553.733, l: "2", a: 0},
{o: 553.733, f: 564.6, l: "1", a: 1},
{o: 564.6, f: 576.653, l: "2", a: 0},
{o: 576.653, f: 597.4, l: "4", a: 1},
{o: 597.4, f: 600.147, l: "8", a: 0}],
[{o: 0, f: 49.17, l: "a", a: 0},
{o: 49.17, f: 105.045, l: "b", a: 1},
{o: 105.045, f: 230.95, l: "c", a: 0},
{o: 230.95, f: 292.785, l: "b", a: 1},
{o: 292.785, f: 483.505, l: "d", a: 0},
{o: 483.505, f: 527.46, l: "b", a: 1},
{o: 527.46, f: 600.47, l: "e", a: 0}],
[{o: 0, f: 50.12, l: "n1", a: 0},
{o: 50.12, f: 68.301, l: "F", a: 1},
{o: 68.301, f: 81.247, l: "B", a: 0},
{o: 81.247, f: 98.383, l: "D", a: 1},
{o: 98.383, f: 140.585, l: "n3", a: 0},
{o: 140.585, f: 159.231, l: "C", a: 1},
{o: 159.231, f: 175.009, l: "n4", a: 0},
{o: 175.009, f: 192.18, l: "C", a: 1},
{o: 192.18, f: 213.124, l: "n5", a: 0},
{o: 213.124, f: 221.112, l: "E", a: 1},
{o: 221.112, f: 225.117, l: "n6", a: 0},
{o: 225.117, f: 237.412, l: "E", a: 1},
{o: 237.412, f: 256.755, l: "n7", a: 0},
{o: 256.755, f: 266.089, l: "B", a: 1},
{o: 266.089, f: 271.546, l: "n8", a: 0},
{o: 271.546, f: 285.129, l: "D", a: 1},
{o: 285.129, f: 350.993, l: "n9", a: 0},
{o: 350.993, f: 364.867, l: "A", a: 1},
{o: 364.867, f: 386.125, l: "n10", a: 0},
{o: 386.125, f: 399.604, l: "A", a: 1},
{o: 399.604, f: 422.487, l: "n11", a: 0},
{o: 422.487, f: 432.158, l: "A", a: 1},
{o: 432.158, f: 441.446, l: "A", a: 0},
{o: 441.446, f: 494.074, l: "n13", a: 1},
{o: 494.074, f: 503.71, l: "B", a: 0},
{o: 503.71, f: 536.822, l: "n14", a: 1},
{o: 536.822, f: 549.152, l: "F", a: 0},
{o: 549.152, f: 569.969, l: "n15", a: 1},
{o: 569.969, f: 584.04, l: "B", a: 0},
{o: 584.04, f: 600.05, l: "n16", a: 1}],
[{o: 0, f: 0.076, l: "J", a: 0},
{o: 0.076, f: 48.876, l: "E", a: 1},
{o: 48.876, f: 75.812, l: "I", a: 0},
{o: 75.812, f: 83.64, l: "E", a: 1},
{o: 83.64, f: 94.88, l: "F", a: 0},
{o: 94.88, f: 100.364, l: "I", a: 1},
{o: 100.364, f: 105.176, l: "E", a: 0},
{o: 105.176, f: 111.6, l: "I", a: 1},
{o: 111.6, f: 116.544, l: "E", a: 0},
{o: 116.544, f: 133.896, l: "I", a: 1},
{o: 133.896, f: 141.028, l: "F", a: 0},
{o: 141.028, f: 245.2, l: "I", a: 1},
{o: 245.2, f: 270.572, l: "E", a: 0},
{o: 270.572, f: 291.516, l: "F", a: 1},
{o: 291.516, f: 297.968, l: "H", a: 0},
{o: 297.968, f: 303.628, l: "C", a: 1},
{o: 303.628, f: 315.072, l: "H", a: 0},
{o: 315.072, f: 334.912, l: "C", a: 1},
{o: 334.912, f: 346.9, l: "E", a: 0},
{o: 346.9, f: 442.796, l: "C", a: 1},
{o: 442.796, f: 521.572, l: "H", a: 0},
{o: 521.572, f: 536.4, l: "E", a: 1},
{o: 536.4, f: 544.296, l: "I", a: 0},
{o: 544.296, f: 595.912, l: "E", a: 1},
{o: 595.912, f: 600.267, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000620.ogg";
