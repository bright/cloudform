"use strict";
/* Generated from:
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreTestingRecoveryPointSelection = void 0;
const resource_1 = require("../resource");
class RestoreTestingRecoveryPointSelection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RestoreTestingRecoveryPointSelection = RestoreTestingRecoveryPointSelection;
class RestoreTestingPlan extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Backup::RestoreTestingPlan', properties);
    }
}
exports.default = RestoreTestingPlan;
RestoreTestingPlan.RestoreTestingRecoveryPointSelection = RestoreTestingRecoveryPointSelection;
