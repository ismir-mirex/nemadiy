var data = [
[{o: 0.035, f: 3.777, l: "A", a: 0},
{o: 3.777, f: 51.986, l: "B", a: 1},
{o: 51.986, f: 331.945, l: "C", a: 0},
{o: 331.945, f: 557.366, l: "D", a: 1},
{o: 557.366, f: 586.351, l: "B", a: 0},
{o: 586.351, f: 660.349, l: "E", a: 1}],
[{o: 0, f: 660.263, l: "A", a: 0}],
[{o: 0.232, f: 29.788, l: "A", a: 0},
{o: 29.788, f: 58.416, l: "A", a: 1},
{o: 58.416, f: 84.384, l: "G", a: 0},
{o: 84.384, f: 108.108, l: "G", a: 1},
{o: 108.108, f: 131.868, l: "F", a: 0},
{o: 131.868, f: 147.072, l: "L", a: 1},
{o: 147.072, f: 169.528, l: "H", a: 0},
{o: 169.528, f: 186.516, l: "M", a: 1},
{o: 186.516, f: 215.768, l: "B", a: 0},
{o: 215.768, f: 235.884, l: "B", a: 1},
{o: 235.884, f: 253.332, l: "H", a: 0},
{o: 253.332, f: 266.076, l: "K", a: 1},
{o: 266.076, f: 280.104, l: "K", a: 0},
{o: 280.104, f: 308.236, l: "I", a: 1},
{o: 308.236, f: 331.672, l: "I", a: 0},
{o: 331.672, f: 350.464, l: "D", a: 1},
{o: 350.464, f: 366.544, l: "D", a: 0},
{o: 366.544, f: 389.632, l: "D", a: 1},
{o: 389.632, f: 412.5, l: "D", a: 0},
{o: 412.5, f: 428.832, l: "D", a: 1},
{o: 428.832, f: 452.364, l: "E", a: 0},
{o: 452.364, f: 474.412, l: "E", a: 1},
{o: 474.412, f: 497.528, l: "E", a: 0},
{o: 497.528, f: 512.912, l: "E", a: 1},
{o: 512.912, f: 526.76, l: "E", a: 0},
{o: 526.76, f: 555.54, l: "N", a: 1},
{o: 555.54, f: 584.368, l: "O", a: 0},
{o: 584.368, f: 595.972, l: "J", a: 1},
{o: 595.972, f: 615.824, l: "C", a: 0},
{o: 615.824, f: 629.628, l: "P", a: 1},
{o: 629.628, f: 643.74, l: "C", a: 0},
{o: 643.74, f: 660.1, l: "J", a: 1}],
[{o: 0.84, f: 48.28, l: "3", a: 0},
{o: 48.28, f: 130.973, l: "1", a: 1},
{o: 130.973, f: 140.707, l: "5", a: 0},
{o: 140.707, f: 162.28, l: "1", a: 1},
{o: 162.28, f: 235.12, l: "6", a: 0},
{o: 235.12, f: 327.613, l: "1", a: 1},
{o: 327.613, f: 368.107, l: "4", a: 0},
{o: 368.107, f: 422.813, l: "2", a: 1},
{o: 422.813, f: 436.2, l: "4", a: 0},
{o: 436.2, f: 486.613, l: "7", a: 1},
{o: 486.613, f: 538.867, l: "2", a: 0},
{o: 538.867, f: 555.133, l: "1", a: 1},
{o: 555.133, f: 591.347, l: "3", a: 0},
{o: 591.347, f: 621.627, l: "8", a: 1},
{o: 621.627, f: 658.147, l: "5", a: 0}],
[{o: 0, f: 315.135, l: "a", a: 0},
{o: 315.135, f: 410.495, l: "b", a: 1},
{o: 410.495, f: 451.47, l: "b", a: 0},
{o: 451.47, f: 505.855, l: "c", a: 1},
{o: 505.855, f: 546.83, l: "b", a: 0},
{o: 546.83, f: 660.815, l: "d", a: 1}],
[{o: 0, f: 95.678, l: "n1", a: 0},
{o: 95.678, f: 111.015, l: "A", a: 1},
{o: 111.015, f: 124.517, l: "A", a: 0},
{o: 124.517, f: 282.587, l: "n3", a: 1},
{o: 282.587, f: 298.411, l: "A", a: 0},
{o: 298.411, f: 313.493, l: "A", a: 1},
{o: 313.493, f: 328.586, l: "A", a: 0},
{o: 328.586, f: 343.655, l: "A", a: 1},
{o: 343.655, f: 358.702, l: "A", a: 0},
{o: 358.702, f: 371.949, l: "A", a: 1},
{o: 371.949, f: 377.603, l: "n9", a: 0},
{o: 377.603, f: 392.742, l: "B", a: 1},
{o: 392.742, f: 407.789, l: "B", a: 0},
{o: 407.789, f: 422.824, l: "n10", a: 1},
{o: 422.824, f: 438.149, l: "B", a: 0},
{o: 438.149, f: 492.193, l: "n11", a: 1},
{o: 492.193, f: 509.202, l: "C", a: 0},
{o: 509.202, f: 522.252, l: "n12", a: 1},
{o: 522.252, f: 539.074, l: "C", a: 0},
{o: 539.074, f: 660.236, l: "n13", a: 1}],
[{o: 0, f: 0.232, l: "H", a: 0},
{o: 0.232, f: 49.644, l: "D", a: 1},
{o: 49.644, f: 147.6, l: "G", a: 0},
{o: 147.6, f: 170.016, l: "A", a: 1},
{o: 170.016, f: 192.792, l: "G", a: 0},
{o: 192.792, f: 233.032, l: "D", a: 1},
{o: 233.032, f: 260.84, l: "G", a: 0},
{o: 260.84, f: 293.64, l: "A", a: 1},
{o: 293.64, f: 314.388, l: "G", a: 0},
{o: 314.388, f: 381.184, l: "A", a: 1},
{o: 381.184, f: 469.856, l: "G", a: 0},
{o: 469.856, f: 519.416, l: "C", a: 1},
{o: 519.416, f: 553.644, l: "A", a: 0},
{o: 553.644, f: 604.008, l: "D", a: 1},
{o: 604.008, f: 658.64, l: "E", a: 0},
{o: 658.64, f: 660.1, l: "D", a: 1},
{o: 660.1, f: 660.263, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000319.ogg";

var artist = "Big Brothers Brother";

var track = "Space in in kingston";
