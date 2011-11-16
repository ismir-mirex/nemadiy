var data = [
[{o: 0.441, f: 27.576, l: "A", a: 0},
{o: 27.576, f: 62.704, l: "B", a: 1},
{o: 62.704, f: 80.675, l: "C", a: 0},
{o: 80.675, f: 162.45, l: "D", a: 1},
{o: 162.45, f: 174.474, l: "A", a: 0},
{o: 174.474, f: 186.53, l: "C", a: 1},
{o: 186.53, f: 222.787, l: "E", a: 0},
{o: 222.787, f: 234.894, l: "C", a: 1},
{o: 234.894, f: 246.954, l: "A", a: 0},
{o: 246.954, f: 293.24, l: "E", a: 1}],
[{o: 0.324, f: 15.044, l: "A", a: 0},
{o: 15.044, f: 27.14, l: "A", a: 1},
{o: 27.14, f: 39.16, l: "C", a: 0},
{o: 39.16, f: 55.964, l: "C", a: 1},
{o: 55.964, f: 69.024, l: "C", a: 0},
{o: 69.024, f: 91.408, l: "C", a: 1},
{o: 91.408, f: 114.324, l: "B", a: 0},
{o: 114.324, f: 135.48, l: "B", a: 1},
{o: 135.48, f: 162.488, l: "B", a: 0},
{o: 162.488, f: 173.512, l: "C", a: 1},
{o: 173.512, f: 187.276, l: "E", a: 0},
{o: 187.276, f: 211.024, l: "D", a: 1},
{o: 211.024, f: 222.928, l: "F", a: 0},
{o: 222.928, f: 234.652, l: "G", a: 1},
{o: 234.652, f: 247.088, l: "A", a: 0},
{o: 247.088, f: 258.768, l: "E", a: 1},
{o: 258.768, f: 288.992, l: "H", a: 0}],
[{o: 0.324, f: 15.044, l: "A", a: 0},
{o: 15.044, f: 27.14, l: "A", a: 1},
{o: 27.14, f: 39.16, l: "C", a: 0},
{o: 39.16, f: 55.964, l: "C", a: 1},
{o: 55.964, f: 69.024, l: "D", a: 0},
{o: 69.024, f: 91.408, l: "D", a: 1},
{o: 91.408, f: 114.324, l: "B", a: 0},
{o: 114.324, f: 135.48, l: "B", a: 1},
{o: 135.48, f: 162.488, l: "B", a: 0},
{o: 162.488, f: 173.512, l: "E", a: 1},
{o: 173.512, f: 187.276, l: "F", a: 0},
{o: 187.276, f: 211.024, l: "G", a: 1},
{o: 211.024, f: 222.928, l: "H", a: 0},
{o: 222.928, f: 234.652, l: "I", a: 1},
{o: 234.652, f: 247.088, l: "A", a: 0},
{o: 247.088, f: 258.768, l: "J", a: 1},
{o: 258.768, f: 288.992, l: "K", a: 0}],
[{o: 0.387, f: 10.747, l: "2", a: 0},
{o: 10.747, f: 14.867, l: "1", a: 1},
{o: 14.867, f: 20.627, l: "2", a: 0},
{o: 20.627, f: 26.6, l: "1", a: 1},
{o: 26.6, f: 30.307, l: "5", a: 0},
{o: 30.307, f: 63.68, l: "4", a: 1},
{o: 63.68, f: 79.76, l: "1", a: 0},
{o: 79.76, f: 86.04, l: "3", a: 1},
{o: 86.04, f: 90.84, l: "5", a: 0},
{o: 90.84, f: 132.547, l: "3", a: 1},
{o: 132.547, f: 138.173, l: "7", a: 0},
{o: 138.173, f: 159.72, l: "3", a: 1},
{o: 159.72, f: 173.16, l: "2", a: 0},
{o: 173.16, f: 211.053, l: "1", a: 1},
{o: 211.053, f: 224.893, l: "2", a: 0},
{o: 224.893, f: 236.773, l: "1", a: 1},
{o: 236.773, f: 245.787, l: "2", a: 0},
{o: 245.787, f: 257.853, l: "6", a: 1},
{o: 257.853, f: 290.133, l: "1", a: 0},
{o: 290.133, f: 293.107, l: "8", a: 1}],
[{o: 0, f: 174.33, l: "a", a: 0},
{o: 174.33, f: 194.445, l: "b", a: 1},
{o: 194.445, f: 236.165, l: "b", a: 0},
{o: 236.165, f: 248.83, l: "c", a: 1},
{o: 248.83, f: 292.785, l: "b", a: 0}],
[{o: 0, f: 114.718, l: "n1", a: 0},
{o: 114.718, f: 124.947, l: "B", a: 1},
{o: 124.947, f: 138.031, l: "n2", a: 0},
{o: 138.031, f: 148.167, l: "B", a: 1},
{o: 148.167, f: 198.275, l: "n3", a: 0},
{o: 198.275, f: 208.852, l: "A", a: 1},
{o: 208.852, f: 222.203, l: "n4", a: 0},
{o: 222.203, f: 232.838, l: "A", a: 1},
{o: 232.838, f: 258.624, l: "n5", a: 0},
{o: 258.624, f: 270.559, l: "A", a: 1},
{o: 270.559, f: 280.892, l: "A", a: 0},
{o: 280.892, f: 293.175, l: "n7", a: 1}],
[{o: 0, f: 0.32, l: "G", a: 0},
{o: 0.32, f: 18.208, l: "F", a: 1},
{o: 18.208, f: 28.832, l: "C", a: 0},
{o: 28.832, f: 61.816, l: "F", a: 1},
{o: 61.816, f: 77.696, l: "D", a: 0},
{o: 77.696, f: 131.66, l: "C", a: 1},
{o: 131.66, f: 157.756, l: "D", a: 0},
{o: 157.756, f: 171.636, l: "F", a: 1},
{o: 171.636, f: 234.468, l: "D", a: 0},
{o: 234.468, f: 245.96, l: "F", a: 1},
{o: 245.96, f: 286.604, l: "D", a: 0},
{o: 286.604, f: 288.808, l: "C", a: 1},
{o: 288.808, f: 293.199, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001061.ogg";

var artist = "Compilations";

var track = "Mamaita No Quiere";