# vue-web

## Установка проекта
```
yarn install
```

### Запуск сервера
```
yarn serve
```

### Сборка проекта для продакшена
```
yarn build
```

### Запуск eslit для проверки проекта
```
yarn lint
```

#### Создайте файл api.js , в папке src и вставьте следующий код, замените точки на ваши данные
```
const firebaseConfig = {
	apiKey: "...",
	authDomain: "...",
	projectId: "...",
	storageBucket: "...",
	messagingSenderId: "...",
	appId: "...",
	measurementId: "..."
};

export default firebaseConfig;
```


