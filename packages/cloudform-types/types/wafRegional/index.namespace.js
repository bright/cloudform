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
exports.WAFRegional = void 0;
const byteMatchSet_1 = require("./byteMatchSet");
const geoMatchSet_1 = require("./geoMatchSet");
const ipSet_1 = require("./ipSet");
const rateBasedRule_1 = require("./rateBasedRule");
const regexPatternSet_1 = require("./regexPatternSet");
const rule_1 = require("./rule");
const sizeConstraintSet_1 = require("./sizeConstraintSet");
const sqlInjectionMatchSet_1 = require("./sqlInjectionMatchSet");
const webAcl_1 = require("./webAcl");
const webAclAssociation_1 = require("./webAclAssociation");
const xssMatchSet_1 = require("./xssMatchSet");
var WAFRegional;
(function (WAFRegional) {
    WAFRegional.ByteMatchSet = byteMatchSet_1.default;
    WAFRegional.GeoMatchSet = geoMatchSet_1.default;
    WAFRegional.IPSet = ipSet_1.default;
    WAFRegional.RateBasedRule = rateBasedRule_1.default;
    WAFRegional.RegexPatternSet = regexPatternSet_1.default;
    WAFRegional.Rule = rule_1.default;
    WAFRegional.SizeConstraintSet = sizeConstraintSet_1.default;
    WAFRegional.SqlInjectionMatchSet = sqlInjectionMatchSet_1.default;
    WAFRegional.WebACL = webAcl_1.default;
    WAFRegional.WebACLAssociation = webAclAssociation_1.default;
    WAFRegional.XssMatchSet = xssMatchSet_1.default;
})(WAFRegional = exports.WAFRegional || (exports.WAFRegional = {}));
