function palindrome(str) {
  
let a ="masai"
let res = "";
  for (let i = str.length; i > 0; i--) {
    res = res + str[i];
  }
  if (res == str) {
    return true;
  } else {
    return false;
  }
}
