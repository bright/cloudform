import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DocDbSettings {
    DocsToInvestigate?: Value<number>;
    ExtractDocId?: Value<boolean>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    NestingLevel?: Value<string>;
    constructor(properties: DocDbSettings);
}
export declare class DynamoDbSettings {
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: DynamoDbSettings);
}
export declare class ElasticsearchSettings {
    EndpointUri?: Value<string>;
    FullLoadErrorPercentage?: Value<number>;
    ErrorRetryDuration?: Value<number>;
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: ElasticsearchSettings);
}
export declare class GcpMySQLSettings {
    AfterConnectScript?: Value<string>;
    Port?: Value<number>;
    DatabaseName?: Value<string>;
    CleanSourceMetadataOnMismatch?: Value<boolean>;
    ServerTimezone?: Value<string>;
    EventsPollInterval?: Value<number>;
    ParallelLoadThreads?: Value<number>;
    Username?: Value<string>;
    MaxFileSize?: Value<number>;
    ServerName?: Value<string>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    Password?: Value<string>;
    constructor(properties: GcpMySQLSettings);
}
export declare class IbmDb2Settings {
    SetDataCaptureChanges?: Value<boolean>;
    CurrentLsn?: Value<string>;
    MaxKBytesPerRead?: Value<number>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: IbmDb2Settings);
}
export declare class KafkaSettings {
    Broker?: Value<string>;
    SaslPassword?: Value<string>;
    MessageFormat?: Value<string>;
    SslClientCertificateArn?: Value<string>;
    IncludeTransactionDetails?: Value<boolean>;
    SecurityProtocol?: Value<string>;
    IncludeTableAlterOperations?: Value<boolean>;
    SslCaCertificateArn?: Value<string>;
    IncludeControlDetails?: Value<boolean>;
    IncludePartitionValue?: Value<boolean>;
    NoHexPrefix?: Value<boolean>;
    SslClientKeyArn?: Value<string>;
    SslClientKeyPassword?: Value<string>;
    SaslUserName?: Value<string>;
    MessageMaxBytes?: Value<number>;
    Topic?: Value<string>;
    PartitionIncludeSchemaTable?: Value<boolean>;
    IncludeNullAndEmpty?: Value<boolean>;
    constructor(properties: KafkaSettings);
}
export declare class KinesisSettings {
    MessageFormat?: Value<string>;
    IncludeTransactionDetails?: Value<boolean>;
    IncludeTableAlterOperations?: Value<boolean>;
    IncludeControlDetails?: Value<boolean>;
    IncludePartitionValue?: Value<boolean>;
    StreamArn?: Value<string>;
    ServiceAccessRoleArn?: Value<string>;
    NoHexPrefix?: Value<boolean>;
    PartitionIncludeSchemaTable?: Value<boolean>;
    IncludeNullAndEmpty?: Value<boolean>;
    constructor(properties: KinesisSettings);
}
export declare class MicrosoftSqlServerSettings {
    ReadBackupOnly?: Value<boolean>;
    TlogAccessMode?: Value<string>;
    BcpPacketSize?: Value<number>;
    Port?: Value<number>;
    SafeguardPolicy?: Value<string>;
    UseThirdPartyBackupDevice?: Value<boolean>;
    DatabaseName?: Value<string>;
    UseBcpFullLoad?: Value<boolean>;
    Username?: Value<string>;
    QuerySingleAlwaysOnNode?: Value<boolean>;
    ServerName?: Value<string>;
    SecretsManagerSecretId?: Value<string>;
    ControlTablesFileGroup?: Value<string>;
    ForceLobLookup?: Value<boolean>;
    SecretsManagerAccessRoleArn?: Value<string>;
    TrimSpaceInChar?: Value<boolean>;
    Password?: Value<string>;
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
export declare class MySqlSettings {
    ServerTimezone?: Value<string>;
    EventsPollInterval?: Value<number>;
    ParallelLoadThreads?: Value<number>;
    AfterConnectScript?: Value<string>;
    MaxFileSize?: Value<number>;
    TargetDbType?: Value<string>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    CleanSourceMetadataOnMismatch?: Value<boolean>;
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
export declare class OracleSettings {
    AsmPassword?: Value<string>;
    DirectPathParallelLoad?: Value<boolean>;
    AdditionalArchivedLogDestId?: Value<number>;
    SpatialDataOptionToGeoJsonFunctionName?: Value<string>;
    ReplacePathPrefix?: Value<boolean>;
    FailTasksOnLobTruncation?: Value<boolean>;
    AsmServer?: Value<string>;
    SecretsManagerOracleAsmAccessRoleArn?: Value<string>;
    OraclePathPrefix?: Value<string>;
    ReadAheadBlocks?: Value<number>;
    StandbyDelayTime?: Value<number>;
    AllowSelectNestedTables?: Value<boolean>;
    AddSupplementalLogging?: Value<boolean>;
    SecretsManagerSecretId?: Value<string>;
    UseBFile?: Value<boolean>;
    EnableHomogenousTablespace?: Value<boolean>;
    AsmUser?: Value<string>;
    UseDirectPathFullLoad?: Value<boolean>;
    SecurityDbEncryption?: Value<string>;
    ParallelAsmReadThreads?: Value<number>;
    ArchivedLogDestId?: Value<number>;
    UsePathPrefix?: Value<string>;
    UseLogminerReader?: Value<boolean>;
    SecurityDbEncryptionName?: Value<string>;
    DirectPathNoLog?: Value<boolean>;
    SecretsManagerOracleAsmSecretId?: Value<string>;
    CharLengthSemantics?: Value<string>;
    NumberDatatypeScale?: Value<number>;
    ReadTableSpaceName?: Value<boolean>;
    AccessAlternateDirectly?: Value<boolean>;
    UseAlternateFolderForOnline?: Value<boolean>;
    ArchivedLogsOnly?: Value<boolean>;
    ExtraArchivedLogDestIds?: List<Value<number>>;
    RetryInterval?: Value<number>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: OracleSettings);
}
export declare class PostgreSqlSettings {
    PluginName?: Value<string>;
    MapBooleanAsBoolean?: Value<boolean>;
    AfterConnectScript?: Value<string>;
    ExecuteTimeout?: Value<number>;
    DdlArtifactsSchema?: Value<string>;
    FailTasksOnLobTruncation?: Value<boolean>;
    HeartbeatEnable?: Value<boolean>;
    BabelfishDatabaseName?: Value<string>;
    DatabaseMode?: Value<string>;
    CaptureDdls?: Value<boolean>;
    MaxFileSize?: Value<number>;
    HeartbeatFrequency?: Value<number>;
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    HeartbeatSchema?: Value<string>;
    SlotName?: Value<string>;
    constructor(properties: PostgreSqlSettings);
}
export declare class RedisSettings {
    SslSecurityProtocol?: Value<string>;
    AuthUserName?: Value<string>;
    ServerName?: Value<string>;
    Port?: Value<number>;
    SslCaCertificateArn?: Value<string>;
    AuthPassword?: Value<string>;
    AuthType?: Value<string>;
    constructor(properties: RedisSettings);
}
export declare class RedshiftSettings {
    ConnectionTimeout?: Value<number>;
    MapBooleanAsBoolean?: Value<boolean>;
    AfterConnectScript?: Value<string>;
    FileTransferUploadStreams?: Value<number>;
    BucketName?: Value<string>;
    ServerSideEncryptionKmsKeyId?: Value<string>;
    ExplicitIds?: Value<boolean>;
    SecretsManagerSecretId?: Value<string>;
    TruncateColumns?: Value<boolean>;
    ServiceAccessRoleArn?: Value<string>;
    ReplaceChars?: Value<string>;
    TimeFormat?: Value<string>;
    BucketFolder?: Value<string>;
    ReplaceInvalidChars?: Value<string>;
    RemoveQuotes?: Value<boolean>;
    LoadTimeout?: Value<number>;
    MaxFileSize?: Value<number>;
    TrimBlanks?: Value<boolean>;
    DateFormat?: Value<string>;
    CompUpdate?: Value<boolean>;
    AcceptAnyDate?: Value<boolean>;
    WriteBufferSize?: Value<number>;
    SecretsManagerAccessRoleArn?: Value<string>;
    CaseSensitiveNames?: Value<boolean>;
    EmptyAsNull?: Value<boolean>;
    EncryptionMode?: Value<string>;
    constructor(properties: RedshiftSettings);
}
export declare class S3Settings {
    TimestampColumnName?: Value<string>;
    EnableStatistics?: Value<boolean>;
    DatePartitionSequence?: Value<string>;
    IncludeOpForFullLoad?: Value<boolean>;
    CsvNullValue?: Value<string>;
    CdcInsertsAndUpdates?: Value<boolean>;
    BucketName?: Value<string>;
    ServerSideEncryptionKmsKeyId?: Value<string>;
    UseTaskStartTimeForFullLoadTimestamp?: Value<boolean>;
    DataFormat?: Value<string>;
    CsvDelimiter?: Value<string>;
    IgnoreHeaderRows?: Value<number>;
    CannedAclForObjects?: Value<string>;
    Rfc4180?: Value<boolean>;
    ServiceAccessRoleArn?: Value<string>;
    ParquetTimestampInMillisecond?: Value<boolean>;
    PreserveTransactions?: Value<boolean>;
    BucketFolder?: Value<string>;
    DatePartitionDelimiter?: Value<string>;
    EncodingType?: Value<string>;
    ParquetVersion?: Value<string>;
    AddColumnName?: Value<boolean>;
    CdcMinFileSize?: Value<number>;
    ExternalTableDefinition?: Value<string>;
    UseCsvNoSupValue?: Value<boolean>;
    MaxFileSize?: Value<number>;
    CsvNoSupValue?: Value<string>;
    CdcPath?: Value<string>;
    CsvRowDelimiter?: Value<string>;
    RowGroupLength?: Value<number>;
    CdcMaxBatchInterval?: Value<number>;
    DataPageSize?: Value<number>;
    DictPageSizeLimit?: Value<number>;
    DatePartitionEnabled?: Value<boolean>;
    CompressionType?: Value<string>;
    DatePartitionTimezone?: Value<string>;
    CdcInsertsOnly?: Value<boolean>;
    EncryptionMode?: Value<string>;
    GlueCatalogGeneration?: Value<boolean>;
    AddTrailingPaddingCharacter?: Value<boolean>;
    ExpectedBucketOwner?: Value<string>;
    constructor(properties: S3Settings);
}
export declare class SybaseSettings {
    SecretsManagerSecretId?: Value<string>;
    SecretsManagerAccessRoleArn?: Value<string>;
    constructor(properties: SybaseSettings);
}
export interface EndpointProperties {
    SybaseSettings?: SybaseSettings;
    RedisSettings?: RedisSettings;
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
    GcpMySQLSettings?: GcpMySQLSettings;
    ServerName?: Value<string>;
    ExtraConnectionAttributes?: Value<string>;
    EndpointIdentifier?: Value<string>;
    CertificateArn?: Value<string>;
    PostgreSqlSettings?: PostgreSqlSettings;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static DocDbSettings: typeof DocDbSettings;
    static DynamoDbSettings: typeof DynamoDbSettings;
    static ElasticsearchSettings: typeof ElasticsearchSettings;
    static GcpMySQLSettings: typeof GcpMySQLSettings;
    static IbmDb2Settings: typeof IbmDb2Settings;
    static KafkaSettings: typeof KafkaSettings;
    static KinesisSettings: typeof KinesisSettings;
    static MicrosoftSqlServerSettings: typeof MicrosoftSqlServerSettings;
    static MongoDbSettings: typeof MongoDbSettings;
    static MySqlSettings: typeof MySqlSettings;
    static NeptuneSettings: typeof NeptuneSettings;
    static OracleSettings: typeof OracleSettings;
    static PostgreSqlSettings: typeof PostgreSqlSettings;
    static RedisSettings: typeof RedisSettings;
    static RedshiftSettings: typeof RedshiftSettings;
    static S3Settings: typeof S3Settings;
    static SybaseSettings: typeof SybaseSettings;
    constructor(properties: EndpointProperties);
}
