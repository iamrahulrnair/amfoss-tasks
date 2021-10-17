function processData(input) {
  //Enter your code here11/11
  input_array = input.split('\n');
  const rods = input_array[0] * 1;
  const weights = input_array[1].split(' ').map((el) => el * 1);
  if (rods >= 1 && rods <= 1000) {
    const new_obj = {};
    weights.forEach((weight) => {
      if (!new_obj[weight]) {
        new_obj[weight] = 1;
      } else {
        new_obj[weight] = new_obj[weight] + 1;
      }
    });
    console.log(
      `${Math.max(...Object.values(new_obj))} ${Object.values(new_obj).length}`
    );
  }
}
