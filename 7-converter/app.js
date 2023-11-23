function convertCurrency(sum, fromCurrency, toCurrency) {
    let convertedSum;

    // Беру примерные числа
    switch (fromCurrency) {
        case 'руб':
            switch (toCurrency) {
                case '$':
                    convertedSum = sum * 0.012;
                    break;
                case 'евро':
                    convertedSum = sum * 0.011;
                    break;
                default:
                    console.log('Конвертация не поддерживается');
                    return null;
            }
            break;

        default:
            console.log('Конвертация не поддерживается');
            return null;
    }

    return convertedSum;
}

const sumInRubles = 1000;
const convertedSumInDollars = convertCurrency(sumInRubles, 'руб', '$');
const convertedSumInEuros = convertCurrency(sumInRubles, 'руб', 'евро');

console.log(`${sumInRubles} рублей равны ${convertedSumInDollars} долларам`);
console.log(`${sumInRubles} рублей равны ${convertedSumInEuros} евро`);