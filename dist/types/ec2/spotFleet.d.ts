import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IamInstanceProfileSpecificationProperties {
    Arn?: Value<string>;
}
export declare class IamInstanceProfileSpecification extends ResourceBase {
    constructor(properties: IamInstanceProfileSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceNetworkInterfaceSpecificationProperties {
    AssociatePublicIpAddress?: Value<boolean>;
    DeleteOnTermination?: Value<boolean>;
    Description?: Value<string>;
    DeviceIndex?: Value<number>;
    Groups?: Value<string>[];
    Ipv6AddressCount?: Value<number>;
    Ipv6Addresses?: InstanceIpv6Address[];
    NetworkInterfaceId?: Value<string>;
    PrivateIpAddresses?: PrivateIpAddressSpecification[];
    SecondaryPrivateIpAddressCount?: Value<number>;
    SubnetId?: Value<string>;
}
export declare class InstanceNetworkInterfaceSpecification extends ResourceBase {
    constructor(properties: InstanceNetworkInterfaceSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PrivateIpAddressSpecificationProperties {
    Primary?: Value<boolean>;
    PrivateIpAddress: Value<string>;
}
export declare class PrivateIpAddressSpecification extends ResourceBase {
    constructor(properties: PrivateIpAddressSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotFleetLaunchSpecificationProperties {
    BlockDeviceMappings?: BlockDeviceMapping[];
    EbsOptimized?: Value<boolean>;
    IamInstanceProfile?: IamInstanceProfileSpecification;
    ImageId: Value<string>;
    InstanceType: Value<string>;
    KernelId?: Value<string>;
    KeyName?: Value<string>;
    Monitoring?: SpotFleetMonitoring;
    NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];
    Placement?: SpotPlacement;
    RamdiskId?: Value<string>;
    SecurityGroups?: GroupIdentifier[];
    SpotPrice?: Value<string>;
    SubnetId?: Value<string>;
    UserData?: Value<string>;
    WeightedCapacity?: Value<number>;
}
export declare class SpotFleetLaunchSpecification extends ResourceBase {
    constructor(properties: SpotFleetLaunchSpecificationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotPlacementProperties {
    AvailabilityZone?: Value<string>;
    GroupName?: Value<string>;
}
export declare class SpotPlacement extends ResourceBase {
    constructor(properties: SpotPlacementProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotFleetRequestConfigDataProperties {
    AllocationStrategy?: Value<string>;
    ExcessCapacityTerminationPolicy?: Value<string>;
    IamFleetRole: Value<string>;
    LaunchSpecifications: SpotFleetLaunchSpecification[];
    ReplaceUnhealthyInstances?: Value<boolean>;
    SpotPrice: Value<string>;
    TargetCapacity: Value<number>;
    TerminateInstancesWithExpiration?: Value<boolean>;
    Type?: Value<string>;
    ValidFrom?: Value<string>;
    ValidUntil?: Value<string>;
}
export declare class SpotFleetRequestConfigData extends ResourceBase {
    constructor(properties: SpotFleetRequestConfigDataProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EbsBlockDeviceProperties {
    DeleteOnTermination?: Value<boolean>;
    Encrypted?: Value<boolean>;
    Iops?: Value<number>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
}
export declare class EbsBlockDevice extends ResourceBase {
    constructor(properties: EbsBlockDeviceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InstanceIpv6AddressProperties {
    Ipv6Address: Value<string>;
}
export declare class InstanceIpv6Address extends ResourceBase {
    constructor(properties: InstanceIpv6AddressProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface GroupIdentifierProperties {
    GroupId: Value<string>;
}
export declare class GroupIdentifier extends ResourceBase {
    constructor(properties: GroupIdentifierProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotFleetMonitoringProperties {
    Enabled?: Value<boolean>;
}
export declare class SpotFleetMonitoring extends ResourceBase {
    constructor(properties: SpotFleetMonitoringProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface BlockDeviceMappingProperties {
    DeviceName: Value<string>;
    Ebs?: EbsBlockDevice;
    NoDevice?: Value<string>;
    VirtualName?: Value<string>;
}
export declare class BlockDeviceMapping extends ResourceBase {
    constructor(properties: BlockDeviceMappingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData;
}
export default class SpotFleet extends ResourceBase {
    constructor(properties: SpotFleetProperties, dependsOn?: Value<string> | Value<string>[]);
}
