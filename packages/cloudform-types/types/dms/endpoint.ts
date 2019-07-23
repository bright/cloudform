/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class KinesisSettings {
    MessageFormat?: Value<string>
    StreamArn?: Value<string>
    ServiceAccessRoleArn?: Value<string>

    constructor(properties: KinesisSettings) {
        Object.assign(this, properties)
    }
}

export class S3Settings {
    ExternalTableDefinition?: Value<string>
    BucketName?: Value<string>
    BucketFolder?: Value<string>
    CsvRowDelimiter?: Value<string>
    CsvDelimiter?: Value<string>
    ServiceAccessRoleArn?: Value<string>
    CompressionType?: Value<string>

    constructor(properties: S3Settings) {
        Object.assign(this, properties)
    }
}

export class MongoDbSettings {
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

    constructor(properties: MongoDbSettings) {
        Object.assign(this, properties)
    }
}

export class DynamoDbSettings {
    ServiceAccessRoleArn?: Value<string>

    constructor(properties: DynamoDbSettings) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchSettings {
    EndpointUri?: Value<string>
    FullLoadErrorPercentage?: Value<number>
    ErrorRetryDuration?: Value<number>
    ServiceAccessRoleArn?: Value<string>

    constructor(properties: ElasticsearchSettings) {
        Object.assign(this, properties)
    }
}

export interface EndpointProperties {
    KmsKeyId?: Value<string>
    Port?: Value<number>
    DatabaseName?: Value<string>
    ElasticsearchSettings?: ElasticsearchSettings
    S3Settings?: S3Settings
    EngineName: Value<string>
    DynamoDbSettings?: DynamoDbSettings
    KinesisSettings?: KinesisSettings
    Username?: Value<string>
    SslMode?: Value<string>
    ServerName?: Value<string>
    ExtraConnectionAttributes?: Value<string>
    EndpointType: Value<string>
    Tags?: List<ResourceTag>
    EndpointIdentifier?: Value<string>
    Password?: Value<string>
    CertificateArn?: Value<string>
    MongoDbSettings?: MongoDbSettings
}

export default class Endpoint extends ResourceBase<EndpointProperties> {
    static KinesisSettings = KinesisSettings
    static S3Settings = S3Settings
    static MongoDbSettings = MongoDbSettings
    static DynamoDbSettings = DynamoDbSettings
    static ElasticsearchSettings = ElasticsearchSettings

    constructor(properties: EndpointProperties) {
        super('AWS::DMS::Endpoint', properties)
    }
}
