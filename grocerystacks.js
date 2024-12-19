class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.printStack();
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    const item = this.items.pop();
    this.printStack();
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    console.log("Stack:", this.items);
  }
}

const groceryStack = new Stack();
for (let i = 0; i < 5; i++) {
  const item = prompt(`Enter grocery item ${i + 1}:`);
  groceryStack.push(item);
}

groceryStack.pop();
console.log("Top item:", groceryStack.peek());

