"use strict";

class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }
  setAttribute(key, value) {
    this.attributes[key] = value;
  }
  getAttribute(key) {
    return this.attributes[key];
  }
  getTextContent() {
    return this.body;
  }
  setTextContent(body) {
    this.body = body;
  }
  stringifyAttributes() {
    // build: key="value" key2="value2"
  }
}

class HTMLAnchorElement extends HTMLElement {
  toString() {
    // Родительский метод
    const attrLine = this.stringifyAttributes();
    // Родительский метод
    const body = this.getTextContent();
    return `<a${attrLine}>${body}</a>`;
  }
}

const anchor = new HTMLAnchorElement({ href: "https://abobus.bus" });
anchor.setTextContent("abobus");
console.log(`Anchor: ${anchor}`);
