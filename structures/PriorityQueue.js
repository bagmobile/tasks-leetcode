class LazyPriorityQueue {

    MAX_PRIORITY = 100;

    constructor() {
        this.data = [];
    }

    isEmpty() {
        return !this.data.length
    }

    enqueue(value, priority = 0) {
        if (priority > this.MAX_PRIORITY) {
            throw new Error('Too much priority score!')
        }
        this.data.push({priority, value});
    }

    dequeue() {
        let indexFirstPriority = 0;
        let maxPriority = this.MAX_PRIORITY;

        if (this.isEmpty()) {
            return null;
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].priority < maxPriority && this.data[i].priority > 0) {
                maxPriority = this.data[i].priority;
                indexFirstPriority = i;
            }
        }
        return this.data.splice(indexFirstPriority, 1).pop().value;
    }

    dequeueAll() {
        const result = [];
        while (!this.isEmpty()) {
            result.push(this.dequeue())
        }
        return result;
    }

}

const lpq = new LazyPriorityQueue();
lpq.enqueue(222, 10);
lpq.enqueue(6666);
lpq.enqueue(111, 5);
lpq.enqueue(33, 1);
lpq.enqueue(44);
lpq.enqueue(878787, 2);
lpq.enqueue(252, 2);
lpq.enqueue(55, 1);
lpq.enqueue(445, 3);

console.log(lpq.dequeueAll());

class EagerPriorityQueue {
    constructor() {
        this.data = [];
    }

    enqueue(value, priority = 0) {
        if (priority > this.MAX_PRIORITY) {
            throw new Error('Too much priority score!')
        }

        let i = 0;
        while (i < this.data.length && priority !== 0) {
            if (this.data[i].priority > priority || this.data[i].priority === 0) {
                this.data.splice(i, 0, {value, priority});
                return
            }
            i++;
        }
        this.data.push({value, priority});

    }

    dequeue() {
        return this.data.shift();
    }

    dequeueAll() {
        const result = [];

        for (const el of this.data) {
            result.push(el.value)
        }
        return result;
    }
}

const epq = new EagerPriorityQueue();
epq.enqueue(222, 10);
epq.enqueue(6666);
epq.enqueue(111, 5);
epq.enqueue(33, 1);
epq.enqueue(44);
epq.enqueue(878787, 2);
epq.enqueue(252, 2);
epq.enqueue(55, 1);
epq.enqueue(445, 3);

console.log(epq.dequeueAll());


