/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AmazonElasticsearchParameters {
    Domain!: Value<string>

    constructor(properties: AmazonElasticsearchParameters) {
        Object.assign(this, properties)
    }
}

export class AmazonOpenSearchParameters {
    Domain!: Value<string>

    constructor(properties: AmazonOpenSearchParameters) {
        Object.assign(this, properties)
    }
}

export class AthenaParameters {
    WorkGroup?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: AthenaParameters) {
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

export class AuroraPostgreSqlParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: AuroraPostgreSqlParameters) {
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

export class DataSourceCredentials {
    SecretArn?: Value<string>
    CopySourceArn?: Value<string>
    CredentialPair?: CredentialPair

    constructor(properties: DataSourceCredentials) {
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

export class DataSourceParameters {
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters
    TeradataParameters?: TeradataParameters
    RdsParameters?: RdsParameters
    AthenaParameters?: AthenaParameters
    SparkParameters?: SparkParameters
    MariaDbParameters?: MariaDbParameters
    OracleParameters?: OracleParameters
    PrestoParameters?: PrestoParameters
    StarburstParameters?: StarburstParameters
    RedshiftParameters?: RedshiftParameters
    MySqlParameters?: MySqlParameters
    SqlServerParameters?: SqlServerParameters
    SnowflakeParameters?: SnowflakeParameters
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters
    AmazonOpenSearchParameters?: AmazonOpenSearchParameters
    PostgreSqlParameters?: PostgreSqlParameters
    AuroraParameters?: AuroraParameters
    S3Parameters?: S3Parameters
    TrinoParameters?: TrinoParameters
    DatabricksParameters?: DatabricksParameters

    constructor(properties: DataSourceParameters) {
        Object.assign(this, properties)
    }
}

export class DatabricksParameters {
    Port!: Value<number>
    Host!: Value<string>
    SqlEndpointPath!: Value<string>

    constructor(properties: DatabricksParameters) {
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

export class MariaDbParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: MariaDbParameters) {
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

export class PostgreSqlParameters {
    Port!: Value<number>
    Database!: Value<string>
    Host!: Value<string>

    constructor(properties: PostgreSqlParameters) {
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

export class RdsParameters {
    InstanceId!: Value<string>
    Database!: Value<string>

    constructor(properties: RdsParameters) {
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

export class ResourcePermission {
    Actions!: List<Value<string>>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class S3Parameters {
    ManifestFileLocation!: ManifestFileLocation
    RoleArn?: Value<string>

    constructor(properties: S3Parameters) {
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

export class SparkParameters {
    Port!: Value<number>
    Host!: Value<string>

    constructor(properties: SparkParameters) {
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

export class SslProperties {
    DisableSsl?: Value<boolean>

    constructor(properties: SslProperties) {
        Object.assign(this, properties)
    }
}

export class StarburstParameters {
    Port!: Value<number>
    ProductType?: Value<string>
    Host!: Value<string>
    Catalog!: Value<string>

    constructor(properties: StarburstParameters) {
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

export class TrinoParameters {
    Port!: Value<number>
    Host!: Value<string>
    Catalog!: Value<string>

    constructor(properties: TrinoParameters) {
        Object.assign(this, properties)
    }
}

export class VpcConnectionProperties {
    VpcConnectionArn!: Value<string>

    constructor(properties: VpcConnectionProperties) {
        Object.assign(this, properties)
    }
}

export interface DataSourceProperties {
    DataSourceParameters?: DataSourceParameters
    Type?: Value<string>
    VpcConnectionProperties?: VpcConnectionProperties
    AlternateDataSourceParameters?: List<DataSourceParameters>
    ErrorInfo?: DataSourceErrorInfo
    AwsAccountId?: Value<string>
    Permissions?: List<ResourcePermission>
    SslProperties?: SslProperties
    Credentials?: DataSourceCredentials
    DataSourceId?: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class DataSource extends ResourceBase<DataSourceProperties> {
    static AmazonElasticsearchParameters = AmazonElasticsearchParameters
    static AmazonOpenSearchParameters = AmazonOpenSearchParameters
    static AthenaParameters = AthenaParameters
    static AuroraParameters = AuroraParameters
    static AuroraPostgreSqlParameters = AuroraPostgreSqlParameters
    static CredentialPair = CredentialPair
    static DataSourceCredentials = DataSourceCredentials
    static DataSourceErrorInfo = DataSourceErrorInfo
    static DataSourceParameters = DataSourceParameters
    static DatabricksParameters = DatabricksParameters
    static ManifestFileLocation = ManifestFileLocation
    static MariaDbParameters = MariaDbParameters
    static MySqlParameters = MySqlParameters
    static OracleParameters = OracleParameters
    static PostgreSqlParameters = PostgreSqlParameters
    static PrestoParameters = PrestoParameters
    static RdsParameters = RdsParameters
    static RedshiftParameters = RedshiftParameters
    static ResourcePermission = ResourcePermission
    static S3Parameters = S3Parameters
    static SnowflakeParameters = SnowflakeParameters
    static SparkParameters = SparkParameters
    static SqlServerParameters = SqlServerParameters
    static SslProperties = SslProperties
    static StarburstParameters = StarburstParameters
    static TeradataParameters = TeradataParameters
    static TrinoParameters = TrinoParameters
    static VpcConnectionProperties = VpcConnectionProperties

    constructor(properties?: DataSourceProperties) {
        super('AWS::QuickSight::DataSource', properties || {})
    }
}
