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

export class AmiDistributionConfiguration {
    AmiTags?: {[key: string]: Value<string>}
    Description?: Value<string>
    KmsKeyId?: Value<string>
    LaunchPermissionConfiguration?: LaunchPermissionConfiguration
    TargetAccountIds?: List<Value<string>>
    Name?: Value<string>

    constructor(properties: AmiDistributionConfiguration) {
        Object.assign(this, properties)
    }
}

export class ContainerDistributionConfiguration {
    TargetRepository?: TargetContainerRepository
    ContainerTags?: List<Value<string>>
    Description?: Value<string>

    constructor(properties: ContainerDistributionConfiguration) {
        Object.assign(this, properties)
    }
}

export class Distribution {
    AmiDistributionConfiguration?: AmiDistributionConfiguration
    ContainerDistributionConfiguration?: ContainerDistributionConfiguration
    FastLaunchConfigurations?: List<FastLaunchConfiguration>
    LaunchTemplateConfigurations?: List<LaunchTemplateConfiguration>
    LicenseConfigurationArns?: List<Value<string>>
    Region!: Value<string>

    constructor(properties: Distribution) {
        Object.assign(this, properties)
    }
}

export class FastLaunchConfiguration {
    AccountId?: Value<string>
    LaunchTemplate?: FastLaunchLaunchTemplateSpecification
    Enabled?: Value<boolean>
    MaxParallelLaunches?: Value<number>
    SnapshotConfiguration?: FastLaunchSnapshotConfiguration

    constructor(properties: FastLaunchConfiguration) {
        Object.assign(this, properties)
    }
}

export class FastLaunchLaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>
    LaunchTemplateVersion?: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: FastLaunchLaunchTemplateSpecification) {
        Object.assign(this, properties)
    }
}

export class FastLaunchSnapshotConfiguration {
    TargetResourceCount?: Value<number>

    constructor(properties: FastLaunchSnapshotConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchPermissionConfiguration {
    OrganizationArns?: List<Value<string>>
    OrganizationalUnitArns?: List<Value<string>>
    UserIds?: List<Value<string>>
    UserGroups?: List<Value<string>>

    constructor(properties: LaunchPermissionConfiguration) {
        Object.assign(this, properties)
    }
}

export class LaunchTemplateConfiguration {
    SetDefaultVersion?: Value<boolean>
    AccountId?: Value<string>
    LaunchTemplateId?: Value<string>

    constructor(properties: LaunchTemplateConfiguration) {
        Object.assign(this, properties)
    }
}

export class TargetContainerRepository {
    Service?: Value<string>
    RepositoryName?: Value<string>

    constructor(properties: TargetContainerRepository) {
        Object.assign(this, properties)
    }
}

export interface DistributionConfigurationProperties {
    Description?: Value<string>
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
    Distributions: List<Distribution>
}

export default class DistributionConfiguration extends ResourceBase<DistributionConfigurationProperties> {
    static AmiDistributionConfiguration = AmiDistributionConfiguration
    static ContainerDistributionConfiguration = ContainerDistributionConfiguration
    static Distribution = Distribution
    static FastLaunchConfiguration = FastLaunchConfiguration
    static FastLaunchLaunchTemplateSpecification = FastLaunchLaunchTemplateSpecification
    static FastLaunchSnapshotConfiguration = FastLaunchSnapshotConfiguration
    static LaunchPermissionConfiguration = LaunchPermissionConfiguration
    static LaunchTemplateConfiguration = LaunchTemplateConfiguration
    static TargetContainerRepository = TargetContainerRepository

    constructor(properties: DistributionConfigurationProperties) {
        super('AWS::ImageBuilder::DistributionConfiguration', properties)
    }
}
