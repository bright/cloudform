export declare type DataType = 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList';
export default class DataTypes {
    static String: DataType;
    static Number: DataType;
    static ListOfNumbers: DataType;
    static CommaDelimitedList: DataType;
}
export declare class CFFunction {
    private name;
    private payload;
    constructor(name: string, payload: any);
    toJSON(): {
        [x: string]: any;
    };
}
export declare type Value<T> = T | CFFunction;
