import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessLog {
    File?: FileAccessLog;
    constructor(properties: AccessLog);
}
export declare class AwsCloudMapInstanceAttribute {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: AwsCloudMapInstanceAttribute);
}
export declare class AwsCloudMapServiceDiscovery {
    NamespaceName: Value<string>;
    ServiceName: Value<string>;
    IpPreference?: Value<string>;
    Attributes?: List<AwsCloudMapInstanceAttribute>;
    constructor(properties: AwsCloudMapServiceDiscovery);
}
export declare class Backend {
    VirtualService?: VirtualServiceBackend;
    constructor(properties: Backend);
}
export declare class BackendDefaults {
    ClientPolicy?: ClientPolicy;
    constructor(properties: BackendDefaults);
}
export declare class ClientPolicy {
    TLS?: ClientPolicyTls;
    constructor(properties: ClientPolicy);
}
export declare class ClientPolicyTls {
    Validation: TlsValidationContext;
    Enforce?: Value<boolean>;
    Ports?: List<Value<number>>;
    Certificate?: ClientTlsCertificate;
    constructor(properties: ClientPolicyTls);
}
export declare class ClientTlsCertificate {
    SDS?: ListenerTlsSdsCertificate;
    File?: ListenerTlsFileCertificate;
    constructor(properties: ClientTlsCertificate);
}
export declare class DnsServiceDiscovery {
    IpPreference?: Value<string>;
    Hostname: Value<string>;
    ResponseType?: Value<string>;
    constructor(properties: DnsServiceDiscovery);
}
export declare class Duration {
    Value: Value<number>;
    Unit: Value<string>;
    constructor(properties: Duration);
}
export declare class FileAccessLog {
    Path: Value<string>;
    Format?: LoggingFormat;
    constructor(properties: FileAccessLog);
}
export declare class GrpcTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: GrpcTimeout);
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
export declare class HttpTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: HttpTimeout);
}
export declare class JsonFormatRef {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: JsonFormatRef);
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
export declare class ListenerTimeout {
    TCP?: TcpTimeout;
    HTTP2?: HttpTimeout;
    HTTP?: HttpTimeout;
    GRPC?: GrpcTimeout;
    constructor(properties: ListenerTimeout);
}
export declare class ListenerTls {
    Validation?: ListenerTlsValidationContext;
    Mode: Value<string>;
    Certificate: ListenerTlsCertificate;
    constructor(properties: ListenerTls);
}
export declare class ListenerTlsAcmCertificate {
    CertificateArn: Value<string>;
    constructor(properties: ListenerTlsAcmCertificate);
}
export declare class ListenerTlsCertificate {
    SDS?: ListenerTlsSdsCertificate;
    ACM?: ListenerTlsAcmCertificate;
    File?: ListenerTlsFileCertificate;
    constructor(properties: ListenerTlsCertificate);
}
export declare class ListenerTlsFileCertificate {
    PrivateKey: Value<string>;
    CertificateChain: Value<string>;
    constructor(properties: ListenerTlsFileCertificate);
}
export declare class ListenerTlsSdsCertificate {
    SecretName: Value<string>;
    constructor(properties: ListenerTlsSdsCertificate);
}
export declare class ListenerTlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: ListenerTlsValidationContextTrust;
    constructor(properties: ListenerTlsValidationContext);
}
export declare class ListenerTlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust;
    File?: TlsValidationContextFileTrust;
    constructor(properties: ListenerTlsValidationContextTrust);
}
export declare class Logging {
    AccessLog?: AccessLog;
    constructor(properties: Logging);
}
export declare class LoggingFormat {
    Text?: Value<string>;
    Json?: List<JsonFormatRef>;
    constructor(properties: LoggingFormat);
}
export declare class OutlierDetection {
    MaxEjectionPercent: Value<number>;
    BaseEjectionDuration: Duration;
    MaxServerErrors: Value<number>;
    Interval: Duration;
    constructor(properties: OutlierDetection);
}
export declare class PortMapping {
    Port: Value<number>;
    Protocol: Value<string>;
    constructor(properties: PortMapping);
}
export declare class ServiceDiscovery {
    DNS?: DnsServiceDiscovery;
    AWSCloudMap?: AwsCloudMapServiceDiscovery;
    constructor(properties: ServiceDiscovery);
}
export declare class SubjectAlternativeNameMatchers {
    Exact?: List<Value<string>>;
    constructor(properties: SubjectAlternativeNameMatchers);
}
export declare class SubjectAlternativeNames {
    Match: SubjectAlternativeNameMatchers;
    constructor(properties: SubjectAlternativeNames);
}
export declare class TcpTimeout {
    Idle?: Duration;
    constructor(properties: TcpTimeout);
}
export declare class TlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames;
    Trust: TlsValidationContextTrust;
    constructor(properties: TlsValidationContext);
}
export declare class TlsValidationContextAcmTrust {
    CertificateAuthorityArns: List<Value<string>>;
    constructor(properties: TlsValidationContextAcmTrust);
}
export declare class TlsValidationContextFileTrust {
    CertificateChain: Value<string>;
    constructor(properties: TlsValidationContextFileTrust);
}
export declare class TlsValidationContextSdsTrust {
    SecretName: Value<string>;
    constructor(properties: TlsValidationContextSdsTrust);
}
export declare class TlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust;
    ACM?: TlsValidationContextAcmTrust;
    File?: TlsValidationContextFileTrust;
    constructor(properties: TlsValidationContextTrust);
}
export declare class VirtualNodeConnectionPool {
    TCP?: VirtualNodeTcpConnectionPool;
    HTTP2?: VirtualNodeHttp2ConnectionPool;
    HTTP?: VirtualNodeHttpConnectionPool;
    GRPC?: VirtualNodeGrpcConnectionPool;
    constructor(properties: VirtualNodeConnectionPool);
}
export declare class VirtualNodeGrpcConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualNodeGrpcConnectionPool);
}
export declare class VirtualNodeHttp2ConnectionPool {
    MaxRequests: Value<number>;
    constructor(properties: VirtualNodeHttp2ConnectionPool);
}
export declare class VirtualNodeHttpConnectionPool {
    MaxConnections: Value<number>;
    MaxPendingRequests?: Value<number>;
    constructor(properties: VirtualNodeHttpConnectionPool);
}
export declare class VirtualNodeSpec {
    Logging?: Logging;
    Backends?: List<Backend>;
    Listeners?: List<Listener>;
    BackendDefaults?: BackendDefaults;
    ServiceDiscovery?: ServiceDiscovery;
    constructor(properties: VirtualNodeSpec);
}
export declare class VirtualNodeTcpConnectionPool {
    MaxConnections: Value<number>;
    constructor(properties: VirtualNodeTcpConnectionPool);
}
export declare class VirtualServiceBackend {
    ClientPolicy?: ClientPolicy;
    VirtualServiceName: Value<string>;
    constructor(properties: VirtualServiceBackend);
}
export interface VirtualNodeProperties {
    MeshName: Value<string>;
    MeshOwner?: Value<string>;
    Spec: VirtualNodeSpec;
    VirtualNodeName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static AccessLog: typeof AccessLog;
    static AwsCloudMapInstanceAttribute: typeof AwsCloudMapInstanceAttribute;
    static AwsCloudMapServiceDiscovery: typeof AwsCloudMapServiceDiscovery;
    static Backend: typeof Backend;
    static BackendDefaults: typeof BackendDefaults;
    static ClientPolicy: typeof ClientPolicy;
    static ClientPolicyTls: typeof ClientPolicyTls;
    static ClientTlsCertificate: typeof ClientTlsCertificate;
    static DnsServiceDiscovery: typeof DnsServiceDiscovery;
    static Duration: typeof Duration;
    static FileAccessLog: typeof FileAccessLog;
    static GrpcTimeout: typeof GrpcTimeout;
    static HealthCheck: typeof HealthCheck;
    static HttpTimeout: typeof HttpTimeout;
    static JsonFormatRef: typeof JsonFormatRef;
    static Listener: typeof Listener;
    static ListenerTimeout: typeof ListenerTimeout;
    static ListenerTls: typeof ListenerTls;
    static ListenerTlsAcmCertificate: typeof ListenerTlsAcmCertificate;
    static ListenerTlsCertificate: typeof ListenerTlsCertificate;
    static ListenerTlsFileCertificate: typeof ListenerTlsFileCertificate;
    static ListenerTlsSdsCertificate: typeof ListenerTlsSdsCertificate;
    static ListenerTlsValidationContext: typeof ListenerTlsValidationContext;
    static ListenerTlsValidationContextTrust: typeof ListenerTlsValidationContextTrust;
    static Logging: typeof Logging;
    static LoggingFormat: typeof LoggingFormat;
    static OutlierDetection: typeof OutlierDetection;
    static PortMapping: typeof PortMapping;
    static ServiceDiscovery: typeof ServiceDiscovery;
    static SubjectAlternativeNameMatchers: typeof SubjectAlternativeNameMatchers;
    static SubjectAlternativeNames: typeof SubjectAlternativeNames;
    static TcpTimeout: typeof TcpTimeout;
    static TlsValidationContext: typeof TlsValidationContext;
    static TlsValidationContextAcmTrust: typeof TlsValidationContextAcmTrust;
    static TlsValidationContextFileTrust: typeof TlsValidationContextFileTrust;
    static TlsValidationContextSdsTrust: typeof TlsValidationContextSdsTrust;
    static TlsValidationContextTrust: typeof TlsValidationContextTrust;
    static VirtualNodeConnectionPool: typeof VirtualNodeConnectionPool;
    static VirtualNodeGrpcConnectionPool: typeof VirtualNodeGrpcConnectionPool;
    static VirtualNodeHttp2ConnectionPool: typeof VirtualNodeHttp2ConnectionPool;
    static VirtualNodeHttpConnectionPool: typeof VirtualNodeHttpConnectionPool;
    static VirtualNodeSpec: typeof VirtualNodeSpec;
    static VirtualNodeTcpConnectionPool: typeof VirtualNodeTcpConnectionPool;
    static VirtualServiceBackend: typeof VirtualServiceBackend;
    constructor(properties: VirtualNodeProperties);
}
