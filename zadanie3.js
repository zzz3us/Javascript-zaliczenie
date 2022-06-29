const cyfry = [1, 2, 3, 4, 5];

const cyfry1 = cyfry.map(x => x + 1);

function checkMoreThanThree(cyfra) {
  return cyfra >= 3;
}

const result = cyfry1.filter(checkMoreThanThree)

console.log(result)