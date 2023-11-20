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
exports.UserAndGroupQuotas = exports.TieringPolicy = exports.SnaplockRetentionPeriod = exports.SnaplockConfiguration = exports.RetentionPeriod = exports.OriginSnapshot = exports.OpenZFSConfiguration = exports.OntapConfiguration = exports.NfsExports = exports.ClientConfigurations = exports.AutocommitPeriod = void 0;
const resource_1 = require("../resource");
class AutocommitPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutocommitPeriod = AutocommitPeriod;
class ClientConfigurations {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientConfigurations = ClientConfigurations;
class NfsExports {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NfsExports = NfsExports;
class OntapConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OntapConfiguration = OntapConfiguration;
class OpenZFSConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenZFSConfiguration = OpenZFSConfiguration;
class OriginSnapshot {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OriginSnapshot = OriginSnapshot;
class RetentionPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionPeriod = RetentionPeriod;
class SnaplockConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnaplockConfiguration = SnaplockConfiguration;
class SnaplockRetentionPeriod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnaplockRetentionPeriod = SnaplockRetentionPeriod;
class TieringPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TieringPolicy = TieringPolicy;
class UserAndGroupQuotas {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserAndGroupQuotas = UserAndGroupQuotas;
class Volume extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::FSx::Volume', properties);
    }
}
exports.default = Volume;
Volume.AutocommitPeriod = AutocommitPeriod;
Volume.ClientConfigurations = ClientConfigurations;
Volume.NfsExports = NfsExports;
Volume.OntapConfiguration = OntapConfiguration;
Volume.OpenZFSConfiguration = OpenZFSConfiguration;
Volume.OriginSnapshot = OriginSnapshot;
Volume.RetentionPeriod = RetentionPeriod;
Volume.SnaplockConfiguration = SnaplockConfiguration;
Volume.SnaplockRetentionPeriod = SnaplockRetentionPeriod;
Volume.TieringPolicy = TieringPolicy;
Volume.UserAndGroupQuotas = UserAndGroupQuotas;
