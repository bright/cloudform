export type DataType = 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList'

export default class DataTypes {
    static String: DataType = 'String'
    static Number: DataType = 'Number'
    static ListOfNumbers: DataType = 'List<Number>'
    static CommaDelimitedList: DataType = 'CommaDelimitedList'
}

export class CFFunction {
    constructor(private name: string, private payload: any) {
    }

    toJSON() {
        return {[this.name]: this.payload}
    }
}

export type Value<T> = T | CFFunction
export type List<T> = T[] | CFFunction
