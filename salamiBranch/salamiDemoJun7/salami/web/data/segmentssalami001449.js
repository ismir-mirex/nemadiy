var data = [
[{o: 0.093, f: 24.021, l: "A", a: 0},
{o: 24.021, f: 38.048, l: "B", a: 1},
{o: 38.048, f: 65.655, l: "C", a: 0},
{o: 65.655, f: 86.411, l: "B", a: 1},
{o: 86.411, f: 114.037, l: "C", a: 0},
{o: 114.037, f: 141.67, l: "B", a: 1},
{o: 141.67, f: 169.305, l: "D", a: 0},
{o: 169.305, f: 196.932, l: "C", a: 1},
{o: 196.932, f: 224.602, l: "B", a: 0},
{o: 224.602, f: 258.139, l: "B", a: 1}],
[{o: 0.028, f: 13.34, l: "A", a: 0},
{o: 13.34, f: 23.72, l: "B", a: 1},
{o: 23.72, f: 37.544, l: "D", a: 0},
{o: 37.544, f: 47.488, l: "D", a: 1},
{o: 47.488, f: 59.156, l: "D", a: 0},
{o: 59.156, f: 77.72, l: "D", a: 1},
{o: 77.72, f: 95.86, l: "D", a: 0},
{o: 95.86, f: 118.736, l: "D", a: 1},
{o: 118.736, f: 133.424, l: "D", a: 0},
{o: 133.424, f: 141.604, l: "D", a: 1},
{o: 141.604, f: 155.44, l: "C", a: 0},
{o: 155.44, f: 171.428, l: "D", a: 1},
{o: 171.428, f: 192.148, l: "D", a: 0},
{o: 192.148, f: 203.372, l: "D", a: 1},
{o: 203.372, f: 215.056, l: "E", a: 0},
{o: 215.056, f: 230.596, l: "F", a: 1},
{o: 230.596, f: 246.588, l: "D", a: 0},
{o: 246.588, f: 257.836, l: "G", a: 1}],
[{o: 0.028, f: 13.34, l: "E", a: 0},
{o: 13.34, f: 23.72, l: "F", a: 1},
{o: 23.72, f: 37.544, l: "G", a: 0},
{o: 37.544, f: 47.488, l: "C", a: 1},
{o: 47.488, f: 59.156, l: "C", a: 0},
{o: 59.156, f: 77.72, l: "B", a: 1},
{o: 77.72, f: 95.86, l: "B", a: 0},
{o: 95.86, f: 118.736, l: "B", a: 1},
{o: 118.736, f: 133.424, l: "A", a: 0},
{o: 133.424, f: 141.604, l: "B", a: 1},
{o: 141.604, f: 155.44, l: "H", a: 0},
{o: 155.44, f: 171.428, l: "D", a: 1},
{o: 171.428, f: 192.148, l: "D", a: 0},
{o: 192.148, f: 203.372, l: "D", a: 1},
{o: 203.372, f: 215.056, l: "I", a: 0},
{o: 215.056, f: 230.596, l: "J", a: 1},
{o: 230.596, f: 246.588, l: "A", a: 0},
{o: 246.588, f: 257.836, l: "K", a: 1}],
[{o: 0.44, f: 2.787, l: "8", a: 0},
{o: 2.787, f: 11, l: "4", a: 1},
{o: 11, f: 17.053, l: "7", a: 0},
{o: 17.053, f: 23.96, l: "5", a: 1},
{o: 23.96, f: 63.693, l: "1", a: 0},
{o: 63.693, f: 69.293, l: "2", a: 1},
{o: 69.293, f: 111.613, l: "1", a: 0},
{o: 111.613, f: 117.667, l: "2", a: 1},
{o: 117.667, f: 126.307, l: "1", a: 0},
{o: 126.307, f: 131.48, l: "2", a: 1},
{o: 131.48, f: 169.48, l: "1", a: 0},
{o: 169.48, f: 199.267, l: "3", a: 1},
{o: 199.267, f: 223.053, l: "1", a: 0},
{o: 223.053, f: 228.227, l: "2", a: 1},
{o: 228.227, f: 236.867, l: "1", a: 0},
{o: 236.867, f: 242.067, l: "2", a: 1},
{o: 242.067, f: 251.133, l: "1", a: 0},
{o: 251.133, f: 257.4, l: "6", a: 1}],
[{o: 0, f: 32.78, l: "a", a: 0},
{o: 32.78, f: 81.205, l: "b", a: 1},
{o: 81.205, f: 129.63, l: "b", a: 0},
{o: 129.63, f: 184.015, l: "c", a: 1},
{o: 184.015, f: 198.915, l: "d", a: 0},
{o: 198.915, f: 257.77, l: "c", a: 1}],
[{o: 0, f: 38.011, l: "n1", a: 0},
{o: 38.011, f: 86.39, l: "A", a: 1},
{o: 86.39, f: 134.745, l: "A", a: 0},
{o: 134.745, f: 145.984, l: "n2", a: 1},
{o: 145.984, f: 161.541, l: "B", a: 0},
{o: 161.541, f: 169.285, l: "n3", a: 1},
{o: 169.285, f: 218.105, l: "A", a: 0},
{o: 218.105, f: 233.662, l: "B", a: 1},
{o: 233.662, f: 257.881, l: "n5", a: 0}],
[{o: 0, f: 0.028, l: "F", a: 0},
{o: 0.028, f: 15.748, l: "D", a: 1},
{o: 15.748, f: 146.168, l: "B", a: 0},
{o: 146.168, f: 170.776, l: "E", a: 1},
{o: 170.776, f: 257.188, l: "B", a: 0},
{o: 257.188, f: 258.092, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001449.ogg";
