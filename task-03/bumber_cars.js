function processData(input) {
  //Enter your code here 1/11

  input_array = input.split('\n');
  const [no_cars, length_bridge] = input_array[0]
    .split(' ')
    .map((el) => el * 1);
  const position_array = input_array[1].split(' ').map((el) => el * 1);
  const direction = input_array[2].split(' ').map((el) => el * 1);
  const counter = new Array(position_array.length).fill(0);
  let reached_end = false;
  const new_obj = [];
  while (!reached_end) {
    for (let i = 0; i < position_array.length; i++) {
      let current_car = position_array[i];
      let current_direction = direction[i];
      let current_count = counter[i];
      position_array[i] = current_car + current_direction;
      counter[i] = current_count + 1;

      if (current_car > length_bridge || current_car < 1) {
        const indexOfcurrentCar = position_array.indexOf(position_array[i]);
        let sliced;
        if (indexOfcurrentCar > -1) {
          position_array.splice(indexOfcurrentCar, 1);
          sliced = counter.splice(indexOfcurrentCar, 1);
          direction.splice(indexOfcurrentCar, 1);
        }
        new_obj.push(sliced[0]);
      }

      if (current_car < position_array[i - 1]) {
        direction[i] = 1;
        direction[i - 1] = -1;
        counter[i] -= 1;
        counter[i - 1] -= 1;
      }
      if (current_car > position_array[i + 1]) {
        direction[i] = -1;
        direction[i + 1] = 1;
        counter[i] -= 1;
      }
      if (position_array.length == 0) {
        reached_end = true;
      }
    }
  }
  console.log(Math.max(...new_obj) - 1);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
