import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessLogSetting {
    Format?: Value<string>;
    DestinationArn?: Value<string>;
    constructor(properties: AccessLogSetting);
}
export declare class CanarySetting {
    DeploymentId?: Value<string>;
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    PercentTraffic?: Value<number>;
    UseStageCache?: Value<boolean>;
    constructor(properties: CanarySetting);
}
export declare class MethodSetting {
    CacheTtlInSeconds?: Value<number>;
    LoggingLevel?: Value<string>;
    ResourcePath?: Value<string>;
    CacheDataEncrypted?: Value<boolean>;
    DataTraceEnabled?: Value<boolean>;
    ThrottlingBurstLimit?: Value<number>;
    CachingEnabled?: Value<boolean>;
    MetricsEnabled?: Value<boolean>;
    HttpMethod?: Value<string>;
    ThrottlingRateLimit?: Value<number>;
    constructor(properties: MethodSetting);
}
export interface StageProperties {
    DeploymentId?: Value<string>;
    Description?: Value<string>;
    StageName?: Value<string>;
    RestApiId: Value<string>;
    CanarySetting?: CanarySetting;
    ClientCertificateId?: Value<string>;
    Variables?: {
        [key: string]: Value<string>;
    };
    DocumentationVersion?: Value<string>;
    TracingEnabled?: Value<boolean>;
    MethodSettings?: List<MethodSetting>;
    AccessLogSetting?: AccessLogSetting;
    CacheClusterSize?: Value<string>;
    Tags?: List<ResourceTag>;
    CacheClusterEnabled?: Value<boolean>;
}
export default class Stage extends ResourceBase<StageProperties> {
    static AccessLogSetting: typeof AccessLogSetting;
    static CanarySetting: typeof CanarySetting;
    static MethodSetting: typeof MethodSetting;
    constructor(properties: StageProperties);
}
