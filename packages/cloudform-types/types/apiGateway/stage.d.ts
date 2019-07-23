import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CanarySetting {
    DeploymentId?: Value<string>;
    PercentTraffic?: Value<number>;
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    UseStageCache?: Value<boolean>;
    constructor(properties: CanarySetting);
}
export declare class AccessLogSetting {
    DestinationArn?: Value<string>;
    Format?: Value<string>;
    constructor(properties: AccessLogSetting);
}
export declare class MethodSetting {
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
    constructor(properties: MethodSetting);
}
export interface StageProperties {
    AccessLogSetting?: AccessLogSetting;
    CacheClusterEnabled?: Value<boolean>;
    CacheClusterSize?: Value<string>;
    CanarySetting?: CanarySetting;
    ClientCertificateId?: Value<string>;
    DeploymentId?: Value<string>;
    Description?: Value<string>;
    DocumentationVersion?: Value<string>;
    MethodSettings?: List<MethodSetting>;
    RestApiId: Value<string>;
    StageName?: Value<string>;
    Tags?: List<ResourceTag>;
    TracingEnabled?: Value<boolean>;
    Variables?: {
        [key: string]: Value<string>;
    };
}
export default class Stage extends ResourceBase<StageProperties> {
    static CanarySetting: typeof CanarySetting;
    static AccessLogSetting: typeof AccessLogSetting;
    static MethodSetting: typeof MethodSetting;
    constructor(properties: StageProperties);
}
