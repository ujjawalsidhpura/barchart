
let form = document.getElementById('submitForm');

let addButton = document.getElementById('add');
let coordinates;
let points = [];

addButton.addEventListener('click', function (e) {
  let xaxis = document.getElementById('xaxis').value;
  let yaxis = document.getElementById('yaxis').value;

  if (typeof xaxis === 'number') {
    parseInt(xaxis)
  }
  if (typeof yaxis === 'number') {
    parseInt(yaxis)
  }
  coordinates = {
    x: xaxis,
    y: yaxis
  }
  points.push(coordinates)
})

let series = [
  {
    points
  }
]

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let type = document.getElementById('chartType').value;
  let xaxis = document.getElementById('xaxis').value;
  let yaxis = document.getElementById('yaxis').value;

  JSC.Chart('chart', {
    type: type,
    series: series
  })
})










