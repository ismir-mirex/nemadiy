var data = [
[{o: 0, f: 5.782, l: "Y", a: 0},
{o: 5.782, f: 34.837, l: "A", a: 1},
{o: 34.837, f: 62.321, l: "A", a: 0},
{o: 62.321, f: 89.121, l: "A", a: 1},
{o: 89.121, f: 140.13, l: "D", a: 0},
{o: 140.13, f: 176.248, l: "G", a: 1}],
[{o: 0.012, f: 13.376, l: "A", a: 0},
{o: 13.376, f: 27.772, l: "A", a: 1},
{o: 27.772, f: 38.864, l: "A", a: 0},
{o: 38.864, f: 52.548, l: "B", a: 1},
{o: 52.548, f: 62.224, l: "B", a: 0},
{o: 62.224, f: 72.408, l: "B", a: 1},
{o: 72.408, f: 89.672, l: "B", a: 0},
{o: 89.672, f: 105.468, l: "B", a: 1},
{o: 105.468, f: 113.956, l: "B", a: 0},
{o: 113.956, f: 126.324, l: "C", a: 1},
{o: 126.324, f: 138.86, l: "B", a: 0},
{o: 138.86, f: 152.232, l: "B", a: 1},
{o: 152.232, f: 158.376, l: "B", a: 0},
{o: 158.376, f: 175.824, l: "B", a: 1}],
[{o: 0.012, f: 13.376, l: "A", a: 0},
{o: 13.376, f: 27.772, l: "A", a: 1},
{o: 27.772, f: 38.864, l: "A", a: 0},
{o: 38.864, f: 52.548, l: "B", a: 1},
{o: 52.548, f: 62.224, l: "B", a: 0},
{o: 62.224, f: 72.408, l: "C", a: 1},
{o: 72.408, f: 89.672, l: "C", a: 0},
{o: 89.672, f: 105.468, l: "E", a: 1},
{o: 105.468, f: 113.956, l: "F", a: 0},
{o: 113.956, f: 126.324, l: "G", a: 1},
{o: 126.324, f: 138.86, l: "D", a: 0},
{o: 138.86, f: 152.232, l: "D", a: 1},
{o: 152.232, f: 158.376, l: "D", a: 0},
{o: 158.376, f: 175.824, l: "D", a: 1}],
[{o: 0.92, f: 34.387, l: "4", a: 0},
{o: 34.387, f: 44.707, l: "2", a: 1},
{o: 44.707, f: 56.307, l: "1", a: 0},
{o: 56.307, f: 71.373, l: "2", a: 1},
{o: 71.373, f: 89.373, l: "1", a: 0},
{o: 89.373, f: 104.44, l: "6", a: 1},
{o: 104.44, f: 119.08, l: "7", a: 0},
{o: 119.08, f: 135.72, l: "5", a: 1},
{o: 135.72, f: 171.387, l: "3", a: 0},
{o: 171.387, f: 175.187, l: "8", a: 1}],
[{o: 0, f: 17.135, l: "a", a: 0},
{o: 17.135, f: 29.055, l: "b", a: 1},
{o: 29.055, f: 45.445, l: "a", a: 0},
{o: 45.445, f: 56.62, l: "c", a: 1},
{o: 56.62, f: 73.755, l: "a", a: 0},
{o: 73.755, f: 83.44, l: "b", a: 1},
{o: 83.44, f: 100.575, l: "a", a: 0},
{o: 100.575, f: 118.455, l: "d", a: 1},
{o: 118.455, f: 129.63, l: "e", a: 0},
{o: 129.63, f: 140.805, l: "e", a: 1},
{o: 140.805, f: 157.94, l: "f", a: 0},
{o: 157.94, f: 175.82, l: "f", a: 1}],
[{o: 0, f: 0.43, l: "n1", a: 0},
{o: 0.43, f: 13.003, l: "A", a: 1},
{o: 13.003, f: 28.561, l: "n2", a: 0},
{o: 28.561, f: 45.116, l: "A", a: 1},
{o: 45.116, f: 85.159, l: "n3", a: 0},
{o: 85.159, f: 105.047, l: "A", a: 1},
{o: 105.047, f: 120.163, l: "n4", a: 0},
{o: 120.163, f: 132.005, l: "A", a: 1},
{o: 132.005, f: 139.355, l: "n5", a: 0},
{o: 139.355, f: 155.574, l: "A", a: 1},
{o: 155.574, f: 168.217, l: "A", a: 0},
{o: 168.217, f: 176.147, l: "n7", a: 1}],
[{o: 0, f: 0.012, l: "E", a: 0},
{o: 0.012, f: 33.32, l: "B", a: 1},
{o: 33.32, f: 89.06, l: "A", a: 0},
{o: 89.06, f: 138.86, l: "C", a: 1},
{o: 138.86, f: 175.824, l: "D", a: 0},
{o: 175.824, f: 176.16, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001499.ogg";
