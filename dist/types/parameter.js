"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class StringParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
    get Type() {
        return dataTypes_1.default.String;
    }
}
exports.StringParameter = StringParameter;
class NumberParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
    get Type() {
        return dataTypes_1.default.Number;
    }
}
exports.NumberParameter = NumberParameter;
// TODO List<Number> and CommaDelimitedList 
