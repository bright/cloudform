"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLakePrincipal = void 0;
const resource_1 = require("../resource");
class DataLakePrincipal {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataLakePrincipal = DataLakePrincipal;
class DataLakeSettings extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::LakeFormation::DataLakeSettings', properties || {});
    }
}
exports.default = DataLakeSettings;
DataLakeSettings.DataLakePrincipal = DataLakePrincipal;
