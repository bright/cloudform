import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StreamConfiguration {
    MaxSessionLengthInMinutes?: Value<number>;
    ClipboardMode: Value<string>;
    StreamingImageIds: List<Value<string>>;
    MaxStoppedSessionLengthInMinutes?: Value<number>;
    SessionPersistenceMode?: Value<string>;
    AutomaticTerminationMode?: Value<string>;
    SessionBackup?: StreamConfigurationSessionBackup;
    Ec2InstanceTypes: List<Value<string>>;
    SessionStorage?: StreamConfigurationSessionStorage;
    VolumeConfiguration?: VolumeConfiguration;
    constructor(properties: StreamConfiguration);
}
export declare class StreamConfigurationSessionBackup {
    Mode?: Value<string>;
    MaxBackupsToRetain?: Value<number>;
    constructor(properties: StreamConfigurationSessionBackup);
}
export declare class StreamConfigurationSessionStorage {
    Root?: StreamingSessionStorageRoot;
    Mode: List<Value<string>>;
    constructor(properties: StreamConfigurationSessionStorage);
}
export declare class StreamingSessionStorageRoot {
    Linux?: Value<string>;
    Windows?: Value<string>;
    constructor(properties: StreamingSessionStorageRoot);
}
export declare class VolumeConfiguration {
    Size?: Value<number>;
    Throughput?: Value<number>;
    Iops?: Value<number>;
    constructor(properties: VolumeConfiguration);
}
export interface LaunchProfileProperties {
    Description?: Value<string>;
    Ec2SubnetIds: List<Value<string>>;
    StudioComponentIds: List<Value<string>>;
    StreamConfiguration: StreamConfiguration;
    LaunchProfileProtocolVersions: List<Value<string>>;
    StudioId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class LaunchProfile extends ResourceBase<LaunchProfileProperties> {
    static StreamConfiguration: typeof StreamConfiguration;
    static StreamConfigurationSessionBackup: typeof StreamConfigurationSessionBackup;
    static StreamConfigurationSessionStorage: typeof StreamConfigurationSessionStorage;
    static StreamingSessionStorageRoot: typeof StreamingSessionStorageRoot;
    static VolumeConfiguration: typeof VolumeConfiguration;
    constructor(properties: LaunchProfileProperties);
}
