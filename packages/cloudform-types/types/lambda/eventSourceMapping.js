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
exports.SourceAccessConfiguration = exports.SelfManagedKafkaEventSourceConfig = exports.SelfManagedEventSource = exports.ScalingConfig = exports.OnFailure = exports.FilterCriteria = exports.Filter = exports.Endpoints = exports.DocumentDBEventSourceConfig = exports.DestinationConfig = exports.AmazonManagedKafkaEventSourceConfig = void 0;
const resource_1 = require("../resource");
class AmazonManagedKafkaEventSourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonManagedKafkaEventSourceConfig = AmazonManagedKafkaEventSourceConfig;
class DestinationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationConfig = DestinationConfig;
class DocumentDBEventSourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocumentDBEventSourceConfig = DocumentDBEventSourceConfig;
class Endpoints {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Endpoints = Endpoints;
class Filter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Filter = Filter;
class FilterCriteria {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FilterCriteria = FilterCriteria;
class OnFailure {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnFailure = OnFailure;
class ScalingConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScalingConfig = ScalingConfig;
class SelfManagedEventSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelfManagedEventSource = SelfManagedEventSource;
class SelfManagedKafkaEventSourceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelfManagedKafkaEventSourceConfig = SelfManagedKafkaEventSourceConfig;
class SourceAccessConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceAccessConfiguration = SourceAccessConfiguration;
class EventSourceMapping extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lambda::EventSourceMapping', properties);
    }
}
exports.default = EventSourceMapping;
EventSourceMapping.AmazonManagedKafkaEventSourceConfig = AmazonManagedKafkaEventSourceConfig;
EventSourceMapping.DestinationConfig = DestinationConfig;
EventSourceMapping.DocumentDBEventSourceConfig = DocumentDBEventSourceConfig;
EventSourceMapping.Endpoints = Endpoints;
EventSourceMapping.Filter = Filter;
EventSourceMapping.FilterCriteria = FilterCriteria;
EventSourceMapping.OnFailure = OnFailure;
EventSourceMapping.ScalingConfig = ScalingConfig;
EventSourceMapping.SelfManagedEventSource = SelfManagedEventSource;
EventSourceMapping.SelfManagedKafkaEventSourceConfig = SelfManagedKafkaEventSourceConfig;
EventSourceMapping.SourceAccessConfiguration = SourceAccessConfiguration;
