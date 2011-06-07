var data = [
[{o: 0.078, f: 32.068, l: "A", a: 0},
{o: 32.068, f: 72.09, l: "A", a: 1},
{o: 72.09, f: 84.081, l: "B", a: 0},
{o: 84.081, f: 112.078, l: "A", a: 1},
{o: 112.078, f: 128.094, l: "B", a: 0},
{o: 128.094, f: 143.098, l: "A", a: 1},
{o: 143.098, f: 175.098, l: "A", a: 0},
{o: 175.098, f: 191.968, l: "B", a: 1}],
[{o: 0.012, f: 7.508, l: "A", a: 0},
{o: 7.508, f: 15.508, l: "A", a: 1},
{o: 15.508, f: 24.012, l: "A", a: 0},
{o: 24.012, f: 35.508, l: "C", a: 1},
{o: 35.508, f: 46.512, l: "C", a: 0},
{o: 46.512, f: 57.508, l: "C", a: 1},
{o: 57.508, f: 68.012, l: "C", a: 0},
{o: 68.012, f: 84.016, l: "C", a: 1},
{o: 84.016, f: 98.512, l: "C", a: 0},
{o: 98.512, f: 112.012, l: "C", a: 1},
{o: 112.012, f: 127.012, l: "C", a: 0},
{o: 127.012, f: 142.26, l: "B", a: 1},
{o: 142.26, f: 150.76, l: "C", a: 0},
{o: 150.76, f: 158.256, l: "C", a: 1},
{o: 158.256, f: 171.256, l: "C", a: 0},
{o: 171.256, f: 186.752, l: "C", a: 1}],
[{o: 0.012, f: 7.508, l: "A", a: 0},
{o: 7.508, f: 15.508, l: "A", a: 1},
{o: 15.508, f: 24.012, l: "F", a: 0},
{o: 24.012, f: 35.508, l: "C", a: 1},
{o: 35.508, f: 46.512, l: "C", a: 0},
{o: 46.512, f: 57.508, l: "C", a: 1},
{o: 57.508, f: 68.012, l: "B", a: 0},
{o: 68.012, f: 84.016, l: "E", a: 1},
{o: 84.016, f: 98.512, l: "C", a: 0},
{o: 98.512, f: 112.012, l: "B", a: 1},
{o: 112.012, f: 127.012, l: "E", a: 0},
{o: 127.012, f: 142.26, l: "G", a: 1},
{o: 142.26, f: 150.76, l: "D", a: 0},
{o: 150.76, f: 158.256, l: "D", a: 1},
{o: 158.256, f: 171.256, l: "D", a: 0},
{o: 171.256, f: 186.752, l: "H", a: 1}],
[{o: 0.52, f: 24.267, l: "4", a: 0},
{o: 24.267, f: 55.253, l: "3", a: 1},
{o: 55.253, f: 67.76, l: "1", a: 0},
{o: 67.76, f: 83.267, l: "2", a: 1},
{o: 83.267, f: 111.76, l: "1", a: 0},
{o: 111.76, f: 127.76, l: "2", a: 1},
{o: 127.76, f: 142.013, l: "6", a: 0},
{o: 142.013, f: 157.52, l: "1", a: 1},
{o: 157.52, f: 165.52, l: "7", a: 0},
{o: 165.52, f: 185.013, l: "5", a: 1},
{o: 185.013, f: 191.8, l: "8", a: 0}],
[{o: 0, f: 22.35, l: "a", a: 0},
{o: 22.35, f: 52.895, l: "b", a: 1},
{o: 52.895, f: 75.245, l: "a", a: 0},
{o: 75.245, f: 105.045, l: "b", a: 1},
{o: 105.045, f: 127.395, l: "a", a: 0},
{o: 127.395, f: 151.235, l: "b", a: 1},
{o: 151.235, f: 163.9, l: "c", a: 0},
{o: 163.9, f: 191.465, l: "b", a: 1}],
[{o: 0, f: 1.533, l: "n1", a: 0},
{o: 1.533, f: 53.545, l: "A", a: 1},
{o: 53.545, f: 61.544, l: "n2", a: 0},
{o: 61.544, f: 113.534, l: "A", a: 1},
{o: 113.534, f: 191.75, l: "n3", a: 0}],
[{o: 0, f: 0.012, l: "E", a: 0},
{o: 0.012, f: 130.256, l: "B", a: 1},
{o: 130.256, f: 148.26, l: "D", a: 0},
{o: 148.26, f: 186.812, l: "A", a: 1},
{o: 186.812, f: 191.907, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001361.ogg";
