"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class KinesisSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisSettings = KinesisSettings;
class S3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Settings = S3Settings;
class PostgreSqlSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PostgreSqlSettings = PostgreSqlSettings;
class MicrosoftSqlServerSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MicrosoftSqlServerSettings = MicrosoftSqlServerSettings;
class MongoDbSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MongoDbSettings = MongoDbSettings;
class KafkaSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaSettings = KafkaSettings;
class MySqlSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MySqlSettings = MySqlSettings;
class NeptuneSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NeptuneSettings = NeptuneSettings;
class IbmDb2Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IbmDb2Settings = IbmDb2Settings;
class ElasticsearchSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchSettings = ElasticsearchSettings;
class OracleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OracleSettings = OracleSettings;
class DynamoDbSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDbSettings = DynamoDbSettings;
class DocDbSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocDbSettings = DocDbSettings;
class SybaseSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SybaseSettings = SybaseSettings;
class RedshiftSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftSettings = RedshiftSettings;
class Endpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DMS::Endpoint', properties);
    }
}
exports.default = Endpoint;
Endpoint.KinesisSettings = KinesisSettings;
Endpoint.S3Settings = S3Settings;
Endpoint.PostgreSqlSettings = PostgreSqlSettings;
Endpoint.MicrosoftSqlServerSettings = MicrosoftSqlServerSettings;
Endpoint.MongoDbSettings = MongoDbSettings;
Endpoint.KafkaSettings = KafkaSettings;
Endpoint.MySqlSettings = MySqlSettings;
Endpoint.NeptuneSettings = NeptuneSettings;
Endpoint.IbmDb2Settings = IbmDb2Settings;
Endpoint.ElasticsearchSettings = ElasticsearchSettings;
Endpoint.OracleSettings = OracleSettings;
Endpoint.DynamoDbSettings = DynamoDbSettings;
Endpoint.DocDbSettings = DocDbSettings;
Endpoint.SybaseSettings = SybaseSettings;
Endpoint.RedshiftSettings = RedshiftSettings;
