'use strict';

import axios, { AxiosResponse, AxiosError } from 'axios';

// Определяем интерфейс для данных пользователя
interface User {
    id: number;
    name: string;
    email: string;
    gender: 'male' | 'female';
}

// Функция для выполнения запроса к API
async function fetchUsers(): Promise<User[]> {
    try {
        // Выполняем GET запрос к API
        const response: AxiosResponse<User[]> = await axios.get('https://dummyjson.com/users');

        // Возвращаем данные пользователей
        return response.data;
    } catch (error) {
        // Обрабатываем ошибку, если запрос завершился неудачно
        if (axios.isAxiosError(error)) {
            // Выводим сообщение об ошибке
            console.error('Ошибка при выполнении запроса:', error.message);
        } else {
            // Выводим другие типы ошибок, если они естьn
            console.error('Неизвестная ошибка:', error);
        }
        
        // Возвращаем пустой массив в случае ошибки
        return [];
    }
}

// Пример использования функции fetchUsers
async function main() {
    try {
        // Получаем данные пользователей
        const users: User[] = await fetchUsers();

        // Выводим данные пользователей в консоль
        console.log('Данные пользователей:', users);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

main();
