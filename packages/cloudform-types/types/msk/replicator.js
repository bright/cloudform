"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicReplication = exports.ReplicationInfo = exports.KafkaClusterClientVpcConfig = exports.KafkaCluster = exports.ConsumerGroupReplication = exports.AmazonMskCluster = void 0;
const resource_1 = require("../resource");
class AmazonMskCluster {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonMskCluster = AmazonMskCluster;
class ConsumerGroupReplication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConsumerGroupReplication = ConsumerGroupReplication;
class KafkaCluster {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaCluster = KafkaCluster;
class KafkaClusterClientVpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaClusterClientVpcConfig = KafkaClusterClientVpcConfig;
class ReplicationInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplicationInfo = ReplicationInfo;
class TopicReplication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TopicReplication = TopicReplication;
class Replicator extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MSK::Replicator', properties);
    }
}
exports.default = Replicator;
Replicator.AmazonMskCluster = AmazonMskCluster;
Replicator.ConsumerGroupReplication = ConsumerGroupReplication;
Replicator.KafkaCluster = KafkaCluster;
Replicator.KafkaClusterClientVpcConfig = KafkaClusterClientVpcConfig;
Replicator.ReplicationInfo = ReplicationInfo;
Replicator.TopicReplication = TopicReplication;
