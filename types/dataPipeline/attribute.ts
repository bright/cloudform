import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface AttributeProperties {
    Key: Value<string>
    StringValue?: Value<string>
}

export default class Attribute extends ResourceBase {
    constructor(properties: AttributeProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::Attribute', properties, dependsOn)
    }
}