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
exports.AppSync = void 0;
const apiCache_1 = require("./apiCache");
const apiKey_1 = require("./apiKey");
const dataSource_1 = require("./dataSource");
const domainName_1 = require("./domainName");
const domainNameApiAssociation_1 = require("./domainNameApiAssociation");
const functionConfiguration_1 = require("./functionConfiguration");
const graphQlApi_1 = require("./graphQlApi");
const graphQlSchema_1 = require("./graphQlSchema");
const resolver_1 = require("./resolver");
const sourceApiAssociation_1 = require("./sourceApiAssociation");
var AppSync;
(function (AppSync) {
    AppSync.ApiCache = apiCache_1.default;
    AppSync.ApiKey = apiKey_1.default;
    AppSync.DataSource = dataSource_1.default;
    AppSync.DomainName = domainName_1.default;
    AppSync.DomainNameApiAssociation = domainNameApiAssociation_1.default;
    AppSync.FunctionConfiguration = functionConfiguration_1.default;
    AppSync.GraphQLApi = graphQlApi_1.default;
    AppSync.GraphQLSchema = graphQlSchema_1.default;
    AppSync.Resolver = resolver_1.default;
    AppSync.SourceApiAssociation = sourceApiAssociation_1.default;
})(AppSync = exports.AppSync || (exports.AppSync = {}));
