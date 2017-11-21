import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ConfigurationPropertie from './configurationPropertie'
import InputArtifactDetails from './inputArtifactDetails'
import OutputArtifactDetails from './outputArtifactDetails'
import Settings from './settings'



export interface CustomActionTypeProperties {
    Category: Value<string>
    ConfigurationProperties?: ConfigurationPropertie[]
    InputArtifactDetails: InputArtifactDetails
    OutputArtifactDetails: OutputArtifactDetails
    Provider: Value<string>
    Settings?: Settings
    Version?: Value<string>
}

export default class CustomActionType extends ResourceBase {
    constructor(properties: CustomActionTypeProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::CustomActionType', properties, dependsOn)
    }
}