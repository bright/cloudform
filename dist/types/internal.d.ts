import Parameter from "./parameter";
import Resource from "./resource";
export interface CloudformTemplate {
    Description?: string;
    Parameters?: {
        [key: string]: Parameter;
    };
    Mappings?: {
        [key: string]: {
            [key: string]: {
                [key: string]: string | number;
            };
        };
    };
    Resources?: {
        [key: string]: Resource;
    };
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
