const LinkedList = require("../linked_list.js");

function init() {
  const list = new LinkedList();

  list.insertFirst("a").insertFirst("b").insertFirst("c").insertFirst("d");

  return list;
}

describe("Linked List tests:", () => {
  test("Insert first item", () => {
    let list = init();

    expect(list.insertFirst("x").toString()).toBe("x,a,b,c,d");
    expect(list.head.value).toBe("x");
    expect(list.tail.value).toBe("a");
  });

  test("Insert last item", () => {
    let list = init();

    expect(list.insertLast("x").toString()).toBe("a,b,c,d,x");
    expect(list.head.value).toBe("a");
    expect(list.tail.value).toBe("x");
  });

  test("Insert item in empty list", () => {
    let list = new LinkedList();

    expect(list.insertFirst("x").toString()).toBe("x");
    expect(list.head.value).toBe("x");
    expect(list.tail.value).toBe("x");
  });

  test("Find item", () => {
    let list = init();

    expect(list.find("d").toString()).toBe("d");
    expect(list.find("x")).toBe(null);
  });
});
