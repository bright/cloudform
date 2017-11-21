import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Protocol = "http" | "https"

export interface RedirectRuleProperties {
    HostName: Value<string>
    HttpRedirectCode?: Value<string>
    Protocol?: Value<Protocol>
    ReplaceKeyPrefixWith?: Value<string>
    ReplaceKeyWith?: Value<string>
}

export default class RedirectRule extends ResourceBase {
    constructor(properties: RedirectRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RedirectRule', properties, dependsOn)
    }
}