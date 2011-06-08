var data = [
[{o: 0, f: 35.139, l: "A", a: 0},
{o: 35.139, f: 71.043, l: "A'", a: 1},
{o: 71.043, f: 108.587, l: "A", a: 0},
{o: 108.587, f: 146.563, l: "B", a: 1},
{o: 146.563, f: 256.283, l: "A", a: 0},
{o: 256.283, f: 302.763, l: "B", a: 1},
{o: 302.763, f: 349.488, l: "A", a: 0},
{o: 349.488, f: 367.675, l: "C", a: 1},
{o: 367.675, f: 406.335, l: "A", a: 0},
{o: 406.335, f: 466.469, l: "D", a: 1}],
[{o: 0.068, f: 11.672, l: "E", a: 0},
{o: 11.672, f: 33.708, l: "C", a: 1},
{o: 33.708, f: 56.476, l: "B", a: 0},
{o: 56.476, f: 73.04, l: "B", a: 1},
{o: 73.04, f: 88.112, l: "C", a: 0},
{o: 88.112, f: 102.588, l: "F", a: 1},
{o: 102.588, f: 121.828, l: "A", a: 0},
{o: 121.828, f: 158.336, l: "B", a: 1},
{o: 158.336, f: 178.256, l: "B", a: 0},
{o: 178.256, f: 203.728, l: "A", a: 1},
{o: 203.728, f: 224.164, l: "A", a: 0},
{o: 224.164, f: 243.548, l: "A", a: 1},
{o: 243.548, f: 269.852, l: "B", a: 0},
{o: 269.852, f: 295.084, l: "B", a: 1},
{o: 295.084, f: 308.852, l: "C", a: 0},
{o: 308.852, f: 327.608, l: "G", a: 1},
{o: 327.608, f: 349.104, l: "D", a: 0},
{o: 349.104, f: 370.252, l: "H", a: 1},
{o: 370.252, f: 400.156, l: "I", a: 0},
{o: 400.156, f: 424.624, l: "J", a: 1},
{o: 424.624, f: 439.58, l: "D", a: 0},
{o: 439.58, f: 466.416, l: "K", a: 1}],
[{o: 0.068, f: 11.672, l: "D", a: 0},
{o: 11.672, f: 33.708, l: "C", a: 1},
{o: 33.708, f: 56.476, l: "B", a: 0},
{o: 56.476, f: 73.04, l: "B", a: 1},
{o: 73.04, f: 88.112, l: "E", a: 0},
{o: 88.112, f: 102.588, l: "F", a: 1},
{o: 102.588, f: 121.828, l: "G", a: 0},
{o: 121.828, f: 158.336, l: "B", a: 1},
{o: 158.336, f: 178.256, l: "B", a: 0},
{o: 178.256, f: 203.728, l: "A", a: 1},
{o: 203.728, f: 224.164, l: "A", a: 0},
{o: 224.164, f: 243.548, l: "H", a: 1},
{o: 243.548, f: 269.852, l: "B", a: 0},
{o: 269.852, f: 295.084, l: "B", a: 1},
{o: 295.084, f: 308.852, l: "C", a: 0},
{o: 308.852, f: 327.608, l: "I", a: 1},
{o: 327.608, f: 349.104, l: "J", a: 0},
{o: 349.104, f: 370.252, l: "K", a: 1},
{o: 370.252, f: 400.156, l: "L", a: 0},
{o: 400.156, f: 424.624, l: "M", a: 1},
{o: 424.624, f: 439.58, l: "N", a: 0},
{o: 439.58, f: 466.416, l: "O", a: 1}],
[{o: 0.547, f: 14.84, l: "3", a: 0},
{o: 14.84, f: 35.333, l: "2", a: 1},
{o: 35.333, f: 72.48, l: "1", a: 0},
{o: 72.48, f: 87.773, l: "3", a: 1},
{o: 87.773, f: 109.587, l: "2", a: 0},
{o: 109.587, f: 123.307, l: "4", a: 1},
{o: 123.307, f: 146.067, l: "2", a: 0},
{o: 146.067, f: 216.627, l: "1", a: 1},
{o: 216.627, f: 222.547, l: "6", a: 0},
{o: 222.547, f: 267.587, l: "1", a: 1},
{o: 267.587, f: 275.587, l: "6", a: 0},
{o: 275.587, f: 293.107, l: "1", a: 1},
{o: 293.107, f: 323.507, l: "2", a: 0},
{o: 323.507, f: 355.213, l: "5", a: 1},
{o: 355.213, f: 367.093, l: "1", a: 0},
{o: 367.093, f: 398.52, l: "2", a: 1},
{o: 398.52, f: 405.44, l: "5", a: 0},
{o: 405.44, f: 433.107, l: "4", a: 1},
{o: 433.107, f: 439.627, l: "3", a: 0},
{o: 439.627, f: 451.96, l: "1", a: 1},
{o: 451.96, f: 460.04, l: "7", a: 0},
{o: 460.04, f: 466.173, l: "8", a: 1}],
[{o: 0, f: 89.4, l: "a", a: 0},
{o: 89.4, f: 146.765, l: "b", a: 1},
{o: 146.765, f: 234.675, l: "a", a: 0},
{o: 234.675, f: 295.02, l: "b", a: 1},
{o: 295.02, f: 382.93, l: "a", a: 0},
{o: 382.93, f: 466.37, l: "c", a: 1}],
[{o: 0, f: 4.818, l: "n1", a: 0},
{o: 4.818, f: 15.163, l: "B", a: 1},
{o: 15.163, f: 30.766, l: "n2", a: 0},
{o: 30.766, f: 41.088, l: "A", a: 1},
{o: 41.088, f: 71.239, l: "n3", a: 0},
{o: 71.239, f: 83.104, l: "E", a: 1},
{o: 83.104, f: 92.636, l: "n4", a: 0},
{o: 92.636, f: 104.583, l: "D", a: 1},
{o: 104.583, f: 115.682, l: "A", a: 0},
{o: 115.682, f: 131.634, l: "C", a: 1},
{o: 131.634, f: 151.243, l: "n6", a: 0},
{o: 151.243, f: 161.344, l: "B", a: 1},
{o: 161.344, f: 179.281, l: "n7", a: 0},
{o: 179.281, f: 188.964, l: "A", a: 1},
{o: 188.964, f: 294.615, l: "n8", a: 0},
{o: 294.615, f: 305.9, l: "E", a: 1},
{o: 305.9, f: 327.564, l: "n9", a: 0},
{o: 327.564, f: 336.376, l: "A", a: 1},
{o: 336.376, f: 373.667, l: "n10", a: 0},
{o: 373.667, f: 384.697, l: "B", a: 1},
{o: 384.697, f: 390.2, l: "n11", a: 0},
{o: 390.2, f: 402.727, l: "D", a: 1},
{o: 402.727, f: 413.501, l: "n12", a: 0},
{o: 413.501, f: 429.801, l: "C", a: 1},
{o: 429.801, f: 466.303, l: "n13", a: 0}],
[{o: 0, f: 0.004, l: "L", a: 0},
{o: 0.004, f: 1.084, l: "D", a: 1},
{o: 1.084, f: 12.232, l: "J", a: 0},
{o: 12.232, f: 66.58, l: "K", a: 1},
{o: 66.58, f: 91.744, l: "J", a: 0},
{o: 91.744, f: 146.112, l: "K", a: 1},
{o: 146.112, f: 462.272, l: "A", a: 0},
{o: 462.272, f: 466.416, l: "J", a: 1},
{o: 466.416, f: 466.47, l: "L", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001635.ogg";