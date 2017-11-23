/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface PushSyncProperties {
    ApplicationArns?: List<Value<string>>
    RoleArn?: Value<string>
}

export class PushSync extends ResourceBase {
    constructor(properties: PushSyncProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Cognito::PushSync', properties, dependsOn)
    }
}

export interface CognitoIdentityProviderProperties {
    ServerSideTokenCheck?: Value<boolean>
    ProviderName?: Value<string>
    ClientId?: Value<string>
}

export class CognitoIdentityProvider extends ResourceBase {
    constructor(properties: CognitoIdentityProviderProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Cognito::CognitoIdentityProvider', properties, dependsOn)
    }
}

export interface CognitoStreamsProperties {
    StreamingStatus?: Value<string>
    StreamName?: Value<string>
    RoleArn?: Value<string>
}

export class CognitoStreams extends ResourceBase {
    constructor(properties: CognitoStreamsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Cognito::CognitoStreams', properties, dependsOn)
    }
}

export interface IdentityPoolProperties {
    PushSync?: PushSync
    CognitoIdentityProviders?: List<CognitoIdentityProvider>
    CognitoEvents?: any
    DeveloperProviderName?: Value<string>
    CognitoStreams?: CognitoStreams
    IdentityPoolName?: Value<string>
    AllowUnauthenticatedIdentities: Value<boolean>
    SupportedLoginProviders?: any
    SamlProviderARNs?: List<Value<string>>
    OpenIdConnectProviderARNs?: List<Value<string>>
}

export default class IdentityPool extends ResourceBase {
    constructor(properties: IdentityPoolProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Cognito::IdentityPool', properties, dependsOn)
    }
}
