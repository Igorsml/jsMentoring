const LinkedList = require("../linked_list.js");

function init() {
  const list = new LinkedList();

  list.insertLast("a").insertLast("b").insertLast("c").insertLast("d");

  return list;
}

describe("Linked List tests:", () => {
  test("Insert first item", () => {
    let list = init();

    expect(list.insertFirst("x").toString()).toBe("x,a,b,c,d");
    expect(list.head.value).toBe("x");
    expect(list.tail.value).toBe("d");
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

  test("Delete multiple", () => {
    let list = init();

    list.insertFirst("a");
    expect(list.delete("a").toString()).toBe("a");
    expect(list.toString()).toBe("b,c,d");
    expect(list.head.value).toBe("b");
    expect(list.tail.value).toBe("d");
  });

  test("Insert in the middle", () => {
    let list = init();

    let prev = list.find("b");
    list.insertAt("x", prev);
    expect(list.toString()).toBe("a,b,x,c,d");
  });

  test("Insert in the end", () => {
    let list = init();

    let prev = list.find("d");
    list.insertAt("x", prev);
    expect(list.toString()).toBe("a,b,c,d,x");
    expect(list.tail.value).toBe("x");
  });
});
