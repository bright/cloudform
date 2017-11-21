import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface TargetsProperties {
    Arn: Value<string>
    Id: Value<string>
    Input?: any
    InputPath?: Value<string>
}

export default class Targets extends ResourceBase {
    constructor(properties: TargetsProperties, dependsOn?: Value<string>) {
        super('AWS::Events::Targets', properties, dependsOn)
    }
}