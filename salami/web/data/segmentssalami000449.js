var data = [
[{o: 0.264, f: 2.999, l: "D", a: 0},
{o: 2.999, f: 8.349, l: "A", a: 1},
{o: 8.349, f: 13.8, l: "A", a: 0},
{o: 13.8, f: 19.261, l: "B", a: 1},
{o: 19.261, f: 24.54, l: "A", a: 0},
{o: 24.54, f: 29.99, l: "C", a: 1},
{o: 29.99, f: 35.309, l: "A", a: 0},
{o: 35.309, f: 40.647, l: "A", a: 1},
{o: 40.647, f: 46.05, l: "A", a: 0},
{o: 46.05, f: 51.466, l: "B", a: 1},
{o: 51.466, f: 56.73, l: "A", a: 0},
{o: 56.73, f: 62.185, l: "C", a: 1},
{o: 62.185, f: 67.467, l: "A", a: 0},
{o: 67.467, f: 72.773, l: "A", a: 1},
{o: 72.773, f: 78.162, l: "A", a: 0},
{o: 78.162, f: 83.497, l: "B", a: 1},
{o: 83.497, f: 88.829, l: "A", a: 0},
{o: 88.829, f: 94.299, l: "C", a: 1},
{o: 94.299, f: 99.504, l: "A", a: 0},
{o: 99.504, f: 104.747, l: "A", a: 1},
{o: 104.747, f: 110.039, l: "A", a: 0},
{o: 110.039, f: 115.411, l: "B", a: 1},
{o: 115.411, f: 120.698, l: "A", a: 0},
{o: 120.698, f: 125.978, l: "C", a: 1},
{o: 125.978, f: 131.155, l: "A", a: 0},
{o: 131.155, f: 136.474, l: "A", a: 1},
{o: 136.474, f: 141.79, l: "A", a: 0},
{o: 141.79, f: 147.046, l: "B", a: 1},
{o: 147.046, f: 152.325, l: "A", a: 0},
{o: 152.325, f: 157.677, l: "C", a: 1},
{o: 157.677, f: 162.953, l: "A", a: 0},
{o: 162.953, f: 168.254, l: "A", a: 1},
{o: 168.254, f: 173.494, l: "A", a: 0},
{o: 173.494, f: 178.806, l: "B", a: 1},
{o: 178.806, f: 184.014, l: "A", a: 0},
{o: 184.014, f: 189.302, l: "C", a: 1},
{o: 189.302, f: 194.55, l: "A", a: 0},
{o: 194.55, f: 199.821, l: "A", a: 1},
{o: 199.821, f: 205.125, l: "A", a: 0},
{o: 205.125, f: 210.386, l: "A", a: 1},
{o: 210.386, f: 218.912, l: "A", a: 0}],
[{o: 0.052, f: 5.932, l: "C", a: 0},
{o: 5.932, f: 12.684, l: "C", a: 1},
{o: 12.684, f: 28.492, l: "C", a: 0},
{o: 28.492, f: 42.584, l: "C", a: 1},
{o: 42.584, f: 51.944, l: "C", a: 0},
{o: 51.944, f: 60.66, l: "C", a: 1},
{o: 60.66, f: 71.388, l: "C", a: 0},
{o: 71.388, f: 78.756, l: "C", a: 1},
{o: 78.756, f: 87.088, l: "C", a: 0},
{o: 87.088, f: 93.48, l: "C", a: 1},
{o: 93.48, f: 102.724, l: "C", a: 0},
{o: 102.724, f: 113.328, l: "C", a: 1},
{o: 113.328, f: 120.26, l: "C", a: 0},
{o: 120.26, f: 131.744, l: "C", a: 1},
{o: 131.744, f: 142.024, l: "C", a: 0},
{o: 142.024, f: 151.256, l: "C", a: 1},
{o: 151.256, f: 156.216, l: "C", a: 0},
{o: 156.216, f: 163.832, l: "C", a: 1},
{o: 163.832, f: 174.72, l: "C", a: 0},
{o: 174.72, f: 183.592, l: "C", a: 1},
{o: 183.592, f: 187.916, l: "C", a: 0},
{o: 187.916, f: 201.416, l: "C", a: 1},
{o: 201.416, f: 212.596, l: "C", a: 0},
{o: 212.596, f: 216.272, l: "C", a: 1}],
[{o: 0.052, f: 5.932, l: "C", a: 0},
{o: 5.932, f: 12.684, l: "C", a: 1},
{o: 12.684, f: 28.492, l: "C", a: 0},
{o: 28.492, f: 42.584, l: "C", a: 1},
{o: 42.584, f: 51.944, l: "C", a: 0},
{o: 51.944, f: 60.66, l: "C", a: 1},
{o: 60.66, f: 71.388, l: "C", a: 0},
{o: 71.388, f: 78.756, l: "C", a: 1},
{o: 78.756, f: 87.088, l: "B", a: 0},
{o: 87.088, f: 93.48, l: "C", a: 1},
{o: 93.48, f: 102.724, l: "C", a: 0},
{o: 102.724, f: 113.328, l: "B", a: 1},
{o: 113.328, f: 120.26, l: "B", a: 0},
{o: 120.26, f: 131.744, l: "C", a: 1},
{o: 131.744, f: 142.024, l: "D", a: 0},
{o: 142.024, f: 151.256, l: "D", a: 1},
{o: 151.256, f: 156.216, l: "A", a: 0},
{o: 156.216, f: 163.832, l: "E", a: 1},
{o: 163.832, f: 174.72, l: "B", a: 0},
{o: 174.72, f: 183.592, l: "F", a: 1},
{o: 183.592, f: 187.916, l: "G", a: 0},
{o: 187.916, f: 201.416, l: "H", a: 1},
{o: 201.416, f: 212.596, l: "I", a: 0},
{o: 212.596, f: 216.272, l: "J", a: 1}],
[{o: 0.28, f: 2.44, l: "8", a: 0},
{o: 2.44, f: 12.2, l: "1", a: 1},
{o: 12.2, f: 18.627, l: "3", a: 0},
{o: 18.627, f: 35.387, l: "2", a: 1},
{o: 35.387, f: 44.44, l: "1", a: 0},
{o: 44.44, f: 50.12, l: "2", a: 1},
{o: 50.12, f: 54.813, l: "1", a: 0},
{o: 54.813, f: 59.173, l: "2", a: 1},
{o: 59.173, f: 65.533, l: "1", a: 0},
{o: 65.533, f: 83.267, l: "2", a: 1},
{o: 83.267, f: 90.893, l: "1", a: 0},
{o: 90.893, f: 93.96, l: "4", a: 1},
{o: 93.96, f: 99.907, l: "2", a: 0},
{o: 99.907, f: 108.84, l: "1", a: 1},
{o: 108.84, f: 113.827, l: "2", a: 0},
{o: 113.827, f: 119.107, l: "1", a: 1},
{o: 119.107, f: 122.733, l: "2", a: 0},
{o: 122.733, f: 140.533, l: "1", a: 1},
{o: 140.533, f: 146.133, l: "3", a: 0},
{o: 146.133, f: 150.76, l: "1", a: 1},
{o: 150.76, f: 154.4, l: "3", a: 0},
{o: 154.4, f: 157.413, l: "7", a: 1},
{o: 157.413, f: 165, l: "2", a: 0},
{o: 165, f: 171.573, l: "1", a: 1},
{o: 171.573, f: 176.2, l: "2", a: 0},
{o: 176.2, f: 182.44, l: "1", a: 1},
{o: 182.44, f: 186.067, l: "2", a: 0},
{o: 186.067, f: 191.36, l: "4", a: 1},
{o: 191.36, f: 200.6, l: "2", a: 0},
{o: 200.6, f: 205.187, l: "1", a: 1},
{o: 205.187, f: 210.813, l: "2", a: 0},
{o: 210.813, f: 215.773, l: "5", a: 1},
{o: 215.773, f: 218.813, l: "6", a: 0}],
[{o: 0, f: 29.8, l: "a", a: 0},
{o: 29.8, f: 62.58, l: "b", a: 1},
{o: 62.58, f: 92.38, l: "a", a: 0},
{o: 92.38, f: 120.69, l: "c", a: 1},
{o: 120.69, f: 157.94, l: "b", a: 0},
{o: 157.94, f: 187.74, l: "a", a: 1},
{o: 187.74, f: 218.285, l: "c", a: 0}],
[{o: 0, f: 2.972, l: "n1", a: 0},
{o: 2.972, f: 35.248, l: "A", a: 1},
{o: 35.248, f: 67.408, l: "A", a: 0},
{o: 67.408, f: 99.451, l: "A", a: 1},
{o: 99.451, f: 131.111, l: "A", a: 0},
{o: 131.111, f: 162.865, l: "A", a: 1},
{o: 162.865, f: 194.502, l: "A", a: 0},
{o: 194.502, f: 205.067, l: "B", a: 1},
{o: 205.067, f: 214.309, l: "B", a: 0},
{o: 214.309, f: 218.871, l: "n3", a: 1}],
[{o: 0, f: 0.052, l: "G", a: 0},
{o: 0.052, f: 19.42, l: "F", a: 1},
{o: 19.42, f: 31.88, l: "B", a: 0},
{o: 31.88, f: 48.272, l: "F", a: 1},
{o: 48.272, f: 68.356, l: "B", a: 0},
{o: 68.356, f: 80.416, l: "E", a: 1},
{o: 80.416, f: 99.412, l: "B", a: 0},
{o: 99.412, f: 112.324, l: "E", a: 1},
{o: 112.324, f: 127.832, l: "B", a: 0},
{o: 127.832, f: 147.272, l: "F", a: 1},
{o: 147.272, f: 162.184, l: "B", a: 0},
{o: 162.184, f: 178.984, l: "F", a: 1},
{o: 178.984, f: 196.448, l: "B", a: 0},
{o: 196.448, f: 216.272, l: "C", a: 1},
{o: 216.272, f: 218.907, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000449.ogg";