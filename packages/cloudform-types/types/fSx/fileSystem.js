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
exports.WindowsConfiguration = exports.UserAndGroupQuotas = exports.SelfManagedActiveDirectoryConfiguration = exports.RootVolumeConfiguration = exports.OpenZFSConfiguration = exports.OntapConfiguration = exports.NfsExports = exports.LustreConfiguration = exports.DiskIopsConfiguration = exports.ClientConfigurations = exports.AuditLogConfiguration = void 0;
const resource_1 = require("../resource");
class AuditLogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuditLogConfiguration = AuditLogConfiguration;
class ClientConfigurations {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientConfigurations = ClientConfigurations;
class DiskIopsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DiskIopsConfiguration = DiskIopsConfiguration;
class LustreConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LustreConfiguration = LustreConfiguration;
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
class RootVolumeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RootVolumeConfiguration = RootVolumeConfiguration;
class SelfManagedActiveDirectoryConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SelfManagedActiveDirectoryConfiguration = SelfManagedActiveDirectoryConfiguration;
class UserAndGroupQuotas {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UserAndGroupQuotas = UserAndGroupQuotas;
class WindowsConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WindowsConfiguration = WindowsConfiguration;
class FileSystem extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::FSx::FileSystem', properties);
    }
}
exports.default = FileSystem;
FileSystem.AuditLogConfiguration = AuditLogConfiguration;
FileSystem.ClientConfigurations = ClientConfigurations;
FileSystem.DiskIopsConfiguration = DiskIopsConfiguration;
FileSystem.LustreConfiguration = LustreConfiguration;
FileSystem.NfsExports = NfsExports;
FileSystem.OntapConfiguration = OntapConfiguration;
FileSystem.OpenZFSConfiguration = OpenZFSConfiguration;
FileSystem.RootVolumeConfiguration = RootVolumeConfiguration;
FileSystem.SelfManagedActiveDirectoryConfiguration = SelfManagedActiveDirectoryConfiguration;
FileSystem.UserAndGroupQuotas = UserAndGroupQuotas;
FileSystem.WindowsConfiguration = WindowsConfiguration;
