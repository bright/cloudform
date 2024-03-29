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
exports.SES = void 0;
const configurationSet_1 = require("./configurationSet");
const configurationSetEventDestination_1 = require("./configurationSetEventDestination");
const contactList_1 = require("./contactList");
const dedicatedIpPool_1 = require("./dedicatedIpPool");
const emailIdentity_1 = require("./emailIdentity");
const receiptFilter_1 = require("./receiptFilter");
const receiptRule_1 = require("./receiptRule");
const receiptRuleSet_1 = require("./receiptRuleSet");
const template_1 = require("./template");
const vdmAttributes_1 = require("./vdmAttributes");
var SES;
(function (SES) {
    SES.ConfigurationSet = configurationSet_1.default;
    SES.ConfigurationSetEventDestination = configurationSetEventDestination_1.default;
    SES.ContactList = contactList_1.default;
    SES.DedicatedIpPool = dedicatedIpPool_1.default;
    SES.EmailIdentity = emailIdentity_1.default;
    SES.ReceiptFilter = receiptFilter_1.default;
    SES.ReceiptRule = receiptRule_1.default;
    SES.ReceiptRuleSet = receiptRuleSet_1.default;
    SES.Template = template_1.default;
    SES.VdmAttributes = vdmAttributes_1.default;
})(SES = exports.SES || (exports.SES = {}));
