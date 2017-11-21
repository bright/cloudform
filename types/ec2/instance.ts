import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import BlockDeviceMapping from './blockDeviceMapping'
import Ipv6Addresse from './ipv6Addresse'
import NetworkInterface from './networkInterface'
import SsmAssociations from './ssmAssociations'
import Volume from './volume'

export type AvailabilityZone = "us-east-1b" | "us-east-1c" | "us-east-1d" | "us-east-1e" | "us-west-1b" | "us-west-1c" | "us-west-2a" | "us-west-2b" | "us-west-2c" | "ap-northeast-1a" | "ap-northeast-1c" | "ap-northeast-2a" | "ap-northeast-2c" | "ap-south-1a" | "ap-south-1b" | "ap-southeast-1a" | "ap-southeast-1b" | "ap-southeast-2a" | "ap-southeast-2b" | "ap-southeast-2c" | "sa-east-1a" | "sa-east-1b" | "sa-east-1c" | "eu-west-1a" | "eu-west-1b" | "eu-west-1c" | "eu-central-1a" | "eu-central-1b"
export type InstanceType = "*" | "t1.micro" | "t2.nano" | "t2.micro" | "t2.small" | "t2.medium" | "t2.large" | "m1.small" | "m1.medium" | "m1.large" | "m1.xlarge" | "m2.xlarge" | "m2.2xlarge" | "m2.4xlarge" | "m3.medium" | "m3.large" | "m3.xlarge" | "m3.2xlarge" | "m4.large" | "m4.xlarge" | "m4.2xlarge" | "m4.4xlarge" | "m4.10xlarge" | "m4.16xlarge" | "c1.medium" | "c1.xlarge" | "cr1.8xlarge" | "c3.large" | "c3.xlarge" | "c3.2xlarge" | "c3.4xlarge" | "c3.8xlarge" | "c4.large" | "c4.xlarge" | "c4.2xlarge" | "c4.4xlarge" | "c4.8xlarge" | "cc1.4xlarge" | "cc2.8xlarge" | "cg1.4xlarge" | "d2.xlarge" | "d2.2xlarge" | "d2.4xlarge" | "d2.8xlarge" | "g2.2xlarge" | "g2.8xlarge" | "hi1.4xlarge" | "hs1.8xlarge" | "i2.xlarge" | "i2.2xlarge" | "i2.4xlarge" | "i2.8xlarge" | "p2.xlarge" | "p2.8xlarge" | "p2.16xlarge" | "r3.large" | "r3.xlarge" | "r3.2xlarge" | "r3.4xlarge" | "r3.8xlarge" | "x1.32xlarge"

export interface InstanceProperties {
    Affinity?: Value<string>
    AvailabilityZone?: Value<AvailabilityZone>
    BlockDeviceMappings?: BlockDeviceMapping[]
    DisableApiTermination?: Value<boolean>
    EbsOptimized?: Value<boolean>
    HostId?: Value<string>
    IamInstanceProfile?: Value<string>
    ImageId: Value<string>
    InstanceInitiatedShutdownBehavior?: Value<string>
    InstanceType: Value<InstanceType>
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: Ipv6Addresse[]
    KernelId?: Value<string>
    KeyName?: Value<string>
    Monitoring?: Value<boolean>
    NetworkInterfaces?: NetworkInterface[]
    PlacementGroupName?: Value<string>
    PrivateIpAddress?: Value<string>
    RamdiskId?: Value<string>
    SecurityGroupIds?: Value<string>[]
    SecurityGroups?: Value<string>[]
    SourceDestCheck?: Value<boolean>
    SsmAssociations?: SsmAssociations
    SubnetId?: Value<string>
    Tenancy?: Value<string>
    UserData?: Value<string>
    Volumes?: Volume[]
    Tags?: ResourceTag[]
}

export default class Instance extends ResourceBase {
    constructor(properties: InstanceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Instance', properties, dependsOn)
    }
}