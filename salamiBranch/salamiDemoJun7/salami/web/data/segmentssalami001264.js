var data = [
[{o: 0.473, f: 11.865, l: "N", a: 0},
{o: 11.865, f: 47.498, l: "A", a: 1},
{o: 47.498, f: 93.653, l: "A", a: 0},
{o: 93.653, f: 104, l: "B", a: 1},
{o: 104, f: 141.057, l: "C", a: 0},
{o: 141.057, f: 150.922, l: "D", a: 1},
{o: 150.922, f: 196.239, l: "A'", a: 0}],
[{o: 0.296, f: 11.236, l: "B", a: 0},
{o: 11.236, f: 21.008, l: "A", a: 1},
{o: 21.008, f: 33.952, l: "A", a: 0},
{o: 33.952, f: 46.9, l: "B", a: 1},
{o: 46.9, f: 68.352, l: "A", a: 0},
{o: 68.352, f: 79.408, l: "B", a: 1},
{o: 79.408, f: 94.064, l: "B", a: 0},
{o: 94.064, f: 101.328, l: "C", a: 1},
{o: 101.328, f: 117.82, l: "B", a: 0},
{o: 117.82, f: 129.972, l: "B", a: 1},
{o: 129.972, f: 140.316, l: "B", a: 0},
{o: 140.316, f: 148.748, l: "D", a: 1},
{o: 148.748, f: 156.364, l: "E", a: 0},
{o: 156.364, f: 171.688, l: "F", a: 1},
{o: 171.688, f: 184.616, l: "G", a: 0},
{o: 184.616, f: 195.592, l: "H", a: 1}],
[{o: 0.296, f: 11.236, l: "C", a: 0},
{o: 11.236, f: 21.008, l: "A", a: 1},
{o: 21.008, f: 33.952, l: "A", a: 0},
{o: 33.952, f: 46.9, l: "B", a: 1},
{o: 46.9, f: 68.352, l: "A", a: 0},
{o: 68.352, f: 79.408, l: "D", a: 1},
{o: 79.408, f: 94.064, l: "E", a: 0},
{o: 94.064, f: 101.328, l: "F", a: 1},
{o: 101.328, f: 117.82, l: "B", a: 0},
{o: 117.82, f: 129.972, l: "B", a: 1},
{o: 129.972, f: 140.316, l: "B", a: 0},
{o: 140.316, f: 148.748, l: "G", a: 1},
{o: 148.748, f: 156.364, l: "H", a: 0},
{o: 156.364, f: 171.688, l: "I", a: 1},
{o: 171.688, f: 184.616, l: "J", a: 0},
{o: 184.616, f: 195.592, l: "K", a: 1}],
[{o: 0.707, f: 10.84, l: "6", a: 0},
{o: 10.84, f: 21.587, l: "2", a: 1},
{o: 21.587, f: 33.64, l: "1", a: 0},
{o: 33.64, f: 56.56, l: "2", a: 1},
{o: 56.56, f: 92.027, l: "1", a: 0},
{o: 92.027, f: 104.027, l: "5", a: 1},
{o: 104.027, f: 117.333, l: "3", a: 0},
{o: 117.333, f: 124.52, l: "7", a: 1},
{o: 124.52, f: 133.733, l: "3", a: 0},
{o: 133.733, f: 150.573, l: "4", a: 1},
{o: 150.573, f: 189.893, l: "1", a: 0},
{o: 189.893, f: 196.147, l: "8", a: 1}],
[{o: 0, f: 23.84, l: "a", a: 0},
{o: 23.84, f: 52.15, l: "b", a: 1},
{o: 52.15, f: 83.44, l: "b", a: 0},
{o: 83.44, f: 134.845, l: "c", a: 1},
{o: 134.845, f: 163.155, l: "b", a: 0},
{o: 163.155, f: 195.935, l: "b", a: 1}],
[{o: 0, f: 25.02, l: "n1", a: 0},
{o: 25.02, f: 34.667, l: "A", a: 1},
{o: 34.667, f: 46.289, l: "n2", a: 0},
{o: 46.289, f: 56.007, l: "A", a: 1},
{o: 56.007, f: 65.376, l: "A", a: 0},
{o: 65.376, f: 74.757, l: "A", a: 1},
{o: 74.757, f: 83.534, l: "n4", a: 0},
{o: 83.534, f: 92.973, l: "A", a: 1},
{o: 92.973, f: 115.67, l: "n5", a: 0},
{o: 115.67, f: 124.471, l: "C", a: 1},
{o: 124.471, f: 131.843, l: "n6", a: 0},
{o: 131.843, f: 140.69, l: "C", a: 1},
{o: 140.69, f: 151.429, l: "n7", a: 0},
{o: 151.429, f: 162.203, l: "B", a: 1},
{o: 162.203, f: 173.801, l: "B", a: 0},
{o: 173.801, f: 183.925, l: "A", a: 1},
{o: 183.925, f: 196.209, l: "n10", a: 0}],
[{o: 0, f: 0.296, l: "H", a: 0},
{o: 0.296, f: 18.932, l: "G", a: 1},
{o: 18.932, f: 37.048, l: "B", a: 0},
{o: 37.048, f: 51.944, l: "F", a: 1},
{o: 51.944, f: 69.356, l: "B", a: 0},
{o: 69.356, f: 80.388, l: "F", a: 1},
{o: 80.388, f: 96.588, l: "B", a: 0},
{o: 96.588, f: 124.132, l: "E", a: 1},
{o: 124.132, f: 137.064, l: "C", a: 0},
{o: 137.064, f: 174.832, l: "B", a: 1},
{o: 174.832, f: 195.252, l: "A", a: 0},
{o: 195.252, f: 195.592, l: "B", a: 1},
{o: 195.592, f: 196.233, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001264.ogg";
