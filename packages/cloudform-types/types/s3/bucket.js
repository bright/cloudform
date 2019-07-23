"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BucketEncryption {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BucketEncryption = BucketEncryption;
class RoutingRuleCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RoutingRuleCondition = RoutingRuleCondition;
class LifecycleConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LifecycleConfiguration = LifecycleConfiguration;
class CorsRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsRule = CorsRule;
class Destination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Destination = Destination;
class AccessControlTranslation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlTranslation = AccessControlTranslation;
class VersioningConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VersioningConfiguration = VersioningConfiguration;
class NotificationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfiguration = NotificationConfiguration;
class ServerSideEncryptionByDefault {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerSideEncryptionByDefault = ServerSideEncryptionByDefault;
class RedirectAllRequestsTo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectAllRequestsTo = RedirectAllRequestsTo;
class S3KeyFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3KeyFilter = S3KeyFilter;
class InventoryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InventoryConfiguration = InventoryConfiguration;
class ReplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationConfiguration = ReplicationConfiguration;
class SseKmsEncryptedObjects {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SseKmsEncryptedObjects = SseKmsEncryptedObjects;
class QueueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueueConfiguration = QueueConfiguration;
class ObjectLockConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectLockConfiguration = ObjectLockConfiguration;
class CorsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsConfiguration = CorsConfiguration;
class ReplicationDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationDestination = ReplicationDestination;
class AccelerateConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccelerateConfiguration = AccelerateConfiguration;
class NoncurrentVersionTransition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NoncurrentVersionTransition = NoncurrentVersionTransition;
class AbortIncompleteMultipartUpload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload;
class PublicAccessBlockConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublicAccessBlockConfiguration = PublicAccessBlockConfiguration;
class DefaultRetention {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultRetention = DefaultRetention;
class NotificationFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationFilter = NotificationFilter;
class LambdaConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfiguration = LambdaConfiguration;
class ReplicationRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationRule = ReplicationRule;
class ServerSideEncryptionRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerSideEncryptionRule = ServerSideEncryptionRule;
class AnalyticsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalyticsConfiguration = AnalyticsConfiguration;
class SourceSelectionCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceSelectionCriteria = SourceSelectionCriteria;
class LoggingConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingConfiguration = LoggingConfiguration;
class StorageClassAnalysis {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageClassAnalysis = StorageClassAnalysis;
class RoutingRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RoutingRule = RoutingRule;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class RedirectRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectRule = RedirectRule;
class ObjectLockRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObjectLockRule = ObjectLockRule;
class WebsiteConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebsiteConfiguration = WebsiteConfiguration;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class TopicConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicConfiguration = TopicConfiguration;
class MetricsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricsConfiguration = MetricsConfiguration;
class TagFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagFilter = TagFilter;
class Transition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Transition = Transition;
class DataExport {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataExport = DataExport;
class FilterRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterRule = FilterRule;
class Bucket extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::S3::Bucket', properties || {});
    }
}
Bucket.BucketEncryption = BucketEncryption;
Bucket.RoutingRuleCondition = RoutingRuleCondition;
Bucket.LifecycleConfiguration = LifecycleConfiguration;
Bucket.CorsRule = CorsRule;
Bucket.Destination = Destination;
Bucket.AccessControlTranslation = AccessControlTranslation;
Bucket.VersioningConfiguration = VersioningConfiguration;
Bucket.NotificationConfiguration = NotificationConfiguration;
Bucket.ServerSideEncryptionByDefault = ServerSideEncryptionByDefault;
Bucket.RedirectAllRequestsTo = RedirectAllRequestsTo;
Bucket.S3KeyFilter = S3KeyFilter;
Bucket.InventoryConfiguration = InventoryConfiguration;
Bucket.ReplicationConfiguration = ReplicationConfiguration;
Bucket.SseKmsEncryptedObjects = SseKmsEncryptedObjects;
Bucket.QueueConfiguration = QueueConfiguration;
Bucket.ObjectLockConfiguration = ObjectLockConfiguration;
Bucket.CorsConfiguration = CorsConfiguration;
Bucket.ReplicationDestination = ReplicationDestination;
Bucket.AccelerateConfiguration = AccelerateConfiguration;
Bucket.NoncurrentVersionTransition = NoncurrentVersionTransition;
Bucket.AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload;
Bucket.PublicAccessBlockConfiguration = PublicAccessBlockConfiguration;
Bucket.DefaultRetention = DefaultRetention;
Bucket.NotificationFilter = NotificationFilter;
Bucket.LambdaConfiguration = LambdaConfiguration;
Bucket.ReplicationRule = ReplicationRule;
Bucket.ServerSideEncryptionRule = ServerSideEncryptionRule;
Bucket.AnalyticsConfiguration = AnalyticsConfiguration;
Bucket.SourceSelectionCriteria = SourceSelectionCriteria;
Bucket.LoggingConfiguration = LoggingConfiguration;
Bucket.StorageClassAnalysis = StorageClassAnalysis;
Bucket.RoutingRule = RoutingRule;
Bucket.EncryptionConfiguration = EncryptionConfiguration;
Bucket.RedirectRule = RedirectRule;
Bucket.ObjectLockRule = ObjectLockRule;
Bucket.WebsiteConfiguration = WebsiteConfiguration;
Bucket.Rule = Rule;
Bucket.TopicConfiguration = TopicConfiguration;
Bucket.MetricsConfiguration = MetricsConfiguration;
Bucket.TagFilter = TagFilter;
Bucket.Transition = Transition;
Bucket.DataExport = DataExport;
Bucket.FilterRule = FilterRule;
exports.default = Bucket;
