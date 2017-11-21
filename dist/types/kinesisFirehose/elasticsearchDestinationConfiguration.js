"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticsearchDestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::ElasticsearchDestinationConfiguration', properties, dependsOn);
    }
}
exports.default = ElasticsearchDestinationConfiguration;
