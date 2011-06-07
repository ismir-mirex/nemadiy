var data = [
[{o: 0.313, f: 5.862, l: "Z", a: 0},
{o: 5.862, f: 19.265, l: "I", a: 1},
{o: 19.265, f: 55.946, l: "H", a: 0},
{o: 55.946, f: 67.412, l: "F", a: 1},
{o: 67.412, f: 104.172, l: "H", a: 0},
{o: 104.172, f: 140.988, l: "H", a: 1},
{o: 140.988, f: 177.861, l: "H", a: 0},
{o: 177.861, f: 214.612, l: "H", a: 1},
{o: 214.612, f: 251.69, l: "H", a: 0},
{o: 251.69, f: 288.697, l: "H", a: 1},
{o: 288.697, f: 333.856, l: "J", a: 0},
{o: 333.856, f: 371.072, l: "H", a: 1},
{o: 371.072, f: 386.653, l: "F", a: 0}],
[{o: 0, f: 386.639, l: "A", a: 0}],
[{o: 0.244, f: 14.648, l: "F", a: 0},
{o: 14.648, f: 30.864, l: "B", a: 1},
{o: 30.864, f: 44.352, l: "G", a: 0},
{o: 44.352, f: 64.46, l: "B", a: 1},
{o: 64.46, f: 84.752, l: "B", a: 0},
{o: 84.752, f: 100.712, l: "A", a: 1},
{o: 100.712, f: 116.812, l: "B", a: 0},
{o: 116.812, f: 142.996, l: "A", a: 1},
{o: 142.996, f: 159.876, l: "A", a: 0},
{o: 159.876, f: 180.652, l: "A", a: 1},
{o: 180.652, f: 195.176, l: "H", a: 0},
{o: 195.176, f: 215.264, l: "A", a: 1},
{o: 215.264, f: 225.048, l: "D", a: 0},
{o: 225.048, f: 243.548, l: "D", a: 1},
{o: 243.548, f: 270.056, l: "D", a: 0},
{o: 270.056, f: 288.644, l: "I", a: 1},
{o: 288.644, f: 315.276, l: "J", a: 0},
{o: 315.276, f: 331.532, l: "E", a: 1},
{o: 331.532, f: 352.812, l: "C", a: 0},
{o: 352.812, f: 370.524, l: "E", a: 1},
{o: 370.524, f: 382.66, l: "C", a: 0}],
[{o: 0.707, f: 5.76, l: "8", a: 0},
{o: 5.76, f: 13.84, l: "6", a: 1},
{o: 13.84, f: 20.013, l: "1", a: 0},
{o: 20.013, f: 55.76, l: "2", a: 1},
{o: 55.76, f: 95.693, l: "1", a: 0},
{o: 95.693, f: 119.56, l: "2", a: 1},
{o: 119.56, f: 133.56, l: "1", a: 0},
{o: 133.56, f: 146.107, l: "2", a: 1},
{o: 146.107, f: 206.84, l: "1", a: 0},
{o: 206.84, f: 212.973, l: "2", a: 1},
{o: 212.973, f: 218.747, l: "3", a: 0},
{o: 218.747, f: 277.28, l: "4", a: 1},
{o: 277.28, f: 288.053, l: "1", a: 0},
{o: 288.053, f: 314.747, l: "5", a: 1},
{o: 314.747, f: 327.92, l: "3", a: 0},
{o: 327.92, f: 334.693, l: "1", a: 1},
{o: 334.693, f: 350.76, l: "3", a: 0},
{o: 350.76, f: 359.68, l: "2", a: 1},
{o: 359.68, f: 371.84, l: "3", a: 0},
{o: 371.84, f: 381, l: "1", a: 1},
{o: 381, f: 386.52, l: "7", a: 0}],
[{o: 0, f: 18.625, l: "a", a: 0},
{o: 18.625, f: 35.76, l: "b", a: 1},
{o: 35.76, f: 69.285, l: "b", a: 0},
{o: 69.285, f: 329.29, l: "c", a: 1},
{o: 329.29, f: 347.915, l: "a", a: 0},
{o: 347.915, f: 365.05, l: "b", a: 1},
{o: 365.05, f: 386.655, l: "b", a: 0}],
[{o: 0, f: 18.054, l: "n1", a: 0},
{o: 18.054, f: 35.376, l: "A", a: 1},
{o: 35.376, f: 52.605, l: "n2", a: 0},
{o: 52.605, f: 70.194, l: "A", a: 1},
{o: 70.194, f: 339.963, l: "n3", a: 0},
{o: 339.963, f: 351.434, l: "A", a: 1},
{o: 351.434, f: 363.195, l: "n4", a: 0},
{o: 363.195, f: 374.724, l: "A", a: 1},
{o: 374.724, f: 386.426, l: "n5", a: 0}],
[{o: 0, f: 0.244, l: "J", a: 0},
{o: 0.244, f: 45.476, l: "D", a: 1},
{o: 45.476, f: 111.352, l: "A", a: 0},
{o: 111.352, f: 139.976, l: "B", a: 1},
{o: 139.976, f: 232.552, l: "I", a: 0},
{o: 232.552, f: 242.368, l: "H", a: 1},
{o: 242.368, f: 269.244, l: "F", a: 0},
{o: 269.244, f: 317.296, l: "H", a: 1},
{o: 317.296, f: 334.18, l: "B", a: 0},
{o: 334.18, f: 379.88, l: "F", a: 1},
{o: 379.88, f: 382.66, l: "A", a: 0},
{o: 382.66, f: 386.639, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000214.ogg";
