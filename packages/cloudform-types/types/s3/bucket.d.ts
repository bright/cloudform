import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AbortIncompleteMultipartUpload {
    DaysAfterInitiation: Value<number>;
    constructor(properties: AbortIncompleteMultipartUpload);
}
export declare class AccelerateConfiguration {
    AccelerationStatus: Value<string>;
    constructor(properties: AccelerateConfiguration);
}
export declare class AccessControlTranslation {
    Owner: Value<string>;
    constructor(properties: AccessControlTranslation);
}
export declare class AnalyticsConfiguration {
    Id: Value<string>;
    Prefix?: Value<string>;
    StorageClassAnalysis: StorageClassAnalysis;
    TagFilters?: List<TagFilter>;
    constructor(properties: AnalyticsConfiguration);
}
export declare class BucketEncryption {
    ServerSideEncryptionConfiguration: List<ServerSideEncryptionRule>;
    constructor(properties: BucketEncryption);
}
export declare class CorsConfiguration {
    CorsRules: List<CorsRule>;
    constructor(properties: CorsConfiguration);
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
export declare class DataExport {
    Destination: Destination;
    OutputSchemaVersion: Value<string>;
    constructor(properties: DataExport);
}
export declare class DefaultRetention {
    Days?: Value<number>;
    Mode?: Value<string>;
    Years?: Value<number>;
    constructor(properties: DefaultRetention);
}
export declare class DeleteMarkerReplication {
    Status?: Value<string>;
    constructor(properties: DeleteMarkerReplication);
}
export declare class Destination {
    BucketAccountId?: Value<string>;
    BucketArn: Value<string>;
    Format: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: Destination);
}
export declare class EncryptionConfiguration {
    ReplicaKmsKeyID: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class EventBridgeConfiguration {
    EventBridgeEnabled?: Value<boolean>;
    constructor(properties: EventBridgeConfiguration);
}
export declare class FilterRule {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: FilterRule);
}
export declare class IntelligentTieringConfiguration {
    Id: Value<string>;
    Prefix?: Value<string>;
    Status: Value<string>;
    TagFilters?: List<TagFilter>;
    Tierings: List<Tiering>;
    constructor(properties: IntelligentTieringConfiguration);
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
export declare class LambdaConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Function: Value<string>;
    constructor(properties: LambdaConfiguration);
}
export declare class LifecycleConfiguration {
    Rules: List<Rule>;
    constructor(properties: LifecycleConfiguration);
}
export declare class LoggingConfiguration {
    DestinationBucketName?: Value<string>;
    LogFilePrefix?: Value<string>;
    constructor(properties: LoggingConfiguration);
}
export declare class Metrics {
    EventThreshold?: ReplicationTimeValue;
    Status: Value<string>;
    constructor(properties: Metrics);
}
export declare class MetricsConfiguration {
    AccessPointArn?: Value<string>;
    Id: Value<string>;
    Prefix?: Value<string>;
    TagFilters?: List<TagFilter>;
    constructor(properties: MetricsConfiguration);
}
export declare class NoncurrentVersionExpiration {
    NewerNoncurrentVersions?: Value<number>;
    NoncurrentDays: Value<number>;
    constructor(properties: NoncurrentVersionExpiration);
}
export declare class NoncurrentVersionTransition {
    NewerNoncurrentVersions?: Value<number>;
    StorageClass: Value<string>;
    TransitionInDays: Value<number>;
    constructor(properties: NoncurrentVersionTransition);
}
export declare class NotificationConfiguration {
    EventBridgeConfiguration?: EventBridgeConfiguration;
    LambdaConfigurations?: List<LambdaConfiguration>;
    QueueConfigurations?: List<QueueConfiguration>;
    TopicConfigurations?: List<TopicConfiguration>;
    constructor(properties: NotificationConfiguration);
}
export declare class NotificationFilter {
    S3Key: S3KeyFilter;
    constructor(properties: NotificationFilter);
}
export declare class ObjectLockConfiguration {
    ObjectLockEnabled?: Value<string>;
    Rule?: ObjectLockRule;
    constructor(properties: ObjectLockConfiguration);
}
export declare class ObjectLockRule {
    DefaultRetention?: DefaultRetention;
    constructor(properties: ObjectLockRule);
}
export declare class OwnershipControls {
    Rules: List<OwnershipControlsRule>;
    constructor(properties: OwnershipControls);
}
export declare class OwnershipControlsRule {
    ObjectOwnership?: Value<string>;
    constructor(properties: OwnershipControlsRule);
}
export declare class PublicAccessBlockConfiguration {
    BlockPublicAcls?: Value<boolean>;
    BlockPublicPolicy?: Value<boolean>;
    IgnorePublicAcls?: Value<boolean>;
    RestrictPublicBuckets?: Value<boolean>;
    constructor(properties: PublicAccessBlockConfiguration);
}
export declare class QueueConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Queue: Value<string>;
    constructor(properties: QueueConfiguration);
}
export declare class RedirectAllRequestsTo {
    HostName: Value<string>;
    Protocol?: Value<string>;
    constructor(properties: RedirectAllRequestsTo);
}
export declare class RedirectRule {
    HostName?: Value<string>;
    HttpRedirectCode?: Value<string>;
    Protocol?: Value<string>;
    ReplaceKeyPrefixWith?: Value<string>;
    ReplaceKeyWith?: Value<string>;
    constructor(properties: RedirectRule);
}
export declare class ReplicaModifications {
    Status: Value<string>;
    constructor(properties: ReplicaModifications);
}
export declare class ReplicationConfiguration {
    Role: Value<string>;
    Rules: List<ReplicationRule>;
    constructor(properties: ReplicationConfiguration);
}
export declare class ReplicationDestination {
    AccessControlTranslation?: AccessControlTranslation;
    Account?: Value<string>;
    Bucket: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Metrics?: Metrics;
    ReplicationTime?: ReplicationTime;
    StorageClass?: Value<string>;
    constructor(properties: ReplicationDestination);
}
export declare class ReplicationRule {
    DeleteMarkerReplication?: DeleteMarkerReplication;
    Destination: ReplicationDestination;
    Filter?: ReplicationRuleFilter;
    Id?: Value<string>;
    Prefix?: Value<string>;
    Priority?: Value<number>;
    SourceSelectionCriteria?: SourceSelectionCriteria;
    Status: Value<string>;
    constructor(properties: ReplicationRule);
}
export declare class ReplicationRuleAndOperator {
    Prefix?: Value<string>;
    TagFilters?: List<TagFilter>;
    constructor(properties: ReplicationRuleAndOperator);
}
export declare class ReplicationRuleFilter {
    And?: ReplicationRuleAndOperator;
    Prefix?: Value<string>;
    TagFilter?: TagFilter;
    constructor(properties: ReplicationRuleFilter);
}
export declare class ReplicationTime {
    Status: Value<string>;
    Time: ReplicationTimeValue;
    constructor(properties: ReplicationTime);
}
export declare class ReplicationTimeValue {
    Minutes: Value<number>;
    constructor(properties: ReplicationTimeValue);
}
export declare class RoutingRule {
    RedirectRule: RedirectRule;
    RoutingRuleCondition?: RoutingRuleCondition;
    constructor(properties: RoutingRule);
}
export declare class RoutingRuleCondition {
    HttpErrorCodeReturnedEquals?: Value<string>;
    KeyPrefixEquals?: Value<string>;
    constructor(properties: RoutingRuleCondition);
}
export declare class Rule {
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
    ExpirationDate?: Value<string>;
    ExpirationInDays?: Value<number>;
    ExpiredObjectDeleteMarker?: Value<boolean>;
    Id?: Value<string>;
    NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
    NoncurrentVersionExpirationInDays?: Value<number>;
    NoncurrentVersionTransition?: NoncurrentVersionTransition;
    NoncurrentVersionTransitions?: List<NoncurrentVersionTransition>;
    ObjectSizeGreaterThan?: Value<number>;
    ObjectSizeLessThan?: Value<number>;
    Prefix?: Value<string>;
    Status: Value<string>;
    TagFilters?: List<TagFilter>;
    Transition?: Transition;
    Transitions?: List<Transition>;
    constructor(properties: Rule);
}
export declare class S3KeyFilter {
    Rules: List<FilterRule>;
    constructor(properties: S3KeyFilter);
}
export declare class ServerSideEncryptionByDefault {
    KMSMasterKeyID?: Value<string>;
    SSEAlgorithm: Value<string>;
    constructor(properties: ServerSideEncryptionByDefault);
}
export declare class ServerSideEncryptionRule {
    BucketKeyEnabled?: Value<boolean>;
    ServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
    constructor(properties: ServerSideEncryptionRule);
}
export declare class SourceSelectionCriteria {
    ReplicaModifications?: ReplicaModifications;
    SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
    constructor(properties: SourceSelectionCriteria);
}
export declare class SseKmsEncryptedObjects {
    Status: Value<string>;
    constructor(properties: SseKmsEncryptedObjects);
}
export declare class StorageClassAnalysis {
    DataExport?: DataExport;
    constructor(properties: StorageClassAnalysis);
}
export declare class TagFilter {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: TagFilter);
}
export declare class Tiering {
    AccessTier: Value<string>;
    Days: Value<number>;
    constructor(properties: Tiering);
}
export declare class TopicConfiguration {
    Event: Value<string>;
    Filter?: NotificationFilter;
    Topic: Value<string>;
    constructor(properties: TopicConfiguration);
}
export declare class Transition {
    StorageClass: Value<string>;
    TransitionDate?: Value<string>;
    TransitionInDays?: Value<number>;
    constructor(properties: Transition);
}
export declare class VersioningConfiguration {
    Status: Value<string>;
    constructor(properties: VersioningConfiguration);
}
export declare class WebsiteConfiguration {
    ErrorDocument?: Value<string>;
    IndexDocument?: Value<string>;
    RedirectAllRequestsTo?: RedirectAllRequestsTo;
    RoutingRules?: List<RoutingRule>;
    constructor(properties: WebsiteConfiguration);
}
export interface BucketProperties {
    AccelerateConfiguration?: AccelerateConfiguration;
    AccessControl?: Value<string>;
    AnalyticsConfigurations?: List<AnalyticsConfiguration>;
    BucketEncryption?: BucketEncryption;
    BucketName?: Value<string>;
    CorsConfiguration?: CorsConfiguration;
    IntelligentTieringConfigurations?: List<IntelligentTieringConfiguration>;
    InventoryConfigurations?: List<InventoryConfiguration>;
    LifecycleConfiguration?: LifecycleConfiguration;
    LoggingConfiguration?: LoggingConfiguration;
    MetricsConfigurations?: List<MetricsConfiguration>;
    NotificationConfiguration?: NotificationConfiguration;
    ObjectLockConfiguration?: ObjectLockConfiguration;
    ObjectLockEnabled?: Value<boolean>;
    OwnershipControls?: OwnershipControls;
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    ReplicationConfiguration?: ReplicationConfiguration;
    Tags?: List<ResourceTag>;
    VersioningConfiguration?: VersioningConfiguration;
    WebsiteConfiguration?: WebsiteConfiguration;
}
export default class Bucket extends ResourceBase<BucketProperties> {
    static AbortIncompleteMultipartUpload: typeof AbortIncompleteMultipartUpload;
    static AccelerateConfiguration: typeof AccelerateConfiguration;
    static AccessControlTranslation: typeof AccessControlTranslation;
    static AnalyticsConfiguration: typeof AnalyticsConfiguration;
    static BucketEncryption: typeof BucketEncryption;
    static CorsConfiguration: typeof CorsConfiguration;
    static CorsRule: typeof CorsRule;
    static DataExport: typeof DataExport;
    static DefaultRetention: typeof DefaultRetention;
    static DeleteMarkerReplication: typeof DeleteMarkerReplication;
    static Destination: typeof Destination;
    static EncryptionConfiguration: typeof EncryptionConfiguration;
    static EventBridgeConfiguration: typeof EventBridgeConfiguration;
    static FilterRule: typeof FilterRule;
    static IntelligentTieringConfiguration: typeof IntelligentTieringConfiguration;
    static InventoryConfiguration: typeof InventoryConfiguration;
    static LambdaConfiguration: typeof LambdaConfiguration;
    static LifecycleConfiguration: typeof LifecycleConfiguration;
    static LoggingConfiguration: typeof LoggingConfiguration;
    static Metrics: typeof Metrics;
    static MetricsConfiguration: typeof MetricsConfiguration;
    static NoncurrentVersionExpiration: typeof NoncurrentVersionExpiration;
    static NoncurrentVersionTransition: typeof NoncurrentVersionTransition;
    static NotificationConfiguration: typeof NotificationConfiguration;
    static NotificationFilter: typeof NotificationFilter;
    static ObjectLockConfiguration: typeof ObjectLockConfiguration;
    static ObjectLockRule: typeof ObjectLockRule;
    static OwnershipControls: typeof OwnershipControls;
    static OwnershipControlsRule: typeof OwnershipControlsRule;
    static PublicAccessBlockConfiguration: typeof PublicAccessBlockConfiguration;
    static QueueConfiguration: typeof QueueConfiguration;
    static RedirectAllRequestsTo: typeof RedirectAllRequestsTo;
    static RedirectRule: typeof RedirectRule;
    static ReplicaModifications: typeof ReplicaModifications;
    static ReplicationConfiguration: typeof ReplicationConfiguration;
    static ReplicationDestination: typeof ReplicationDestination;
    static ReplicationRule: typeof ReplicationRule;
    static ReplicationRuleAndOperator: typeof ReplicationRuleAndOperator;
    static ReplicationRuleFilter: typeof ReplicationRuleFilter;
    static ReplicationTime: typeof ReplicationTime;
    static ReplicationTimeValue: typeof ReplicationTimeValue;
    static RoutingRule: typeof RoutingRule;
    static RoutingRuleCondition: typeof RoutingRuleCondition;
    static Rule: typeof Rule;
    static S3KeyFilter: typeof S3KeyFilter;
    static ServerSideEncryptionByDefault: typeof ServerSideEncryptionByDefault;
    static ServerSideEncryptionRule: typeof ServerSideEncryptionRule;
    static SourceSelectionCriteria: typeof SourceSelectionCriteria;
    static SseKmsEncryptedObjects: typeof SseKmsEncryptedObjects;
    static StorageClassAnalysis: typeof StorageClassAnalysis;
    static TagFilter: typeof TagFilter;
    static Tiering: typeof Tiering;
    static TopicConfiguration: typeof TopicConfiguration;
    static Transition: typeof Transition;
    static VersioningConfiguration: typeof VersioningConfiguration;
    static WebsiteConfiguration: typeof WebsiteConfiguration;
    constructor(properties?: BucketProperties);
}
