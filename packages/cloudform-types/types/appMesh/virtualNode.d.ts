import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TlsValidationContextSdsTrust {
    SecretName: Value<string>;
    constructor(properties: TlsValidationContextSdsTrust);
}
export declare class ClientPolicyTls {
    Validation: TlsValidationContext;
    Enforce?: Value<boolean>;
    Ports?: List<Value<number>>;
    Certificate?: ClientTlsCertificate;
    constructor(properties: ClientPolicyTls);
}
export declare class FileAccessLog {
    Path: Value<string>;
    constructor(properties: FileAccessLog);
}
export declare class AwsCloudMapInstanceAttribute {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: AwsCloudMapInstanceAttribute);
}
export declare class ListenerTlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: ListenerTlsValidationContextTrust;
    constructor(properties: ListenerTlsValidationContext);
}
export declare class TcpTimeout {
    Idle?: Duration;
    constructor(properties: TcpTimeout);
}
export declare class Backend {
    VirtualService?: VirtualServiceBackend;
    constructor(properties: Backend);
}
export declare class ListenerTimeout {
    TCP?: TcpTimeout;
    HTTP2?: HttpTimeout;
    HTTP?: HttpTimeout;
    GRPC?: GrpcTimeout;
    constructor(properties: ListenerTimeout);
}
export declare class PortMapping {
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: PortMapping);
}
export declare class ListenerTls {
    Validation?: ListenerTlsValidationContext;
    Mode: Value<string>;
    Certificate: ListenerTlsCertificate;
    constructor(properties: ListenerTls);
}
export declare class ListenerTlsSdsCertificate {
    SecretName: Value<string>;
    constructor(properties: ListenerTlsSdsCertificate);
}
export declare class BackendDefaults {
    ClientPolicy?: ClientPolicy;
    constructor(properties: BackendDefaults);
}
export declare class VirtualNodeTcpConnectionPool {
    MaxConnections: Value<number>;
    constructor(properties: VirtualNodeTcpConnectionPool);
}
export declare class HttpTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: HttpTimeout);
}
export declare class HealthCheck {
    Path?: Value<string>;
    UnhealthyThreshold: Value<number>;
    Port?: Value<number>;
    HealthyThreshold: Value<number>;
    TimeoutMillis: Value<number>;
    Protocol: Value<string>;
    IntervalMillis: Value<number>;
    constructor(properties: HealthCheck);
}
export declare class AwsCloudMapServiceDiscovery {
    NamespaceName: Value<string>;
    ServiceName: Value<string>;
    Attributes?: List<AwsCloudMapInstanceAttribute>;
    constructor(properties: AwsCloudMapServiceDiscovery);
}
export declare class VirtualNodeHttpConnectionPool {
    MaxConnections: Value<number>;
    MaxPendingRequests?: Value<number>;
    constructor(properties: VirtualNodeHttpConnectionPool);
}
export declare class ListenerTlsFileCertificate {
    PrivateKey: Value<string>;
    CertificateChain: Value<string>;
    constructor(properties: ListenerTlsFileCertificate);
}
export declare class TlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: TlsValidationContextTrust;
    constructor(properties: TlsValidationContext);
}
export declare class VirtualNodeSpec {
    Logging?: Logging;
    Backends?: List<Backend>;
    Listeners?: List<Listener>;
    BackendDefaults?: BackendDefaults;
    ServiceDiscovery?: ServiceDiscovery;
    constructor(properties: VirtualNodeSpec);
}
export declare class Listener {
    ConnectionPool?: VirtualNodeConnectionPool;
    Timeout?: ListenerTimeout;
    HealthCheck?: HealthCheck;
    TLS?: ListenerTls;
    PortMapping: PortMapping;
    OutlierDetection?: OutlierDetection;
    constructor(properties: Listener);
}
export declare class DnsServiceDiscovery {
    Hostname: Value<string>;
    ResponseType?: Value<string>;
    constructor(properties: DnsServiceDiscovery);
}
export declare class TlsValidationContextFileTrust {
    CertificateChain: Value<string>;
    constructor(properties: TlsValidationContextFileTrust);
}
export declare class GrpcTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: GrpcTimeout);
}
export declare class VirtualNodeConnectionPool {
    TCP?: VirtualNodeTcpConnectionPool;
    HTTP2?: VirtualNodeHttp2ConnectionPool;
    HTTP?: VirtualNodeHttpConnectionPool;
    GRPC?: VirtualNodeGrpcConnectionPool;
    constructor(properties: VirtualNodeConnectionPool);
}
export declare class Logging {
    AccessLog?: AccessLog;
    constructor(properties: Logging);
}
export declare class ServiceDiscovery {
    DNS?: DnsServiceDiscovery;
    AWSCloudMap?: AwsCloudMapServiceDiscovery;
    constructor(properties: ServiceDiscovery);
}
export declare class Duration {
    Value: Value<number>;
    Unit: Value<string>;
    constructor(properties: Duration);
}
export declare class TlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust;
    ACM?: TlsValidationContextAcmTrust;
    File?: TlsValidationContextFileTrust;
    constructor(properties: TlsValidationContextTrust);
}
export declare class ListenerTlsAcmCertificate {
    CertificateArn: Value<string>;
    constructor(properties: ListenerTlsAcmCertificate);
}
export declare class VirtualNodeHttp2ConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualNodeHttp2ConnectionPool);
}
export declare class ListenerTlsCertificate {
    SDS?: ListenerTlsSdsCertificate;
    ACM?: ListenerTlsAcmCertificate;
    File?: ListenerTlsFileCertificate;
    constructor(properties: ListenerTlsCertificate);
}
export declare class VirtualServiceBackend {
    ClientPolicy?: ClientPolicy;
    VirtualServiceName: Value<string>;
    constructor(properties: VirtualServiceBackend);
}
export declare class OutlierDetection {
    MaxEjectionPercent: Value<number>;
    BaseEjectionDuration: Duration;
    MaxServerErrors: Value<number>;
    Interval: Duration;
    constructor(properties: OutlierDetection);
}
export declare class TlsValidationContextAcmTrust {
    CertificateAuthorityArns: List<Value<string>>;
    constructor(properties: TlsValidationContextAcmTrust);
}
export declare class ClientPolicy {
    TLS?: ClientPolicyTls;
    constructor(properties: ClientPolicy);
}
export declare class ClientTlsCertificate {
    SDS?: ListenerTlsSdsCertificate;
    File?: ListenerTlsFileCertificate;
    constructor(properties: ClientTlsCertificate);
}
export declare class ListenerTlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust;
    File?: TlsValidationContextFileTrust;
    constructor(properties: ListenerTlsValidationContextTrust);
}
export declare class AccessLog {
    File?: FileAccessLog;
    constructor(properties: AccessLog);
}
export declare class SubjectAlternativeNameMatchers {
    Exact?: List<Value<string>>;
    constructor(properties: SubjectAlternativeNameMatchers);
}
export declare class SubjectAlternativeNames {
    Match: SubjectAlternativeNameMatchers;
    constructor(properties: SubjectAlternativeNames);
}
export declare class VirtualNodeGrpcConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualNodeGrpcConnectionPool);
}
export interface VirtualNodeProperties {
    MeshName: Value<string>;
    MeshOwner?: Value<string>;
    Spec: VirtualNodeSpec;
    VirtualNodeName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static TlsValidationContextSdsTrust: typeof TlsValidationContextSdsTrust;
    static ClientPolicyTls: typeof ClientPolicyTls;
    static FileAccessLog: typeof FileAccessLog;
    static AwsCloudMapInstanceAttribute: typeof AwsCloudMapInstanceAttribute;
    static ListenerTlsValidationContext: typeof ListenerTlsValidationContext;
    static TcpTimeout: typeof TcpTimeout;
    static Backend: typeof Backend;
    static ListenerTimeout: typeof ListenerTimeout;
    static PortMapping: typeof PortMapping;
    static ListenerTls: typeof ListenerTls;
    static ListenerTlsSdsCertificate: typeof ListenerTlsSdsCertificate;
    static BackendDefaults: typeof BackendDefaults;
    static VirtualNodeTcpConnectionPool: typeof VirtualNodeTcpConnectionPool;
    static HttpTimeout: typeof HttpTimeout;
    static HealthCheck: typeof HealthCheck;
    static AwsCloudMapServiceDiscovery: typeof AwsCloudMapServiceDiscovery;
    static VirtualNodeHttpConnectionPool: typeof VirtualNodeHttpConnectionPool;
    static ListenerTlsFileCertificate: typeof ListenerTlsFileCertificate;
    static TlsValidationContext: typeof TlsValidationContext;
    static VirtualNodeSpec: typeof VirtualNodeSpec;
    static Listener: typeof Listener;
    static DnsServiceDiscovery: typeof DnsServiceDiscovery;
    static TlsValidationContextFileTrust: typeof TlsValidationContextFileTrust;
    static GrpcTimeout: typeof GrpcTimeout;
    static VirtualNodeConnectionPool: typeof VirtualNodeConnectionPool;
    static Logging: typeof Logging;
    static ServiceDiscovery: typeof ServiceDiscovery;
    static Duration: typeof Duration;
    static TlsValidationContextTrust: typeof TlsValidationContextTrust;
    static ListenerTlsAcmCertificate: typeof ListenerTlsAcmCertificate;
    static VirtualNodeHttp2ConnectionPool: typeof VirtualNodeHttp2ConnectionPool;
    static ListenerTlsCertificate: typeof ListenerTlsCertificate;
    static VirtualServiceBackend: typeof VirtualServiceBackend;
    static OutlierDetection: typeof OutlierDetection;
    static TlsValidationContextAcmTrust: typeof TlsValidationContextAcmTrust;
    static ClientPolicy: typeof ClientPolicy;
    static ClientTlsCertificate: typeof ClientTlsCertificate;
    static ListenerTlsValidationContextTrust: typeof ListenerTlsValidationContextTrust;
    static AccessLog: typeof AccessLog;
    static SubjectAlternativeNameMatchers: typeof SubjectAlternativeNameMatchers;
    static SubjectAlternativeNames: typeof SubjectAlternativeNames;
    static VirtualNodeGrpcConnectionPool: typeof VirtualNodeGrpcConnectionPool;
    constructor(properties: VirtualNodeProperties);
}
