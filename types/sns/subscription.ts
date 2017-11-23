/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SubscriptionProperties {
    Endpoint?: Value<string>
    Protocol?: Value<string>
    TopicArn?: Value<string>
}

export default class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string>) {
        super('AWS::SNS::Subscription', properties, dependsOn)
    }
}
