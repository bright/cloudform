import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class WorkGroupConfigurationUpdates {
    BytesScannedCutoffPerQuery?: Value<number>;
    EnforceWorkGroupConfiguration?: Value<boolean>;
    PublishCloudWatchMetricsEnabled?: Value<boolean>;
    RequesterPaysEnabled?: Value<boolean>;
    ResultConfigurationUpdates?: ResultConfigurationUpdates;
    RemoveBytesScannedCutoffPerQuery?: Value<boolean>;
    EngineVersion?: EngineVersion;
    constructor(properties: WorkGroupConfigurationUpdates);
}
export declare class ResultConfiguration {
    EncryptionConfiguration?: EncryptionConfiguration;
    OutputLocation?: Value<string>;
    constructor(properties: ResultConfiguration);
}
export declare class ResultConfigurationUpdates {
    EncryptionConfiguration?: EncryptionConfiguration;
    OutputLocation?: Value<string>;
    RemoveEncryptionConfiguration?: Value<boolean>;
    RemoveOutputLocation?: Value<boolean>;
    constructor(properties: ResultConfigurationUpdates);
}
export declare class WorkGroupConfiguration {
    BytesScannedCutoffPerQuery?: Value<number>;
    EnforceWorkGroupConfiguration?: Value<boolean>;
    PublishCloudWatchMetricsEnabled?: Value<boolean>;
    RequesterPaysEnabled?: Value<boolean>;
    ResultConfiguration?: ResultConfiguration;
    EngineVersion?: EngineVersion;
    constructor(properties: WorkGroupConfiguration);
}
export declare class EncryptionConfiguration {
    EncryptionOption: Value<string>;
    KmsKey?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class EngineVersion {
    SelectedEngineVersion?: Value<string>;
    EffectiveEngineVersion?: Value<string>;
    constructor(properties: EngineVersion);
}
export interface WorkGroupProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    WorkGroupConfiguration?: WorkGroupConfiguration;
    WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdates;
    State?: Value<string>;
    RecursiveDeleteOption?: Value<boolean>;
}
export default class WorkGroup extends ResourceBase<WorkGroupProperties> {
    static WorkGroupConfigurationUpdates: typeof WorkGroupConfigurationUpdates;
    static ResultConfiguration: typeof ResultConfiguration;
    static ResultConfigurationUpdates: typeof ResultConfigurationUpdates;
    static WorkGroupConfiguration: typeof WorkGroupConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static EngineVersion: typeof EngineVersion;
    constructor(properties: WorkGroupProperties);
}
