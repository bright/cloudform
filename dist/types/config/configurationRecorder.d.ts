import { ResourceBase } from '../resource';
import { Value } from '../internal';
import RecordingGroup from './recordingGroup';
export interface ConfigurationRecorderProperties {
    Name?: Value<string>;
    RecordingGroup?: RecordingGroup;
    RoleARN: Value<string>;
}
export default class ConfigurationRecorder extends ResourceBase {
    constructor(properties: ConfigurationRecorderProperties, dependsOn?: Value<string>);
}
