import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Field from './field'



export interface PipelineObjectProperties {
    Fields: Field[]
    Id: Value<string>
    Name: Value<string>
}

export default class PipelineObject extends ResourceBase {
    constructor(properties: PipelineObjectProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::PipelineObject', properties, dependsOn)
    }
}