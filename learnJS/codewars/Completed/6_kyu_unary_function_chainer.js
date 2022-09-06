// https://www.codewars.com/kata/54ca3e777120b56cb6000710

const chained = (fun) => (i) => fun.reduce((r, chain) => chain(r), i);
