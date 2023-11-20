/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AdditionalDetail {
    ServiceName?: Value<string>
    AdditionalDetailType?: Value<string>
    LoadBalancers?: List<AnalysisComponent>
    Component?: AnalysisComponent

    constructor(properties: AdditionalDetail) {
        Object.assign(this, properties)
    }
}

export class AlternatePathHint {
    ComponentArn?: Value<string>
    ComponentId?: Value<string>

    constructor(properties: AlternatePathHint) {
        Object.assign(this, properties)
    }
}

export class AnalysisAclRule {
    PortRange?: PortRange
    Cidr?: Value<string>
    RuleAction?: Value<string>
    Egress?: Value<boolean>
    RuleNumber?: Value<number>
    Protocol?: Value<string>

    constructor(properties: AnalysisAclRule) {
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

export class AnalysisLoadBalancerListener {
    InstancePort?: Value<number>
    LoadBalancerPort?: Value<number>

    constructor(properties: AnalysisLoadBalancerListener) {
        Object.assign(this, properties)
    }
}

export class AnalysisLoadBalancerTarget {
    Address?: Value<string>
    Instance?: AnalysisComponent
    Port?: Value<number>
    AvailabilityZone?: Value<string>

    constructor(properties: AnalysisLoadBalancerTarget) {
        Object.assign(this, properties)
    }
}

export class AnalysisPacketHeader {
    DestinationPortRanges?: List<PortRange>
    SourcePortRanges?: List<PortRange>
    DestinationAddresses?: List<Value<string>>
    Protocol?: Value<string>
    SourceAddresses?: List<Value<string>>

    constructor(properties: AnalysisPacketHeader) {
        Object.assign(this, properties)
    }
}

export class AnalysisRouteTableRoute {
    Origin?: Value<string>
    destinationPrefixListId?: Value<string>
    TransitGatewayId?: Value<string>
    VpcPeeringConnectionId?: Value<string>
    instanceId?: Value<string>
    State?: Value<string>
    egressOnlyInternetGatewayId?: Value<string>
    destinationCidr?: Value<string>
    NetworkInterfaceId?: Value<string>
    NatGatewayId?: Value<string>
    gatewayId?: Value<string>

    constructor(properties: AnalysisRouteTableRoute) {
        Object.assign(this, properties)
    }
}

export class AnalysisSecurityGroupRule {
    PortRange?: PortRange
    Cidr?: Value<string>
    PrefixListId?: Value<string>
    SecurityGroupId?: Value<string>
    Protocol?: Value<string>
    Direction?: Value<string>

    constructor(properties: AnalysisSecurityGroupRule) {
        Object.assign(this, properties)
    }
}

export class Explanation {
    VpnGateway?: AnalysisComponent
    PacketField?: Value<string>
    TransitGatewayAttachment?: AnalysisComponent
    Protocols?: List<Value<string>>
    IngressRouteTable?: AnalysisComponent
    ClassicLoadBalancerListener?: AnalysisLoadBalancerListener
    VpcPeeringConnection?: AnalysisComponent
    Address?: Value<string>
    Port?: Value<number>
    Addresses?: List<Value<string>>
    ElasticLoadBalancerListener?: AnalysisComponent
    TransitGatewayRouteTable?: AnalysisComponent
    ExplanationCode?: Value<string>
    InternetGateway?: AnalysisComponent
    SourceVpc?: AnalysisComponent
    AttachedTo?: AnalysisComponent
    PrefixList?: AnalysisComponent
    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute
    ComponentRegion?: Value<string>
    LoadBalancerTargetGroup?: AnalysisComponent
    NetworkInterface?: AnalysisComponent
    CustomerGateway?: AnalysisComponent
    DestinationVpc?: AnalysisComponent
    SecurityGroup?: AnalysisComponent
    TransitGateway?: AnalysisComponent
    RouteTable?: AnalysisComponent
    State?: Value<string>
    LoadBalancerListenerPort?: Value<number>
    vpcEndpoint?: AnalysisComponent
    Subnet?: AnalysisComponent
    Cidrs?: List<Value<string>>
    Destination?: AnalysisComponent
    SecurityGroups?: List<AnalysisComponent>
    ComponentAccount?: Value<string>
    VpnConnection?: AnalysisComponent
    Vpc?: AnalysisComponent
    NatGateway?: AnalysisComponent
    Direction?: Value<string>
    LoadBalancerTargetPort?: Value<number>
    LoadBalancerTarget?: AnalysisLoadBalancerTarget
    LoadBalancerTargetGroups?: List<AnalysisComponent>
    Component?: AnalysisComponent
    MissingComponent?: Value<string>
    RouteTableRoute?: AnalysisRouteTableRoute
    AvailabilityZones?: List<Value<string>>
    PortRanges?: List<PortRange>
    Acl?: AnalysisComponent
    SecurityGroupRule?: AnalysisSecurityGroupRule
    SubnetRouteTable?: AnalysisComponent
    LoadBalancerArn?: Value<string>
    AclRule?: AnalysisAclRule

    constructor(properties: Explanation) {
        Object.assign(this, properties)
    }
}

export class PathComponent {
    AdditionalDetails?: List<AdditionalDetail>
    InboundHeader?: AnalysisPacketHeader
    Vpc?: AnalysisComponent
    DestinationVpc?: AnalysisComponent
    SecurityGroupRule?: AnalysisSecurityGroupRule
    TransitGateway?: AnalysisComponent
    ElasticLoadBalancerListener?: AnalysisComponent
    Explanations?: List<Explanation>
    ServiceName?: Value<string>
    SequenceNumber?: Value<number>
    SourceVpc?: AnalysisComponent
    OutboundHeader?: AnalysisPacketHeader
    AclRule?: AnalysisAclRule
    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute
    Component?: AnalysisComponent
    Subnet?: AnalysisComponent
    RouteTableRoute?: AnalysisRouteTableRoute

    constructor(properties: PathComponent) {
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

export class TransitGatewayRouteTableRoute {
    PrefixListId?: Value<string>
    ResourceId?: Value<string>
    State?: Value<string>
    ResourceType?: Value<string>
    RouteOrigin?: Value<string>
    DestinationCidr?: Value<string>
    AttachmentId?: Value<string>

    constructor(properties: TransitGatewayRouteTableRoute) {
        Object.assign(this, properties)
    }
}

export interface NetworkInsightsAnalysisProperties {
    NetworkInsightsPathId: Value<string>
    FilterInArns?: List<Value<string>>
    AdditionalAccounts?: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class NetworkInsightsAnalysis extends ResourceBase<NetworkInsightsAnalysisProperties> {
    static AdditionalDetail = AdditionalDetail
    static AlternatePathHint = AlternatePathHint
    static AnalysisAclRule = AnalysisAclRule
    static AnalysisComponent = AnalysisComponent
    static AnalysisLoadBalancerListener = AnalysisLoadBalancerListener
    static AnalysisLoadBalancerTarget = AnalysisLoadBalancerTarget
    static AnalysisPacketHeader = AnalysisPacketHeader
    static AnalysisRouteTableRoute = AnalysisRouteTableRoute
    static AnalysisSecurityGroupRule = AnalysisSecurityGroupRule
    static Explanation = Explanation
    static PathComponent = PathComponent
    static PortRange = PortRange
    static TransitGatewayRouteTableRoute = TransitGatewayRouteTableRoute

    constructor(properties: NetworkInsightsAnalysisProperties) {
        super('AWS::EC2::NetworkInsightsAnalysis', properties)
    }
}
