import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface NotificationFilterProperties {
    S3Key: S3KeyFilter;
}
export declare class NotificationFilter extends ResourceBase {
    constructor(properties: NotificationFilterProperties, dependsOn?: Value<string>);
}
export interface RoutingRuleConditionProperties {
    HttpErrorCodeReturnedEquals?: Value<string>;
    KeyPrefixEquals?: Value<string>;
}
export declare class RoutingRuleCondition extends ResourceBase {
    constructor(properties: RoutingRuleConditionProperties, dependsOn?: Value<string>);
}
export interface LifecycleConfigurationProperties {
    Rules: Rule[];
}
export declare class LifecycleConfiguration extends ResourceBase {
    constructor(properties: LifecycleConfigurationProperties, dependsOn?: Value<string>);
}
export interface LambdaConfigurationProperties {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Function: Value<string>;
}
export declare class LambdaConfiguration extends ResourceBase {
    constructor(properties: LambdaConfigurationProperties, dependsOn?: Value<string>);
}
export interface ReplicationRuleProperties {
    Destination: ReplicationDestination;
    Id?: Value<string>;
    Prefix: Value<string>;
    Status: Value<string>;
}
export declare class ReplicationRule extends ResourceBase {
    constructor(properties: ReplicationRuleProperties, dependsOn?: Value<string>);
}
export interface CorsRuleProperties {
    AllowedHeaders?: Value<string>[];
    AllowedMethods: Value<string>[];
    AllowedOrigins: Value<string>[];
    ExposedHeaders?: Value<string>[];
    Id?: Value<string>;
    MaxAge?: Value<number>;
}
export declare class CorsRule extends ResourceBase {
    constructor(properties: CorsRuleProperties, dependsOn?: Value<string>);
}
export interface DestinationProperties {
    BucketAccountId?: Value<string>;
    BucketArn: Value<string>;
    Format: Value<string>;
    Prefix?: Value<string>;
}
export declare class Destination extends ResourceBase {
    constructor(properties: DestinationProperties, dependsOn?: Value<string>);
}
export interface AnalyticsConfigurationProperties {
    Id: Value<string>;
    Prefix?: Value<string>;
    StorageClassAnalysis: StorageClassAnalysis;
    TagFilters?: TagFilter[];
}
export declare class AnalyticsConfiguration extends ResourceBase {
    constructor(properties: AnalyticsConfigurationProperties, dependsOn?: Value<string>);
}
export interface LoggingConfigurationProperties {
    DestinationBucketName?: Value<string>;
    LogFilePrefix?: Value<string>;
}
export declare class LoggingConfiguration extends ResourceBase {
    constructor(properties: LoggingConfigurationProperties, dependsOn?: Value<string>);
}
export interface StorageClassAnalysisProperties {
    DataExport?: DataExport;
}
export declare class StorageClassAnalysis extends ResourceBase {
    constructor(properties: StorageClassAnalysisProperties, dependsOn?: Value<string>);
}
export interface RoutingRuleProperties {
    RedirectRule: RedirectRule;
    RoutingRuleCondition?: RoutingRuleCondition;
}
export declare class RoutingRule extends ResourceBase {
    constructor(properties: RoutingRuleProperties, dependsOn?: Value<string>);
}
export interface VersioningConfigurationProperties {
    Status: Value<string>;
}
export declare class VersioningConfiguration extends ResourceBase {
    constructor(properties: VersioningConfigurationProperties, dependsOn?: Value<string>);
}
export interface NotificationConfigurationProperties {
    LambdaConfigurations?: LambdaConfiguration[];
    QueueConfigurations?: QueueConfiguration[];
    TopicConfigurations?: TopicConfiguration[];
}
export declare class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string>);
}
export interface RedirectRuleProperties {
    HostName?: Value<string>;
    HttpRedirectCode?: Value<string>;
    Protocol?: Value<string>;
    ReplaceKeyPrefixWith?: Value<string>;
    ReplaceKeyWith?: Value<string>;
}
export declare class RedirectRule extends ResourceBase {
    constructor(properties: RedirectRuleProperties, dependsOn?: Value<string>);
}
export interface RedirectAllRequestsToProperties {
    HostName: Value<string>;
    Protocol?: Value<string>;
}
export declare class RedirectAllRequestsTo extends ResourceBase {
    constructor(properties: RedirectAllRequestsToProperties, dependsOn?: Value<string>);
}
export interface S3KeyFilterProperties {
    Rules: FilterRule[];
}
export declare class S3KeyFilter extends ResourceBase {
    constructor(properties: S3KeyFilterProperties, dependsOn?: Value<string>);
}
export interface InventoryConfigurationProperties {
    Destination: Destination;
    Enabled: Value<boolean>;
    Id: Value<string>;
    IncludedObjectVersions: Value<string>;
    OptionalFields?: Value<string>[];
    Prefix?: Value<string>;
    ScheduleFrequency: Value<string>;
}
export declare class InventoryConfiguration extends ResourceBase {
    constructor(properties: InventoryConfigurationProperties, dependsOn?: Value<string>);
}
export interface WebsiteConfigurationProperties {
    ErrorDocument?: Value<string>;
    IndexDocument?: Value<string>;
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    RoutingRules?: RoutingRule[];
}
export declare class WebsiteConfiguration extends ResourceBase {
    constructor(properties: WebsiteConfigurationProperties, dependsOn?: Value<string>);
}
export interface ReplicationConfigurationProperties {
    Role: Value<string>;
    Rules: ReplicationRule[];
}
export declare class ReplicationConfiguration extends ResourceBase {
    constructor(properties: ReplicationConfigurationProperties, dependsOn?: Value<string>);
}
export interface RuleProperties {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    ExpirationDate?: Value<string>;
    ExpirationInDays?: Value<number>;
    Id?: Value<string>;
    NoncurrentVersionExpirationInDays?: Value<number>;
    NoncurrentVersionTransition?: NoncurrentVersionTransition;
    NoncurrentVersionTransitions?: NoncurrentVersionTransition[];
    Prefix?: Value<string>;
    Status: Value<string>;
    TagFilters?: TagFilter[];
    Transition?: Transition;
    Transitions?: Transition[];
}
export declare class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>);
}
export interface QueueConfigurationProperties {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Queue: Value<string>;
}
export declare class QueueConfiguration extends ResourceBase {
    constructor(properties: QueueConfigurationProperties, dependsOn?: Value<string>);
}
export interface TopicConfigurationProperties {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Topic: Value<string>;
}
export declare class TopicConfiguration extends ResourceBase {
    constructor(properties: TopicConfigurationProperties, dependsOn?: Value<string>);
}
export interface MetricsConfigurationProperties {
    Id: Value<string>;
    Prefix?: Value<string>;
    TagFilters?: TagFilter[];
}
export declare class MetricsConfiguration extends ResourceBase {
    constructor(properties: MetricsConfigurationProperties, dependsOn?: Value<string>);
}
export interface TagFilterProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class TagFilter extends ResourceBase {
    constructor(properties: TagFilterProperties, dependsOn?: Value<string>);
}
export interface TransitionProperties {
    StorageClass: Value<string>;
    TransitionDate?: Value<string>;
    TransitionInDays?: Value<number>;
}
export declare class Transition extends ResourceBase {
    constructor(properties: TransitionProperties, dependsOn?: Value<string>);
}
export interface DataExportProperties {
    Destination: Destination;
    OutputSchemaVersion: Value<string>;
}
export declare class DataExport extends ResourceBase {
    constructor(properties: DataExportProperties, dependsOn?: Value<string>);
}
export interface CorsConfigurationProperties {
    CorsRules: CorsRule[];
}
export declare class CorsConfiguration extends ResourceBase {
    constructor(properties: CorsConfigurationProperties, dependsOn?: Value<string>);
}
export interface ReplicationDestinationProperties {
    Bucket: Value<string>;
    StorageClass?: Value<string>;
}
export declare class ReplicationDestination extends ResourceBase {
    constructor(properties: ReplicationDestinationProperties, dependsOn?: Value<string>);
}
export interface AccelerateConfigurationProperties {
    AccelerationStatus: Value<string>;
}
export declare class AccelerateConfiguration extends ResourceBase {
    constructor(properties: AccelerateConfigurationProperties, dependsOn?: Value<string>);
}
export interface NoncurrentVersionTransitionProperties {
    StorageClass: Value<string>;
    TransitionInDays: Value<number>;
}
export declare class NoncurrentVersionTransition extends ResourceBase {
    constructor(properties: NoncurrentVersionTransitionProperties, dependsOn?: Value<string>);
}
export interface AbortIncompleteMultipartUploadProperties {
    DaysAfterInitiation: Value<number>;
}
export declare class AbortIncompleteMultipartUpload extends ResourceBase {
    constructor(properties: AbortIncompleteMultipartUploadProperties, dependsOn?: Value<string>);
}
export interface FilterRuleProperties {
    Name: Value<string>;
    Value: Value<string>;
}
export declare class FilterRule extends ResourceBase {
    constructor(properties: FilterRuleProperties, dependsOn?: Value<string>);
}
export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration;
    AccessControl?: Value<string>;
    AnalyticsConfigurations?: AnalyticsConfiguration[];
    BucketName?: Value<string>;
    CorsConfiguration?: CorsConfiguration;
    InventoryConfigurations?: InventoryConfiguration[];
    LifecycleConfiguration?: LifecycleConfiguration;
    LoggingConfiguration?: LoggingConfiguration;
    MetricsConfigurations?: MetricsConfiguration[];
    NotificationConfiguration?: NotificationConfiguration;
    ReplicationConfiguration?: ReplicationConfiguration;
    Tags?: ResourceTag[];
    VersioningConfiguration?: VersioningConfiguration;
    WebsiteConfiguration?: WebsiteConfiguration;
}
export default class Bucket extends ResourceBase {
    constructor(properties: BucketProperties, dependsOn?: Value<string>);
}
