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
exports.IAM = void 0;
const accessKey_1 = require("./accessKey");
const group_1 = require("./group");
const groupPolicy_1 = require("./groupPolicy");
const instanceProfile_1 = require("./instanceProfile");
const managedPolicy_1 = require("./managedPolicy");
const oidcProvider_1 = require("./oidcProvider");
const policy_1 = require("./policy");
const role_1 = require("./role");
const rolePolicy_1 = require("./rolePolicy");
const samlProvider_1 = require("./samlProvider");
const serverCertificate_1 = require("./serverCertificate");
const serviceLinkedRole_1 = require("./serviceLinkedRole");
const user_1 = require("./user");
const userPolicy_1 = require("./userPolicy");
const userToGroupAddition_1 = require("./userToGroupAddition");
const virtualMfaDevice_1 = require("./virtualMfaDevice");
var IAM;
(function (IAM) {
    IAM.AccessKey = accessKey_1.default;
    IAM.Group = group_1.default;
    IAM.GroupPolicy = groupPolicy_1.default;
    IAM.InstanceProfile = instanceProfile_1.default;
    IAM.ManagedPolicy = managedPolicy_1.default;
    IAM.OIDCProvider = oidcProvider_1.default;
    IAM.Policy = policy_1.default;
    IAM.Role = role_1.default;
    IAM.RolePolicy = rolePolicy_1.default;
    IAM.SAMLProvider = samlProvider_1.default;
    IAM.ServerCertificate = serverCertificate_1.default;
    IAM.ServiceLinkedRole = serviceLinkedRole_1.default;
    IAM.User = user_1.default;
    IAM.UserPolicy = userPolicy_1.default;
    IAM.UserToGroupAddition = userToGroupAddition_1.default;
    IAM.VirtualMFADevice = virtualMfaDevice_1.default;
})(IAM = exports.IAM || (exports.IAM = {}));
