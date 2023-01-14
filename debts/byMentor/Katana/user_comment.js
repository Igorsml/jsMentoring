async function getUserComments() {
  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  )
    .then((response) => response.json())
    .then((data) => {
      for (const comment of data) {
        console.table(`User id 1 comment: ${comment.body}\n`);
      }
    })
    .catch((err) => console.log(err.message));
}

getUserComments();
