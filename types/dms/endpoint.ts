/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface S3SettingsProperties {
    ExternalTableDefinition?: Value<string>
    BucketName?: Value<string>
    BucketFolder?: Value<string>
    CsvRowDelimiter?: Value<string>
    CsvDelimiter?: Value<string>
    ServiceAccessRoleArn?: Value<string>
    CompressionType?: Value<string>
}

export class S3Settings extends ResourceBase {
    constructor(properties: S3SettingsProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::S3Settings', properties, dependsOn)
    }
}

export interface MongoDbSettingsProperties {
    AuthSource?: Value<string>
    AuthMechanism?: Value<string>
    Username?: Value<string>
    DocsToInvestigate?: Value<string>
    ServerName?: Value<string>
    Port?: Value<number>
    ExtractDocId?: Value<string>
    DatabaseName?: Value<string>
    AuthType?: Value<string>
    Password?: Value<string>
    NestingLevel?: Value<string>
}

export class MongoDbSettings extends ResourceBase {
    constructor(properties: MongoDbSettingsProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::MongoDbSettings', properties, dependsOn)
    }
}

export interface DynamoDbSettingsProperties {
    ServiceAccessRoleArn?: Value<string>
}

export class DynamoDbSettings extends ResourceBase {
    constructor(properties: DynamoDbSettingsProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::DynamoDbSettings', properties, dependsOn)
    }
}

export interface EndpointProperties {
    KmsKeyId?: Value<string>
    Port?: Value<number>
    DatabaseName?: Value<string>
    S3Settings?: S3Settings
    EngineName: Value<string>
    DynamoDbSettings?: DynamoDbSettings
    Username?: Value<string>
    SslMode?: Value<string>
    ServerName?: Value<string>
    ExtraConnectionAttributes?: Value<string>
    EndpointType: Value<string>
    Tags?: ResourceTag[]
    EndpointIdentifier?: Value<string>
    Password?: Value<string>
    CertificateArn?: Value<string>
    MongoDbSettings?: MongoDbSettings
}

export default class Endpoint extends ResourceBase {
    constructor(properties: EndpointProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::Endpoint', properties, dependsOn)
    }
}