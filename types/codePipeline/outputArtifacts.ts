import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface OutputArtifactsProperties {
    Name?: Value<string>
}

export default class OutputArtifacts extends ResourceBase {
    constructor(properties: OutputArtifactsProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::OutputArtifacts', properties, dependsOn)
    }
}