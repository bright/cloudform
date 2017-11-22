/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface SubscriptionFilterProperties {
    DestinationArn: Value<string>
    FilterPattern: Value<string>
    LogGroupName: Value<string>
    RoleArn?: Value<string>
}

export default class SubscriptionFilter extends ResourceBase {
    constructor(properties: SubscriptionFilterProperties, dependsOn?: Value<string>) {
        super('AWS::Logs::SubscriptionFilter', properties, dependsOn)
    }
}