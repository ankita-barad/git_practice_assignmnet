let num = 13;
function prime(num) {
  for (let i = 2; i < num; i--) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
