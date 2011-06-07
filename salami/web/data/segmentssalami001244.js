var data = [
[{o: 0.543, f: 29.43, l: "A", a: 0},
{o: 29.43, f: 71.862, l: "B", a: 1},
{o: 71.862, f: 105.024, l: "C", a: 0},
{o: 105.024, f: 122, l: "D", a: 1},
{o: 122, f: 176.118, l: "E", a: 0}],
[{o: 0.032, f: 6.696, l: "A", a: 0},
{o: 6.696, f: 18.38, l: "F", a: 1},
{o: 18.38, f: 37.9, l: "F", a: 0},
{o: 37.9, f: 51.844, l: "F", a: 1},
{o: 51.844, f: 66.448, l: "F", a: 0},
{o: 66.448, f: 79.252, l: "F", a: 1},
{o: 79.252, f: 89.136, l: "F", a: 0},
{o: 89.136, f: 102.564, l: "F", a: 1},
{o: 102.564, f: 110.032, l: "F", a: 0},
{o: 110.032, f: 121.968, l: "F", a: 1},
{o: 121.968, f: 132.104, l: "F", a: 0},
{o: 132.104, f: 150.424, l: "F", a: 1},
{o: 150.424, f: 166.26, l: "F", a: 0},
{o: 166.26, f: 176.04, l: "F", a: 1}],
[{o: 0.032, f: 6.696, l: "E", a: 0},
{o: 6.696, f: 18.38, l: "F", a: 1},
{o: 18.38, f: 37.9, l: "D", a: 0},
{o: 37.9, f: 51.844, l: "D", a: 1},
{o: 51.844, f: 66.448, l: "A", a: 0},
{o: 66.448, f: 79.252, l: "B", a: 1},
{o: 79.252, f: 89.136, l: "B", a: 0},
{o: 89.136, f: 102.564, l: "C", a: 1},
{o: 102.564, f: 110.032, l: "D", a: 0},
{o: 110.032, f: 121.968, l: "D", a: 1},
{o: 121.968, f: 132.104, l: "G", a: 0},
{o: 132.104, f: 150.424, l: "A", a: 1},
{o: 150.424, f: 166.26, l: "C", a: 0},
{o: 166.26, f: 176.04, l: "F", a: 1}],
[{o: 0.813, f: 3.013, l: "5", a: 0},
{o: 3.013, f: 8.64, l: "1", a: 1},
{o: 8.64, f: 17.453, l: "7", a: 0},
{o: 17.453, f: 29.827, l: "2", a: 1},
{o: 29.827, f: 39.92, l: "4", a: 0},
{o: 39.92, f: 47.36, l: "3", a: 1},
{o: 47.36, f: 56.547, l: "2", a: 0},
{o: 56.547, f: 63.2, l: "4", a: 1},
{o: 63.2, f: 69.147, l: "2", a: 0},
{o: 69.147, f: 84.987, l: "1", a: 1},
{o: 84.987, f: 98.133, l: "2", a: 0},
{o: 98.133, f: 105.947, l: "5", a: 1},
{o: 105.947, f: 122.293, l: "6", a: 0},
{o: 122.293, f: 131.587, l: "3", a: 1},
{o: 131.587, f: 163.013, l: "1", a: 0},
{o: 163.013, f: 170.64, l: "3", a: 1},
{o: 170.64, f: 175.773, l: "8", a: 0}],
[{o: 0, f: 32.035, l: "a", a: 0},
{o: 32.035, f: 45.445, l: "b", a: 1},
{o: 45.445, f: 56.62, l: "b", a: 0},
{o: 56.62, f: 149, l: "c", a: 1},
{o: 149, f: 162.41, l: "b", a: 0},
{o: 162.41, f: 175.82, l: "d", a: 1}],
[{o: 0, f: 175.926, l: "A", a: 0},
{o: 0.325, f: 176.147, l: "A", a: 1}],
[{o: 0, f: 0.032, l: "H", a: 0},
{o: 0.032, f: 27.356, l: "D", a: 1},
{o: 27.356, f: 121.356, l: "E", a: 0},
{o: 121.356, f: 133.988, l: "F", a: 1},
{o: 133.988, f: 144.24, l: "A", a: 0},
{o: 144.24, f: 159.548, l: "E", a: 1},
{o: 159.548, f: 176.04, l: "G", a: 0},
{o: 176.04, f: 176.119, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001244.ogg";