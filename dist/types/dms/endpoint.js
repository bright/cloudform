"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3Settings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DMS::S3Settings', properties, dependsOn);
    }
}
exports.S3Settings = S3Settings;
class MongoDbSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DMS::MongoDbSettings', properties, dependsOn);
    }
}
exports.MongoDbSettings = MongoDbSettings;
class DynamoDbSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DMS::DynamoDbSettings', properties, dependsOn);
    }
}
exports.DynamoDbSettings = DynamoDbSettings;
class Endpoint extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DMS::Endpoint', properties, dependsOn);
    }
}
exports.default = Endpoint;
