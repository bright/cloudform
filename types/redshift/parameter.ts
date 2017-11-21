import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ParameterProperties {
    ParameterName: Value<string>
    ParameterValue: Value<string>
}

export default class Parameter extends ResourceBase {
    constructor(properties: ParameterProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::Parameter', properties, dependsOn)
    }
}