# rangeSlider
Простой слайдер диапазона с расширяемыми параметрами.
* Скачать zip - скоро...
***

## Демо
* Посмотреть демо страницу со слайдером - [посмотреть](https://madnessjs.github.io/rangeSlider/)

## Архитектура приложения
Плагин написан на чистом JavaScript, но завернут в метод объекта jQuery, который можно легко и просто вызвать на элементе с необходимыми вам параметрами. Прямо как и любой другой плагин для jQuery.  

Приложение поделено на 3 слоя, реализованные с помощью классов, в соответствии с паттерном проектирование MVP (Model-View-Presenter), где:
* Model (модель) - данные приложения
* View (представление) - внешний вид приложения
* Presenter (презентер) - слой-посредник между Model и View

Подписывание презентера на события в представлении осуществляется с помощью паттерна Observer(pub/sub). Который реализован с помощью вспомогательного класса

Зоны ответственности в приложении поделены между:
* Model - взаимодействует напрямую с данными в приложении. Хранит и перезаписывает, отдает по запросу презентера. Ничего не знает ни о представлении ни о презентере
* View - единственный видный пользователю слой, с которым тот взаимодействует тем самым передавая команды презентеру и получая через него же новые данные из модели для отображения. Ничего не знает ни о модели ни о презентере
* Presenter - получает данные из представления, на основе которых обновляет модель и затем обновляет представление на основе обновленных данных в моделе

UML-диаграмма приложения - [скачать](https://yadi.sk/d/ORytuO_5Luvzrg)

## Подключение слайдера на страницу
Подключаем следующие файлы:
1. Стили плагина
2. Библиотека jQuery
3. Скрипт плагина

И инициализируем плагин на странице посредством вызова метода rangeSlider на элементе.  
```javascript
$("#example").rangeSlider();
```

### Описание параметров

| Option | Default | Type | Description |
| --- | --- | --- | --- |
| min | 0 | number | Минимальное значение слайдера |
| max | 100 | number | Максимальное значение слайдера |
| step | 1 | number | Шаг передвижения ползунка. Не может быть меньше 1 |
| from | 0 | number | Текущее значение слайдера. При range: true - значение "от" |
| to | - | number | Если range: true - значение "до" |
| range | false | boolean | Возможность выбора диапазона |
| hideTip | true | boolean | Скрыть подсказку над бегунком |
| view | "horizontal" | string | При "horizontal" - горизонтальное расположение слайдера на странце. При "vertical" - вертикальное |
| theme | "aqua" | string | Тема слайдера. Имеется две темы - auqa и red |
