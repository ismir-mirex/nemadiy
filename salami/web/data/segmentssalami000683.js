var data = [
[{o: 0.08, f: 15.585, l: "A", a: 0},
{o: 15.585, f: 46.578, l: "A", a: 1},
{o: 46.578, f: 75.639, l: "B", a: 0},
{o: 75.639, f: 83.301, l: "A", a: 1},
{o: 83.301, f: 98.797, l: "A", a: 0},
{o: 98.797, f: 143.367, l: "B", a: 1},
{o: 143.367, f: 158.761, l: "A", a: 0},
{o: 158.761, f: 174.297, l: "B", a: 1},
{o: 174.297, f: 203.322, l: "B", a: 0},
{o: 203.322, f: 223.907, l: "A", a: 1}],
[{o: 0.008, f: 12.592, l: "A", a: 0},
{o: 12.592, f: 24.684, l: "A", a: 1},
{o: 24.684, f: 31.46, l: "A", a: 0},
{o: 31.46, f: 45.496, l: "A", a: 1},
{o: 45.496, f: 56.14, l: "A", a: 0},
{o: 56.14, f: 68.72, l: "A", a: 1},
{o: 68.72, f: 83.236, l: "A", a: 0},
{o: 83.236, f: 91.464, l: "A", a: 1},
{o: 91.464, f: 97.752, l: "B", a: 0},
{o: 97.752, f: 112.752, l: "A", a: 1},
{o: 112.752, f: 130.176, l: "A", a: 0},
{o: 130.176, f: 144.208, l: "A", a: 1},
{o: 144.208, f: 158.732, l: "C", a: 0},
{o: 158.732, f: 172.284, l: "D", a: 1},
{o: 172.284, f: 188.24, l: "E", a: 0},
{o: 188.24, f: 205.172, l: "A", a: 1},
{o: 205.172, f: 220.672, l: "F", a: 0}],
[{o: 0.008, f: 12.592, l: "D", a: 0},
{o: 12.592, f: 24.684, l: "C", a: 1},
{o: 24.684, f: 31.46, l: "E", a: 0},
{o: 31.46, f: 45.496, l: "C", a: 1},
{o: 45.496, f: 56.14, l: "B", a: 0},
{o: 56.14, f: 68.72, l: "B", a: 1},
{o: 68.72, f: 83.236, l: "A", a: 0},
{o: 83.236, f: 91.464, l: "C", a: 1},
{o: 91.464, f: 97.752, l: "F", a: 0},
{o: 97.752, f: 112.752, l: "B", a: 1},
{o: 112.752, f: 130.176, l: "B", a: 0},
{o: 130.176, f: 144.208, l: "A", a: 1},
{o: 144.208, f: 158.732, l: "G", a: 0},
{o: 158.732, f: 172.284, l: "H", a: 1},
{o: 172.284, f: 188.24, l: "I", a: 0},
{o: 188.24, f: 205.172, l: "A", a: 1},
{o: 205.172, f: 220.672, l: "J", a: 0}],
[{o: 0.493, f: 2.2, l: "8", a: 0},
{o: 2.2, f: 15.24, l: "1", a: 1},
{o: 15.24, f: 24.933, l: "4", a: 0},
{o: 24.933, f: 30.733, l: "2", a: 1},
{o: 30.733, f: 41.373, l: "4", a: 0},
{o: 41.373, f: 62.173, l: "2", a: 1},
{o: 62.173, f: 77.187, l: "3", a: 0},
{o: 77.187, f: 83.48, l: "1", a: 1},
{o: 83.48, f: 91.227, l: "4", a: 0},
{o: 91.227, f: 109.613, l: "2", a: 1},
{o: 109.613, f: 129.933, l: "5", a: 0},
{o: 129.933, f: 144.453, l: "3", a: 1},
{o: 144.453, f: 158.253, l: "1", a: 0},
{o: 158.253, f: 173.96, l: "6", a: 1},
{o: 173.96, f: 189.933, l: "5", a: 0},
{o: 189.933, f: 204.947, l: "3", a: 1},
{o: 204.947, f: 217.52, l: "1", a: 0},
{o: 217.52, f: 222.253, l: "7", a: 1}],
[{o: 0, f: 35.015, l: "a", a: 0},
{o: 35.015, f: 75.99, l: "b", a: 1},
{o: 75.99, f: 96.85, l: "a", a: 0},
{o: 96.85, f: 137.825, l: "b", a: 1},
{o: 137.825, f: 157.94, l: "a", a: 0},
{o: 157.94, f: 198.915, l: "b", a: 1},
{o: 198.915, f: 223.5, l: "a", a: 0}],
[{o: 0, f: 42.133, l: "n1", a: 0},
{o: 42.133, f: 88.596, l: "A", a: 1},
{o: 88.596, f: 109.877, l: "n2", a: 0},
{o: 109.877, f: 156.328, l: "A", a: 1},
{o: 156.328, f: 169.889, l: "n3", a: 0},
{o: 169.889, f: 216.34, l: "A", a: 1},
{o: 216.34, f: 223.701, l: "n4", a: 0}],
[{o: 0, f: 0.008, l: "F", a: 0},
{o: 0.008, f: 17.916, l: "B", a: 1},
{o: 17.916, f: 45.256, l: "E", a: 0},
{o: 45.256, f: 61.948, l: "C", a: 1},
{o: 61.948, f: 75.496, l: "D", a: 0},
{o: 75.496, f: 85.896, l: "B", a: 1},
{o: 85.896, f: 97.508, l: "E", a: 0},
{o: 97.508, f: 129.692, l: "C", a: 1},
{o: 129.692, f: 142.996, l: "D", a: 0},
{o: 142.996, f: 157.272, l: "B", a: 1},
{o: 157.272, f: 189.692, l: "C", a: 0},
{o: 189.692, f: 202.996, l: "D", a: 1},
{o: 202.996, f: 217.512, l: "B", a: 0},
{o: 217.512, f: 219.948, l: "E", a: 1},
{o: 219.948, f: 223.853, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000683.ogg";