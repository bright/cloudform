import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface EnvironmentProperties {
    Key: Value<string>
    Secure?: Value<boolean>
    Value: Value<string>
}

export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::Environment', properties, dependsOn)
    }
}