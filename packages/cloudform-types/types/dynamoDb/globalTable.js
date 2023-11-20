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
exports.WriteProvisionedThroughputSettings = exports.TimeToLiveSpecification = exports.TargetTrackingScalingPolicyConfiguration = exports.StreamSpecification = exports.SSESpecification = exports.ReplicaSpecification = exports.ReplicaSSESpecification = exports.ReplicaGlobalSecondaryIndexSpecification = exports.ReadProvisionedThroughputSettings = exports.Projection = exports.PointInTimeRecoverySpecification = exports.LocalSecondaryIndex = exports.KinesisStreamSpecification = exports.KeySchema = exports.GlobalSecondaryIndex = exports.ContributorInsightsSpecification = exports.CapacityAutoScalingSettings = exports.AttributeDefinition = void 0;
const resource_1 = require("../resource");
class AttributeDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDefinition = AttributeDefinition;
class CapacityAutoScalingSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CapacityAutoScalingSettings = CapacityAutoScalingSettings;
class ContributorInsightsSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContributorInsightsSpecification = ContributorInsightsSpecification;
class GlobalSecondaryIndex {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlobalSecondaryIndex = GlobalSecondaryIndex;
class KeySchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeySchema = KeySchema;
class KinesisStreamSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisStreamSpecification = KinesisStreamSpecification;
class LocalSecondaryIndex {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalSecondaryIndex = LocalSecondaryIndex;
class PointInTimeRecoverySpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PointInTimeRecoverySpecification = PointInTimeRecoverySpecification;
class Projection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Projection = Projection;
class ReadProvisionedThroughputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReadProvisionedThroughputSettings = ReadProvisionedThroughputSettings;
class ReplicaGlobalSecondaryIndexSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicaGlobalSecondaryIndexSpecification = ReplicaGlobalSecondaryIndexSpecification;
class ReplicaSSESpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicaSSESpecification = ReplicaSSESpecification;
class ReplicaSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicaSpecification = ReplicaSpecification;
class SSESpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SSESpecification = SSESpecification;
class StreamSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamSpecification = StreamSpecification;
class TargetTrackingScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration;
class TimeToLiveSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeToLiveSpecification = TimeToLiveSpecification;
class WriteProvisionedThroughputSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WriteProvisionedThroughputSettings = WriteProvisionedThroughputSettings;
class GlobalTable extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DynamoDB::GlobalTable', properties);
    }
}
exports.default = GlobalTable;
GlobalTable.AttributeDefinition = AttributeDefinition;
GlobalTable.CapacityAutoScalingSettings = CapacityAutoScalingSettings;
GlobalTable.ContributorInsightsSpecification = ContributorInsightsSpecification;
GlobalTable.GlobalSecondaryIndex = GlobalSecondaryIndex;
GlobalTable.KeySchema = KeySchema;
GlobalTable.KinesisStreamSpecification = KinesisStreamSpecification;
GlobalTable.LocalSecondaryIndex = LocalSecondaryIndex;
GlobalTable.PointInTimeRecoverySpecification = PointInTimeRecoverySpecification;
GlobalTable.Projection = Projection;
GlobalTable.ReadProvisionedThroughputSettings = ReadProvisionedThroughputSettings;
GlobalTable.ReplicaGlobalSecondaryIndexSpecification = ReplicaGlobalSecondaryIndexSpecification;
GlobalTable.ReplicaSSESpecification = ReplicaSSESpecification;
GlobalTable.ReplicaSpecification = ReplicaSpecification;
GlobalTable.SSESpecification = SSESpecification;
GlobalTable.StreamSpecification = StreamSpecification;
GlobalTable.TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration;
GlobalTable.TimeToLiveSpecification = TimeToLiveSpecification;
GlobalTable.WriteProvisionedThroughputSettings = WriteProvisionedThroughputSettings;
