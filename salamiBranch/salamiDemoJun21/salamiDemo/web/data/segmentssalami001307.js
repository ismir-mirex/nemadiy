var data = [
[{o: 0.035, f: 34.827, l: "A", a: 0},
{o: 34.827, f: 65.712, l: "B", a: 1},
{o: 65.712, f: 102.238, l: "C", a: 0},
{o: 102.238, f: 132.404, l: "B", a: 1},
{o: 132.404, f: 167.987, l: "C", a: 0},
{o: 167.987, f: 212.553, l: "D", a: 1},
{o: 212.553, f: 233.63, l: "D", a: 0},
{o: 233.63, f: 262.461, l: "B", a: 1},
{o: 262.461, f: 320.717, l: "E", a: 0},
{o: 320.717, f: 348.003, l: "Z", a: 1}],
[{o: 0.136, f: 8.612, l: "D", a: 0},
{o: 8.612, f: 16.636, l: "D", a: 1},
{o: 16.636, f: 34.44, l: "D", a: 0},
{o: 34.44, f: 50.372, l: "D", a: 1},
{o: 50.372, f: 66.172, l: "D", a: 0},
{o: 66.172, f: 77.652, l: "D", a: 1},
{o: 77.652, f: 95.024, l: "D", a: 0},
{o: 95.024, f: 101.836, l: "D", a: 1},
{o: 101.836, f: 116.624, l: "D", a: 0},
{o: 116.624, f: 136.616, l: "D", a: 1},
{o: 136.616, f: 146.564, l: "D", a: 0},
{o: 146.564, f: 156.588, l: "A", a: 1},
{o: 156.588, f: 167.744, l: "D", a: 0},
{o: 167.744, f: 184.04, l: "D", a: 1},
{o: 184.04, f: 197.144, l: "D", a: 0},
{o: 197.144, f: 212.292, l: "D", a: 1},
{o: 212.292, f: 230.828, l: "D", a: 0},
{o: 230.828, f: 244.784, l: "D", a: 1},
{o: 244.784, f: 263.44, l: "D", a: 0},
{o: 263.44, f: 270.2, l: "D", a: 1},
{o: 270.2, f: 284.316, l: "D", a: 0},
{o: 284.316, f: 301.332, l: "D", a: 1},
{o: 301.332, f: 316.236, l: "D", a: 0},
{o: 316.236, f: 322.004, l: "D", a: 1},
{o: 322.004, f: 329.752, l: "D", a: 0},
{o: 329.752, f: 337.692, l: "D", a: 1},
{o: 337.692, f: 347.82, l: "D", a: 0}],
[{o: 0.136, f: 8.612, l: "I", a: 0},
{o: 8.612, f: 16.636, l: "C", a: 1},
{o: 16.636, f: 34.44, l: "D", a: 0},
{o: 34.44, f: 50.372, l: "E", a: 1},
{o: 50.372, f: 66.172, l: "C", a: 0},
{o: 66.172, f: 77.652, l: "E", a: 1},
{o: 77.652, f: 95.024, l: "E", a: 0},
{o: 95.024, f: 101.836, l: "D", a: 1},
{o: 101.836, f: 116.624, l: "E", a: 0},
{o: 116.624, f: 136.616, l: "E", a: 1},
{o: 136.616, f: 146.564, l: "E", a: 0},
{o: 146.564, f: 156.588, l: "J", a: 1},
{o: 156.588, f: 167.744, l: "C", a: 0},
{o: 167.744, f: 184.04, l: "A", a: 1},
{o: 184.04, f: 197.144, l: "A", a: 0},
{o: 197.144, f: 212.292, l: "E", a: 1},
{o: 212.292, f: 230.828, l: "G", a: 0},
{o: 230.828, f: 244.784, l: "G", a: 1},
{o: 244.784, f: 263.44, l: "C", a: 0},
{o: 263.44, f: 270.2, l: "B", a: 1},
{o: 270.2, f: 284.316, l: "F", a: 0},
{o: 284.316, f: 301.332, l: "F", a: 1},
{o: 301.332, f: 316.236, l: "K", a: 0},
{o: 316.236, f: 322.004, l: "L", a: 1},
{o: 322.004, f: 329.752, l: "H", a: 0},
{o: 329.752, f: 337.692, l: "H", a: 1},
{o: 337.692, f: 347.82, l: "B", a: 0}],
[{o: 0.547, f: 10.44, l: "7", a: 0},
{o: 10.44, f: 56.307, l: "1", a: 1},
{o: 56.307, f: 63.893, l: "3", a: 0},
{o: 63.893, f: 90.147, l: "2", a: 1},
{o: 90.147, f: 99.32, l: "1", a: 0},
{o: 99.32, f: 114.32, l: "4", a: 1},
{o: 114.32, f: 123.067, l: "1", a: 0},
{o: 123.067, f: 131.08, l: "3", a: 1},
{o: 131.08, f: 150.373, l: "2", a: 0},
{o: 150.373, f: 212.693, l: "1", a: 1},
{o: 212.693, f: 229.867, l: "6", a: 0},
{o: 229.867, f: 252.947, l: "4", a: 1},
{o: 252.947, f: 262.747, l: "3", a: 0},
{o: 262.747, f: 269.973, l: "8", a: 1},
{o: 269.973, f: 306.16, l: "2", a: 0},
{o: 306.16, f: 315.987, l: "3", a: 1},
{o: 315.987, f: 347.8, l: "5", a: 0}],
[{o: 0, f: 18.625, l: "a", a: 0},
{o: 18.625, f: 68.54, l: "b", a: 1},
{o: 68.54, f: 90.145, l: "c", a: 0},
{o: 90.145, f: 137.08, l: "b", a: 1},
{o: 137.08, f: 198.17, l: "d", a: 0},
{o: 198.17, f: 248.085, l: "b", a: 1},
{o: 248.085, f: 269.69, l: "c", a: 0},
{o: 269.69, f: 317.37, l: "b", a: 1},
{o: 317.37, f: 347.915, l: "e", a: 0}],
[{o: 0, f: 12.388, l: "n1", a: 0},
{o: 12.388, f: 23.766, l: "A", a: 1},
{o: 23.766, f: 35.236, l: "A", a: 0},
{o: 35.236, f: 46.602, l: "A", a: 1},
{o: 46.602, f: 57.702, l: "A", a: 0},
{o: 57.702, f: 65.538, l: "n2", a: 1},
{o: 65.538, f: 90.999, l: "B", a: 0},
{o: 90.999, f: 102.516, l: "A", a: 1},
{o: 102.516, f: 113.592, l: "A", a: 0},
{o: 113.592, f: 132.133, l: "n4", a: 1},
{o: 132.133, f: 156.967, l: "B", a: 0},
{o: 156.967, f: 168.124, l: "A", a: 1},
{o: 168.124, f: 201.874, l: "n6", a: 0},
{o: 201.874, f: 212.695, l: "A", a: 1},
{o: 212.695, f: 223.295, l: "A", a: 0},
{o: 223.295, f: 233.906, l: "A", a: 1},
{o: 233.906, f: 244.495, l: "A", a: 0},
{o: 244.495, f: 254.943, l: "A", a: 1},
{o: 254.943, f: 282.471, l: "n7", a: 0},
{o: 282.471, f: 303.369, l: "B", a: 1},
{o: 303.369, f: 347.788, l: "n8", a: 0}],
[{o: 0, f: 0.136, l: "I", a: 0},
{o: 0.136, f: 7.888, l: "H", a: 1},
{o: 7.888, f: 327.312, l: "A", a: 0},
{o: 327.312, f: 342.456, l: "G", a: 1},
{o: 342.456, f: 347.82, l: "H", a: 0},
{o: 347.82, f: 347.933, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001307.ogg";

var artist = "The Dulcets";

var track = "Plunge";
