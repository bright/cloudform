export type DataType = 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList'

export default class DataTypes {
    static String: DataType = 'String'
    static Number: DataType = 'Number'
    static ListOfNumbers: DataType = 'List<Number>'
    static CommaDelimitedList: DataType = 'CommaDelimitedList'
}

export class IntrinsicFunction {
    constructor(private name: string, private payload: any) {
    }

    toJSON() {
        return {[this.name]: this.payload}
    }
}

export class ConditionIntrinsicFunction extends IntrinsicFunction {
    constructor(name: string, payload: any) {
        super(name, payload)
    }
}

export type Value<T> = T | IntrinsicFunction
export type List<T> = T[] | IntrinsicFunction
export type Condition = ConditionIntrinsicFunction | { Condition: Value<string> }