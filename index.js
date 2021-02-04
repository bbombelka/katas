const lastDigitRegex = /(\d+)(?!\w)/;

function incrementString(str) {
  if (containsEndingDigitCharacter(str)) {
    return handleDigitString(str);
  }

  return str + 1;
}

function containsEndingDigitCharacter(str) {
  return /\d$/.test(str);
}

function handleDigitString(str) {
  const stringDigits = str.match(lastDigitRegex).pop();
  const numberDigits = parseInt(stringDigits);
  const incrementedStringedNumber = String(numberDigits + 1);
  const newStringDigits =
    stringDigits.length < incrementedStringedNumber.length
      ? incrementedStringedNumber
      : stringDigits.slice(0, stringDigits.length - incrementedStringedNumber.length) + incrementedStringedNumber;

  return str.replace(lastDigitRegex, newStringDigits);
}

module.exports = incrementString;
