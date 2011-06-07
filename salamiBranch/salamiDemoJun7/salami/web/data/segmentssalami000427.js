var data = [
[{o: 0.237, f: 10.606, l: "Z", a: 0},
{o: 10.606, f: 40.34, l: "A", a: 1},
{o: 40.34, f: 55.605, l: "B", a: 0},
{o: 55.605, f: 71.564, l: "A", a: 1},
{o: 71.564, f: 102.506, l: "A", a: 0},
{o: 102.506, f: 117.987, l: "B", a: 1},
{o: 117.987, f: 164.955, l: "A", a: 0},
{o: 164.955, f: 180.291, l: "B", a: 1},
{o: 180.291, f: 226.595, l: "A", a: 0},
{o: 226.595, f: 242.139, l: "B", a: 1},
{o: 242.139, f: 257.486, l: "A", a: 0},
{o: 257.486, f: 296.997, l: "A", a: 1},
{o: 296.997, f: 312.63, l: "B", a: 0},
{o: 312.63, f: 344.63, l: "A", a: 1},
{o: 344.63, f: 360.366, l: "B", a: 0},
{o: 360.366, f: 407.326, l: "A", a: 1},
{o: 407.326, f: 423.158, l: "B", a: 0},
{o: 423.158, f: 469.267, l: "A", a: 1},
{o: 469.267, f: 484.877, l: "B", a: 0},
{o: 484.877, f: 536.01, l: "A", a: 1},
{o: 536.01, f: 550.867, l: "B", a: 0},
{o: 550.867, f: 565.726, l: "A", a: 1},
{o: 565.726, f: 594.734, l: "C", a: 0},
{o: 594.734, f: 609.546, l: "C", a: 1},
{o: 609.546, f: 624.139, l: "C", a: 0},
{o: 624.139, f: 639.22, l: "B", a: 1},
{o: 639.22, f: 655.11, l: "A", a: 0},
{o: 655.11, f: 697.505, l: "Z", a: 1}],
[{o: 0, f: 697.413, l: "A", a: 0}],
[{o: 0, f: 697.413, l: "A", a: 0}],
[{o: 0.387, f: 9.88, l: "5", a: 0},
{o: 9.88, f: 20.813, l: "2", a: 1},
{o: 20.813, f: 26.853, l: "1", a: 0},
{o: 26.853, f: 35.347, l: "2", a: 1},
{o: 35.347, f: 50.307, l: "1", a: 0},
{o: 50.307, f: 72.773, l: "2", a: 1},
{o: 72.773, f: 130.373, l: "1", a: 0},
{o: 130.373, f: 138.36, l: "7", a: 1},
{o: 138.36, f: 152.347, l: "1", a: 0},
{o: 152.347, f: 159.6, l: "7", a: 1},
{o: 159.6, f: 194.76, l: "1", a: 0},
{o: 194.76, f: 200.973, l: "3", a: 1},
{o: 200.973, f: 257.68, l: "1", a: 0},
{o: 257.68, f: 265.173, l: "5", a: 1},
{o: 265.173, f: 289.827, l: "4", a: 0},
{o: 289.827, f: 296.707, l: "2", a: 1},
{o: 296.707, f: 320.227, l: "4", a: 0},
{o: 320.227, f: 342.347, l: "2", a: 1},
{o: 342.347, f: 349.08, l: "4", a: 0},
{o: 349.08, f: 380.36, l: "2", a: 1},
{o: 380.36, f: 386.293, l: "3", a: 0},
{o: 386.293, f: 391.827, l: "6", a: 1},
{o: 391.827, f: 401.16, l: "2", a: 0},
{o: 401.16, f: 408, l: "6", a: 1},
{o: 408, f: 438.467, l: "2", a: 0},
{o: 438.467, f: 465.4, l: "1", a: 1},
{o: 465.4, f: 472.6, l: "3", a: 0},
{o: 472.6, f: 491.56, l: "1", a: 1},
{o: 491.56, f: 499.907, l: "3", a: 0},
{o: 499.907, f: 523.96, l: "2", a: 1},
{o: 523.96, f: 534.653, l: "6", a: 0},
{o: 534.653, f: 561.4, l: "1", a: 1},
{o: 561.4, f: 594.827, l: "3", a: 0},
{o: 594.827, f: 608.64, l: "4", a: 1},
{o: 608.64, f: 624.173, l: "3", a: 0},
{o: 624.173, f: 638.293, l: "1", a: 1},
{o: 638.293, f: 655.667, l: "2", a: 0},
{o: 655.667, f: 665.533, l: "8", a: 1},
{o: 665.533, f: 674.733, l: "5", a: 0},
{o: 674.733, f: 682.947, l: "4", a: 1},
{o: 682.947, f: 697.293, l: "5", a: 0}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 37.995, l: "a", a: 1},
{o: 37.995, f: 574.395, l: "b", a: 0},
{o: 574.395, f: 595.255, l: "c", a: 1},
{o: 595.255, f: 632.505, l: "c", a: 0},
{o: 632.505, f: 698.065, l: "d", a: 1}],
[{o: 0, f: 572.964, l: "n1", a: 0},
{o: 572.964, f: 585.607, l: "A", a: 1},
{o: 585.607, f: 609.477, l: "n2", a: 0},
{o: 609.477, f: 622.457, l: "A", a: 1},
{o: 622.457, f: 697.388, l: "n3", a: 0}],
[{o: 0, f: 0.04, l: "I", a: 0},
{o: 0.04, f: 25.196, l: "F", a: 1},
{o: 25.196, f: 88.612, l: "G", a: 0},
{o: 88.612, f: 113.668, l: "H", a: 1},
{o: 113.668, f: 132.84, l: "F", a: 0},
{o: 132.84, f: 167.8, l: "G", a: 1},
{o: 167.8, f: 186.2, l: "F", a: 0},
{o: 186.2, f: 299.656, l: "G", a: 1},
{o: 299.656, f: 503.62, l: "F", a: 0},
{o: 503.62, f: 532.372, l: "G", a: 1},
{o: 532.372, f: 562.276, l: "F", a: 0},
{o: 562.276, f: 592.632, l: "E", a: 1},
{o: 592.632, f: 609.288, l: "F", a: 0},
{o: 609.288, f: 628.968, l: "E", a: 1},
{o: 628.968, f: 668.108, l: "G", a: 0},
{o: 668.108, f: 686.392, l: "F", a: 1},
{o: 686.392, f: 696.264, l: "G", a: 0},
{o: 696.264, f: 697.413, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000427.ogg";
