import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AnalysisAclRule {
    Cidr?: Value<string>;
    Egress?: Value<boolean>;
    PortRange?: PortRange;
    Protocol?: Value<string>;
    RuleAction?: Value<string>;
    RuleNumber?: Value<number>;
    constructor(properties: AnalysisAclRule);
}
export declare class AlternatePathHint {
    ComponentId?: Value<string>;
    ComponentArn?: Value<string>;
    constructor(properties: AlternatePathHint);
}
export declare class Explanation {
    Acl?: AnalysisComponent;
    AclRule?: AnalysisAclRule;
    Address?: Value<string>;
    Addresses?: List<Value<string>>;
    AttachedTo?: AnalysisComponent;
    AvailabilityZones?: List<Value<string>>;
    Cidrs?: List<Value<string>>;
    Component?: AnalysisComponent;
    CustomerGateway?: AnalysisComponent;
    Destination?: AnalysisComponent;
    DestinationVpc?: AnalysisComponent;
    Direction?: Value<string>;
    ExplanationCode?: Value<string>;
    IngressRouteTable?: AnalysisComponent;
    InternetGateway?: AnalysisComponent;
    LoadBalancerArn?: Value<string>;
    ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;
    LoadBalancerListenerPort?: Value<number>;
    LoadBalancerTarget?: AnalysisLoadBalancerTarget;
    LoadBalancerTargetGroup?: AnalysisComponent;
    LoadBalancerTargetGroups?: List<AnalysisComponent>;
    LoadBalancerTargetPort?: Value<number>;
    ElasticLoadBalancerListener?: AnalysisComponent;
    MissingComponent?: Value<string>;
    NatGateway?: AnalysisComponent;
    NetworkInterface?: AnalysisComponent;
    PacketField?: Value<string>;
    VpcPeeringConnection?: AnalysisComponent;
    Port?: Value<number>;
    PortRanges?: List<PortRange>;
    PrefixList?: AnalysisComponent;
    Protocols?: List<Value<string>>;
    RouteTableRoute?: AnalysisRouteTableRoute;
    RouteTable?: AnalysisComponent;
    SecurityGroup?: AnalysisComponent;
    SecurityGroupRule?: AnalysisSecurityGroupRule;
    SecurityGroups?: List<AnalysisComponent>;
    SourceVpc?: AnalysisComponent;
    State?: Value<string>;
    Subnet?: AnalysisComponent;
    SubnetRouteTable?: AnalysisComponent;
    Vpc?: AnalysisComponent;
    vpcEndpoint?: AnalysisComponent;
    VpnConnection?: AnalysisComponent;
    VpnGateway?: AnalysisComponent;
    constructor(properties: Explanation);
}
export declare class AnalysisLoadBalancerListener {
    InstancePort?: Value<number>;
    LoadBalancerPort?: Value<number>;
    constructor(properties: AnalysisLoadBalancerListener);
}
export declare class AnalysisLoadBalancerTarget {
    Address?: Value<string>;
    AvailabilityZone?: Value<string>;
    Instance?: AnalysisComponent;
    Port?: Value<number>;
    constructor(properties: AnalysisLoadBalancerTarget);
}
export declare class AnalysisRouteTableRoute {
    destinationCidr?: Value<string>;
    destinationPrefixListId?: Value<string>;
    egressOnlyInternetGatewayId?: Value<string>;
    gatewayId?: Value<string>;
    instanceId?: Value<string>;
    NatGatewayId?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    Origin?: Value<string>;
    TransitGatewayId?: Value<string>;
    VpcPeeringConnectionId?: Value<string>;
    constructor(properties: AnalysisRouteTableRoute);
}
export declare class AnalysisPacketHeader {
    DestinationAddresses?: List<Value<string>>;
    DestinationPortRanges?: List<PortRange>;
    Protocol?: Value<string>;
    SourceAddresses?: List<Value<string>>;
    SourcePortRanges?: List<PortRange>;
    constructor(properties: AnalysisPacketHeader);
}
export declare class PathComponent {
    SequenceNumber?: Value<number>;
    AclRule?: AnalysisAclRule;
    Component?: AnalysisComponent;
    DestinationVpc?: AnalysisComponent;
    OutboundHeader?: AnalysisPacketHeader;
    InboundHeader?: AnalysisPacketHeader;
    RouteTableRoute?: AnalysisRouteTableRoute;
    SecurityGroupRule?: AnalysisSecurityGroupRule;
    SourceVpc?: AnalysisComponent;
    Subnet?: AnalysisComponent;
    Vpc?: AnalysisComponent;
    constructor(properties: PathComponent);
}
export declare class AnalysisComponent {
    Id?: Value<string>;
    Arn?: Value<string>;
    constructor(properties: AnalysisComponent);
}
export declare class PortRange {
    From?: Value<number>;
    To?: Value<number>;
    constructor(properties: PortRange);
}
export declare class AnalysisSecurityGroupRule {
    Cidr?: Value<string>;
    Direction?: Value<string>;
    SecurityGroupId?: Value<string>;
    PortRange?: PortRange;
    PrefixListId?: Value<string>;
    Protocol?: Value<string>;
    constructor(properties: AnalysisSecurityGroupRule);
}
export interface NetworkInsightsAnalysisProperties {
    NetworkInsightsPathId: Value<string>;
    FilterInArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsAnalysis extends ResourceBase<NetworkInsightsAnalysisProperties> {
    static AnalysisAclRule: typeof AnalysisAclRule;
    static AlternatePathHint: typeof AlternatePathHint;
    static Explanation: typeof Explanation;
    static AnalysisLoadBalancerListener: typeof AnalysisLoadBalancerListener;
    static AnalysisLoadBalancerTarget: typeof AnalysisLoadBalancerTarget;
    static AnalysisRouteTableRoute: typeof AnalysisRouteTableRoute;
    static AnalysisPacketHeader: typeof AnalysisPacketHeader;
    static PathComponent: typeof PathComponent;
    static AnalysisComponent: typeof AnalysisComponent;
    static PortRange: typeof PortRange;
    static AnalysisSecurityGroupRule: typeof AnalysisSecurityGroupRule;
    constructor(properties: NetworkInsightsAnalysisProperties);
}
