/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class OwnershipControls {


    constructor(properties: OwnershipControls) {
        Object.assign(this, properties)
    }
}

export class ReplicaModifications {
    Status!: Value<string>

    constructor(properties: ReplicaModifications) {
        Object.assign(this, properties)
    }
}

export class CorsRule {
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

export class OwnershipControlsRule {
    ObjectOwnership?: Value<string>

    constructor(properties: OwnershipControlsRule) {
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

export class ReplicationTime {
    Status!: Value<string>

    constructor(properties: ReplicationTime) {
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

export class Tiering {
    AccessTier!: Value<string>
    Days!: Value<number>

    constructor(properties: Tiering) {
        Object.assign(this, properties)
    }
}

export class SseKmsEncryptedObjects {
    Status!: Value<string>

    constructor(properties: SseKmsEncryptedObjects) {
        Object.assign(this, properties)
    }
}

export class QueueConfiguration {
    Event!: Value<string>
    Queue!: Value<string>

    constructor(properties: QueueConfiguration) {
        Object.assign(this, properties)
    }
}

export class ObjectLockConfiguration {
    ObjectLockEnabled?: Value<string>

    constructor(properties: ObjectLockConfiguration) {
        Object.assign(this, properties)
    }
}

export class AccelerateConfiguration {
    AccelerationStatus!: Value<string>

    constructor(properties: AccelerateConfiguration) {
        Object.assign(this, properties)
    }
}

export class IntelligentTieringConfiguration {
    Id!: Value<string>
    Prefix?: Value<string>
    Status!: Value<string>

    constructor(properties: IntelligentTieringConfiguration) {
        Object.assign(this, properties)
    }
}

export class AbortIncompleteMultipartUpload {
    DaysAfterInitiation!: Value<number>

    constructor(properties: AbortIncompleteMultipartUpload) {
        Object.assign(this, properties)
    }
}

export class DeleteMarkerReplication {
    Status?: Value<string>

    constructor(properties: DeleteMarkerReplication) {
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

export class ReplicationRule {
    Id?: Value<string>
    Prefix?: Value<string>
    Priority?: Value<number>
    Status!: Value<string>

    constructor(properties: ReplicationRule) {
        Object.assign(this, properties)
    }
}

export class SourceSelectionCriteria {


    constructor(properties: SourceSelectionCriteria) {
        Object.assign(this, properties)
    }
}

export class StorageClassAnalysis {


    constructor(properties: StorageClassAnalysis) {
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

export class ObjectLockRule {


    constructor(properties: ObjectLockRule) {
        Object.assign(this, properties)
    }
}

export class Rule {
    ExpirationDate?: Value<string>
    ExpirationInDays?: Value<number>
    ExpiredObjectDeleteMarker?: Value<boolean>
    Id?: Value<string>
    NoncurrentVersionExpirationInDays?: Value<number>
    Prefix?: Value<string>
    Status!: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class MetricsConfiguration {
    Id!: Value<string>
    Prefix?: Value<string>

    constructor(properties: MetricsConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataExport {
    OutputSchemaVersion!: Value<string>

    constructor(properties: DataExport) {
        Object.assign(this, properties)
    }
}

export class ReplicationTimeValue {
    Minutes!: Value<number>

    constructor(properties: ReplicationTimeValue) {
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

export class ReplicationRuleAndOperator {
    Prefix?: Value<string>

    constructor(properties: ReplicationRuleAndOperator) {
        Object.assign(this, properties)
    }
}

export class BucketEncryption {


    constructor(properties: BucketEncryption) {
        Object.assign(this, properties)
    }
}

export class Metrics {
    Status!: Value<string>

    constructor(properties: Metrics) {
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


    constructor(properties: LifecycleConfiguration) {
        Object.assign(this, properties)
    }
}

export class NotificationConfiguration {


    constructor(properties: NotificationConfiguration) {
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


    constructor(properties: S3KeyFilter) {
        Object.assign(this, properties)
    }
}

export class InventoryConfiguration {
    Enabled!: Value<boolean>
    Id!: Value<string>
    IncludedObjectVersions!: Value<string>
    Prefix?: Value<string>
    ScheduleFrequency!: Value<string>

    constructor(properties: InventoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationConfiguration {
    Role!: Value<string>

    constructor(properties: ReplicationConfiguration) {
        Object.assign(this, properties)
    }
}

export class CorsConfiguration {


    constructor(properties: CorsConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicationDestination {
    Account?: Value<string>
    Bucket!: Value<string>
    StorageClass?: Value<string>

    constructor(properties: ReplicationDestination) {
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

export class DefaultRetention {
    Days?: Value<number>
    Mode?: Value<string>
    Years?: Value<number>

    constructor(properties: DefaultRetention) {
        Object.assign(this, properties)
    }
}

export class NotificationFilter {


    constructor(properties: NotificationFilter) {
        Object.assign(this, properties)
    }
}

export class LambdaConfiguration {
    Event!: Value<string>
    Function!: Value<string>

    constructor(properties: LambdaConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServerSideEncryptionRule {
    BucketKeyEnabled?: Value<boolean>

    constructor(properties: ServerSideEncryptionRule) {
        Object.assign(this, properties)
    }
}

export class AnalyticsConfiguration {
    Id!: Value<string>
    Prefix?: Value<string>

    constructor(properties: AnalyticsConfiguration) {
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

export class RoutingRule {


    constructor(properties: RoutingRule) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    ReplicaKmsKeyID!: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebsiteConfiguration {
    ErrorDocument?: Value<string>
    IndexDocument?: Value<string>

    constructor(properties: WebsiteConfiguration) {
        Object.assign(this, properties)
    }
}

export class TopicConfiguration {
    Event!: Value<string>
    Topic!: Value<string>

    constructor(properties: TopicConfiguration) {
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

export class ReplicationRuleFilter {
    Prefix?: Value<string>

    constructor(properties: ReplicationRuleFilter) {
        Object.assign(this, properties)
    }
}

export interface BucketProperties {
    AccessControl?: Value<string>
    BucketName?: Value<string>
    ObjectLockEnabled?: Value<boolean>
}

export default class Bucket extends ResourceBase<BucketProperties> {
    static OwnershipControls = OwnershipControls
    static ReplicaModifications = ReplicaModifications
    static CorsRule = CorsRule
    static Destination = Destination
    static OwnershipControlsRule = OwnershipControlsRule
    static AccessControlTranslation = AccessControlTranslation
    static VersioningConfiguration = VersioningConfiguration
    static ReplicationTime = ReplicationTime
    static ServerSideEncryptionByDefault = ServerSideEncryptionByDefault
    static Tiering = Tiering
    static SseKmsEncryptedObjects = SseKmsEncryptedObjects
    static QueueConfiguration = QueueConfiguration
    static ObjectLockConfiguration = ObjectLockConfiguration
    static AccelerateConfiguration = AccelerateConfiguration
    static IntelligentTieringConfiguration = IntelligentTieringConfiguration
    static AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload
    static DeleteMarkerReplication = DeleteMarkerReplication
    static PublicAccessBlockConfiguration = PublicAccessBlockConfiguration
    static ReplicationRule = ReplicationRule
    static SourceSelectionCriteria = SourceSelectionCriteria
    static StorageClassAnalysis = StorageClassAnalysis
    static RedirectRule = RedirectRule
    static ObjectLockRule = ObjectLockRule
    static Rule = Rule
    static MetricsConfiguration = MetricsConfiguration
    static DataExport = DataExport
    static ReplicationTimeValue = ReplicationTimeValue
    static FilterRule = FilterRule
    static ReplicationRuleAndOperator = ReplicationRuleAndOperator
    static BucketEncryption = BucketEncryption
    static Metrics = Metrics
    static RoutingRuleCondition = RoutingRuleCondition
    static LifecycleConfiguration = LifecycleConfiguration
    static NotificationConfiguration = NotificationConfiguration
    static RedirectAllRequestsTo = RedirectAllRequestsTo
    static S3KeyFilter = S3KeyFilter
    static InventoryConfiguration = InventoryConfiguration
    static ReplicationConfiguration = ReplicationConfiguration
    static CorsConfiguration = CorsConfiguration
    static ReplicationDestination = ReplicationDestination
    static NoncurrentVersionTransition = NoncurrentVersionTransition
    static DefaultRetention = DefaultRetention
    static NotificationFilter = NotificationFilter
    static LambdaConfiguration = LambdaConfiguration
    static ServerSideEncryptionRule = ServerSideEncryptionRule
    static AnalyticsConfiguration = AnalyticsConfiguration
    static LoggingConfiguration = LoggingConfiguration
    static RoutingRule = RoutingRule
    static EncryptionConfiguration = EncryptionConfiguration
    static WebsiteConfiguration = WebsiteConfiguration
    static TopicConfiguration = TopicConfiguration
    static TagFilter = TagFilter
    static Transition = Transition
    static ReplicationRuleFilter = ReplicationRuleFilter

    constructor(properties?: BucketProperties) {
        super('AWS::S3::Bucket', properties || {})
    }
}
