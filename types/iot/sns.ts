import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SnsProperties {
    MessageFormat?: Value<string>
    RoleArn: Value<string>
    TargetArn: Value<string>
}

export default class Sns extends ResourceBase {
    constructor(properties: SnsProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Sns', properties, dependsOn)
    }
}