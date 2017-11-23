/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface HadoopJarStepConfigProperties {
    Args?: Value<string>[]
    Jar: Value<string>
    MainClass?: Value<string>
    StepProperties?: KeyValue[]
}

export class HadoopJarStepConfig extends ResourceBase {
    constructor(properties: HadoopJarStepConfigProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::HadoopJarStepConfig', properties, dependsOn)
    }
}

export interface KeyValueProperties {
    Key?: Value<string>
    Value?: Value<string>
}

export class KeyValue extends ResourceBase {
    constructor(properties: KeyValueProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::KeyValue', properties, dependsOn)
    }
}

export interface StepProperties {
    ActionOnFailure: Value<string>
    HadoopJarStep: HadoopJarStepConfig
    JobFlowId: Value<string>
    Name: Value<string>
}

export default class Step extends ResourceBase {
    constructor(properties: StepProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Step', properties, dependsOn)
    }
}
