import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Action from './action'



export interface TopicRulePayloadProperties {
    Actions: Action[]
    AwsIotSqlVersion?: Value<string>
    Description?: Value<string>
    RuleDisabled: Value<boolean>
    Sql: Value<string>
}

export default class TopicRulePayload extends ResourceBase {
    constructor(properties: TopicRulePayloadProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::TopicRulePayload', properties, dependsOn)
    }
}