import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GrpcTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: GrpcTimeout);
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
export declare class ClientPolicyTls {
    Validation: TlsValidationContext;
    Enforce?: Value<boolean>;
    Ports?: List<Value<number>>;
    constructor(properties: ClientPolicyTls);
}
export declare class FileAccessLog {
    Path: Value<string>;
    constructor(properties: FileAccessLog);
}
export declare class TlsValidationContextTrust {
    ACM?: TlsValidationContextAcmTrust;
    File?: TlsValidationContextFileTrust;
    constructor(properties: TlsValidationContextTrust);
}
export declare class AwsCloudMapInstanceAttribute {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: AwsCloudMapInstanceAttribute);
}
export declare class ListenerTlsAcmCertificate {
    CertificateArn: Value<string>;
    constructor(properties: ListenerTlsAcmCertificate);
}
export declare class TcpTimeout {
    Idle?: Duration;
    constructor(properties: TcpTimeout);
}
export declare class ListenerTlsCertificate {
    ACM?: ListenerTlsAcmCertificate;
    File?: ListenerTlsFileCertificate;
    constructor(properties: ListenerTlsCertificate);
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
    Mode: Value<string>;
    Certificate: ListenerTlsCertificate;
    constructor(properties: ListenerTls);
}
export declare class VirtualServiceBackend {
    ClientPolicy?: ClientPolicy;
    VirtualServiceName: Value<string>;
    constructor(properties: VirtualServiceBackend);
}
export declare class BackendDefaults {
    ClientPolicy?: ClientPolicy;
    constructor(properties: BackendDefaults);
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
export declare class TlsValidationContextAcmTrust {
    CertificateAuthorityArns: List<Value<string>>;
    constructor(properties: TlsValidationContextAcmTrust);
}
export declare class ClientPolicy {
    TLS?: ClientPolicyTls;
    constructor(properties: ClientPolicy);
}
export declare class ListenerTlsFileCertificate {
    PrivateKey: Value<string>;
    CertificateChain: Value<string>;
    constructor(properties: ListenerTlsFileCertificate);
}
export declare class TlsValidationContext {
    Trust: TlsValidationContextTrust;
    constructor(properties: TlsValidationContext);
}
export declare class AccessLog {
    File?: FileAccessLog;
    constructor(properties: AccessLog);
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
    Timeout?: ListenerTimeout;
    HealthCheck?: HealthCheck;
    TLS?: ListenerTls;
    PortMapping: PortMapping;
    constructor(properties: Listener);
}
export declare class DnsServiceDiscovery {
    Hostname: Value<string>;
    constructor(properties: DnsServiceDiscovery);
}
export declare class TlsValidationContextFileTrust {
    CertificateChain: Value<string>;
    constructor(properties: TlsValidationContextFileTrust);
}
export interface VirtualNodeProperties {
    MeshName: Value<string>;
    MeshOwner?: Value<string>;
    Spec: VirtualNodeSpec;
    VirtualNodeName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static GrpcTimeout: typeof GrpcTimeout;
    static Logging: typeof Logging;
    static ServiceDiscovery: typeof ServiceDiscovery;
    static Duration: typeof Duration;
    static ClientPolicyTls: typeof ClientPolicyTls;
    static FileAccessLog: typeof FileAccessLog;
    static TlsValidationContextTrust: typeof TlsValidationContextTrust;
    static AwsCloudMapInstanceAttribute: typeof AwsCloudMapInstanceAttribute;
    static ListenerTlsAcmCertificate: typeof ListenerTlsAcmCertificate;
    static TcpTimeout: typeof TcpTimeout;
    static ListenerTlsCertificate: typeof ListenerTlsCertificate;
    static Backend: typeof Backend;
    static ListenerTimeout: typeof ListenerTimeout;
    static PortMapping: typeof PortMapping;
    static ListenerTls: typeof ListenerTls;
    static VirtualServiceBackend: typeof VirtualServiceBackend;
    static BackendDefaults: typeof BackendDefaults;
    static HttpTimeout: typeof HttpTimeout;
    static HealthCheck: typeof HealthCheck;
    static AwsCloudMapServiceDiscovery: typeof AwsCloudMapServiceDiscovery;
    static TlsValidationContextAcmTrust: typeof TlsValidationContextAcmTrust;
    static ClientPolicy: typeof ClientPolicy;
    static ListenerTlsFileCertificate: typeof ListenerTlsFileCertificate;
    static TlsValidationContext: typeof TlsValidationContext;
    static AccessLog: typeof AccessLog;
    static VirtualNodeSpec: typeof VirtualNodeSpec;
    static Listener: typeof Listener;
    static DnsServiceDiscovery: typeof DnsServiceDiscovery;
    static TlsValidationContextFileTrust: typeof TlsValidationContextFileTrust;
    constructor(properties: VirtualNodeProperties);
}
