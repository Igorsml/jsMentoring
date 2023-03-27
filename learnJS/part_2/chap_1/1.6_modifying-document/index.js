// вставки элементов: append, prepend, before, after, remove, replaceWith
const ul = document.querySelector("ul");
ul.before("before");
ul.after("after");
ul.prepend("prepend");
ul.append("append");

// если вставку html элемента хотим
ul.insertAdjacentHTML("beforeend", "<hr>");

const myDiv = document.createElement("div");
myDiv.className = "myDiv";
myDiv.innerHTML = "<strong>Hi, aboba!</strong> I am added before";
ul.append(myDiv);

// setTimeout(() => myDiv.remove(), 15000);

// все методы вставки удаляют узлы со старых мест, поэтому remove по сути не нужен
document.body.querySelector("#first");
document.body.querySelector("#second");
second.after(first);

ul.insertAdjacentHTML("afterend", "<hr>");
// клонирование cloneNode (true - с дочерники, fasle - без дочерних)
const myDiv2 = myDiv.cloneNode(true);
myDiv2.querySelector("#second");
first.append(myDiv2);
