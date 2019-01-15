/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class BucketEncryption {
    ServerSideEncryptionConfiguration!: List<ServerSideEncryptionRule>

    constructor(properties: BucketEncryption) {
        Object.assign(this, properties)
    }
}

export class NotificationFilter {
    S3Key!: S3KeyFilter

    constructor(properties: NotificationFilter) {
        Object.assign(this, properties)
    }
}

export class RoutingRuleCondition {
    HttpErrorCodeReturnedEquals?: Value<string>
    KeyPrefixEquals?: Value<string>

    constructor(properties: RoutingRuleCondition) {
        Object.assign(this, properties)
    }
}

export class LifecycleConfiguration {
    Rules!: List<Rule>

    constructor(properties: LifecycleConfiguration) {
        Object.assign(this, properties)
    }
}

export class LambdaConfiguration {
    Event!: Value<string>
    Filter?: NotificationFilter
    Function!: Value<string>

    constructor(properties: LambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationRule {
    Destination!: ReplicationDestination
    Id?: Value<string>
    Prefix!: Value<string>
    SourceSelectionCriteria?: SourceSelectionCriteria
    Status!: Value<string>

    constructor(properties: ReplicationRule) {
        Object.assign(this, properties)
    }
}

export class CorsRule {
    AllowedHeaders?: List<Value<string>>
    AllowedMethods!: List<Value<string>>
    AllowedOrigins!: List<Value<string>>
    ExposedHeaders?: List<Value<string>>
    Id?: Value<string>
    MaxAge?: Value<number>

    constructor(properties: CorsRule) {
        Object.assign(this, properties)
    }
}

export class Destination {
    BucketAccountId?: Value<string>
    BucketArn!: Value<string>
    Format!: Value<string>
    Prefix?: Value<string>

    constructor(properties: Destination) {
        Object.assign(this, properties)
    }
}

export class ServerSideEncryptionRule {
    ServerSideEncryptionByDefault?: ServerSideEncryptionByDefault

    constructor(properties: ServerSideEncryptionRule) {
        Object.assign(this, properties)
    }
}

export class AnalyticsConfiguration {
    Id!: Value<string>
    Prefix?: Value<string>
    StorageClassAnalysis!: StorageClassAnalysis
    TagFilters?: List<TagFilter>

    constructor(properties: AnalyticsConfiguration) {
        Object.assign(this, properties)
    }
}

export class SourceSelectionCriteria {
    SseKmsEncryptedObjects!: SseKmsEncryptedObjects

    constructor(properties: SourceSelectionCriteria) {
        Object.assign(this, properties)
    }
}

export class LoggingConfiguration {
    DestinationBucketName?: Value<string>
    LogFilePrefix?: Value<string>

    constructor(properties: LoggingConfiguration) {
        Object.assign(this, properties)
    }
}

export class StorageClassAnalysis {
    DataExport?: DataExport

    constructor(properties: StorageClassAnalysis) {
        Object.assign(this, properties)
    }
}

export class RoutingRule {
    RedirectRule!: RedirectRule
    RoutingRuleCondition?: RoutingRuleCondition

    constructor(properties: RoutingRule) {
        Object.assign(this, properties)
    }
}

export class AccessControlTranslation {
    Owner!: Value<string>

    constructor(properties: AccessControlTranslation) {
        Object.assign(this, properties)
    }
}

export class VersioningConfiguration {
    Status!: Value<string>

    constructor(properties: VersioningConfiguration) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    ReplicaKmsKeyID!: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {
    LambdaConfigurations?: List<LambdaConfiguration>
    QueueConfigurations?: List<QueueConfiguration>
    TopicConfigurations?: List<TopicConfiguration>

    constructor(properties: NotificationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServerSideEncryptionByDefault {
    KMSMasterKeyID?: Value<string>
    SSEAlgorithm!: Value<string>

    constructor(properties: ServerSideEncryptionByDefault) {
        Object.assign(this, properties)
    }
}

export class RedirectRule {
    HostName?: Value<string>
    HttpRedirectCode?: Value<string>
    Protocol?: Value<string>
    ReplaceKeyPrefixWith?: Value<string>
    ReplaceKeyWith?: Value<string>

    constructor(properties: RedirectRule) {
        Object.assign(this, properties)
    }
}

export class RedirectAllRequestsTo {
    HostName!: Value<string>
    Protocol?: Value<string>

    constructor(properties: RedirectAllRequestsTo) {
        Object.assign(this, properties)
    }
}

export class S3KeyFilter {
    Rules!: List<FilterRule>

    constructor(properties: S3KeyFilter) {
        Object.assign(this, properties)
    }
}

export class InventoryConfiguration {
    Destination!: Destination
    Enabled!: Value<boolean>
    Id!: Value<string>
    IncludedObjectVersions!: Value<string>
    OptionalFields?: List<Value<string>>
    Prefix?: Value<string>
    ScheduleFrequency!: Value<string>

    constructor(properties: InventoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebsiteConfiguration {
    ErrorDocument?: Value<string>
    IndexDocument?: Value<string>
    RedirectAllRequestsTo?: RedirectAllRequestsTo
    RoutingRules?: List<RoutingRule>

    constructor(properties: WebsiteConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationConfiguration {
    Role!: Value<string>
    Rules!: List<ReplicationRule>

    constructor(properties: ReplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class SseKmsEncryptedObjects {
    Status!: Value<string>

    constructor(properties: SseKmsEncryptedObjects) {
        Object.assign(this, properties)
    }
}

export class Rule {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload
    ExpirationDate?: Value<string>
    ExpirationInDays?: Value<number>
    Id?: Value<string>
    NoncurrentVersionExpirationInDays?: Value<number>
    NoncurrentVersionTransition?: NoncurrentVersionTransition
    NoncurrentVersionTransitions?: List<NoncurrentVersionTransition>
    Prefix?: Value<string>
    Status!: Value<string>
    TagFilters?: List<TagFilter>
    Transition?: Transition
    Transitions?: List<Transition>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class QueueConfiguration {
    Event!: Value<string>
    Filter?: NotificationFilter
    Queue!: Value<string>

    constructor(properties: QueueConfiguration) {
        Object.assign(this, properties)
    }
}

export class TopicConfiguration {
    Event!: Value<string>
    Filter?: NotificationFilter
    Topic!: Value<string>

    constructor(properties: TopicConfiguration) {
        Object.assign(this, properties)
    }
}

export class MetricsConfiguration {
    Id!: Value<string>
    Prefix?: Value<string>
    TagFilters?: List<TagFilter>

    constructor(properties: MetricsConfiguration) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class Transition {
    StorageClass!: Value<string>
    TransitionDate?: Value<string>
    TransitionInDays?: Value<number>

    constructor(properties: Transition) {
        Object.assign(this, properties)
    }
}

export class DataExport {
    Destination!: Destination
    OutputSchemaVersion!: Value<string>

    constructor(properties: DataExport) {
        Object.assign(this, properties)
    }
}

export class CorsConfiguration {
    CorsRules!: List<CorsRule>

    constructor(properties: CorsConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationDestination {
    AccessControlTranslation?: AccessControlTranslation
    Account?: Value<string>
    Bucket!: Value<string>
    EncryptionConfiguration?: EncryptionConfiguration
    StorageClass?: Value<string>

    constructor(properties: ReplicationDestination) {
        Object.assign(this, properties)
    }
}

export class AccelerateConfiguration {
    AccelerationStatus!: Value<string>

    constructor(properties: AccelerateConfiguration) {
        Object.assign(this, properties)
    }
}

export class NoncurrentVersionTransition {
    StorageClass!: Value<string>
    TransitionInDays!: Value<number>

    constructor(properties: NoncurrentVersionTransition) {
        Object.assign(this, properties)
    }
}

export class AbortIncompleteMultipartUpload {
    DaysAfterInitiation!: Value<number>

    constructor(properties: AbortIncompleteMultipartUpload) {
        Object.assign(this, properties)
    }
}

export class FilterRule {
    Name!: Value<string>
    Value!: Value<string>

    constructor(properties: FilterRule) {
        Object.assign(this, properties)
    }
}

export class PublicAccessBlockConfiguration {
    BlockPublicAcls?: Value<boolean>
    BlockPublicPolicy?: Value<boolean>
    IgnorePublicAcls?: Value<boolean>
    RestrictPublicBuckets?: Value<boolean>

    constructor(properties: PublicAccessBlockConfiguration) {
        Object.assign(this, properties)
    }
}

export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration
    AccessControl?: Value<string>
    AnalyticsConfigurations?: List<AnalyticsConfiguration>
    BucketEncryption?: BucketEncryption
    BucketName?: Value<string>
    CorsConfiguration?: CorsConfiguration
    InventoryConfigurations?: List<InventoryConfiguration>
    LifecycleConfiguration?: LifecycleConfiguration
    LoggingConfiguration?: LoggingConfiguration
    MetricsConfigurations?: List<MetricsConfiguration>
    NotificationConfiguration?: NotificationConfiguration
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration
    ReplicationConfiguration?: ReplicationConfiguration
    Tags?: ResourceTag[]
    VersioningConfiguration?: VersioningConfiguration
    WebsiteConfiguration?: WebsiteConfiguration
}

export default class Bucket extends ResourceBase {
    static BucketEncryption = BucketEncryption
    static NotificationFilter = NotificationFilter
    static RoutingRuleCondition = RoutingRuleCondition
    static LifecycleConfiguration = LifecycleConfiguration
    static LambdaConfiguration = LambdaConfiguration
    static ReplicationRule = ReplicationRule
    static CorsRule = CorsRule
    static Destination = Destination
    static ServerSideEncryptionRule = ServerSideEncryptionRule
    static AnalyticsConfiguration = AnalyticsConfiguration
    static SourceSelectionCriteria = SourceSelectionCriteria
    static LoggingConfiguration = LoggingConfiguration
    static StorageClassAnalysis = StorageClassAnalysis
    static RoutingRule = RoutingRule
    static AccessControlTranslation = AccessControlTranslation
    static VersioningConfiguration = VersioningConfiguration
    static EncryptionConfiguration = EncryptionConfiguration
    static NotificationConfiguration = NotificationConfiguration
    static ServerSideEncryptionByDefault = ServerSideEncryptionByDefault
    static RedirectRule = RedirectRule
    static RedirectAllRequestsTo = RedirectAllRequestsTo
    static S3KeyFilter = S3KeyFilter
    static InventoryConfiguration = InventoryConfiguration
    static WebsiteConfiguration = WebsiteConfiguration
    static ReplicationConfiguration = ReplicationConfiguration
    static SseKmsEncryptedObjects = SseKmsEncryptedObjects
    static Rule = Rule
    static QueueConfiguration = QueueConfiguration
    static TopicConfiguration = TopicConfiguration
    static MetricsConfiguration = MetricsConfiguration
    static TagFilter = TagFilter
    static Transition = Transition
    static DataExport = DataExport
    static CorsConfiguration = CorsConfiguration
    static ReplicationDestination = ReplicationDestination
    static AccelerateConfiguration = AccelerateConfiguration
    static NoncurrentVersionTransition = NoncurrentVersionTransition
    static AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload
    static FilterRule = FilterRule
    static PublicAccessBlockConfiguration = PublicAccessBlockConfiguration

    constructor(properties?: BucketProperties) {
        super('AWS::S3::Bucket', properties)
    }
}
