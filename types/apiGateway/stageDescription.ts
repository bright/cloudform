import {ResourceBase} from '../resource'
import {Value} from '../internal'
import MethodSettings from './methodSettings'



export interface StageDescriptionProperties {
    CacheClusterEnabled?: Value<string>
    CacheClusterSize?: Value<string>
    CacheDataEncrypted?: Value<boolean>
    CacheTtlInSeconds?: Value<number>
    CachingEnabled?: Value<boolean>
    ClientCertificateId?: Value<string>
    DataTraceEnabled?: Value<boolean>
    Description?: Value<string>
    LoggingLevel?: Value<string>
    MethodSettings?: MethodSettings
    MetricsEnabled?: Value<boolean>
    StageName?: Value<string>
    ThrottlingBurstLimit?: Value<number>
    ThrottlingRateLimit?: Value<number>
    Variables?: any
}

export default class StageDescription extends ResourceBase {
    constructor(properties: StageDescriptionProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::StageDescription', properties, dependsOn)
    }
}