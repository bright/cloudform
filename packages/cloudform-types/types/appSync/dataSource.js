"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RelationalDatabaseConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RelationalDatabaseConfig = RelationalDatabaseConfig;
class AwsIamConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AwsIamConfig = AwsIamConfig;
class DynamoDBConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDBConfig = DynamoDBConfig;
class AuthorizationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuthorizationConfig = AuthorizationConfig;
class RdsHttpEndpointConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RdsHttpEndpointConfig = RdsHttpEndpointConfig;
class LambdaConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaConfig = LambdaConfig;
class HttpConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpConfig = HttpConfig;
class ElasticsearchConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchConfig = ElasticsearchConfig;
class DataSource extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppSync::DataSource', properties);
    }
}
DataSource.RelationalDatabaseConfig = RelationalDatabaseConfig;
DataSource.AwsIamConfig = AwsIamConfig;
DataSource.DynamoDBConfig = DynamoDBConfig;
DataSource.AuthorizationConfig = AuthorizationConfig;
DataSource.RdsHttpEndpointConfig = RdsHttpEndpointConfig;
DataSource.LambdaConfig = LambdaConfig;
DataSource.HttpConfig = HttpConfig;
DataSource.ElasticsearchConfig = ElasticsearchConfig;
exports.default = DataSource;
