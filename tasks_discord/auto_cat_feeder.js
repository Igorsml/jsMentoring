/* Method list
Кормёжка:
1. Выдать порцию корма с заданным интервалом
2. Set задать порцию корма
3. Set задать интервал
4. Ручная кормёжка с определенной дозировкой
5. Запись кормёжки (успех или ошибка)

Уведомления хозяину:
1. Мало корма
2. Отсутствует питание
3. Следующая кормёжка
*/

class CatFeeder {
  #foodCount = 0;
  #isConnected = true;
}

const feeder = new CatFeeder();