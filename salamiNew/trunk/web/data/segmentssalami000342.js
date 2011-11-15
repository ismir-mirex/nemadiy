var data = [
[{o: 0.039, f: 37.78, l: "A", a: 0},
{o: 37.78, f: 55.669, l: "B", a: 1},
{o: 55.669, f: 73.323, l: "C", a: 0},
{o: 73.323, f: 80.429, l: "D", a: 1},
{o: 80.429, f: 98.588, l: "B", a: 0},
{o: 98.588, f: 116.486, l: "E", a: 1},
{o: 116.486, f: 144.391, l: "E", a: 0},
{o: 144.391, f: 176.919, l: "E", a: 1},
{o: 176.919, f: 197.799, l: "F", a: 0},
{o: 197.799, f: 254.09, l: "G", a: 1},
{o: 254.09, f: 271.298, l: "H", a: 0},
{o: 271.298, f: 320.095, l: "Z", a: 1}],
[{o: 0.176, f: 20.044, l: "D", a: 0},
{o: 20.044, f: 37.704, l: "D", a: 1},
{o: 37.704, f: 54.752, l: "D", a: 0},
{o: 54.752, f: 70.34, l: "D", a: 1},
{o: 70.34, f: 80.548, l: "D", a: 0},
{o: 80.548, f: 97.576, l: "D", a: 1},
{o: 97.576, f: 105.724, l: "D", a: 0},
{o: 105.724, f: 117.376, l: "D", a: 1},
{o: 117.376, f: 133.136, l: "D", a: 0},
{o: 133.136, f: 156.716, l: "D", a: 1},
{o: 156.716, f: 180.94, l: "E", a: 0},
{o: 180.94, f: 196.948, l: "E", a: 1},
{o: 196.948, f: 204.98, l: "E", a: 0},
{o: 204.98, f: 227.672, l: "E", a: 1},
{o: 227.672, f: 240.712, l: "A", a: 0},
{o: 240.712, f: 253.256, l: "A", a: 1},
{o: 253.256, f: 265.352, l: "E", a: 0},
{o: 265.352, f: 279.864, l: "D", a: 1},
{o: 279.864, f: 291.884, l: "D", a: 0},
{o: 291.884, f: 302.612, l: "D", a: 1},
{o: 302.612, f: 319.936, l: "A", a: 0}],
[{o: 0.176, f: 20.044, l: "D", a: 0},
{o: 20.044, f: 37.704, l: "D", a: 1},
{o: 37.704, f: 54.752, l: "A", a: 0},
{o: 54.752, f: 70.34, l: "A", a: 1},
{o: 70.34, f: 80.548, l: "A", a: 0},
{o: 80.548, f: 97.576, l: "A", a: 1},
{o: 97.576, f: 105.724, l: "D", a: 0},
{o: 105.724, f: 117.376, l: "D", a: 1},
{o: 117.376, f: 133.136, l: "A", a: 0},
{o: 133.136, f: 156.716, l: "A", a: 1},
{o: 156.716, f: 180.94, l: "E", a: 0},
{o: 180.94, f: 196.948, l: "E", a: 1},
{o: 196.948, f: 204.98, l: "C", a: 0},
{o: 204.98, f: 227.672, l: "C", a: 1},
{o: 227.672, f: 240.712, l: "B", a: 0},
{o: 240.712, f: 253.256, l: "F", a: 1},
{o: 253.256, f: 265.352, l: "E", a: 0},
{o: 265.352, f: 279.864, l: "G", a: 1},
{o: 279.864, f: 291.884, l: "H", a: 0},
{o: 291.884, f: 302.612, l: "I", a: 1},
{o: 302.612, f: 319.936, l: "J", a: 0}],
[{o: 0.52, f: 3.453, l: "2", a: 0},
{o: 3.453, f: 159.747, l: "1", a: 1},
{o: 159.747, f: 197.36, l: "3", a: 0},
{o: 197.36, f: 207.453, l: "7", a: 1},
{o: 207.453, f: 231.96, l: "2", a: 0},
{o: 231.96, f: 254.36, l: "4", a: 1},
{o: 254.36, f: 269.44, l: "1", a: 0},
{o: 269.44, f: 292.373, l: "5", a: 1},
{o: 292.373, f: 302.4, l: "2", a: 0},
{o: 302.4, f: 313.8, l: "6", a: 1},
{o: 313.8, f: 319.907, l: "8", a: 0}],
[{o: 0, f: 18.625, l: "a", a: 0},
{o: 18.625, f: 39.485, l: "a", a: 1},
{o: 39.485, f: 184.76, l: "b", a: 0},
{o: 184.76, f: 202.64, l: "c", a: 1},
{o: 202.64, f: 223.5, l: "c", a: 0},
{o: 223.5, f: 319.605, l: "d", a: 1}],
[{o: 0, f: 5.956, l: "n1", a: 0},
{o: 5.956, f: 17.81, l: "C", a: 1},
{o: 17.81, f: 24.683, l: "n2", a: 0},
{o: 24.683, f: 38.197, l: "C", a: 1},
{o: 38.197, f: 55.937, l: "B", a: 0},
{o: 55.937, f: 71.854, l: "B", a: 1},
{o: 71.854, f: 80.84, l: "n5", a: 0},
{o: 80.84, f: 97.013, l: "B", a: 1},
{o: 97.013, f: 158.325, l: "n6", a: 0},
{o: 158.325, f: 167.729, l: "A", a: 1},
{o: 167.729, f: 176.228, l: "A", a: 0},
{o: 176.228, f: 187.791, l: "n8", a: 1},
{o: 187.791, f: 198.333, l: "A", a: 0},
{o: 198.333, f: 209.177, l: "A", a: 1},
{o: 209.177, f: 218.697, l: "A", a: 0},
{o: 218.697, f: 319.925, l: "n11", a: 1}],
[{o: 0, f: 0.004, l: "H", a: 0},
{o: 0.004, f: 129.348, l: "D", a: 1},
{o: 129.348, f: 143.16, l: "C", a: 0},
{o: 143.16, f: 158.288, l: "D", a: 1},
{o: 158.288, f: 225, l: "A", a: 0},
{o: 225, f: 279.54, l: "D", a: 1},
{o: 279.54, f: 319.936, l: "G", a: 0},
{o: 319.936, f: 320, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000342.ogg";

var artist = "Old Dead Bug";

var track = "Secret Society";
