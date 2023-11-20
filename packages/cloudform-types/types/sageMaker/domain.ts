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

export class CustomImage {
    ImageName!: Value<string>
    AppImageConfigName!: Value<string>
    ImageVersionNumber?: Value<number>

    constructor(properties: CustomImage) {
        Object.assign(this, properties)
    }
}

export class DefaultSpaceSettings {
    SecurityGroups?: List<Value<string>>
    KernelGatewayAppSettings?: KernelGatewayAppSettings
    JupyterServerAppSettings?: JupyterServerAppSettings
    ExecutionRole!: Value<string>

    constructor(properties: DefaultSpaceSettings) {
        Object.assign(this, properties)
    }
}

export class DomainSettings {
    RStudioServerProDomainSettings?: RStudioServerProDomainSettings
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: DomainSettings) {
        Object.assign(this, properties)
    }
}

export class JupyterServerAppSettings {
    DefaultResourceSpec?: ResourceSpec

    constructor(properties: JupyterServerAppSettings) {
        Object.assign(this, properties)
    }
}

export class KernelGatewayAppSettings {
    CustomImages?: List<CustomImage>
    DefaultResourceSpec?: ResourceSpec

    constructor(properties: KernelGatewayAppSettings) {
        Object.assign(this, properties)
    }
}

export class RSessionAppSettings {
    CustomImages?: List<CustomImage>
    DefaultResourceSpec?: ResourceSpec

    constructor(properties: RSessionAppSettings) {
        Object.assign(this, properties)
    }
}

export class RStudioServerProAppSettings {
    AccessStatus?: Value<string>
    UserGroup?: Value<string>

    constructor(properties: RStudioServerProAppSettings) {
        Object.assign(this, properties)
    }
}

export class RStudioServerProDomainSettings {
    DomainExecutionRoleArn!: Value<string>
    RStudioConnectUrl?: Value<string>
    DefaultResourceSpec?: ResourceSpec
    RStudioPackageManagerUrl?: Value<string>

    constructor(properties: RStudioServerProDomainSettings) {
        Object.assign(this, properties)
    }
}

export class ResourceSpec {
    SageMakerImageArn?: Value<string>
    InstanceType?: Value<string>
    LifecycleConfigArn?: Value<string>
    SageMakerImageVersionArn?: Value<string>

    constructor(properties: ResourceSpec) {
        Object.assign(this, properties)
    }
}

export class SharingSettings {
    NotebookOutputOption?: Value<string>
    S3KmsKeyId?: Value<string>
    S3OutputPath?: Value<string>

    constructor(properties: SharingSettings) {
        Object.assign(this, properties)
    }
}

export class UserSettings {
    SecurityGroups?: List<Value<string>>
    KernelGatewayAppSettings?: KernelGatewayAppSettings
    RStudioServerProAppSettings?: RStudioServerProAppSettings
    RSessionAppSettings?: RSessionAppSettings
    JupyterServerAppSettings?: JupyterServerAppSettings
    ExecutionRole!: Value<string>
    SharingSettings?: SharingSettings

    constructor(properties: UserSettings) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    AppNetworkAccessType?: Value<string>
    DefaultSpaceSettings?: DefaultSpaceSettings
    KmsKeyId?: Value<string>
    VpcId: Value<string>
    DomainName: Value<string>
    AppSecurityGroupManagement?: Value<string>
    DefaultUserSettings: UserSettings
    SubnetIds: List<Value<string>>
    AuthMode: Value<string>
    Tags?: List<ResourceTag>
    DomainSettings?: DomainSettings
}

export default class Domain extends ResourceBase<DomainProperties> {
    static CustomImage = CustomImage
    static DefaultSpaceSettings = DefaultSpaceSettings
    static DomainSettings = DomainSettings
    static JupyterServerAppSettings = JupyterServerAppSettings
    static KernelGatewayAppSettings = KernelGatewayAppSettings
    static RSessionAppSettings = RSessionAppSettings
    static RStudioServerProAppSettings = RStudioServerProAppSettings
    static RStudioServerProDomainSettings = RStudioServerProDomainSettings
    static ResourceSpec = ResourceSpec
    static SharingSettings = SharingSettings
    static UserSettings = UserSettings

    constructor(properties: DomainProperties) {
        super('AWS::SageMaker::Domain', properties)
    }
}
