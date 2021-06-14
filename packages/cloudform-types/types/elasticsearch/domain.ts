/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
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

export class DomainEndpointOptions {
    CustomEndpoint?: Value<string>
    CustomEndpointCertificateArn?: Value<string>
    CustomEndpointEnabled?: Value<boolean>
    EnforceHTTPS?: Value<boolean>
    TLSSecurityPolicy?: Value<string>

    constructor(properties: DomainEndpointOptions) {
        Object.assign(this, properties)
    }
}

export class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>

    constructor(properties: NodeToNodeEncryptionOptions) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchClusterConfig {
    DedicatedMasterCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    DedicatedMasterType?: Value<string>
    InstanceCount?: Value<number>
    InstanceType?: Value<string>
    WarmCount?: Value<number>
    WarmEnabled?: Value<boolean>
    WarmType?: Value<string>
    ZoneAwarenessEnabled?: Value<boolean>

    constructor(properties: ElasticsearchClusterConfig) {
        Object.assign(this, properties)
    }
}

export class AdvancedSecurityOptionsInput {
    Enabled?: Value<boolean>
    InternalUserDatabaseEnabled?: Value<boolean>

    constructor(properties: AdvancedSecurityOptionsInput) {
        Object.assign(this, properties)
    }
}

export class ZoneAwarenessConfig {
    AvailabilityZoneCount?: Value<number>

    constructor(properties: ZoneAwarenessConfig) {
        Object.assign(this, properties)
    }
}

export class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>

    constructor(properties: SnapshotOptions) {
        Object.assign(this, properties)
    }
}

export class CognitoOptions {
    Enabled?: Value<boolean>
    IdentityPoolId?: Value<string>
    RoleArn?: Value<string>
    UserPoolId?: Value<string>

    constructor(properties: CognitoOptions) {
        Object.assign(this, properties)
    }
}

export class VPCOptions {


    constructor(properties: VPCOptions) {
        Object.assign(this, properties)
    }
}

export class MasterUserOptions {
    MasterUserARN?: Value<string>
    MasterUserName?: Value<string>
    MasterUserPassword?: Value<string>

    constructor(properties: MasterUserOptions) {
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

export class EBSOptions {
    EBSEnabled?: Value<boolean>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: EBSOptions) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRestOptions {
    Enabled?: Value<boolean>
    KmsKeyId?: Value<string>

    constructor(properties: EncryptionAtRestOptions) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    AccessPolicies?: {[key: string]: any}
    DomainName?: Value<string>
    ElasticsearchVersion?: Value<string>
}

export default class Domain extends ResourceBase<DomainProperties> {
    static DomainEndpointOptions = DomainEndpointOptions
    static NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions
    static ElasticsearchClusterConfig = ElasticsearchClusterConfig
    static AdvancedSecurityOptionsInput = AdvancedSecurityOptionsInput
    static ZoneAwarenessConfig = ZoneAwarenessConfig
    static SnapshotOptions = SnapshotOptions
    static CognitoOptions = CognitoOptions
    static VPCOptions = VPCOptions
    static MasterUserOptions = MasterUserOptions
    static LogPublishingOption = LogPublishingOption
    static EBSOptions = EBSOptions
    static EncryptionAtRestOptions = EncryptionAtRestOptions

    constructor(properties?: DomainProperties) {
        super('AWS::Elasticsearch::Domain', properties || {})
    }
}
