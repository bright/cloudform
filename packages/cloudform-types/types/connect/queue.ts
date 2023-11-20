/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class OutboundCallerConfig {
    OutboundCallerIdNumberArn?: Value<string>
    OutboundFlowArn?: Value<string>
    OutboundCallerIdName?: Value<string>

    constructor(properties: OutboundCallerConfig) {
        Object.assign(this, properties)
    }
}

export interface QueueProperties {
    Status?: Value<string>
    HoursOfOperationArn: Value<string>
    Description?: Value<string>
    InstanceArn: Value<string>
    QuickConnectArns?: List<Value<string>>
    OutboundCallerConfig?: OutboundCallerConfig
    MaxContacts?: Value<number>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Queue extends ResourceBase<QueueProperties> {
    static OutboundCallerConfig = OutboundCallerConfig

    constructor(properties: QueueProperties) {
        super('AWS::Connect::Queue', properties)
    }
}
