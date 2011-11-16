var data = [
[{o: 0.546, f: 28.774, l: "A", a: 0},
{o: 28.774, f: 51.741, l: "B", a: 1},
{o: 51.741, f: 185.457, l: "C", a: 0},
{o: 185.457, f: 319.307, l: "D", a: 1},
{o: 319.307, f: 452.121, l: "E", a: 0},
{o: 452.121, f: 474.973, l: "B", a: 1},
{o: 474.973, f: 509.382, l: "A", a: 0}],
[{o: 0, f: 509.363, l: "A", a: 0}],
[{o: 0, f: 509.363, l: "A", a: 0}],
[{o: 0.493, f: 8.24, l: "5", a: 0},
{o: 8.24, f: 12.933, l: "3", a: 1},
{o: 12.933, f: 18.227, l: "4", a: 0},
{o: 18.227, f: 23.32, l: "3", a: 1},
{o: 23.32, f: 28.213, l: "4", a: 0},
{o: 28.213, f: 90.187, l: "1", a: 1},
{o: 90.187, f: 94.053, l: "3", a: 0},
{o: 94.053, f: 99.933, l: "1", a: 1},
{o: 99.933, f: 104.387, l: "3", a: 0},
{o: 104.387, f: 130.587, l: "1", a: 1},
{o: 130.587, f: 137.173, l: "3", a: 0},
{o: 137.173, f: 161.547, l: "1", a: 1},
{o: 161.547, f: 171.707, l: "3", a: 0},
{o: 171.707, f: 178.667, l: "1", a: 1},
{o: 178.667, f: 184.667, l: "3", a: 0},
{o: 184.667, f: 272.747, l: "2", a: 1},
{o: 272.747, f: 276.96, l: "7", a: 0},
{o: 276.96, f: 295.653, l: "2", a: 1},
{o: 295.653, f: 299.547, l: "7", a: 0},
{o: 299.547, f: 322.227, l: "2", a: 1},
{o: 322.227, f: 338.973, l: "1", a: 0},
{o: 338.973, f: 342.56, l: "6", a: 1},
{o: 342.56, f: 348.547, l: "2", a: 0},
{o: 348.547, f: 379.707, l: "1", a: 1},
{o: 379.707, f: 386.293, l: "6", a: 0},
{o: 386.293, f: 403.027, l: "1", a: 1},
{o: 403.027, f: 406.933, l: "3", a: 0},
{o: 406.933, f: 410.16, l: "1", a: 1},
{o: 410.16, f: 413.6, l: "2", a: 0},
{o: 413.6, f: 474.427, l: "1", a: 1},
{o: 474.427, f: 482.853, l: "5", a: 0},
{o: 482.853, f: 488.24, l: "3", a: 1},
{o: 488.24, f: 493.467, l: "4", a: 0},
{o: 493.467, f: 498.853, l: "3", a: 1},
{o: 498.853, f: 505.24, l: "4", a: 0},
{o: 505.24, f: 508.893, l: "8", a: 1}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 28.31, l: "a", a: 1},
{o: 28.31, f: 475.31, l: "b", a: 0},
{o: 475.31, f: 476.055, l: "a", a: 1},
{o: 476.055, f: 509.58, l: "a", a: 0}],
[{o: 0, f: 8.475, l: "n1", a: 0},
{o: 8.475, f: 18.471, l: "A", a: 1},
{o: 18.471, f: 29.095, l: "A", a: 0},
{o: 29.095, f: 483.439, l: "n3", a: 1},
{o: 483.439, f: 493.691, l: "A", a: 0},
{o: 493.691, f: 502.991, l: "A", a: 1},
{o: 502.991, f: 509.399, l: "n5", a: 0}],
[{o: 0, f: 0.396, l: "G", a: 0},
{o: 0.396, f: 28.552, l: "D", a: 1},
{o: 28.552, f: 39.124, l: "F", a: 0},
{o: 39.124, f: 45.552, l: "D", a: 1},
{o: 45.552, f: 53.664, l: "F", a: 0},
{o: 53.664, f: 59.928, l: "D", a: 1},
{o: 59.928, f: 72.9, l: "F", a: 0},
{o: 72.9, f: 103.42, l: "D", a: 1},
{o: 103.42, f: 113.536, l: "F", a: 0},
{o: 113.536, f: 120.144, l: "D", a: 1},
{o: 120.144, f: 152.356, l: "F", a: 0},
{o: 152.356, f: 220.432, l: "D", a: 1},
{o: 220.432, f: 232.448, l: "F", a: 0},
{o: 232.448, f: 262.14, l: "D", a: 1},
{o: 262.14, f: 310.916, l: "F", a: 0},
{o: 310.916, f: 321.888, l: "D", a: 1},
{o: 321.888, f: 474.748, l: "F", a: 0},
{o: 474.748, f: 498.492, l: "D", a: 1},
{o: 498.492, f: 505.028, l: "E", a: 0},
{o: 505.028, f: 509.363, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000514.ogg";

var artist = "Dizzy Gillespie Stan Getz Sonny Stitt";

var track = "Wee Allen s Alley ";