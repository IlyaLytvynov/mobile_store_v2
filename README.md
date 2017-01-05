# Для дальнейшей работы вам необходимо установить git c git-scm.org
# Node js c nodjs.org
# Скачать и установить mongodb c https://www.mongodb.com/download-center?jmp=nav#community
# Установка бвзы данных mongodb
- Установка монго с официального сайта в С:\MongoDb
- Создать папку C:\MongoDb\data\db
- Запуск монго сервера:
    - Перейти в папку  С:\MongoDb\Server\3.2\bin открываем консоль CMD
    - Из консоли запускаем mongod --dbpath C:\MongoDb\data\db - команда запуска выполняется
    каждый раз перед стартом приложения.
    !!! Консоль не закрываем

# Установка и запуск API сервера
- Переходим в папку mobile_store/server
- Запускаем консоль cmd или gitBash 
- В открывшейся консоли выполняем команду npm install(установятся все необходимые библиотеки)
- Переходим в mobile_store/server/database
- Выполняем команду в консоли node export.script.js  после выпонлнения двнной команды ctrl + c и запускаем следующую команду node comments.export.js

# Установка и запуск клиента
Переходим в папку mobile_store/client в командной строке/терминале выполняем:
- глобальную установку webpack командой: npm i -g webpack,
- установку локальных библиотек команда: npm install
- в папке client выполняем команду npm run dev запустится сервер разработки
- в браузере переходим по адресу http://localhost:8080


# Запросы к серверу
Получение каталога телефонов GET http://localhost:4001/api/v1/phones
Плучение деталей для телефона  GET http://localhost:4001/api/v1/phones/:id
Получение комментариев к телефону GET http://localhost:4001/api/v1/comments/:id
Добавление комментария к телефону POST http://localhost:4001/api/v1/comments/
body: {
  "item_id": "5706d89c40fe4998057b4fe9",
  "text": "comment for comment asdasdasdasdasdasdasd",
  "author": "test authordfsdfsdfdsf",
  "item_rating": 1
}

# Шаблоны
https://wireframe.cc/PfAd8i - детали
https://wireframe.cc/OCPbOo  - главная

