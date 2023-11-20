/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Rule {
    Operator?: Value<string>
    Attribute?: Value<string>
    Value?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export interface DevicePoolProperties {
    ProjectArn: Value<string>
    Description?: Value<string>
    MaxDevices?: Value<number>
    Rules: List<Rule>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class DevicePool extends ResourceBase<DevicePoolProperties> {
    static Rule = Rule

    constructor(properties: DevicePoolProperties) {
        super('AWS::DeviceFarm::DevicePool', properties)
    }
}
