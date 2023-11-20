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
exports.RelationalDatabaseConfig = exports.RdsHttpEndpointConfig = exports.OpenSearchServiceConfig = exports.LambdaConfig = exports.HttpConfig = exports.EventBridgeConfig = exports.ElasticsearchConfig = exports.DynamoDBConfig = exports.DeltaSyncConfig = exports.AwsIamConfig = exports.AuthorizationConfig = void 0;
const resource_1 = require("../resource");
class AuthorizationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthorizationConfig = AuthorizationConfig;
class AwsIamConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsIamConfig = AwsIamConfig;
class DeltaSyncConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeltaSyncConfig = DeltaSyncConfig;
class DynamoDBConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBConfig = DynamoDBConfig;
class ElasticsearchConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchConfig = ElasticsearchConfig;
class EventBridgeConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventBridgeConfig = EventBridgeConfig;
class HttpConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpConfig = HttpConfig;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
class OpenSearchServiceConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OpenSearchServiceConfig = OpenSearchServiceConfig;
class RdsHttpEndpointConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RdsHttpEndpointConfig = RdsHttpEndpointConfig;
class RelationalDatabaseConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelationalDatabaseConfig = RelationalDatabaseConfig;
class DataSource extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppSync::DataSource', properties);
    }
}
exports.default = DataSource;
DataSource.AuthorizationConfig = AuthorizationConfig;
DataSource.AwsIamConfig = AwsIamConfig;
DataSource.DeltaSyncConfig = DeltaSyncConfig;
DataSource.DynamoDBConfig = DynamoDBConfig;
DataSource.ElasticsearchConfig = ElasticsearchConfig;
DataSource.EventBridgeConfig = EventBridgeConfig;
DataSource.HttpConfig = HttpConfig;
DataSource.LambdaConfig = LambdaConfig;
DataSource.OpenSearchServiceConfig = OpenSearchServiceConfig;
DataSource.RdsHttpEndpointConfig = RdsHttpEndpointConfig;
DataSource.RelationalDatabaseConfig = RelationalDatabaseConfig;
