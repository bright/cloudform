/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface RepositoryTriggerProperties {
    Events?: Value<string>[]
    Branches?: Value<string>[]
    CustomData?: Value<string>
    DestinationArn?: Value<string>
    Name?: Value<string>
}

export class RepositoryTrigger extends ResourceBase {
    constructor(properties: RepositoryTriggerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeCommit::RepositoryTrigger', properties, dependsOn)
    }
}

export interface RepositoryProperties {
    RepositoryName: Value<string>
    Triggers?: RepositoryTrigger[]
    RepositoryDescription?: Value<string>
}

export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeCommit::Repository', properties, dependsOn)
    }
}
