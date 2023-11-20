"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryCatalogData = void 0;
const resource_1 = require("../resource");
class RepositoryCatalogData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RepositoryCatalogData = RepositoryCatalogData;
class PublicRepository extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ECR::PublicRepository', properties || {});
    }
}
exports.default = PublicRepository;
PublicRepository.RepositoryCatalogData = RepositoryCatalogData;
