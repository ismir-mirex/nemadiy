var data = [
[{o: 0.209, f: 34.2, l: "A", a: 0},
{o: 34.2, f: 67.608, l: "A", a: 1},
{o: 67.608, f: 99.352, l: "B", a: 0},
{o: 99.352, f: 136.295, l: "B", a: 1}],
[{o: 0.204, f: 17.348, l: "E", a: 0},
{o: 17.348, f: 32.42, l: "B", a: 1},
{o: 32.42, f: 38.488, l: "C", a: 0},
{o: 38.488, f: 50.928, l: "E", a: 1},
{o: 50.928, f: 66.616, l: "B", a: 0},
{o: 66.616, f: 73.672, l: "D", a: 1},
{o: 73.672, f: 84.256, l: "B", a: 0},
{o: 84.256, f: 98.528, l: "A", a: 1},
{o: 98.528, f: 104.544, l: "D", a: 0},
{o: 104.544, f: 115.228, l: "B", a: 1},
{o: 115.228, f: 132.844, l: "A", a: 0}],
[{o: 0.204, f: 17.348, l: "E", a: 0},
{o: 17.348, f: 32.42, l: "B", a: 1},
{o: 32.42, f: 38.488, l: "F", a: 0},
{o: 38.488, f: 50.928, l: "G", a: 1},
{o: 50.928, f: 66.616, l: "B", a: 0},
{o: 66.616, f: 73.672, l: "D", a: 1},
{o: 73.672, f: 84.256, l: "C", a: 0},
{o: 84.256, f: 98.528, l: "A", a: 1},
{o: 98.528, f: 104.544, l: "D", a: 0},
{o: 104.544, f: 115.228, l: "C", a: 1},
{o: 115.228, f: 132.844, l: "A", a: 0}],
[{o: 0.547, f: 4.653, l: "8", a: 0},
{o: 4.653, f: 13.733, l: "4", a: 1},
{o: 13.733, f: 30.467, l: "1", a: 0},
{o: 30.467, f: 38.293, l: "6", a: 1},
{o: 38.293, f: 47.96, l: "4", a: 0},
{o: 47.96, f: 63.4, l: "1", a: 1},
{o: 63.4, f: 71.747, l: "5", a: 0},
{o: 71.747, f: 84.36, l: "3", a: 1},
{o: 84.36, f: 95.253, l: "2", a: 0},
{o: 95.253, f: 103.867, l: "5", a: 1},
{o: 103.867, f: 115.493, l: "3", a: 0},
{o: 115.493, f: 131.533, l: "2", a: 1},
{o: 131.533, f: 136.173, l: "7", a: 0}],
[{o: 0, f: 32.78, l: "a", a: 0},
{o: 32.78, f: 66.305, l: "a", a: 1},
{o: 66.305, f: 99.085, l: "b", a: 0},
{o: 99.085, f: 135.59, l: "b", a: 1}],
[{o: 0, f: 3.843, l: "n1", a: 0},
{o: 3.843, f: 28.444, l: "B", a: 1},
{o: 28.444, f: 37.535, l: "n2", a: 0},
{o: 37.535, f: 67.512, l: "B", a: 1},
{o: 67.512, f: 99.556, l: "A", a: 0},
{o: 99.556, f: 129.625, l: "A", a: 1},
{o: 129.625, f: 136.022, l: "n5", a: 0}],
[{o: 0, f: 0.204, l: "F", a: 0},
{o: 0.204, f: 33.264, l: "B", a: 1},
{o: 33.264, f: 81.144, l: "E", a: 0},
{o: 81.144, f: 132.844, l: "A", a: 1},
{o: 132.844, f: 136.282, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000180.ogg";

var artist = "Compilations";

var track = "La Poste Lute version and harpsicho 1";
