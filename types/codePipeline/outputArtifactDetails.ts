import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface OutputArtifactDetailsProperties {
    MaximumCount: Value<number>
    MinimumCount: Value<number>
}

export default class OutputArtifactDetails extends ResourceBase {
    constructor(properties: OutputArtifactDetailsProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::OutputArtifactDetails', properties, dependsOn)
    }
}