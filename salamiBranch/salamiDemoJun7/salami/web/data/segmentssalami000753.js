var data = [
[{o: 0.036, f: 35.638, l: "A", a: 0},
{o: 35.638, f: 60.468, l: "B", a: 1},
{o: 60.468, f: 85.102, l: "C", a: 0},
{o: 85.102, f: 97.591, l: "D", a: 1},
{o: 97.591, f: 134.792, l: "B", a: 0},
{o: 134.792, f: 159.452, l: "C", a: 1},
{o: 159.452, f: 181.351, l: "E", a: 0},
{o: 181.351, f: 193.382, l: "F", a: 1},
{o: 193.382, f: 229.68, l: "C", a: 0}],
[{o: 0.004, f: 14.696, l: "E", a: 0},
{o: 14.696, f: 29.4, l: "E", a: 1},
{o: 29.4, f: 39.092, l: "E", a: 0},
{o: 39.092, f: 51.108, l: "E", a: 1},
{o: 51.108, f: 59.64, l: "E", a: 0},
{o: 59.64, f: 66.588, l: "D", a: 1},
{o: 66.588, f: 78.164, l: "D", a: 0},
{o: 78.164, f: 90.576, l: "D", a: 1},
{o: 90.576, f: 104.524, l: "D", a: 0},
{o: 104.524, f: 116.528, l: "E", a: 1},
{o: 116.528, f: 134.712, l: "E", a: 0},
{o: 134.712, f: 147.88, l: "A", a: 1},
{o: 147.88, f: 159.852, l: "D", a: 0},
{o: 159.852, f: 170.692, l: "B", a: 1},
{o: 170.692, f: 180.396, l: "C", a: 0},
{o: 180.396, f: 197.812, l: "A", a: 1},
{o: 197.812, f: 211.928, l: "D", a: 0},
{o: 211.928, f: 224.668, l: "F", a: 1},
{o: 224.668, f: 229.484, l: "B", a: 0}],
[{o: 0.004, f: 14.696, l: "E", a: 0},
{o: 14.696, f: 29.4, l: "E", a: 1},
{o: 29.4, f: 39.092, l: "E", a: 0},
{o: 39.092, f: 51.108, l: "C", a: 1},
{o: 51.108, f: 59.64, l: "C", a: 0},
{o: 59.64, f: 66.588, l: "D", a: 1},
{o: 66.588, f: 78.164, l: "D", a: 0},
{o: 78.164, f: 90.576, l: "B", a: 1},
{o: 90.576, f: 104.524, l: "B", a: 0},
{o: 104.524, f: 116.528, l: "A", a: 1},
{o: 116.528, f: 134.712, l: "A", a: 0},
{o: 134.712, f: 147.88, l: "F", a: 1},
{o: 147.88, f: 159.852, l: "D", a: 0},
{o: 159.852, f: 170.692, l: "G", a: 1},
{o: 170.692, f: 180.396, l: "H", a: 0},
{o: 180.396, f: 197.812, l: "I", a: 1},
{o: 197.812, f: 211.928, l: "D", a: 0},
{o: 211.928, f: 224.668, l: "J", a: 1},
{o: 224.668, f: 229.484, l: "K", a: 0}],
[{o: 0.547, f: 3.413, l: "8", a: 0},
{o: 3.413, f: 11.04, l: "3", a: 1},
{o: 11.04, f: 15.653, l: "4", a: 0},
{o: 15.653, f: 60.213, l: "2", a: 1},
{o: 60.213, f: 84.973, l: "1", a: 0},
{o: 84.973, f: 99.293, l: "4", a: 1},
{o: 99.293, f: 103.56, l: "3", a: 0},
{o: 103.56, f: 136.067, l: "2", a: 1},
{o: 136.067, f: 159.293, l: "1", a: 0},
{o: 159.293, f: 175.16, l: "5", a: 1},
{o: 175.16, f: 180.587, l: "3", a: 0},
{o: 180.587, f: 218.147, l: "1", a: 1},
{o: 218.147, f: 223.693, l: "7", a: 0},
{o: 223.693, f: 229.48, l: "6", a: 1}],
[{o: 0, f: 22.35, l: "a", a: 0},
{o: 22.35, f: 39.485, l: "b", a: 1},
{o: 39.485, f: 88.655, l: "c", a: 0},
{o: 88.655, f: 99.085, l: "d", a: 1},
{o: 99.085, f: 113.985, l: "b", a: 0},
{o: 113.985, f: 166.135, l: "c", a: 1},
{o: 166.135, f: 178.055, l: "d", a: 0},
{o: 178.055, f: 228.715, l: "c", a: 1}],
[{o: 0, f: 14.338, l: "n1", a: 0},
{o: 14.338, f: 26.738, l: "A", a: 1},
{o: 26.738, f: 36.397, l: "n2", a: 0},
{o: 36.397, f: 48.832, l: "A", a: 1},
{o: 48.832, f: 61.208, l: "A", a: 0},
{o: 61.208, f: 85.96, l: "B", a: 1},
{o: 85.96, f: 98.36, l: "A", a: 0},
{o: 98.36, f: 110.748, l: "A", a: 1},
{o: 110.748, f: 123.135, l: "A", a: 0},
{o: 123.135, f: 135.523, l: "A", a: 1},
{o: 135.523, f: 160.287, l: "B", a: 0},
{o: 160.287, f: 194.363, l: "n3", a: 1},
{o: 194.363, f: 219.162, l: "B", a: 0},
{o: 219.162, f: 229.274, l: "n4", a: 1}],
[{o: 0, f: 0.004, l: "E", a: 0},
{o: 0.004, f: 5.9, l: "D", a: 1},
{o: 5.9, f: 16.832, l: "B", a: 0},
{o: 16.832, f: 62.532, l: "C", a: 1},
{o: 62.532, f: 88.248, l: "D", a: 0},
{o: 88.248, f: 134.904, l: "C", a: 1},
{o: 134.904, f: 229.544, l: "D", a: 0},
{o: 229.544, f: 229.587, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000753.ogg";
