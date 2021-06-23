import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VirtualGatewayTlsValidationContextTrust {
    SDS?: VirtualGatewayTlsValidationContextSdsTrust;
    ACM?: VirtualGatewayTlsValidationContextAcmTrust;
    File?: VirtualGatewayTlsValidationContextFileTrust;
    constructor(properties: VirtualGatewayTlsValidationContextTrust);
}
export declare class VirtualGatewayListenerTlsAcmCertificate {
    CertificateArn: Value<string>;
    constructor(properties: VirtualGatewayListenerTlsAcmCertificate);
}
export declare class VirtualGatewayTlsValidationContextFileTrust {
    CertificateChain: Value<string>;
    constructor(properties: VirtualGatewayTlsValidationContextFileTrust);
}
export declare class VirtualGatewayHttp2ConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualGatewayHttp2ConnectionPool);
}
export declare class VirtualGatewaySpec {
    Logging?: VirtualGatewayLogging;
    Listeners: List<VirtualGatewayListener>;
    BackendDefaults?: VirtualGatewayBackendDefaults;
    constructor(properties: VirtualGatewaySpec);
}
export declare class VirtualGatewayTlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: VirtualGatewayTlsValidationContextTrust;
    constructor(properties: VirtualGatewayTlsValidationContext);
}
export declare class VirtualGatewayListenerTlsCertificate {
    SDS?: VirtualGatewayListenerTlsSdsCertificate;
    ACM?: VirtualGatewayListenerTlsAcmCertificate;
    File?: VirtualGatewayListenerTlsFileCertificate;
    constructor(properties: VirtualGatewayListenerTlsCertificate);
}
export declare class VirtualGatewayGrpcConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualGatewayGrpcConnectionPool);
}
export declare class VirtualGatewayConnectionPool {
    HTTP2?: VirtualGatewayHttp2ConnectionPool;
    HTTP?: VirtualGatewayHttpConnectionPool;
    GRPC?: VirtualGatewayGrpcConnectionPool;
    constructor(properties: VirtualGatewayConnectionPool);
}
export declare class SubjectAlternativeNames {
    Match: SubjectAlternativeNameMatchers;
    constructor(properties: SubjectAlternativeNames);
}
export declare class VirtualGatewayClientTlsCertificate {
    SDS?: VirtualGatewayListenerTlsSdsCertificate;
    File?: VirtualGatewayListenerTlsFileCertificate;
    constructor(properties: VirtualGatewayClientTlsCertificate);
}
export declare class VirtualGatewayListenerTlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: VirtualGatewayListenerTlsValidationContextTrust;
    constructor(properties: VirtualGatewayListenerTlsValidationContext);
}
export declare class VirtualGatewayListenerTlsFileCertificate {
    PrivateKey: Value<string>;
    CertificateChain: Value<string>;
    constructor(properties: VirtualGatewayListenerTlsFileCertificate);
}
export declare class VirtualGatewayLogging {
    AccessLog?: VirtualGatewayAccessLog;
    constructor(properties: VirtualGatewayLogging);
}
export declare class VirtualGatewayListenerTls {
    Validation?: VirtualGatewayListenerTlsValidationContext;
    Mode: Value<string>;
    Certificate: VirtualGatewayListenerTlsCertificate;
    constructor(properties: VirtualGatewayListenerTls);
}
export declare class SubjectAlternativeNameMatchers {
    Exact?: List<Value<string>>;
    constructor(properties: SubjectAlternativeNameMatchers);
}
export declare class VirtualGatewayClientPolicy {
    TLS?: VirtualGatewayClientPolicyTls;
    constructor(properties: VirtualGatewayClientPolicy);
}
export declare class VirtualGatewayTlsValidationContextSdsTrust {
    SecretName: Value<string>;
    constructor(properties: VirtualGatewayTlsValidationContextSdsTrust);
}
export declare class VirtualGatewayListener {
    ConnectionPool?: VirtualGatewayConnectionPool;
    HealthCheck?: VirtualGatewayHealthCheckPolicy;
    TLS?: VirtualGatewayListenerTls;
    PortMapping: VirtualGatewayPortMapping;
    constructor(properties: VirtualGatewayListener);
}
export declare class VirtualGatewayPortMapping {
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: VirtualGatewayPortMapping);
}
export declare class VirtualGatewayBackendDefaults {
    ClientPolicy?: VirtualGatewayClientPolicy;
    constructor(properties: VirtualGatewayBackendDefaults);
}
export declare class VirtualGatewayClientPolicyTls {
    Validation: VirtualGatewayTlsValidationContext;
    Enforce?: Value<boolean>;
    Ports?: List<Value<number>>;
    Certificate?: VirtualGatewayClientTlsCertificate;
    constructor(properties: VirtualGatewayClientPolicyTls);
}
export declare class VirtualGatewayAccessLog {
    File?: VirtualGatewayFileAccessLog;
    constructor(properties: VirtualGatewayAccessLog);
}
export declare class VirtualGatewayFileAccessLog {
    Path: Value<string>;
    constructor(properties: VirtualGatewayFileAccessLog);
}
export declare class VirtualGatewayHttpConnectionPool {
    MaxConnections: Value<number>;
    MaxPendingRequests?: Value<number>;
    constructor(properties: VirtualGatewayHttpConnectionPool);
}
export declare class VirtualGatewayHealthCheckPolicy {
    Path?: Value<string>;
    UnhealthyThreshold: Value<number>;
    Port?: Value<number>;
    HealthyThreshold: Value<number>;
    TimeoutMillis: Value<number>;
    Protocol: Value<string>;
    IntervalMillis: Value<number>;
    constructor(properties: VirtualGatewayHealthCheckPolicy);
}
export declare class VirtualGatewayTlsValidationContextAcmTrust {
    CertificateAuthorityArns: List<Value<string>>;
    constructor(properties: VirtualGatewayTlsValidationContextAcmTrust);
}
export declare class VirtualGatewayListenerTlsValidationContextTrust {
    SDS?: VirtualGatewayTlsValidationContextSdsTrust;
    File?: VirtualGatewayTlsValidationContextFileTrust;
    constructor(properties: VirtualGatewayListenerTlsValidationContextTrust);
}
export declare class VirtualGatewayListenerTlsSdsCertificate {
    SecretName: Value<string>;
    constructor(properties: VirtualGatewayListenerTlsSdsCertificate);
}
export interface VirtualGatewayProperties {
    VirtualGatewayName?: Value<string>;
    MeshName: Value<string>;
    MeshOwner?: Value<string>;
    Spec: VirtualGatewaySpec;
    Tags?: List<ResourceTag>;
}
export default class VirtualGateway extends ResourceBase<VirtualGatewayProperties> {
    static VirtualGatewayTlsValidationContextTrust: typeof VirtualGatewayTlsValidationContextTrust;
    static VirtualGatewayListenerTlsAcmCertificate: typeof VirtualGatewayListenerTlsAcmCertificate;
    static VirtualGatewayTlsValidationContextFileTrust: typeof VirtualGatewayTlsValidationContextFileTrust;
    static VirtualGatewayHttp2ConnectionPool: typeof VirtualGatewayHttp2ConnectionPool;
    static VirtualGatewaySpec: typeof VirtualGatewaySpec;
    static VirtualGatewayTlsValidationContext: typeof VirtualGatewayTlsValidationContext;
    static VirtualGatewayListenerTlsCertificate: typeof VirtualGatewayListenerTlsCertificate;
    static VirtualGatewayGrpcConnectionPool: typeof VirtualGatewayGrpcConnectionPool;
    static VirtualGatewayConnectionPool: typeof VirtualGatewayConnectionPool;
    static SubjectAlternativeNames: typeof SubjectAlternativeNames;
    static VirtualGatewayClientTlsCertificate: typeof VirtualGatewayClientTlsCertificate;
    static VirtualGatewayListenerTlsValidationContext: typeof VirtualGatewayListenerTlsValidationContext;
    static VirtualGatewayListenerTlsFileCertificate: typeof VirtualGatewayListenerTlsFileCertificate;
    static VirtualGatewayLogging: typeof VirtualGatewayLogging;
    static VirtualGatewayListenerTls: typeof VirtualGatewayListenerTls;
    static SubjectAlternativeNameMatchers: typeof SubjectAlternativeNameMatchers;
    static VirtualGatewayClientPolicy: typeof VirtualGatewayClientPolicy;
    static VirtualGatewayTlsValidationContextSdsTrust: typeof VirtualGatewayTlsValidationContextSdsTrust;
    static VirtualGatewayListener: typeof VirtualGatewayListener;
    static VirtualGatewayPortMapping: typeof VirtualGatewayPortMapping;
    static VirtualGatewayBackendDefaults: typeof VirtualGatewayBackendDefaults;
    static VirtualGatewayClientPolicyTls: typeof VirtualGatewayClientPolicyTls;
    static VirtualGatewayAccessLog: typeof VirtualGatewayAccessLog;
    static VirtualGatewayFileAccessLog: typeof VirtualGatewayFileAccessLog;
    static VirtualGatewayHttpConnectionPool: typeof VirtualGatewayHttpConnectionPool;
    static VirtualGatewayHealthCheckPolicy: typeof VirtualGatewayHealthCheckPolicy;
    static VirtualGatewayTlsValidationContextAcmTrust: typeof VirtualGatewayTlsValidationContextAcmTrust;
    static VirtualGatewayListenerTlsValidationContextTrust: typeof VirtualGatewayListenerTlsValidationContextTrust;
    static VirtualGatewayListenerTlsSdsCertificate: typeof VirtualGatewayListenerTlsSdsCertificate;
    constructor(properties: VirtualGatewayProperties);
}
