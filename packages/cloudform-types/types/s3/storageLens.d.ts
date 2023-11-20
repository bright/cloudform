import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountLevel {
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
    StorageLensGroupLevel?: StorageLensGroupLevel;
    ActivityMetrics?: ActivityMetrics;
    BucketLevel: BucketLevel;
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
    constructor(properties: AccountLevel);
}
export declare class ActivityMetrics {
    IsEnabled?: Value<boolean>;
    constructor(properties: ActivityMetrics);
}
export declare class AdvancedCostOptimizationMetrics {
    IsEnabled?: Value<boolean>;
    constructor(properties: AdvancedCostOptimizationMetrics);
}
export declare class AdvancedDataProtectionMetrics {
    IsEnabled?: Value<boolean>;
    constructor(properties: AdvancedDataProtectionMetrics);
}
export declare class AwsOrg {
    Arn: Value<string>;
    constructor(properties: AwsOrg);
}
export declare class BucketLevel {
    AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics;
    PrefixLevel?: PrefixLevel;
    ActivityMetrics?: ActivityMetrics;
    AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics;
    DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics;
    constructor(properties: BucketLevel);
}
export declare class BucketsAndRegions {
    Regions?: List<Value<string>>;
    Buckets?: List<Value<string>>;
    constructor(properties: BucketsAndRegions);
}
export declare class CloudWatchMetrics {
    IsEnabled: Value<boolean>;
    constructor(properties: CloudWatchMetrics);
}
export declare class DataExport {
    S3BucketDestination?: S3BucketDestination;
    CloudWatchMetrics?: CloudWatchMetrics;
    constructor(properties: DataExport);
}
export declare class DetailedStatusCodesMetrics {
    IsEnabled?: Value<boolean>;
    constructor(properties: DetailedStatusCodesMetrics);
}
export declare class Encryption {
    SSEKMS?: SSEKMS;
    SSES3?: {
        [key: string]: any;
    };
    constructor(properties: Encryption);
}
export declare class PrefixLevel {
    StorageMetrics: PrefixLevelStorageMetrics;
    constructor(properties: PrefixLevel);
}
export declare class PrefixLevelStorageMetrics {
    IsEnabled?: Value<boolean>;
    SelectionCriteria?: SelectionCriteria;
    constructor(properties: PrefixLevelStorageMetrics);
}
export declare class S3BucketDestination {
    OutputSchemaVersion: Value<string>;
    Format: Value<string>;
    AccountId: Value<string>;
    Prefix?: Value<string>;
    Encryption?: Encryption;
    Arn: Value<string>;
    constructor(properties: S3BucketDestination);
}
export declare class SSEKMS {
    KeyId: Value<string>;
    constructor(properties: SSEKMS);
}
export declare class SelectionCriteria {
    Delimiter?: Value<string>;
    MaxDepth?: Value<number>;
    MinStorageBytesPercentage?: Value<number>;
    constructor(properties: SelectionCriteria);
}
export declare class StorageLensConfiguration {
    AccountLevel: AccountLevel;
    Exclude?: BucketsAndRegions;
    IsEnabled: Value<boolean>;
    Include?: BucketsAndRegions;
    AwsOrg?: AwsOrg;
    Id: Value<string>;
    StorageLensArn?: Value<string>;
    DataExport?: DataExport;
    constructor(properties: StorageLensConfiguration);
}
export declare class StorageLensGroupLevel {
    StorageLensGroupSelectionCriteria?: StorageLensGroupSelectionCriteria;
    constructor(properties: StorageLensGroupLevel);
}
export declare class StorageLensGroupSelectionCriteria {
    Exclude?: List<Value<string>>;
    Include?: List<Value<string>>;
    constructor(properties: StorageLensGroupSelectionCriteria);
}
export interface StorageLensProperties {
    StorageLensConfiguration: StorageLensConfiguration;
    Tags?: List<ResourceTag>;
}
export default class StorageLens extends ResourceBase<StorageLensProperties> {
    static AccountLevel: typeof AccountLevel;
    static ActivityMetrics: typeof ActivityMetrics;
    static AdvancedCostOptimizationMetrics: typeof AdvancedCostOptimizationMetrics;
    static AdvancedDataProtectionMetrics: typeof AdvancedDataProtectionMetrics;
    static AwsOrg: typeof AwsOrg;
    static BucketLevel: typeof BucketLevel;
    static BucketsAndRegions: typeof BucketsAndRegions;
    static CloudWatchMetrics: typeof CloudWatchMetrics;
    static DataExport: typeof DataExport;
    static DetailedStatusCodesMetrics: typeof DetailedStatusCodesMetrics;
    static Encryption: typeof Encryption;
    static PrefixLevel: typeof PrefixLevel;
    static PrefixLevelStorageMetrics: typeof PrefixLevelStorageMetrics;
    static S3BucketDestination: typeof S3BucketDestination;
    static SSEKMS: typeof SSEKMS;
    static SelectionCriteria: typeof SelectionCriteria;
    static StorageLensConfiguration: typeof StorageLensConfiguration;
    static StorageLensGroupLevel: typeof StorageLensGroupLevel;
    static StorageLensGroupSelectionCriteria: typeof StorageLensGroupSelectionCriteria;
    constructor(properties: StorageLensProperties);
}
