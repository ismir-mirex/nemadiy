var data = [
[{o: 0.026, f: 137.895, l: "A", a: 0},
{o: 137.895, f: 228.063, l: "B", a: 1},
{o: 228.063, f: 330.916, l: "C", a: 0},
{o: 330.916, f: 420.061, l: "B", a: 1}],
[{o: 0.144, f: 7.512, l: "E", a: 0},
{o: 7.512, f: 31.656, l: "E", a: 1},
{o: 31.656, f: 52.076, l: "D", a: 0},
{o: 52.076, f: 65.82, l: "D", a: 1},
{o: 65.82, f: 77.88, l: "D", a: 0},
{o: 77.88, f: 98.024, l: "D", a: 1},
{o: 98.024, f: 119.492, l: "D", a: 0},
{o: 119.492, f: 147.176, l: "C", a: 1},
{o: 147.176, f: 161.116, l: "C", a: 0},
{o: 161.116, f: 181.856, l: "C", a: 1},
{o: 181.856, f: 190.804, l: "D", a: 0},
{o: 190.804, f: 206.94, l: "C", a: 1},
{o: 206.94, f: 223.668, l: "D", a: 0},
{o: 223.668, f: 245.16, l: "C", a: 1},
{o: 245.16, f: 271.564, l: "C", a: 0},
{o: 271.564, f: 287.468, l: "D", a: 1},
{o: 287.468, f: 297.78, l: "D", a: 0},
{o: 297.78, f: 313.436, l: "D", a: 1},
{o: 313.436, f: 330.212, l: "D", a: 0},
{o: 330.212, f: 352.588, l: "D", a: 1},
{o: 352.588, f: 376.488, l: "C", a: 0},
{o: 376.488, f: 396.176, l: "C", a: 1},
{o: 396.176, f: 412.64, l: "D", a: 0}],
[{o: 0.144, f: 7.512, l: "B", a: 0},
{o: 7.512, f: 31.656, l: "F", a: 1},
{o: 31.656, f: 52.076, l: "D", a: 0},
{o: 52.076, f: 65.82, l: "E", a: 1},
{o: 65.82, f: 77.88, l: "D", a: 0},
{o: 77.88, f: 98.024, l: "E", a: 1},
{o: 98.024, f: 119.492, l: "E", a: 0},
{o: 119.492, f: 147.176, l: "C", a: 1},
{o: 147.176, f: 161.116, l: "C", a: 0},
{o: 161.116, f: 181.856, l: "C", a: 1},
{o: 181.856, f: 190.804, l: "G", a: 0},
{o: 190.804, f: 206.94, l: "C", a: 1},
{o: 206.94, f: 223.668, l: "H", a: 0},
{o: 223.668, f: 245.16, l: "C", a: 1},
{o: 245.16, f: 271.564, l: "C", a: 0},
{o: 271.564, f: 287.468, l: "A", a: 1},
{o: 287.468, f: 297.78, l: "A", a: 0},
{o: 297.78, f: 313.436, l: "I", a: 1},
{o: 313.436, f: 330.212, l: "E", a: 0},
{o: 330.212, f: 352.588, l: "J", a: 1},
{o: 352.588, f: 376.488, l: "C", a: 0},
{o: 376.488, f: 396.176, l: "C", a: 1},
{o: 396.176, f: 412.64, l: "K", a: 0}],
[{o: 0.493, f: 17.213, l: "2", a: 0},
{o: 17.213, f: 28.573, l: "3", a: 1},
{o: 28.573, f: 37.84, l: "2", a: 0},
{o: 37.84, f: 47.493, l: "3", a: 1},
{o: 47.493, f: 53.733, l: "2", a: 0},
{o: 53.733, f: 63.053, l: "3", a: 1},
{o: 63.053, f: 79, l: "2", a: 0},
{o: 79, f: 91.347, l: "3", a: 1},
{o: 91.347, f: 99.773, l: "2", a: 0},
{o: 99.773, f: 112.187, l: "3", a: 1},
{o: 112.187, f: 119.733, l: "2", a: 0},
{o: 119.733, f: 138.533, l: "4", a: 1},
{o: 138.533, f: 175.2, l: "1", a: 0},
{o: 175.2, f: 181.2, l: "3", a: 1},
{o: 181.2, f: 196.12, l: "1", a: 0},
{o: 196.12, f: 207.067, l: "6", a: 1},
{o: 207.067, f: 257.133, l: "5", a: 0},
{o: 257.133, f: 270.227, l: "1", a: 1},
{o: 270.227, f: 284.147, l: "6", a: 0},
{o: 284.147, f: 297.16, l: "7", a: 1},
{o: 297.16, f: 309.587, l: "5", a: 0},
{o: 309.587, f: 331.813, l: "4", a: 1},
{o: 331.813, f: 400.587, l: "1", a: 0},
{o: 400.587, f: 412.56, l: "4", a: 1},
{o: 412.56, f: 419.827, l: "8", a: 0}],
[{o: 0, f: 108.025, l: "a", a: 0},
{o: 108.025, f: 167.625, l: "b", a: 1},
{o: 167.625, f: 213.07, l: "c", a: 0},
{o: 213.07, f: 263.73, l: "b", a: 1},
{o: 263.73, f: 301.725, l: "d", a: 0},
{o: 301.725, f: 354.62, l: "b", a: 1},
{o: 354.62, f: 420.18, l: "e", a: 0}],
[{o: 0, f: 101.123, l: "n1", a: 0},
{o: 101.123, f: 112.036, l: "C", a: 1},
{o: 112.036, f: 154.03, l: "n2", a: 0},
{o: 154.03, f: 167.811, l: "B", a: 1},
{o: 167.811, f: 180.524, l: "n3", a: 0},
{o: 180.524, f: 187.803, l: "D", a: 1},
{o: 187.803, f: 194.932, l: "D", a: 0},
{o: 194.932, f: 231.805, l: "n5", a: 1},
{o: 231.805, f: 238.33, l: "A", a: 0},
{o: 238.33, f: 245.168, l: "n6", a: 1},
{o: 245.168, f: 252.029, l: "A", a: 0},
{o: 252.029, f: 306.248, l: "n7", a: 1},
{o: 306.248, f: 315.571, l: "A", a: 0},
{o: 315.571, f: 326.914, l: "C", a: 1},
{o: 326.914, f: 335.134, l: "A", a: 0},
{o: 335.134, f: 340.939, l: "n10", a: 1},
{o: 340.939, f: 354.929, l: "B", a: 0},
{o: 354.929, f: 406.233, l: "n11", a: 1},
{o: 406.233, f: 415.451, l: "A", a: 0},
{o: 415.451, f: 419.863, l: "n12", a: 1}],
[{o: 0, f: 0.148, l: "J", a: 0},
{o: 0.148, f: 71.932, l: "I", a: 1},
{o: 71.932, f: 412.584, l: "C", a: 0},
{o: 412.584, f: 420.05, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000731.ogg";

var artist = "Pepe Romero";

var track = "Cantos Des Espana Op";
