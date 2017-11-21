import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type ResourceTypes = "*" | "AWS::EC2::Volume" | "AWS::EC2::Host" | "AWS::EC2::EIP" | "AWS::EC2::Instance" | "AWS::EC2::NetworkInterface" | "AWS::EC2::SecurityGroup" | "AWS::EC2::CustomerGateway" | "AWS::EC2::InternetGateway" | "AWS::EC2::NetworkAcl" | "AWS::EC2::RouteTable" | "AWS::EC2::Subnet" | "AWS::EC2::VPC" | "AWS::EC2::VPNConnection" | "AWS::EC2::VPNGateway" | "AWS::CloudTrail::Trail" | "AWS::IAM::User" | "AWS::IAM::Group" | "AWS::IAM::Role" | "AWS::IAM::Policy"

export interface RecordingGroupProperties {
    AllSupported?: Value<boolean>
    IncludeGlobalResourceTypes?: Value<boolean>
    ResourceTypes?: Value<ResourceTypes>
}

export default class RecordingGroup extends ResourceBase {
    constructor(properties: RecordingGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Config::RecordingGroup', properties, dependsOn)
    }
}