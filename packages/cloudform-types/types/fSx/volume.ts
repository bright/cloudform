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

export class AutocommitPeriod {
    Type!: Value<string>
    Value?: Value<number>

    constructor(properties: AutocommitPeriod) {
        Object.assign(this, properties)
    }
}

export class ClientConfigurations {
    Options!: List<Value<string>>
    Clients!: Value<string>

    constructor(properties: ClientConfigurations) {
        Object.assign(this, properties)
    }
}

export class NfsExports {
    ClientConfigurations!: List<ClientConfigurations>

    constructor(properties: NfsExports) {
        Object.assign(this, properties)
    }
}

export class OntapConfiguration {
    JunctionPath?: Value<string>
    StorageVirtualMachineId!: Value<string>
    SnapshotPolicy?: Value<string>
    TieringPolicy?: TieringPolicy
    StorageEfficiencyEnabled?: Value<string>
    SizeInMegabytes!: Value<string>
    CopyTagsToBackups?: Value<string>
    SecurityStyle?: Value<string>
    SnaplockConfiguration?: SnaplockConfiguration
    OntapVolumeType?: Value<string>

    constructor(properties: OntapConfiguration) {
        Object.assign(this, properties)
    }
}

export class OpenZFSConfiguration {
    ReadOnly?: Value<boolean>
    Options?: List<Value<string>>
    DataCompressionType?: Value<string>
    NfsExports?: List<NfsExports>
    StorageCapacityQuotaGiB?: Value<number>
    CopyTagsToSnapshots?: Value<boolean>
    ParentVolumeId!: Value<string>
    StorageCapacityReservationGiB?: Value<number>
    RecordSizeKiB?: Value<number>
    OriginSnapshot?: OriginSnapshot
    UserAndGroupQuotas?: List<UserAndGroupQuotas>

    constructor(properties: OpenZFSConfiguration) {
        Object.assign(this, properties)
    }
}

export class OriginSnapshot {
    CopyStrategy!: Value<string>
    SnapshotARN!: Value<string>

    constructor(properties: OriginSnapshot) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    Type!: Value<string>
    Value?: Value<number>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class SnaplockConfiguration {
    AuditLogVolume?: Value<string>
    VolumeAppendModeEnabled?: Value<string>
    AutocommitPeriod?: AutocommitPeriod
    RetentionPeriod?: SnaplockRetentionPeriod
    PrivilegedDelete?: Value<string>
    SnaplockType!: Value<string>

    constructor(properties: SnaplockConfiguration) {
        Object.assign(this, properties)
    }
}

export class SnaplockRetentionPeriod {
    DefaultRetention!: RetentionPeriod
    MaximumRetention!: RetentionPeriod
    MinimumRetention!: RetentionPeriod

    constructor(properties: SnaplockRetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class TieringPolicy {
    CoolingPeriod?: Value<number>
    Name?: Value<string>

    constructor(properties: TieringPolicy) {
        Object.assign(this, properties)
    }
}

export class UserAndGroupQuotas {
    Type!: Value<string>
    Id!: Value<number>
    StorageCapacityQuotaGiB!: Value<number>

    constructor(properties: UserAndGroupQuotas) {
        Object.assign(this, properties)
    }
}

export interface VolumeProperties {
    OpenZFSConfiguration?: OpenZFSConfiguration
    VolumeType?: Value<string>
    BackupId?: Value<string>
    OntapConfiguration?: OntapConfiguration
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Volume extends ResourceBase<VolumeProperties> {
    static AutocommitPeriod = AutocommitPeriod
    static ClientConfigurations = ClientConfigurations
    static NfsExports = NfsExports
    static OntapConfiguration = OntapConfiguration
    static OpenZFSConfiguration = OpenZFSConfiguration
    static OriginSnapshot = OriginSnapshot
    static RetentionPeriod = RetentionPeriod
    static SnaplockConfiguration = SnaplockConfiguration
    static SnaplockRetentionPeriod = SnaplockRetentionPeriod
    static TieringPolicy = TieringPolicy
    static UserAndGroupQuotas = UserAndGroupQuotas

    constructor(properties: VolumeProperties) {
        super('AWS::FSx::Volume', properties)
    }
}
