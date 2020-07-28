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
export declare class MongoDbSettings {
    AuthSource?: Value<string>;
    AuthMechanism?: Value<string>;
    Username?: Value<string>;
    DocsToInvestigate?: Value<string>;
    ServerName?: Value<string>;
    Port?: Value<number>;
    ExtractDocId?: Value<string>;
    DatabaseName?: Value<string>;
    AuthType?: Value<string>;
    Password?: Value<string>;
    NestingLevel?: Value<string>;
    constructor(properties: MongoDbSettings);
}
export declare class KafkaSettings {
    Broker?: Value<string>;
    Topic?: Value<string>;
    constructor(properties: KafkaSettings);
}
export declare class DynamoDbSettings {
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: DynamoDbSettings);
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
export declare class ElasticsearchSettings {
    EndpointUri?: Value<string>;
    FullLoadErrorPercentage?: Value<number>;
    ErrorRetryDuration?: Value<number>;
    ServiceAccessRoleArn?: Value<string>;
    constructor(properties: ElasticsearchSettings);
}
export interface EndpointProperties {
    KmsKeyId?: Value<string>;
    KafkaSettings?: KafkaSettings;
    Port?: Value<number>;
    DatabaseName?: Value<string>;
    NeptuneSettings?: NeptuneSettings;
    ElasticsearchSettings?: ElasticsearchSettings;
    S3Settings?: S3Settings;
    EngineName: Value<string>;
    DynamoDbSettings?: DynamoDbSettings;
    KinesisSettings?: KinesisSettings;
    Username?: Value<string>;
    SslMode?: Value<string>;
    ServerName?: Value<string>;
    ExtraConnectionAttributes?: Value<string>;
    EndpointType: Value<string>;
    Tags?: List<ResourceTag>;
    EndpointIdentifier?: Value<string>;
    Password?: Value<string>;
    CertificateArn?: Value<string>;
    MongoDbSettings?: MongoDbSettings;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static KinesisSettings: typeof KinesisSettings;
    static S3Settings: typeof S3Settings;
    static MongoDbSettings: typeof MongoDbSettings;
    static KafkaSettings: typeof KafkaSettings;
    static DynamoDbSettings: typeof DynamoDbSettings;
    static NeptuneSettings: typeof NeptuneSettings;
    static ElasticsearchSettings: typeof ElasticsearchSettings;
    constructor(properties: EndpointProperties);
}
