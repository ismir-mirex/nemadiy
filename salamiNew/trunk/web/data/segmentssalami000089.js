var data = [
[{o: 0.466, f: 19.511, l: "A", a: 0},
{o: 19.511, f: 57.462, l: "B", a: 1},
{o: 57.462, f: 95.141, l: "C", a: 0},
{o: 95.141, f: 150.999, l: "D", a: 1},
{o: 150.999, f: 188.052, l: "C'", a: 0},
{o: 188.052, f: 253.509, l: "E", a: 1},
{o: 253.509, f: 278.621, l: "A'", a: 0}],
[{o: 0.064, f: 18.892, l: "A", a: 0},
{o: 18.892, f: 39.616, l: "A", a: 1},
{o: 39.616, f: 48.492, l: "A", a: 0},
{o: 48.492, f: 62.764, l: "A", a: 1},
{o: 62.764, f: 78.1, l: "A", a: 0},
{o: 78.1, f: 92.8, l: "A", a: 1},
{o: 92.8, f: 108.816, l: "A", a: 0},
{o: 108.816, f: 121.092, l: "A", a: 1},
{o: 121.092, f: 135.1, l: "A", a: 0},
{o: 135.1, f: 152.656, l: "A", a: 1},
{o: 152.656, f: 165.764, l: "A", a: 0},
{o: 165.764, f: 188.656, l: "A", a: 1},
{o: 188.656, f: 198.628, l: "A", a: 0},
{o: 198.628, f: 211.484, l: "A", a: 1},
{o: 211.484, f: 227.232, l: "B", a: 0},
{o: 227.232, f: 241.22, l: "B", a: 1},
{o: 241.22, f: 254.612, l: "D", a: 0},
{o: 254.612, f: 265.492, l: "D", a: 1},
{o: 265.492, f: 276.332, l: "D", a: 0}],
[{o: 0.064, f: 18.892, l: "A", a: 0},
{o: 18.892, f: 39.616, l: "A", a: 1},
{o: 39.616, f: 48.492, l: "C", a: 0},
{o: 48.492, f: 62.764, l: "C", a: 1},
{o: 62.764, f: 78.1, l: "C", a: 0},
{o: 78.1, f: 92.8, l: "C", a: 1},
{o: 92.8, f: 108.816, l: "C", a: 0},
{o: 108.816, f: 121.092, l: "C", a: 1},
{o: 121.092, f: 135.1, l: "C", a: 0},
{o: 135.1, f: 152.656, l: "C", a: 1},
{o: 152.656, f: 165.764, l: "C", a: 0},
{o: 165.764, f: 188.656, l: "C", a: 1},
{o: 188.656, f: 198.628, l: "B", a: 0},
{o: 198.628, f: 211.484, l: "D", a: 1},
{o: 211.484, f: 227.232, l: "E", a: 0},
{o: 227.232, f: 241.22, l: "F", a: 1},
{o: 241.22, f: 254.612, l: "G", a: 0},
{o: 254.612, f: 265.492, l: "H", a: 1},
{o: 265.492, f: 276.332, l: "I", a: 0}],
[{o: 0.707, f: 18.093, l: "6", a: 0},
{o: 18.093, f: 43.48, l: "3", a: 1},
{o: 43.48, f: 187.213, l: "1", a: 0},
{o: 187.213, f: 198.333, l: "2", a: 1},
{o: 198.333, f: 204.76, l: "8", a: 0},
{o: 204.76, f: 210.013, l: "2", a: 1},
{o: 210.013, f: 225.773, l: "3", a: 0},
{o: 225.773, f: 233.347, l: "4", a: 1},
{o: 233.347, f: 245.613, l: "2", a: 0},
{o: 245.613, f: 253.027, l: "4", a: 1},
{o: 253.027, f: 270.6, l: "5", a: 0},
{o: 270.6, f: 278.413, l: "7", a: 1}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 20.115, l: "a", a: 1},
{o: 20.115, f: 111.75, l: "b", a: 0},
{o: 111.75, f: 131.12, l: "c", a: 1},
{o: 131.12, f: 149.745, l: "c", a: 0},
{o: 149.745, f: 277.885, l: "d", a: 1}],
[{o: 0, f: 57.713, l: "n1", a: 0},
{o: 57.713, f: 67.222, l: "D", a: 1},
{o: 67.222, f: 75.453, l: "D", a: 0},
{o: 75.453, f: 123.124, l: "n3", a: 1},
{o: 123.124, f: 131.228, l: "C", a: 0},
{o: 131.228, f: 141.584, l: "n4", a: 1},
{o: 141.584, f: 149.734, l: "C", a: 0},
{o: 149.734, f: 153.844, l: "n5", a: 1},
{o: 153.844, f: 163.178, l: "A", a: 0},
{o: 163.178, f: 172.489, l: "A", a: 1},
{o: 172.489, f: 181.696, l: "n6", a: 0},
{o: 181.696, f: 191.042, l: "A", a: 1},
{o: 191.042, f: 251.484, l: "n7", a: 0},
{o: 251.484, f: 260.656, l: "B", a: 1},
{o: 260.656, f: 269.793, l: "B", a: 0},
{o: 269.793, f: 278.314, l: "n8", a: 1}],
[{o: 0, f: 0.256, l: "H", a: 0},
{o: 0.256, f: 106.496, l: "G", a: 1},
{o: 106.496, f: 128.332, l: "D", a: 0},
{o: 128.332, f: 211.784, l: "G", a: 1},
{o: 211.784, f: 229.88, l: "B", a: 0},
{o: 229.88, f: 273.16, l: "G", a: 1},
{o: 273.16, f: 276.036, l: "D", a: 0},
{o: 276.036, f: 278.533, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000089.ogg";

var artist = "The Derek Trucks Band";

var track = "So Close So Far Away";