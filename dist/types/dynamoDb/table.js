"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TimeToLiveSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::TimeToLiveSpecification', properties, dependsOn);
    }
}
exports.TimeToLiveSpecification = TimeToLiveSpecification;
class AttributeDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::AttributeDefinition', properties, dependsOn);
    }
}
exports.AttributeDefinition = AttributeDefinition;
class LocalSecondaryIndex extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::LocalSecondaryIndex', properties, dependsOn);
    }
}
exports.LocalSecondaryIndex = LocalSecondaryIndex;
class ProvisionedThroughput extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::ProvisionedThroughput', properties, dependsOn);
    }
}
exports.ProvisionedThroughput = ProvisionedThroughput;
class GlobalSecondaryIndex extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::GlobalSecondaryIndex', properties, dependsOn);
    }
}
exports.GlobalSecondaryIndex = GlobalSecondaryIndex;
class KeySchema extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::KeySchema', properties, dependsOn);
    }
}
exports.KeySchema = KeySchema;
class Projection extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::Projection', properties, dependsOn);
    }
}
exports.Projection = Projection;
class StreamSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::StreamSpecification', properties, dependsOn);
    }
}
exports.StreamSpecification = StreamSpecification;
class Table extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::Table', properties, dependsOn);
    }
}
exports.default = Table;
