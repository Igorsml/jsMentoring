"use strict";

// можем присвоить метод самому классу, такие методы будут называться статическими
class Antistatic {
  static staticMethod() {
    console.log(this === Antistatic);
  }
}

Antistatic.staticMethod(); // true

// используются для реализации функций, принадлежащих классу целиком
class Article {
  constructor(title, date, speed, name) {
    this.title = title;
    this.date = date;
    this.speed = speed;
    this.name = name;
  }
  // тоже самое что и прямое присваивание Article.author = 'Igor Sml'
  static author = "Igor Sml";

  static compare(a, b) {
    return a.date - b.date;
  }

  print(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} print with speed ${this.speed} page / min.`);
  }

  static createTodays() {
    // this = Article
    return new this(
      `Today digest, ${new Intl.DateTimeFormat("en-US").format(new Date())}`
    );
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 1, 1)),
  new Article("JS", new Date(2019, 1, 1)),
];

articles.sort(Article.compare);
let articleToday = Article.createTodays();
articleToday.title; // 'Today digest, 9/26/2022'
console.log(articles[0].title); // HTML
console.log(Article.author); // Igor Sml

// статические свойства и методы наследуются
class Article {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  print(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} print with speed ${this.speed} page / min.`);
  }

  static createTodays() {
    // this = Article
    return new this(
      `Today digest, ${new Intl.DateTimeFormat("en-US").format(new Date())}`
    );
  }
}

class Page extends Article {
  hot() {
    console.log(`News ${this.name} looks so hot`);
  }
}

let news = [
  new Page("6seniors ბათუმი", 100),
  new Page("6seniors in Alanya", 77),
];
news[0].print(); // '6seniors ბათუმი print with speed 10 page / min.'
