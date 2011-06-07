var data = [
[{o: 0.106, f: 19.321, l: "A", a: 0},
{o: 19.321, f: 44.881, l: "B", a: 1},
{o: 44.881, f: 64.533, l: "C", a: 0},
{o: 64.533, f: 90.092, l: "B", a: 1},
{o: 90.092, f: 100.238, l: "C", a: 0},
{o: 100.238, f: 134.318, l: "D", a: 1},
{o: 134.318, f: 159.894, l: "B", a: 0},
{o: 159.894, f: 237.114, l: "C", a: 1}],
[{o: 0.044, f: 27.472, l: "D", a: 0},
{o: 27.472, f: 40.736, l: "D", a: 1},
{o: 40.736, f: 54.216, l: "D", a: 0},
{o: 54.216, f: 70.016, l: "D", a: 1},
{o: 70.016, f: 87.8, l: "D", a: 0},
{o: 87.8, f: 104.688, l: "D", a: 1},
{o: 104.688, f: 122.016, l: "D", a: 0},
{o: 122.016, f: 132.54, l: "B", a: 1},
{o: 132.54, f: 150.372, l: "D", a: 0},
{o: 150.372, f: 159.436, l: "D", a: 1},
{o: 159.436, f: 169.644, l: "B", a: 0},
{o: 169.644, f: 181.1, l: "B", a: 1},
{o: 181.1, f: 197.348, l: "B", a: 0},
{o: 197.348, f: 206.676, l: "D", a: 1},
{o: 206.676, f: 217.24, l: "B", a: 0},
{o: 217.24, f: 224.9, l: "B", a: 1},
{o: 224.9, f: 236.848, l: "D", a: 0}],
[{o: 0.044, f: 27.472, l: "D", a: 0},
{o: 27.472, f: 40.736, l: "D", a: 1},
{o: 40.736, f: 54.216, l: "D", a: 0},
{o: 54.216, f: 70.016, l: "D", a: 1},
{o: 70.016, f: 87.8, l: "D", a: 0},
{o: 87.8, f: 104.688, l: "D", a: 1},
{o: 104.688, f: 122.016, l: "D", a: 0},
{o: 122.016, f: 132.54, l: "A", a: 1},
{o: 132.54, f: 150.372, l: "D", a: 0},
{o: 150.372, f: 159.436, l: "D", a: 1},
{o: 159.436, f: 169.644, l: "B", a: 0},
{o: 169.644, f: 181.1, l: "B", a: 1},
{o: 181.1, f: 197.348, l: "C", a: 0},
{o: 197.348, f: 206.676, l: "E", a: 1},
{o: 206.676, f: 217.24, l: "F", a: 0},
{o: 217.24, f: 224.9, l: "G", a: 1},
{o: 224.9, f: 236.848, l: "H", a: 0}],
[{o: 0.52, f: 3.973, l: "8", a: 0},
{o: 3.973, f: 19.013, l: "2", a: 1},
{o: 19.013, f: 48.413, l: "1", a: 0},
{o: 48.413, f: 61.44, l: "2", a: 1},
{o: 61.44, f: 93.613, l: "1", a: 0},
{o: 93.613, f: 99.067, l: "2", a: 1},
{o: 99.067, f: 126.387, l: "3", a: 0},
{o: 126.387, f: 133.227, l: "2", a: 1},
{o: 133.227, f: 177.653, l: "1", a: 0},
{o: 177.653, f: 195.693, l: "2", a: 1},
{o: 195.693, f: 200.44, l: "7", a: 0},
{o: 200.44, f: 216.56, l: "4", a: 1},
{o: 216.56, f: 225.08, l: "6", a: 0},
{o: 225.08, f: 236.84, l: "5", a: 1}],
[{o: 0, f: 11.92, l: "a", a: 0},
{o: 11.92, f: 43.955, l: "b", a: 1},
{o: 43.955, f: 78.225, l: "b", a: 0},
{o: 78.225, f: 126.65, l: "c", a: 1},
{o: 126.65, f: 160.175, l: "b", a: 0},
{o: 160.175, f: 197.425, l: "b", a: 1},
{o: 197.425, f: 236.91, l: "d", a: 0}],
[{o: 0, f: 19.249, l: "n1", a: 0},
{o: 19.249, f: 32.078, l: "A", a: 1},
{o: 32.078, f: 44.884, l: "A", a: 0},
{o: 44.884, f: 51.455, l: "n2", a: 1},
{o: 51.455, f: 64.435, l: "A", a: 0},
{o: 64.435, f: 77.334, l: "A", a: 1},
{o: 77.334, f: 90.093, l: "A", a: 0},
{o: 90.093, f: 134.374, l: "n3", a: 1},
{o: 134.374, f: 147.203, l: "A", a: 0},
{o: 147.203, f: 159.927, l: "A", a: 1},
{o: 159.927, f: 236.704, l: "n4", a: 0}],
[{o: 0, f: 0.044, l: "F", a: 0},
{o: 0.044, f: 11.076, l: "D", a: 1},
{o: 11.076, f: 107.096, l: "A", a: 0},
{o: 107.096, f: 127.056, l: "B", a: 1},
{o: 127.056, f: 225.744, l: "A", a: 0},
{o: 225.744, f: 235.224, l: "E", a: 1},
{o: 235.224, f: 236.852, l: "A", a: 0},
{o: 236.852, f: 237.029, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000055.ogg";
