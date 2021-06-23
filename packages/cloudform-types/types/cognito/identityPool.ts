/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CognitoStreams {
    StreamingStatus?: Value<string>
    StreamName?: Value<string>
    RoleArn?: Value<string>

    constructor(properties: CognitoStreams) {
        Object.assign(this, properties)
    }
}

export class PushSync {
    ApplicationArns?: List<Value<string>>
    RoleArn?: Value<string>

    constructor(properties: PushSync) {
        Object.assign(this, properties)
    }
}

export class CognitoIdentityProvider {
    ServerSideTokenCheck?: Value<boolean>
    ProviderName?: Value<string>
    ClientId?: Value<string>

    constructor(properties: CognitoIdentityProvider) {
        Object.assign(this, properties)
    }
}

export interface IdentityPoolProperties {
    PushSync?: PushSync
    CognitoIdentityProviders?: List<CognitoIdentityProvider>
    CognitoEvents?: {[key: string]: any}
    DeveloperProviderName?: Value<string>
    CognitoStreams?: CognitoStreams
    IdentityPoolName?: Value<string>
    AllowUnauthenticatedIdentities: Value<boolean>
    SupportedLoginProviders?: {[key: string]: any}
    SamlProviderARNs?: List<Value<string>>
    OpenIdConnectProviderARNs?: List<Value<string>>
    AllowClassicFlow?: Value<boolean>
}

export default class IdentityPool extends ResourceBase<IdentityPoolProperties> {
    static CognitoStreams = CognitoStreams
    static PushSync = PushSync
    static CognitoIdentityProvider = CognitoIdentityProvider

    constructor(properties: IdentityPoolProperties) {
        super('AWS::Cognito::IdentityPool', properties)
    }
}
