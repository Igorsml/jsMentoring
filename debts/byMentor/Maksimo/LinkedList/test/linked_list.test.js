const { LinkedList } = require("../linked_list.js");

function init() {
  const list = new LinkedList();

  list.insertFirst("a").insertFirst("b").insertFirst("c").insertFirst("d");

  return list;
}

describe("Linked List tests:", () => {
  test("Insert last item", () => {
    let list = init();

    expect(list.insertLast("x").toString()).toBe("a, b, c, d, x");
    expect(list.head.value).toBe("a");
    expect(list.tail.value).toBe("x");
  });
});
