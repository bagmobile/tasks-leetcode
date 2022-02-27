class Heap {

    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.data.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.data.length;
    }

    isEmpty() {
        return !this.data.length
    }

    swap(i, j) {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }

    push(key) {
        this.data.push(key);
        this.heapifyUp();
    }

    heapifyUp() {

        let currentIndex = this.data.length - 1;
        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (this.hasLeftChild(currentIndex)) {

            let biggestChildIndex = this.getLeftChildIndex(currentIndex);

            if (this.hasRightChild(currentIndex)
                && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {
                biggestChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.data[currentIndex] > this.data[biggestChildIndex]) {
                return
            }

            this.swap(currentIndex, biggestChildIndex)
            currentIndex = biggestChildIndex;
        }

    }

    poll() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.data.length === 1) {
            return this.data.pop();
        }
        const max = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return max;

    }
}

const heap = new Heap();
heap.push(25);
console.log(heap.data)
heap.push(5);
console.log(heap.data)
heap.push(40);
console.log(heap.data)
heap.push(70);
console.log(heap.data)
heap.push(90);
console.log(heap.data)
heap.push(44);
console.log(heap.data)

console.log(heap.poll())
console.log(heap.poll())
console.log(heap.poll())
console.log(heap.poll())
console.log(heap.poll())
console.log(heap.poll())
console.log(heap.poll())
