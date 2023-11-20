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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BlockDevice {
    SnapshotId?: Value<string>
    VolumeType?: Value<string>
    Encrypted?: Value<boolean>
    Throughput?: Value<number>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    DeleteOnTermination?: Value<boolean>

    constructor(properties: BlockDevice) {
        Object.assign(this, properties)
    }
}

export class BlockDeviceMapping {
    Ebs?: BlockDevice
    NoDevice?: Value<boolean>
    VirtualName?: Value<string>
    DeviceName!: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class MetadataOptions {
    HttpPutResponseHopLimit?: Value<number>
    HttpTokens?: Value<string>
    HttpEndpoint?: Value<string>

    constructor(properties: MetadataOptions) {
        Object.assign(this, properties)
    }
}

export interface LaunchConfigurationProperties {
    PlacementTenancy?: Value<string>
    SecurityGroups?: List<Value<string>>
    LaunchConfigurationName?: Value<string>
    MetadataOptions?: MetadataOptions
    InstanceId?: Value<string>
    UserData?: Value<string>
    ClassicLinkVPCSecurityGroups?: List<Value<string>>
    BlockDeviceMappings?: List<BlockDeviceMapping>
    IamInstanceProfile?: Value<string>
    KernelId?: Value<string>
    AssociatePublicIpAddress?: Value<boolean>
    ClassicLinkVPCId?: Value<string>
    EbsOptimized?: Value<boolean>
    KeyName?: Value<string>
    SpotPrice?: Value<string>
    ImageId: Value<string>
    InstanceType: Value<string>
    RamDiskId?: Value<string>
    InstanceMonitoring?: Value<boolean>
}

export default class LaunchConfiguration extends ResourceBase<LaunchConfigurationProperties> {
    static BlockDevice = BlockDevice
    static BlockDeviceMapping = BlockDeviceMapping
    static MetadataOptions = MetadataOptions

    constructor(properties: LaunchConfigurationProperties) {
        super('AWS::AutoScaling::LaunchConfiguration', properties)
    }
}
