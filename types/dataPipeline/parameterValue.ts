import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ParameterValueProperties {
    Id: Value<string>
    StringValue: Value<string>
}

export default class ParameterValue extends ResourceBase {
    constructor(properties: ParameterValueProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::ParameterValue', properties, dependsOn)
    }
}