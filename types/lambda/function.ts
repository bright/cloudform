import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Code from './code'
import DeadLetterConfig from './deadLetterConfig'
import Environment from './environment'
import VpcConfig from './vpcConfig'

export type Runtime = "*" | "dotnetcore1.0" | "nodejs" | "nodejs4.3" | "nodejs4.3-edge" | "nodejs6.10" | "java8" | "python2.7" | "python3.6" | "nodejs6.10"

export interface FunctionProperties {
    Code?: Code
    Description?: Value<string>
    DeadLetterConfig?: DeadLetterConfig
    Environment?: Environment
    FunctionName?: Value<string>
    Handler: Value<string>
    KmsKeyArn?: Value<string>
    MemorySize?: Value<number>
    Role: Value<string>
    Runtime: Value<Runtime>
    Timeout?: Value<number>
    VpcConfig?: VpcConfig
}

export default class Function extends ResourceBase {
    constructor(properties: FunctionProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::Function', properties, dependsOn)
    }
}