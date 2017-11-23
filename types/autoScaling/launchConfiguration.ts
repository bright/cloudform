/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>
    Ebs?: BlockDevice
    NoDevice?: Value<boolean>
    VirtualName?: Value<string>
}

export class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::BlockDeviceMapping', properties, dependsOn)
    }
}

export interface BlockDeviceProperties {
    DeleteOnTermination?: Value<boolean>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>
}

export class BlockDevice extends ResourceBase {
    constructor(properties: BlockDeviceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::BlockDevice', properties, dependsOn)
    }
}

export interface LaunchConfigurationProperties {
    AssociatePublicIpAddress?: Value<boolean>
    BlockDeviceMappings?: BlockDeviceMapping[]
    ClassicLinkVPCId?: Value<string>
    ClassicLinkVPCSecurityGroups?: Value<string>[]
    EbsOptimized?: Value<boolean>
    IamInstanceProfile?: Value<string>
    ImageId: Value<string>
    InstanceId?: Value<string>
    InstanceMonitoring?: Value<boolean>
    InstanceType: Value<string>
    KernelId?: Value<string>
    KeyName?: Value<string>
    PlacementTenancy?: Value<string>
    RamDiskId?: Value<string>
    SecurityGroups?: Value<string>[]
    SpotPrice?: Value<string>
    UserData?: Value<string>
}

export default class LaunchConfiguration extends ResourceBase {
    constructor(properties: LaunchConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::LaunchConfiguration', properties, dependsOn)
    }
}
