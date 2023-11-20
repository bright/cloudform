import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ExclusionByResourceTypes {
    ResourceTypes: List<Value<string>>;
    constructor(properties: ExclusionByResourceTypes);
}
export declare class RecordingGroup {
    AllSupported?: Value<boolean>;
    ExclusionByResourceTypes?: ExclusionByResourceTypes;
    IncludeGlobalResourceTypes?: Value<boolean>;
    RecordingStrategy?: RecordingStrategy;
    ResourceTypes?: List<Value<string>>;
    constructor(properties: RecordingGroup);
}
export declare class RecordingStrategy {
    UseOnly: Value<string>;
    constructor(properties: RecordingStrategy);
}
export interface ConfigurationRecorderProperties {
    Name?: Value<string>;
    RecordingGroup?: RecordingGroup;
    RoleARN: Value<string>;
}
export default class ConfigurationRecorder extends ResourceBase<ConfigurationRecorderProperties> {
    static ExclusionByResourceTypes: typeof ExclusionByResourceTypes;
    static RecordingGroup: typeof RecordingGroup;
    static RecordingStrategy: typeof RecordingStrategy;
    constructor(properties: ConfigurationRecorderProperties);
}
