var data = [
[{o: 0.209, f: 7.59, l: "X", a: 0},
{o: 7.59, f: 26.935, l: "A", a: 1},
{o: 26.935, f: 39.828, l: "A", a: 0},
{o: 39.828, f: 52.408, l: "B", a: 1},
{o: 52.408, f: 71.791, l: "C", a: 0},
{o: 71.791, f: 84.47, l: "B", a: 1},
{o: 84.47, f: 97.271, l: "A", a: 0},
{o: 97.271, f: 109.878, l: "B", a: 1},
{o: 109.878, f: 129.007, l: "C", a: 0},
{o: 129.007, f: 141.63, l: "B", a: 1},
{o: 141.63, f: 163.346, l: "B", a: 0}],
[{o: 0.16, f: 7.9, l: "B", a: 0},
{o: 7.9, f: 27.66, l: "A", a: 1},
{o: 27.66, f: 38.08, l: "A", a: 0},
{o: 38.08, f: 52.424, l: "A", a: 1},
{o: 52.424, f: 71.712, l: "A", a: 0},
{o: 71.712, f: 85.996, l: "A", a: 1},
{o: 85.996, f: 101.932, l: "A", a: 0},
{o: 101.932, f: 118.924, l: "A", a: 1},
{o: 118.924, f: 132.464, l: "C", a: 0},
{o: 132.464, f: 140.76, l: "D", a: 1},
{o: 140.76, f: 150.996, l: "E", a: 0},
{o: 150.996, f: 158.844, l: "F", a: 1}],
[{o: 0.16, f: 7.9, l: "C", a: 0},
{o: 7.9, f: 27.66, l: "A", a: 1},
{o: 27.66, f: 38.08, l: "B", a: 0},
{o: 38.08, f: 52.424, l: "B", a: 1},
{o: 52.424, f: 71.712, l: "D", a: 0},
{o: 71.712, f: 85.996, l: "A", a: 1},
{o: 85.996, f: 101.932, l: "A", a: 0},
{o: 101.932, f: 118.924, l: "A", a: 1},
{o: 118.924, f: 132.464, l: "E", a: 0},
{o: 132.464, f: 140.76, l: "F", a: 1},
{o: 140.76, f: 150.996, l: "G", a: 0},
{o: 150.996, f: 158.844, l: "H", a: 1}],
[{o: 1.027, f: 8.773, l: "8", a: 0},
{o: 8.773, f: 26.493, l: "2", a: 1},
{o: 26.493, f: 38.493, l: "3", a: 0},
{o: 38.493, f: 52.867, l: "2", a: 1},
{o: 52.867, f: 64.893, l: "3", a: 0},
{o: 64.893, f: 76.867, l: "4", a: 1},
{o: 76.867, f: 110.973, l: "1", a: 0},
{o: 110.973, f: 122.893, l: "6", a: 1},
{o: 122.893, f: 130.067, l: "4", a: 0},
{o: 130.067, f: 141.947, l: "1", a: 1},
{o: 141.947, f: 155.453, l: "5", a: 0},
{o: 155.453, f: 163.107, l: "7", a: 1}],
[{o: 0, f: 44.7, l: "a", a: 0},
{o: 44.7, f: 77.48, l: "b", a: 1},
{o: 77.48, f: 83.44, l: "c", a: 0},
{o: 83.44, f: 99.085, l: "d", a: 1},
{o: 99.085, f: 131.865, l: "b", a: 0},
{o: 131.865, f: 137.825, l: "c", a: 1},
{o: 137.825, f: 153.47, l: "d", a: 0},
{o: 153.47, f: 162.41, l: "e", a: 1}],
[{o: 0, f: 36.908, l: "n1", a: 0},
{o: 36.908, f: 88.027, l: "A", a: 1},
{o: 88.027, f: 94.412, l: "n2", a: 0},
{o: 94.412, f: 145.136, l: "A", a: 1},
{o: 145.136, f: 163.143, l: "n3", a: 0}],
[{o: 0, f: 0.16, l: "F", a: 0},
{o: 0.16, f: 48.04, l: "B", a: 1},
{o: 48.04, f: 78.864, l: "E", a: 0},
{o: 78.864, f: 105.476, l: "A", a: 1},
{o: 105.476, f: 136.804, l: "E", a: 0},
{o: 136.804, f: 158.836, l: "D", a: 1},
{o: 158.836, f: 163.253, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001364.ogg";