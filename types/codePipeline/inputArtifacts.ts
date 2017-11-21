import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface InputArtifactsProperties {
    Name?: Value<string>
}

export default class InputArtifacts extends ResourceBase {
    constructor(properties: InputArtifactsProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::InputArtifacts', properties, dependsOn)
    }
}