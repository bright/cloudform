"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
exports.WorkerLogDelivery = exports.WorkerConfiguration = exports.Vpc = exports.ScaleOutPolicy = exports.ScaleInPolicy = exports.S3LogDelivery = exports.ProvisionedCapacity = exports.Plugin = exports.LogDelivery = exports.KafkaClusterEncryptionInTransit = exports.KafkaClusterClientAuthentication = exports.KafkaCluster = exports.FirehoseLogDelivery = exports.CustomPlugin = exports.CloudWatchLogsLogDelivery = exports.Capacity = exports.AutoScaling = exports.ApacheKafkaCluster = void 0;
const resource_1 = require("../resource");
class ApacheKafkaCluster {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ApacheKafkaCluster = ApacheKafkaCluster;
class AutoScaling {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoScaling = AutoScaling;
class Capacity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Capacity = Capacity;
class CloudWatchLogsLogDelivery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogsLogDelivery = CloudWatchLogsLogDelivery;
class CustomPlugin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomPlugin = CustomPlugin;
class FirehoseLogDelivery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirehoseLogDelivery = FirehoseLogDelivery;
class KafkaCluster {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaCluster = KafkaCluster;
class KafkaClusterClientAuthentication {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaClusterClientAuthentication = KafkaClusterClientAuthentication;
class KafkaClusterEncryptionInTransit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaClusterEncryptionInTransit = KafkaClusterEncryptionInTransit;
class LogDelivery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogDelivery = LogDelivery;
class Plugin {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Plugin = Plugin;
class ProvisionedCapacity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProvisionedCapacity = ProvisionedCapacity;
class S3LogDelivery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3LogDelivery = S3LogDelivery;
class ScaleInPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScaleInPolicy = ScaleInPolicy;
class ScaleOutPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ScaleOutPolicy = ScaleOutPolicy;
class Vpc {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Vpc = Vpc;
class WorkerConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkerConfiguration = WorkerConfiguration;
class WorkerLogDelivery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkerLogDelivery = WorkerLogDelivery;
class Connector extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::KafkaConnect::Connector', properties);
    }
}
exports.default = Connector;
Connector.ApacheKafkaCluster = ApacheKafkaCluster;
Connector.AutoScaling = AutoScaling;
Connector.Capacity = Capacity;
Connector.CloudWatchLogsLogDelivery = CloudWatchLogsLogDelivery;
Connector.CustomPlugin = CustomPlugin;
Connector.FirehoseLogDelivery = FirehoseLogDelivery;
Connector.KafkaCluster = KafkaCluster;
Connector.KafkaClusterClientAuthentication = KafkaClusterClientAuthentication;
Connector.KafkaClusterEncryptionInTransit = KafkaClusterEncryptionInTransit;
Connector.LogDelivery = LogDelivery;
Connector.Plugin = Plugin;
Connector.ProvisionedCapacity = ProvisionedCapacity;
Connector.S3LogDelivery = S3LogDelivery;
Connector.ScaleInPolicy = ScaleInPolicy;
Connector.ScaleOutPolicy = ScaleOutPolicy;
Connector.Vpc = Vpc;
Connector.WorkerConfiguration = WorkerConfiguration;
Connector.WorkerLogDelivery = WorkerLogDelivery;
