/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface PolicyProperties {
    PolicyDocument: any
    PolicyName: Value<string>
}

export class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Policy', properties, dependsOn)
    }
}

export interface GroupProperties {
    GroupName?: Value<string>
    ManagedPolicyArns?: Value<string>[]
    Path?: Value<string>
    Policies?: Policy[]
}

export default class Group extends ResourceBase {
    constructor(properties: GroupProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Group', properties, dependsOn)
    }
}