var shuttleName = 'Determination';
var shuttle_speed = 17.500;
var Distance_to_mars = 225000000;
var Distance_TO_The_Moon = 384.400;
var Miles_per_kilometer= 0.621;


console.log(typeof(shuttle_speed));
console.log(typeof(Distance_to_mars));
console.log(typeof(Distance_TO_The_Moon));
console.log(typeof(Miles_per_kilometer));

var miles_to_Mars = Distance_to_mars *Miles_per_kilometer;
var hours_To_Mars = miles_to_Mars/shuttle_speed;
var days_To_Mars = hours_To_Mars/24;

console.log(shuttleName + ' Will take ' + days_To_Mars + '  days to reach mars');

var miles_to_moon = Distance_TO_The_Moon* Miles_per_kilometer;
var hours_To_Moon = miles_to_moon / shuttle_speed;
var days_to_moon = hours_To_Moon / 24;

console.log(shuttleName + ' Will take ' + days_to_moon + '  days to reach Moon');
