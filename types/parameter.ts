import DataType from "./dataTypes"

export default interface Parameter {
    AllowedPattern?: string
    AllowedValues?: any[]
    ConstraintDescription?: string
    Default?: any
    Description?: string
    MaxLength?: number
    MaxValue?: number
    MinLength?: number
    MinValue?: number
    NoEcho?: boolean
    Type: DataType | string
}

export interface StringParameterProperties {
    AllowedPattern?: string
    AllowedValues?: string[]
    ConstraintDescription?: string
    Default?: string
    Description?: string
    MaxLength?: number
    MinLength?: number
    NoEcho?: boolean
}

export class StringParameter implements Parameter {
    Type = DataType.String

    AllowedPattern?: string
    AllowedValues?: string[]
    ConstraintDescription?: string
    Default?: string
    Description?: string
    MaxLength?: number
    MinLength?: number
    NoEcho?: boolean

    constructor(properties?: StringParameterProperties) {
        Object.assign(this, properties)
    }
}

export interface NumberParameterProperties {
    AllowedValues?: number[]
    ConstraintDescription?: string
    Default?: number
    Description?: string
    MaxValue?: number
    MinValue?: number
    NoEcho?: boolean
}

export class NumberParameter implements Parameter {
    Type = DataType.Number

    AllowedValues?: number[]
    ConstraintDescription?: string
    Default?: number
    Description?: string
    MaxValue?: number
    MinValue?: number
    NoEcho?: boolean

    constructor(properties?: NumberParameterProperties) {
        Object.assign(this, properties)
    }
}

// TODO List<Number> and CommaDelimitedList