function isDate(str) {
  const parts = str.split(/[-/]/);

  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (
      day >= 1 && day <= 31 &&
      month >= 1 && month <= 12 &&
      year >= 1000 && year <= 9999
    ) {
      return true;
    }
  }

  return false;
}

function filterDates(inputArray) {
  const resultArray = [];

  inputArray.forEach((str) => {
    if (isDate(str)) {
      const [day, month, year] = str.split(/[-/]/);
      resultArray.push(`${day}-${month}-${year}`);
    }
  });

  return resultArray;
}

const inputArray = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const filteredArray = filterDates(inputArray);

console.log(filteredArray.map(date => `${date}`));
