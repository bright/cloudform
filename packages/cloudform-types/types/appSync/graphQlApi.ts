/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class OpenIDConnectConfig {
    Issuer?: Value<string>
    ClientId?: Value<string>
    AuthTTL?: Value<number>
    IatTTL?: Value<number>

    constructor(properties: OpenIDConnectConfig) {
        Object.assign(this, properties)
    }
}

export class LogConfig {
    CloudWatchLogsRoleArn?: Value<string>
    FieldLogLevel?: Value<string>

    constructor(properties: LogConfig) {
        Object.assign(this, properties)
    }
}

export class UserPoolConfig {
    AppIdClientRegex?: Value<string>
    UserPoolId?: Value<string>
    AwsRegion?: Value<string>
    DefaultAction?: Value<string>

    constructor(properties: UserPoolConfig) {
        Object.assign(this, properties)
    }
}

export interface GraphQLApiProperties {
    OpenIDConnectConfig?: OpenIDConnectConfig
    UserPoolConfig?: UserPoolConfig
    Name: Value<string>
    AuthenticationType: Value<string>
    LogConfig?: LogConfig
}

export default class GraphQLApi extends ResourceBase<GraphQLApiProperties> {
    static OpenIDConnectConfig = OpenIDConnectConfig
    static LogConfig = LogConfig
    static UserPoolConfig = UserPoolConfig

    constructor(properties: GraphQLApiProperties) {
        super('AWS::AppSync::GraphQLApi', properties)
    }
}
