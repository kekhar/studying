function isAgeValid(dateOfBirth) {
  const dobArray = dateOfBirth.split("-");
  const yearOfBirth = parseInt(dobArray[0]);
  const monthOfBirth = parseInt(dobArray[1]) - 1;
  const dayOfBirth = parseInt(dobArray[2]);
  const birthDate = new Date(yearOfBirth, monthOfBirth, dayOfBirth);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age >= 14;
}

// Пример использования:
const dateOfBirth = "2020-02-05";
const isValidAge = isAgeValid(dateOfBirth);
console.log(isValidAge);