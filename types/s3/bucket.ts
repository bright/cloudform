/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'

export interface NotificationFilterProperties {
    S3Key: S3KeyFilter
}

export class NotificationFilter extends ResourceBase {
    constructor(properties: NotificationFilterProperties, dependsOn?: Value<string>) {
        super('AWS::S3::NotificationFilter', properties, dependsOn)
    }
}

export interface RoutingRuleConditionProperties {
    HttpErrorCodeReturnedEquals?: Value<string>
    KeyPrefixEquals?: Value<string>
}

export class RoutingRuleCondition extends ResourceBase {
    constructor(properties: RoutingRuleConditionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RoutingRuleCondition', properties, dependsOn)
    }
}

export interface LifecycleConfigurationProperties {
    Rules: Rule[]
}

export class LifecycleConfiguration extends ResourceBase {
    constructor(properties: LifecycleConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::LifecycleConfiguration', properties, dependsOn)
    }
}

export interface LambdaConfigurationProperties {
    Event: Value<string>
    Filter?: NotificationFilter
    Function: Value<string>
}

export class LambdaConfiguration extends ResourceBase {
    constructor(properties: LambdaConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::LambdaConfiguration', properties, dependsOn)
    }
}

export interface ReplicationRuleProperties {
    Destination: ReplicationDestination
    Id?: Value<string>
    Prefix: Value<string>
    Status: Value<string>
}

export class ReplicationRule extends ResourceBase {
    constructor(properties: ReplicationRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::ReplicationRule', properties, dependsOn)
    }
}

export interface CorsRuleProperties {
    AllowedHeaders?: Value<string>[]
    AllowedMethods: Value<string>[]
    AllowedOrigins: Value<string>[]
    ExposedHeaders?: Value<string>[]
    Id?: Value<string>
    MaxAge?: Value<number>
}

export class CorsRule extends ResourceBase {
    constructor(properties: CorsRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::CorsRule', properties, dependsOn)
    }
}

export interface DestinationProperties {
    BucketAccountId?: Value<string>
    BucketArn: Value<string>
    Format: Value<string>
    Prefix?: Value<string>
}

export class Destination extends ResourceBase {
    constructor(properties: DestinationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Destination', properties, dependsOn)
    }
}

export interface AnalyticsConfigurationProperties {
    Id: Value<string>
    Prefix?: Value<string>
    StorageClassAnalysis: StorageClassAnalysis
    TagFilters?: TagFilter[]
}

export class AnalyticsConfiguration extends ResourceBase {
    constructor(properties: AnalyticsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::AnalyticsConfiguration', properties, dependsOn)
    }
}

export interface LoggingConfigurationProperties {
    DestinationBucketName?: Value<string>
    LogFilePrefix?: Value<string>
}

export class LoggingConfiguration extends ResourceBase {
    constructor(properties: LoggingConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::LoggingConfiguration', properties, dependsOn)
    }
}

export interface StorageClassAnalysisProperties {
    DataExport?: DataExport
}

export class StorageClassAnalysis extends ResourceBase {
    constructor(properties: StorageClassAnalysisProperties, dependsOn?: Value<string>) {
        super('AWS::S3::StorageClassAnalysis', properties, dependsOn)
    }
}

export interface RoutingRuleProperties {
    RedirectRule: RedirectRule
    RoutingRuleCondition?: RoutingRuleCondition
}

export class RoutingRule extends ResourceBase {
    constructor(properties: RoutingRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RoutingRule', properties, dependsOn)
    }
}

export interface VersioningConfigurationProperties {
    Status: Value<string>
}

export class VersioningConfiguration extends ResourceBase {
    constructor(properties: VersioningConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::VersioningConfiguration', properties, dependsOn)
    }
}

export interface NotificationConfigurationProperties {
    LambdaConfigurations?: LambdaConfiguration[]
    QueueConfigurations?: QueueConfiguration[]
    TopicConfigurations?: TopicConfiguration[]
}

export class NotificationConfiguration extends ResourceBase {
    constructor(properties: NotificationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::NotificationConfiguration', properties, dependsOn)
    }
}

export interface RedirectRuleProperties {
    HostName?: Value<string>
    HttpRedirectCode?: Value<string>
    Protocol?: Value<string>
    ReplaceKeyPrefixWith?: Value<string>
    ReplaceKeyWith?: Value<string>
}

export class RedirectRule extends ResourceBase {
    constructor(properties: RedirectRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RedirectRule', properties, dependsOn)
    }
}

export interface RedirectAllRequestsToProperties {
    HostName: Value<string>
    Protocol?: Value<string>
}

export class RedirectAllRequestsTo extends ResourceBase {
    constructor(properties: RedirectAllRequestsToProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RedirectAllRequestsTo', properties, dependsOn)
    }
}

export interface S3KeyFilterProperties {
    Rules: FilterRule[]
}

export class S3KeyFilter extends ResourceBase {
    constructor(properties: S3KeyFilterProperties, dependsOn?: Value<string>) {
        super('AWS::S3::S3KeyFilter', properties, dependsOn)
    }
}

export interface InventoryConfigurationProperties {
    Destination: Destination
    Enabled: Value<boolean>
    Id: Value<string>
    IncludedObjectVersions: Value<string>
    OptionalFields?: Value<string>[]
    Prefix?: Value<string>
    ScheduleFrequency: Value<string>
}

export class InventoryConfiguration extends ResourceBase {
    constructor(properties: InventoryConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::InventoryConfiguration', properties, dependsOn)
    }
}

