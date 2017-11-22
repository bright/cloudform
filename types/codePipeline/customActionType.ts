/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface SettingsProperties {
    EntityUrlTemplate?: Value<string>
    ExecutionUrlTemplate?: Value<string>
    RevisionUrlTemplate?: Value<string>
    ThirdPartyConfigurationUrl?: Value<string>
}

export class Settings extends ResourceBase {
    constructor(properties: SettingsProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::Settings', properties, dependsOn)
    }
}

export interface ArtifactDetailsProperties {
    MaximumCount: Value<number>
    MinimumCount: Value<number>
}

export class ArtifactDetails extends ResourceBase {
    constructor(properties: ArtifactDetailsProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::ArtifactDetails', properties, dependsOn)
    }
}

export interface ConfigurationPropertiesProperties {
    Description?: Value<string>
    Key: Value<boolean>
    Name: Value<string>
    Queryable?: Value<boolean>
    Required: Value<boolean>
    Secret: Value<boolean>
    Type?: Value<string>
}

export class ConfigurationProperties extends ResourceBase {
    constructor(properties: ConfigurationPropertiesProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::ConfigurationProperties', properties, dependsOn)
    }
}

export interface CustomActionTypeProperties {
    Category: Value<string>
    ConfigurationProperties?: ConfigurationProperties[]
    InputArtifactDetails: ArtifactDetails
    OutputArtifactDetails: ArtifactDetails
    Provider: Value<string>
    Settings?: Settings
    Version?: Value<string>
}

export default class CustomActionType extends ResourceBase {
    constructor(properties: CustomActionTypeProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::CustomActionType', properties, dependsOn)
    }
}