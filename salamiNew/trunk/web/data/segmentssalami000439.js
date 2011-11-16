var data = [
[{o: 0.372, f: 23.514, l: "A", a: 0},
{o: 23.514, f: 40.05, l: "B", a: 1},
{o: 40.05, f: 48.414, l: "A", a: 0},
{o: 48.414, f: 64.99, l: "B", a: 1},
{o: 64.99, f: 73.422, l: "A", a: 0},
{o: 73.422, f: 92.663, l: "C", a: 1},
{o: 92.663, f: 101.098, l: "A", a: 0},
{o: 101.098, f: 118.003, l: "B", a: 1},
{o: 118.003, f: 126.538, l: "A", a: 0},
{o: 126.538, f: 143.578, l: "B", a: 1},
{o: 143.578, f: 152.082, l: "A", a: 0},
{o: 152.082, f: 168.892, l: "B", a: 1},
{o: 168.892, f: 177.402, l: "A", a: 0},
{o: 177.402, f: 211.984, l: "C", a: 1}],
[{o: 0.224, f: 23.148, l: "B", a: 0},
{o: 23.148, f: 48.136, l: "A", a: 1},
{o: 48.136, f: 65.228, l: "A", a: 0},
{o: 65.228, f: 75.212, l: "A", a: 1},
{o: 75.212, f: 92.3, l: "A", a: 0},
{o: 92.3, f: 109.644, l: "A", a: 1},
{o: 109.644, f: 126.72, l: "A", a: 0},
{o: 126.72, f: 143.188, l: "A", a: 1},
{o: 143.188, f: 151.724, l: "D", a: 0},
{o: 151.724, f: 166.404, l: "C", a: 1},
{o: 166.404, f: 182.964, l: "C", a: 0},
{o: 182.964, f: 211.772, l: "C", a: 1}],
[{o: 0.224, f: 23.148, l: "E", a: 0},
{o: 23.148, f: 48.136, l: "A", a: 1},
{o: 48.136, f: 65.228, l: "A", a: 0},
{o: 65.228, f: 75.212, l: "D", a: 1},
{o: 75.212, f: 92.3, l: "B", a: 0},
{o: 92.3, f: 109.644, l: "B", a: 1},
{o: 109.644, f: 126.72, l: "B", a: 0},
{o: 126.72, f: 143.188, l: "D", a: 1},
{o: 143.188, f: 151.724, l: "F", a: 0},
{o: 151.724, f: 166.404, l: "C", a: 1},
{o: 166.404, f: 182.964, l: "C", a: 0},
{o: 182.964, f: 211.772, l: "G", a: 1}],
[{o: 0.413, f: 5.387, l: "8", a: 0},
{o: 5.387, f: 23.893, l: "1", a: 1},
{o: 23.893, f: 31.12, l: "7", a: 0},
{o: 31.12, f: 43.653, l: "1", a: 1},
{o: 43.653, f: 48.347, l: "2", a: 0},
{o: 48.347, f: 58.72, l: "3", a: 1},
{o: 58.72, f: 68.627, l: "1", a: 0},
{o: 68.627, f: 87.16, l: "2", a: 1},
{o: 87.16, f: 96.813, l: "1", a: 0},
{o: 96.813, f: 114.2, l: "2", a: 1},
{o: 114.2, f: 121.667, l: "3", a: 0},
{o: 121.667, f: 128.067, l: "4", a: 1},
{o: 128.067, f: 143.48, l: "6", a: 0},
{o: 143.48, f: 152.52, l: "4", a: 1},
{o: 152.52, f: 172.547, l: "3", a: 0},
{o: 172.547, f: 177.907, l: "4", a: 1},
{o: 177.907, f: 211.8, l: "5", a: 0}],
[{o: 0, f: 13.41, l: "a", a: 0},
{o: 13.41, f: 32.78, l: "b", a: 1},
{o: 32.78, f: 59.6, l: "b", a: 0},
{o: 59.6, f: 81.205, l: "b", a: 1},
{o: 81.205, f: 90.145, l: "c", a: 0},
{o: 90.145, f: 113.985, l: "b", a: 1},
{o: 113.985, f: 135.59, l: "b", a: 0},
{o: 135.59, f: 144.53, l: "c", a: 1},
{o: 144.53, f: 160.175, l: "b", a: 0},
{o: 160.175, f: 181.78, l: "b", a: 1},
{o: 181.78, f: 190.72, l: "c", a: 0},
{o: 190.72, f: 211.58, l: "b", a: 1}],
[{o: 0, f: 13.212, l: "n1", a: 0},
{o: 13.212, f: 27.574, l: "A", a: 1},
{o: 27.574, f: 34.795, l: "D", a: 0},
{o: 34.795, f: 37.918, l: "n2", a: 1},
{o: 37.918, f: 52.535, l: "A", a: 0},
{o: 52.535, f: 69.439, l: "n3", a: 1},
{o: 69.439, f: 77.915, l: "C", a: 0},
{o: 77.915, f: 85.31, l: "C", a: 1},
{o: 85.31, f: 90.465, l: "n5", a: 0},
{o: 90.465, f: 105.221, l: "A", a: 1},
{o: 105.221, f: 115.786, l: "n6", a: 0},
{o: 115.786, f: 130.717, l: "A", a: 1},
{o: 130.717, f: 138.147, l: "D", a: 0},
{o: 138.147, f: 141.351, l: "n7", a: 1},
{o: 141.351, f: 156.224, l: "A", a: 0},
{o: 156.224, f: 166.696, l: "n8", a: 1},
{o: 166.696, f: 181.65, l: "A", a: 0},
{o: 181.65, f: 185.109, l: "n9", a: 1},
{o: 185.109, f: 197.973, l: "B", a: 0},
{o: 197.973, f: 211.812, l: "B", a: 1}],
[{o: 0, f: 0.136, l: "E", a: 0},
{o: 0.136, f: 22.912, l: "D", a: 1},
{o: 22.912, f: 79.452, l: "B", a: 0},
{o: 79.452, f: 101.524, l: "D", a: 1},
{o: 101.524, f: 179.748, l: "B", a: 0},
{o: 179.748, f: 211.844, l: "C", a: 1},
{o: 211.844, f: 211.907, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000439.ogg";

var artist = "Rich Whiteley Band";

var track = "Carolina ";