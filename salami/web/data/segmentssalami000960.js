var data = [
[{o: 0.465, f: 10.596, l: "Y", a: 0},
{o: 10.596, f: 30.171, l: "A", a: 1},
{o: 30.171, f: 49.794, l: "C", a: 0},
{o: 49.794, f: 64.436, l: "D", a: 1},
{o: 64.436, f: 74.283, l: "C", a: 0},
{o: 74.283, f: 93.939, l: "A", a: 1},
{o: 93.939, f: 103.619, l: "F", a: 0},
{o: 103.619, f: 123.204, l: "G", a: 1},
{o: 123.204, f: 137.939, l: "I", a: 0},
{o: 137.939, f: 152.602, l: "D", a: 1},
{o: 152.602, f: 189.348, l: "J", a: 0},
{o: 189.348, f: 208.939, l: "C", a: 1},
{o: 208.939, f: 223.619, l: "D", a: 0},
{o: 223.619, f: 233.515, l: "K", a: 1}],
[{o: 0.092, f: 16.928, l: "B", a: 0},
{o: 16.928, f: 29.48, l: "B", a: 1},
{o: 29.48, f: 48.76, l: "D", a: 0},
{o: 48.76, f: 59.168, l: "A", a: 1},
{o: 59.168, f: 72.328, l: "D", a: 0},
{o: 72.328, f: 93.76, l: "B", a: 1},
{o: 93.76, f: 102.324, l: "E", a: 0},
{o: 102.324, f: 119.152, l: "C", a: 1},
{o: 119.152, f: 135.372, l: "C", a: 0},
{o: 135.372, f: 158.652, l: "F", a: 1},
{o: 158.652, f: 169.364, l: "G", a: 0},
{o: 169.364, f: 188.648, l: "H", a: 1},
{o: 188.648, f: 207.924, l: "I", a: 0},
{o: 207.924, f: 218.64, l: "A", a: 1},
{o: 218.64, f: 230.272, l: "J", a: 0}],
[{o: 0.092, f: 16.928, l: "D", a: 0},
{o: 16.928, f: 29.48, l: "B", a: 1},
{o: 29.48, f: 48.76, l: "E", a: 0},
{o: 48.76, f: 59.168, l: "A", a: 1},
{o: 59.168, f: 72.328, l: "F", a: 0},
{o: 72.328, f: 93.76, l: "B", a: 1},
{o: 93.76, f: 102.324, l: "G", a: 0},
{o: 102.324, f: 119.152, l: "C", a: 1},
{o: 119.152, f: 135.372, l: "C", a: 0},
{o: 135.372, f: 158.652, l: "H", a: 1},
{o: 158.652, f: 169.364, l: "I", a: 0},
{o: 169.364, f: 188.648, l: "J", a: 1},
{o: 188.648, f: 207.924, l: "K", a: 0},
{o: 207.924, f: 218.64, l: "A", a: 1},
{o: 218.64, f: 230.272, l: "L", a: 0}],
[{o: 0.413, f: 29.947, l: "1", a: 0},
{o: 29.947, f: 48.613, l: "3", a: 1},
{o: 48.613, f: 59.32, l: "4", a: 0},
{o: 59.32, f: 63.92, l: "2", a: 1},
{o: 63.92, f: 73.4, l: "3", a: 0},
{o: 73.4, f: 92.693, l: "1", a: 1},
{o: 92.693, f: 100.64, l: "7", a: 0},
{o: 100.64, f: 107.387, l: "5", a: 1},
{o: 107.387, f: 112.893, l: "2", a: 0},
{o: 112.893, f: 117.787, l: "5", a: 1},
{o: 117.787, f: 136.773, l: "2", a: 0},
{o: 136.773, f: 147.493, l: "4", a: 1},
{o: 147.493, f: 154.213, l: "1", a: 0},
{o: 154.213, f: 160.027, l: "6", a: 1},
{o: 160.027, f: 164.613, l: "5", a: 0},
{o: 164.613, f: 182.373, l: "6", a: 1},
{o: 182.373, f: 188.507, l: "5", a: 0},
{o: 188.507, f: 207.773, l: "3", a: 1},
{o: 207.773, f: 218.493, l: "4", a: 0},
{o: 218.493, f: 228.293, l: "2", a: 1},
{o: 228.293, f: 233.293, l: "8", a: 0}],
[{o: 0, f: 41.72, l: "a", a: 0},
{o: 41.72, f: 64.815, l: "b", a: 1},
{o: 64.815, f: 105.79, l: "a", a: 0},
{o: 105.79, f: 162.41, l: "c", a: 1},
{o: 162.41, f: 205.62, l: "a", a: 0},
{o: 205.62, f: 233.185, l: "b", a: 1}],
[{o: 0, f: 9.915, l: "n1", a: 0},
{o: 9.915, f: 19.702, l: "B", a: 1},
{o: 19.702, f: 29.814, l: "B", a: 0},
{o: 29.814, f: 68.986, l: "A", a: 1},
{o: 68.986, f: 73.584, l: "n3", a: 0},
{o: 73.584, f: 83.383, l: "B", a: 1},
{o: 83.383, f: 93.182, l: "B", a: 0},
{o: 93.182, f: 104.501, l: "C", a: 1},
{o: 104.501, f: 114.3, l: "D", a: 0},
{o: 114.3, f: 122.868, l: "D", a: 1},
{o: 122.868, f: 152.857, l: "n6", a: 0},
{o: 152.857, f: 161.437, l: "C", a: 1},
{o: 161.437, f: 170.005, l: "n7", a: 0},
{o: 170.005, f: 179.804, l: "C", a: 1},
{o: 179.804, f: 188.987, l: "C", a: 0},
{o: 188.987, f: 228.159, l: "A", a: 1},
{o: 228.159, f: 233.361, l: "n10", a: 0}],
[{o: 0, f: 0.016, l: "H", a: 0},
{o: 0.016, f: 0.712, l: "C", a: 1},
{o: 0.712, f: 9.272, l: "F", a: 0},
{o: 9.272, f: 27.184, l: "C", a: 1},
{o: 27.184, f: 96.052, l: "F", a: 0},
{o: 96.052, f: 122.072, l: "G", a: 1},
{o: 122.072, f: 136.464, l: "D", a: 0},
{o: 136.464, f: 169.216, l: "F", a: 1},
{o: 169.216, f: 190.644, l: "G", a: 0},
{o: 190.644, f: 219.392, l: "F", a: 1},
{o: 219.392, f: 227.352, l: "D", a: 0},
{o: 227.352, f: 229.204, l: "G", a: 1},
{o: 229.204, f: 233.427, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000960.ogg";