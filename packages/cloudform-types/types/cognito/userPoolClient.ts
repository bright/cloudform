/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AnalyticsConfiguration {
    ApplicationArn?: Value<string>
    UserDataShared?: Value<boolean>
    ExternalId?: Value<string>
    ApplicationId?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: AnalyticsConfiguration) {
        Object.assign(this, properties)
    }
}

export class TokenValidityUnits {
    IdToken?: Value<string>
    RefreshToken?: Value<string>
    AccessToken?: Value<string>

    constructor(properties: TokenValidityUnits) {
        Object.assign(this, properties)
    }
}

export interface UserPoolClientProperties {
    AnalyticsConfiguration?: AnalyticsConfiguration
    GenerateSecret?: Value<boolean>
    CallbackURLs?: List<Value<string>>
    EnablePropagateAdditionalUserContextData?: Value<boolean>
    IdTokenValidity?: Value<number>
    AuthSessionValidity?: Value<number>
    AllowedOAuthScopes?: List<Value<string>>
    TokenValidityUnits?: TokenValidityUnits
    ReadAttributes?: List<Value<string>>
    AllowedOAuthFlowsUserPoolClient?: Value<boolean>
    DefaultRedirectURI?: Value<string>
    SupportedIdentityProviders?: List<Value<string>>
    ClientName?: Value<string>
    UserPoolId: Value<string>
    AllowedOAuthFlows?: List<Value<string>>
    ExplicitAuthFlows?: List<Value<string>>
    LogoutURLs?: List<Value<string>>
    AccessTokenValidity?: Value<number>
    RefreshTokenValidity?: Value<number>
    WriteAttributes?: List<Value<string>>
    PreventUserExistenceErrors?: Value<string>
    EnableTokenRevocation?: Value<boolean>
}

export default class UserPoolClient extends ResourceBase<UserPoolClientProperties> {
    static AnalyticsConfiguration = AnalyticsConfiguration
    static TokenValidityUnits = TokenValidityUnits

    constructor(properties: UserPoolClientProperties) {
        super('AWS::Cognito::UserPoolClient', properties)
    }
}
