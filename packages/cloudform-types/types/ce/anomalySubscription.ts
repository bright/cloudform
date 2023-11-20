/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceTag {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: ResourceTag) {
        Object.assign(this, properties)
    }
}

export class Subscriber {
    Status?: Value<string>
    Type!: Value<string>
    Address!: Value<string>

    constructor(properties: Subscriber) {
        Object.assign(this, properties)
    }
}

export interface AnomalySubscriptionProperties {
    MonitorArnList: List<Value<string>>
    ResourceTags?: List<ResourceTag>
    Frequency: Value<string>
    SubscriptionName: Value<string>
    Subscribers: List<Subscriber>
    Threshold?: Value<number>
    ThresholdExpression?: Value<string>
}

export default class AnomalySubscription extends ResourceBase<AnomalySubscriptionProperties> {
    static ResourceTag = ResourceTag
    static Subscriber = Subscriber

    constructor(properties: AnomalySubscriptionProperties) {
        super('AWS::CE::AnomalySubscription', properties)
    }
}
