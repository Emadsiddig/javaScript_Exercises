const weeklyForecast = [
  { day: 'monday', hi: 90, lo: 70 },
  { day: 'tuesday', hi: 93, lo: 76 },
  { day: 'wednesday', hi: 89, lo: 74 },
  { day: 'thursday', hi: 91, lo: 76 },
  { day: 'friday', hi: 82, lo: 71 },
  { day: 'saturday', hi: 81, lo: 68 },
  { day: 'sunday', hi: 86, lo: 64 },
];

for (let i = 0; i < weeklyForecast.length; i++) {
    console.log(
        'In ' + weeklyForecast[i].day + ' the high temp will be ' + weeklyForecast[i].hi + ' and the low will be ' + weeklyForecast[i].lo
    );
}
