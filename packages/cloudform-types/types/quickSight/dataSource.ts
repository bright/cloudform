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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataSourceParameters {
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters
    TeradataParameters?: TeradataParameters
    RdsParameters?: RdsParameters
    AthenaParameters?: AthenaParameters
    SparkParameters?: SparkParameters
    MariaDbParameters?: MariaDbParameters
    OracleParameters?: OracleParameters
    PrestoParameters?: PrestoParameters
    RedshiftParameters?: RedshiftParameters
    MySqlParameters?: MySqlParameters
    SqlServerParameters?: SqlServerParameters
    SnowflakeParameters?: SnowflakeParameters
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters
    PostgreSqlParameters?: PostgreSqlParameters
    AuroraParameters?: AuroraParameters
    S3Parameters?: S3Parameters

    constructor(properties: DataSourceParameters) {
        Object.assign(this, properties)
    }
}

export class AuroraPostgreSqlParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: AuroraPostgreSqlParameters) {
        Object.assign(this, properties)
    }
}

export class DataSourceCredentials {
    CopySourceArn?: Value<string>
    CredentialPair?: CredentialPair

    constructor(properties: DataSourceCredentials) {
        Object.assign(this, properties)
    }
}

export class CredentialPair {
    AlternateDataSourceParameters?: List<DataSourceParameters>
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: CredentialPair) {
        Object.assign(this, properties)
    }
}

export class SnowflakeParameters {
    Warehouse!: Value<string>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: SnowflakeParameters) {
        Object.assign(this, properties)
    }
}

export class SslProperties {
    DisableSsl?: Value<boolean>

    constructor(properties: SslProperties) {
        Object.assign(this, properties)
    }
}

export class S3Parameters {
    ManifestFileLocation!: ManifestFileLocation

    constructor(properties: S3Parameters) {
        Object.assign(this, properties)
    }
}

export class PrestoParameters {
    Port!: Value<number>
    Host!: Value<string>
    Catalog!: Value<string>

    constructor(properties: PrestoParameters) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Actions!: List<Value<string>>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class SparkParameters {
    Port!: Value<number>
    Host!: Value<string>

    constructor(properties: SparkParameters) {
        Object.assign(this, properties)
    }
}

export class AuroraParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: AuroraParameters) {
        Object.assign(this, properties)
    }
}

export class MariaDbParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: MariaDbParameters) {
        Object.assign(this, properties)
    }
}

export class TeradataParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: TeradataParameters) {
        Object.assign(this, properties)
    }
}

export class AthenaParameters {
    WorkGroup?: Value<string>

    constructor(properties: AthenaParameters) {
        Object.assign(this, properties)
    }
}

export class ManifestFileLocation {
    Bucket!: Value<string>
    Key!: Value<string>

    constructor(properties: ManifestFileLocation) {
        Object.assign(this, properties)
    }
}

export class MySqlParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: MySqlParameters) {
        Object.assign(this, properties)
    }
}

export class OracleParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: OracleParameters) {
        Object.assign(this, properties)
    }
}

export class AmazonElasticsearchParameters {
    Domain!: Value<string>

    constructor(properties: AmazonElasticsearchParameters) {
        Object.assign(this, properties)
    }
}

export class DataSourceErrorInfo {
    Type?: Value<string>
    Message?: Value<string>

    constructor(properties: DataSourceErrorInfo) {
        Object.assign(this, properties)
    }
}

export class VpcConnectionProperties {
    VpcConnectionArn!: Value<string>

    constructor(properties: VpcConnectionProperties) {
        Object.assign(this, properties)
    }
}

export class RedshiftParameters {
    ClusterId?: Value<string>
    Port?: Value<number>
    Database!: Value<string>
    Host?: Value<string>

    constructor(properties: RedshiftParameters) {
        Object.assign(this, properties)
    }
}

export class PostgreSqlParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: PostgreSqlParameters) {
        Object.assign(this, properties)
    }
}

export class RdsParameters {
    InstanceId!: Value<string>
    Database!: Value<string>

    constructor(properties: RdsParameters) {
        Object.assign(this, properties)
    }
}

export class SqlServerParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: SqlServerParameters) {
        Object.assign(this, properties)
    }
}

export interface DataSourceProperties {
    AlternateDataSourceParameters?: List<DataSourceParameters>
    AwsAccountId?: Value<string>
    Credentials?: DataSourceCredentials
    DataSourceId?: Value<string>
    DataSourceParameters?: DataSourceParameters
    ErrorInfo?: DataSourceErrorInfo
    Name?: Value<string>
    Permissions?: List<ResourcePermission>
    SslProperties?: SslProperties
    Tags?: List<ResourceTag>
    Type?: Value<string>
    VpcConnectionProperties?: VpcConnectionProperties
}

export default class DataSource extends ResourceBase<DataSourceProperties> {
    static DataSourceParameters = DataSourceParameters
    static AuroraPostgreSqlParameters = AuroraPostgreSqlParameters
    static DataSourceCredentials = DataSourceCredentials
    static CredentialPair = CredentialPair
    static SnowflakeParameters = SnowflakeParameters
    static SslProperties = SslProperties
    static S3Parameters = S3Parameters
    static PrestoParameters = PrestoParameters
    static ResourcePermission = ResourcePermission
    static SparkParameters = SparkParameters
    static AuroraParameters = AuroraParameters
    static MariaDbParameters = MariaDbParameters
    static TeradataParameters = TeradataParameters
    static AthenaParameters = AthenaParameters
    static ManifestFileLocation = ManifestFileLocation
    static MySqlParameters = MySqlParameters
    static OracleParameters = OracleParameters
    static AmazonElasticsearchParameters = AmazonElasticsearchParameters
    static DataSourceErrorInfo = DataSourceErrorInfo
    static VpcConnectionProperties = VpcConnectionProperties
    static RedshiftParameters = RedshiftParameters
    static PostgreSqlParameters = PostgreSqlParameters
    static RdsParameters = RdsParameters
    static SqlServerParameters = SqlServerParameters

    constructor(properties?: DataSourceProperties) {
        super('AWS::QuickSight::DataSource', properties || {})
    }
}
