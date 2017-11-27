"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataTypes {
}
DataTypes.String = 'String';
DataTypes.Number = 'Number';
DataTypes.ListOfNumbers = 'List<Number>';
DataTypes.CommaDelimitedList = 'CommaDelimitedList';
exports.default = DataTypes;
class IntrinsicFunction {
    constructor(name, payload) {
        this.name = name;
        this.payload = payload;
    }
    toJSON() {
        return { [this.name]: this.payload };
    }
}
exports.IntrinsicFunction = IntrinsicFunction;
class ConditionIntrinsicFunction extends IntrinsicFunction {
    constructor(name, payload) {
        super(name, payload);
    }
}
exports.ConditionIntrinsicFunction = ConditionIntrinsicFunction;
