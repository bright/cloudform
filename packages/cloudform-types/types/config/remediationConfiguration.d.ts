import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceValue {
    Value?: Value<string>;
    constructor(properties: ResourceValue);
}
export declare class StaticValue {
    Values?: List<Value<string>>;
    constructor(properties: StaticValue);
}
export declare class RemediationParameterValue {
    ResourceValue?: ResourceValue;
    StaticValue?: StaticValue;
    constructor(properties: RemediationParameterValue);
}
export interface RemediationConfigurationProperties {
    TargetVersion?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    TargetType: Value<string>;
    ConfigRuleName: Value<string>;
    ResourceType?: Value<string>;
    TargetId: Value<string>;
}
export default class RemediationConfiguration extends ResourceBase<RemediationConfigurationProperties> {
    static ResourceValue: typeof ResourceValue;
    static StaticValue: typeof StaticValue;
    static RemediationParameterValue: typeof RemediationParameterValue;
    constructor(properties: RemediationConfigurationProperties);
}
