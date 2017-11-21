"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class StringParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
    get Type() {
        return common_1.DataTypes.String;
    }
}
exports.StringParameter = StringParameter;
class NumberParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
    get Type() {
        return common_1.DataTypes.Number;
    }
}
exports.NumberParameter = NumberParameter;
// TODO List<Number> and CommaDelimitedList 
