import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class WorkGroupConfigurationUpdates {
    BytesScannedCutoffPerQuery?: Value<number>;
    EnforceWorkGroupConfiguration?: Value<boolean>;
    PublishCloudWatchMetricsEnabled?: Value<boolean>;
    RequesterPaysEnabled?: Value<boolean>;
    ResultConfigurationUpdates?: ResultConfigurationUpdates;
    RemoveBytesScannedCutoffPerQuery?: Value<boolean>;
    constructor(properties: WorkGroupConfigurationUpdates);
}
export declare class WorkGroupConfiguration {
    BytesScannedCutoffPerQuery?: Value<number>;
    EnforceWorkGroupConfiguration?: Value<boolean>;
    PublishCloudWatchMetricsEnabled?: Value<boolean>;
    RequesterPaysEnabled?: Value<boolean>;
    ResultConfiguration?: ResultConfiguration;
    constructor(properties: WorkGroupConfiguration);
}
export declare class EncryptionConfiguration {
    EncryptionOption: Value<string>;
    KmsKey?: Value<string>;
    constructor(properties: EncryptionConfiguration);
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
export declare class Tags {
    Tags?: List<ResourceTag>;
    constructor(properties: Tags);
}
export interface WorkGroupProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Tags?: Tags;
    WorkGroupConfiguration?: WorkGroupConfiguration;
    WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdates;
    State?: Value<string>;
    RecursiveDeleteOption?: Value<boolean>;
}
export default class WorkGroup extends ResourceBase<WorkGroupProperties> {
    static WorkGroupConfigurationUpdates: typeof WorkGroupConfigurationUpdates;
    static WorkGroupConfiguration: typeof WorkGroupConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static ResultConfiguration: typeof ResultConfiguration;
    static ResultConfigurationUpdates: typeof ResultConfigurationUpdates;
    static Tags: typeof Tags;
    constructor(properties: WorkGroupProperties);
}
