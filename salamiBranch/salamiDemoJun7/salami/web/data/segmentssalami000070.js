var data = [
[{o: 0.068, f: 0.784, l: "Z", a: 0},
{o: 0.784, f: 17.597, l: "A", a: 1},
{o: 17.597, f: 47.457, l: "B", a: 0},
{o: 47.457, f: 64.611, l: "C", a: 1},
{o: 64.611, f: 73.035, l: "A", a: 0},
{o: 73.035, f: 102.3, l: "B", a: 1},
{o: 102.3, f: 119.155, l: "C", a: 0},
{o: 119.155, f: 127.451, l: "A", a: 1},
{o: 127.451, f: 156.338, l: "B", a: 0},
{o: 156.338, f: 182.958, l: "C", a: 1},
{o: 182.958, f: 335.91, l: "D", a: 0},
{o: 335.91, f: 353.773, l: "B'", a: 1},
{o: 353.773, f: 383.774, l: "B", a: 0},
{o: 383.774, f: 429.768, l: "C", a: 1},
{o: 429.768, f: 432.562, l: "Z", a: 0}],
[{o: 0.008, f: 8.856, l: "C", a: 0},
{o: 8.856, f: 25.732, l: "C", a: 1},
{o: 25.732, f: 36.992, l: "C", a: 0},
{o: 36.992, f: 46.568, l: "C", a: 1},
{o: 46.568, f: 57.668, l: "C", a: 0},
{o: 57.668, f: 71.892, l: "C", a: 1},
{o: 71.892, f: 86.312, l: "C", a: 0},
{o: 86.312, f: 102.136, l: "C", a: 1},
{o: 102.136, f: 122.12, l: "C", a: 0},
{o: 122.12, f: 132.184, l: "C", a: 1},
{o: 132.184, f: 146.172, l: "C", a: 0},
{o: 146.172, f: 160.216, l: "C", a: 1},
{o: 160.216, f: 171.572, l: "C", a: 0},
{o: 171.572, f: 188.856, l: "C", a: 1},
{o: 188.856, f: 200.768, l: "C", a: 0},
{o: 200.768, f: 214.244, l: "C", a: 1},
{o: 214.244, f: 225.456, l: "C", a: 0},
{o: 225.456, f: 232.1, l: "C", a: 1},
{o: 232.1, f: 247.8, l: "C", a: 0},
{o: 247.8, f: 255.82, l: "B", a: 1},
{o: 255.82, f: 278.184, l: "B", a: 0},
{o: 278.184, f: 301.212, l: "B", a: 1},
{o: 301.212, f: 315.568, l: "B", a: 0},
{o: 315.568, f: 329.588, l: "C", a: 1},
{o: 329.588, f: 340.952, l: "C", a: 0},
{o: 340.952, f: 354.736, l: "B", a: 1},
{o: 354.736, f: 368.648, l: "B", a: 0},
{o: 368.648, f: 384.824, l: "B", a: 1},
{o: 384.824, f: 400.72, l: "B", a: 0},
{o: 400.72, f: 409.184, l: "C", a: 1},
{o: 409.184, f: 424.632, l: "B", a: 0},
{o: 424.632, f: 432.076, l: "A", a: 1}],
[{o: 0, f: 432.472, l: "A", a: 0}],
[{o: 0.627, f: 7.16, l: "8", a: 0},
{o: 7.16, f: 176.493, l: "1", a: 1},
{o: 176.493, f: 222.52, l: "3", a: 0},
{o: 222.52, f: 246.787, l: "2", a: 1},
{o: 246.787, f: 264.16, l: "5", a: 0},
{o: 264.16, f: 285.307, l: "2", a: 1},
{o: 285.307, f: 292.547, l: "3", a: 0},
{o: 292.547, f: 327.733, l: "2", a: 1},
{o: 327.733, f: 335.52, l: "7", a: 0},
{o: 335.52, f: 405.773, l: "1", a: 1},
{o: 405.773, f: 412.56, l: "4", a: 0},
{o: 412.56, f: 428.893, l: "6", a: 1},
{o: 428.893, f: 432.333, l: "4", a: 0}],
[{o: 0, f: 64.07, l: "a", a: 0},
{o: 64.07, f: 115.475, l: "b", a: 1},
{o: 115.475, f: 169.86, l: "b", a: 0},
{o: 169.86, f: 341.21, l: "c", a: 1},
{o: 341.21, f: 377.715, l: "a", a: 0},
{o: 377.715, f: 432.845, l: "d", a: 1}],
[{o: 0, f: 8.603, l: "n1", a: 0},
{o: 8.603, f: 21.989, l: "D", a: 1},
{o: 21.989, f: 30.581, l: "A", a: 0},
{o: 30.581, f: 39.149, l: "A", a: 1},
{o: 39.149, f: 47.415, l: "A", a: 0},
{o: 47.415, f: 64.551, l: "C", a: 1},
{o: 64.551, f: 77.415, l: "D", a: 0},
{o: 77.415, f: 85.763, l: "A", a: 1},
{o: 85.763, f: 93.054, l: "A", a: 0},
{o: 93.054, f: 102.168, l: "E", a: 1},
{o: 102.168, f: 118.027, l: "C", a: 0},
{o: 118.027, f: 131.692, l: "n10", a: 1},
{o: 131.692, f: 138.948, l: "A", a: 0},
{o: 138.948, f: 148.306, l: "E", a: 1},
{o: 148.306, f: 156.294, l: "A", a: 0},
{o: 156.294, f: 172.559, l: "C", a: 1},
{o: 172.559, f: 178.527, l: "n13", a: 0},
{o: 178.527, f: 193.213, l: "B", a: 1},
{o: 193.213, f: 211.627, l: "n14", a: 0},
{o: 211.627, f: 226.557, l: "B", a: 1},
{o: 226.557, f: 234.475, l: "n15", a: 0},
{o: 234.475, f: 249.44, l: "B", a: 1},
{o: 249.44, f: 284.874, l: "n16", a: 0},
{o: 284.874, f: 300.025, l: "B", a: 1},
{o: 300.025, f: 310.683, l: "n17", a: 0},
{o: 310.683, f: 326.02, l: "B", a: 1},
{o: 326.02, f: 349.878, l: "n18", a: 0},
{o: 349.878, f: 358.296, l: "A", a: 1},
{o: 358.296, f: 366.817, l: "A", a: 0},
{o: 366.817, f: 375.246, l: "A", a: 1},
{o: 375.246, f: 382.909, l: "A", a: 0},
{o: 382.909, f: 432.495, l: "n22", a: 1}],
[{o: 0, f: 0.056, l: "D", a: 0},
{o: 0.056, f: 30.02, l: "C", a: 1},
{o: 30.02, f: 84.184, l: "B", a: 0},
{o: 84.184, f: 101.064, l: "C", a: 1},
{o: 101.064, f: 116.444, l: "B", a: 0},
{o: 116.444, f: 155.18, l: "C", a: 1},
{o: 155.18, f: 166.592, l: "B", a: 0},
{o: 166.592, f: 181.192, l: "C", a: 1},
{o: 181.192, f: 331.476, l: "A", a: 0},
{o: 331.476, f: 343.78, l: "C", a: 1},
{o: 343.78, f: 432.06, l: "B", a: 0},
{o: 432.06, f: 432.472, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000070.ogg";
