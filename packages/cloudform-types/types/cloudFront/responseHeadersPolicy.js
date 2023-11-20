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
exports.XSSProtection = exports.StrictTransportSecurity = exports.ServerTimingHeadersConfig = exports.SecurityHeadersConfig = exports.ResponseHeadersPolicyConfig = exports.RemoveHeadersConfig = exports.RemoveHeader = exports.ReferrerPolicy = exports.FrameOptions = exports.CustomHeadersConfig = exports.CustomHeader = exports.CorsConfig = exports.ContentTypeOptions = exports.ContentSecurityPolicy = exports.AccessControlExposeHeaders = exports.AccessControlAllowOrigins = exports.AccessControlAllowMethods = exports.AccessControlAllowHeaders = void 0;
const resource_1 = require("../resource");
class AccessControlAllowHeaders {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlAllowHeaders = AccessControlAllowHeaders;
class AccessControlAllowMethods {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlAllowMethods = AccessControlAllowMethods;
class AccessControlAllowOrigins {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlAllowOrigins = AccessControlAllowOrigins;
class AccessControlExposeHeaders {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessControlExposeHeaders = AccessControlExposeHeaders;
class ContentSecurityPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContentSecurityPolicy = ContentSecurityPolicy;
class ContentTypeOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContentTypeOptions = ContentTypeOptions;
class CorsConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CorsConfig = CorsConfig;
class CustomHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomHeader = CustomHeader;
class CustomHeadersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomHeadersConfig = CustomHeadersConfig;
class FrameOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FrameOptions = FrameOptions;
class ReferrerPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferrerPolicy = ReferrerPolicy;
class RemoveHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RemoveHeader = RemoveHeader;
class RemoveHeadersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RemoveHeadersConfig = RemoveHeadersConfig;
class ResponseHeadersPolicyConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseHeadersPolicyConfig = ResponseHeadersPolicyConfig;
class SecurityHeadersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SecurityHeadersConfig = SecurityHeadersConfig;
class ServerTimingHeadersConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ServerTimingHeadersConfig = ServerTimingHeadersConfig;
class StrictTransportSecurity {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StrictTransportSecurity = StrictTransportSecurity;
class XSSProtection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.XSSProtection = XSSProtection;
class ResponseHeadersPolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CloudFront::ResponseHeadersPolicy', properties);
    }
}
exports.default = ResponseHeadersPolicy;
ResponseHeadersPolicy.AccessControlAllowHeaders = AccessControlAllowHeaders;
ResponseHeadersPolicy.AccessControlAllowMethods = AccessControlAllowMethods;
ResponseHeadersPolicy.AccessControlAllowOrigins = AccessControlAllowOrigins;
ResponseHeadersPolicy.AccessControlExposeHeaders = AccessControlExposeHeaders;
ResponseHeadersPolicy.ContentSecurityPolicy = ContentSecurityPolicy;
ResponseHeadersPolicy.ContentTypeOptions = ContentTypeOptions;
ResponseHeadersPolicy.CorsConfig = CorsConfig;
ResponseHeadersPolicy.CustomHeader = CustomHeader;
ResponseHeadersPolicy.CustomHeadersConfig = CustomHeadersConfig;
ResponseHeadersPolicy.FrameOptions = FrameOptions;
ResponseHeadersPolicy.ReferrerPolicy = ReferrerPolicy;
ResponseHeadersPolicy.RemoveHeader = RemoveHeader;
ResponseHeadersPolicy.RemoveHeadersConfig = RemoveHeadersConfig;
ResponseHeadersPolicy.ResponseHeadersPolicyConfig = ResponseHeadersPolicyConfig;
ResponseHeadersPolicy.SecurityHeadersConfig = SecurityHeadersConfig;
ResponseHeadersPolicy.ServerTimingHeadersConfig = ServerTimingHeadersConfig;
ResponseHeadersPolicy.StrictTransportSecurity = StrictTransportSecurity;
ResponseHeadersPolicy.XSSProtection = XSSProtection;
