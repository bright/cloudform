import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ApiStageProperties {
    ApiId?: Value<string>;
    Stage?: Value<string>;
}
export declare class ApiStage extends ResourceBase {
    constructor(properties: ApiStageProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ThrottleSettingsProperties {
    BurstLimit?: Value<number>;
    RateLimit?: Value<number>;
}
export declare class ThrottleSettings extends ResourceBase {
    constructor(properties: ThrottleSettingsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface QuotaSettingsProperties {
    Limit?: Value<number>;
    Offset?: Value<number>;
    Period?: Value<string>;
}
export declare class QuotaSettings extends ResourceBase {
    constructor(properties: QuotaSettingsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UsagePlanProperties {
    ApiStages?: List<ApiStage>;
    Description?: Value<string>;
    Quota?: QuotaSettings;
    Throttle?: ThrottleSettings;
    UsagePlanName?: Value<string>;
}
export default class UsagePlan extends ResourceBase {
    constructor(properties: UsagePlanProperties, dependsOn?: Value<string> | Value<string>[]);
}
