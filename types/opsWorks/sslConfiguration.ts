import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SslConfigurationProperties {
    Certificate?: Value<string>
    Chain?: Value<string>
    PrivateKey?: Value<string>
}

export default class SslConfiguration extends ResourceBase {
    constructor(properties: SslConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::SslConfiguration', properties, dependsOn)
    }
}