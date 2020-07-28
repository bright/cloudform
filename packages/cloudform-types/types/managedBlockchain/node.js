"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeConfiguration = void 0;
const resource_1 = require("../resource");
class NodeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeConfiguration = NodeConfiguration;
class Node extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ManagedBlockchain::Node', properties);
    }
}
exports.default = Node;
Node.NodeConfiguration = NodeConfiguration;
