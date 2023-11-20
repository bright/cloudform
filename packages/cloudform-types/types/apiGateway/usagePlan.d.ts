import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApiStage {
    Stage?: Value<string>;
    ApiId?: Value<string>;
    Throttle?: {
        [key: string]: ThrottleSettings;
    };
    constructor(properties: ApiStage);
}
export declare class QuotaSettings {
    Period?: Value<string>;
    Limit?: Value<number>;
    Offset?: Value<number>;
    constructor(properties: QuotaSettings);
}
export declare class ThrottleSettings {
    BurstLimit?: Value<number>;
    RateLimit?: Value<number>;
    constructor(properties: ThrottleSettings);
}
export interface UsagePlanProperties {
    Description?: Value<string>;
    Quota?: QuotaSettings;
    ApiStages?: List<ApiStage>;
    Tags?: List<ResourceTag>;
    Throttle?: ThrottleSettings;
    UsagePlanName?: Value<string>;
}
export default class UsagePlan extends ResourceBase<UsagePlanProperties> {
    static ApiStage: typeof ApiStage;
    static QuotaSettings: typeof QuotaSettings;
    static ThrottleSettings: typeof ThrottleSettings;
    constructor(properties?: UsagePlanProperties);
}
