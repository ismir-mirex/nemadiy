var data = [
[{o: 0.189, f: 21.058, l: "A", a: 0},
{o: 21.058, f: 54.992, l: "B", a: 1},
{o: 54.992, f: 73.249, l: "C", a: 0},
{o: 73.249, f: 89.3, l: "D", a: 1},
{o: 89.3, f: 107.359, l: "C", a: 0},
{o: 107.359, f: 125.705, l: "B", a: 1},
{o: 125.705, f: 157.875, l: "D", a: 0},
{o: 157.875, f: 175.493, l: "C", a: 1},
{o: 175.493, f: 196.989, l: "B", a: 0}],
[{o: 0.136, f: 14.132, l: "B", a: 0},
{o: 14.132, f: 20.708, l: "D", a: 1},
{o: 20.708, f: 34.344, l: "D", a: 0},
{o: 34.344, f: 55.316, l: "D", a: 1},
{o: 55.316, f: 65.268, l: "D", a: 0},
{o: 65.268, f: 73.22, l: "D", a: 1},
{o: 73.22, f: 89.4, l: "D", a: 0},
{o: 89.4, f: 105.42, l: "D", a: 1},
{o: 105.42, f: 114.288, l: "D", a: 0},
{o: 114.288, f: 124.864, l: "D", a: 1},
{o: 124.864, f: 136.756, l: "B", a: 0},
{o: 136.756, f: 143.076, l: "D", a: 1},
{o: 143.076, f: 151.904, l: "B", a: 0},
{o: 151.904, f: 167.484, l: "D", a: 1},
{o: 167.484, f: 182.576, l: "D", a: 0},
{o: 182.576, f: 194.248, l: "D", a: 1}],
[{o: 0.136, f: 14.132, l: "F", a: 0},
{o: 14.132, f: 20.708, l: "G", a: 1},
{o: 20.708, f: 34.344, l: "A", a: 0},
{o: 34.344, f: 55.316, l: "A", a: 1},
{o: 55.316, f: 65.268, l: "C", a: 0},
{o: 65.268, f: 73.22, l: "D", a: 1},
{o: 73.22, f: 89.4, l: "E", a: 0},
{o: 89.4, f: 105.42, l: "C", a: 1},
{o: 105.42, f: 114.288, l: "C", a: 0},
{o: 114.288, f: 124.864, l: "C", a: 1},
{o: 124.864, f: 136.756, l: "B", a: 0},
{o: 136.756, f: 143.076, l: "H", a: 1},
{o: 143.076, f: 151.904, l: "B", a: 0},
{o: 151.904, f: 167.484, l: "C", a: 1},
{o: 167.484, f: 182.576, l: "E", a: 0},
{o: 182.576, f: 194.248, l: "D", a: 1}],
[{o: 0.76, f: 3.4, l: "8", a: 0},
{o: 3.4, f: 15.6, l: "5", a: 1},
{o: 15.6, f: 40, l: "1", a: 0},
{o: 40, f: 53.907, l: "2", a: 1},
{o: 53.907, f: 71.52, l: "1", a: 0},
{o: 71.52, f: 88.573, l: "4", a: 1},
{o: 88.573, f: 102.867, l: "1", a: 0},
{o: 102.867, f: 122.293, l: "2", a: 1},
{o: 122.293, f: 134.773, l: "3", a: 0},
{o: 134.773, f: 141.493, l: "6", a: 1},
{o: 141.493, f: 153.307, l: "3", a: 0},
{o: 153.307, f: 171.467, l: "1", a: 1},
{o: 171.467, f: 192.507, l: "2", a: 0},
{o: 192.507, f: 196.813, l: "7", a: 1}],
[{o: 0, f: 37.995, l: "a", a: 0},
{o: 37.995, f: 72.265, l: "b", a: 1},
{o: 72.265, f: 106.535, l: "b", a: 0},
{o: 106.535, f: 129.63, l: "c", a: 1},
{o: 129.63, f: 140.805, l: "d", a: 0},
{o: 140.805, f: 175.82, l: "b", a: 1},
{o: 175.82, f: 196.68, l: "c", a: 0}],
[{o: 0, f: 21.328, l: "n1", a: 0},
{o: 21.328, f: 33.82, l: "A", a: 1},
{o: 33.82, f: 39.474, l: "n2", a: 0},
{o: 39.474, f: 52.779, l: "A", a: 1},
{o: 52.779, f: 73.538, l: "B", a: 0},
{o: 73.538, f: 86.901, l: "A", a: 1},
{o: 86.901, f: 107.764, l: "B", a: 0},
{o: 107.764, f: 120.314, l: "A", a: 1},
{o: 120.314, f: 123.751, l: "n7", a: 0},
{o: 123.751, f: 136.22, l: "A", a: 1},
{o: 136.22, f: 141.839, l: "n8", a: 0},
{o: 141.839, f: 155.04, l: "A", a: 1},
{o: 155.04, f: 175.752, l: "B", a: 0},
{o: 175.752, f: 188.302, l: "A", a: 1},
{o: 188.302, f: 196.952, l: "n11", a: 0}],
[{o: 0, f: 0.136, l: "D", a: 0},
{o: 0.136, f: 0.136, l: "B", a: 1},
{o: 0.136, f: 18.428, l: "A", a: 0},
{o: 18.428, f: 54.74, l: "C", a: 1},
{o: 54.74, f: 71.78, l: "B", a: 0},
{o: 71.78, f: 88.844, l: "C", a: 1},
{o: 88.844, f: 105.712, l: "B", a: 0},
{o: 105.712, f: 123.428, l: "C", a: 1},
{o: 123.428, f: 139.02, l: "A", a: 0},
{o: 139.02, f: 157.26, l: "C", a: 1},
{o: 157.26, f: 173.724, l: "B", a: 0},
{o: 173.724, f: 190.528, l: "C", a: 1},
{o: 190.528, f: 194.244, l: "A", a: 0},
{o: 194.244, f: 196.933, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000399.ogg";
