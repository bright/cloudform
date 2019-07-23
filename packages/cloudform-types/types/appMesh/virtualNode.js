"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Logging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Logging = Logging;
class ServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceDiscovery = ServiceDiscovery;
class FileAccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileAccessLog = FileAccessLog;
class AwsCloudMapInstanceAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
class Backend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Backend = Backend;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
class VirtualServiceBackend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualServiceBackend = VirtualServiceBackend;
class HealthCheck {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheck = HealthCheck;
class AwsCloudMapServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery;
class AccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessLog = AccessLog;
class VirtualNodeSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeSpec = VirtualNodeSpec;
class Listener {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Listener = Listener;
class DnsServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DnsServiceDiscovery = DnsServiceDiscovery;
class VirtualNode extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::VirtualNode', properties);
    }
}
VirtualNode.Logging = Logging;
VirtualNode.ServiceDiscovery = ServiceDiscovery;
VirtualNode.FileAccessLog = FileAccessLog;
VirtualNode.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
VirtualNode.Backend = Backend;
VirtualNode.PortMapping = PortMapping;
VirtualNode.VirtualServiceBackend = VirtualServiceBackend;
VirtualNode.HealthCheck = HealthCheck;
VirtualNode.AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery;
VirtualNode.AccessLog = AccessLog;
VirtualNode.VirtualNodeSpec = VirtualNodeSpec;
VirtualNode.Listener = Listener;
VirtualNode.DnsServiceDiscovery = DnsServiceDiscovery;
exports.default = VirtualNode;
