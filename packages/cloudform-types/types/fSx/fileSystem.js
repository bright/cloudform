"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TagEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagEntry = TagEntry;
class LustreConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LustreConfiguration = LustreConfiguration;
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
FileSystem.TagEntry = TagEntry;
FileSystem.LustreConfiguration = LustreConfiguration;
FileSystem.WindowsConfiguration = WindowsConfiguration;
exports.default = FileSystem;
