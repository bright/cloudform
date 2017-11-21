import {DataType, DataTypes} from "./common"

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

    get Type() {
        return DataTypes.String
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

    get Type() {
        return DataTypes.Number
    }
}

// TODO List<Number> and CommaDelimitedList