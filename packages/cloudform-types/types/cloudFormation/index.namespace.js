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
exports.CloudFormation = void 0;
const customResource_1 = require("./customResource");
const hookDefaultVersion_1 = require("./hookDefaultVersion");
const hookTypeConfig_1 = require("./hookTypeConfig");
const hookVersion_1 = require("./hookVersion");
const macro_1 = require("./macro");
const moduleDefaultVersion_1 = require("./moduleDefaultVersion");
const moduleVersion_1 = require("./moduleVersion");
const publicTypeVersion_1 = require("./publicTypeVersion");
const publisher_1 = require("./publisher");
const resourceDefaultVersion_1 = require("./resourceDefaultVersion");
const resourceVersion_1 = require("./resourceVersion");
const stack_1 = require("./stack");
const stackSet_1 = require("./stackSet");
const typeActivation_1 = require("./typeActivation");
const waitCondition_1 = require("./waitCondition");
const waitConditionHandle_1 = require("./waitConditionHandle");
var CloudFormation;
(function (CloudFormation) {
    CloudFormation.CustomResource = customResource_1.default;
    CloudFormation.HookDefaultVersion = hookDefaultVersion_1.default;
    CloudFormation.HookTypeConfig = hookTypeConfig_1.default;
    CloudFormation.HookVersion = hookVersion_1.default;
    CloudFormation.Macro = macro_1.default;
    CloudFormation.ModuleDefaultVersion = moduleDefaultVersion_1.default;
    CloudFormation.ModuleVersion = moduleVersion_1.default;
    CloudFormation.PublicTypeVersion = publicTypeVersion_1.default;
    CloudFormation.Publisher = publisher_1.default;
    CloudFormation.ResourceDefaultVersion = resourceDefaultVersion_1.default;
    CloudFormation.ResourceVersion = resourceVersion_1.default;
    CloudFormation.Stack = stack_1.default;
    CloudFormation.StackSet = stackSet_1.default;
    CloudFormation.TypeActivation = typeActivation_1.default;
    CloudFormation.WaitCondition = waitCondition_1.default;
    CloudFormation.WaitConditionHandle = waitConditionHandle_1.default;
})(CloudFormation = exports.CloudFormation || (exports.CloudFormation = {}));
