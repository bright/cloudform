import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataCatalogConfig {
    TableName: Value<string>;
    Database: Value<string>;
    Catalog: Value<string>;
    constructor(properties: DataCatalogConfig);
}
export declare class FeatureDefinition {
    FeatureType: Value<string>;
    FeatureName: Value<string>;
    constructor(properties: FeatureDefinition);
}
export declare class OfflineStoreConfig {
    DataCatalogConfig?: DataCatalogConfig;
    S3StorageConfig: S3StorageConfig;
    DisableGlueTableCreation?: Value<boolean>;
    TableFormat?: Value<string>;
    constructor(properties: OfflineStoreConfig);
}
export declare class OnlineStoreConfig {
    EnableOnlineStore?: Value<boolean>;
    SecurityConfig?: OnlineStoreSecurityConfig;
    constructor(properties: OnlineStoreConfig);
}
export declare class OnlineStoreSecurityConfig {
    KmsKeyId?: Value<string>;
    constructor(properties: OnlineStoreSecurityConfig);
}
export declare class S3StorageConfig {
    KmsKeyId?: Value<string>;
    S3Uri: Value<string>;
    constructor(properties: S3StorageConfig);
}
export interface FeatureGroupProperties {
    Description?: Value<string>;
    OfflineStoreConfig?: OfflineStoreConfig;
    FeatureDefinitions: List<FeatureDefinition>;
    RecordIdentifierFeatureName: Value<string>;
    EventTimeFeatureName: Value<string>;
    FeatureGroupName: Value<string>;
    OnlineStoreConfig?: OnlineStoreConfig;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FeatureGroup extends ResourceBase<FeatureGroupProperties> {
    static DataCatalogConfig: typeof DataCatalogConfig;
    static FeatureDefinition: typeof FeatureDefinition;
    static OfflineStoreConfig: typeof OfflineStoreConfig;
    static OnlineStoreConfig: typeof OnlineStoreConfig;
    static OnlineStoreSecurityConfig: typeof OnlineStoreSecurityConfig;
    static S3StorageConfig: typeof S3StorageConfig;
    constructor(properties: FeatureGroupProperties);
}
