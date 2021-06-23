/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AnalysisAclRule {
    Cidr?: Value<string>
    Egress?: Value<boolean>
    PortRange?: PortRange
    Protocol?: Value<string>
    RuleAction?: Value<string>
    RuleNumber?: Value<number>

    constructor(properties: AnalysisAclRule) {
        Object.assign(this, properties)
    }
}

export class AlternatePathHint {
    ComponentId?: Value<string>
    ComponentArn?: Value<string>

    constructor(properties: AlternatePathHint) {
        Object.assign(this, properties)
    }
}

export class Explanation {
    Acl?: AnalysisComponent
    AclRule?: AnalysisAclRule
    Address?: Value<string>
    Addresses?: List<Value<string>>
    AttachedTo?: AnalysisComponent
    AvailabilityZones?: List<Value<string>>
    Cidrs?: List<Value<string>>
    Component?: AnalysisComponent
    CustomerGateway?: AnalysisComponent
    Destination?: AnalysisComponent
    DestinationVpc?: AnalysisComponent
    Direction?: Value<string>
    ExplanationCode?: Value<string>
    IngressRouteTable?: AnalysisComponent
    InternetGateway?: AnalysisComponent
    LoadBalancerArn?: Value<string>
    ClassicLoadBalancerListener?: AnalysisLoadBalancerListener
    LoadBalancerListenerPort?: Value<number>
    LoadBalancerTarget?: AnalysisLoadBalancerTarget
    LoadBalancerTargetGroup?: AnalysisComponent
    LoadBalancerTargetGroups?: List<AnalysisComponent>
    LoadBalancerTargetPort?: Value<number>
    ElasticLoadBalancerListener?: AnalysisComponent
    MissingComponent?: Value<string>
    NatGateway?: AnalysisComponent
    NetworkInterface?: AnalysisComponent
    PacketField?: Value<string>
    VpcPeeringConnection?: AnalysisComponent
    Port?: Value<number>
    PortRanges?: List<PortRange>
    PrefixList?: AnalysisComponent
    Protocols?: List<Value<string>>
    RouteTableRoute?: AnalysisRouteTableRoute
    RouteTable?: AnalysisComponent
    SecurityGroup?: AnalysisComponent
    SecurityGroupRule?: AnalysisSecurityGroupRule
    SecurityGroups?: List<AnalysisComponent>
    SourceVpc?: AnalysisComponent
    State?: Value<string>
    Subnet?: AnalysisComponent
    SubnetRouteTable?: AnalysisComponent
    Vpc?: AnalysisComponent
    vpcEndpoint?: AnalysisComponent
    VpnConnection?: AnalysisComponent
    VpnGateway?: AnalysisComponent

    constructor(properties: Explanation) {
        Object.assign(this, properties)
    }
}

export class AnalysisLoadBalancerListener {
    InstancePort?: Value<number>
    LoadBalancerPort?: Value<number>

    constructor(properties: AnalysisLoadBalancerListener) {
        Object.assign(this, properties)
    }
}

export class AnalysisLoadBalancerTarget {
    Address?: Value<string>
    AvailabilityZone?: Value<string>
    Instance?: AnalysisComponent
    Port?: Value<number>

    constructor(properties: AnalysisLoadBalancerTarget) {
        Object.assign(this, properties)
    }
}

export class AnalysisRouteTableRoute {
    destinationCidr?: Value<string>
    destinationPrefixListId?: Value<string>
    egressOnlyInternetGatewayId?: Value<string>
    gatewayId?: Value<string>
    instanceId?: Value<string>
    NatGatewayId?: Value<string>
    NetworkInterfaceId?: Value<string>
    Origin?: Value<string>
    TransitGatewayId?: Value<string>
    VpcPeeringConnectionId?: Value<string>

    constructor(properties: AnalysisRouteTableRoute) {
        Object.assign(this, properties)
    }
}

export class AnalysisPacketHeader {
    DestinationAddresses?: List<Value<string>>
    DestinationPortRanges?: List<PortRange>
    Protocol?: Value<string>
    SourceAddresses?: List<Value<string>>
    SourcePortRanges?: List<PortRange>

    constructor(properties: AnalysisPacketHeader) {
        Object.assign(this, properties)
    }
}

export class PathComponent {
    SequenceNumber?: Value<number>
    AclRule?: AnalysisAclRule
    Component?: AnalysisComponent
    DestinationVpc?: AnalysisComponent
    OutboundHeader?: AnalysisPacketHeader
    InboundHeader?: AnalysisPacketHeader
    RouteTableRoute?: AnalysisRouteTableRoute
    SecurityGroupRule?: AnalysisSecurityGroupRule
    SourceVpc?: AnalysisComponent
    Subnet?: AnalysisComponent
    Vpc?: AnalysisComponent

    constructor(properties: PathComponent) {
        Object.assign(this, properties)
    }
}

export class AnalysisComponent {
    Id?: Value<string>
    Arn?: Value<string>

    constructor(properties: AnalysisComponent) {
        Object.assign(this, properties)
    }
}

export class PortRange {
    From?: Value<number>
    To?: Value<number>

    constructor(properties: PortRange) {
        Object.assign(this, properties)
    }
}

export class AnalysisSecurityGroupRule {
    Cidr?: Value<string>
    Direction?: Value<string>
    SecurityGroupId?: Value<string>
    PortRange?: PortRange
    PrefixListId?: Value<string>
    Protocol?: Value<string>

    constructor(properties: AnalysisSecurityGroupRule) {
        Object.assign(this, properties)
    }
}

export interface NetworkInsightsAnalysisProperties {
    NetworkInsightsPathId: Value<string>
    FilterInArns?: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class NetworkInsightsAnalysis extends ResourceBase<NetworkInsightsAnalysisProperties> {
    static AnalysisAclRule = AnalysisAclRule
    static AlternatePathHint = AlternatePathHint
    static Explanation = Explanation
    static AnalysisLoadBalancerListener = AnalysisLoadBalancerListener
    static AnalysisLoadBalancerTarget = AnalysisLoadBalancerTarget
    static AnalysisRouteTableRoute = AnalysisRouteTableRoute
    static AnalysisPacketHeader = AnalysisPacketHeader
    static PathComponent = PathComponent
    static AnalysisComponent = AnalysisComponent
    static PortRange = PortRange
    static AnalysisSecurityGroupRule = AnalysisSecurityGroupRule

    constructor(properties: NetworkInsightsAnalysisProperties) {
        super('AWS::EC2::NetworkInsightsAnalysis', properties)
    }
}
