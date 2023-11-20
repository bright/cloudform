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
exports.SybaseSettings = exports.S3Settings = exports.RedshiftSettings = exports.RedisSettings = exports.PostgreSqlSettings = exports.OracleSettings = exports.NeptuneSettings = exports.MySqlSettings = exports.MongoDbSettings = exports.MicrosoftSqlServerSettings = exports.KinesisSettings = exports.KafkaSettings = exports.IbmDb2Settings = exports.GcpMySQLSettings = exports.ElasticsearchSettings = exports.DynamoDbSettings = exports.DocDbSettings = void 0;
const resource_1 = require("../resource");
class DocDbSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DocDbSettings = DocDbSettings;
class DynamoDbSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DynamoDbSettings = DynamoDbSettings;
class ElasticsearchSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchSettings = ElasticsearchSettings;
class GcpMySQLSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GcpMySQLSettings = GcpMySQLSettings;
class IbmDb2Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IbmDb2Settings = IbmDb2Settings;
class KafkaSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KafkaSettings = KafkaSettings;
class KinesisSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisSettings = KinesisSettings;
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
class OracleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OracleSettings = OracleSettings;
class PostgreSqlSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PostgreSqlSettings = PostgreSqlSettings;
class RedisSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedisSettings = RedisSettings;
class RedshiftSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftSettings = RedshiftSettings;
class S3Settings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Settings = S3Settings;
class SybaseSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SybaseSettings = SybaseSettings;
class Endpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DMS::Endpoint', properties);
    }
}
exports.default = Endpoint;
Endpoint.DocDbSettings = DocDbSettings;
Endpoint.DynamoDbSettings = DynamoDbSettings;
Endpoint.ElasticsearchSettings = ElasticsearchSettings;
Endpoint.GcpMySQLSettings = GcpMySQLSettings;
Endpoint.IbmDb2Settings = IbmDb2Settings;
Endpoint.KafkaSettings = KafkaSettings;
Endpoint.KinesisSettings = KinesisSettings;
Endpoint.MicrosoftSqlServerSettings = MicrosoftSqlServerSettings;
Endpoint.MongoDbSettings = MongoDbSettings;
Endpoint.MySqlSettings = MySqlSettings;
Endpoint.NeptuneSettings = NeptuneSettings;
Endpoint.OracleSettings = OracleSettings;
Endpoint.PostgreSqlSettings = PostgreSqlSettings;
Endpoint.RedisSettings = RedisSettings;
Endpoint.RedshiftSettings = RedshiftSettings;
Endpoint.S3Settings = S3Settings;
Endpoint.SybaseSettings = SybaseSettings;
