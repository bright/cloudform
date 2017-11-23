import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MethodSettingProperties {
    CacheDataEncrypted?: Value<boolean>;
    CacheTtlInSeconds?: Value<number>;
    CachingEnabled?: Value<boolean>;
    DataTraceEnabled?: Value<boolean>;
    HttpMethod?: Value<string>;
    LoggingLevel?: Value<string>;
    MetricsEnabled?: Value<boolean>;
    ResourcePath?: Value<string>;
    ThrottlingBurstLimit?: Value<number>;
    ThrottlingRateLimit?: Value<number>;
}
export declare class MethodSetting extends ResourceBase {
    constructor(properties: MethodSettingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StageProperties {
    CacheClusterEnabled?: Value<boolean>;
    CacheClusterSize?: Value<string>;
    ClientCertificateId?: Value<string>;
    DeploymentId?: Value<string>;
    Description?: Value<string>;
    DocumentationVersion?: Value<string>;
    MethodSettings?: MethodSetting[];
    RestApiId: Value<string>;
    StageName?: Value<string>;
    Variables?: {
        [key: string]: Value<string>;
    };
}
export default class Stage extends ResourceBase {
    constructor(properties: StageProperties, dependsOn?: Value<string> | Value<string>[]);
}
