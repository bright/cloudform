"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const customMetric_1 = require("./customMetric");
const mitigationAction_1 = require("./mitigationAction");
const securityProfile_1 = require("./securityProfile");
const topicRule_1 = require("./topicRule");
const domainConfiguration_1 = require("./domainConfiguration");
const accountAuditConfiguration_1 = require("./accountAuditConfiguration");
const authorizer_1 = require("./authorizer");
const dimension_1 = require("./dimension");
const provisioningTemplate_1 = require("./provisioningTemplate");
const thing_1 = require("./thing");
const policy_1 = require("./policy");
const scheduledAudit_1 = require("./scheduledAudit");
const policyPrincipalAttachment_1 = require("./policyPrincipalAttachment");
const thingPrincipalAttachment_1 = require("./thingPrincipalAttachment");
const topicRuleDestination_1 = require("./topicRuleDestination");
const certificate_1 = require("./certificate");
var IoT;
(function (IoT) {
    IoT.CustomMetric = customMetric_1.default;
    IoT.MitigationAction = mitigationAction_1.default;
    IoT.SecurityProfile = securityProfile_1.default;
    IoT.TopicRule = topicRule_1.default;
    IoT.DomainConfiguration = domainConfiguration_1.default;
    IoT.AccountAuditConfiguration = accountAuditConfiguration_1.default;
    IoT.Authorizer = authorizer_1.default;
    IoT.Dimension = dimension_1.default;
    IoT.ProvisioningTemplate = provisioningTemplate_1.default;
    IoT.Thing = thing_1.default;
    IoT.Policy = policy_1.default;
    IoT.ScheduledAudit = scheduledAudit_1.default;
    IoT.PolicyPrincipalAttachment = policyPrincipalAttachment_1.default;
    IoT.ThingPrincipalAttachment = thingPrincipalAttachment_1.default;
    IoT.TopicRuleDestination = topicRuleDestination_1.default;
    IoT.Certificate = certificate_1.default;
})(IoT = exports.IoT || (exports.IoT = {}));
