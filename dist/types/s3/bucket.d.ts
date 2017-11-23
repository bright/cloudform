import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotificationFilter {
    S3Key: S3KeyFilter;
    constructor(properties: NotificationFilter);
}
export declare class RoutingRuleCondition {
    HttpErrorCodeReturnedEquals?: Value<string>;
    KeyPrefixEquals?: Value<string>;
    constructor(properties: RoutingRuleCondition);
}
export declare class LifecycleConfiguration {
    Rules: List<Rule>;
    constructor(properties: LifecycleConfiguration);
}
export declare class LambdaConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Function: Value<string>;
    constructor(properties: LambdaConfiguration);
}
export declare class ReplicationRule {
    Destination: ReplicationDestination;
    Id?: Value<string>;
    Prefix: Value<string>;
    Status: Value<string>;
    constructor(properties: ReplicationRule);
}
export declare class CorsRule {
    AllowedHeaders?: List<Value<string>>;
    AllowedMethods: List<Value<string>>;
    AllowedOrigins: List<Value<string>>;
    ExposedHeaders?: List<Value<string>>;
    Id?: Value<string>;
    MaxAge?: Value<number>;
    constructor(properties: CorsRule);
}
export declare class Destination {
    BucketAccountId?: Value<string>;
    BucketArn: Value<string>;
    Format: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: Destination);
}
export declare class AnalyticsConfiguration {
    Id: Value<string>;
    Prefix?: Value<string>;
    StorageClassAnalysis: StorageClassAnalysis;
    TagFilters?: List<TagFilter>;
    constructor(properties: AnalyticsConfiguration);
}
export declare class LoggingConfiguration {
    DestinationBucketName?: Value<string>;
    LogFilePrefix?: Value<string>;
    constructor(properties: LoggingConfiguration);
}
export declare class StorageClassAnalysis {
    DataExport?: DataExport;
    constructor(properties: StorageClassAnalysis);
}
export declare class RoutingRule {
    RedirectRule: RedirectRule;
    RoutingRuleCondition?: RoutingRuleCondition;
    constructor(properties: RoutingRule);
}
export declare class VersioningConfiguration {
    Status: Value<string>;
    constructor(properties: VersioningConfiguration);
}
export declare class NotificationConfiguration {
    LambdaConfigurations?: List<LambdaConfiguration>;
    QueueConfigurations?: List<QueueConfiguration>;
    TopicConfigurations?: List<TopicConfiguration>;
    constructor(properties: NotificationConfiguration);
}
export declare class RedirectRule {
    HostName?: Value<string>;
    HttpRedirectCode?: Value<string>;
    Protocol?: Value<string>;
    ReplaceKeyPrefixWith?: Value<string>;
    ReplaceKeyWith?: Value<string>;
    constructor(properties: RedirectRule);
}
export declare class RedirectAllRequestsTo {
    HostName: Value<string>;
    Protocol?: Value<string>;
    constructor(properties: RedirectAllRequestsTo);
}
export declare class S3KeyFilter {
    Rules: List<FilterRule>;
    constructor(properties: S3KeyFilter);
}
export declare class InventoryConfiguration {
    Destination: Destination;
    Enabled: Value<boolean>;
    Id: Value<string>;
    IncludedObjectVersions: Value<string>;
    OptionalFields?: List<Value<string>>;
    Prefix?: Value<string>;
    ScheduleFrequency: Value<string>;
    constructor(properties: InventoryConfiguration);
}
export declare class WebsiteConfiguration {
    ErrorDocument?: Value<string>;
    IndexDocument?: Value<string>;
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    RoutingRules?: List<RoutingRule>;
    constructor(properties: WebsiteConfiguration);
}
export declare class ReplicationConfiguration {
    Role: Value<string>;
    Rules: List<ReplicationRule>;
    constructor(properties: ReplicationConfiguration);
}
export declare class Rule {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    ExpirationDate?: Value<string>;
    ExpirationInDays?: Value<number>;
    Id?: Value<string>;
    NoncurrentVersionExpirationInDays?: Value<number>;
    NoncurrentVersionTransition?: NoncurrentVersionTransition;
    NoncurrentVersionTransitions?: List<NoncurrentVersionTransition>;
    Prefix?: Value<string>;
    Status: Value<string>;
    TagFilters?: List<TagFilter>;
    Transition?: Transition;
    Transitions?: List<Transition>;
    constructor(properties: Rule);
}
export declare class QueueConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Queue: Value<string>;
    constructor(properties: QueueConfiguration);
}
export declare class TopicConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Topic: Value<string>;
    constructor(properties: TopicConfiguration);
}
export declare class MetricsConfiguration {
    Id: Value<string>;
    Prefix?: Value<string>;
    TagFilters?: List<TagFilter>;
    constructor(properties: MetricsConfiguration);
}
export declare class TagFilter {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: TagFilter);
}
export declare class Transition {
    StorageClass: Value<string>;
    TransitionDate?: Value<string>;
    TransitionInDays?: Value<number>;
    constructor(properties: Transition);
}
export declare class DataExport {
    Destination: Destination;
    OutputSchemaVersion: Value<string>;
    constructor(properties: DataExport);
}
export declare class CorsConfiguration {
    CorsRules: List<CorsRule>;
    constructor(properties: CorsConfiguration);
}
export declare class ReplicationDestination {
    Bucket: Value<string>;
    StorageClass?: Value<string>;
    constructor(properties: ReplicationDestination);
}
export declare class AccelerateConfiguration {
    AccelerationStatus: Value<string>;
    constructor(properties: AccelerateConfiguration);
}
export declare class NoncurrentVersionTransition {
    StorageClass: Value<string>;
    TransitionInDays: Value<number>;
    constructor(properties: NoncurrentVersionTransition);
}
export declare class AbortIncompleteMultipartUpload {
    DaysAfterInitiation: Value<number>;
    constructor(properties: AbortIncompleteMultipartUpload);
}
export declare class FilterRule {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: FilterRule);
}
export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration;
    AccessControl?: Value<string>;
    AnalyticsConfigurations?: List<AnalyticsConfiguration>;
    BucketName?: Value<string>;
    CorsConfiguration?: CorsConfiguration;
    InventoryConfigurations?: List<InventoryConfiguration>;
    LifecycleConfiguration?: LifecycleConfiguration;
    LoggingConfiguration?: LoggingConfiguration;
    MetricsConfigurations?: List<MetricsConfiguration>;
    NotificationConfiguration?: NotificationConfiguration;
    ReplicationConfiguration?: ReplicationConfiguration;
    Tags?: ResourceTag[];
    VersioningConfiguration?: VersioningConfiguration;
    WebsiteConfiguration?: WebsiteConfiguration;
}
export default class Bucket extends ResourceBase {
    constructor(properties: BucketProperties, dependsOn?: Value<string> | Value<string>[]);
}
