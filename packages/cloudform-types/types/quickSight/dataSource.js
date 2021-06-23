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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DataSourceParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSourceParameters = DataSourceParameters;
class AuroraPostgreSqlParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuroraPostgreSqlParameters = AuroraPostgreSqlParameters;
class DataSourceCredentials {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSourceCredentials = DataSourceCredentials;
class CredentialPair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CredentialPair = CredentialPair;
class SnowflakeParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnowflakeParameters = SnowflakeParameters;
class SslProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SslProperties = SslProperties;
class S3Parameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Parameters = S3Parameters;
class PrestoParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PrestoParameters = PrestoParameters;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class SparkParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SparkParameters = SparkParameters;
class AuroraParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AuroraParameters = AuroraParameters;
class MariaDbParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MariaDbParameters = MariaDbParameters;
class TeradataParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TeradataParameters = TeradataParameters;
class AthenaParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AthenaParameters = AthenaParameters;
class ManifestFileLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ManifestFileLocation = ManifestFileLocation;
class MySqlParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MySqlParameters = MySqlParameters;
class OracleParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OracleParameters = OracleParameters;
class AmazonElasticsearchParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AmazonElasticsearchParameters = AmazonElasticsearchParameters;
class DataSourceErrorInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataSourceErrorInfo = DataSourceErrorInfo;
class VpcConnectionProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConnectionProperties = VpcConnectionProperties;
class RedshiftParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RedshiftParameters = RedshiftParameters;
class PostgreSqlParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PostgreSqlParameters = PostgreSqlParameters;
class RdsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RdsParameters = RdsParameters;
class SqlServerParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SqlServerParameters = SqlServerParameters;
class DataSource extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::DataSource', properties || {});
    }
}
exports.default = DataSource;
DataSource.DataSourceParameters = DataSourceParameters;
DataSource.AuroraPostgreSqlParameters = AuroraPostgreSqlParameters;
DataSource.DataSourceCredentials = DataSourceCredentials;
DataSource.CredentialPair = CredentialPair;
DataSource.SnowflakeParameters = SnowflakeParameters;
DataSource.SslProperties = SslProperties;
DataSource.S3Parameters = S3Parameters;
DataSource.PrestoParameters = PrestoParameters;
DataSource.ResourcePermission = ResourcePermission;
DataSource.SparkParameters = SparkParameters;
DataSource.AuroraParameters = AuroraParameters;
DataSource.MariaDbParameters = MariaDbParameters;
DataSource.TeradataParameters = TeradataParameters;
DataSource.AthenaParameters = AthenaParameters;
DataSource.ManifestFileLocation = ManifestFileLocation;
DataSource.MySqlParameters = MySqlParameters;
DataSource.OracleParameters = OracleParameters;
DataSource.AmazonElasticsearchParameters = AmazonElasticsearchParameters;
DataSource.DataSourceErrorInfo = DataSourceErrorInfo;
DataSource.VpcConnectionProperties = VpcConnectionProperties;
DataSource.RedshiftParameters = RedshiftParameters;
DataSource.PostgreSqlParameters = PostgreSqlParameters;
DataSource.RdsParameters = RdsParameters;
DataSource.SqlServerParameters = SqlServerParameters;
