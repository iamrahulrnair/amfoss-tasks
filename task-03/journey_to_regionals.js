function processData(input) {
  const input_array = input.split('\n');
  const no_cities = input_array[0];
  const city_array = input_array[1].split(' ').map((el) => el * 1);
  const no_queries = input_array[2] * 1;
  const queries = [];
  for (let i = 0; i < no_queries; i++) {
    queries.push(input_array[no_queries + i].split(' ').map((el) => el * 1));
  }
  // #  1/10 timeout
  for (let i = 0; i < no_queries; i++) {
    let [start, end] = queries[i];
    let sum = 0;
    if (end > city_array.length) {
      end = city_array.length;
    }
    if (start < 0) {
      start = 0;
    }
    for (j = start - 1; j < end; j++) {
      sum += city_array[j];
    }
    console.log(sum);

    // console.log(
    //   city_array.slice(start - 1, end).reduce((acc, el) => acc + el, 0)
    // );
  }
}
