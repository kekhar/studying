// Функция для "Шифратор пароля"
function encryptionPassword(password) {
    const encryptPassword = password.split('');
    const firstChar = encryptPassword[0];
    const thirdChar = encryptPassword[2];
    encryptPassword[0] = encryptPassword[encryptPassword.length - 1];
    encryptPassword[2] = encryptPassword[encryptPassword.length - 3];
    encryptPassword[encryptPassword.length - 3] = thirdChar;
    encryptPassword[encryptPassword.length - 1] = firstChar;

    return encryptPassword.join('');
}

// Данные для 1-ой функции
const inputPassword = 'QWERTY7265';
const crypto = encryptionPassword(inputPassword);
console.log(`Зашифрованный пароль: ${crypto}`);

// Проверка пароля
function checkingPassword(crypto, inputPassword) {
    const decryptPassword = crypto.split('');
    const firstChar = decryptPassword[0];
    const thirdChar = decryptPassword[2];
    decryptPassword[0] = decryptPassword[decryptPassword.length - 1];
    decryptPassword[2] = decryptPassword[decryptPassword.length - 3];
    decryptPassword[decryptPassword.length - 3] = thirdChar;
    decryptPassword[decryptPassword.length - 1] = firstChar;

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