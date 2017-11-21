import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Protocol = "http" | "https" | "email" | "email-json" | "sqs" | "sms" | "application" | "lambda"

export interface SubscriptionProperties {
    Endpoint: Value<string>
    Protocol: Value<Protocol>
}

export default class Subscription extends ResourceBase {
    constructor(properties: SubscriptionProperties, dependsOn?: Value<string>) {
        super('AWS::SNS::Subscription', properties, dependsOn)
    }
}