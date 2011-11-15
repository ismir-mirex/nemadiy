var data = [
[{o: 0, f: 4.802, l: "Z", a: 0},
{o: 4.802, f: 60.086, l: "A", a: 1},
{o: 60.086, f: 82.946, l: "A", a: 0},
{o: 82.946, f: 101.011, l: "A", a: 1},
{o: 101.011, f: 110.049, l: "A", a: 0},
{o: 110.049, f: 127.929, l: "B", a: 1},
{o: 127.929, f: 154.322, l: "A", a: 0},
{o: 154.322, f: 171.848, l: "J", a: 1},
{o: 171.848, f: 197.393, l: "D", a: 0},
{o: 197.393, f: 230.106, l: "E", a: 1},
{o: 230.106, f: 234.503, l: "F", a: 0},
{o: 234.503, f: 252.066, l: "G", a: 1},
{o: 252.066, f: 307.501, l: "A", a: 0},
{o: 307.501, f: 414.821, l: "A", a: 1},
{o: 414.821, f: 470.262, l: "I", a: 0}],
[{o: 0.116, f: 23.148, l: "D", a: 0},
{o: 23.148, f: 40.996, l: "B", a: 1},
{o: 40.996, f: 59.508, l: "B", a: 0},
{o: 59.508, f: 78.376, l: "B", a: 1},
{o: 78.376, f: 96.468, l: "B", a: 0},
{o: 96.468, f: 110.052, l: "B", a: 1},
{o: 110.052, f: 122.264, l: "A", a: 0},
{o: 122.264, f: 138.68, l: "A", a: 1},
{o: 138.68, f: 157.644, l: "A", a: 0},
{o: 157.644, f: 171.268, l: "A", a: 1},
{o: 171.268, f: 188.96, l: "E", a: 0},
{o: 188.96, f: 201.192, l: "A", a: 1},
{o: 201.192, f: 215.652, l: "A", a: 0},
{o: 215.652, f: 229.524, l: "A", a: 1},
{o: 229.524, f: 253.26, l: "A", a: 0},
{o: 253.26, f: 272.976, l: "B", a: 1},
{o: 272.976, f: 288.588, l: "B", a: 0},
{o: 288.588, f: 304.136, l: "F", a: 1},
{o: 304.136, f: 316.268, l: "G", a: 0},
{o: 316.268, f: 350.156, l: "A", a: 1},
{o: 350.156, f: 368.796, l: "H", a: 0},
{o: 368.796, f: 397.448, l: "I", a: 1},
{o: 397.448, f: 419.98, l: "C", a: 0},
{o: 419.98, f: 448.412, l: "J", a: 1},
{o: 448.412, f: 468.168, l: "C", a: 0}],
[{o: 0.116, f: 23.148, l: "E", a: 0},
{o: 23.148, f: 40.996, l: "B", a: 1},
{o: 40.996, f: 59.508, l: "D", a: 0},
{o: 59.508, f: 78.376, l: "D", a: 1},
{o: 78.376, f: 96.468, l: "D", a: 0},
{o: 96.468, f: 110.052, l: "D", a: 1},
{o: 110.052, f: 122.264, l: "F", a: 0},
{o: 122.264, f: 138.68, l: "A", a: 1},
{o: 138.68, f: 157.644, l: "A", a: 0},
{o: 157.644, f: 171.268, l: "G", a: 1},
{o: 171.268, f: 188.96, l: "H", a: 0},
{o: 188.96, f: 201.192, l: "I", a: 1},
{o: 201.192, f: 215.652, l: "C", a: 0},
{o: 215.652, f: 229.524, l: "C", a: 1},
{o: 229.524, f: 253.26, l: "A", a: 0},
{o: 253.26, f: 272.976, l: "B", a: 1},
{o: 272.976, f: 288.588, l: "B", a: 0},
{o: 288.588, f: 304.136, l: "J", a: 1},
{o: 304.136, f: 316.268, l: "K", a: 0},
{o: 316.268, f: 350.156, l: "A", a: 1},
{o: 350.156, f: 368.796, l: "L", a: 0},
{o: 368.796, f: 397.448, l: "M", a: 1},
{o: 397.448, f: 419.98, l: "N", a: 0},
{o: 419.98, f: 448.412, l: "O", a: 1},
{o: 448.412, f: 468.168, l: "P", a: 0}],
[{o: 0.493, f: 4.773, l: "8", a: 0},
{o: 4.773, f: 108.68, l: "1", a: 1},
{o: 108.68, f: 141.8, l: "2", a: 0},
{o: 141.8, f: 154.587, l: "1", a: 1},
{o: 154.587, f: 169.307, l: "3", a: 0},
{o: 169.307, f: 189.56, l: "5", a: 1},
{o: 189.56, f: 197.6, l: "2", a: 0},
{o: 197.6, f: 203.6, l: "4", a: 1},
{o: 203.6, f: 221.56, l: "2", a: 0},
{o: 221.56, f: 226.987, l: "4", a: 1},
{o: 226.987, f: 234.187, l: "3", a: 0},
{o: 234.187, f: 287.827, l: "1", a: 1},
{o: 287.827, f: 311.947, l: "2", a: 0},
{o: 311.947, f: 345.44, l: "1", a: 1},
{o: 345.44, f: 394.947, l: "3", a: 0},
{o: 394.947, f: 404.96, l: "4", a: 1},
{o: 404.96, f: 422.453, l: "2", a: 0},
{o: 422.453, f: 438.027, l: "6", a: 1},
{o: 438.027, f: 444.96, l: "3", a: 0},
{o: 444.96, f: 462.907, l: "2", a: 1},
{o: 462.907, f: 470.067, l: "7", a: 0}],
[{o: 0, f: 322.585, l: "a", a: 0},
{o: 322.585, f: 367.285, l: "b", a: 1},
{o: 367.285, f: 415.71, l: "b", a: 0},
{o: 415.71, f: 470.095, l: "b", a: 1}],
[{o: 0, f: 5.642, l: "n1", a: 0},
{o: 5.642, f: 23.812, l: "B", a: 1},
{o: 23.812, f: 42.214, l: "n2", a: 0},
{o: 42.214, f: 60.697, l: "B", a: 1},
{o: 60.697, f: 350.192, l: "n3", a: 0},
{o: 350.192, f: 383.385, l: "A", a: 1},
{o: 383.385, f: 424.263, l: "n4", a: 0},
{o: 424.263, f: 445.858, l: "A", a: 1},
{o: 445.858, f: 470.018, l: "n5", a: 0}],
[{o: 0, f: 0.28, l: "G", a: 0},
{o: 0.28, f: 126.096, l: "D", a: 1},
{o: 126.096, f: 144.84, l: "F", a: 0},
{o: 144.84, f: 184.684, l: "E", a: 1},
{o: 184.684, f: 220.184, l: "C", a: 0},
{o: 220.184, f: 246.584, l: "B", a: 1},
{o: 246.584, f: 286.908, l: "D", a: 0},
{o: 286.908, f: 331.14, l: "C", a: 1},
{o: 331.14, f: 352.32, l: "B", a: 0},
{o: 352.32, f: 415.288, l: "C", a: 1},
{o: 415.288, f: 468.096, l: "B", a: 0},
{o: 468.096, f: 470.186, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000126.ogg";

var artist = "Mad Fables";

var track = "Pimping Down Pine";
