function buildQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

// Пример использования
const queryParams = {
  search: 'Вася',
  take: 10,
};

const queryString = buildQueryString(queryParams);
console.log(queryString);
