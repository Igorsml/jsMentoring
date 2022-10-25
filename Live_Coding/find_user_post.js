/* 
  2. Нужно реализовать агрегацию массивов в один, 
     ниже описан output, который ожидается от вас
*/

// Input
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];

const posts = [
  {
    userId: 1,
    id: 1,
    title: "Cooking pancakes",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 2,
    title: "3 ways to say no",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 3,
    id: 3,
    title: "Moose flew into Space",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const comments = [
  {
    postId: 2,
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 2,
    id: 3,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
];

/* Output
  [{  id: 1,
      title: "Cooking pancakes",
      userName: "Leanne Graham",
      comentsCount: 2,
  }]
*/

function mergeArrays(posts, users, comments) {
  const resultArr = posts.map((post) => {
    const user = users.find((userItem) => userItem.id == post.userId);
    const comment = comments.filter((comment) => comment.postId === post.id);

    return {
      id: post.id,
      title: post.title,
      userName: user.name,
      comments: comment.length,
    };
  });

  return resultArr;
}

console.log(mergeArrays(posts, users, comments));
