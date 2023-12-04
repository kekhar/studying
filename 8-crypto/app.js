// Чтоб избежать повторений
function swapChars(passwordArray, index1, index2) {
    const temp = passwordArray[index1];
    passwordArray[index1] = passwordArray[index2];
    passwordArray[index2] = temp;
}

function encryptionPassword(password) {
    const encryptPassword = password.split('');
    swapChars(encryptPassword, 0, encryptPassword.length - 1);
    swapChars(encryptPassword, 2, encryptPassword.length - 3);
    return encryptPassword.join('');
}


// Данные для 1-ой функции
const inputPassword = 'QWERTY7265';
const crypto = encryptionPassword(inputPassword);
console.log(`Зашифрованный пароль: ${crypto}`);

// Проверка пароля
function checkingPassword(crypto, inputPassword) {
    const decryptPassword = crypto.split('');
    swapChars(decryptPassword, 0, decryptPassword.length - 1);
    swapChars(decryptPassword, 2, decryptPassword.length - 3);

    const decryptPasswordString = decryptPassword.join('');
    if (decryptPasswordString === inputPassword) {
        return 'Пароль верен';
    } else {
        return 'Пароль не верен';
    }
}

// Выводим данные
const result = checkingPassword(crypto, inputPassword);
console.log(result);