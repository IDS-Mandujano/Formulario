export class Node {
    #data;
    #next;

    constructor(data) {
        this.#data = data;
        this.#next = undefined;
    }

    getData() {
        return this.#data;
    }

    get next() {
        return this.#next;
    }

    set next(node) {
        this.#next = node;
    }
}
