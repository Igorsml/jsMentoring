class MySet {
  constructor(obj) {
    this.obj = { ...obj };
    this.length = obj.length;
  }

  add() {
    Array.from(arguments).forEach((elem, i) => {
      if (elem === null) return;

      this.obj[arguments.length + i] = elem;
      this.length++;
    });
  }

  has() {
    for (const arg of arguments) {
      return Object.values(this.obj).indexOf(arg) > -1 ? true : false;
    }
  }

  delete() {
    for (const arg of arguments) {
      if (Object.values(this.obj).indexOf(arg) > -1) {
        delete this.obj[arg];
        this.length--;
        return true;
      } else {
        return false;
      }
    }
  }

  size() {
    return this.length;
  }
}

/* 1.

  Могу получить доступ к свойствам из класса Set()
  за пределами класса. Нарушение принципа инкапсуляции.

  console.log(set.obj) 
  console.log(set.length)

  Лучше сделать их "приватными" и если это требуется
  предоставить интерфейс. Получается что set.length дулирование метода size()

    Может так:
    this._obj = { ...obj };
    this._length = obj.length;

*/

/* 2.
  Оригинальный Set() предоставляет API метод:
  clear(). Подумай как реализовать. * С delete() есть отличия.
*/

/* 3.
  При попытке создания пустого new MySet()
  И добавление туда значений через add()
  При попытке получить size() ловим ошибку ->
  can't access property "length", obj is undefined

  let set = new MySet();
  set.add(1)
  set.add(1)
  set.add(2)
  console.log(set.size())
  
  Оригинальный Set создаст вначале пустой объект, затем
  его наполнит и size валидно отработает.
  Следует добавить обработку такого случая
*/

/* 4.
  Также сыпится при создании просто пустого let set = new MySet(); 
  Сразу падаем в ошибку:
  can't access property "length", obj is undefined
  Подумай почему ? Ведь я даже не обращаюсь к size и length никак))
*/

/* 5.
  Чтобы получить size, нужно вызывать функцию size как функцию size()

  let set = new MySet([1, 2]);
  console.log( set.size() )

  В оригинальном сете не так. Подумай почему так?
  let set = new Set([1, 2]);
  console.log(set.size)

  Подумай как сделать без вызова, чтобы просто обращаться к методу
  Что нам предоставляет такую возможность
*/

/* Итог:
  По логике в целом ок. Возможно, я бы подумал как обойтись без 
  Array.from и arguments. Мне кажется это немного путает. Хотя в целом
  решение интересное за это лайкос.

  Стоит обработать кейсы, которые я описал и ещё сравнить со стандартным Set-ом.
  Вроде мелочи, но в оригинале так сделали, а значит не просто так.
*/
