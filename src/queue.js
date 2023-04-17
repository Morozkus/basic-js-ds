const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    if (!this.queue) {
      return {}
    }

    return this.queue
  }

  enqueue(x) {
    if (!this.queue) {
      return this.queue = new ListNode(x)
    }
    let queue = this.queue
    while (true) {
      if (queue.next == null) {
        return queue.next = new ListNode(x)
      }

      queue = queue.next
    }
  }

  dequeue() {
    const head = this.queue
    const body = this.queue.next
    head.next = null
    this.queue = body
    return head.value
  }
}

module.exports = {
  Queue
};
