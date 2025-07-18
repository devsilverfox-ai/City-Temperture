function draw() {
  var city1 = [
    'March',
    ' Lowest at start of March = 51',
    ' Lowest at end of March = 53',
    ' Highest at start of March = 69',
    ' Highest at end of March = 71',
    ' April',
    ' Lowest at start of April = 53',
    ' Lowest at end of April = 57',
    ' Highest at start of April = 71',
    ' Highest at end of April = 74',
    ' May',
    ' Lowest at start of May = 57',
    ' Lowest at end of May = 60',
    ' Highest at start of May = 74',
    ' Lowest at start of May = 75'
  ];
  var city2 = [
    'March',
    ' Lowest at start of March = 40',
    ' Lowest at end of March = 44',
    ' Highest at start of March = 64',
    ' Highest at end of March = 71',
    ' April',
    ' Lowest at start of April = 50',
    ' Lowest at end of April = 62',
    ' Highest at start of April = 65',
    ' Highest at end of April = 77',
    ' May',
    ' Lowest at start of May = 74',
    ' Lowest at end of May = 75',
    ' Highest at start of May = 60',
    ' Lowest at start of May = 75'
  ];

  for (let i = 0; i < city1.length; i++) {
    text(city1[i], 25, 30 + i * 15);
  }
  for (let i = 0; i < city2.length; i++) {
    text(city2[i], 400, 30 + i * 15);
  }
}
