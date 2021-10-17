function processData(input) {
  //Enter your code here 6/8
  input_array = input.split('\n');
  const [no_devs, no_probs] = input_array[0].split(' ');
  const dev_pow = input_array[1].split(' ').map((el) => Math.ceil(el * 1));
  const prob_pow = input_array[2].split(' ').map((el) => Math.ceil(el * 1));
  let killer_prob;
  let killers = [];
  if (no_devs > 0 && no_probs > 0 && no_devs < 101 && no_probs < 101) {
    for (let i = 0; i < no_devs * 1; i++) {
      const developer_power = dev_pow[0];
      if (developer_power > 100 || developer_power < 0) {
        console.log('NO');
        return;
      }
      killer_prob = findKillerProb(developer_power, prob_pow);
      if (killer_prob == -1) {
        console.log('NO');
        return;
      }
      if (!killer_prob) {
        console.log('NO');
        return;
      }
      killDev(dev_pow);
      killers.push(killer_prob);
    }
    console.log('YES');
    console.log(killers.reduce((acc, el) => acc + el));
  } else {
    console.log('NO');
    return;
  }
}

function removePron() {}
function killDev(dev_pow) {
  dev_pow.shift();
}
function findKillerProb(developer_power, prob_power_array) {
  const temp = [];
  for (let i = 0; i < prob_power_array.length; i++) {
    if (prob_power_array[i] > 100 || prob_power_array[i] < 0) {
      return -1;
    }
    if (prob_power_array[i] > developer_power) {
      temp.push(prob_power_array[i]);
    }
  }
  const index = prob_power_array.indexOf(temp.sort()[0]);
  if (index > -1) {
    prob_power_array.splice(index, 1);
  }

  return temp.sort(function (a, b) {
    return a - b;
  })[0];
}
