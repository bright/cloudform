import { ResourceBase } from '../resource';
import { Value } from '../internal';
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
    constructor(properties: MethodSettingProperties, dependsOn?: Value<string>);
}
export interface StageDescriptionProperties {
    CacheClusterEnabled?: Value<boolean>;
    CacheClusterSize?: Value<string>;
    CacheDataEncrypted?: Value<boolean>;
    CacheTtlInSeconds?: Value<number>;
    CachingEnabled?: Value<boolean>;
    ClientCertificateId?: Value<string>;
    DataTraceEnabled?: Value<boolean>;
    Description?: Value<string>;
    DocumentationVersion?: Value<string>;
    LoggingLevel?: Value<string>;
    MethodSettings?: MethodSetting[];
    MetricsEnabled?: Value<boolean>;
    ThrottlingBurstLimit?: Value<number>;
    ThrottlingRateLimit?: Value<number>;
    Variables?: {
        [key: string]: Value<string>;
    };
}
export declare class StageDescription extends ResourceBase {
    constructor(properties: StageDescriptionProperties, dependsOn?: Value<string>);
}
export interface DeploymentProperties {
    Description?: Value<string>;
    RestApiId: Value<string>;
    StageDescription?: StageDescription;
    StageName?: Value<string>;
}
export default class Deployment extends ResourceBase {
    constructor(properties: DeploymentProperties, dependsOn?: Value<string>);
}
