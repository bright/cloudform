/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TagsEntry {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TagsEntry) {
        Object.assign(this, properties)
    }
}

export interface SchemaProperties {
    Type: Value<string>
    Description?: Value<string>
    Content: Value<string>
    RegistryName: Value<string>
    SchemaName?: Value<string>
    Tags?: List<TagsEntry>
}

export default class Schema extends ResourceBase<SchemaProperties> {
    static TagsEntry = TagsEntry

    constructor(properties: SchemaProperties) {
        super('AWS::EventSchemas::Schema', properties)
    }
}
