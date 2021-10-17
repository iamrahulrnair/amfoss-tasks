function processData(input) {
  // initialization ! 4/11 timout
  const input_array = input.split('\n');
  const test_cases = input_array[0] * 1;
  for (let test_case = 0; test_case < test_cases; test_case++) {
    let [length_of_rope, no_places_dropped, velocity, limit] = input_array[
      test_case * 2 + 1
    ]
      .split(' ')
      .map((el) => el * 1);
    let position_array = [];
    for (let j = 0; j < no_places_dropped; j++) {
      position_array.push(input_array[test_case * 2 + 2].split(' ')[j] * 1);
    }
    let dummy_rope = new Array(length_of_rope).fill(0);
    let dummy_rope_test = new Array(length_of_rope).fill(0);

    if (position_array.length > -1) {
      position_array.map((el) => {
        dummy_rope[el - 1] = 1;
      });
    }

    for (let k = 0; k < limit; k++) {
      index_of_ones = findDuplicates(dummy_rope);
      index_of_ones.map((index) => {
        for (let z = 1; z <= velocity; z++) {
          dummy_rope[index - z] = 1;
        }
        for (let p = 1; p <= velocity; p++) {
          dummy_rope[index + p] = 1;
        }
      });
    }
    console.log(
      dummy_rope
        .map((el, index) => {
          if (el == 0) {
            return el;
          }
        })
        .filter((el) => el != undefined).length
    );
  }
  //   #########################################################################
}
const findDuplicates = (arr) =>
  arr
    .map((el, index) => {
      if (
        (el == 1 && arr[index + 1] == 0) ||
        (el == 1 && arr[index - 1] == 0)
      ) {
        return index;
      }
    })
    .filter((el) => el != undefined);
