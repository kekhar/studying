"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Определяем enum для пола пользователя
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
// Функция для выполнения запроса к API
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://dummyjson.com/users');
            return response.data;
        }
        catch (error) {
            // Обрабатываем ошибку, если запрос завершился неудачно
            if (axios_1.default.isAxiosError(error)) {
                // Выводим сообщение об ошибке
                console.error('Ошибка при выполнении запроса:', error.message);
            }
            else {
                // Выводим другие типы ошибок, если они есть
                console.error('Неизвестная ошибка:', error);
            }
            return [];
        }
    });
}
// Пример использования функции fetchUsers
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Получаем данные пользователей
            const users = yield fetchUsers();
            // Выводим данные пользователей в консоль
            console.log('Данные пользователей:', users);
        }
        catch (error) {
            console.error('Произошла ошибка:', error);
        }
    });
}
main();
