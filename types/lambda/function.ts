/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface VpcConfigProperties {
    SecurityGroupIds: Value<string>[]
    SubnetIds: Value<string>[]
}

export class VpcConfig extends ResourceBase {
    constructor(properties: VpcConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::VpcConfig', properties, dependsOn)
    }
}

export interface DeadLetterConfigProperties {
    TargetArn?: Value<string>
}

export class DeadLetterConfig extends ResourceBase {
    constructor(properties: DeadLetterConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::DeadLetterConfig', properties, dependsOn)
    }
}

export interface TracingConfigProperties {
    Mode?: Value<string>
}

export class TracingConfig extends ResourceBase {
    constructor(properties: TracingConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::TracingConfig', properties, dependsOn)
    }
}

export interface CodeProperties {
    S3Bucket?: Value<string>
    S3Key?: Value<string>
    S3ObjectVersion?: Value<string>
    ZipFile?: Value<string>
}

export class Code extends ResourceBase {
    constructor(properties: CodeProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::Code', properties, dependsOn)
    }
}

export interface EnvironmentProperties {
    Variables?: {[key: string]: Value<string>}
}

export class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::Environment', properties, dependsOn)
    }
}

export interface FunctionProperties {
    Code: Code
    DeadLetterConfig?: DeadLetterConfig
    Description?: Value<string>
    Environment?: Environment
    FunctionName?: Value<string>
    Handler: Value<string>
    KmsKeyArn?: Value<string>
    MemorySize?: Value<number>
    Role: Value<string>
    Runtime: Value<string>
    Tags?: ResourceTag[]
    Timeout?: Value<number>
    TracingConfig?: TracingConfig
    VpcConfig?: VpcConfig
}

export default class Function extends ResourceBase {
    constructor(properties: FunctionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::Function', properties, dependsOn)
    }
}
