function convertCurrency(sum, toCurrency) {
    let convertedSum;

    // Беру примерные числа
            switch (toCurrency) {
                case '$':
                    return convertedSum = sum * 0.012;
                case 'евро':
                    return convertedSum = sum * 0.011;
                default:
                    console.log('Конвертация не поддерживается');
                    return null;
            }
}

const sumInRubles = 1000;
const convertedSumInDollars = convertCurrency(sumInRubles, '$');
const convertedSumInEuros = convertCurrency(sumInRubles, 'евро');

console.log(`${sumInRubles} рублей равны ${convertedSumInDollars} долларам`);
console.log(`${sumInRubles} рублей равны ${convertedSumInEuros} евро`);