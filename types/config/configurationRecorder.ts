/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface RecordingGroupProperties {
    AllSupported?: Value<boolean>
    IncludeGlobalResourceTypes?: Value<boolean>
    ResourceTypes?: Value<string>[]
}

export class RecordingGroup extends ResourceBase {
    constructor(properties: RecordingGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Config::RecordingGroup', properties, dependsOn)
    }
}

export interface ConfigurationRecorderProperties {
    Name?: Value<string>
    RecordingGroup?: RecordingGroup
    RoleARN: Value<string>
}

export default class ConfigurationRecorder extends ResourceBase {
    constructor(properties: ConfigurationRecorderProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Config::ConfigurationRecorder', properties, dependsOn)
    }
}
