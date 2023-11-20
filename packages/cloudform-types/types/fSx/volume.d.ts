import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutocommitPeriod {
    Type: Value<string>;
    Value?: Value<number>;
    constructor(properties: AutocommitPeriod);
}
export declare class ClientConfigurations {
    Options: List<Value<string>>;
    Clients: Value<string>;
    constructor(properties: ClientConfigurations);
}
export declare class NfsExports {
    ClientConfigurations: List<ClientConfigurations>;
    constructor(properties: NfsExports);
}
export declare class OntapConfiguration {
    JunctionPath?: Value<string>;
    StorageVirtualMachineId: Value<string>;
    SnapshotPolicy?: Value<string>;
    TieringPolicy?: TieringPolicy;
    StorageEfficiencyEnabled?: Value<string>;
    SizeInMegabytes: Value<string>;
    CopyTagsToBackups?: Value<string>;
    SecurityStyle?: Value<string>;
    SnaplockConfiguration?: SnaplockConfiguration;
    OntapVolumeType?: Value<string>;
    constructor(properties: OntapConfiguration);
}
export declare class OpenZFSConfiguration {
    ReadOnly?: Value<boolean>;
    Options?: List<Value<string>>;
    DataCompressionType?: Value<string>;
    NfsExports?: List<NfsExports>;
    StorageCapacityQuotaGiB?: Value<number>;
    CopyTagsToSnapshots?: Value<boolean>;
    ParentVolumeId: Value<string>;
    StorageCapacityReservationGiB?: Value<number>;
    RecordSizeKiB?: Value<number>;
    OriginSnapshot?: OriginSnapshot;
    UserAndGroupQuotas?: List<UserAndGroupQuotas>;
    constructor(properties: OpenZFSConfiguration);
}
export declare class OriginSnapshot {
    CopyStrategy: Value<string>;
    SnapshotARN: Value<string>;
    constructor(properties: OriginSnapshot);
}
export declare class RetentionPeriod {
    Type: Value<string>;
    Value?: Value<number>;
    constructor(properties: RetentionPeriod);
}
export declare class SnaplockConfiguration {
    AuditLogVolume?: Value<string>;
    VolumeAppendModeEnabled?: Value<string>;
    AutocommitPeriod?: AutocommitPeriod;
    RetentionPeriod?: SnaplockRetentionPeriod;
    PrivilegedDelete?: Value<string>;
    SnaplockType: Value<string>;
    constructor(properties: SnaplockConfiguration);
}
export declare class SnaplockRetentionPeriod {
    DefaultRetention: RetentionPeriod;
    MaximumRetention: RetentionPeriod;
    MinimumRetention: RetentionPeriod;
    constructor(properties: SnaplockRetentionPeriod);
}
export declare class TieringPolicy {
    CoolingPeriod?: Value<number>;
    Name?: Value<string>;
    constructor(properties: TieringPolicy);
}
export declare class UserAndGroupQuotas {
    Type: Value<string>;
    Id: Value<number>;
    StorageCapacityQuotaGiB: Value<number>;
    constructor(properties: UserAndGroupQuotas);
}
export interface VolumeProperties {
    OpenZFSConfiguration?: OpenZFSConfiguration;
    VolumeType?: Value<string>;
    BackupId?: Value<string>;
    OntapConfiguration?: OntapConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Volume extends ResourceBase<VolumeProperties> {
    static AutocommitPeriod: typeof AutocommitPeriod;
    static ClientConfigurations: typeof ClientConfigurations;
    static NfsExports: typeof NfsExports;
    static OntapConfiguration: typeof OntapConfiguration;
    static OpenZFSConfiguration: typeof OpenZFSConfiguration;
    static OriginSnapshot: typeof OriginSnapshot;
    static RetentionPeriod: typeof RetentionPeriod;
    static SnaplockConfiguration: typeof SnaplockConfiguration;
    static SnaplockRetentionPeriod: typeof SnaplockRetentionPeriod;
    static TieringPolicy: typeof TieringPolicy;
    static UserAndGroupQuotas: typeof UserAndGroupQuotas;
    constructor(properties: VolumeProperties);
}
