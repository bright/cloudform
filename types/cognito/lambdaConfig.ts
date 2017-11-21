import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LambdaConfigProperties {
    CreateAuthChallenge?: Value<string>
    CustomMessage?: Value<string>
    DefineAuthChallenge?: Value<string>
    PostAuthentication?: Value<string>
    PostConfirmation?: Value<string>
    PreAuthentication?: Value<string>
    PreSignUp?: Value<string>
    VerifyAuthChallengeResponse?: Value<string>
}

export default class LambdaConfig extends ResourceBase {
    constructor(properties: LambdaConfigProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::LambdaConfig', properties, dependsOn)
    }
}