/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface TargetProperties {
    Key: Value<string>
    Values: Value<string>[]
}

export class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::Target', properties, dependsOn)
    }
}

export interface ParameterValuesProperties {
    ParameterValues: Value<string>[]
}

export class ParameterValues extends ResourceBase {
    constructor(properties: ParameterValuesProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::ParameterValues', properties, dependsOn)
    }
}

export interface AssociationProperties {
    DocumentVersion?: Value<string>
    InstanceId?: Value<string>
    Name: Value<string>
    Parameters?: {[key: string]: ParameterValues}
    ScheduleExpression?: Value<string>
    Targets?: Target[]
}

export default class Association extends ResourceBase {
    constructor(properties: AssociationProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::Association', properties, dependsOn)
    }
}