"use strict";
/* Generated from:
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Project {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Project = Project;
class IamRole {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamRole = IamRole;
class AccessPolicyResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessPolicyResource = AccessPolicyResource;
class User {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.User = User;
class IamUser {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IamUser = IamUser;
class Portal {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Portal = Portal;
class AccessPolicyIdentity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessPolicyIdentity = AccessPolicyIdentity;
class AccessPolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTSiteWise::AccessPolicy', properties);
    }
}
exports.default = AccessPolicy;
AccessPolicy.Project = Project;
AccessPolicy.IamRole = IamRole;
AccessPolicy.AccessPolicyResource = AccessPolicyResource;
AccessPolicy.User = User;
AccessPolicy.IamUser = IamUser;
AccessPolicy.Portal = Portal;
AccessPolicy.AccessPolicyIdentity = AccessPolicyIdentity;
