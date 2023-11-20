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
exports.VirtualGatewayTlsValidationContextTrust = exports.VirtualGatewayTlsValidationContextSdsTrust = exports.VirtualGatewayTlsValidationContextFileTrust = exports.VirtualGatewayTlsValidationContextAcmTrust = exports.VirtualGatewayTlsValidationContext = exports.VirtualGatewaySpec = exports.VirtualGatewayPortMapping = exports.VirtualGatewayLogging = exports.VirtualGatewayListenerTlsValidationContextTrust = exports.VirtualGatewayListenerTlsValidationContext = exports.VirtualGatewayListenerTlsSdsCertificate = exports.VirtualGatewayListenerTlsFileCertificate = exports.VirtualGatewayListenerTlsCertificate = exports.VirtualGatewayListenerTlsAcmCertificate = exports.VirtualGatewayListenerTls = exports.VirtualGatewayListener = exports.VirtualGatewayHttpConnectionPool = exports.VirtualGatewayHttp2ConnectionPool = exports.VirtualGatewayHealthCheckPolicy = exports.VirtualGatewayGrpcConnectionPool = exports.VirtualGatewayFileAccessLog = exports.VirtualGatewayConnectionPool = exports.VirtualGatewayClientTlsCertificate = exports.VirtualGatewayClientPolicyTls = exports.VirtualGatewayClientPolicy = exports.VirtualGatewayBackendDefaults = exports.VirtualGatewayAccessLog = exports.SubjectAlternativeNames = exports.SubjectAlternativeNameMatchers = exports.LoggingFormat = exports.JsonFormatRef = void 0;
const resource_1 = require("../resource");
class JsonFormatRef {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JsonFormatRef = JsonFormatRef;
class LoggingFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingFormat = LoggingFormat;
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
class VirtualGatewayAccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayAccessLog = VirtualGatewayAccessLog;
class VirtualGatewayBackendDefaults {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayBackendDefaults = VirtualGatewayBackendDefaults;
class VirtualGatewayClientPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayClientPolicy = VirtualGatewayClientPolicy;
class VirtualGatewayClientPolicyTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayClientPolicyTls = VirtualGatewayClientPolicyTls;
class VirtualGatewayClientTlsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayClientTlsCertificate = VirtualGatewayClientTlsCertificate;
class VirtualGatewayConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayConnectionPool = VirtualGatewayConnectionPool;
class VirtualGatewayFileAccessLog {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayFileAccessLog = VirtualGatewayFileAccessLog;
class VirtualGatewayGrpcConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayGrpcConnectionPool = VirtualGatewayGrpcConnectionPool;
class VirtualGatewayHealthCheckPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayHealthCheckPolicy = VirtualGatewayHealthCheckPolicy;
class VirtualGatewayHttp2ConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayHttp2ConnectionPool = VirtualGatewayHttp2ConnectionPool;
class VirtualGatewayHttpConnectionPool {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayHttpConnectionPool = VirtualGatewayHttpConnectionPool;
class VirtualGatewayListener {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListener = VirtualGatewayListener;
class VirtualGatewayListenerTls {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTls = VirtualGatewayListenerTls;
class VirtualGatewayListenerTlsAcmCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsAcmCertificate = VirtualGatewayListenerTlsAcmCertificate;
class VirtualGatewayListenerTlsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsCertificate = VirtualGatewayListenerTlsCertificate;
class VirtualGatewayListenerTlsFileCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsFileCertificate = VirtualGatewayListenerTlsFileCertificate;
class VirtualGatewayListenerTlsSdsCertificate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsSdsCertificate = VirtualGatewayListenerTlsSdsCertificate;
class VirtualGatewayListenerTlsValidationContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsValidationContext = VirtualGatewayListenerTlsValidationContext;
class VirtualGatewayListenerTlsValidationContextTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayListenerTlsValidationContextTrust = VirtualGatewayListenerTlsValidationContextTrust;
class VirtualGatewayLogging {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayLogging = VirtualGatewayLogging;
class VirtualGatewayPortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayPortMapping = VirtualGatewayPortMapping;
class VirtualGatewaySpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewaySpec = VirtualGatewaySpec;
class VirtualGatewayTlsValidationContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayTlsValidationContext = VirtualGatewayTlsValidationContext;
class VirtualGatewayTlsValidationContextAcmTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayTlsValidationContextAcmTrust = VirtualGatewayTlsValidationContextAcmTrust;
class VirtualGatewayTlsValidationContextFileTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayTlsValidationContextFileTrust = VirtualGatewayTlsValidationContextFileTrust;
class VirtualGatewayTlsValidationContextSdsTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayTlsValidationContextSdsTrust = VirtualGatewayTlsValidationContextSdsTrust;
class VirtualGatewayTlsValidationContextTrust {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VirtualGatewayTlsValidationContextTrust = VirtualGatewayTlsValidationContextTrust;
class VirtualGateway extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::VirtualGateway', properties);
    }
}
exports.default = VirtualGateway;
VirtualGateway.JsonFormatRef = JsonFormatRef;
VirtualGateway.LoggingFormat = LoggingFormat;
VirtualGateway.SubjectAlternativeNameMatchers = SubjectAlternativeNameMatchers;
VirtualGateway.SubjectAlternativeNames = SubjectAlternativeNames;
VirtualGateway.VirtualGatewayAccessLog = VirtualGatewayAccessLog;
VirtualGateway.VirtualGatewayBackendDefaults = VirtualGatewayBackendDefaults;
VirtualGateway.VirtualGatewayClientPolicy = VirtualGatewayClientPolicy;
VirtualGateway.VirtualGatewayClientPolicyTls = VirtualGatewayClientPolicyTls;
VirtualGateway.VirtualGatewayClientTlsCertificate = VirtualGatewayClientTlsCertificate;
VirtualGateway.VirtualGatewayConnectionPool = VirtualGatewayConnectionPool;
VirtualGateway.VirtualGatewayFileAccessLog = VirtualGatewayFileAccessLog;
VirtualGateway.VirtualGatewayGrpcConnectionPool = VirtualGatewayGrpcConnectionPool;
VirtualGateway.VirtualGatewayHealthCheckPolicy = VirtualGatewayHealthCheckPolicy;
VirtualGateway.VirtualGatewayHttp2ConnectionPool = VirtualGatewayHttp2ConnectionPool;
VirtualGateway.VirtualGatewayHttpConnectionPool = VirtualGatewayHttpConnectionPool;
VirtualGateway.VirtualGatewayListener = VirtualGatewayListener;
VirtualGateway.VirtualGatewayListenerTls = VirtualGatewayListenerTls;
VirtualGateway.VirtualGatewayListenerTlsAcmCertificate = VirtualGatewayListenerTlsAcmCertificate;
VirtualGateway.VirtualGatewayListenerTlsCertificate = VirtualGatewayListenerTlsCertificate;
VirtualGateway.VirtualGatewayListenerTlsFileCertificate = VirtualGatewayListenerTlsFileCertificate;
VirtualGateway.VirtualGatewayListenerTlsSdsCertificate = VirtualGatewayListenerTlsSdsCertificate;
VirtualGateway.VirtualGatewayListenerTlsValidationContext = VirtualGatewayListenerTlsValidationContext;
VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust = VirtualGatewayListenerTlsValidationContextTrust;
VirtualGateway.VirtualGatewayLogging = VirtualGatewayLogging;
VirtualGateway.VirtualGatewayPortMapping = VirtualGatewayPortMapping;
VirtualGateway.VirtualGatewaySpec = VirtualGatewaySpec;
VirtualGateway.VirtualGatewayTlsValidationContext = VirtualGatewayTlsValidationContext;
VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust = VirtualGatewayTlsValidationContextAcmTrust;
VirtualGateway.VirtualGatewayTlsValidationContextFileTrust = VirtualGatewayTlsValidationContextFileTrust;
VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust = VirtualGatewayTlsValidationContextSdsTrust;
VirtualGateway.VirtualGatewayTlsValidationContextTrust = VirtualGatewayTlsValidationContextTrust;
