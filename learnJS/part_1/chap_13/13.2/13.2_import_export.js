// работает export до объявления
export const num = [1, 2, 42];

// не ставится ; после экспорта класса / функции
// для export default фигурные скобки не нужны
export default function getYear() {
  return new Date().getFullYear();
}

// проверить npm пакет:  "github js name", где "name" это имя пакета

/*
if (something) {
  import { sayHi } from "./say.js";  Ошибка: импорт должен быть на верхнем уровне
} 
*/
