import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ExecutionControls {
    SsmControls?: SsmControls;
    constructor(properties: ExecutionControls);
}
export declare class RemediationParameterValue {
    ResourceValue?: ResourceValue;
    StaticValue?: StaticValue;
    constructor(properties: RemediationParameterValue);
}
export declare class ResourceValue {
    Value?: Value<string>;
    constructor(properties: ResourceValue);
}
export declare class SsmControls {
    ErrorPercentage?: Value<number>;
    ConcurrentExecutionRatePercentage?: Value<number>;
    constructor(properties: SsmControls);
}
export declare class StaticValue {
    Values?: List<Value<string>>;
    constructor(properties: StaticValue);
}
export interface RemediationConfigurationProperties {
    TargetVersion?: Value<string>;
    ExecutionControls?: ExecutionControls;
    Parameters?: {
        [key: string]: any;
    };
    TargetType: Value<string>;
    ConfigRuleName: Value<string>;
    ResourceType?: Value<string>;
    RetryAttemptSeconds?: Value<number>;
    MaximumAutomaticAttempts?: Value<number>;
    TargetId: Value<string>;
    Automatic?: Value<boolean>;
}
export default class RemediationConfiguration extends ResourceBase<RemediationConfigurationProperties> {
    static ExecutionControls: typeof ExecutionControls;
    static RemediationParameterValue: typeof RemediationParameterValue;
    static ResourceValue: typeof ResourceValue;
    static SsmControls: typeof SsmControls;
    static StaticValue: typeof StaticValue;
    constructor(properties: RemediationConfigurationProperties);
}
