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

export class CrossChannelBehavior {
    BehaviorType!: Value<string>

    constructor(properties: CrossChannelBehavior) {
        Object.assign(this, properties)
    }
}

export class MediaConcurrency {
    Concurrency!: Value<number>
    Channel!: Value<string>
    CrossChannelBehavior?: CrossChannelBehavior

    constructor(properties: MediaConcurrency) {
        Object.assign(this, properties)
    }
}

export class RoutingProfileQueueConfig {
    Priority!: Value<number>
    QueueReference!: RoutingProfileQueueReference
    Delay!: Value<number>

    constructor(properties: RoutingProfileQueueConfig) {
        Object.assign(this, properties)
    }
}

export class RoutingProfileQueueReference {
    Channel!: Value<string>
    QueueArn!: Value<string>

    constructor(properties: RoutingProfileQueueReference) {
        Object.assign(this, properties)
    }
}

export interface RoutingProfileProperties {
    Description: Value<string>
    MediaConcurrencies: List<MediaConcurrency>
    InstanceArn: Value<string>
    AgentAvailabilityTimer?: Value<string>
    QueueConfigs?: List<RoutingProfileQueueConfig>
    DefaultOutboundQueueArn: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class RoutingProfile extends ResourceBase<RoutingProfileProperties> {
    static CrossChannelBehavior = CrossChannelBehavior
    static MediaConcurrency = MediaConcurrency
    static RoutingProfileQueueConfig = RoutingProfileQueueConfig
    static RoutingProfileQueueReference = RoutingProfileQueueReference

    constructor(properties: RoutingProfileProperties) {
        super('AWS::Connect::RoutingProfile', properties)
    }
}
