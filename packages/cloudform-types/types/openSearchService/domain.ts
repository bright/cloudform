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

export class AdvancedSecurityOptionsInput {
    AnonymousAuthEnabled?: Value<boolean>
    InternalUserDatabaseEnabled?: Value<boolean>
    SAMLOptions?: SAMLOptions
    Enabled?: Value<boolean>
    AnonymousAuthDisableDate?: Value<string>
    MasterUserOptions?: MasterUserOptions

    constructor(properties: AdvancedSecurityOptionsInput) {
        Object.assign(this, properties)
    }
}

export class ClusterConfig {
    InstanceCount?: Value<number>
    MultiAZWithStandbyEnabled?: Value<boolean>
    WarmEnabled?: Value<boolean>
    WarmCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    ZoneAwarenessConfig?: ZoneAwarenessConfig
    DedicatedMasterCount?: Value<number>
    InstanceType?: Value<string>
    WarmType?: Value<string>
    ZoneAwarenessEnabled?: Value<boolean>
    DedicatedMasterType?: Value<string>

    constructor(properties: ClusterConfig) {
        Object.assign(this, properties)
    }
}

export class CognitoOptions {
    UserPoolId?: Value<string>
    Enabled?: Value<boolean>
    IdentityPoolId?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: CognitoOptions) {
        Object.assign(this, properties)
    }
}

export class DomainEndpointOptions {
    CustomEndpointEnabled?: Value<boolean>
    EnforceHTTPS?: Value<boolean>
    CustomEndpointCertificateArn?: Value<string>
    CustomEndpoint?: Value<string>
    TLSSecurityPolicy?: Value<string>

    constructor(properties: DomainEndpointOptions) {
        Object.assign(this, properties)
    }
}

export class EBSOptions {
    EBSEnabled?: Value<boolean>
    VolumeType?: Value<string>
    Throughput?: Value<number>
    Iops?: Value<number>
    VolumeSize?: Value<number>

    constructor(properties: EBSOptions) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRestOptions {
    KmsKeyId?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: EncryptionAtRestOptions) {
        Object.assign(this, properties)
    }
}

export class Idp {
    EntityId!: Value<string>
    MetadataContent!: Value<string>

    constructor(properties: Idp) {
        Object.assign(this, properties)
    }
}

export class LogPublishingOption {
    CloudWatchLogsLogGroupArn?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: LogPublishingOption) {
        Object.assign(this, properties)
    }
}

export class MasterUserOptions {
    MasterUserPassword?: Value<string>
    MasterUserARN?: Value<string>
    MasterUserName?: Value<string>

    constructor(properties: MasterUserOptions) {
        Object.assign(this, properties)
    }
}

export class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>

    constructor(properties: NodeToNodeEncryptionOptions) {
        Object.assign(this, properties)
    }
}

export class OffPeakWindow {
    WindowStartTime?: WindowStartTime

    constructor(properties: OffPeakWindow) {
        Object.assign(this, properties)
    }
}

export class OffPeakWindowOptions {
    OffPeakWindow?: OffPeakWindow
    Enabled?: Value<boolean>

    constructor(properties: OffPeakWindowOptions) {
        Object.assign(this, properties)
    }
}

export class SAMLOptions {
    MasterBackendRole?: Value<string>
    SubjectKey?: Value<string>
    Idp?: Idp
    SessionTimeoutMinutes?: Value<number>
    RolesKey?: Value<string>
    Enabled?: Value<boolean>
    MasterUserName?: Value<string>

    constructor(properties: SAMLOptions) {
        Object.assign(this, properties)
    }
}

export class ServiceSoftwareOptions {
    NewVersion?: Value<string>
    UpdateStatus?: Value<string>
    Description?: Value<string>
    Cancellable?: Value<boolean>
    CurrentVersion?: Value<string>
    AutomatedUpdateDate?: Value<string>
    UpdateAvailable?: Value<boolean>
    OptionalDeployment?: Value<boolean>

    constructor(properties: ServiceSoftwareOptions) {
        Object.assign(this, properties)
    }
}

export class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>

    constructor(properties: SnapshotOptions) {
        Object.assign(this, properties)
    }
}

export class SoftwareUpdateOptions {
    AutoSoftwareUpdateEnabled?: Value<boolean>

    constructor(properties: SoftwareUpdateOptions) {
        Object.assign(this, properties)
    }
}

export class VPCOptions {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VPCOptions) {
        Object.assign(this, properties)
    }
}

export class WindowStartTime {
    Hours!: Value<number>
    Minutes!: Value<number>

    constructor(properties: WindowStartTime) {
        Object.assign(this, properties)
    }
}

export class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>

    constructor(properties: ZoneAwarenessConfig) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    EngineVersion?: Value<string>
    SoftwareUpdateOptions?: SoftwareUpdateOptions
    DomainName?: Value<string>
    LogPublishingOptions?: {[key: string]: LogPublishingOption}
    SnapshotOptions?: SnapshotOptions
    VPCOptions?: VPCOptions
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions
    AccessPolicies?: {[key: string]: any}
    DomainEndpointOptions?: DomainEndpointOptions
    CognitoOptions?: CognitoOptions
    AdvancedOptions?: {[key: string]: Value<string>}
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput
    EBSOptions?: EBSOptions
    EncryptionAtRestOptions?: EncryptionAtRestOptions
    OffPeakWindowOptions?: OffPeakWindowOptions
    Tags?: List<ResourceTag>
    ClusterConfig?: ClusterConfig
}

export default class Domain extends ResourceBase<DomainProperties> {
    static AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput
    static ClusterConfig = ClusterConfig
    static CognitoOptions = CognitoOptions
    static DomainEndpointOptions = DomainEndpointOptions
    static EBSOptions = EBSOptions
    static EncryptionAtRestOptions = EncryptionAtRestOptions
    static Idp = Idp
    static LogPublishingOption = LogPublishingOption
    static MasterUserOptions = MasterUserOptions
    static NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions
    static OffPeakWindow = OffPeakWindow
    static OffPeakWindowOptions = OffPeakWindowOptions
    static SAMLOptions = SAMLOptions
    static ServiceSoftwareOptions = ServiceSoftwareOptions
    static SnapshotOptions = SnapshotOptions
    static SoftwareUpdateOptions = SoftwareUpdateOptions
    static VPCOptions = VPCOptions
    static WindowStartTime = WindowStartTime
    static ZoneAwarenessConfig = ZoneAwarenessConfig

    constructor(properties?: DomainProperties) {
        super('AWS::OpenSearchService::Domain', properties || {})
    }
}
