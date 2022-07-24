const adaptiveNameTask = (str) => str.toLowerCase().replaceAll(" ", "_");

adaptiveNameTask("5 kyu The Hashtag Generator"); // '5_kyu_the_hashtag_generator'
console.log(adaptiveNameTask("5 kyu The Hashtag Generator"));
