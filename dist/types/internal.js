"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CFFunction {
    constructor(name, payload) {
        this.name = name;
        this.payload = payload;
    }
    toJSON() {
        return { [this.name]: this.payload };
    }
}
exports.CFFunction = CFFunction;
