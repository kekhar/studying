import axios, { AxiosResponse, AxiosError } from 'axios';

// Определяем enum для пола пользователя
enum Gender {
    Male = 'male',
    Female = 'female',
}

// Определяем интерфейс для данных пользователя
interface User {
    id: number;
    name: string;
    email: string;
    gender: Gender;
}

// Функция для выполнения запроса к API
async function fetchUsers(): Promise<User[]> {
    try {
        const response: AxiosResponse<User[]> = await axios.get('https://dummyjson.com/users');

        return response.data;
    } catch (error) {
        // Обрабатываем ошибку, если запрос завершился неудачно
        if (axios.isAxiosError(error)) {
            // Выводим сообщение об ошибке
            console.error('Ошибка при выполнении запроса:', error.message);
        } else {
            // Выводим другие типы ошибок, если они есть
            console.error('Неизвестная ошибка:', error);
        }
        
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
