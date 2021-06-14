/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
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

export class PostgreSqlSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: PostgreSqlSettings) {
        Object.assign(this, properties)
    }
}

export class MicrosoftSqlServerSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: MicrosoftSqlServerSettings) {
        Object.assign(this, properties)
    }
}

export class MongoDbSettings {
    Port?: Value<number>
    ExtractDocId?: Value<string>
    DatabaseName?: Value<string>
    AuthSource?: Value<string>
    AuthMechanism?: Value<string>
    Username?: Value<string>
    DocsToInvestigate?: Value<string>
    ServerName?: Value<string>
    SecretsManagerSecretId?: Value<string>
    AuthType?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>
    Password?: Value<string>
    NestingLevel?: Value<string>

    constructor(properties: MongoDbSettings) {
        Object.assign(this, properties)
    }
}

export class KafkaSettings {
    Broker?: Value<string>
    Topic?: Value<string>

    constructor(properties: KafkaSettings) {
        Object.assign(this, properties)
    }
}

export class MySqlSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: MySqlSettings) {
        Object.assign(this, properties)
    }
}

export class NeptuneSettings {
    MaxRetryCount?: Value<number>
    MaxFileSize?: Value<number>
    S3BucketFolder?: Value<string>
    ErrorRetryDuration?: Value<number>
    IamAuthEnabled?: Value<boolean>
    S3BucketName?: Value<string>
    ServiceAccessRoleArn?: Value<string>

    constructor(properties: NeptuneSettings) {
        Object.assign(this, properties)
    }
}

export class IbmDb2Settings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: IbmDb2Settings) {
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

export class OracleSettings {
    SecretsManagerOracleAsmAccessRoleArn?: Value<string>
    SecretsManagerOracleAsmSecretId?: Value<string>
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: OracleSettings) {
        Object.assign(this, properties)
    }
}

export class DynamoDbSettings {
    ServiceAccessRoleArn?: Value<string>

    constructor(properties: DynamoDbSettings) {
        Object.assign(this, properties)
    }
}

export class DocDbSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: DocDbSettings) {
        Object.assign(this, properties)
    }
}

export class SybaseSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: SybaseSettings) {
        Object.assign(this, properties)
    }
}

export class RedshiftSettings {
    SecretsManagerSecretId?: Value<string>
    SecretsManagerAccessRoleArn?: Value<string>

    constructor(properties: RedshiftSettings) {
        Object.assign(this, properties)
    }
}

export interface EndpointProperties {
    Port?: Value<number>
    ResourceIdentifier?: Value<string>
    SslMode?: Value<string>
    EndpointType: Value<string>
    Password?: Value<string>
    KmsKeyId?: Value<string>
    DatabaseName?: Value<string>
    EngineName: Value<string>
    Username?: Value<string>
    ServerName?: Value<string>
    ExtraConnectionAttributes?: Value<string>
    EndpointIdentifier?: Value<string>
    CertificateArn?: Value<string>
}

export default class Endpoint extends ResourceBase<EndpointProperties> {
    static KinesisSettings = KinesisSettings
    static S3Settings = S3Settings
    static PostgreSqlSettings = PostgreSqlSettings
    static MicrosoftSqlServerSettings = MicrosoftSqlServerSettings
    static MongoDbSettings = MongoDbSettings
    static KafkaSettings = KafkaSettings
    static MySqlSettings = MySqlSettings
    static NeptuneSettings = NeptuneSettings
    static IbmDb2Settings = IbmDb2Settings
    static ElasticsearchSettings = ElasticsearchSettings
    static OracleSettings = OracleSettings
    static DynamoDbSettings = DynamoDbSettings
    static DocDbSettings = DocDbSettings
    static SybaseSettings = SybaseSettings
    static RedshiftSettings = RedshiftSettings

    constructor(properties: EndpointProperties) {
        super('AWS::DMS::Endpoint', properties)
    }
}
