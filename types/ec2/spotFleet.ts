/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface IamInstanceProfileSpecificationProperties {
    Arn?: Value<string>
}

export class IamInstanceProfileSpecification extends ResourceBase {
    constructor(properties: IamInstanceProfileSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::IamInstanceProfileSpecification', properties, dependsOn)
    }
}

export interface InstanceNetworkInterfaceSpecificationProperties {
    AssociatePublicIpAddress?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Description?: Value<string>
    DeviceIndex?: Value<number>
    Groups?: Value<string>[]
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: InstanceIpv6Address[]
    NetworkInterfaceId?: Value<string>
    PrivateIpAddresses?: PrivateIpAddressSpecification[]
    SecondaryPrivateIpAddressCount?: Value<number>
    SubnetId?: Value<string>
}

export class InstanceNetworkInterfaceSpecification extends ResourceBase {
    constructor(properties: InstanceNetworkInterfaceSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::InstanceNetworkInterfaceSpecification', properties, dependsOn)
    }
}

export interface PrivateIpAddressSpecificationProperties {
    Primary?: Value<boolean>
    PrivateIpAddress: Value<string>
}

export class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PrivateIpAddressSpecification', properties, dependsOn)
    }
}

export interface SpotFleetLaunchSpecificationProperties {
    BlockDeviceMappings?: BlockDeviceMapping[]
    EbsOptimized?: Value<boolean>
    IamInstanceProfile?: IamInstanceProfileSpecification
    ImageId: Value<string>
    InstanceType: Value<string>
    KernelId?: Value<string>
    KeyName?: Value<string>
    Monitoring?: SpotFleetMonitoring
    NetworkInterfaces?: InstanceNetworkInterfaceSpecification[]
    Placement?: SpotPlacement
    RamdiskId?: Value<string>
    SecurityGroups?: GroupIdentifier[]
    SpotPrice?: Value<string>
    SubnetId?: Value<string>
    UserData?: Value<string>
    WeightedCapacity?: Value<number>
}

export class SpotFleetLaunchSpecification extends ResourceBase {
    constructor(properties: SpotFleetLaunchSpecificationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotFleetLaunchSpecification', properties, dependsOn)
    }
}

export interface SpotPlacementProperties {
    AvailabilityZone?: Value<string>
    GroupName?: Value<string>
}

export class SpotPlacement extends ResourceBase {
    constructor(properties: SpotPlacementProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotPlacement', properties, dependsOn)
    }
}

export interface SpotFleetRequestConfigDataProperties {
    AllocationStrategy?: Value<string>
    ExcessCapacityTerminationPolicy?: Value<string>
    IamFleetRole: Value<string>
    LaunchSpecifications: SpotFleetLaunchSpecification[]
    ReplaceUnhealthyInstances?: Value<boolean>
    SpotPrice: Value<string>
    TargetCapacity: Value<number>
    TerminateInstancesWithExpiration?: Value<boolean>
    Type?: Value<string>
    ValidFrom?: Value<string>
    ValidUntil?: Value<string>
}

export class SpotFleetRequestConfigData extends ResourceBase {
    constructor(properties: SpotFleetRequestConfigDataProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotFleetRequestConfigData', properties, dependsOn)
    }
}

export interface EbsBlockDeviceProperties {
    DeleteOnTermination?: Value<boolean>
    Encrypted?: Value<boolean>
    Iops?: Value<number>
    SnapshotId?: Value<string>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>
}

export class EbsBlockDevice extends ResourceBase {
    constructor(properties: EbsBlockDeviceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::EbsBlockDevice', properties, dependsOn)
    }
}

export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>
}

export class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::InstanceIpv6Address', properties, dependsOn)
    }
}

export interface GroupIdentifierProperties {
    GroupId: Value<string>
}

export class GroupIdentifier extends ResourceBase {
    constructor(properties: GroupIdentifierProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::GroupIdentifier', properties, dependsOn)
    }
}

export interface SpotFleetMonitoringProperties {
    Enabled?: Value<boolean>
}

export class SpotFleetMonitoring extends ResourceBase {
    constructor(properties: SpotFleetMonitoringProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotFleetMonitoring', properties, dependsOn)
    }
}

export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>
    Ebs?: EbsBlockDevice
    NoDevice?: Value<string>
    VirtualName?: Value<string>
}

export class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::BlockDeviceMapping', properties, dependsOn)
    }
}

export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData
}

export default class SpotFleet extends ResourceBase {
    constructor(properties: SpotFleetProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SpotFleet', properties, dependsOn)
    }
}