export interface WebsiteConfigurationProperties {
    ErrorDocument?: Value<string>
    IndexDocument?: Value<string>
    RedirectAllRequestsTo?: RedirectAllRequestsTo
    RoutingRules?: RoutingRule[]
}

export class WebsiteConfiguration extends ResourceBase {
    constructor(properties: WebsiteConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::WebsiteConfiguration', properties, dependsOn)
    }
}

export interface ReplicationConfigurationProperties {
    Role: Value<string>
    Rules: ReplicationRule[]
}

export class ReplicationConfiguration extends ResourceBase {
    constructor(properties: ReplicationConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::ReplicationConfiguration', properties, dependsOn)
    }
}

export interface RuleProperties {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload
    ExpirationDate?: Value<string>
    ExpirationInDays?: Value<number>
    Id?: Value<string>
    NoncurrentVersionExpirationInDays?: Value<number>
    NoncurrentVersionTransition?: NoncurrentVersionTransition
    NoncurrentVersionTransitions?: NoncurrentVersionTransition[]
    Prefix?: Value<string>
    Status: Value<string>
    TagFilters?: TagFilter[]
    Transition?: Transition
    Transitions?: Transition[]
}

export class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Rule', properties, dependsOn)
    }
}

export interface QueueConfigurationProperties {
    Event: Value<string>
    Filter?: NotificationFilter
    Queue: Value<string>
}

export class QueueConfiguration extends ResourceBase {
    constructor(properties: QueueConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::QueueConfiguration', properties, dependsOn)
    }
}

export interface TopicConfigurationProperties {
    Event: Value<string>
    Filter?: NotificationFilter
    Topic: Value<string>
}

export class TopicConfiguration extends ResourceBase {
    constructor(properties: TopicConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::TopicConfiguration', properties, dependsOn)
    }
}

export interface MetricsConfigurationProperties {
    Id: Value<string>
    Prefix?: Value<string>
    TagFilters?: TagFilter[]
}

export class MetricsConfiguration extends ResourceBase {
    constructor(properties: MetricsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::MetricsConfiguration', properties, dependsOn)
    }
}

export interface TagFilterProperties {
    Key: Value<string>
    Value: Value<string>
}

export class TagFilter extends ResourceBase {
    constructor(properties: TagFilterProperties, dependsOn?: Value<string>) {
        super('AWS::S3::TagFilter', properties, dependsOn)
    }
}

export interface TransitionProperties {
    StorageClass: Value<string>
    TransitionDate?: Value<string>
    TransitionInDays?: Value<number>
}

export class Transition extends ResourceBase {
    constructor(properties: TransitionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Transition', properties, dependsOn)
    }
}

export interface DataExportProperties {
    Destination: Destination
    OutputSchemaVersion: Value<string>
}

export class DataExport extends ResourceBase {
    constructor(properties: DataExportProperties, dependsOn?: Value<string>) {
        super('AWS::S3::DataExport', properties, dependsOn)
    }
}

export interface CorsConfigurationProperties {
    CorsRules: CorsRule[]
}

export class CorsConfiguration extends ResourceBase {
    constructor(properties: CorsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::CorsConfiguration', properties, dependsOn)
    }
}

export interface ReplicationDestinationProperties {
    Bucket: Value<string>
    StorageClass?: Value<string>
}

export class ReplicationDestination extends ResourceBase {
    constructor(properties: ReplicationDestinationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::ReplicationDestination', properties, dependsOn)
    }
}

export interface AccelerateConfigurationProperties {
    AccelerationStatus: Value<string>
}

export class AccelerateConfiguration extends ResourceBase {
    constructor(properties: AccelerateConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::S3::AccelerateConfiguration', properties, dependsOn)
    }
}

export interface NoncurrentVersionTransitionProperties {
    StorageClass: Value<string>
    TransitionInDays: Value<number>
}

export class NoncurrentVersionTransition extends ResourceBase {
    constructor(properties: NoncurrentVersionTransitionProperties, dependsOn?: Value<string>) {
        super('AWS::S3::NoncurrentVersionTransition', properties, dependsOn)
    }
}

export interface AbortIncompleteMultipartUploadProperties {
    DaysAfterInitiation: Value<number>
}

export class AbortIncompleteMultipartUpload extends ResourceBase {
    constructor(properties: AbortIncompleteMultipartUploadProperties, dependsOn?: Value<string>) {
        super('AWS::S3::AbortIncompleteMultipartUpload', properties, dependsOn)
    }
}

export interface FilterRuleProperties {
    Name: Value<string>
    Value: Value<string>
}

export class FilterRule extends ResourceBase {
    constructor(properties: FilterRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::FilterRule', properties, dependsOn)
    }
}

export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration
    AccessControl?: Value<string>
    AnalyticsConfigurations?: AnalyticsConfiguration[]
    BucketName?: Value<string>
    CorsConfiguration?: CorsConfiguration
    InventoryConfigurations?: InventoryConfiguration[]
    LifecycleConfiguration?: LifecycleConfiguration
    LoggingConfiguration?: LoggingConfiguration
    MetricsConfigurations?: MetricsConfiguration[]
    NotificationConfiguration?: NotificationConfiguration
    ReplicationConfiguration?: ReplicationConfiguration
    Tags?: ResourceTag[]
    VersioningConfiguration?: VersioningConfiguration
    WebsiteConfiguration?: WebsiteConfiguration
}

export default class Bucket extends ResourceBase {
    constructor(properties: BucketProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Bucket', properties, dependsOn)
    }
}