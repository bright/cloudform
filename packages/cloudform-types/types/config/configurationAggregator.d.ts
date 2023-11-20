import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccountAggregationSource {
    AllAwsRegions?: Value<boolean>;
    AwsRegions?: List<Value<string>>;
    AccountIds: List<Value<string>>;
    constructor(properties: AccountAggregationSource);
}
export declare class OrganizationAggregationSource {
    AllAwsRegions?: Value<boolean>;
    AwsRegions?: List<Value<string>>;
    RoleArn: Value<string>;
    constructor(properties: OrganizationAggregationSource);
}
export interface ConfigurationAggregatorProperties {
    AccountAggregationSources?: List<AccountAggregationSource>;
    ConfigurationAggregatorName?: Value<string>;
    OrganizationAggregationSource?: OrganizationAggregationSource;
    Tags?: List<ResourceTag>;
}
export default class ConfigurationAggregator extends ResourceBase<ConfigurationAggregatorProperties> {
    static AccountAggregationSource: typeof AccountAggregationSource;
    static OrganizationAggregationSource: typeof OrganizationAggregationSource;
    constructor(properties?: ConfigurationAggregatorProperties);
}
