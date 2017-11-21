import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface WaitConditionProperties {
    Handle: Value<string>
    Timeout: Value<string>
    Count: Value<string>
}

export default class WaitCondition extends ResourceBase {
    constructor(properties: WaitConditionProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFormation::WaitCondition', properties, dependsOn)
    }
}