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
exports.VpcInterfaceAttachment = exports.SourcePriority = exports.IngressGatewayBridge = exports.FailoverConfig = exports.EgressGatewayBridge = exports.BridgeSource = exports.BridgeOutput = exports.BridgeNetworkSource = exports.BridgeNetworkOutput = exports.BridgeFlowSource = void 0;
const resource_1 = require("../resource");
class BridgeFlowSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BridgeFlowSource = BridgeFlowSource;
class BridgeNetworkOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BridgeNetworkOutput = BridgeNetworkOutput;
class BridgeNetworkSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BridgeNetworkSource = BridgeNetworkSource;
class BridgeOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BridgeOutput = BridgeOutput;
class BridgeSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BridgeSource = BridgeSource;
class EgressGatewayBridge {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EgressGatewayBridge = EgressGatewayBridge;
class FailoverConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FailoverConfig = FailoverConfig;
class IngressGatewayBridge {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IngressGatewayBridge = IngressGatewayBridge;
class SourcePriority {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourcePriority = SourcePriority;
class VpcInterfaceAttachment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcInterfaceAttachment = VpcInterfaceAttachment;
class Bridge extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::MediaConnect::Bridge', properties);
    }
}
exports.default = Bridge;
Bridge.BridgeFlowSource = BridgeFlowSource;
Bridge.BridgeNetworkOutput = BridgeNetworkOutput;
Bridge.BridgeNetworkSource = BridgeNetworkSource;
Bridge.BridgeOutput = BridgeOutput;
Bridge.BridgeSource = BridgeSource;
Bridge.EgressGatewayBridge = EgressGatewayBridge;
Bridge.FailoverConfig = FailoverConfig;
Bridge.IngressGatewayBridge = IngressGatewayBridge;
Bridge.SourcePriority = SourcePriority;
Bridge.VpcInterfaceAttachment = VpcInterfaceAttachment;
