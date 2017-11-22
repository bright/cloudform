/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface SubscriptionProperties {
    Endpoint: Value<string>
    Protocol: Value<string>
}

export class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string>) {
        super('AWS::SNS::Subscription', properties, dependsOn)
    }
}

export interface TopicProperties {
    DisplayName?: Value<string>
    Subscription?: Subscription[]
    TopicName?: Value<string>
}

export default class Topic extends ResourceBase {
    constructor(properties: TopicProperties, dependsOn?: Value<string>) {
        super('AWS::SNS::Topic', properties, dependsOn)
    }
}