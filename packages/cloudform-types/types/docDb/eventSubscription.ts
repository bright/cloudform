/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface EventSubscriptionProperties {
    SourceType?: Value<string>
    Enabled?: Value<boolean>
    EventCategories?: List<Value<string>>
    SubscriptionName?: Value<string>
    SnsTopicArn: Value<string>
    SourceIds?: List<Value<string>>
}

export default class EventSubscription extends ResourceBase<EventSubscriptionProperties> {


    constructor(properties: EventSubscriptionProperties) {
        super('AWS::DocDB::EventSubscription', properties)
    }
}
