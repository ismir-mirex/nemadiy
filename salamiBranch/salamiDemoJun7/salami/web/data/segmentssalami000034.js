var data = [
[{o: 0.327, f: 11.839, l: "A", a: 0},
{o: 11.839, f: 26.581, l: "B", a: 1},
{o: 26.581, f: 37.847, l: "A", a: 0},
{o: 37.847, f: 52.348, l: "B", a: 1},
{o: 52.348, f: 63.554, l: "A", a: 0},
{o: 63.554, f: 78.133, l: "B", a: 1},
{o: 78.133, f: 89.294, l: "A", a: 0},
{o: 89.294, f: 103.845, l: "B", a: 1},
{o: 103.845, f: 115.157, l: "A", a: 0},
{o: 115.157, f: 129.979, l: "B", a: 1},
{o: 129.979, f: 141.385, l: "A", a: 0},
{o: 141.385, f: 156.164, l: "B", a: 1},
{o: 156.164, f: 170.434, l: "A", a: 0}],
[{o: 0.092, f: 4.676, l: "A", a: 0},
{o: 4.676, f: 13.312, l: "D", a: 1},
{o: 13.312, f: 25.792, l: "D", a: 0},
{o: 25.792, f: 37.44, l: "E", a: 1},
{o: 37.44, f: 45.86, l: "D", a: 0},
{o: 45.86, f: 52.352, l: "D", a: 1},
{o: 52.352, f: 64.352, l: "D", a: 0},
{o: 64.352, f: 72.016, l: "E", a: 1},
{o: 72.016, f: 80.608, l: "D", a: 0},
{o: 80.608, f: 92.232, l: "D", a: 1},
{o: 92.232, f: 103.764, l: "E", a: 0},
{o: 103.764, f: 111.576, l: "E", a: 1},
{o: 111.576, f: 116.588, l: "D", a: 0},
{o: 116.588, f: 129.168, l: "D", a: 1},
{o: 129.168, f: 142.832, l: "E", a: 0},
{o: 142.832, f: 156.172, l: "D", a: 1},
{o: 156.172, f: 168.908, l: "E", a: 0}],
[{o: 0.092, f: 4.676, l: "G", a: 0},
{o: 4.676, f: 13.312, l: "D", a: 1},
{o: 13.312, f: 25.792, l: "A", a: 0},
{o: 25.792, f: 37.44, l: "E", a: 1},
{o: 37.44, f: 45.86, l: "A", a: 0},
{o: 45.86, f: 52.352, l: "H", a: 1},
{o: 52.352, f: 64.352, l: "C", a: 0},
{o: 64.352, f: 72.016, l: "B", a: 1},
{o: 72.016, f: 80.608, l: "A", a: 0},
{o: 80.608, f: 92.232, l: "C", a: 1},
{o: 92.232, f: 103.764, l: "B", a: 0},
{o: 103.764, f: 111.576, l: "E", a: 1},
{o: 111.576, f: 116.588, l: "D", a: 0},
{o: 116.588, f: 129.168, l: "A", a: 1},
{o: 129.168, f: 142.832, l: "F", a: 0},
{o: 142.832, f: 156.172, l: "I", a: 1},
{o: 156.172, f: 168.908, l: "F", a: 0}],
[{o: 0.387, f: 1.293, l: "8", a: 0},
{o: 1.293, f: 11.373, l: "1", a: 1},
{o: 11.373, f: 16.867, l: "4", a: 0},
{o: 16.867, f: 27.107, l: "2", a: 1},
{o: 27.107, f: 37.693, l: "1", a: 0},
{o: 37.693, f: 52.533, l: "2", a: 1},
{o: 52.533, f: 63.467, l: "1", a: 0},
{o: 63.467, f: 69.68, l: "3", a: 1},
{o: 69.68, f: 78.32, l: "2", a: 0},
{o: 78.32, f: 88.76, l: "1", a: 1},
{o: 88.76, f: 104.32, l: "3", a: 0},
{o: 104.32, f: 114.613, l: "1", a: 1},
{o: 114.613, f: 119.787, l: "4", a: 0},
{o: 119.787, f: 130.507, l: "6", a: 1},
{o: 130.507, f: 141.24, l: "1", a: 0},
{o: 141.24, f: 156.36, l: "5", a: 1},
{o: 156.36, f: 166.52, l: "1", a: 0},
{o: 166.52, f: 170.28, l: "7", a: 1}],
[{o: 0, f: 13.41, l: "a", a: 0},
{o: 13.41, f: 31.29, l: "b", a: 1},
{o: 31.29, f: 52.895, l: "c", a: 0},
{o: 52.895, f: 66.305, l: "a", a: 1},
{o: 66.305, f: 83.44, l: "b", a: 0},
{o: 83.44, f: 104.3, l: "c", a: 1},
{o: 104.3, f: 116.965, l: "a", a: 0},
{o: 116.965, f: 134.1, l: "b", a: 1},
{o: 134.1, f: 155.705, l: "d", a: 0},
{o: 155.705, f: 169.86, l: "a", a: 1}],
[{o: 0, f: 9.694, l: "n1", a: 0},
{o: 9.694, f: 35.41, l: "A", a: 1},
{o: 35.41, f: 61.521, l: "A", a: 0},
{o: 61.521, f: 87.261, l: "A", a: 1},
{o: 87.261, f: 113.035, l: "A", a: 0},
{o: 113.035, f: 138.971, l: "A", a: 1},
{o: 138.971, f: 165.373, l: "A", a: 0},
{o: 165.373, f: 170.202, l: "n2", a: 1}],
[{o: 0, f: 0.092, l: "D", a: 0},
{o: 0.092, f: 0.092, l: "B", a: 1},
{o: 0.092, f: 12.94, l: "A", a: 0},
{o: 12.94, f: 26.172, l: "C", a: 1},
{o: 26.172, f: 38.92, l: "A", a: 0},
{o: 38.92, f: 51.996, l: "C", a: 1},
{o: 51.996, f: 64.704, l: "A", a: 0},
{o: 64.704, f: 77.776, l: "C", a: 1},
{o: 77.776, f: 90.384, l: "A", a: 0},
{o: 90.384, f: 103.424, l: "C", a: 1},
{o: 103.424, f: 116.212, l: "A", a: 0},
{o: 116.212, f: 129.552, l: "C", a: 1},
{o: 129.552, f: 142.46, l: "A", a: 0},
{o: 142.46, f: 155.796, l: "C", a: 1},
{o: 155.796, f: 168.908, l: "A", a: 0},
{o: 168.908, f: 170.424, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000034.ogg";
