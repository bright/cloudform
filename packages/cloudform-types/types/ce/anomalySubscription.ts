/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Subscriber {
    Address!: Value<string>
    Status?: Value<string>
    Type!: Value<string>

    constructor(properties: Subscriber) {
        Object.assign(this, properties)
    }
}

export interface AnomalySubscriptionProperties {
    SubscriptionName: Value<string>
    MonitorArnList: List<Value<string>>
    Subscribers: List<Subscriber>
    Threshold: Value<number>
    Frequency: Value<string>
}

export default class AnomalySubscription extends ResourceBase<AnomalySubscriptionProperties> {
    static Subscriber = Subscriber

    constructor(properties: AnomalySubscriptionProperties) {
        super('AWS::CE::AnomalySubscription', properties)
    }
}
