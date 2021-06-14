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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class BlockDeviceMapping {
    DeviceName?: Value<string>
    NoDevice?: Value<string>
    VirtualName?: Value<string>

    constructor(properties: BlockDeviceMapping) {
        Object.assign(this, properties)
    }
}

export class TimeBasedAutoScaling {


    constructor(properties: TimeBasedAutoScaling) {
        Object.assign(this, properties)
    }
}

export class EbsBlockDevice {
    DeleteOnTermination?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: EbsBlockDevice) {
        Object.assign(this, properties)
    }
}

export interface InstanceProperties {
    AgentVersion?: Value<string>
    AmiId?: Value<string>
    Architecture?: Value<string>
    AutoScalingType?: Value<string>
    AvailabilityZone?: Value<string>
    EbsOptimized?: Value<boolean>
    Hostname?: Value<string>
    InstallUpdatesOnBoot?: Value<boolean>
    InstanceType: Value<string>
    Os?: Value<string>
    RootDeviceType?: Value<string>
    SshKeyName?: Value<string>
    StackId: Value<string>
    SubnetId?: Value<string>
    Tenancy?: Value<string>
    VirtualizationType?: Value<string>
}

export default class Instance extends ResourceBase<InstanceProperties> {
    static BlockDeviceMapping = BlockDeviceMapping
    static TimeBasedAutoScaling = TimeBasedAutoScaling
    static EbsBlockDevice = EbsBlockDevice

    constructor(properties: InstanceProperties) {
        super('AWS::OpsWorks::Instance', properties)
    }
}
