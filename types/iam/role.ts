/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface PolicyProperties {
    PolicyDocument: any
    PolicyName: Value<string>
}

export class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Policy', properties, dependsOn)
    }
}

export interface RoleProperties {
    AssumeRolePolicyDocument: any
    ManagedPolicyArns?: Value<string>[]
    Path?: Value<string>
    Policies?: Policy[]
    RoleName?: Value<string>
}

export default class Role extends ResourceBase {
    constructor(properties: RoleProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Role', properties, dependsOn)
    }
}