import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsOrganizationsSource {
    OrganizationalUnits?: List<Value<string>>;
    OrganizationSourceType: Value<string>;
    constructor(properties: AwsOrganizationsSource);
}
export declare class SyncSource {
    IncludeFutureRegions?: Value<boolean>;
    SourceRegions: List<Value<string>>;
    SourceType: Value<string>;
    AwsOrganizationsSource?: AwsOrganizationsSource;
    constructor(properties: SyncSource);
}
export declare class S3Destination {
    KMSKeyArn?: Value<string>;
    BucketPrefix?: Value<string>;
    BucketName: Value<string>;
    BucketRegion: Value<string>;
    SyncFormat: Value<string>;
    constructor(properties: S3Destination);
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
    static AwsOrganizationsSource: typeof AwsOrganizationsSource;
    static SyncSource: typeof SyncSource;
    static S3Destination: typeof S3Destination;
    constructor(properties: ResourceDataSyncProperties);
}
