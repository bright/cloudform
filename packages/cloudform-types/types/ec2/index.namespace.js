"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const routeTable_1 = require("./routeTable");
const vpcPeeringConnection_1 = require("./vpcPeeringConnection");
const transitGateway_1 = require("./transitGateway");
const capacityReservation_1 = require("./capacityReservation");
const vpcEndpointServicePermissions_1 = require("./vpcEndpointServicePermissions");
const transitGatewayRouteTableAssociation_1 = require("./transitGatewayRouteTableAssociation");
const volume_1 = require("./volume");
const eip_1 = require("./eip");
const flowLog_1 = require("./flowLog");
const securityGroupEgress_1 = require("./securityGroupEgress");
const transitGatewayAttachment_1 = require("./transitGatewayAttachment");
const subnet_1 = require("./subnet");
const instance_1 = require("./instance");
const dhcpOptions_1 = require("./dhcpOptions");
const egressOnlyInternetGateway_1 = require("./egressOnlyInternetGateway");
const networkInterfaceAttachment_1 = require("./networkInterfaceAttachment");
const customerGateway_1 = require("./customerGateway");
const eipAssociation_1 = require("./eipAssociation");
const vpnGateway_1 = require("./vpnGateway");
const vpnConnection_1 = require("./vpnConnection");
const transitGatewayRouteTable_1 = require("./transitGatewayRouteTable");
const clientVpnRoute_1 = require("./clientVpnRoute");
const placementGroup_1 = require("./placementGroup");
const networkAclEntry_1 = require("./networkAclEntry");
const internetGateway_1 = require("./internetGateway");
const launchTemplate_1 = require("./launchTemplate");
const spotFleet_1 = require("./spotFleet");
const vpnConnectionRoute_1 = require("./vpnConnectionRoute");
const networkInterfacePermission_1 = require("./networkInterfacePermission");
const securityGroupIngress_1 = require("./securityGroupIngress");
const clientVpnEndpoint_1 = require("./clientVpnEndpoint");
const subnetRouteTableAssociation_1 = require("./subnetRouteTableAssociation");
const route_1 = require("./route");
const transitGatewayRouteTablePropagation_1 = require("./transitGatewayRouteTablePropagation");
const networkInterface_1 = require("./networkInterface");
const clientVpnAuthorizationRule_1 = require("./clientVpnAuthorizationRule");
const subnetNetworkAclAssociation_1 = require("./subnetNetworkAclAssociation");
const subnetCidrBlock_1 = require("./subnetCidrBlock");
const natGateway_1 = require("./natGateway");
const securityGroup_1 = require("./securityGroup");
const vpc_1 = require("./vpc");
const transitGatewayRoute_1 = require("./transitGatewayRoute");
const networkAcl_1 = require("./networkAcl");
const vpnGatewayRoutePropagation_1 = require("./vpnGatewayRoutePropagation");
const clientVpnTargetNetworkAssociation_1 = require("./clientVpnTargetNetworkAssociation");
const volumeAttachment_1 = require("./volumeAttachment");
const host_1 = require("./host");
const vpcEndpoint_1 = require("./vpcEndpoint");
const vpcGatewayAttachment_1 = require("./vpcGatewayAttachment");
const vpcCidrBlock_1 = require("./vpcCidrBlock");
const ec2Fleet_1 = require("./ec2Fleet");
const vpcdhcpOptionsAssociation_1 = require("./vpcdhcpOptionsAssociation");
const vpcEndpointConnectionNotification_1 = require("./vpcEndpointConnectionNotification");
const vpcEndpointService_1 = require("./vpcEndpointService");
var EC2;
(function (EC2) {
    EC2.RouteTable = routeTable_1.default;
    EC2.VPCPeeringConnection = vpcPeeringConnection_1.default;
    EC2.TransitGateway = transitGateway_1.default;
    EC2.CapacityReservation = capacityReservation_1.default;
    EC2.VPCEndpointServicePermissions = vpcEndpointServicePermissions_1.default;
    EC2.TransitGatewayRouteTableAssociation = transitGatewayRouteTableAssociation_1.default;
    EC2.Volume = volume_1.default;
    EC2.EIP = eip_1.default;
    EC2.FlowLog = flowLog_1.default;
    EC2.SecurityGroupEgress = securityGroupEgress_1.default;
    EC2.TransitGatewayAttachment = transitGatewayAttachment_1.default;
    EC2.Subnet = subnet_1.default;
    EC2.Instance = instance_1.default;
    EC2.DHCPOptions = dhcpOptions_1.default;
    EC2.EgressOnlyInternetGateway = egressOnlyInternetGateway_1.default;
    EC2.NetworkInterfaceAttachment = networkInterfaceAttachment_1.default;
    EC2.CustomerGateway = customerGateway_1.default;
    EC2.EIPAssociation = eipAssociation_1.default;
    EC2.VPNGateway = vpnGateway_1.default;
    EC2.VPNConnection = vpnConnection_1.default;
    EC2.TransitGatewayRouteTable = transitGatewayRouteTable_1.default;
    EC2.ClientVpnRoute = clientVpnRoute_1.default;
    EC2.PlacementGroup = placementGroup_1.default;
    EC2.NetworkAclEntry = networkAclEntry_1.default;
    EC2.InternetGateway = internetGateway_1.default;
    EC2.LaunchTemplate = launchTemplate_1.default;
    EC2.SpotFleet = spotFleet_1.default;
    EC2.VPNConnectionRoute = vpnConnectionRoute_1.default;
    EC2.NetworkInterfacePermission = networkInterfacePermission_1.default;
    EC2.SecurityGroupIngress = securityGroupIngress_1.default;
    EC2.ClientVpnEndpoint = clientVpnEndpoint_1.default;
    EC2.SubnetRouteTableAssociation = subnetRouteTableAssociation_1.default;
    EC2.Route = route_1.default;
    EC2.TransitGatewayRouteTablePropagation = transitGatewayRouteTablePropagation_1.default;
    EC2.NetworkInterface = networkInterface_1.default;
    EC2.ClientVpnAuthorizationRule = clientVpnAuthorizationRule_1.default;
    EC2.SubnetNetworkAclAssociation = subnetNetworkAclAssociation_1.default;
    EC2.SubnetCidrBlock = subnetCidrBlock_1.default;
    EC2.NatGateway = natGateway_1.default;
    EC2.SecurityGroup = securityGroup_1.default;
    EC2.VPC = vpc_1.default;
    EC2.TransitGatewayRoute = transitGatewayRoute_1.default;
    EC2.NetworkAcl = networkAcl_1.default;
    EC2.VPNGatewayRoutePropagation = vpnGatewayRoutePropagation_1.default;
    EC2.ClientVpnTargetNetworkAssociation = clientVpnTargetNetworkAssociation_1.default;
    EC2.VolumeAttachment = volumeAttachment_1.default;
    EC2.Host = host_1.default;
    EC2.VPCEndpoint = vpcEndpoint_1.default;
    EC2.VPCGatewayAttachment = vpcGatewayAttachment_1.default;
    EC2.VPCCidrBlock = vpcCidrBlock_1.default;
    EC2.EC2Fleet = ec2Fleet_1.default;
    EC2.VPCDHCPOptionsAssociation = vpcdhcpOptionsAssociation_1.default;
    EC2.VPCEndpointConnectionNotification = vpcEndpointConnectionNotification_1.default;
    EC2.VPCEndpointService = vpcEndpointService_1.default;
})(EC2 = exports.EC2 || (exports.EC2 = {}));
