// Returns a json data for chart
// The data tells about the sale of particular pizza on a random day

function getRandomJson() {
  var cdata = [
    {
      _id: '585b544f5c86b6c8537c34d6',
      pizza: 'Pepperoni',
      sold: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
    },
    {
      _id: '585b54505c86b6c8537c34d7',
      pizza: 'Farmhouse',
      sold: Math.floor(Math.random() * (80 - 1 + 1)) + 1,
    },
    {
      _id: '585b54515c86b6c8537c34d8',
      pizza: 'Veggie Paradise',
      sold: Math.floor(Math.random() * (90 - 20 + 1)) + 20,
    },
    {
      _id: '585b54525c86b6c8537c34d9',
      pizza: 'Peppy Panner',
      sold: Math.floor(Math.random() * (50 - 40 + 1)) + 40,
    },
    {
      _id: '585b54535c86b6c8537c34da',
      pizza: 'VEGGIE PARADISE',
      sold: Math.floor(Math.random() * (85 - 20 + 1)) + 20,
    },
  ];
  return cdata;
}
const labels = getRandomJson().map((el) => el.pizza);
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: getRandomJson().map((el) => el.sold),
    },
  ],
};
const config = {
  type: 'line',
  data: data,
  options: {},
};

var myChart = new Chart(document.getElementById('myChart'), config);
