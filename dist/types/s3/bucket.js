"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NotificationFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationFilter = NotificationFilter;
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
class AnalyticsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalyticsConfiguration = AnalyticsConfiguration;
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
class RedirectRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedirectRule = RedirectRule;
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
class WebsiteConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WebsiteConfiguration = WebsiteConfiguration;
class ReplicationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationConfiguration = ReplicationConfiguration;
class Rule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Rule = Rule;
class QueueConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueueConfiguration = QueueConfiguration;
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
class FilterRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterRule = FilterRule;
class Bucket extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::S3::Bucket', properties, dependsOn);
    }
}
exports.default = Bucket;
