import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AclConfiguration {
    S3AclOption: Value<string>;
    constructor(properties: AclConfiguration);
}
export declare class CustomerContentEncryptionConfiguration {
    KmsKey: Value<string>;
    constructor(properties: CustomerContentEncryptionConfiguration);
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
export declare class ResultConfiguration {
    EncryptionConfiguration?: EncryptionConfiguration;
    OutputLocation?: Value<string>;
    AclConfiguration?: AclConfiguration;
    ExpectedBucketOwner?: Value<string>;
    constructor(properties: ResultConfiguration);
}
export declare class WorkGroupConfiguration {
    EnforceWorkGroupConfiguration?: Value<boolean>;
    EngineVersion?: EngineVersion;
    PublishCloudWatchMetricsEnabled?: Value<boolean>;
    ResultConfiguration?: ResultConfiguration;
    AdditionalConfiguration?: Value<string>;
    CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
    BytesScannedCutoffPerQuery?: Value<number>;
    RequesterPaysEnabled?: Value<boolean>;
    ExecutionRole?: Value<string>;
    constructor(properties: WorkGroupConfiguration);
}
export interface WorkGroupProperties {
    RecursiveDeleteOption?: Value<boolean>;
    WorkGroupConfiguration?: WorkGroupConfiguration;
    Description?: Value<string>;
    State?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class WorkGroup extends ResourceBase<WorkGroupProperties> {
    static AclConfiguration: typeof AclConfiguration;
    static CustomerContentEncryptionConfiguration: typeof CustomerContentEncryptionConfiguration;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static EngineVersion: typeof EngineVersion;
    static ResultConfiguration: typeof ResultConfiguration;
    static WorkGroupConfiguration: typeof WorkGroupConfiguration;
    constructor(properties: WorkGroupProperties);
}
