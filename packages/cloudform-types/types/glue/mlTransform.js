"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FindMatchesParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FindMatchesParameters = FindMatchesParameters;
class TransformParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TransformParameters = TransformParameters;
class InputRecordTables {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputRecordTables = InputRecordTables;
class GlueTables {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlueTables = GlueTables;
class MLTransform extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Glue::MLTransform', properties);
    }
}
MLTransform.FindMatchesParameters = FindMatchesParameters;
MLTransform.TransformParameters = TransformParameters;
MLTransform.InputRecordTables = InputRecordTables;
MLTransform.GlueTables = GlueTables;
exports.default = MLTransform;
