/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class KinesisConfiguration {
    StreamArn?: Value<string>
    AggregationEnabled?: Value<boolean>

    constructor(properties: KinesisConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StreamProperties {
    LedgerName: Value<string>
    StreamName: Value<string>
    RoleArn: Value<string>
    InclusiveStartTime: Value<string>
    ExclusiveEndTime?: Value<string>
    KinesisConfiguration: KinesisConfiguration
    Tags?: List<ResourceTag>
}

export default class Stream extends ResourceBase<StreamProperties> {
    static KinesisConfiguration = KinesisConfiguration

    constructor(properties: StreamProperties) {
        super('AWS::QLDB::Stream', properties)
    }
}
