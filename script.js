


class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
    } else {
      let temp = this.listHead;
      while (temp.nextNode != null) {
        temp = temp.nextNode; 
      }

      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
  }

  size() {
    if (this.listHead == null) {
      return 0;
    } else {
      let temp = this.listHead;
      let counter = 1;
      while (temp.nextNode != null) {
        temp = temp.nextNode; 
        counter++;
      }

      return counter;
    }
  }

  head() {
    return this.listHead;
  }

  tail() {
    if (this.listHead == null) {
      return this.listHead;
    }
    let temp = this.listHead;
    while (temp.nextNode != null) {
      temp = temp.nextNode; 
    }

    return temp;
  }

  at(index) {
    if (this.listHead == null) {
      return null;
    }
    let temp = this.listHead;
    let counter = 0;
    
    while (counter < index) {
      temp = temp.nextNode; 
      counter++;
    }

    return temp;
  }

  pop() {
    if (this.listHead == null) {
      return;
    } 

    let temp = this.listHead;
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode; 
    }

    temp.nextNode = null;
  }

  contains(value) {
    if (this.listHead.value === value) {
      return true;
    } else {
      let temp = this.listHead;
      while (temp.nextNode != null && temp.value !== value) {
        temp = temp.nextNode; 
      }

      return temp.value === value ? true : false;
    }
  }

  find(value) {
    if (this.listHead == null) {
      return null;
    }
    let temp = this.listHead;
    let counter = 0;
    while (temp.nextNode != null && temp.value !== value) {
      temp = temp.nextNode; 
      counter++;
    }

    return temp.value === value ? counter : null;
  }

  toString() {
    if (this.listHead == null) {
      return null;
    }

    let temp = this.listHead;
    let string = `( ${temp.value} ) -> `; 
    while (temp.nextNode != null) {
      temp = temp.nextNode;
      string += `( ${temp.value} ) -> `;
    }

    string += 'null';
    console.log(string);
  }

  insertAt(value, index) {
    if (this.listHead == null) {
      return null;
    }

    if (index == 0) {
      let temp = this.listHead;
      this.listHead = new Node(value);
      this.listHead.nextNode = temp;
      return;
    }

    let temp = this.listHead;
    let previous;
    let counter = 0;
    
    while (counter < index) {
      previous = temp;
      temp = temp.nextNode; 
      counter++;
    }

    previous.nextNode = new Node(value)
    previous.nextNode.nextNode = temp;
  }

  removeAt(index) {
    if (this.listHead == null) {
      return null;
    }
    if (index == 0) {
      this.listHead = this.listHead.nextNode;
      return;
    }
    let temp = this.listHead;
    let previous;
    let counter = 0;
    
    while (counter < index) {
      previous = temp;
      temp = temp.nextNode;
      counter++;
    }

    previous.nextNode = temp.nextNode;
  }
}

class Node {
  constructor(val) {
    this.value = val || null;
    this.nextNode = null;
  }
}
