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
exports.User = exports.TagsEntry = exports.MaintenanceWindow = exports.LogList = exports.LdapServerMetadata = exports.EncryptionOptions = exports.ConfigurationId = void 0;
const resource_1 = require("../resource");
class ConfigurationId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConfigurationId = ConfigurationId;
class EncryptionOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionOptions = EncryptionOptions;
class LdapServerMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LdapServerMetadata = LdapServerMetadata;
class LogList {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogList = LogList;
class MaintenanceWindow {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindow = MaintenanceWindow;
class TagsEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagsEntry = TagsEntry;
class User {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.User = User;
class Broker extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AmazonMQ::Broker', properties);
    }
}
exports.default = Broker;
Broker.ConfigurationId = ConfigurationId;
Broker.EncryptionOptions = EncryptionOptions;
Broker.LdapServerMetadata = LdapServerMetadata;
Broker.LogList = LogList;
Broker.MaintenanceWindow = MaintenanceWindow;
Broker.TagsEntry = TagsEntry;
Broker.User = User;
