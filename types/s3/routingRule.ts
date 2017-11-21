import {ResourceBase} from '../resource'
import {Value} from '../internal'
import RedirectRule from './redirectRule'
import RoutingRuleCondition from './routingRuleCondition'



export interface RoutingRuleProperties {
    RedirectRule: RedirectRule
    RoutingRuleCondition?: RoutingRuleCondition
}

export default class RoutingRule extends ResourceBase {
    constructor(properties: RoutingRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RoutingRule', properties, dependsOn)
    }
}