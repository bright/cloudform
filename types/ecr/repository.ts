/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface LifecyclePolicyProperties {
    LifecyclePolicyText?: Value<string>
    RegistryId?: Value<string>
}

export class LifecyclePolicy extends ResourceBase {
    constructor(properties: LifecyclePolicyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECR::LifecyclePolicy', properties, dependsOn)
    }
}

export interface RepositoryProperties {
    LifecyclePolicy?: LifecyclePolicy
    RepositoryName?: Value<string>
    RepositoryPolicyText?: any
}

export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ECR::Repository', properties, dependsOn)
    }
}
