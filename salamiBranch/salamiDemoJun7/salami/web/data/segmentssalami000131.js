var data = [
[{o: 0.245, f: 37.245, l: "N", a: 0},
{o: 37.245, f: 60.363, l: "A", a: 1},
{o: 60.363, f: 83.302, l: "A", a: 0},
{o: 83.302, f: 96.767, l: "C", a: 1},
{o: 96.767, f: 119.849, l: "A", a: 0},
{o: 119.849, f: 140.142, l: "A", a: 1},
{o: 140.142, f: 163.51, l: "B", a: 0},
{o: 163.51, f: 186.358, l: "A", a: 1},
{o: 186.358, f: 209.118, l: "A", a: 0},
{o: 209.118, f: 231.792, l: "A", a: 1},
{o: 231.792, f: 254.494, l: "A", a: 0},
{o: 254.494, f: 277.287, l: "B'", a: 1},
{o: 277.287, f: 300.01, l: "A", a: 0},
{o: 300.01, f: 322.779, l: "A", a: 1},
{o: 322.779, f: 349.922, l: "A", a: 0}],
[{o: 0, f: 349.911, l: "A", a: 0}],
[{o: 0, f: 349.911, l: "A", a: 0}],
[{o: 0.547, f: 35.36, l: "4", a: 0},
{o: 35.36, f: 82.627, l: "2", a: 1},
{o: 82.627, f: 94.893, l: "3", a: 0},
{o: 94.893, f: 139.293, l: "1", a: 1},
{o: 139.293, f: 150.947, l: "7", a: 0},
{o: 150.947, f: 162.507, l: "3", a: 1},
{o: 162.507, f: 178.2, l: "2", a: 0},
{o: 178.2, f: 229.107, l: "1", a: 1},
{o: 229.107, f: 238.84, l: "2", a: 0},
{o: 238.84, f: 252.213, l: "1", a: 1},
{o: 252.213, f: 267.933, l: "5", a: 0},
{o: 267.933, f: 300.013, l: "1", a: 1},
{o: 300.013, f: 320.92, l: "2", a: 0},
{o: 320.92, f: 329.12, l: "1", a: 1},
{o: 329.12, f: 344.84, l: "6", a: 0},
{o: 344.84, f: 349.8, l: "8", a: 1}],
[{o: 0, f: 36.505, l: "a", a: 0},
{o: 36.505, f: 90.89, l: "b", a: 1},
{o: 90.89, f: 277.14, l: "c", a: 0},
{o: 277.14, f: 330.035, l: "b", a: 1},
{o: 330.035, f: 349.405, l: "d", a: 0}],
[{o: 0, f: 37.082, l: "n1", a: 0},
{o: 37.082, f: 50.202, l: "B", a: 1},
{o: 50.202, f: 54.938, l: "n2", a: 0},
{o: 54.938, f: 82.233, l: "A", a: 1},
{o: 82.233, f: 277.235, l: "n3", a: 0},
{o: 277.235, f: 289.994, l: "B", a: 1},
{o: 289.994, f: 294.255, l: "n4", a: 0},
{o: 294.255, f: 321.91, l: "A", a: 1},
{o: 321.91, f: 349.646, l: "n5", a: 0}],
[{o: 0, f: 0.124, l: "G", a: 0},
{o: 0.124, f: 9.92, l: "C", a: 1},
{o: 9.92, f: 104.116, l: "A", a: 0},
{o: 104.116, f: 141.736, l: "C", a: 1},
{o: 141.736, f: 162.536, l: "F", a: 0},
{o: 162.536, f: 266.64, l: "B", a: 1},
{o: 266.64, f: 331.364, l: "D", a: 0},
{o: 331.364, f: 346.22, l: "A", a: 1},
{o: 346.22, f: 349.911, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000131.ogg";
