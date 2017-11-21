import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SmsConfigurationProperties {
    ExternalId?: Value<string>
    SnsCallerArn?: Value<string>
}

export default class SmsConfiguration extends ResourceBase {
    constructor(properties: SmsConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::SmsConfiguration', properties, dependsOn)
    }
}