"use strict";
/* Generated from:
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedResourceConditions = exports.KeyValue = void 0;
const resource_1 = require("../resource");
class KeyValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValue = KeyValue;
class ProtectedResourceConditions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProtectedResourceConditions = ProtectedResourceConditions;
class RestoreTestingSelection extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Backup::RestoreTestingSelection', properties);
    }
}
exports.default = RestoreTestingSelection;
RestoreTestingSelection.KeyValue = KeyValue;
RestoreTestingSelection.ProtectedResourceConditions = ProtectedResourceConditions;
