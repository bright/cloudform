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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessLog {
    File?: FileAccessLog

    constructor(properties: AccessLog) {
        Object.assign(this, properties)
    }
}

export class AwsCloudMapInstanceAttribute {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: AwsCloudMapInstanceAttribute) {
        Object.assign(this, properties)
    }
}

export class AwsCloudMapServiceDiscovery {
    NamespaceName!: Value<string>
    ServiceName!: Value<string>
    IpPreference?: Value<string>
    Attributes?: List<AwsCloudMapInstanceAttribute>

    constructor(properties: AwsCloudMapServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export class Backend {
    VirtualService?: VirtualServiceBackend

    constructor(properties: Backend) {
        Object.assign(this, properties)
    }
}

export class BackendDefaults {
    ClientPolicy?: ClientPolicy

    constructor(properties: BackendDefaults) {
        Object.assign(this, properties)
    }
}

export class ClientPolicy {
    TLS?: ClientPolicyTls

    constructor(properties: ClientPolicy) {
        Object.assign(this, properties)
    }
}

export class ClientPolicyTls {
    Validation!: TlsValidationContext
    Enforce?: Value<boolean>
    Ports?: List<Value<number>>
    Certificate?: ClientTlsCertificate

    constructor(properties: ClientPolicyTls) {
        Object.assign(this, properties)
    }
}

export class ClientTlsCertificate {
    SDS?: ListenerTlsSdsCertificate
    File?: ListenerTlsFileCertificate

    constructor(properties: ClientTlsCertificate) {
        Object.assign(this, properties)
    }
}

export class DnsServiceDiscovery {
    IpPreference?: Value<string>
    Hostname!: Value<string>
    ResponseType?: Value<string>

    constructor(properties: DnsServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export class Duration {
    Value!: Value<number>
    Unit!: Value<string>

    constructor(properties: Duration) {
        Object.assign(this, properties)
    }
}

export class FileAccessLog {
    Path!: Value<string>
    Format?: LoggingFormat

    constructor(properties: FileAccessLog) {
        Object.assign(this, properties)
    }
}

export class GrpcTimeout {
    PerRequest?: Duration
    Idle?: Duration

    constructor(properties: GrpcTimeout) {
        Object.assign(this, properties)
    }
}

export class HealthCheck {
    Path?: Value<string>
    UnhealthyThreshold!: Value<number>
    Port?: Value<number>
    HealthyThreshold!: Value<number>
    TimeoutMillis!: Value<number>
    Protocol!: Value<string>
    IntervalMillis!: Value<number>

    constructor(properties: HealthCheck) {
        Object.assign(this, properties)
    }
}

export class HttpTimeout {
    PerRequest?: Duration
    Idle?: Duration

    constructor(properties: HttpTimeout) {
        Object.assign(this, properties)
    }
}

export class JsonFormatRef {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: JsonFormatRef) {
        Object.assign(this, properties)
    }
}

export class Listener {
    ConnectionPool?: VirtualNodeConnectionPool
    Timeout?: ListenerTimeout
    HealthCheck?: HealthCheck
    TLS?: ListenerTls
    PortMapping!: PortMapping
    OutlierDetection?: OutlierDetection

    constructor(properties: Listener) {
        Object.assign(this, properties)
    }
}

export class ListenerTimeout {
    TCP?: TcpTimeout
    HTTP2?: HttpTimeout
    HTTP?: HttpTimeout
    GRPC?: GrpcTimeout

    constructor(properties: ListenerTimeout) {
        Object.assign(this, properties)
    }
}

export class ListenerTls {
    Validation?: ListenerTlsValidationContext
    Mode!: Value<string>
    Certificate!: ListenerTlsCertificate

    constructor(properties: ListenerTls) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsAcmCertificate {
    CertificateArn!: Value<string>

    constructor(properties: ListenerTlsAcmCertificate) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsCertificate {
    SDS?: ListenerTlsSdsCertificate
    ACM?: ListenerTlsAcmCertificate
    File?: ListenerTlsFileCertificate

    constructor(properties: ListenerTlsCertificate) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsFileCertificate {
    PrivateKey!: Value<string>
    CertificateChain!: Value<string>

    constructor(properties: ListenerTlsFileCertificate) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsSdsCertificate {
    SecretName!: Value<string>

    constructor(properties: ListenerTlsSdsCertificate) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames
    Trust!: ListenerTlsValidationContextTrust

    constructor(properties: ListenerTlsValidationContext) {
        Object.assign(this, properties)
    }
}

export class ListenerTlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust
    File?: TlsValidationContextFileTrust

    constructor(properties: ListenerTlsValidationContextTrust) {
        Object.assign(this, properties)
    }
}

export class Logging {
    AccessLog?: AccessLog

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class LoggingFormat {
    Text?: Value<string>
    Json?: List<JsonFormatRef>

    constructor(properties: LoggingFormat) {
        Object.assign(this, properties)
    }
}

export class OutlierDetection {
    MaxEjectionPercent!: Value<number>
    BaseEjectionDuration!: Duration
    MaxServerErrors!: Value<number>
    Interval!: Duration

    constructor(properties: OutlierDetection) {
        Object.assign(this, properties)
    }
}

export class PortMapping {
    Port!: Value<number>
    Protocol!: Value<string>

    constructor(properties: PortMapping) {
        Object.assign(this, properties)
    }
}

export class ServiceDiscovery {
    DNS?: DnsServiceDiscovery
    AWSCloudMap?: AwsCloudMapServiceDiscovery

    constructor(properties: ServiceDiscovery) {
        Object.assign(this, properties)
    }
}

export class SubjectAlternativeNameMatchers {
    Exact?: List<Value<string>>

    constructor(properties: SubjectAlternativeNameMatchers) {
        Object.assign(this, properties)
    }
}

export class SubjectAlternativeNames {
    Match!: SubjectAlternativeNameMatchers

    constructor(properties: SubjectAlternativeNames) {
        Object.assign(this, properties)
    }
}

export class TcpTimeout {
    Idle?: Duration

    constructor(properties: TcpTimeout) {
        Object.assign(this, properties)
    }
}

export class TlsValidationContext {
    SubjectAlternativeNames?: SubjectAlternativeNames
    Trust!: TlsValidationContextTrust

    constructor(properties: TlsValidationContext) {
        Object.assign(this, properties)
    }
}

export class TlsValidationContextAcmTrust {
    CertificateAuthorityArns!: List<Value<string>>

    constructor(properties: TlsValidationContextAcmTrust) {
        Object.assign(this, properties)
    }
}

export class TlsValidationContextFileTrust {
    CertificateChain!: Value<string>

    constructor(properties: TlsValidationContextFileTrust) {
        Object.assign(this, properties)
    }
}

export class TlsValidationContextSdsTrust {
    SecretName!: Value<string>

    constructor(properties: TlsValidationContextSdsTrust) {
        Object.assign(this, properties)
    }
}

export class TlsValidationContextTrust {
    SDS?: TlsValidationContextSdsTrust
    ACM?: TlsValidationContextAcmTrust
    File?: TlsValidationContextFileTrust

    constructor(properties: TlsValidationContextTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeConnectionPool {
    TCP?: VirtualNodeTcpConnectionPool
    HTTP2?: VirtualNodeHttp2ConnectionPool
    HTTP?: VirtualNodeHttpConnectionPool
    GRPC?: VirtualNodeGrpcConnectionPool

    constructor(properties: VirtualNodeConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeGrpcConnectionPool {
    MaxRequests!: Value<number>

    constructor(properties: VirtualNodeGrpcConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeHttp2ConnectionPool {
    MaxRequests!: Value<number>

    constructor(properties: VirtualNodeHttp2ConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeHttpConnectionPool {
    MaxConnections!: Value<number>
    MaxPendingRequests?: Value<number>

    constructor(properties: VirtualNodeHttpConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeSpec {
    Logging?: Logging
    Backends?: List<Backend>
    Listeners?: List<Listener>
    BackendDefaults?: BackendDefaults
    ServiceDiscovery?: ServiceDiscovery

    constructor(properties: VirtualNodeSpec) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeTcpConnectionPool {
    MaxConnections!: Value<number>

    constructor(properties: VirtualNodeTcpConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualServiceBackend {
    ClientPolicy?: ClientPolicy
    VirtualServiceName!: Value<string>

    constructor(properties: VirtualServiceBackend) {
        Object.assign(this, properties)
    }
}

export interface VirtualNodeProperties {
    MeshName: Value<string>
    MeshOwner?: Value<string>
    Spec: VirtualNodeSpec
    VirtualNodeName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class VirtualNode extends ResourceBase<VirtualNodeProperties> {
    static AccessLog = AccessLog
    static AwsCloudMapInstanceAttribute = AwsCloudMapInstanceAttribute
    static AwsCloudMapServiceDiscovery = AwsCloudMapServiceDiscovery
    static Backend = Backend
    static BackendDefaults = BackendDefaults
    static ClientPolicy = ClientPolicy
    static ClientPolicyTls = ClientPolicyTls
    static ClientTlsCertificate = ClientTlsCertificate
    static DnsServiceDiscovery = DnsServiceDiscovery
    static Duration = Duration
    static FileAccessLog = FileAccessLog
    static GrpcTimeout = GrpcTimeout
    static HealthCheck = HealthCheck
    static HttpTimeout = HttpTimeout
    static JsonFormatRef = JsonFormatRef
    static Listener = Listener
    static ListenerTimeout = ListenerTimeout
    static ListenerTls = ListenerTls
    static ListenerTlsAcmCertificate = ListenerTlsAcmCertificate
    static ListenerTlsCertificate = ListenerTlsCertificate
    static ListenerTlsFileCertificate = ListenerTlsFileCertificate
    static ListenerTlsSdsCertificate = ListenerTlsSdsCertificate
    static ListenerTlsValidationContext = ListenerTlsValidationContext
    static ListenerTlsValidationContextTrust = ListenerTlsValidationContextTrust
    static Logging = Logging
    static LoggingFormat = LoggingFormat
    static OutlierDetection = OutlierDetection
    static PortMapping = PortMapping
    static ServiceDiscovery = ServiceDiscovery
    static SubjectAlternativeNameMatchers = SubjectAlternativeNameMatchers
    static SubjectAlternativeNames = SubjectAlternativeNames
    static TcpTimeout = TcpTimeout
    static TlsValidationContext = TlsValidationContext
    static TlsValidationContextAcmTrust = TlsValidationContextAcmTrust
    static TlsValidationContextFileTrust = TlsValidationContextFileTrust
    static TlsValidationContextSdsTrust = TlsValidationContextSdsTrust
    static TlsValidationContextTrust = TlsValidationContextTrust
    static VirtualNodeConnectionPool = VirtualNodeConnectionPool
    static VirtualNodeGrpcConnectionPool = VirtualNodeGrpcConnectionPool
    static VirtualNodeHttp2ConnectionPool = VirtualNodeHttp2ConnectionPool
    static VirtualNodeHttpConnectionPool = VirtualNodeHttpConnectionPool
    static VirtualNodeSpec = VirtualNodeSpec
    static VirtualNodeTcpConnectionPool = VirtualNodeTcpConnectionPool
    static VirtualServiceBackend = VirtualServiceBackend

    constructor(properties: VirtualNodeProperties) {
        super('AWS::AppMesh::VirtualNode', properties)
    }
}
