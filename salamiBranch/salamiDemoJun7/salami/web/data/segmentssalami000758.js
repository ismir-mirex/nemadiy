var data = [
[{o: 0.138, f: 1.334, l: "A", a: 0},
{o: 1.334, f: 17.492, l: "B", a: 1},
{o: 17.492, f: 33.437, l: "C", a: 0},
{o: 33.437, f: 49.252, l: "B", a: 1},
{o: 49.252, f: 65.3, l: "C", a: 0},
{o: 65.3, f: 81.196, l: "D", a: 1},
{o: 81.196, f: 105.158, l: "D'", a: 0},
{o: 105.158, f: 129.308, l: "D'", a: 1},
{o: 129.308, f: 145.412, l: "D", a: 0},
{o: 145.412, f: 161.54, l: "D", a: 1},
{o: 161.54, f: 193.829, l: "D''", a: 0},
{o: 193.829, f: 231.805, l: "D''", a: 1}],
[{o: 0.132, f: 17.888, l: "A", a: 0},
{o: 17.888, f: 27.228, l: "F", a: 1},
{o: 27.228, f: 42.184, l: "F", a: 0},
{o: 42.184, f: 49.536, l: "F", a: 1},
{o: 49.536, f: 63.124, l: "F", a: 0},
{o: 63.124, f: 73.12, l: "F", a: 1},
{o: 73.12, f: 89.676, l: "F", a: 0},
{o: 89.676, f: 96.452, l: "F", a: 1},
{o: 96.452, f: 110.516, l: "F", a: 0},
{o: 110.516, f: 124.972, l: "F", a: 1},
{o: 124.972, f: 136.956, l: "F", a: 0},
{o: 136.956, f: 144.34, l: "F", a: 1},
{o: 144.34, f: 163.164, l: "D", a: 0},
{o: 163.164, f: 173.128, l: "C", a: 1},
{o: 173.128, f: 193.244, l: "B", a: 0},
{o: 193.244, f: 199.416, l: "E", a: 1},
{o: 199.416, f: 206.9, l: "C", a: 0},
{o: 206.9, f: 216.08, l: "B", a: 1},
{o: 216.08, f: 228.064, l: "G", a: 0}],
[{o: 0.132, f: 17.888, l: "G", a: 0},
{o: 17.888, f: 27.228, l: "H", a: 1},
{o: 27.228, f: 42.184, l: "D", a: 0},
{o: 42.184, f: 49.536, l: "D", a: 1},
{o: 49.536, f: 63.124, l: "A", a: 0},
{o: 63.124, f: 73.12, l: "E", a: 1},
{o: 73.12, f: 89.676, l: "A", a: 0},
{o: 89.676, f: 96.452, l: "E", a: 1},
{o: 96.452, f: 110.516, l: "A", a: 0},
{o: 110.516, f: 124.972, l: "F", a: 1},
{o: 124.972, f: 136.956, l: "F", a: 0},
{o: 136.956, f: 144.34, l: "I", a: 1},
{o: 144.34, f: 163.164, l: "J", a: 0},
{o: 163.164, f: 173.128, l: "C", a: 1},
{o: 173.128, f: 193.244, l: "B", a: 0},
{o: 193.244, f: 199.416, l: "K", a: 1},
{o: 199.416, f: 206.9, l: "C", a: 0},
{o: 206.9, f: 216.08, l: "B", a: 1},
{o: 216.08, f: 228.064, l: "L", a: 0}],
[{o: 0.653, f: 2.4, l: "8", a: 0},
{o: 2.4, f: 16.4, l: "1", a: 1},
{o: 16.4, f: 24.347, l: "4", a: 0},
{o: 24.347, f: 48.8, l: "1", a: 1},
{o: 48.8, f: 57.267, l: "4", a: 0},
{o: 57.267, f: 72.227, l: "1", a: 1},
{o: 72.227, f: 79.667, l: "4", a: 0},
{o: 79.667, f: 89.173, l: "6", a: 1},
{o: 89.173, f: 96.667, l: "1", a: 0},
{o: 96.667, f: 103.627, l: "4", a: 1},
{o: 103.627, f: 113.68, l: "6", a: 0},
{o: 113.68, f: 120.72, l: "5", a: 1},
{o: 120.72, f: 129.253, l: "2", a: 0},
{o: 129.253, f: 135.84, l: "5", a: 1},
{o: 135.84, f: 145.36, l: "2", a: 0},
{o: 145.36, f: 153.44, l: "5", a: 1},
{o: 153.44, f: 176.16, l: "3", a: 0},
{o: 176.16, f: 193.267, l: "2", a: 1},
{o: 193.267, f: 208.947, l: "3", a: 0},
{o: 208.947, f: 217.493, l: "2", a: 1},
{o: 217.493, f: 225.067, l: "3", a: 0},
{o: 225.067, f: 231.667, l: "7", a: 1}],
[{o: 0, f: 33.525, l: "a", a: 0},
{o: 33.525, f: 65.56, l: "a", a: 1},
{o: 65.56, f: 84.185, l: "b", a: 0},
{o: 84.185, f: 108.77, l: "b", a: 1},
{o: 108.77, f: 137.08, l: "c", a: 0},
{o: 137.08, f: 169.86, l: "c", a: 1},
{o: 169.86, f: 211.58, l: "c", a: 0},
{o: 211.58, f: 230.95, l: "c", a: 1}],
[{o: 0, f: 1.707, l: "n1", a: 0},
{o: 1.707, f: 33.622, l: "A", a: 1},
{o: 33.622, f: 65.538, l: "A", a: 0},
{o: 65.538, f: 89.455, l: "C", a: 1},
{o: 89.455, f: 114.451, l: "C", a: 0},
{o: 114.451, f: 130.531, l: "B", a: 1},
{o: 130.531, f: 146.634, l: "B", a: 0},
{o: 146.634, f: 168.333, l: "B", a: 1},
{o: 168.333, f: 190.52, l: "D", a: 0},
{o: 190.52, f: 200.632, l: "n4", a: 1},
{o: 200.632, f: 222.807, l: "D", a: 0},
{o: 222.807, f: 231.503, l: "n5", a: 1}],
[{o: 0, f: 0.008, l: "G", a: 0},
{o: 0.008, f: 15.392, l: "E", a: 1},
{o: 15.392, f: 23.608, l: "D", a: 0},
{o: 23.608, f: 49.516, l: "E", a: 1},
{o: 49.516, f: 110.152, l: "D", a: 0},
{o: 110.152, f: 178.152, l: "C", a: 1},
{o: 178.152, f: 193.496, l: "F", a: 0},
{o: 193.496, f: 210.456, l: "C", a: 1},
{o: 210.456, f: 226.584, l: "F", a: 0},
{o: 226.584, f: 228.076, l: "A", a: 1},
{o: 228.076, f: 231.786, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000758.ogg";
