import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RecordingGroupProperties {
    AllSupported?: Value<boolean>;
    IncludeGlobalResourceTypes?: Value<boolean>;
    ResourceTypes?: Value<string>[];
}
export declare class RecordingGroup extends ResourceBase {
    constructor(properties: RecordingGroupProperties, dependsOn?: Value<string>);
}
export interface ConfigurationRecorderProperties {
    Name?: Value<string>;
    RecordingGroup?: RecordingGroup;
    RoleARN: Value<string>;
}
export default class ConfigurationRecorder extends ResourceBase {
    constructor(properties: ConfigurationRecorderProperties, dependsOn?: Value<string>);
}
