var data = [
[{o: 0.232, f: 45.926, l: "A", a: 0},
{o: 45.926, f: 116.736, l: "B", a: 1},
{o: 116.736, f: 161.448, l: "A", a: 0},
{o: 161.448, f: 272.98, l: "B", a: 1}],
[{o: 0, f: 272.981, l: "A", a: 0}],
[{o: 0, f: 272.981, l: "A", a: 0}],
[{o: 0.573, f: 12.867, l: "5", a: 0},
{o: 12.867, f: 17.813, l: "1", a: 1},
{o: 17.813, f: 40.293, l: "3", a: 0},
{o: 40.293, f: 49.973, l: "6", a: 1},
{o: 49.973, f: 75.467, l: "3", a: 0},
{o: 75.467, f: 80.8, l: "1", a: 1},
{o: 80.8, f: 93.72, l: "2", a: 0},
{o: 93.72, f: 99.08, l: "7", a: 1},
{o: 99.08, f: 114.64, l: "2", a: 0},
{o: 114.64, f: 122.653, l: "1", a: 1},
{o: 122.653, f: 128, l: "5", a: 0},
{o: 128, f: 142.68, l: "1", a: 1},
{o: 142.68, f: 159.253, l: "3", a: 0},
{o: 159.253, f: 165.547, l: "6", a: 1},
{o: 165.547, f: 181.653, l: "1", a: 0},
{o: 181.653, f: 192.693, l: "3", a: 1},
{o: 192.693, f: 199.493, l: "1", a: 0},
{o: 199.493, f: 209.32, l: "2", a: 1},
{o: 209.32, f: 218.853, l: "7", a: 0},
{o: 218.853, f: 232.653, l: "2", a: 1},
{o: 232.653, f: 243.387, l: "4", a: 0},
{o: 243.387, f: 254.813, l: "2", a: 1},
{o: 254.813, f: 266, l: "4", a: 0},
{o: 266, f: 270.253, l: "8", a: 1}],
[{o: 0, f: 78.225, l: "a", a: 0},
{o: 78.225, f: 91.635, l: "b", a: 1},
{o: 91.635, f: 116.22, l: "c", a: 0},
{o: 116.22, f: 198.17, l: "a", a: 1},
{o: 198.17, f: 211.58, l: "b", a: 0},
{o: 211.58, f: 236.91, l: "c", a: 1},
{o: 236.91, f: 253.3, l: "b", a: 0},
{o: 253.3, f: 271.18, l: "d", a: 1},
{o: 271.18, f: 272.67, l: "e", a: 0}],
[{o: 0, f: 3.669, l: "n1", a: 0},
{o: 3.669, f: 16.788, l: "B", a: 1},
{o: 16.788, f: 30.824, l: "B", a: 0},
{o: 30.824, f: 37.268, l: "n3", a: 1},
{o: 37.268, f: 47.856, l: "C", a: 0},
{o: 47.856, f: 70.937, l: "n4", a: 1},
{o: 70.937, f: 118.108, l: "A", a: 0},
{o: 118.108, f: 132.679, l: "B", a: 1},
{o: 132.679, f: 144.695, l: "B", a: 0},
{o: 144.695, f: 154.18, l: "n7", a: 1},
{o: 154.18, f: 163.573, l: "C", a: 0},
{o: 163.573, f: 179.966, l: "n8", a: 1},
{o: 179.966, f: 191.379, l: "C", a: 0},
{o: 191.379, f: 238.26, l: "A", a: 1},
{o: 238.26, f: 272.742, l: "n10", a: 0}],
[{o: 0, f: 0.016, l: "I", a: 0},
{o: 0.016, f: 0.764, l: "B", a: 1},
{o: 0.764, f: 15.916, l: "H", a: 0},
{o: 15.916, f: 35.232, l: "B", a: 1},
{o: 35.232, f: 39.236, l: "D", a: 0},
{o: 39.236, f: 49.364, l: "C", a: 1},
{o: 49.364, f: 60.848, l: "B", a: 0},
{o: 60.848, f: 64.696, l: "C", a: 1},
{o: 64.696, f: 82.54, l: "B", a: 0},
{o: 82.54, f: 95.312, l: "D", a: 1},
{o: 95.312, f: 100.1, l: "C", a: 0},
{o: 100.1, f: 116.176, l: "D", a: 1},
{o: 116.176, f: 125.672, l: "H", a: 0},
{o: 125.672, f: 131.016, l: "D", a: 1},
{o: 131.016, f: 151.036, l: "B", a: 0},
{o: 151.036, f: 155.072, l: "D", a: 1},
{o: 155.072, f: 171.864, l: "C", a: 0},
{o: 171.864, f: 178.468, l: "B", a: 1},
{o: 178.468, f: 182.836, l: "C", a: 0},
{o: 182.836, f: 188.864, l: "B", a: 1},
{o: 188.864, f: 192.336, l: "C", a: 0},
{o: 192.336, f: 202.38, l: "B", a: 1},
{o: 202.38, f: 214.836, l: "D", a: 0},
{o: 214.836, f: 220.532, l: "C", a: 1},
{o: 220.532, f: 223.76, l: "D", a: 0},
{o: 223.76, f: 227.196, l: "E", a: 1},
{o: 227.196, f: 239.532, l: "D", a: 0},
{o: 239.532, f: 243.528, l: "B", a: 1},
{o: 243.528, f: 269.332, l: "D", a: 0},
{o: 269.332, f: 272.981, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000013.ogg";
