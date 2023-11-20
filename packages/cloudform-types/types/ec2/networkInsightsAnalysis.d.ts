import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdditionalDetail {
    ServiceName?: Value<string>;
    AdditionalDetailType?: Value<string>;
    LoadBalancers?: List<AnalysisComponent>;
    Component?: AnalysisComponent;
    constructor(properties: AdditionalDetail);
}
export declare class AlternatePathHint {
    ComponentArn?: Value<string>;
    ComponentId?: Value<string>;
    constructor(properties: AlternatePathHint);
}
export declare class AnalysisAclRule {
    PortRange?: PortRange;
    Cidr?: Value<string>;
    RuleAction?: Value<string>;
    Egress?: Value<boolean>;
    RuleNumber?: Value<number>;
    Protocol?: Value<string>;
    constructor(properties: AnalysisAclRule);
}
export declare class AnalysisComponent {
    Id?: Value<string>;
    Arn?: Value<string>;
    constructor(properties: AnalysisComponent);
}
export declare class AnalysisLoadBalancerListener {
    InstancePort?: Value<number>;
    LoadBalancerPort?: Value<number>;
    constructor(properties: AnalysisLoadBalancerListener);
}
export declare class AnalysisLoadBalancerTarget {
    Address?: Value<string>;
    Instance?: AnalysisComponent;
    Port?: Value<number>;
    AvailabilityZone?: Value<string>;
    constructor(properties: AnalysisLoadBalancerTarget);
}
export declare class AnalysisPacketHeader {
    DestinationPortRanges?: List<PortRange>;
    SourcePortRanges?: List<PortRange>;
    DestinationAddresses?: List<Value<string>>;
    Protocol?: Value<string>;
    SourceAddresses?: List<Value<string>>;
    constructor(properties: AnalysisPacketHeader);
}
export declare class AnalysisRouteTableRoute {
    Origin?: Value<string>;
    destinationPrefixListId?: Value<string>;
    TransitGatewayId?: Value<string>;
    VpcPeeringConnectionId?: Value<string>;
    instanceId?: Value<string>;
    State?: Value<string>;
    egressOnlyInternetGatewayId?: Value<string>;
    destinationCidr?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    NatGatewayId?: Value<string>;
    gatewayId?: Value<string>;
    constructor(properties: AnalysisRouteTableRoute);
}
export declare class AnalysisSecurityGroupRule {
    PortRange?: PortRange;
    Cidr?: Value<string>;
    PrefixListId?: Value<string>;
    SecurityGroupId?: Value<string>;
    Protocol?: Value<string>;
    Direction?: Value<string>;
    constructor(properties: AnalysisSecurityGroupRule);
}
export declare class Explanation {
    VpnGateway?: AnalysisComponent;
    PacketField?: Value<string>;
    TransitGatewayAttachment?: AnalysisComponent;
    Protocols?: List<Value<string>>;
    IngressRouteTable?: AnalysisComponent;
    ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;
    VpcPeeringConnection?: AnalysisComponent;
    Address?: Value<string>;
    Port?: Value<number>;
    Addresses?: List<Value<string>>;
    ElasticLoadBalancerListener?: AnalysisComponent;
    TransitGatewayRouteTable?: AnalysisComponent;
    ExplanationCode?: Value<string>;
    InternetGateway?: AnalysisComponent;
    SourceVpc?: AnalysisComponent;
    AttachedTo?: AnalysisComponent;
    PrefixList?: AnalysisComponent;
    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
    ComponentRegion?: Value<string>;
    LoadBalancerTargetGroup?: AnalysisComponent;
    NetworkInterface?: AnalysisComponent;
    CustomerGateway?: AnalysisComponent;
    DestinationVpc?: AnalysisComponent;
    SecurityGroup?: AnalysisComponent;
    TransitGateway?: AnalysisComponent;
    RouteTable?: AnalysisComponent;
    State?: Value<string>;
    LoadBalancerListenerPort?: Value<number>;
    vpcEndpoint?: AnalysisComponent;
    Subnet?: AnalysisComponent;
    Cidrs?: List<Value<string>>;
    Destination?: AnalysisComponent;
    SecurityGroups?: List<AnalysisComponent>;
    ComponentAccount?: Value<string>;
    VpnConnection?: AnalysisComponent;
    Vpc?: AnalysisComponent;
    NatGateway?: AnalysisComponent;
    Direction?: Value<string>;
    LoadBalancerTargetPort?: Value<number>;
    LoadBalancerTarget?: AnalysisLoadBalancerTarget;
    LoadBalancerTargetGroups?: List<AnalysisComponent>;
    Component?: AnalysisComponent;
    MissingComponent?: Value<string>;
    RouteTableRoute?: AnalysisRouteTableRoute;
    AvailabilityZones?: List<Value<string>>;
    PortRanges?: List<PortRange>;
    Acl?: AnalysisComponent;
    SecurityGroupRule?: AnalysisSecurityGroupRule;
    SubnetRouteTable?: AnalysisComponent;
    LoadBalancerArn?: Value<string>;
    AclRule?: AnalysisAclRule;
    constructor(properties: Explanation);
}
export declare class PathComponent {
    AdditionalDetails?: List<AdditionalDetail>;
    InboundHeader?: AnalysisPacketHeader;
    Vpc?: AnalysisComponent;
    DestinationVpc?: AnalysisComponent;
    SecurityGroupRule?: AnalysisSecurityGroupRule;
    TransitGateway?: AnalysisComponent;
    ElasticLoadBalancerListener?: AnalysisComponent;
    Explanations?: List<Explanation>;
    ServiceName?: Value<string>;
    SequenceNumber?: Value<number>;
    SourceVpc?: AnalysisComponent;
    OutboundHeader?: AnalysisPacketHeader;
    AclRule?: AnalysisAclRule;
    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
    Component?: AnalysisComponent;
    Subnet?: AnalysisComponent;
    RouteTableRoute?: AnalysisRouteTableRoute;
    constructor(properties: PathComponent);
}
export declare class PortRange {
    From?: Value<number>;
    To?: Value<number>;
    constructor(properties: PortRange);
}
export declare class TransitGatewayRouteTableRoute {
    PrefixListId?: Value<string>;
    ResourceId?: Value<string>;
    State?: Value<string>;
    ResourceType?: Value<string>;
    RouteOrigin?: Value<string>;
    DestinationCidr?: Value<string>;
    AttachmentId?: Value<string>;
    constructor(properties: TransitGatewayRouteTableRoute);
}
export interface NetworkInsightsAnalysisProperties {
    NetworkInsightsPathId: Value<string>;
    FilterInArns?: List<Value<string>>;
    AdditionalAccounts?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class NetworkInsightsAnalysis extends ResourceBase<NetworkInsightsAnalysisProperties> {
    static AdditionalDetail: typeof AdditionalDetail;
    static AlternatePathHint: typeof AlternatePathHint;
    static AnalysisAclRule: typeof AnalysisAclRule;
    static AnalysisComponent: typeof AnalysisComponent;
    static AnalysisLoadBalancerListener: typeof AnalysisLoadBalancerListener;
    static AnalysisLoadBalancerTarget: typeof AnalysisLoadBalancerTarget;
    static AnalysisPacketHeader: typeof AnalysisPacketHeader;
    static AnalysisRouteTableRoute: typeof AnalysisRouteTableRoute;
    static AnalysisSecurityGroupRule: typeof AnalysisSecurityGroupRule;
    static Explanation: typeof Explanation;
    static PathComponent: typeof PathComponent;
    static PortRange: typeof PortRange;
    static TransitGatewayRouteTableRoute: typeof TransitGatewayRouteTableRoute;
    constructor(properties: NetworkInsightsAnalysisProperties);
}
