"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticsearchClusterConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::ElasticsearchClusterConfig', properties, dependsOn);
    }
}
exports.default = ElasticsearchClusterConfig;
