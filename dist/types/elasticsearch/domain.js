"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VPCOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::VPCOptions', properties, dependsOn);
    }
}
exports.VPCOptions = VPCOptions;
class ElasticsearchClusterConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::ElasticsearchClusterConfig', properties, dependsOn);
    }
}
exports.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
class SnapshotOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::SnapshotOptions', properties, dependsOn);
    }
}
exports.SnapshotOptions = SnapshotOptions;
class EBSOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::EBSOptions', properties, dependsOn);
    }
}
exports.EBSOptions = EBSOptions;
class Domain extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::Domain', properties, dependsOn);
    }
}
exports.default = Domain;
