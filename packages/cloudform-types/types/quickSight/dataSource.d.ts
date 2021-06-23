import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataSourceParameters {
    AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
    TeradataParameters?: TeradataParameters;
    RdsParameters?: RdsParameters;
    AthenaParameters?: AthenaParameters;
    SparkParameters?: SparkParameters;
    MariaDbParameters?: MariaDbParameters;
    OracleParameters?: OracleParameters;
    PrestoParameters?: PrestoParameters;
    RedshiftParameters?: RedshiftParameters;
    MySqlParameters?: MySqlParameters;
    SqlServerParameters?: SqlServerParameters;
    SnowflakeParameters?: SnowflakeParameters;
    AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
    PostgreSqlParameters?: PostgreSqlParameters;
    AuroraParameters?: AuroraParameters;
    S3Parameters?: S3Parameters;
    constructor(properties: DataSourceParameters);
}
export declare class AuroraPostgreSqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: AuroraPostgreSqlParameters);
}
export declare class DataSourceCredentials {
    CopySourceArn?: Value<string>;
    CredentialPair?: CredentialPair;
    constructor(properties: DataSourceCredentials);
}
export declare class CredentialPair {
    AlternateDataSourceParameters?: List<DataSourceParameters>;
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: CredentialPair);
}
export declare class SnowflakeParameters {
    Warehouse: Value<string>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: SnowflakeParameters);
}
export declare class SslProperties {
    DisableSsl?: Value<boolean>;
    constructor(properties: SslProperties);
}
export declare class S3Parameters {
    ManifestFileLocation: ManifestFileLocation;
    constructor(properties: S3Parameters);
}
export declare class PrestoParameters {
    Port: Value<number>;
    Host: Value<string>;
    Catalog: Value<string>;
    constructor(properties: PrestoParameters);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class SparkParameters {
    Port: Value<number>;
    Host: Value<string>;
    constructor(properties: SparkParameters);
}
export declare class AuroraParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: AuroraParameters);
}
export declare class MariaDbParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: MariaDbParameters);
}
export declare class TeradataParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: TeradataParameters);
}
export declare class AthenaParameters {
    WorkGroup?: Value<string>;
    constructor(properties: AthenaParameters);
}
export declare class ManifestFileLocation {
    Bucket: Value<string>;
    Key: Value<string>;
    constructor(properties: ManifestFileLocation);
}
export declare class MySqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: MySqlParameters);
}
export declare class OracleParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: OracleParameters);
}
export declare class AmazonElasticsearchParameters {
    Domain: Value<string>;
    constructor(properties: AmazonElasticsearchParameters);
}
export declare class DataSourceErrorInfo {
    Type?: Value<string>;
    Message?: Value<string>;
    constructor(properties: DataSourceErrorInfo);
}
export declare class VpcConnectionProperties {
    VpcConnectionArn: Value<string>;
    constructor(properties: VpcConnectionProperties);
}
export declare class RedshiftParameters {
    ClusterId?: Value<string>;
    Port?: Value<number>;
    Database: Value<string>;
    Host?: Value<string>;
    constructor(properties: RedshiftParameters);
}
export declare class PostgreSqlParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: PostgreSqlParameters);
}
export declare class RdsParameters {
    InstanceId: Value<string>;
    Database: Value<string>;
    constructor(properties: RdsParameters);
}
export declare class SqlServerParameters {
    Port: Value<number>;
    Database: Value<string>;
    Host: Value<string>;
    constructor(properties: SqlServerParameters);
}
export interface DataSourceProperties {
    AlternateDataSourceParameters?: List<DataSourceParameters>;
    AwsAccountId?: Value<string>;
    Credentials?: DataSourceCredentials;
    DataSourceId?: Value<string>;
    DataSourceParameters?: DataSourceParameters;
    ErrorInfo?: DataSourceErrorInfo;
    Name?: Value<string>;
    Permissions?: List<ResourcePermission>;
    SslProperties?: SslProperties;
    Tags?: List<ResourceTag>;
    Type?: Value<string>;
    VpcConnectionProperties?: VpcConnectionProperties;
}
export default class DataSource extends ResourceBase<DataSourceProperties> {
    static DataSourceParameters: typeof DataSourceParameters;
    static AuroraPostgreSqlParameters: typeof AuroraPostgreSqlParameters;
    static DataSourceCredentials: typeof DataSourceCredentials;
    static CredentialPair: typeof CredentialPair;
    static SnowflakeParameters: typeof SnowflakeParameters;
    static SslProperties: typeof SslProperties;
    static S3Parameters: typeof S3Parameters;
    static PrestoParameters: typeof PrestoParameters;
    static ResourcePermission: typeof ResourcePermission;
    static SparkParameters: typeof SparkParameters;
    static AuroraParameters: typeof AuroraParameters;
    static MariaDbParameters: typeof MariaDbParameters;
    static TeradataParameters: typeof TeradataParameters;
    static AthenaParameters: typeof AthenaParameters;
    static ManifestFileLocation: typeof ManifestFileLocation;
    static MySqlParameters: typeof MySqlParameters;
    static OracleParameters: typeof OracleParameters;
    static AmazonElasticsearchParameters: typeof AmazonElasticsearchParameters;
    static DataSourceErrorInfo: typeof DataSourceErrorInfo;
    static VpcConnectionProperties: typeof VpcConnectionProperties;
    static RedshiftParameters: typeof RedshiftParameters;
    static PostgreSqlParameters: typeof PostgreSqlParameters;
    static RdsParameters: typeof RdsParameters;
    static SqlServerParameters: typeof SqlServerParameters;
    constructor(properties?: DataSourceProperties);
}
