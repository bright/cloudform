import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessLogSetting {
    Format?: Value<string>;
    DestinationArn?: Value<string>;
    constructor(properties: AccessLogSetting);
}
export declare class CanarySetting {
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    PercentTraffic?: Value<number>;
    UseStageCache?: Value<boolean>;
    constructor(properties: CanarySetting);
}
export declare class DeploymentCanarySettings {
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    PercentTraffic?: Value<number>;
    UseStageCache?: Value<boolean>;
    constructor(properties: DeploymentCanarySettings);
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
export declare class StageDescription {
    CacheTtlInSeconds?: Value<number>;
    Description?: Value<string>;
    LoggingLevel?: Value<string>;
    CanarySetting?: CanarySetting;
    ThrottlingRateLimit?: Value<number>;
    ClientCertificateId?: Value<string>;
    Variables?: {
        [key: string]: Value<string>;
    };
    DocumentationVersion?: Value<string>;
    CacheDataEncrypted?: Value<boolean>;
    DataTraceEnabled?: Value<boolean>;
    ThrottlingBurstLimit?: Value<number>;
    CachingEnabled?: Value<boolean>;
    TracingEnabled?: Value<boolean>;
    MethodSettings?: List<MethodSetting>;
    AccessLogSetting?: AccessLogSetting;
    CacheClusterSize?: Value<string>;
    MetricsEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    CacheClusterEnabled?: Value<boolean>;
    constructor(properties: StageDescription);
}
export interface DeploymentProperties {
    Description?: Value<string>;
    StageDescription?: StageDescription;
    StageName?: Value<string>;
    RestApiId: Value<string>;
    DeploymentCanarySettings?: DeploymentCanarySettings;
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    static AccessLogSetting: typeof AccessLogSetting;
    static CanarySetting: typeof CanarySetting;
    static DeploymentCanarySettings: typeof DeploymentCanarySettings;
    static MethodSetting: typeof MethodSetting;
    static StageDescription: typeof StageDescription;
    constructor(properties: DeploymentProperties);
}
