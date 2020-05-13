/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Code {
    S3!: S3

    constructor(properties: Code) {
        Object.assign(this, properties)
    }
}

export class S3 {
    ObjectVersion?: Value<string>
    Bucket!: Value<string>
    Key!: Value<string>

    constructor(properties: S3) {
        Object.assign(this, properties)
    }
}

export class RepositoryTrigger {
    Events!: List<Value<string>>
    Branches?: List<Value<string>>
    CustomData?: Value<string>
    DestinationArn!: Value<string>
    Name!: Value<string>

    constructor(properties: RepositoryTrigger) {
        Object.assign(this, properties)
    }
}

export interface RepositoryProperties {
    RepositoryName: Value<string>
    Triggers?: List<RepositoryTrigger>
    Code?: Code
    RepositoryDescription?: Value<string>
    Tags?: List<ResourceTag>
}

export default class Repository extends ResourceBase<RepositoryProperties> {
    static Code = Code
    static S3 = S3
    static RepositoryTrigger = RepositoryTrigger

    constructor(properties: RepositoryProperties) {
        super('AWS::CodeCommit::Repository', properties)
    }
}
