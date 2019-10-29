/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 7.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ChannelStorage {
    CustomerManagedS3?: CustomerManagedS3
    ServiceManagedS3?: ServiceManagedS3

    constructor(properties: ChannelStorage) {
        Object.assign(this, properties)
    }
}

export class CustomerManagedS3 {
    Bucket!: Value<string>
    RoleArn!: Value<string>
    KeyPrefix?: Value<string>

    constructor(properties: CustomerManagedS3) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    NumberOfDays?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class ServiceManagedS3 {


    constructor(properties: ServiceManagedS3) {
        Object.assign(this, properties)
    }
}

export interface ChannelProperties {
    ChannelName?: Value<string>
    ChannelStorage?: ChannelStorage
    RetentionPeriod?: RetentionPeriod
    Tags?: List<ResourceTag>
}

export default class Channel extends ResourceBase<ChannelProperties> {
    static ChannelStorage = ChannelStorage
    static CustomerManagedS3 = CustomerManagedS3
    static RetentionPeriod = RetentionPeriod
    static ServiceManagedS3 = ServiceManagedS3

    constructor(properties?: ChannelProperties) {
        super('AWS::IoTAnalytics::Channel', properties || {})
    }
}
