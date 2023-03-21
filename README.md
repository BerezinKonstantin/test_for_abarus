# Тестовое задание для "Абарус"

## Техническое задание
### ОБЩИЕ ТРЕБОВАНИЯ:
- Приложение должно работать в Chrome и Firefox.
- Разрешается использовать UI фреймворки по типу Bootstrap.
- Код должен быть чистым и читабельным.
- Не должно быть необоснованного дублирования, всё должно распределяться по компонентам.
- Код должен быть отформатирован в едином стиле.
- Вёрстка должна совпадать с макетами Figma.
- Приложение должно быть написано на React с TypeScript.
- Плюсом будет использование глобального state менеджера Redux или MobX
- Список данных : https://jsonplaceholder.typicode.com/posts

### ОПИСАНИЕ ПРИЛОЖЕНИЯ:
- При входе на страницу отображается таблица с данными.
- На одной странице таблицы показывается только 10 записей.
- Под таблицей располагаются элементы, показывающие количество страниц таблицы.
- Кнопки “Назад” и “Далее” переключают страницы таблицы.
- Переключение между страницами происходит без перезагрузки.
- При нажатии на заголовки столбцов происходит сортировка записей (от большего к меньшему или по
алфавиту).
- В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение
присутствует.
- Страница таблицы должна отображаться в URL браузера.

### Макет Figma:
https://www.figma.com/file/amcWeZhjaZ0eSyYiSNG6vN/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B?node-id=0%3A1

## Результат выполнения:

Функционал:
- Выполнен на React.js, TypeScript.
- Хранение состояний с помощью Redux, Redux ToolKit.

## Деплой на Vercel:
https://test-for-abarus.vercel.app/
