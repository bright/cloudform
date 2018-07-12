/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.5.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RepositoryTrigger {
    Events?: List<Value<string>>
    Branches?: List<Value<string>>
    CustomData?: Value<string>
    DestinationArn?: Value<string>
    Name?: Value<string>

    constructor(properties: RepositoryTrigger) {
        Object.assign(this, properties)
    }
}

export interface RepositoryProperties {
    RepositoryName: Value<string>
    Triggers?: List<RepositoryTrigger>
    RepositoryDescription?: Value<string>
}

export default class Repository extends ResourceBase {
    static RepositoryTrigger = RepositoryTrigger

    constructor(properties?: RepositoryProperties) {
        super('AWS::CodeCommit::Repository', properties)
    }
}
