const root = ReactDOM.createRoot(document.getElementById("root"));
root.render("Hello react world!");

// Babel компилирует JSX в вызовы React.createElement().
const element = (React.createElement =
  ("h1", { className: "greeting" }, "Hello, world!"));

// под капотом
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world",
  },
};

// на выходе
const element = <h1 className="greeting">Привет, мир!</h1>;

// более легковесные react элементы
const root = ReactDOM.createRoot(document.getElementById("root"));

const element = <h1>Hello, Igor</h1>;
root.render(element);

// пример с часами, без компонента состояния, ререндерится только время
<div id="root"></div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Speical browser watch for you: {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1e3);
