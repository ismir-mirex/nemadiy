var data = [
[{o: 0, f: 50.132, l: "Z", a: 0},
{o: 50.132, f: 63.758, l: "A", a: 1},
{o: 63.758, f: 91.592, l: "A", a: 0},
{o: 91.592, f: 116.735, l: "B", a: 1},
{o: 116.735, f: 130.174, l: "A", a: 0},
{o: 130.174, f: 157.508, l: "A", a: 1},
{o: 157.508, f: 181.801, l: "B", a: 0},
{o: 181.801, f: 248.7, l: "C", a: 1},
{o: 248.7, f: 274.39, l: "D", a: 0},
{o: 274.39, f: 296.758, l: "E", a: 1},
{o: 296.758, f: 343.275, l: "Z", a: 0}],
[{o: 0.004, f: 7.54, l: "A", a: 0},
{o: 7.54, f: 28.652, l: "A", a: 1},
{o: 28.652, f: 38.9, l: "A", a: 0},
{o: 38.9, f: 57.728, l: "A", a: 1},
{o: 57.728, f: 68.5, l: "A", a: 0},
{o: 68.5, f: 91.6, l: "A", a: 1},
{o: 91.6, f: 118.732, l: "C", a: 0},
{o: 118.732, f: 127.232, l: "A", a: 1},
{o: 127.232, f: 138.752, l: "A", a: 0},
{o: 138.752, f: 157.092, l: "A", a: 1},
{o: 157.092, f: 178.444, l: "C", a: 0},
{o: 178.444, f: 195.276, l: "C", a: 1},
{o: 195.276, f: 212.404, l: "C", a: 0},
{o: 212.404, f: 230.944, l: "C", a: 1},
{o: 230.944, f: 250.356, l: "C", a: 0},
{o: 250.356, f: 273.38, l: "C", a: 1},
{o: 273.38, f: 296.92, l: "C", a: 0},
{o: 296.92, f: 317.164, l: "C", a: 1},
{o: 317.164, f: 333.028, l: "C", a: 0},
{o: 333.028, f: 343.148, l: "A", a: 1}],
[{o: 0.004, f: 7.54, l: "A", a: 0},
{o: 7.54, f: 28.652, l: "A", a: 1},
{o: 28.652, f: 38.9, l: "F", a: 0},
{o: 38.9, f: 57.728, l: "F", a: 1},
{o: 57.728, f: 68.5, l: "D", a: 0},
{o: 68.5, f: 91.6, l: "D", a: 1},
{o: 91.6, f: 118.732, l: "B", a: 0},
{o: 118.732, f: 127.232, l: "D", a: 1},
{o: 127.232, f: 138.752, l: "D", a: 0},
{o: 138.752, f: 157.092, l: "D", a: 1},
{o: 157.092, f: 178.444, l: "C", a: 0},
{o: 178.444, f: 195.276, l: "C", a: 1},
{o: 195.276, f: 212.404, l: "C", a: 0},
{o: 212.404, f: 230.944, l: "C", a: 1},
{o: 230.944, f: 250.356, l: "C", a: 0},
{o: 250.356, f: 273.38, l: "C", a: 1},
{o: 273.38, f: 296.92, l: "E", a: 0},
{o: 296.92, f: 317.164, l: "G", a: 1},
{o: 317.164, f: 333.028, l: "H", a: 0},
{o: 333.028, f: 343.148, l: "I", a: 1}],
[{o: 0.547, f: 27.587, l: "5", a: 0},
{o: 27.587, f: 38.147, l: "3", a: 1},
{o: 38.147, f: 43.053, l: "8", a: 0},
{o: 43.053, f: 49.987, l: "3", a: 1},
{o: 49.987, f: 55.667, l: "4", a: 0},
{o: 55.667, f: 92.573, l: "2", a: 1},
{o: 92.573, f: 114.253, l: "1", a: 0},
{o: 114.253, f: 119.747, l: "3", a: 1},
{o: 119.747, f: 157.333, l: "2", a: 0},
{o: 157.333, f: 296.867, l: "1", a: 1},
{o: 296.867, f: 314.307, l: "6", a: 0},
{o: 314.307, f: 332.973, l: "4", a: 1},
{o: 332.973, f: 343.107, l: "7", a: 0}],
[{o: 0, f: 49.915, l: "a", a: 0},
{o: 49.915, f: 70.775, l: "b", a: 1},
{o: 70.775, f: 91.635, l: "b", a: 0},
{o: 91.635, f: 108.77, l: "c", a: 1},
{o: 108.77, f: 129.63, l: "b", a: 0},
{o: 129.63, f: 150.49, l: "b", a: 1},
{o: 150.49, f: 180.29, l: "c", a: 0},
{o: 180.29, f: 342.7, l: "d", a: 1}],
[{o: 0, f: 52.558, l: "n1", a: 0},
{o: 52.558, f: 72.876, l: "B", a: 1},
{o: 72.876, f: 92.532, l: "B", a: 0},
{o: 92.532, f: 105.198, l: "C", a: 1},
{o: 105.198, f: 118.758, l: "n4", a: 0},
{o: 118.758, f: 139.204, l: "B", a: 1},
{o: 139.204, f: 158.302, l: "B", a: 0},
{o: 158.302, f: 170.794, l: "C", a: 1},
{o: 170.794, f: 184.123, l: "n7", a: 0},
{o: 184.123, f: 194.479, l: "A", a: 1},
{o: 194.479, f: 204.138, l: "A", a: 0},
{o: 204.138, f: 213.403, l: "A", a: 1},
{o: 213.403, f: 221.948, l: "A", a: 0},
{o: 221.948, f: 228.066, l: "n11", a: 1},
{o: 228.066, f: 237.9, l: "A", a: 0},
{o: 237.9, f: 246.7, l: "A", a: 1},
{o: 246.7, f: 252.726, l: "n13", a: 0},
{o: 252.726, f: 260.853, l: "A", a: 1},
{o: 260.853, f: 342.959, l: "n14", a: 0}],
[{o: 0, f: 0.064, l: "G", a: 0},
{o: 0.064, f: 50.712, l: "B", a: 1},
{o: 50.712, f: 199.696, l: "F", a: 0},
{o: 199.696, f: 235.968, l: "B", a: 1},
{o: 235.968, f: 248.024, l: "F", a: 0},
{o: 248.024, f: 276.008, l: "B", a: 1},
{o: 276.008, f: 304.408, l: "A", a: 0},
{o: 304.408, f: 340.316, l: "B", a: 1},
{o: 340.316, f: 343.148, l: "A", a: 0},
{o: 343.148, f: 343.203, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001639.ogg";
