import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LoggingProperties {
    Bucket?: Value<string>
    IncludeCookies?: Value<boolean>
    Prefix?: Value<string>
}

export default class Logging extends ResourceBase {
    constructor(properties: LoggingProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::Logging', properties, dependsOn)
    }
}