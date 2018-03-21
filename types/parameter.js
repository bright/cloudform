"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
class StringParameter {
    constructor(properties) {
        this.Type = dataTypes_1.default.String;
        Object.assign(this, properties);
    }
}
exports.StringParameter = StringParameter;
class NumberParameter {
    constructor(properties) {
        this.Type = dataTypes_1.default.Number;
        Object.assign(this, properties);
    }
}
exports.NumberParameter = NumberParameter;
// TODO List<Number> and CommaDelimitedList 
