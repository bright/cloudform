import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OrganizationAggregationSource {
    AllAwsRegions?: Value<boolean>;
    AwsRegions?: List<Value<string>>;
    RoleArn: Value<string>;
    constructor(properties: OrganizationAggregationSource);
}
export declare class AccountAggregationSource {
    AllAwsRegions?: Value<boolean>;
    AwsRegions?: List<Value<string>>;
    AccountIds: List<Value<string>>;
    constructor(properties: AccountAggregationSource);
}
export interface ConfigurationAggregatorProperties {
    AccountAggregationSources?: List<AccountAggregationSource>;
    ConfigurationAggregatorName: Value<string>;
    OrganizationAggregationSource?: OrganizationAggregationSource;
}
export default class ConfigurationAggregator extends ResourceBase<ConfigurationAggregatorProperties> {
    static OrganizationAggregationSource: typeof OrganizationAggregationSource;
    static AccountAggregationSource: typeof AccountAggregationSource;
    constructor(properties: ConfigurationAggregatorProperties);
}
