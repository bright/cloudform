import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface S3SettingsProperties {
    ExternalTableDefinition?: Value<string>;
    BucketName?: Value<string>;
    BucketFolder?: Value<string>;
    CsvRowDelimiter?: Value<string>;
    CsvDelimiter?: Value<string>;
    ServiceAccessRoleArn?: Value<string>;
    CompressionType?: Value<string>;
}
export declare class S3Settings extends ResourceBase {
    constructor(properties: S3SettingsProperties, dependsOn?: Value<string>);
}
export interface MongoDbSettingsProperties {
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
}
export declare class MongoDbSettings extends ResourceBase {
    constructor(properties: MongoDbSettingsProperties, dependsOn?: Value<string>);
}
export interface DynamoDbSettingsProperties {
    ServiceAccessRoleArn?: Value<string>;
}
export declare class DynamoDbSettings extends ResourceBase {
    constructor(properties: DynamoDbSettingsProperties, dependsOn?: Value<string>);
}
export interface EndpointProperties {
    KmsKeyId?: Value<string>;
    Port?: Value<number>;
    DatabaseName?: Value<string>;
    S3Settings?: S3Settings;
    EngineName: Value<string>;
    DynamoDbSettings?: DynamoDbSettings;
    Username?: Value<string>;
    SslMode?: Value<string>;
    ServerName?: Value<string>;
    ExtraConnectionAttributes?: Value<string>;
    EndpointType: Value<string>;
    Tags?: ResourceTag[];
    EndpointIdentifier?: Value<string>;
    Password?: Value<string>;
    CertificateArn?: Value<string>;
    MongoDbSettings?: MongoDbSettings;
}
export default class Endpoint extends ResourceBase {
    constructor(properties: EndpointProperties, dependsOn?: Value<string>);
}
