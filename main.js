function arbitary() {
  let arbitaryNumber = [];
  let i = 0;

  for (i = 0; i < 100; i++) {
    arbitaryNumber.push(Math.round(Math.random() * 100));
  }
  let newNumber = arbitaryNumber.map(function (num) {
    return num * 3;
  });
  console.log(arbitaryNumber);
  console.log(newNumber);
}
arbitary();
