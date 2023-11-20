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
exports.Config = void 0;
const aggregationAuthorization_1 = require("./aggregationAuthorization");
const configRule_1 = require("./configRule");
const configurationAggregator_1 = require("./configurationAggregator");
const configurationRecorder_1 = require("./configurationRecorder");
const conformancePack_1 = require("./conformancePack");
const deliveryChannel_1 = require("./deliveryChannel");
const organizationConfigRule_1 = require("./organizationConfigRule");
const organizationConformancePack_1 = require("./organizationConformancePack");
const remediationConfiguration_1 = require("./remediationConfiguration");
const storedQuery_1 = require("./storedQuery");
var Config;
(function (Config) {
    Config.AggregationAuthorization = aggregationAuthorization_1.default;
    Config.ConfigRule = configRule_1.default;
    Config.ConfigurationAggregator = configurationAggregator_1.default;
    Config.ConfigurationRecorder = configurationRecorder_1.default;
    Config.ConformancePack = conformancePack_1.default;
    Config.DeliveryChannel = deliveryChannel_1.default;
    Config.OrganizationConfigRule = organizationConfigRule_1.default;
    Config.OrganizationConformancePack = organizationConformancePack_1.default;
    Config.RemediationConfiguration = remediationConfiguration_1.default;
    Config.StoredQuery = storedQuery_1.default;
})(Config = exports.Config || (exports.Config = {}));
