/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface BlockDeviceMappingProperties {
    DeviceName?: Value<string>
    Ebs?: EbsBlockDevice
    NoDevice?: Value<string>
    VirtualName?: Value<string>
}

export class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::OpsWorks::BlockDeviceMapping', properties, dependsOn)
    }
}

export interface EbsBlockDeviceProperties {
    DeleteOnTermination?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>
}

export class EbsBlockDevice extends ResourceBase {
    constructor(properties: EbsBlockDeviceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::OpsWorks::EbsBlockDevice', properties, dependsOn)
    }
}

export interface TimeBasedAutoScalingProperties {
    Friday?: {[key: string]: Value<string>}
    Monday?: {[key: string]: Value<string>}
    Saturday?: {[key: string]: Value<string>}
    Sunday?: {[key: string]: Value<string>}
    Thursday?: {[key: string]: Value<string>}
    Tuesday?: {[key: string]: Value<string>}
    Wednesday?: {[key: string]: Value<string>}
}

export class TimeBasedAutoScaling extends ResourceBase {
    constructor(properties: TimeBasedAutoScalingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::OpsWorks::TimeBasedAutoScaling', properties, dependsOn)
    }
}

export interface InstanceProperties {
    AgentVersion?: Value<string>
    AmiId?: Value<string>
    Architecture?: Value<string>
    AutoScalingType?: Value<string>
    AvailabilityZone?: Value<string>
    BlockDeviceMappings?: List<BlockDeviceMapping>
    EbsOptimized?: Value<boolean>
    ElasticIps?: List<Value<string>>
    Hostname?: Value<string>
    InstallUpdatesOnBoot?: Value<boolean>
    InstanceType: Value<string>
    LayerIds: List<Value<string>>
    Os?: Value<string>
    RootDeviceType?: Value<string>
    SshKeyName?: Value<string>
    StackId: Value<string>
    SubnetId?: Value<string>
    Tenancy?: Value<string>
    TimeBasedAutoScaling?: TimeBasedAutoScaling
    VirtualizationType?: Value<string>
    Volumes?: List<Value<string>>
}

export default class Instance extends ResourceBase {
    constructor(properties: InstanceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::OpsWorks::Instance', properties, dependsOn)
    }
}
