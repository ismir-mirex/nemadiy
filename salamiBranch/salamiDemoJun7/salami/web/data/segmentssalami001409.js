var data = [
[{o: 0.078, f: 65.327, l: "A", a: 0},
{o: 65.327, f: 118.893, l: "B", a: 1},
{o: 118.893, f: 174.08, l: "B", a: 0},
{o: 174.08, f: 223.313, l: "C", a: 1},
{o: 223.313, f: 271.662, l: "C", a: 0},
{o: 271.662, f: 327.579, l: "B", a: 1},
{o: 327.579, f: 376.906, l: "D", a: 0},
{o: 376.906, f: 454.82, l: "Z", a: 1}],
[{o: 0.004, f: 13.26, l: "A", a: 0},
{o: 13.26, f: 36.228, l: "C", a: 1},
{o: 36.228, f: 62.212, l: "C", a: 0},
{o: 62.212, f: 81.404, l: "C", a: 1},
{o: 81.404, f: 101.228, l: "C", a: 0},
{o: 101.228, f: 113.924, l: "C", a: 1},
{o: 113.924, f: 134.636, l: "C", a: 0},
{o: 134.636, f: 153.504, l: "C", a: 1},
{o: 153.504, f: 178.476, l: "C", a: 0},
{o: 178.476, f: 208.124, l: "C", a: 1},
{o: 208.124, f: 233.66, l: "C", a: 0},
{o: 233.66, f: 262.776, l: "C", a: 1},
{o: 262.776, f: 279.956, l: "C", a: 0},
{o: 279.956, f: 299.088, l: "C", a: 1},
{o: 299.088, f: 323.676, l: "C", a: 0},
{o: 323.676, f: 342.724, l: "C", a: 1},
{o: 342.724, f: 366.48, l: "C", a: 0},
{o: 366.48, f: 377.056, l: "A", a: 1},
{o: 377.056, f: 392.608, l: "C", a: 0},
{o: 392.608, f: 420.74, l: "C", a: 1},
{o: 420.74, f: 433.852, l: "C", a: 0},
{o: 433.852, f: 454.684, l: "C", a: 1}],
[{o: 0.004, f: 13.26, l: "D", a: 0},
{o: 13.26, f: 36.228, l: "C", a: 1},
{o: 36.228, f: 62.212, l: "C", a: 0},
{o: 62.212, f: 81.404, l: "F", a: 1},
{o: 81.404, f: 101.228, l: "F", a: 0},
{o: 101.228, f: 113.924, l: "F", a: 1},
{o: 113.924, f: 134.636, l: "F", a: 0},
{o: 134.636, f: 153.504, l: "F", a: 1},
{o: 153.504, f: 178.476, l: "E", a: 0},
{o: 178.476, f: 208.124, l: "E", a: 1},
{o: 208.124, f: 233.66, l: "F", a: 0},
{o: 233.66, f: 262.776, l: "F", a: 1},
{o: 262.776, f: 279.956, l: "C", a: 0},
{o: 279.956, f: 299.088, l: "G", a: 1},
{o: 299.088, f: 323.676, l: "F", a: 0},
{o: 323.676, f: 342.724, l: "B", a: 1},
{o: 342.724, f: 366.48, l: "B", a: 0},
{o: 366.48, f: 377.056, l: "H", a: 1},
{o: 377.056, f: 392.608, l: "I", a: 0},
{o: 392.608, f: 420.74, l: "A", a: 1},
{o: 420.74, f: 433.852, l: "A", a: 0},
{o: 433.852, f: 454.684, l: "J", a: 1}],
[{o: 0.52, f: 3.64, l: "8", a: 0},
{o: 3.64, f: 15.987, l: "2", a: 1},
{o: 15.987, f: 28.267, l: "1", a: 0},
{o: 28.267, f: 40.48, l: "4", a: 1},
{o: 40.48, f: 50.533, l: "3", a: 0},
{o: 50.533, f: 62.52, l: "4", a: 1},
{o: 62.52, f: 85.747, l: "1", a: 0},
{o: 85.747, f: 99.067, l: "3", a: 1},
{o: 99.067, f: 106.08, l: "6", a: 0},
{o: 106.08, f: 117.093, l: "2", a: 1},
{o: 117.093, f: 123.627, l: "5", a: 0},
{o: 123.627, f: 130.213, l: "4", a: 1},
{o: 130.213, f: 138.48, l: "5", a: 0},
{o: 138.48, f: 153.253, l: "3", a: 1},
{o: 153.253, f: 158.853, l: "6", a: 0},
{o: 158.853, f: 179.227, l: "5", a: 1},
{o: 179.227, f: 185.92, l: "4", a: 0},
{o: 185.92, f: 191.507, l: "5", a: 1},
{o: 191.507, f: 197.627, l: "4", a: 0},
{o: 197.627, f: 207.893, l: "3", a: 1},
{o: 207.893, f: 219.413, l: "2", a: 0},
{o: 219.413, f: 258.427, l: "1", a: 1},
{o: 258.427, f: 267.213, l: "2", a: 0},
{o: 267.213, f: 277.147, l: "1", a: 1},
{o: 277.147, f: 283.333, l: "4", a: 0},
{o: 283.333, f: 290.187, l: "1", a: 1},
{o: 290.187, f: 294.693, l: "4", a: 0},
{o: 294.693, f: 305.44, l: "3", a: 1},
{o: 305.44, f: 312.133, l: "6", a: 0},
{o: 312.133, f: 325.427, l: "2", a: 1},
{o: 325.427, f: 351.92, l: "5", a: 0},
{o: 351.92, f: 361.04, l: "3", a: 1},
{o: 361.04, f: 376.773, l: "2", a: 0},
{o: 376.773, f: 386.747, l: "7", a: 1},
{o: 386.747, f: 435.533, l: "6", a: 0},
{o: 435.533, f: 445.373, l: "1", a: 1},
{o: 445.373, f: 454.653, l: "2", a: 0}],
[{o: 0, f: 61.835, l: "a", a: 0},
{o: 61.835, f: 159.43, l: "b", a: 1},
{o: 159.43, f: 222.01, l: "a", a: 0},
{o: 222.01, f: 312.9, l: "b", a: 1},
{o: 312.9, f: 373.245, l: "a", a: 0},
{o: 373.245, f: 455.195, l: "c", a: 1}],
[{o: 0, f: 16.277, l: "n1", a: 0},
{o: 16.277, f: 52.86, l: "A", a: 1},
{o: 52.86, f: 65.608, l: "n2", a: 0},
{o: 65.608, f: 101.773, l: "A", a: 1},
{o: 101.773, f: 118.875, l: "n3", a: 0},
{o: 118.875, f: 155.585, l: "A", a: 1},
{o: 155.585, f: 173.917, l: "n4", a: 0},
{o: 173.917, f: 210.675, l: "A", a: 1},
{o: 210.675, f: 271.673, l: "n5", a: 0},
{o: 271.673, f: 289.019, l: "B", a: 1},
{o: 289.019, f: 327.645, l: "n6", a: 0},
{o: 327.645, f: 347.684, l: "B", a: 1},
{o: 347.684, f: 454.415, l: "n7", a: 0}],
[{o: 0, f: 0.004, l: "H", a: 0},
{o: 0.004, f: 0.004, l: "B", a: 1},
{o: 0.004, f: 24.504, l: "A", a: 0},
{o: 24.504, f: 50.316, l: "B", a: 1},
{o: 50.316, f: 76.216, l: "A", a: 0},
{o: 76.216, f: 101.74, l: "B", a: 1},
{o: 101.74, f: 125.436, l: "A", a: 0},
{o: 125.436, f: 154.516, l: "B", a: 1},
{o: 154.516, f: 179.464, l: "A", a: 0},
{o: 179.464, f: 208.124, l: "B", a: 1},
{o: 208.124, f: 236.668, l: "A", a: 0},
{o: 236.668, f: 257.236, l: "B", a: 1},
{o: 257.236, f: 276.364, l: "C", a: 0},
{o: 276.364, f: 310.856, l: "B", a: 1},
{o: 310.856, f: 334.28, l: "A", a: 0},
{o: 334.28, f: 377.056, l: "B", a: 1},
{o: 377.056, f: 441.728, l: "G", a: 0},
{o: 441.728, f: 454.684, l: "C", a: 1},
{o: 454.684, f: 454.74, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001409.ogg";
