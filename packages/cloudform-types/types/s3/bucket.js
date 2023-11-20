"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageClassAnalysis = exports.SseKmsEncryptedObjects = exports.SourceSelectionCriteria = exports.ServerSideEncryptionRule = exports.ServerSideEncryptionByDefault = exports.S3KeyFilter = exports.Rule = exports.RoutingRuleCondition = exports.RoutingRule = exports.ReplicationTimeValue = exports.ReplicationTime = exports.ReplicationRuleFilter = exports.ReplicationRuleAndOperator = exports.ReplicationRule = exports.ReplicationDestination = exports.ReplicationConfiguration = exports.ReplicaModifications = exports.RedirectRule = exports.RedirectAllRequestsTo = exports.QueueConfiguration = exports.PublicAccessBlockConfiguration = exports.OwnershipControlsRule = exports.OwnershipControls = exports.ObjectLockRule = exports.ObjectLockConfiguration = exports.NotificationFilter = exports.NotificationConfiguration = exports.NoncurrentVersionTransition = exports.NoncurrentVersionExpiration = exports.MetricsConfiguration = exports.Metrics = exports.LoggingConfiguration = exports.LifecycleConfiguration = exports.LambdaConfiguration = exports.InventoryConfiguration = exports.IntelligentTieringConfiguration = exports.FilterRule = exports.EventBridgeConfiguration = exports.EncryptionConfiguration = exports.Destination = exports.DeleteMarkerReplication = exports.DefaultRetention = exports.DataExport = exports.CorsRule = exports.CorsConfiguration = exports.BucketEncryption = exports.AnalyticsConfiguration = exports.AccessControlTranslation = exports.AccelerateConfiguration = exports.AbortIncompleteMultipartUpload = void 0;
exports.WebsiteConfiguration = exports.VersioningConfiguration = exports.Transition = exports.TopicConfiguration = exports.Tiering = exports.TagFilter = void 0;
const resource_1 = require("../resource");
class AbortIncompleteMultipartUpload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload;
class AccelerateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccelerateConfiguration = AccelerateConfiguration;
class AccessControlTranslation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlTranslation = AccessControlTranslation;
class AnalyticsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalyticsConfiguration = AnalyticsConfiguration;
class BucketEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BucketEncryption = BucketEncryption;
class CorsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsConfiguration = CorsConfiguration;
class CorsRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsRule = CorsRule;
class DataExport {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataExport = DataExport;
class DefaultRetention {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultRetention = DefaultRetention;
class DeleteMarkerReplication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeleteMarkerReplication = DeleteMarkerReplication;
class Destination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Destination = Destination;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class EventBridgeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventBridgeConfiguration = EventBridgeConfiguration;
class FilterRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterRule = FilterRule;
class IntelligentTieringConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntelligentTieringConfiguration = IntelligentTieringConfiguration;
class InventoryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InventoryConfiguration = InventoryConfiguration;
class LambdaConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfiguration = LambdaConfiguration;
class LifecycleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LifecycleConfiguration = LifecycleConfiguration;
class LoggingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingConfiguration = LoggingConfiguration;
class Metrics {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Metrics = Metrics;
class MetricsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricsConfiguration = MetricsConfiguration;
class NoncurrentVersionExpiration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoncurrentVersionExpiration = NoncurrentVersionExpiration;
class NoncurrentVersionTransition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoncurrentVersionTransition = NoncurrentVersionTransition;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class NotificationFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationFilter = NotificationFilter;
class ObjectLockConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectLockConfiguration = ObjectLockConfiguration;
class ObjectLockRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectLockRule = ObjectLockRule;
class OwnershipControls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OwnershipControls = OwnershipControls;
class OwnershipControlsRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OwnershipControlsRule = OwnershipControlsRule;
class PublicAccessBlockConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublicAccessBlockConfiguration = PublicAccessBlockConfiguration;
class QueueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueueConfiguration = QueueConfiguration;
class RedirectAllRequestsTo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectAllRequestsTo = RedirectAllRequestsTo;
class RedirectRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectRule = RedirectRule;
class ReplicaModifications {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicaModifications = ReplicaModifications;
class ReplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationConfiguration = ReplicationConfiguration;
class ReplicationDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationDestination = ReplicationDestination;
class ReplicationRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationRule = ReplicationRule;
class ReplicationRuleAndOperator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationRuleAndOperator = ReplicationRuleAndOperator;
class ReplicationRuleFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationRuleFilter = ReplicationRuleFilter;
class ReplicationTime {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationTime = ReplicationTime;
class ReplicationTimeValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationTimeValue = ReplicationTimeValue;
class RoutingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RoutingRule = RoutingRule;
class RoutingRuleCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RoutingRuleCondition = RoutingRuleCondition;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class S3KeyFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3KeyFilter = S3KeyFilter;
class ServerSideEncryptionByDefault {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerSideEncryptionByDefault = ServerSideEncryptionByDefault;
class ServerSideEncryptionRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerSideEncryptionRule = ServerSideEncryptionRule;
class SourceSelectionCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceSelectionCriteria = SourceSelectionCriteria;
class SseKmsEncryptedObjects {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SseKmsEncryptedObjects = SseKmsEncryptedObjects;
class StorageClassAnalysis {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageClassAnalysis = StorageClassAnalysis;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class Tiering {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tiering = Tiering;
class TopicConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicConfiguration = TopicConfiguration;
class Transition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Transition = Transition;
class VersioningConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VersioningConfiguration = VersioningConfiguration;
class WebsiteConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebsiteConfiguration = WebsiteConfiguration;
class Bucket extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::S3::Bucket', properties || {});
    }
}
exports.default = Bucket;
Bucket.AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload;
Bucket.AccelerateConfiguration = AccelerateConfiguration;
Bucket.AccessControlTranslation = AccessControlTranslation;
Bucket.AnalyticsConfiguration = AnalyticsConfiguration;
Bucket.BucketEncryption = BucketEncryption;
Bucket.CorsConfiguration = CorsConfiguration;
Bucket.CorsRule = CorsRule;
Bucket.DataExport = DataExport;
Bucket.DefaultRetention = DefaultRetention;
Bucket.DeleteMarkerReplication = DeleteMarkerReplication;
Bucket.Destination = Destination;
Bucket.EncryptionConfiguration = EncryptionConfiguration;
Bucket.EventBridgeConfiguration = EventBridgeConfiguration;
Bucket.FilterRule = FilterRule;
Bucket.IntelligentTieringConfiguration = IntelligentTieringConfiguration;
Bucket.InventoryConfiguration = InventoryConfiguration;
Bucket.LambdaConfiguration = LambdaConfiguration;
Bucket.LifecycleConfiguration = LifecycleConfiguration;
Bucket.LoggingConfiguration = LoggingConfiguration;
Bucket.Metrics = Metrics;
Bucket.MetricsConfiguration = MetricsConfiguration;
Bucket.NoncurrentVersionExpiration = NoncurrentVersionExpiration;
Bucket.NoncurrentVersionTransition = NoncurrentVersionTransition;
Bucket.NotificationConfiguration = NotificationConfiguration;
Bucket.NotificationFilter = NotificationFilter;
Bucket.ObjectLockConfiguration = ObjectLockConfiguration;
Bucket.ObjectLockRule = ObjectLockRule;
Bucket.OwnershipControls = OwnershipControls;
Bucket.OwnershipControlsRule = OwnershipControlsRule;
Bucket.PublicAccessBlockConfiguration = PublicAccessBlockConfiguration;
Bucket.QueueConfiguration = QueueConfiguration;
Bucket.RedirectAllRequestsTo = RedirectAllRequestsTo;
Bucket.RedirectRule = RedirectRule;
Bucket.ReplicaModifications = ReplicaModifications;
Bucket.ReplicationConfiguration = ReplicationConfiguration;
Bucket.ReplicationDestination = ReplicationDestination;
Bucket.ReplicationRule = ReplicationRule;
Bucket.ReplicationRuleAndOperator = ReplicationRuleAndOperator;
Bucket.ReplicationRuleFilter = ReplicationRuleFilter;
Bucket.ReplicationTime = ReplicationTime;
Bucket.ReplicationTimeValue = ReplicationTimeValue;
Bucket.RoutingRule = RoutingRule;
Bucket.RoutingRuleCondition = RoutingRuleCondition;
Bucket.Rule = Rule;
Bucket.S3KeyFilter = S3KeyFilter;
Bucket.ServerSideEncryptionByDefault = ServerSideEncryptionByDefault;
Bucket.ServerSideEncryptionRule = ServerSideEncryptionRule;
Bucket.SourceSelectionCriteria = SourceSelectionCriteria;
Bucket.SseKmsEncryptedObjects = SseKmsEncryptedObjects;
Bucket.StorageClassAnalysis = StorageClassAnalysis;
Bucket.TagFilter = TagFilter;
Bucket.Tiering = Tiering;
Bucket.TopicConfiguration = TopicConfiguration;
Bucket.Transition = Transition;
Bucket.VersioningConfiguration = VersioningConfiguration;
Bucket.WebsiteConfiguration = WebsiteConfiguration;
