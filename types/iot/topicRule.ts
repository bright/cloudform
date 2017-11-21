import {ResourceBase} from '../resource'
import {Value} from '../internal'
import TopicRulePayload from './topicRulePayload'



export interface TopicRuleProperties {
    RuleName?: Value<string>
    TopicRulePayload: TopicRulePayload
}

export default class TopicRule extends ResourceBase {
    constructor(properties: TopicRuleProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::TopicRule', properties, dependsOn)
    }
}