import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ParameterObject from './parameterObject'
import ParameterValue from './parameterValue'
import PipelineObject from './pipelineObject'
import PipelineTag from './pipelineTag'



export interface PipelineProperties {
    Activate?: Value<boolean>
    Description?: Value<string>
    Name: Value<string>
    ParameterObjects?: ParameterObject[]
    ParameterValues?: ParameterValue[]
    PipelineObjects?: PipelineObject[]
    PipelineTags?: PipelineTag[]
}

export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::Pipeline', properties, dependsOn)
    }
}