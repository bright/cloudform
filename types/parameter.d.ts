import { DataType } from "./dataTypes";
export default interface Parameter {
    AllowedPattern?: string;
    AllowedValues?: any[];
    ConstraintDescription?: string;
    Default?: any;
    Description?: string;
    MaxLength?: number;
    MaxValue?: number;
    MinLength?: number;
    MinValue?: number;
    NoEcho?: boolean;
    Type: DataType | string;
}
export interface StringParameterProperties {
    AllowedPattern?: string;
    AllowedValues?: string[];
    ConstraintDescription?: string;
    Default?: string;
    Description?: string;
    MaxLength?: number;
    MinLength?: number;
    NoEcho?: boolean;
}
export declare class StringParameter implements Parameter {
    Type: DataType;
    AllowedPattern?: string;
    AllowedValues?: string[];
    ConstraintDescription?: string;
    Default?: string;
    Description?: string;
    MaxLength?: number;
    MinLength?: number;
    NoEcho?: boolean;
    constructor(properties?: StringParameterProperties);
}
export interface NumberParameterProperties {
    AllowedValues?: number[];
    ConstraintDescription?: string;
    Default?: number;
    Description?: string;
    MaxValue?: number;
    MinValue?: number;
    NoEcho?: boolean;
}
export declare class NumberParameter implements Parameter {
    Type: DataType;
    AllowedValues?: number[];
    ConstraintDescription?: string;
    Default?: number;
    Description?: string;
    MaxValue?: number;
    MinValue?: number;
    NoEcho?: boolean;
    constructor(properties?: NumberParameterProperties);
}
