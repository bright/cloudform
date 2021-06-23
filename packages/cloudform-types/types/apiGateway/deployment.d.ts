import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class AccessLogSetting {
    DestinationArn?: Value<string>;
    Format?: Value<string>;
    constructor(properties: AccessLogSetting);
}
export declare class DeploymentCanarySettings {
    PercentTraffic?: Value<number>;
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    UseStageCache?: Value<boolean>;
    constructor(properties: DeploymentCanarySettings);
}
export declare class StageDescription {
    AccessLogSetting?: AccessLogSetting;
    CacheClusterEnabled?: Value<boolean>;
    CacheClusterSize?: Value<string>;
    CacheDataEncrypted?: Value<boolean>;
    CacheTtlInSeconds?: Value<number>;
    CachingEnabled?: Value<boolean>;
    CanarySetting?: CanarySetting;
    ClientCertificateId?: Value<string>;
    DataTraceEnabled?: Value<boolean>;
    Description?: Value<string>;
    DocumentationVersion?: Value<string>;
    LoggingLevel?: Value<string>;
    MethodSettings?: List<MethodSetting>;
    MetricsEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    ThrottlingBurstLimit?: Value<number>;
    ThrottlingRateLimit?: Value<number>;
    TracingEnabled?: Value<boolean>;
    Variables?: {
        [key: string]: Value<string>;
    };
    constructor(properties: StageDescription);
}
export declare class CanarySetting {
    PercentTraffic?: Value<number>;
    StageVariableOverrides?: {
        [key: string]: Value<string>;
    };
    UseStageCache?: Value<boolean>;
    constructor(properties: CanarySetting);
}
export interface DeploymentProperties {
    DeploymentCanarySettings?: DeploymentCanarySettings;
    Description?: Value<string>;
    RestApiId: Value<string>;
    StageDescription?: StageDescription;
    StageName?: Value<string>;
}
export default class Deployment extends ResourceBase<DeploymentProperties> {
    static MethodSetting: typeof MethodSetting;
    static AccessLogSetting: typeof AccessLogSetting;
    static DeploymentCanarySettings: typeof DeploymentCanarySettings;
    static StageDescription: typeof StageDescription;
    static CanarySetting: typeof CanarySetting;
    constructor(properties: DeploymentProperties);
}
