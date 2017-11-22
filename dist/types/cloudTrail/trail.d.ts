import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface EventSelectorProperties {
    DataResources?: DataResource[];
    IncludeManagementEvents?: Value<boolean>;
    ReadWriteType?: Value<string>;
}
export declare class EventSelector extends ResourceBase {
    constructor(properties: EventSelectorProperties, dependsOn?: Value<string>);
}
export interface DataResourceProperties {
    Type: Value<string>;
    Values?: Value<string>[];
}
export declare class DataResource extends ResourceBase {
    constructor(properties: DataResourceProperties, dependsOn?: Value<string>);
}
export interface TrailProperties {
    CloudWatchLogsLogGroupArn?: Value<string>;
    CloudWatchLogsRoleArn?: Value<string>;
    EnableLogFileValidation?: Value<boolean>;
    EventSelectors?: EventSelector[];
    IncludeGlobalServiceEvents?: Value<boolean>;
    IsLogging: Value<boolean>;
    IsMultiRegionTrail?: Value<boolean>;
    KMSKeyId?: Value<string>;
    S3BucketName: Value<string>;
    S3KeyPrefix?: Value<string>;
    SnsTopicName?: Value<string>;
    Tags?: ResourceTag[];
    TrailName?: Value<string>;
}
export default class Trail extends ResourceBase {
    constructor(properties: TrailProperties, dependsOn?: Value<string>);
}
