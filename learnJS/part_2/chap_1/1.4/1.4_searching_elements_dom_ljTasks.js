//  Вот документ с таблицей и формой. Как найти?…

// Таблицу с id="age-table"
const table = document.getElementById("age-table");
console.log("table:", table);

// Все элементы label внутри этой таблицы (их три).
const labels = table.querySelectorAll("#age-table label");
console.log("labels:", labels); // [label, label, label]

// Первый td в этой таблице (со словом «Age»).
console.log("1st table td:", table.querySelector("td").innerHTML); // age

// Форму form с именем name="search".
const form = document.querySelector('form[name="search"]');
console.log("form:", form.innerHTML); // form <label>Search the site:...

// Первый input в этой форме
console.log("1st input in form:", form.querySelector("input")); // <input type="text" name="search">

// Последний input в этой форме.
const allInputs = form.querySelectorAll("input");
console.log("last input in form:", allInputs[allInputs.length - 1]); // <input type="submit" value="Search!">
