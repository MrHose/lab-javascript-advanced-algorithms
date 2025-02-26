class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  }

  enqueue(item) {

    if (this.canEnqueue()) {
      this.queueControl.unshift(item);
      return [this.queueControl[0]];
    } else {
      return 'Queue Overflow';
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue Underflow';
    } else {
      const last = this.queueControl[this.queueControl.length - 1];
      this.queueControl.pop()
      return last
    }
  }
}
