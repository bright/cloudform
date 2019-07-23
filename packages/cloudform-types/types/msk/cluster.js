"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EncryptionInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInfo = EncryptionInfo;
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
class StorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StorageInfo = StorageInfo;
class EncryptionAtRest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionAtRest = EncryptionAtRest;
class EBSStorageInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSStorageInfo = EBSStorageInfo;
class EncryptionInTransit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionInTransit = EncryptionInTransit;
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
class Cluster extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MSK::Cluster', properties);
    }
}
Cluster.EncryptionInfo = EncryptionInfo;
Cluster.ConfigurationInfo = ConfigurationInfo;
Cluster.BrokerNodeGroupInfo = BrokerNodeGroupInfo;
Cluster.StorageInfo = StorageInfo;
Cluster.EncryptionAtRest = EncryptionAtRest;
Cluster.EBSStorageInfo = EBSStorageInfo;
Cluster.EncryptionInTransit = EncryptionInTransit;
Cluster.ClientAuthentication = ClientAuthentication;
Cluster.Tls = Tls;
exports.default = Cluster;
