var data = [
[{o: 0.296, f: 7.953, l: "N", a: 0},
{o: 7.953, f: 25.768, l: "A", a: 1},
{o: 25.768, f: 41.697, l: "B", a: 0},
{o: 41.697, f: 69.335, l: "A'", a: 1},
{o: 69.335, f: 85.295, l: "B", a: 0},
{o: 85.295, f: 95.164, l: "A''", a: 1},
{o: 95.164, f: 113.064, l: "C", a: 0},
{o: 113.064, f: 128.981, l: "B", a: 1},
{o: 128.981, f: 156.719, l: "A'", a: 0},
{o: 156.719, f: 172.679, l: "B", a: 1},
{o: 172.679, f: 188.389, l: "A''", a: 0}],
[{o: 0.236, f: 9.904, l: "B", a: 0},
{o: 9.904, f: 21.772, l: "C", a: 1},
{o: 21.772, f: 35.228, l: "C", a: 0},
{o: 35.228, f: 52.032, l: "C", a: 1},
{o: 52.032, f: 65.352, l: "C", a: 0},
{o: 65.352, f: 77.84, l: "C", a: 1},
{o: 77.84, f: 96.108, l: "C", a: 0},
{o: 96.108, f: 112.516, l: "A", a: 1},
{o: 112.516, f: 132.504, l: "A", a: 0},
{o: 132.504, f: 143.836, l: "D", a: 1},
{o: 143.836, f: 155.66, l: "E", a: 0},
{o: 155.66, f: 174.608, l: "A", a: 1},
{o: 174.608, f: 184.732, l: "F", a: 0}],
[{o: 0.236, f: 9.904, l: "B", a: 0},
{o: 9.904, f: 21.772, l: "C", a: 1},
{o: 21.772, f: 35.228, l: "D", a: 0},
{o: 35.228, f: 52.032, l: "C", a: 1},
{o: 52.032, f: 65.352, l: "C", a: 0},
{o: 65.352, f: 77.84, l: "E", a: 1},
{o: 77.84, f: 96.108, l: "C", a: 0},
{o: 96.108, f: 112.516, l: "F", a: 1},
{o: 112.516, f: 132.504, l: "A", a: 0},
{o: 132.504, f: 143.836, l: "G", a: 1},
{o: 143.836, f: 155.66, l: "H", a: 0},
{o: 155.66, f: 174.608, l: "A", a: 1},
{o: 174.608, f: 184.732, l: "I", a: 0}],
[{o: 0.6, f: 5.693, l: "8", a: 0},
{o: 5.693, f: 24.48, l: "1", a: 1},
{o: 24.48, f: 33, l: "2", a: 0},
{o: 33, f: 39.933, l: "4", a: 1},
{o: 39.933, f: 68.053, l: "1", a: 0},
{o: 68.053, f: 76.12, l: "2", a: 1},
{o: 76.12, f: 84.493, l: "4", a: 0},
{o: 84.493, f: 109.307, l: "3", a: 1},
{o: 109.307, f: 119.813, l: "2", a: 0},
{o: 119.813, f: 125.307, l: "5", a: 1},
{o: 125.307, f: 132.76, l: "3", a: 0},
{o: 132.76, f: 154.427, l: "1", a: 1},
{o: 154.427, f: 164.48, l: "2", a: 0},
{o: 164.48, f: 171.893, l: "5", a: 1},
{o: 171.893, f: 177.347, l: "3", a: 0},
{o: 177.347, f: 182.96, l: "7", a: 1},
{o: 182.96, f: 188.253, l: "6", a: 0}],
[{o: 0, f: 34.27, l: "a", a: 0},
{o: 34.27, f: 63.325, l: "b", a: 1},
{o: 63.325, f: 78.225, l: "c", a: 0},
{o: 78.225, f: 106.535, l: "b", a: 1},
{o: 106.535, f: 122.925, l: "c", a: 0},
{o: 122.925, f: 150.49, l: "b", a: 1},
{o: 150.49, f: 187.74, l: "d", a: 0}],
[{o: 0, f: 14.385, l: "n1", a: 0},
{o: 14.385, f: 58.003, l: "A", a: 1},
{o: 58.003, f: 101.622, l: "A", a: 0},
{o: 101.622, f: 188.407, l: "n2", a: 1}],
[{o: 0, f: 0.16, l: "H", a: 0},
{o: 0.16, f: 0.244, l: "E", a: 1},
{o: 0.244, f: 22.396, l: "A", a: 0},
{o: 22.396, f: 30.1, l: "F", a: 1},
{o: 30.1, f: 40.012, l: "G", a: 0},
{o: 40.012, f: 73.676, l: "A", a: 1},
{o: 73.676, f: 83.932, l: "G", a: 0},
{o: 83.932, f: 117.416, l: "A", a: 1},
{o: 117.416, f: 124.708, l: "G", a: 0},
{o: 124.708, f: 161.108, l: "A", a: 1},
{o: 161.108, f: 171.828, l: "G", a: 0},
{o: 171.828, f: 177.244, l: "A", a: 1},
{o: 177.244, f: 184.956, l: "B", a: 0},
{o: 184.956, f: 188.37, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000549.ogg";
