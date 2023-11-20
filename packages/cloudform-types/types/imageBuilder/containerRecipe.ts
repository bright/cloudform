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

export class ComponentConfiguration {
    Parameters?: List<ComponentParameter>
    ComponentArn?: Value<string>

    constructor(properties: ComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComponentParameter {
    Value!: List<Value<string>>
    Name!: Value<string>

    constructor(properties: ComponentParameter) {
        Object.assign(this, properties)
    }
}

export class EbsInstanceBlockDeviceSpecification {
    SnapshotId?: Value<string>
    VolumeType?: Value<string>
    KmsKeyId?: Value<string>
    Encrypted?: Value<boolean>
    Throughput?: Value<number>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: EbsInstanceBlockDeviceSpecification) {
        Object.assign(this, properties)
    }
}

export class InstanceBlockDeviceMapping {
    Ebs?: EbsInstanceBlockDeviceSpecification
    NoDevice?: Value<string>
    VirtualName?: Value<string>
    DeviceName?: Value<string>

    constructor(properties: InstanceBlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class InstanceConfiguration {
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>
    Image?: Value<string>

    constructor(properties: InstanceConfiguration) {
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

export interface ContainerRecipeProperties {
    WorkingDirectory?: Value<string>
    ParentImage: Value<string>
    Description?: Value<string>
    KmsKeyId?: Value<string>
    InstanceConfiguration?: InstanceConfiguration
    ContainerType: Value<string>
    Name: Value<string>
    DockerfileTemplateData?: Value<string>
    Components: List<ComponentConfiguration>
    TargetRepository: TargetContainerRepository
    Version: Value<string>
    PlatformOverride?: Value<string>
    ImageOsVersionOverride?: Value<string>
    Tags?: {[key: string]: Value<string>}
    DockerfileTemplateUri?: Value<string>
}

export default class ContainerRecipe extends ResourceBase<ContainerRecipeProperties> {
    static ComponentConfiguration = ComponentConfiguration
    static ComponentParameter = ComponentParameter
    static EbsInstanceBlockDeviceSpecification = EbsInstanceBlockDeviceSpecification
    static InstanceBlockDeviceMapping = InstanceBlockDeviceMapping
    static InstanceConfiguration = InstanceConfiguration
    static TargetContainerRepository = TargetContainerRepository

    constructor(properties: ContainerRecipeProperties) {
        super('AWS::ImageBuilder::ContainerRecipe', properties)
    }
}
