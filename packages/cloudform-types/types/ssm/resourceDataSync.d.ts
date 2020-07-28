import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Destination {
    KMSKeyArn?: Value<string>;
    BucketName: Value<string>;
    BucketRegion: Value<string>;
    SyncFormat: Value<string>;
    BucketPrefix?: Value<string>;
    constructor(properties: S3Destination);
}
export declare class AwsOrganizationsSource {
    OrganizationSourceType: Value<string>;
    OrganizationalUnits?: List<Value<string>>;
    constructor(properties: AwsOrganizationsSource);
}
export declare class SyncSource {
    SourceType: Value<string>;
    AwsOrganizationsSource?: AwsOrganizationsSource;
    IncludeFutureRegions?: Value<boolean>;
    SourceRegions: List<Value<string>>;
    constructor(properties: SyncSource);
}
export interface ResourceDataSyncProperties {
    S3Destination?: S3Destination;
    KMSKeyArn?: Value<string>;
    SyncSource?: SyncSource;
    BucketName?: Value<string>;
    BucketRegion?: Value<string>;
    SyncFormat?: Value<string>;
    SyncName: Value<string>;
    SyncType?: Value<string>;
    BucketPrefix?: Value<string>;
}
export default class ResourceDataSync extends ResourceBase<ResourceDataSyncProperties> {
    static S3Destination: typeof S3Destination;
    static AwsOrganizationsSource: typeof AwsOrganizationsSource;
    static SyncSource: typeof SyncSource;
    constructor(properties: ResourceDataSyncProperties);
}
