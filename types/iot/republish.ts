import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RepublishProperties {
    RoleArn: Value<string>
    Topic: Value<string>
}

export default class Republish extends ResourceBase {
    constructor(properties: RepublishProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Republish', properties, dependsOn)
    }
}