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
