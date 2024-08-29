// Stack implementation in JavaScript
class Stack {
    constructor() {
        this.items = [];
    }
    // Add a new element to the stack
    
   push(element) {
    this.items.push(element);
}
pop() {
    if (this.isEmpty()) {
        return "Stack is empty";
    }
    return this.items.pop();
}

peek() {
    if (this.isEmpty()) {
        return "Stack is empty";
    }
    return this.items[this.items.length - 1];
}
    
size() {
    return this.items.length;
}
isEmpty() {
    return this.items.length === 0;
}
    
clear() {
    this.items = [];
}
}

export default Stack;







