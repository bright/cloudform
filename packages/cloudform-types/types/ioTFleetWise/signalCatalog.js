"use strict";
/* Generated from:
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = exports.NodeCounts = exports.Node = exports.Branch = exports.Attribute = exports.Actuator = void 0;
const resource_1 = require("../resource");
class Actuator {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Actuator = Actuator;
class Attribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Attribute = Attribute;
class Branch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Branch = Branch;
class Node {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Node = Node;
class NodeCounts {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NodeCounts = NodeCounts;
class Sensor {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Sensor = Sensor;
class SignalCatalog extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTFleetWise::SignalCatalog', properties || {});
    }
}
exports.default = SignalCatalog;
SignalCatalog.Actuator = Actuator;
SignalCatalog.Attribute = Attribute;
SignalCatalog.Branch = Branch;
SignalCatalog.Node = Node;
SignalCatalog.NodeCounts = NodeCounts;
SignalCatalog.Sensor = Sensor;
