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
exports.VpcLattice = void 0;
const accessLogSubscription_1 = require("./accessLogSubscription");
const authPolicy_1 = require("./authPolicy");
const listener_1 = require("./listener");
const resourcePolicy_1 = require("./resourcePolicy");
const rule_1 = require("./rule");
const service_1 = require("./service");
const serviceNetwork_1 = require("./serviceNetwork");
const serviceNetworkServiceAssociation_1 = require("./serviceNetworkServiceAssociation");
const serviceNetworkVpcAssociation_1 = require("./serviceNetworkVpcAssociation");
const targetGroup_1 = require("./targetGroup");
var VpcLattice;
(function (VpcLattice) {
    VpcLattice.AccessLogSubscription = accessLogSubscription_1.default;
    VpcLattice.AuthPolicy = authPolicy_1.default;
    VpcLattice.Listener = listener_1.default;
    VpcLattice.ResourcePolicy = resourcePolicy_1.default;
    VpcLattice.Rule = rule_1.default;
    VpcLattice.Service = service_1.default;
    VpcLattice.ServiceNetwork = serviceNetwork_1.default;
    VpcLattice.ServiceNetworkServiceAssociation = serviceNetworkServiceAssociation_1.default;
    VpcLattice.ServiceNetworkVpcAssociation = serviceNetworkVpcAssociation_1.default;
    VpcLattice.TargetGroup = targetGroup_1.default;
})(VpcLattice = exports.VpcLattice || (exports.VpcLattice = {}));
