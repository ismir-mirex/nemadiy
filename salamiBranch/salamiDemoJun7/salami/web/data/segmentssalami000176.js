var data = [
[{o: 0.65, f: 50.588, l: "A", a: 0},
{o: 50.588, f: 99.343, l: "B", a: 1},
{o: 99.343, f: 148.217, l: "B", a: 0},
{o: 148.217, f: 196.798, l: "B", a: 1},
{o: 196.798, f: 245.51, l: "C", a: 0},
{o: 245.51, f: 293.645, l: "C", a: 1},
{o: 293.645, f: 342.69, l: "B", a: 0},
{o: 342.69, f: 391.131, l: "C", a: 1},
{o: 391.131, f: 438.575, l: "C", a: 0},
{o: 438.575, f: 485.862, l: "C", a: 1},
{o: 485.862, f: 540.4, l: "C", a: 0}],
[{o: 0.512, f: 11.8, l: "G", a: 0},
{o: 11.8, f: 26.58, l: "G", a: 1},
{o: 26.58, f: 40.74, l: "G", a: 0},
{o: 40.74, f: 50.8, l: "G", a: 1},
{o: 50.8, f: 67.38, l: "G", a: 0},
{o: 67.38, f: 85.016, l: "G", a: 1},
{o: 85.016, f: 99.648, l: "G", a: 0},
{o: 99.648, f: 116.632, l: "G", a: 1},
{o: 116.632, f: 131.532, l: "G", a: 0},
{o: 131.532, f: 148.464, l: "G", a: 1},
{o: 148.464, f: 165.02, l: "E", a: 0},
{o: 165.02, f: 179.152, l: "E", a: 1},
{o: 179.152, f: 197.76, l: "G", a: 0},
{o: 197.76, f: 217.516, l: "D", a: 1},
{o: 217.516, f: 235.092, l: "D", a: 0},
{o: 235.092, f: 253.98, l: "D", a: 1},
{o: 253.98, f: 260.648, l: "F", a: 0},
{o: 260.648, f: 277.296, l: "A", a: 1},
{o: 277.296, f: 292.28, l: "A", a: 0},
{o: 292.28, f: 310.188, l: "G", a: 1},
{o: 310.188, f: 318.676, l: "G", a: 0},
{o: 318.676, f: 336.532, l: "G", a: 1},
{o: 336.532, f: 354.068, l: "C", a: 0},
{o: 354.068, f: 373.848, l: "H", a: 1},
{o: 373.848, f: 391.296, l: "I", a: 0},
{o: 391.296, f: 401.98, l: "J", a: 1},
{o: 401.98, f: 415.78, l: "A", a: 0},
{o: 415.78, f: 429.256, l: "K", a: 1},
{o: 429.256, f: 445.716, l: "B", a: 0},
{o: 445.716, f: 458.532, l: "B", a: 1},
{o: 458.532, f: 469.068, l: "L", a: 0},
{o: 469.068, f: 478.288, l: "M", a: 1},
{o: 478.288, f: 499.936, l: "C", a: 0},
{o: 499.936, f: 516.3, l: "N", a: 1},
{o: 516.3, f: 526.66, l: "O", a: 0},
{o: 526.66, f: 540.244, l: "G", a: 1}],
[{o: 0, f: 540.396, l: "A", a: 0}],
[{o: 0.333, f: 1.52, l: "8", a: 0},
{o: 1.52, f: 5.933, l: "2", a: 1},
{o: 5.933, f: 11.307, l: "3", a: 0},
{o: 11.307, f: 20.373, l: "2", a: 1},
{o: 20.373, f: 25.44, l: "3", a: 0},
{o: 25.44, f: 33.52, l: "2", a: 1},
{o: 33.52, f: 48.64, l: "3", a: 0},
{o: 48.64, f: 91.04, l: "2", a: 1},
{o: 91.04, f: 95.44, l: "3", a: 0},
{o: 95.44, f: 139.56, l: "2", a: 1},
{o: 139.56, f: 143.96, l: "3", a: 0},
{o: 143.96, f: 191.867, l: "2", a: 1},
{o: 191.867, f: 220.413, l: "1", a: 0},
{o: 220.413, f: 226.187, l: "4", a: 1},
{o: 226.187, f: 254.16, l: "1", a: 0},
{o: 254.16, f: 261.453, l: "4", a: 1},
{o: 261.453, f: 293.773, l: "1", a: 0},
{o: 293.773, f: 305.56, l: "2", a: 1},
{o: 305.56, f: 310.04, l: "3", a: 0},
{o: 310.04, f: 317.52, l: "2", a: 1},
{o: 317.52, f: 325.04, l: "3", a: 0},
{o: 325.04, f: 337.027, l: "2", a: 1},
{o: 337.027, f: 345.467, l: "1", a: 0},
{o: 345.467, f: 349.88, l: "5", a: 1},
{o: 349.88, f: 391.147, l: "1", a: 0},
{o: 391.147, f: 407.013, l: "4", a: 1},
{o: 407.013, f: 420.853, l: "1", a: 0},
{o: 420.853, f: 425.107, l: "4", a: 1},
{o: 425.107, f: 467.92, l: "1", a: 0},
{o: 467.92, f: 478.067, l: "4", a: 1},
{o: 478.067, f: 488.92, l: "1", a: 0},
{o: 488.92, f: 501.653, l: "5", a: 1},
{o: 501.653, f: 524.773, l: "1", a: 0},
{o: 524.773, f: 528.92, l: "7", a: 1},
{o: 528.92, f: 540.28, l: "6", a: 0}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 55.875, l: "b", a: 1},
{o: 55.875, f: 108.025, l: "c", a: 0},
{o: 108.025, f: 157.195, l: "c", a: 1},
{o: 157.195, f: 198.17, l: "d", a: 0},
{o: 198.17, f: 250.32, l: "c", a: 1},
{o: 250.32, f: 299.49, l: "c", a: 0},
{o: 299.49, f: 344.19, l: "d", a: 1},
{o: 344.19, f: 540.87, l: "e", a: 0}],
[{o: 0, f: 54.532, l: "n1", a: 0},
{o: 54.532, f: 66.038, l: "G", a: 1},
{o: 66.038, f: 90.535, l: "A", a: 0},
{o: 90.535, f: 135.303, l: "n3", a: 1},
{o: 135.303, f: 144.834, l: "C", a: 0},
{o: 144.834, f: 152.218, l: "n4", a: 1},
{o: 152.218, f: 161.692, l: "G", a: 0},
{o: 161.692, f: 189.324, l: "n5", a: 1},
{o: 189.324, f: 198.832, l: "F", a: 0},
{o: 198.832, f: 232.792, l: "n6", a: 1},
{o: 232.792, f: 242.219, l: "C", a: 0},
{o: 242.219, f: 249.951, l: "n7", a: 1},
{o: 249.951, f: 259.379, l: "B", a: 0},
{o: 259.379, f: 266.031, l: "n8", a: 1},
{o: 266.031, f: 275.389, l: "B", a: 0},
{o: 275.389, f: 286.325, l: "n9", a: 1},
{o: 286.325, f: 295.648, l: "F", a: 0},
{o: 295.648, f: 309.197, l: "n10", a: 1},
{o: 309.197, f: 333.798, l: "A", a: 0},
{o: 333.798, f: 344.956, l: "n11", a: 1},
{o: 344.956, f: 358.087, l: "D", a: 0},
{o: 358.087, f: 382.328, l: "A", a: 1},
{o: 382.328, f: 393.346, l: "n13", a: 0},
{o: 393.346, f: 402.657, l: "D", a: 1},
{o: 402.657, f: 411.202, l: "n14", a: 0},
{o: 411.202, f: 420.397, l: "B", a: 1},
{o: 420.397, f: 425.993, l: "n15", a: 0},
{o: 425.993, f: 435.258, l: "C", a: 1},
{o: 435.258, f: 440.866, l: "n16", a: 0},
{o: 440.866, f: 450.061, l: "D", a: 1},
{o: 450.061, f: 489.779, l: "n17", a: 0},
{o: 489.779, f: 500.274, l: "E", a: 1},
{o: 500.274, f: 505.464, l: "n18", a: 0},
{o: 505.464, f: 515.994, l: "E", a: 1},
{o: 515.994, f: 540.235, l: "n19", a: 0}],
[{o: 0, f: 0.504, l: "I", a: 0},
{o: 0.504, f: 10.784, l: "H", a: 1},
{o: 10.784, f: 220.24, l: "E", a: 0},
{o: 220.24, f: 245.488, l: "F", a: 1},
{o: 245.488, f: 524.604, l: "E", a: 0},
{o: 524.604, f: 540.248, l: "F", a: 1},
{o: 540.248, f: 540.396, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000176.ogg";
