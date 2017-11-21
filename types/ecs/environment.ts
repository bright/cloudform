import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface EnvironmentProperties {
    Name: Value<string>
    Host: Value<string>
}

export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::Environment', properties, dependsOn)
    }
}