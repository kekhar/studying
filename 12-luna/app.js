function luhnCheck(cardNumber) {
  const cleanedCardNumber = cardNumber.replace(/[\s-]/g, '');

  let sum = 0;
  let double = false;

  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber[i], 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }
  return sum % 10 === 0;
}

const cardNumber = "4561-2612-1234-5464";
const isValid = luhnCheck(cardNumber);

console.log(isValid);