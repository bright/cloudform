import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RoutingRuleConditionProperties {
    HttpErrorCodeReturnedEquals?: Value<string>
    KeyPrefixEquals?: Value<string>
}

export default class RoutingRuleCondition extends ResourceBase {
    constructor(properties: RoutingRuleConditionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RoutingRuleCondition', properties, dependsOn)
    }
}