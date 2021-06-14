/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VirtualGatewayTlsValidationContextTrust {


    constructor(properties: VirtualGatewayTlsValidationContextTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsAcmCertificate {
    CertificateArn!: Value<string>

    constructor(properties: VirtualGatewayListenerTlsAcmCertificate) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayTlsValidationContextFileTrust {
    CertificateChain!: Value<string>

    constructor(properties: VirtualGatewayTlsValidationContextFileTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayHttp2ConnectionPool {
    MaxRequests!: Value<number>

    constructor(properties: VirtualGatewayHttp2ConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewaySpec {


    constructor(properties: VirtualGatewaySpec) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayTlsValidationContext {


    constructor(properties: VirtualGatewayTlsValidationContext) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsCertificate {


    constructor(properties: VirtualGatewayListenerTlsCertificate) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayGrpcConnectionPool {
    MaxRequests!: Value<number>

    constructor(properties: VirtualGatewayGrpcConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayConnectionPool {


    constructor(properties: VirtualGatewayConnectionPool) {
        Object.assign(this, properties)
    }
}

export class SubjectAlternativeNames {


    constructor(properties: SubjectAlternativeNames) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayClientTlsCertificate {


    constructor(properties: VirtualGatewayClientTlsCertificate) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsValidationContext {


    constructor(properties: VirtualGatewayListenerTlsValidationContext) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsFileCertificate {
    PrivateKey!: Value<string>
    CertificateChain!: Value<string>

    constructor(properties: VirtualGatewayListenerTlsFileCertificate) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayLogging {


    constructor(properties: VirtualGatewayLogging) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTls {
    Mode!: Value<string>

    constructor(properties: VirtualGatewayListenerTls) {
        Object.assign(this, properties)
    }
}

export class SubjectAlternativeNameMatchers {


    constructor(properties: SubjectAlternativeNameMatchers) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayClientPolicy {


    constructor(properties: VirtualGatewayClientPolicy) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayTlsValidationContextSdsTrust {
    SecretName!: Value<string>

    constructor(properties: VirtualGatewayTlsValidationContextSdsTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListener {


    constructor(properties: VirtualGatewayListener) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayPortMapping {
    Port!: Value<number>
    Protocol!: Value<string>

    constructor(properties: VirtualGatewayPortMapping) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayBackendDefaults {


    constructor(properties: VirtualGatewayBackendDefaults) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayClientPolicyTls {
    Enforce?: Value<boolean>

    constructor(properties: VirtualGatewayClientPolicyTls) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayAccessLog {


    constructor(properties: VirtualGatewayAccessLog) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayFileAccessLog {
    Path!: Value<string>

    constructor(properties: VirtualGatewayFileAccessLog) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayHttpConnectionPool {
    MaxConnections!: Value<number>
    MaxPendingRequests?: Value<number>

    constructor(properties: VirtualGatewayHttpConnectionPool) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayHealthCheckPolicy {
    Path?: Value<string>
    UnhealthyThreshold!: Value<number>
    Port?: Value<number>
    HealthyThreshold!: Value<number>
    TimeoutMillis!: Value<number>
    Protocol!: Value<string>
    IntervalMillis!: Value<number>

    constructor(properties: VirtualGatewayHealthCheckPolicy) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayTlsValidationContextAcmTrust {


    constructor(properties: VirtualGatewayTlsValidationContextAcmTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsValidationContextTrust {


    constructor(properties: VirtualGatewayListenerTlsValidationContextTrust) {
        Object.assign(this, properties)
    }
}

export class VirtualGatewayListenerTlsSdsCertificate {
    SecretName!: Value<string>

    constructor(properties: VirtualGatewayListenerTlsSdsCertificate) {
        Object.assign(this, properties)
    }
}

export interface VirtualGatewayProperties {
    VirtualGatewayName?: Value<string>
    MeshName: Value<string>
    MeshOwner?: Value<string>
}

export default class VirtualGateway extends ResourceBase<VirtualGatewayProperties> {
    static VirtualGatewayTlsValidationContextTrust = VirtualGatewayTlsValidationContextTrust
    static VirtualGatewayListenerTlsAcmCertificate = VirtualGatewayListenerTlsAcmCertificate
    static VirtualGatewayTlsValidationContextFileTrust = VirtualGatewayTlsValidationContextFileTrust
    static VirtualGatewayHttp2ConnectionPool = VirtualGatewayHttp2ConnectionPool
    static VirtualGatewaySpec = VirtualGatewaySpec
    static VirtualGatewayTlsValidationContext = VirtualGatewayTlsValidationContext
    static VirtualGatewayListenerTlsCertificate = VirtualGatewayListenerTlsCertificate
    static VirtualGatewayGrpcConnectionPool = VirtualGatewayGrpcConnectionPool
    static VirtualGatewayConnectionPool = VirtualGatewayConnectionPool
    static SubjectAlternativeNames = SubjectAlternativeNames
    static VirtualGatewayClientTlsCertificate = VirtualGatewayClientTlsCertificate
    static VirtualGatewayListenerTlsValidationContext = VirtualGatewayListenerTlsValidationContext
    static VirtualGatewayListenerTlsFileCertificate = VirtualGatewayListenerTlsFileCertificate
    static VirtualGatewayLogging = VirtualGatewayLogging
    static VirtualGatewayListenerTls = VirtualGatewayListenerTls
    static SubjectAlternativeNameMatchers = SubjectAlternativeNameMatchers
    static VirtualGatewayClientPolicy = VirtualGatewayClientPolicy
    static VirtualGatewayTlsValidationContextSdsTrust = VirtualGatewayTlsValidationContextSdsTrust
    static VirtualGatewayListener = VirtualGatewayListener
    static VirtualGatewayPortMapping = VirtualGatewayPortMapping
    static VirtualGatewayBackendDefaults = VirtualGatewayBackendDefaults
    static VirtualGatewayClientPolicyTls = VirtualGatewayClientPolicyTls
    static VirtualGatewayAccessLog = VirtualGatewayAccessLog
    static VirtualGatewayFileAccessLog = VirtualGatewayFileAccessLog
    static VirtualGatewayHttpConnectionPool = VirtualGatewayHttpConnectionPool
    static VirtualGatewayHealthCheckPolicy = VirtualGatewayHealthCheckPolicy
    static VirtualGatewayTlsValidationContextAcmTrust = VirtualGatewayTlsValidationContextAcmTrust
    static VirtualGatewayListenerTlsValidationContextTrust = VirtualGatewayListenerTlsValidationContextTrust
    static VirtualGatewayListenerTlsSdsCertificate = VirtualGatewayListenerTlsSdsCertificate

    constructor(properties: VirtualGatewayProperties) {
        super('AWS::AppMesh::VirtualGateway', properties)
    }
}
