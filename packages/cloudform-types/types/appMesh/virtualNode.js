"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class GrpcTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcTimeout = GrpcTimeout;
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
class Duration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Duration = Duration;
class ClientPolicyTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientPolicyTls = ClientPolicyTls;
class FileAccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileAccessLog = FileAccessLog;
class TlsValidationContextTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextTrust = TlsValidationContextTrust;
class AwsCloudMapInstanceAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
class ListenerTlsAcmCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsAcmCertificate = ListenerTlsAcmCertificate;
class TcpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpTimeout = TcpTimeout;
class ListenerTlsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsCertificate = ListenerTlsCertificate;
class Backend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Backend = Backend;
class ListenerTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTimeout = ListenerTimeout;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
class ListenerTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTls = ListenerTls;
class VirtualServiceBackend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualServiceBackend = VirtualServiceBackend;
class BackendDefaults {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BackendDefaults = BackendDefaults;
class HttpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpTimeout = HttpTimeout;
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
class TlsValidationContextAcmTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextAcmTrust = TlsValidationContextAcmTrust;
class ClientPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientPolicy = ClientPolicy;
class ListenerTlsFileCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsFileCertificate = ListenerTlsFileCertificate;
class TlsValidationContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContext = TlsValidationContext;
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
class TlsValidationContextFileTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextFileTrust = TlsValidationContextFileTrust;
class VirtualNode extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::VirtualNode', properties);
    }
}
exports.default = VirtualNode;
VirtualNode.GrpcTimeout = GrpcTimeout;
VirtualNode.Logging = Logging;
VirtualNode.ServiceDiscovery = ServiceDiscovery;
VirtualNode.Duration = Duration;
VirtualNode.ClientPolicyTls = ClientPolicyTls;
VirtualNode.FileAccessLog = FileAccessLog;
VirtualNode.TlsValidationContextTrust = TlsValidationContextTrust;
VirtualNode.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
VirtualNode.ListenerTlsAcmCertificate = ListenerTlsAcmCertificate;
VirtualNode.TcpTimeout = TcpTimeout;
VirtualNode.ListenerTlsCertificate = ListenerTlsCertificate;
VirtualNode.Backend = Backend;
VirtualNode.ListenerTimeout = ListenerTimeout;
VirtualNode.PortMapping = PortMapping;
VirtualNode.ListenerTls = ListenerTls;
VirtualNode.VirtualServiceBackend = VirtualServiceBackend;
VirtualNode.BackendDefaults = BackendDefaults;
VirtualNode.HttpTimeout = HttpTimeout;
VirtualNode.HealthCheck = HealthCheck;
VirtualNode.AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery;
VirtualNode.TlsValidationContextAcmTrust = TlsValidationContextAcmTrust;
VirtualNode.ClientPolicy = ClientPolicy;
VirtualNode.ListenerTlsFileCertificate = ListenerTlsFileCertificate;
VirtualNode.TlsValidationContext = TlsValidationContext;
VirtualNode.AccessLog = AccessLog;
VirtualNode.VirtualNodeSpec = VirtualNodeSpec;
VirtualNode.Listener = Listener;
VirtualNode.DnsServiceDiscovery = DnsServiceDiscovery;
VirtualNode.TlsValidationContextFileTrust = TlsValidationContextFileTrust;
