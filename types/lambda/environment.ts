import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface EnvironmentProperties {
    Variables?: any
}

export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::Environment', properties, dependsOn)
    }
}