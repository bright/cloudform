import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Forward = "none" | "all" | "whitelist"

export interface CookiesProperties {
    Forward: Value<Forward>
    WhitelistedNames?: Value<string>[]
}

export default class Cookies extends ResourceBase {
    constructor(properties: CookiesProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::Cookies', properties, dependsOn)
    }
}