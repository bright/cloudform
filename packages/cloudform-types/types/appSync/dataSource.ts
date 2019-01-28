/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.21.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AuthorizationConfig {
    AwsIamConfig?: AwsIamConfig
    AuthorizationType!: Value<string>

    constructor(properties: AuthorizationConfig) {
        Object.assign(this, properties)
    }
}

export class RelationalDatabaseConfig {
    RdsHttpEndpointConfig?: RdsHttpEndpointConfig
    RelationalDatabaseSourceType!: Value<string>

    constructor(properties: RelationalDatabaseConfig) {
        Object.assign(this, properties)
    }
}

export class RdsHttpEndpointConfig {
    AwsRegion!: Value<string>
    Schema?: Value<string>
    DatabaseName?: Value<string>
    DbClusterIdentifier!: Value<string>
    AwsSecretStoreArn!: Value<string>

    constructor(properties: RdsHttpEndpointConfig) {
        Object.assign(this, properties)
    }
}

export class LambdaConfig {
    LambdaFunctionArn!: Value<string>

    constructor(properties: LambdaConfig) {
        Object.assign(this, properties)
    }
}

export class AwsIamConfig {
    SigningRegion?: Value<string>
    SigningServiceName?: Value<string>

    constructor(properties: AwsIamConfig) {
        Object.assign(this, properties)
    }
}

export class HttpConfig {
    Endpoint!: Value<string>
    AuthorizationConfig?: AuthorizationConfig

    constructor(properties: HttpConfig) {
        Object.assign(this, properties)
    }
}

export class DynamoDBConfig {
    TableName!: Value<string>
    AwsRegion!: Value<string>
    UseCallerCredentials?: Value<boolean>

    constructor(properties: DynamoDBConfig) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchConfig {
    AwsRegion!: Value<string>
    Endpoint!: Value<string>

    constructor(properties: ElasticsearchConfig) {
        Object.assign(this, properties)
    }
}

export interface DataSourceProperties {
    Type: Value<string>
    Description?: Value<string>
    ServiceRoleArn?: Value<string>
    HttpConfig?: HttpConfig
    RelationalDatabaseConfig?: RelationalDatabaseConfig
    LambdaConfig?: LambdaConfig
    ApiId: Value<string>
    Name: Value<string>
    DynamoDBConfig?: DynamoDBConfig
    ElasticsearchConfig?: ElasticsearchConfig
}

export default class DataSource extends ResourceBase {
    static AuthorizationConfig = AuthorizationConfig
    static RelationalDatabaseConfig = RelationalDatabaseConfig
    static RdsHttpEndpointConfig = RdsHttpEndpointConfig
    static LambdaConfig = LambdaConfig
    static AwsIamConfig = AwsIamConfig
    static HttpConfig = HttpConfig
    static DynamoDBConfig = DynamoDBConfig
    static ElasticsearchConfig = ElasticsearchConfig

    constructor(properties?: DataSourceProperties) {
        super('AWS::AppSync::DataSource', properties)
    }
}
