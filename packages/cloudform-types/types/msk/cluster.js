"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3 = S3;
class CloudWatchLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogs = CloudWatchLogs;
class EncryptionAtRest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRest = EncryptionAtRest;
class BrokerLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BrokerLogs = BrokerLogs;
class EncryptionInTransit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInTransit = EncryptionInTransit;
class Prometheus {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Prometheus = Prometheus;
class LoggingInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingInfo = LoggingInfo;
class EncryptionInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInfo = EncryptionInfo;
class Iam {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Iam = Iam;
class Sasl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sasl = Sasl;
class ConfigurationInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationInfo = ConfigurationInfo;
class BrokerNodeGroupInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BrokerNodeGroupInfo = BrokerNodeGroupInfo;
class Scram {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scram = Scram;
class JmxExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JmxExporter = JmxExporter;
class StorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageInfo = StorageInfo;
class NodeExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeExporter = NodeExporter;
class EBSStorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSStorageInfo = EBSStorageInfo;
class Firehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Firehose = Firehose;
class ClientAuthentication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientAuthentication = ClientAuthentication;
class Tls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tls = Tls;
class OpenMonitoring {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenMonitoring = OpenMonitoring;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MSK::Cluster', properties);
    }
}
exports.default = Cluster;
Cluster.S3 = S3;
Cluster.CloudWatchLogs = CloudWatchLogs;
Cluster.EncryptionAtRest = EncryptionAtRest;
Cluster.BrokerLogs = BrokerLogs;
Cluster.EncryptionInTransit = EncryptionInTransit;
Cluster.Prometheus = Prometheus;
Cluster.LoggingInfo = LoggingInfo;
Cluster.EncryptionInfo = EncryptionInfo;
Cluster.Iam = Iam;
Cluster.Sasl = Sasl;
Cluster.ConfigurationInfo = ConfigurationInfo;
Cluster.BrokerNodeGroupInfo = BrokerNodeGroupInfo;
Cluster.Scram = Scram;
Cluster.JmxExporter = JmxExporter;
Cluster.StorageInfo = StorageInfo;
Cluster.NodeExporter = NodeExporter;
Cluster.EBSStorageInfo = EBSStorageInfo;
Cluster.Firehose = Firehose;
Cluster.ClientAuthentication = ClientAuthentication;
Cluster.Tls = Tls;
Cluster.OpenMonitoring = OpenMonitoring;
