import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface MethodSettingsProperties {
    CacheDataEncrypted?: Value<boolean>
    CacheTtlInSeconds?: Value<number>
    CachingEnabled?: Value<boolean>
    DataTraceEnabled?: Value<boolean>
    HttpMethod?: Value<string>
    LoggingLevel?: Value<string>
    MetricsEnabled?: Value<boolean>
    ResourcePath?: Value<string>
    ThrottlingBurstLimit?: Value<number>
    ThrottlingRateLimit?: Value<number>
}

export default class MethodSettings extends ResourceBase {
    constructor(properties: MethodSettingsProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::MethodSettings', properties, dependsOn)
    }
}