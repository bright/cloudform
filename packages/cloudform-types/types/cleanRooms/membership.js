"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedQueryS3OutputConfiguration = exports.MembershipProtectedQueryResultConfiguration = exports.MembershipProtectedQueryOutputConfiguration = void 0;
const resource_1 = require("../resource");
class MembershipProtectedQueryOutputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MembershipProtectedQueryOutputConfiguration = MembershipProtectedQueryOutputConfiguration;
class MembershipProtectedQueryResultConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MembershipProtectedQueryResultConfiguration = MembershipProtectedQueryResultConfiguration;
class ProtectedQueryS3OutputConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProtectedQueryS3OutputConfiguration = ProtectedQueryS3OutputConfiguration;
class Membership extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CleanRooms::Membership', properties);
    }
}
exports.default = Membership;
Membership.MembershipProtectedQueryOutputConfiguration = MembershipProtectedQueryOutputConfiguration;
Membership.MembershipProtectedQueryResultConfiguration = MembershipProtectedQueryResultConfiguration;
Membership.ProtectedQueryS3OutputConfiguration = ProtectedQueryS3OutputConfiguration;