"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkManager = void 0;
const connectAttachment_1 = require("./connectAttachment");
const connectPeer_1 = require("./connectPeer");
const coreNetwork_1 = require("./coreNetwork");
const customerGatewayAssociation_1 = require("./customerGatewayAssociation");
const device_1 = require("./device");
const globalNetwork_1 = require("./globalNetwork");
const link_1 = require("./link");
const linkAssociation_1 = require("./linkAssociation");
const site_1 = require("./site");
const siteToSiteVpnAttachment_1 = require("./siteToSiteVpnAttachment");
const transitGatewayPeering_1 = require("./transitGatewayPeering");
const transitGatewayRegistration_1 = require("./transitGatewayRegistration");
const transitGatewayRouteTableAttachment_1 = require("./transitGatewayRouteTableAttachment");
const vpcAttachment_1 = require("./vpcAttachment");
var NetworkManager;
(function (NetworkManager) {
    NetworkManager.ConnectAttachment = connectAttachment_1.default;
    NetworkManager.ConnectPeer = connectPeer_1.default;
    NetworkManager.CoreNetwork = coreNetwork_1.default;
    NetworkManager.CustomerGatewayAssociation = customerGatewayAssociation_1.default;
    NetworkManager.Device = device_1.default;
    NetworkManager.GlobalNetwork = globalNetwork_1.default;
    NetworkManager.Link = link_1.default;
    NetworkManager.LinkAssociation = linkAssociation_1.default;
    NetworkManager.Site = site_1.default;
    NetworkManager.SiteToSiteVpnAttachment = siteToSiteVpnAttachment_1.default;
    NetworkManager.TransitGatewayPeering = transitGatewayPeering_1.default;
    NetworkManager.TransitGatewayRegistration = transitGatewayRegistration_1.default;
    NetworkManager.TransitGatewayRouteTableAttachment = transitGatewayRouteTableAttachment_1.default;
    NetworkManager.VpcAttachment = vpcAttachment_1.default;
})(NetworkManager = exports.NetworkManager || (exports.NetworkManager = {}));
