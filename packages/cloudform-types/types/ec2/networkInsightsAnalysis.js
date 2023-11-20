"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitGatewayRouteTableRoute = exports.PortRange = exports.PathComponent = exports.Explanation = exports.AnalysisSecurityGroupRule = exports.AnalysisRouteTableRoute = exports.AnalysisPacketHeader = exports.AnalysisLoadBalancerTarget = exports.AnalysisLoadBalancerListener = exports.AnalysisComponent = exports.AnalysisAclRule = exports.AlternatePathHint = exports.AdditionalDetail = void 0;
const resource_1 = require("../resource");
class AdditionalDetail {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdditionalDetail = AdditionalDetail;
class AlternatePathHint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AlternatePathHint = AlternatePathHint;
class AnalysisAclRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisAclRule = AnalysisAclRule;
class AnalysisComponent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisComponent = AnalysisComponent;
class AnalysisLoadBalancerListener {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisLoadBalancerListener = AnalysisLoadBalancerListener;
class AnalysisLoadBalancerTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisLoadBalancerTarget = AnalysisLoadBalancerTarget;
class AnalysisPacketHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisPacketHeader = AnalysisPacketHeader;
class AnalysisRouteTableRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisRouteTableRoute = AnalysisRouteTableRoute;
class AnalysisSecurityGroupRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AnalysisSecurityGroupRule = AnalysisSecurityGroupRule;
class Explanation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Explanation = Explanation;
class PathComponent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PathComponent = PathComponent;
class PortRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortRange = PortRange;
class TransitGatewayRouteTableRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransitGatewayRouteTableRoute = TransitGatewayRouteTableRoute;
class NetworkInsightsAnalysis extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::NetworkInsightsAnalysis', properties);
    }
}
exports.default = NetworkInsightsAnalysis;
NetworkInsightsAnalysis.AdditionalDetail = AdditionalDetail;
NetworkInsightsAnalysis.AlternatePathHint = AlternatePathHint;
NetworkInsightsAnalysis.AnalysisAclRule = AnalysisAclRule;
NetworkInsightsAnalysis.AnalysisComponent = AnalysisComponent;
NetworkInsightsAnalysis.AnalysisLoadBalancerListener = AnalysisLoadBalancerListener;
NetworkInsightsAnalysis.AnalysisLoadBalancerTarget = AnalysisLoadBalancerTarget;
NetworkInsightsAnalysis.AnalysisPacketHeader = AnalysisPacketHeader;
NetworkInsightsAnalysis.AnalysisRouteTableRoute = AnalysisRouteTableRoute;
NetworkInsightsAnalysis.AnalysisSecurityGroupRule = AnalysisSecurityGroupRule;
NetworkInsightsAnalysis.Explanation = Explanation;
NetworkInsightsAnalysis.PathComponent = PathComponent;
NetworkInsightsAnalysis.PortRange = PortRange;
NetworkInsightsAnalysis.TransitGatewayRouteTableRoute = TransitGatewayRouteTableRoute;
