import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type ComplianceResourceTypes = "*" | "AWS::EC2::Volume" | "AWS::EC2::Host" | "AWS::EC2::EIP" | "AWS::EC2::Instance" | "AWS::EC2::NetworkInterface" | "AWS::EC2::SecurityGroup" | "AWS::EC2::CustomerGateway" | "AWS::EC2::InternetGateway" | "AWS::EC2::NetworkAcl" | "AWS::EC2::RouteTable" | "AWS::EC2::Subnet" | "AWS::EC2::VPC" | "AWS::EC2::VPNConnection" | "AWS::EC2::VPNGateway" | "AWS::CloudTrail::Trail";
export interface ScopeProperties {
    ComplianceResourceId?: Value<string>;
    ComplianceResourceTypes?: Value<ComplianceResourceTypes>;
    TagKey?: Value<string>;
    TagValue?: Value<string>;
}
export default class Scope extends ResourceBase {
    constructor(properties: ScopeProperties, dependsOn?: Value<string>);
}
