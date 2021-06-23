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
const resolverQueryLoggingConfig_1 = require("./resolverQueryLoggingConfig");
const firewallRuleGroupAssociation_1 = require("./firewallRuleGroupAssociation");
const resolverQueryLoggingConfigAssociation_1 = require("./resolverQueryLoggingConfigAssociation");
const resolverDnssecConfig_1 = require("./resolverDnssecConfig");
const firewallDomainList_1 = require("./firewallDomainList");
const resolverRule_1 = require("./resolverRule");
const firewallRuleGroup_1 = require("./firewallRuleGroup");
const resolverRuleAssociation_1 = require("./resolverRuleAssociation");
const resolverEndpoint_1 = require("./resolverEndpoint");
var Route53Resolver;
(function (Route53Resolver) {
    Route53Resolver.ResolverQueryLoggingConfig = resolverQueryLoggingConfig_1.default;
    Route53Resolver.FirewallRuleGroupAssociation = firewallRuleGroupAssociation_1.default;
    Route53Resolver.ResolverQueryLoggingConfigAssociation = resolverQueryLoggingConfigAssociation_1.default;
    Route53Resolver.ResolverDNSSECConfig = resolverDnssecConfig_1.default;
    Route53Resolver.FirewallDomainList = firewallDomainList_1.default;
    Route53Resolver.ResolverRule = resolverRule_1.default;
    Route53Resolver.FirewallRuleGroup = firewallRuleGroup_1.default;
    Route53Resolver.ResolverRuleAssociation = resolverRuleAssociation_1.default;
    Route53Resolver.ResolverEndpoint = resolverEndpoint_1.default;
})(Route53Resolver = exports.Route53Resolver || (exports.Route53Resolver = {}));
