"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticFileSystemTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EFS::ElasticFileSystemTag', properties, dependsOn);
    }
}
exports.ElasticFileSystemTag = ElasticFileSystemTag;
class FileSystem extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EFS::FileSystem', properties, dependsOn);
    }
}
exports.default = FileSystem;
