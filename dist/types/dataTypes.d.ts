export declare type DataType = 'String' | 'Number' | 'List<Number>' | 'CommaDelimitedList';
export default class DataTypes {
    static String: DataType;
    static Number: DataType;
    static ListOfNumbers: DataType;
    static CommaDelimitedList: DataType;
}
export declare class IntrinsicFunction {
    private name;
    private payload;
    constructor(name: string, payload: any);
    toJSON(): {
        [x: string]: any;
    };
}
export declare class ConditionIntrinsicFunction extends IntrinsicFunction {
    constructor(name: string, payload: any);
}
export declare type Value<T> = T | IntrinsicFunction;
export declare type List<T> = T[] | IntrinsicFunction;
export declare type Condition = ConditionIntrinsicFunction | {
    Condition: Value<string>;
};
