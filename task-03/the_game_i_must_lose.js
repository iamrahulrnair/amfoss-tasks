function processData(input) {
  //Enter your code here 8/12
  let [peek, maxVal] = input.split(' ');
  peek = Math.floor(peek * 1);
  maxVal = maxVal * 1;
  var total = [];
  if (
    peek % 2 == 0 &&
    peek >= 1 &&
    peek <= Math.pow(10, 6) &&
    maxVal <= Math.pow(10, 6) &&
    maxVal >= 1
  ) {
    console.log(Math.ceil(maxVal / 2));
    for (let i = 1; i <= maxVal; i++) {
      if (i % 2 != 0) {
        total.push(i);
      }
    }
    console.log(total.join(' '));
  } else {
    console.log(0);
  }
}
