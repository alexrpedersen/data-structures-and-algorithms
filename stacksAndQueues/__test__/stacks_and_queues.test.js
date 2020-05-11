'use strict';


// Node class
class Node {
  
    constructor(value) {
        this.value = value;
        this.next = null;
  }
}

// Stack class
class Stack {
  
    constructor() {
        this.top = null; 
  }

 
  // push
  push(value) {
    const node = new Node(value);
    
    if (!this.top) {
      this.top = node;
    } 
    
    else {
      node.next = this.top;  // new node is this.top
      this.top = node;
    }
    return this;
  }


  // pop
  pop() {
    if (!this.top) {
      return null;
    } else {
      // top points current top's next node
      const poppedValue = this.top.value;
      this.top = this.top.next;
      return poppedValue;
    }
  }

  
  // peek
  peek() {
    if (!this.top) {
      return null;
    } else {
      const value = this.top.value
      return value;
    }
  }

  
  // isEmpty
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}


class Queue {
  
    constructor() {
        this.front = null;
        this.rear = null;
  }

  
  // enqueue
  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return this;
  }

  
  // dequeque
  dequeque() {
    if (!this.front) {
      return null;
    } else {
      const value = this.front.value;
      this.front = this.front.next;
      return value;
    }
  }

  
  // peek
  peek() {
    if (!this.front) {
      return null;
    } else {
      return this.front.value;
    }
  }

  
  // isEmpty
  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Node, Stack, Queue };