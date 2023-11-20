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
exports.VpcConnectivityTls = exports.VpcConnectivityScram = exports.VpcConnectivitySasl = exports.VpcConnectivityIam = exports.VpcConnectivityClientAuthentication = exports.VpcConnectivity = exports.Unauthenticated = exports.Tls = exports.StorageInfo = exports.Scram = exports.Sasl = exports.S3 = exports.PublicAccess = exports.ProvisionedThroughput = exports.Prometheus = exports.OpenMonitoring = exports.NodeExporter = exports.LoggingInfo = exports.JmxExporter = exports.Iam = exports.Firehose = exports.EncryptionInfo = exports.EncryptionInTransit = exports.EncryptionAtRest = exports.EBSStorageInfo = exports.ConnectivityInfo = exports.ConfigurationInfo = exports.CloudWatchLogs = exports.ClientAuthentication = exports.BrokerNodeGroupInfo = exports.BrokerLogs = void 0;
const resource_1 = require("../resource");
class BrokerLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BrokerLogs = BrokerLogs;
class BrokerNodeGroupInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BrokerNodeGroupInfo = BrokerNodeGroupInfo;
class ClientAuthentication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientAuthentication = ClientAuthentication;
class CloudWatchLogs {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogs = CloudWatchLogs;
class ConfigurationInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationInfo = ConfigurationInfo;
class ConnectivityInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectivityInfo = ConnectivityInfo;
class EBSStorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSStorageInfo = EBSStorageInfo;
class EncryptionAtRest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRest = EncryptionAtRest;
class EncryptionInTransit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInTransit = EncryptionInTransit;
class EncryptionInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInfo = EncryptionInfo;
class Firehose {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Firehose = Firehose;
class Iam {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Iam = Iam;
class JmxExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JmxExporter = JmxExporter;
class LoggingInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingInfo = LoggingInfo;
class NodeExporter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeExporter = NodeExporter;
class OpenMonitoring {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenMonitoring = OpenMonitoring;
class Prometheus {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Prometheus = Prometheus;
class ProvisionedThroughput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProvisionedThroughput = ProvisionedThroughput;
class PublicAccess {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublicAccess = PublicAccess;
class S3 {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3 = S3;
class Sasl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sasl = Sasl;
class Scram {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Scram = Scram;
class StorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageInfo = StorageInfo;
class Tls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tls = Tls;
class Unauthenticated {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Unauthenticated = Unauthenticated;
class VpcConnectivity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivity = VpcConnectivity;
class VpcConnectivityClientAuthentication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivityClientAuthentication = VpcConnectivityClientAuthentication;
class VpcConnectivityIam {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivityIam = VpcConnectivityIam;
class VpcConnectivitySasl {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivitySasl = VpcConnectivitySasl;
class VpcConnectivityScram {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivityScram = VpcConnectivityScram;
class VpcConnectivityTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectivityTls = VpcConnectivityTls;
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MSK::Cluster', properties);
    }
}
exports.default = Cluster;
Cluster.BrokerLogs = BrokerLogs;
Cluster.BrokerNodeGroupInfo = BrokerNodeGroupInfo;
Cluster.ClientAuthentication = ClientAuthentication;
Cluster.CloudWatchLogs = CloudWatchLogs;
Cluster.ConfigurationInfo = ConfigurationInfo;
Cluster.ConnectivityInfo = ConnectivityInfo;
Cluster.EBSStorageInfo = EBSStorageInfo;
Cluster.EncryptionAtRest = EncryptionAtRest;
Cluster.EncryptionInTransit = EncryptionInTransit;
Cluster.EncryptionInfo = EncryptionInfo;
Cluster.Firehose = Firehose;
Cluster.Iam = Iam;
Cluster.JmxExporter = JmxExporter;
Cluster.LoggingInfo = LoggingInfo;
Cluster.NodeExporter = NodeExporter;
Cluster.OpenMonitoring = OpenMonitoring;
Cluster.Prometheus = Prometheus;
Cluster.ProvisionedThroughput = ProvisionedThroughput;
Cluster.PublicAccess = PublicAccess;
Cluster.S3 = S3;
Cluster.Sasl = Sasl;
Cluster.Scram = Scram;
Cluster.StorageInfo = StorageInfo;
Cluster.Tls = Tls;
Cluster.Unauthenticated = Unauthenticated;
Cluster.VpcConnectivity = VpcConnectivity;
Cluster.VpcConnectivityClientAuthentication = VpcConnectivityClientAuthentication;
Cluster.VpcConnectivityIam = VpcConnectivityIam;
Cluster.VpcConnectivitySasl = VpcConnectivitySasl;
Cluster.VpcConnectivityScram = VpcConnectivityScram;
Cluster.VpcConnectivityTls = VpcConnectivityTls;
