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
exports.VirtualServiceBackend = exports.VirtualNodeTcpConnectionPool = exports.VirtualNodeSpec = exports.VirtualNodeHttpConnectionPool = exports.VirtualNodeHttp2ConnectionPool = exports.VirtualNodeGrpcConnectionPool = exports.VirtualNodeConnectionPool = exports.TlsValidationContextTrust = exports.TlsValidationContextSdsTrust = exports.TlsValidationContextFileTrust = exports.TlsValidationContextAcmTrust = exports.TlsValidationContext = exports.TcpTimeout = exports.SubjectAlternativeNames = exports.SubjectAlternativeNameMatchers = exports.ServiceDiscovery = exports.PortMapping = exports.OutlierDetection = exports.LoggingFormat = exports.Logging = exports.ListenerTlsValidationContextTrust = exports.ListenerTlsValidationContext = exports.ListenerTlsSdsCertificate = exports.ListenerTlsFileCertificate = exports.ListenerTlsCertificate = exports.ListenerTlsAcmCertificate = exports.ListenerTls = exports.ListenerTimeout = exports.Listener = exports.JsonFormatRef = exports.HttpTimeout = exports.HealthCheck = exports.GrpcTimeout = exports.FileAccessLog = exports.Duration = exports.DnsServiceDiscovery = exports.ClientTlsCertificate = exports.ClientPolicyTls = exports.ClientPolicy = exports.BackendDefaults = exports.Backend = exports.AwsCloudMapServiceDiscovery = exports.AwsCloudMapInstanceAttribute = exports.AccessLog = void 0;
const resource_1 = require("../resource");
class AccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessLog = AccessLog;
class AwsCloudMapInstanceAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
class AwsCloudMapServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery;
class Backend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Backend = Backend;
class BackendDefaults {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BackendDefaults = BackendDefaults;
class ClientPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientPolicy = ClientPolicy;
class ClientPolicyTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientPolicyTls = ClientPolicyTls;
class ClientTlsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientTlsCertificate = ClientTlsCertificate;
class DnsServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DnsServiceDiscovery = DnsServiceDiscovery;
class Duration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Duration = Duration;
class FileAccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FileAccessLog = FileAccessLog;
class GrpcTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcTimeout = GrpcTimeout;
class HealthCheck {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheck = HealthCheck;
class HttpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpTimeout = HttpTimeout;
class JsonFormatRef {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonFormatRef = JsonFormatRef;
class Listener {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Listener = Listener;
class ListenerTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTimeout = ListenerTimeout;
class ListenerTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTls = ListenerTls;
class ListenerTlsAcmCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsAcmCertificate = ListenerTlsAcmCertificate;
class ListenerTlsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsCertificate = ListenerTlsCertificate;
class ListenerTlsFileCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsFileCertificate = ListenerTlsFileCertificate;
class ListenerTlsSdsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsSdsCertificate = ListenerTlsSdsCertificate;
class ListenerTlsValidationContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsValidationContext = ListenerTlsValidationContext;
class ListenerTlsValidationContextTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ListenerTlsValidationContextTrust = ListenerTlsValidationContextTrust;
class Logging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Logging = Logging;
class LoggingFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingFormat = LoggingFormat;
class OutlierDetection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutlierDetection = OutlierDetection;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
class ServiceDiscovery {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServiceDiscovery = ServiceDiscovery;
class SubjectAlternativeNameMatchers {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubjectAlternativeNameMatchers = SubjectAlternativeNameMatchers;
class SubjectAlternativeNames {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SubjectAlternativeNames = SubjectAlternativeNames;
class TcpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpTimeout = TcpTimeout;
class TlsValidationContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContext = TlsValidationContext;
class TlsValidationContextAcmTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextAcmTrust = TlsValidationContextAcmTrust;
class TlsValidationContextFileTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextFileTrust = TlsValidationContextFileTrust;
class TlsValidationContextSdsTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextSdsTrust = TlsValidationContextSdsTrust;
class TlsValidationContextTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TlsValidationContextTrust = TlsValidationContextTrust;
class VirtualNodeConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeConnectionPool = VirtualNodeConnectionPool;
class VirtualNodeGrpcConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeGrpcConnectionPool = VirtualNodeGrpcConnectionPool;
class VirtualNodeHttp2ConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeHttp2ConnectionPool = VirtualNodeHttp2ConnectionPool;
class VirtualNodeHttpConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeHttpConnectionPool = VirtualNodeHttpConnectionPool;
class VirtualNodeSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeSpec = VirtualNodeSpec;
class VirtualNodeTcpConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualNodeTcpConnectionPool = VirtualNodeTcpConnectionPool;
class VirtualServiceBackend {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualServiceBackend = VirtualServiceBackend;
class VirtualNode extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::VirtualNode', properties);
    }
}
exports.default = VirtualNode;
VirtualNode.AccessLog = AccessLog;
VirtualNode.AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute;
VirtualNode.AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery;
VirtualNode.Backend = Backend;
VirtualNode.BackendDefaults = BackendDefaults;
VirtualNode.ClientPolicy = ClientPolicy;
VirtualNode.ClientPolicyTls = ClientPolicyTls;
VirtualNode.ClientTlsCertificate = ClientTlsCertificate;
VirtualNode.DnsServiceDiscovery = DnsServiceDiscovery;
VirtualNode.Duration = Duration;
VirtualNode.FileAccessLog = FileAccessLog;
VirtualNode.GrpcTimeout = GrpcTimeout;
VirtualNode.HealthCheck = HealthCheck;
VirtualNode.HttpTimeout = HttpTimeout;
VirtualNode.JsonFormatRef = JsonFormatRef;
VirtualNode.Listener = Listener;
VirtualNode.ListenerTimeout = ListenerTimeout;
VirtualNode.ListenerTls = ListenerTls;
VirtualNode.ListenerTlsAcmCertificate = ListenerTlsAcmCertificate;
VirtualNode.ListenerTlsCertificate = ListenerTlsCertificate;
VirtualNode.ListenerTlsFileCertificate = ListenerTlsFileCertificate;
VirtualNode.ListenerTlsSdsCertificate = ListenerTlsSdsCertificate;
VirtualNode.ListenerTlsValidationContext = ListenerTlsValidationContext;
VirtualNode.ListenerTlsValidationContextTrust = ListenerTlsValidationContextTrust;
VirtualNode.Logging = Logging;
VirtualNode.LoggingFormat = LoggingFormat;
VirtualNode.OutlierDetection = OutlierDetection;
VirtualNode.PortMapping = PortMapping;
VirtualNode.ServiceDiscovery = ServiceDiscovery;
VirtualNode.SubjectAlternativeNameMatchers = SubjectAlternativeNameMatchers;
VirtualNode.SubjectAlternativeNames = SubjectAlternativeNames;
VirtualNode.TcpTimeout = TcpTimeout;
VirtualNode.TlsValidationContext = TlsValidationContext;
VirtualNode.TlsValidationContextAcmTrust = TlsValidationContextAcmTrust;
VirtualNode.TlsValidationContextFileTrust = TlsValidationContextFileTrust;
VirtualNode.TlsValidationContextSdsTrust = TlsValidationContextSdsTrust;
VirtualNode.TlsValidationContextTrust = TlsValidationContextTrust;
VirtualNode.VirtualNodeConnectionPool = VirtualNodeConnectionPool;
VirtualNode.VirtualNodeGrpcConnectionPool = VirtualNodeGrpcConnectionPool;
VirtualNode.VirtualNodeHttp2ConnectionPool = VirtualNodeHttp2ConnectionPool;
VirtualNode.VirtualNodeHttpConnectionPool = VirtualNodeHttpConnectionPool;
VirtualNode.VirtualNodeSpec = VirtualNodeSpec;
VirtualNode.VirtualNodeTcpConnectionPool = VirtualNodeTcpConnectionPool;
VirtualNode.VirtualServiceBackend = VirtualServiceBackend;
