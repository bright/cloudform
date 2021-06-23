import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KinesisSettings {
    MessageFormat?: Value<string>;
    StreamArn?: Value<string>;
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: KinesisSettings);
}
export declare class S3Settings {
    ExternalTableDefinition?: Value<string>;
    BucketName?: Value<string>;
    BucketFolder?: Value<string>;
    CsvRowDelimiter?: Value<string>;
    CsvDelimiter?: Value<string>;
    ServiceAccessRoleArn?: Value<string>;
    CompressionType?: Value<string>;
    constructor(properties: S3Settings);
}
export declare class PostgreSqlSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: PostgreSqlSettings);
}
export declare class MicrosoftSqlServerSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: MicrosoftSqlServerSettings);
}
export declare class MongoDbSettings {
    Port?: Value<number>;
    ExtractDocId?: Value<string>;
    DatabaseName?: Value<string>;
    AuthSource?: Value<string>;
    AuthMechanism?: Value<string>;
    Username?: Value<string>;
    DocsToInvestigate?: Value<string>;
    ServerName?: Value<string>;
    SecretsManagerSecretId?: Value<string>;
    AuthType?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    Password?: Value<string>;
    NestingLevel?: Value<string>;
    constructor(properties: MongoDbSettings);
}
export declare class KafkaSettings {
    Broker?: Value<string>;
    Topic?: Value<string>;
    constructor(properties: KafkaSettings);
}
export declare class MySqlSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: MySqlSettings);
}
export declare class NeptuneSettings {
    MaxRetryCount?: Value<number>;
    MaxFileSize?: Value<number>;
    S3BucketFolder?: Value<string>;
    ErrorRetryDuration?: Value<number>;
    IamAuthEnabled?: Value<boolean>;
    S3BucketName?: Value<string>;
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: NeptuneSettings);
}
export declare class IbmDb2Settings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: IbmDb2Settings);
}
export declare class ElasticsearchSettings {
    EndpointUri?: Value<string>;
    FullLoadErrorPercentage?: Value<number>;
    ErrorRetryDuration?: Value<number>;
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: ElasticsearchSettings);
}
export declare class OracleSettings {
    SecretsManagerOracleAsmAccessRoleArn?: Value<string>;
    SecretsManagerOracleAsmSecretId?: Value<string>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: OracleSettings);
}
export declare class DynamoDbSettings {
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: DynamoDbSettings);
}
export declare class DocDbSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: DocDbSettings);
}
export declare class SybaseSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: SybaseSettings);
}
export declare class RedshiftSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: RedshiftSettings);
}
export interface EndpointProperties {
    SybaseSettings?: SybaseSettings;
    OracleSettings?: OracleSettings;
    KafkaSettings?: KafkaSettings;
    Port?: Value<number>;
    MySqlSettings?: MySqlSettings;
    S3Settings?: S3Settings;
    ResourceIdentifier?: Value<string>;
    KinesisSettings?: KinesisSettings;
    SslMode?: Value<string>;
    RedshiftSettings?: RedshiftSettings;
    EndpointType: Value<string>;
    Tags?: List<ResourceTag>;
    Password?: Value<string>;
    MongoDbSettings?: MongoDbSettings;
    IbmDb2Settings?: IbmDb2Settings;
    KmsKeyId?: Value<string>;
    DatabaseName?: Value<string>;
    NeptuneSettings?: NeptuneSettings;
    ElasticsearchSettings?: ElasticsearchSettings;
    EngineName: Value<string>;
    DocDbSettings?: DocDbSettings;
    DynamoDbSettings?: DynamoDbSettings;
    Username?: Value<string>;
    MicrosoftSqlServerSettings?: MicrosoftSqlServerSettings;
    ServerName?: Value<string>;
    ExtraConnectionAttributes?: Value<string>;
    EndpointIdentifier?: Value<string>;
    CertificateArn?: Value<string>;
    PostgreSqlSettings?: PostgreSqlSettings;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static KinesisSettings: typeof KinesisSettings;
    static S3Settings: typeof S3Settings;
    static PostgreSqlSettings: typeof PostgreSqlSettings;
    static MicrosoftSqlServerSettings: typeof MicrosoftSqlServerSettings;
    static MongoDbSettings: typeof MongoDbSettings;
    static KafkaSettings: typeof KafkaSettings;
    static MySqlSettings: typeof MySqlSettings;
    static NeptuneSettings: typeof NeptuneSettings;
    static IbmDb2Settings: typeof IbmDb2Settings;
    static ElasticsearchSettings: typeof ElasticsearchSettings;
    static OracleSettings: typeof OracleSettings;
    static DynamoDbSettings: typeof DynamoDbSettings;
    static DocDbSettings: typeof DocDbSettings;
    static SybaseSettings: typeof SybaseSettings;
    static RedshiftSettings: typeof RedshiftSettings;
    constructor(properties: EndpointProperties);
}
