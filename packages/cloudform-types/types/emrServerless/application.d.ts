import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoStartConfiguration {
    Enabled?: Value<boolean>;
    constructor(properties: AutoStartConfiguration);
}
export declare class AutoStopConfiguration {
    Enabled?: Value<boolean>;
    IdleTimeoutMinutes?: Value<number>;
    constructor(properties: AutoStopConfiguration);
}
export declare class ConfigurationObject {
    Classification: Value<string>;
    Properties?: {
        [key: string]: Value<string>;
    };
    Configurations?: List<ConfigurationObject>;
    constructor(properties: ConfigurationObject);
}
export declare class ImageConfigurationInput {
    ImageUri?: Value<string>;
    constructor(properties: ImageConfigurationInput);
}
export declare class InitialCapacityConfig {
    WorkerConfiguration: WorkerConfiguration;
    WorkerCount: Value<number>;
    constructor(properties: InitialCapacityConfig);
}
export declare class InitialCapacityConfigKeyValuePair {
    Value: InitialCapacityConfig;
    Key: Value<string>;
    constructor(properties: InitialCapacityConfigKeyValuePair);
}
export declare class ManagedPersistenceMonitoringConfiguration {
    EncryptionKeyArn?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: ManagedPersistenceMonitoringConfiguration);
}
export declare class MaximumAllowedResources {
    Memory: Value<string>;
    Cpu: Value<string>;
    Disk?: Value<string>;
    constructor(properties: MaximumAllowedResources);
}
export declare class MonitoringConfiguration {
    S3MonitoringConfiguration?: S3MonitoringConfiguration;
    ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
    constructor(properties: MonitoringConfiguration);
}
export declare class NetworkConfiguration {
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: NetworkConfiguration);
}
export declare class S3MonitoringConfiguration {
    LogUri?: Value<string>;
    EncryptionKeyArn?: Value<string>;
    constructor(properties: S3MonitoringConfiguration);
}
export declare class WorkerConfiguration {
    Memory: Value<string>;
    Cpu: Value<string>;
    Disk?: Value<string>;
    constructor(properties: WorkerConfiguration);
}
export declare class WorkerTypeSpecificationInput {
    ImageConfiguration?: ImageConfigurationInput;
    constructor(properties: WorkerTypeSpecificationInput);
}
export interface ApplicationProperties {
    AutoStartConfiguration?: AutoStartConfiguration;
    Architecture?: Value<string>;
    WorkerTypeSpecifications?: {
        [key: string]: WorkerTypeSpecificationInput;
    };
    MonitoringConfiguration?: MonitoringConfiguration;
    MaximumCapacity?: MaximumAllowedResources;
    AutoStopConfiguration?: AutoStopConfiguration;
    RuntimeConfiguration?: List<ConfigurationObject>;
    Name?: Value<string>;
    Type: Value<string>;
    InitialCapacity?: List<InitialCapacityConfigKeyValuePair>;
    ImageConfiguration?: ImageConfigurationInput;
    NetworkConfiguration?: NetworkConfiguration;
    ReleaseLabel: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static AutoStartConfiguration: typeof AutoStartConfiguration;
    static AutoStopConfiguration: typeof AutoStopConfiguration;
    static ConfigurationObject: typeof ConfigurationObject;
    static ImageConfigurationInput: typeof ImageConfigurationInput;
    static InitialCapacityConfig: typeof InitialCapacityConfig;
    static InitialCapacityConfigKeyValuePair: typeof InitialCapacityConfigKeyValuePair;
    static ManagedPersistenceMonitoringConfiguration: typeof ManagedPersistenceMonitoringConfiguration;
    static MaximumAllowedResources: typeof MaximumAllowedResources;
    static MonitoringConfiguration: typeof MonitoringConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static S3MonitoringConfiguration: typeof S3MonitoringConfiguration;
    static WorkerConfiguration: typeof WorkerConfiguration;
    static WorkerTypeSpecificationInput: typeof WorkerTypeSpecificationInput;
    constructor(properties: ApplicationProperties);
}
